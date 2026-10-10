// Footer.jsx — React + Tailwind CSS
// فونت‌ها را در index.html (داخل <head>) اضافه کن:
// <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&family=Newsreader:wght@500;600&display=swap" rel="stylesheet">

const columns = [
  {
    title: "Curated Archives",
    links: [
      "First Editions & Manuscripts",
      "Classical Philosophy Folios",
      "19th Century Naturalists",
      "Illuminated Monographs",
      "Epistolary Collections",
    ],
  },
  {
    title: "Reader Utilities",
    links: [
      "Marginalia Sync Engine",
      "BibTeX & Zotero Export",
      "Typography Stacks & Kerning",
      "Offline Reading Slates",
      "Reading Pace Diagnostics",
    ],
  },
  {
    title: "Guild & Charter",
    links: [
      "Scholarly Society Charter",
      "Academic Peer Review",
      "Curator Residency Grants",
      "Public Domain Restorations",
      "Community Guidelines",
    ],
  },
];

const legalLinks = [
  "Archive Rights",
  "Privacy Policy",
  "Preservation Colophon",
];

const serif = "font-['Newsreader',Georgia,serif]";
const sans = "font-['Plus_Jakarta_Sans',sans-serif]";

export default function Footer({className}) {
  return (
    <footer className={`${sans} ${className} bg-[#f3f2ee] px-5 py-6 sm:px-12 sm:py-7`}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3
              className={`${serif} mb-3.5 text-[15px] font-semibold text-[#1f4a3a]`}
            >
              {col.title}
            </h3>
            <ul className="grid gap-[7px]">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[10.5px] leading-normal text-[#55564f] hover:text-[#1f4a3a] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4a3a]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3
            className={`${serif} mb-3.5 text-[15px] font-semibold text-[#1f4a3a]`}
          >
            Legal &amp; Colophon
          </h3>
          <p className="text-[10.5px] leading-normal text-[#55564f]">
            Set in Newsreader and Plus Jakarta Sans. Preserved for universal
            scholarly inquiry under digital perpetual heritage custody.
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[9.5px] font-bold leading-normal text-[#2b2c28] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4a3a]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-[1200px] flex-col items-start justify-between gap-4 text-[9.5px] text-[#55564f] sm:flex-row sm:items-center">
        <p>
          © 2024 Lumina Digital Library Foundation. All scholarly rights
          reserved.
        </p>
        <p className="text-[8.5px] font-bold tracking-[0.04em] text-[#2b2c28]">
          VOL. IV • EDITION 2024.11
        </p>
      </div>
    </footer>
  );
}
