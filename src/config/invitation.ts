export const invitation = {
  graduateName: "Nguyễn Như Ngọc",
  title: "Lễ Tốt Nghiệp",
  invitationMessage:
    'Cái được gọi là:" Một đêm thành danh" \n Thực chất là: " Nghìn đêm nỗ lực"',
  ctaLabel: "Xem thông tin buổi lễ",
  date: "Thứ 7, 27/06/2026",
  time: "15:30",
  university: "Trường Đại học Giao thông vận tải TPHCM",
  address: "Số 02, Võ Oanh, Phường 25, Quận Bình Thạnh, TP.HCM",
  mapsUrl: "https://maps.app.goo.gl/uoVSTRz95GDHLybW9",
  personalMessage:
    "Tốt nghiệp vừa là sự kết thúc của niềm vui trong quá khứ, vừa là khởi đầu hạnh phúc trong tương lai. Nếu niềm hạnh phúc có hình dạng, chắc chắn sẽ là ánh nắng và tiếng cười ngày hôm ấy.",
  thankYouMessage: "Cảm ơn vì đã là một phần thật đẹp trong hành trình này.",
  sections: {
    event: "Thông tin buổi lễ",
    gallery: "Tôi mong rằng, ngày hôm đó tôi và bạn sẽ có chung trong một khung hình.",
    location: "Check map nha!",
  },
  eventCards: {
    date: "Ngày",
    time: "Thời gian",
    location: "Địa điểm",
  },
  mapsLabel: "Mở Google Maps",
  music: {
    src: "/audio/background.wav",
    playLabel: "Bật nhạc nền",
    pauseLabel: "Tắt nhạc nền",
  },
  heroImage: "/images/photo-1.jpg",
  photos: [
    "/images/photo-2.jpg",
    "/images/photo-3.jpg",
    "/images/photo-4.jpg",
    "/images/photo-5.jpg",
  ],
};

export type Invitation = typeof invitation;
