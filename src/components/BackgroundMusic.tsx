import { Volume2, VolumeX } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type BackgroundMusicProps = {
  src: string;
  playLabel: string;
  pauseLabel: string;
};

const DEFAULT_VOLUME = 0.025;

export function BackgroundMusic({ src, playLabel, pauseLabel }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const reduceMotion = useReducedMotion();
  const [desiredPlaying, setDesiredPlaying] = useState(true);
  const [isActuallyPlaying, setIsActuallyPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !desiredPlaying) {
      return;
    }

    let didCleanup = false;

    const tryPlay = async () => {
      if (didCleanup || !audioRef.current || !desiredPlaying) {
        return;
      }

      audioRef.current.volume = volume;

      try {
        await audioRef.current.play();
        setIsActuallyPlaying(true);
        removeInteractionListeners();
      } catch {
        setIsActuallyPlaying(false);
      }
    };

    const handleFirstInteraction = () => {
      void tryPlay();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    audio.volume = volume;
    void tryPlay();

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      didCleanup = true;
      removeInteractionListeners();
    };
  }, [desiredPlaying, volume]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = volume;

    if (desiredPlaying) {
      audio.pause();
      setDesiredPlaying(false);
      setIsActuallyPlaying(false);
      return;
    }

    setDesiredPlaying(true);

    try {
      await audio.play();
      setIsActuallyPlaying(true);
    } catch {
      setIsActuallyPlaying(false);
    }
  };

  const updateVolume = (nextVolume: number) => {
    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  };

  const isMusicOn = desiredPlaying || isActuallyPlaying;

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" aria-hidden="true" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-panel fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-teal-50 px-2.5 py-2 shadow-card"
      >
        <motion.button
          type="button"
          onClick={toggleMusic}
          whileHover={reduceMotion ? undefined : { y: -1, scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-pearl transition-all duration-300 ease-out hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-100"
          aria-label={isMusicOn ? pauseLabel : playLabel}
          title={isMusicOn ? pauseLabel : playLabel}
        >
          {isMusicOn ? (
            <Volume2 aria-hidden="true" className="h-5 w-5" />
          ) : (
            <VolumeX aria-hidden="true" className="h-5 w-5" />
          )}
        </motion.button>
        <label className="sr-only" htmlFor="music-volume">
          Âm lượng nhạc nền
        </label>
        <input
          id="music-volume"
          type="range"
          min="0"
          max="0.2"
          step="0.01"
          value={volume}
          onChange={(event) => updateVolume(Number(event.target.value))}
          className="h-2 w-16 accent-teal-700 sm:w-20"
        />
      </motion.div>
    </>
  );
}
