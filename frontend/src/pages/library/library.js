export const tabs = [
  { label: { en: "Currently Reading", fa: "در حال مطالعه" }, count: 3, active: true },
  { label: { en: "Completed Archive", fa: "آرشیو تکمیل‌شده" }, count: 28 },
  { label: { en: "Want to Read", fa: "می‌خواهم بخوانم" }, count: 16 },
  { label: { en: "Highlights & Marginalia", fa: "نشانه‌ها و حاشیه‌نویسی‌ها" }, count: 42 },
  { label: { en: "Loan & Transfer History", fa: "تاریخچه امانت و انتقال" } },
];

// type: ebook | loan | audio
export const reading = [
  {
    type: "ebook",
    badge: { en: "E-Book", fa: "کتاب الکترونیک" },
    genre: { en: "SPECULATIVE FICTION", fa: "داستان‌های نظری" },
    title: { en: "Klara and the Sun", fa: "کلارا و خورشید" },
    author: { en: "Kazuo Ishiguro", fa: "کازوئو ایشی‌گورو" },
    infoPrimary: { en: "3 Scholarly Notes", fa: "۳ یادداشت علمی" },
    infoSecondary: { en: "~22m reading pace left", fa: "حدود ۲۲ دقیقه تا پایان" },
    progressLabel: { en: "Page 214 of 312", fa: "صفحه ۲۱۴ از ۳۱۲" },
    percent: 68,
    cta: { en: "Resume Reading", fa: "ادامه مطالعه" },
    cover: "klara-reading.png",
  },
  {
    type: "loan",
    badge: { en: "Loan", fa: "امانت" },
    genre: { en: "OXFORD ARCHIVE CONSORTIUM", fa: "کنسرسیوم آرشیو آکسفورد" },
    title: { en: "The Secret History", fa: "تاریخ مخفی" },
    author: { en: "Donna Tartt", fa: "دونا تارت" },
    infoPrimary: { en: "Loan expires in 8 days", fa: "۸ روز تا پایان امانت" },
    infoSecondary: { en: "Synchronized to folio slate", fa: "همگام‌سازی‌شده با لوح دیجیتال" },
    progressLabel: { en: "Page 190 of 559", fa: "صفحه ۱۹۰ از ۵۵۹" },
    percent: 34,
    cta: { en: "Resume Reading", fa: "ادامه مطالعه" },
    cover: "secret-history-reading.png",
  },
  {
    type: "audio",
    badge: { en: "Audio", fa: "صوتی" },
    genre: { en: "MAGIC REALISM", fa: "رئالیسم جادویی" },
    title: { en: "Kafka on the Shore", fa: "کافکا در کرانه" },
    author: { en: "Haruki Murakami", fa: "هاروکی موراکامی" },
    infoPrimary: { en: "1.2x Narrator Velocity", fa: "سرعت خوانش ۱.۲ برابر" },
    infoSecondary: { en: "Ch. 34: The Forest Gate", fa: "فصل ۳۴: دروازه جنگل" },
    progressLabel: { en: "11h 10m / 13h 05m", fa: "۱۱ ساعت و ۱۰ دقیقه / ۱۳ ساعت و ۵ دقیقه" },
    percent: 85,
    cta: { en: "Listen Now", fa: "شنیدن کتاب" },
    cover: "kafka-reading.png",
  },
];

export const completed = [
  {
    finished: { en: "FINISHED OCT 24, 2024", fa: "پایان‌یافته در ۲۴ اکتبر ۲۰۲۴" },
    title: { en: "Invisible Cities", fa: "شهرهای نامرئی" },
    author: { en: "Italo Calvino", fa: "ایتالو کالوینو" },
    rating: 5,
    annotations: { en: "18 Annotations", fa: "۱۸ حاشیه‌نویسی" },
    cover: "invisible-cities-small.png",
  },
  {
    finished: { en: "FINISHED OCT 12, 2024", fa: "پایان‌یافته در ۱۲ اکتبر ۲۰۲۴" },
    title: { en: "Drive Your Plow Over the Bones of the Dead", fa: "با گاوآهن خود بر استخوان‌های مردگان بران" },
    author: { en: "Olga Tokarczuk", fa: "اولگا توکارچوک" },
    rating: 4,
    annotations: { en: "9 Annotations", fa: "۹ حاشیه‌نویسی" },
    cover: "plow-small.png",
  },
];

export const annotations = [
  {
    ref: { en: "p. 142 • Klara and the Sun", fa: "ص. ۱۴۲ • کلارا و خورشید" },
    when: { en: "Highlighted 2 days ago", fa: "۲ روز پیش نشانه‌گذاری شد" },
    quote: {
      en: "“There was something very special, but it wasn’t inside Klara. It was inside those that loved her.”",
      fa: "«چیز بسیار ویژه‌ای وجود داشت، اما درون کلارا نبود. درون کسانی بود که او را دوست داشتند.»",
    },
    note: {
      en: "Parallels Descartes' concept of externalized subject-object reverence.",
      fa: "مشابه دیدگاه دکارت پیرامون بازشناسی ارزش سوژه و ابژه.",
    },
  },
  {
    ref: { en: "p. 88 • Invisible Cities", fa: "ص. ۸۸ • شهرهای نامرئی" },
    when: { en: "Highlighted Oct 21", fa: "نشانه‌گذاری در ۲۱ اکتبر" },
    quote: {
      en: "“You take delight not in a city’s seven or seventy wonders, but in the answer it gives to a question of yours.”",
      fa: "«لذت بردن تو از یک شهر به خاطر عجایب هفت‌گانه یا هفتادگانه‌اش نیست، بلکه به خاطر پاسخی است که به پرسشی از تو می‌دهد.»",
    },
    note: {
      en: "Phenomenological geography; Marco Polo as epistemological surveyor.",
      fa: "جغرافیای پدیدارشناختی؛ مارکو پولو به مثابه پژوهشگر معرفت‌شناختی.",
    },
  },
];
export const img = (name) => `./${name}`;
