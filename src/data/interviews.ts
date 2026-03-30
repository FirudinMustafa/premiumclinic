export interface Interview {
  id: number;
  title: string;
  youtubeId: string;
  thumbnail: string;
  date: string;
  duration: string;
  description: string;
}

export const interviews: Interview[] = [
  {
    id: 1,
    title: "Elnarə Abdullayeva sağlamlığını Premium Clinic-ə əmanət etdi!",
    youtubeId: "kLrYgCXVERQ",
    thumbnail: "https://i.ytimg.com/vi/kLrYgCXVERQ/maxresdefault.jpg",
    date: "2024-11-02",
    duration: "2:27",
    description: "Elnarə xanıma xoş və səmimi sözləri üçün məmnunluq hissi ilə təşəkkür edirik! Premium Clinic! Düzgün müalicə, sağlam gələcək!",
  },
];
