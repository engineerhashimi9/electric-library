export const tabs = [
  { label: "Currently Reading", count: 3, active: true },
  { label: "Completed Archive", count: 28 },
  { label: "Want to Read", count: 16 },
  { label: "Highlights & Marginalia", count: 42 },
  { label: "Loan & Transfer History" },
];

// type: ebook | loan | audio
export const reading = [
  {
    type: "ebook",
    badge: "E-Book",
    genre: "SPECULATIVE FICTION",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    infoPrimary: "3 Scholarly Notes",
    infoSecondary: "~22m reading pace left",
    progressLabel: "Page 214 of 312",
    percent: 68,
    cta: "Resume Reading",
    cover: "klara-reading.png",
  
  },
  {
    type: "loan",
    badge: "Loan",
    genre: "OXFORD ARCHIVE CONSORTIUM",
    title: "The Secret History",
    author: "Donna Tartt",
    infoPrimary: "Loan expires in 8 days",
    infoSecondary: "Synchronized to folio slate",
    progressLabel: "Page 190 of 559",
    percent: 34,
    cta: "Resume Reading",
    cover: "secret-history-reading.png",
  },
  {
    type: "audio",
    badge: "Audio",
    genre: "MAGIC REALISM",
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    infoPrimary: "1.2x Narrator Velocity",
    infoSecondary: "Ch. 34: The Forest Gate",
    progressLabel: "11h 10m / 13h 05m",
    percent: 85,
    cta: "Listen Now",
    cover: "kafka-reading.png",
  },
];

export const completed = [
  {
    finished: "FINISHED OCT 24, 2024",
    title: "Invisible Cities",
    author: "Italo Calvino",
    rating: 5,
    annotations: "18 Annotations",
    cover: "invisible-cities-small.png",
  },
  {
    finished: "FINISHED OCT 12, 2024",
    title: "Drive Your Plow Over the Bones of the Dead",
    author: "Olga Tokarczuk",
    rating: 4,
    annotations: "9 Annotations",
    cover: "plow-small.png",
  },
];

export const annotations = [
  {
    ref: "p. 142 • Klara and the Sun",
    when: "Highlighted 2 days ago",
    quote:
      "“There was something very special, but it wasn’t inside Klara. It was inside those that loved her.”",
    note: "Parallels Descartes' concept of externalized subject-object reverence.",
  },
  {
    ref: "p. 88 • Invisible Cities",
    when: "Highlighted Oct 21",
    quote:
      "“You take delight not in a city’s seven or seventy wonders, but in the answer it gives to a question of yours.”",
    note: "Phenomenological geography; Marco Polo as epistemological surveyor.",
  },
];
export const img = (name) => `./${name}`;
