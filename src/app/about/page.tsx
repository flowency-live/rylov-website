import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rhyan Lovell",
  description: "Learn about Rhyan Lovell - session drummer based in Cheshire, UK. Credits include Grammy Award-winning producer Matt Lawrence and more.",
};

const credits = [
  "Matt Lawrence (Amy Winehouse, Adele, Lady Gaga, George Michael, Beyonce, Kylie Minogue, Bjork)",
  "Dana McKeon",
  "Izzy Thomas",
  "Nefera",
  "Shapla Salique",
  "Wyse",
  "Jess Edie",
];

const genres = [
  "Pop / Rock",
  "R&B / Hip-Hop / Soul",
  "Funk",
  "Country",
  "Latin / Afro-Cuban",
  "Jazz / Fusion",
  "Reggae",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="accent-line mb-6" />
          <h1 className="section-title">About</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Images */}
            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/images/Ryhan1.jpg"
                  alt="Rhyan Lovell"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-burgundy" />
              </div>
              <div className="relative">
                <Image
                  src="/images/live-performance.png"
                  alt="Rhyan Lovell live performance"
                  width={600}
                  height={400}
                  className="w-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
              </div>
            </div>

            {/* Right Column - Text */}
            <div>
              <p className="body-text mb-6">
                Based in Cheshire, UK, I&apos;m a session drummer specializing in remote recording
                and music transcriptions. With a versatile style honed across multiple genres,
                I bring professional-grade drum tracks to artists and producers worldwide.
              </p>
              <p className="body-text mb-6">
                Working from my fully-equipped home studio, I offer flexible scheduling with
                no time constraints - allowing me to deliver precisely crafted parts that serve
                your music perfectly.
              </p>
              <p className="body-text mb-12">
                Whether you need drums for a single, EP, album, or just a small section of a song,
                I approach every project with the same dedication to musical excellence and attention
                to detail.
              </p>

              {/* Credits */}
              <div className="border-t border-grey-300 pt-8 mb-12">
                <h2 className="font-display text-2xl text-grey-900 mb-6 tracking-wide">
                  CREDITS INCLUDE
                </h2>
                <ul className="space-y-3">
                  {credits.map((credit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-burgundy mt-2 flex-shrink-0" />
                      <span className="text-grey-600">
                        {credit.includes("Matt Lawrence") ? (
                          <>
                            <span className="text-burgundy font-medium">Grammy Award-winning producer</span>
                            <br />
                            {credit}
                          </>
                        ) : (
                          credit
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Genres */}
              <div className="border-t border-grey-300 pt-8">
                <h2 className="font-display text-2xl text-grey-900 mb-6 tracking-wide">
                  GENRES
                </h2>
                <div className="flex flex-wrap gap-3">
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-4 py-2 bg-beige-50 text-grey-700 text-sm border-l-[3px] border-burgundy"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-grey-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-beige-50 mb-6 tracking-tight uppercase">
            Let&apos;s Work Together
          </h2>
          <p className="text-grey-400 mb-8">
            Ready to add professional drums to your project?
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
