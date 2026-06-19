import { invitation } from "./config/invitation";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { EventInfo } from "./components/EventInfo";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Message } from "./components/Message";

export default function App() {
  return (
    <main className="invitation-shell relative min-h-screen overflow-hidden bg-ivory text-ink">
      <BackgroundMusic
        src={invitation.music.src}
        playLabel={invitation.music.playLabel}
        pauseLabel={invitation.music.pauseLabel}
      />
      <Hero invitation={invitation} />
      <EventInfo invitation={invitation} />
      <Gallery
        title={invitation.sections.gallery}
        photos={invitation.photos}
        graduateName={invitation.graduateName}
      />
      <Message message={invitation.personalMessage} />
      <Location invitation={invitation} />
      <Footer message={invitation.thankYouMessage} />
    </main>
  );
}
