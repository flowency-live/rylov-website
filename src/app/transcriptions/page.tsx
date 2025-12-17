import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transcriptions | Rhyan Lovell",
  description: "Professional drum transcription services. Get accurate notation for any song - full transcriptions, section analysis, or educational materials.",
};

const services = [
  {
    title: "Full Transcriptions",
    description: "Complete drum notation for entire songs, capturing every nuance, fill, and groove from your favourite tracks.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Section Analysis",
    description: "Detailed breakdowns of specific sections - verses, choruses, bridges, or that killer drum solo you want to learn.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "Educational Materials",
    description: "Custom transcriptions designed for teaching, with annotations explaining techniques and stylistic choices.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function TranscriptionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="accent-line mb-6" />
          <h1 className="section-title">Transcriptions</h1>
          <p className="body-text mt-6 max-w-2xl">
            Accurate drum notation for any song. Whether you want to learn your favourite track
            or need educational materials, I provide detailed transcriptions to help you master the drums.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-beige-50 p-8 border-t-[3px] border-burgundy"
              >
                <div className="text-burgundy mb-6">{service.icon}</div>
                <h3 className="font-display text-2xl text-grey-900 mb-4 tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="text-grey-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-grey-900 text-beige-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="accent-line-gold mb-6" />
            <h2 className="font-display text-3xl text-beige-50 mb-8 tracking-wide">
              HOW IT WORKS
            </h2>
            <div className="space-y-6 text-grey-300">
              <p>
                Send me the song you&apos;d like transcribed, along with any specific requirements -
                whether that&apos;s the full track, specific sections, or particular techniques you want
                highlighted.
              </p>
              <p>
                I&apos;ll provide you with professional-quality notation that accurately captures the
                original performance, formatted clearly for easy reading and practice.
              </p>
              <p>
                Perfect for drummers wanting to learn new songs, teachers needing educational materials,
                or anyone who wants to understand what makes their favourite drum parts tick.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="bg-grey-800 p-6 border-l-[3px] border-gold">
                <h4 className="font-display text-lg text-beige-50 mb-2">Digital Delivery</h4>
                <p className="text-grey-400 text-sm">
                  Receive your transcription as a high-quality PDF, ready for printing or viewing on any device.
                </p>
              </div>
              <div className="bg-grey-800 p-6 border-l-[3px] border-gold">
                <h4 className="font-display text-lg text-beige-50 mb-2">Any Song</h4>
                <p className="text-grey-400 text-sm">
                  From classic tracks to modern hits, I can transcribe drums from any genre or era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-burgundy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-beige-50 mb-6 tracking-tight uppercase">
            Need a Transcription?
          </h2>
          <p className="text-beige-200 mb-8">
            Tell me which song you&apos;d like transcribed and I&apos;ll get back to you with details.
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
