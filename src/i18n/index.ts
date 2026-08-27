export const LANGUAGES = {
  en: { label: 'English', dir: 'ltr', title: 'Muhammad Samir Assawalhy' },
  ar: { label: 'العربية', dir: 'rtl', title: 'محمد سمير الصوالحي' },
} as const;

export type Lang = keyof typeof LANGUAGES;

const translations: Record<string, { en: string; ar: string }> = {
  whatIWorkWith: {
    en: 'What I work with',
    ar: 'ما أعمل به',
  },
  experienceTitle: {
    en: 'Experience',
    ar: 'الخبرات',
  },
  voluntaryTitle: {
    en: 'Voluntary Work',
    ar: 'العمل التطوعي',
  },
  certificationsTitle: {
    en: 'Certifications',
    ar: 'الشهادات',
  },
  honorsTitle: {
    en: 'Honors & Awards',
    ar: 'الجوائز والتكريمات',
  },
  projectsTitle: {
    en: 'Projects',
    ar: 'المشاريع',
  },
  seminarsTitle: {
    en: 'Seminars & Talks',
    ar: 'اللقاءات والندوات',
  },
  blogsTitle: {
    en: 'Blog',
    ar: 'المدونة',
  },
  viewAll: {
    en: 'View all',
    ar: 'عرض الكل',
  },
  localTimeLabel: {
    en: 'Local time:',
    ar: 'التوقيت المحلي:',
  },
  menuTitle: {
    en: 'Menu',
    ar: 'القائمة',
  },
  learnMore: {
    en: 'Learn More',
    ar: 'اعرف أكثر',
  },
  builtUsing: {
    en: 'Built with',
    ar: 'بُني باستخدام',
  },
  takeALookAtMy: {
    en: 'Take a look at my',
    ar: 'ألقِ نظرة على',
  },
  resume: {
    en: 'Resume',
    ar: 'السيرة الذاتية',
  },
  downloadResume: {
    en: 'Download Resume',
    ar: 'تحميل السيرة الذاتية',
  },
  startConversation: {
    en: 'Start a conversation',
    ar: 'ابدأ محادثة',
  },
  recentWriting: {
    en: 'Recent writing',
    ar: 'أحدث ما أكتب',
  },
  readPost: {
    en: 'Read post',
    ar: 'اقرأ المقال',
  },
  noPosts: {
    en: 'No posts here yet. I am still shaping the next write-up.',
    ar: 'لا توجد مقالات هنا بعد. أعمل على تشكيل التدوينة القادمة.',
  },
  contactLinks: {
    en: 'Contact links',
    ar: 'روابط التواصل',
  },
  shortProfile: {
    en: 'Short profile',
    ar: 'نبذة مختصرة',
  },
};

export function t(key: string, lang: Lang): string {
  const entry = (translations as Record<string, Record<string, string>>)[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}

export function getLangFromPath(path: string): Lang {
  const match = path.match(/^\/(en|ar)(\/|$)/);
  return match ? (match[1] as Lang) : 'en';
}
