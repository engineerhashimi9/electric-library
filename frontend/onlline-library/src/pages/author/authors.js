export const categories = ["All Authors", "Modernist", "Magical Realism", "Philosophy", "Contemporary", "Poetry & Drama"];

export const regions = ["All Regions", "Europe", "Latin America", "North America", "Asia", "Persian & Afghan", "Classical World"];

export const sortOptions = ["Most Works", "Most Followed", "Name A–Z", "Birth Year"];

export const formatLife = (a) => (a.died ? `${a.born} – ${a.died}` : `b. ${a.born}`);

// داده‌های نمونه — با داده واقعی خودتان جایگزین کنید
export const authors = [
  { id: 1, name: "Virginia Woolf", role: "Modernist & Bloomsbury", bio: "Pioneered stream of consciousness, exploring structural interiority and temporal perception.", works: 18, followers: 12400, born: 1882, died: 1941, country: "United Kingdom", region: "Europe", categories: ["Modernist"], photo: "woolf.png" },
  { id: 2, name: "Jorge Luis Borges", role: "Philosophical Fantasist", bio: "Explored infinity, infinite libraries, labyrinths, mirrors, and metaphysical riddles.", works: 24, followers: 15800, born: 1899, died: 1986, country: "Argentina", region: "Latin America", categories: ["Philosophy"], photo: "borges.png" },
  { id: 3, name: "Gabriel García Márquez", role: "Magical Realism Titan", bio: "Wove mythic generational epics set against the vibrant landscapes of Latin America.", works: 14, followers: 21300, born: 1927, died: 2014, country: "Colombia", region: "Latin America", categories: ["Magical Realism"], photo: "marquez.png" },
  { id: 4, name: "Umberto Eco", role: "Semiotician & Novelist", bio: "Master of medieval scholastic mysteries, literary cryptography, and philosophical satire.", works: 16, followers: 9700, born: 1932, died: 2016, country: "Italy", region: "Europe", categories: ["Philosophy"], photo: "eco.png" },
  { id: 5, name: "Italo Calvino", role: "Architect of Invisible Worlds", bio: "Fused folklore, combinatorics, and playful structure into luminous experimental fiction.", works: 12, followers: 11200, born: 1923, died: 1985, country: "Italy", region: "Europe", categories: ["Philosophy"], photo: "calvino.png" },
  { id: 6, name: "Olga Tokarczuk", role: "Nobel Laureate of Polish Letters", bio: "Weaves ecological ethics, myth, and mystery into expansive, digressive narratives.", works: 9, followers: 8300, born: 1962, country: "Poland", region: "Europe", categories: ["Contemporary"], photo: "tokarczuk.png" },
  { id: 7, name: "Sylvia Plath", role: "Confessional Poet", bio: "Wrote searing, precise verse and a landmark novel of interior life.", works: 7, followers: 17600, born: 1932, died: 1963, country: "United States", region: "North America", categories: ["Poetry & Drama"], photo: "plath.png" },
  { id: 8, name: "Haruki Murakami", role: "Contemporary Fabulist", bio: "Blends dreamlike surrealism with quiet, melancholy modern life.", works: 15, followers: 24900, born: 1949, country: "Japan", region: "Asia", categories: ["Contemporary", "Magical Realism"], photo: "murakami.png" },
  { id: 9, name: "Kazuo Ishiguro", role: "Chronicler of Memory", bio: "Explores memory, restraint, and self-deception in elegantly spare prose.", works: 8, followers: 13100, born: 1954, country: "United Kingdom", region: "Europe", categories: ["Contemporary"], photo: "ishiguro.png" },
  { id: 10, name: "Donna Tartt", role: "Dark Academia Novelist", bio: "Crafts slow-burning, richly textured stories of obsession in closed intellectual worlds.", works: 3, followers: 19400, born: 1963, country: "United States", region: "North America", categories: ["Contemporary"], photo: "tartt.png" },
  { id: 11, name: "Sally Rooney", role: "Voice of Millennial Realism", bio: "Renders intimacy and class with clean, conversational precision.", works: 4, followers: 10800, born: 1991, country: "Ireland", region: "Europe", categories: ["Contemporary"], photo: "rooney.png" },
  { id: 12, name: "Marcus Aurelius", role: "Stoic Emperor-Philosopher", bio: "His private Meditations remain a touchstone of Stoic practice and self-governance.", works: 1, followers: 22700, born: 121, died: 180, country: "Roman Empire", region: "Classical World", categories: ["Philosophy"], photo: "aurelius.png" },
  { id: 13, name: "Jalāl ad-Dīn Rumi", role: "Mystic Poet of Balkh", bio: "Thirteenth-century Persian poet whose Masnavi and ghazals shaped the language of mystical love.", works: 6, followers: 26800, born: 1207, died: 1273, country: "Persia", region: "Persian & Afghan", categories: ["Poetry & Drama", "Philosophy"], photo: "rumi.png" },
  { id: 14, name: "Omar Khayyam", role: "Polymath & Quatrain Master", bio: "Mathematician, astronomer and poet remembered for the reflective quatrains of the Rubaiyat.", works: 3, followers: 14900, born: 1048, died: 1131, country: "Persia", region: "Persian & Afghan", categories: ["Poetry & Drama", "Philosophy"], photo: "khayyam.png" },
  { id: 15, name: "Khaled Hosseini", role: "Voice of the Afghan Diaspora", bio: "Novelist whose stories trace friendship, exile and redemption across Afghanistan and beyond.", works: 4, followers: 18200, born: 1965, country: "United States", region: "Persian & Afghan", categories: ["Contemporary"], photo: "hosseini.png" },
];
