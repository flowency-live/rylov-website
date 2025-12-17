import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recording | Rhyan Lovell",
  description: "Professional remote drum recording services. Get studio-quality drum tracks delivered to your inbox with up to 3 revisions included.",
};

const process = [
  {
    step: "01",
    title: "Send Your Track",
    description: "Share your song in any format - rough demo, polished mix, or anything in between.",
  },
  {
    step: "02",
    title: "Listen & Craft",
    description: "I carefully consider parts that tie-in instrumentally, emotionally, and lyrically to your song.",
  },
  {
    step: "03",
    title: "Track Drums",
    description: "Professional recording in my home studio with no time constraints or limitations.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Receive your drum tracks, usually within a week. Up to 3 revisions included.",
  },
];

const equipment = {
  drums: [
    "Mapex Orion Drums",
    "Gretsch Catalina",
    '14" x 5" Ludwig LM400 snare',
  ],
  cymbals: [
    '14" Zildjian A Custom Mastersound hihats',
    '17" Zildjian A Custom medium crash',
    '18" Meinl Byzance traditional crash',
    '19" Zildjian A Custom Projection Crash',
    '20" Zildjian A Custom medium ride',
    '21" K Custom Special Dry ride',
    '19" K Custom Special Dry crash',
    '14" K Custom Special Dry hihats',
    '6" Zildjian Avedis splash',
    '8" Zildjian A Custom splash',
    '10" Zildjian K splash',
    "Treeworks Chimes",
    "Assorted Percussion",
  ],
  recording: [
    "MacBook Pro M3",
    "Focusrite Scarlett 18i20",
    "Logic Pro",
    "Plugin Alliance plugins",
    "Relab Development LX40 Essentials reverb",
    "Shure drum mics, SM57, AKG P170",
    "Rode NT5 matched pair",
    "Roland SPD SX",
    "Roland snare and kick triggers",
  ],
};

const genres = [
  "Pop / Rock",
  "R&B / Hip-Hop / Soul",
  "Funk",
  "Country",
  "Latin / Afro-Cuban",
  "Jazz / Fusion",
  "Reggae",
];

export default function RecordingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="accent-line mb-6" />
          <h1 className="section-title">Recording</h1>
          <p className="body-text mt-6 max-w-2xl">
            Professional drum tracks recorded from my home studio and delivered to your inbox.
            No studio booking, no time constraints.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl text-grey-900 mb-12 tracking-wide">
            HOW IT WORKS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="bg-beige-50 p-6 border-t-[3px] border-burgundy">
                <span className="font-display text-4xl text-grey-200">{item.step}</span>
                <h3 className="font-display text-xl text-grey-900 mt-4 mb-3 tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-grey-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-grey-900 text-beige-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="accent-line-gold mb-6" />
              <h2 className="font-display text-3xl text-beige-50 mb-8 tracking-wide">
                THE SERVICE
              </h2>
              <p className="text-grey-300 mb-6">
                Working from my home studio, I will write and track drum parts for your song.
                Upon receiving your track, I carefully listen and consider parts that tie-in
                instrumentally, emotionally, and lyrically.
              </p>
              <p className="text-grey-300 mb-6">
                This can be for a single, EP, album, or simply just a small section of a song.
                Given my work being conducted from home, I have no time restraint or limitations
                to work on your project.
              </p>
              <div className="bg-burgundy/20 p-6 border-l-[3px] border-burgundy mt-8">
                <p className="text-beige-100 font-medium mb-2">Up to 3 revisions included</p>
                <p className="text-grey-400 text-sm">
                  Depending on the complexity of the song and material. Jobs are usually completed within a week.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-gold mb-6 tracking-wide">
                GENRES
              </h3>
              <div className="flex flex-wrap gap-3 mb-12">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-2 bg-grey-800 text-grey-300 text-sm border-l-[3px] border-gold"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl text-gold mb-6 tracking-wide">
                EQUIPMENT
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-grey-500 mb-3">Drums</h4>
                  <ul className="space-y-2">
                    {equipment.drums.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-grey-300 text-sm">
                        <span className="w-1 h-1 bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-grey-500 mb-3">Cymbals</h4>
                  <ul className="space-y-2">
                    {equipment.cymbals.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-grey-300 text-sm">
                        <span className="w-1 h-1 bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-grey-500 mb-3">Recording Gear</h4>
                  <ul className="space-y-2">
                    {equipment.recording.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-grey-300 text-sm">
                        <span className="w-1 h-1 bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-burgundy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-beige-50 mb-6 tracking-tight uppercase">
            Ready to Start?
          </h2>
          <p className="text-beige-200 mb-8">
            Send me your track and let&apos;s create something great together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-beige-50 text-grey-900 px-8 py-4 font-display text-lg tracking-wide uppercase hover:bg-gold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
