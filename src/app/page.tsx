import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Remote Recording",
    description: "Professional drum tracks delivered to your inbox. No studio booking, no time constraints.",
    href: "/recording",
  },
  {
    title: "Music Transcriptions",
    description: "Accurate drum notation for any song. Learn your favourite tracks note-for-note.",
    href: "/transcriptions",
  },
  {
    title: "Video Tutorials",
    description: "Drum covers, technique breakdowns, and educational content for all levels.",
    href: "/videos",
  },
];

const credits = [
  "Matt Lawrence (Amy Winehouse, Adele, Lady Gaga, George Michael, Beyonce, Kylie Minogue, Bjork)",
  "Dana McKeon",
  "Izzy Thomas",
  "Nefera",
  "Shapla Salique",
  "Wyse",
  "Jess Edie",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end md:items-center pb-24 md:pb-0">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover animate-video-fade"
          >
            <source src="/images/RyhanPlayingHero.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-grey-900 via-grey-900/70 to-grey-900/40 md:bg-gradient-to-r md:from-grey-900 md:via-grey-900/70 md:to-grey-900/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-24 w-full">
          <div className="max-w-2xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            <p className="section-subtitle mb-2 md:mb-4">Session Drummer</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-beige-50 uppercase leading-none drop-shadow-lg">
              RHYAN
              <br />
              <span className="text-burgundy drop-shadow-lg">LOVELL</span>
            </h1>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-1 sm:gap-y-2 text-beige-200 text-sm sm:text-base">
              <span>Remote Recording</span>
              <span className="hidden sm:block text-burgundy">/</span>
              <span>Music Transcriptions</span>
              <span className="hidden sm:block text-burgundy">/</span>
              <span>Remote Lessons</span>
            </div>

            <p className="mt-3 md:mt-4 text-xs sm:text-sm text-beige-300 uppercase tracking-widest">
              Liverpool / Manchester, UK
            </p>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/recording" className="btn-primary text-center">
                Start a Project
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-[2px] h-16 bg-gradient-to-b from-burgundy to-transparent" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="accent-line mb-6" />
            <h2 className="section-title">Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block bg-beige-50 p-8 border-t-[3px] border-burgundy hover:border-gold transition-colors"
              >
                <span className="font-display text-5xl text-grey-200 group-hover:text-burgundy transition-colors">
                  0{index + 1}
                </span>
                <h3 className="font-display text-2xl text-grey-900 mt-4 mb-3 tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="text-grey-600">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-burgundy font-medium uppercase text-sm tracking-wider group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-24 bg-grey-900 text-beige-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line-gold mb-6" />
              <h2 className="section-title text-beige-50 mb-8">About</h2>
              <p className="body-text text-grey-300 mb-6">
                Based in Cheshire, UK, I&apos;m a session drummer specializing in remote recording
                and music transcriptions. With a versatile style honed across multiple genres,
                I bring professional-grade drum tracks to artists and producers worldwide.
              </p>
              <p className="body-text text-grey-300 mb-8">
                Working from my fully-equipped home studio, I offer flexible scheduling with
                no time constraints - allowing me to deliver precisely crafted parts that serve
                your music perfectly.
              </p>

              <div className="border-t border-grey-700 pt-8">
                <h3 className="font-display text-xl text-gold mb-4 tracking-wide">
                  CREDITS INCLUDE
                </h3>
                <ul className="space-y-2">
                  {credits.slice(0, 4).map((credit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-burgundy mt-2 flex-shrink-0" />
                      <span className="text-grey-300 text-sm">
                        {credit.includes("Matt Lawrence") ? (
                          <>
                            <span className="text-gold">Grammy Award-winning producer</span>
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
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-6 text-gold hover:text-gold-light transition-colors uppercase text-sm tracking-wider font-medium"
                >
                  <span>Full Bio</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Ryhan1.jpg"
                alt="Rhyan Lovell"
                width={600}
                height={700}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-burgundy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-beige-50 mb-6 tracking-tight uppercase">
            Ready to Start Your Project?
          </h2>
          <p className="text-beige-200 text-lg mb-8 max-w-2xl mx-auto">
            Get professional drum tracks delivered to your inbox. No studio booking required.
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
