"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata export doesn't work in client components, but we need useState for video player
// We'll handle SEO differently or use a server component wrapper

const videos = [
  { id: "dQw4w9WgXcQ", title: "Drum Cover - Example Track 1" },
  { id: "jfKfPfyJRdk", title: "Tutorial - Groove Breakdown" },
  { id: "5qap5aO4i9A", title: "Studio Session Highlights" },
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="accent-line mb-6" />
              <h1 className="section-title">Videos</h1>
              <p className="body-text mt-6 max-w-2xl">
                Drum covers, tutorials, and behind-the-scenes content. From technique breakdowns
                to full song playthroughs, there&apos;s something for drummers of all levels.
              </p>
            </div>
            <a
              href="https://www.youtube.com/user/ryz1001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-burgundy hover:text-burgundy-light transition-colors font-display text-lg tracking-wide uppercase group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>View All on YouTube</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-8 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative aspect-video bg-grey-200 overflow-hidden">
            {activeVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center cursor-pointer group"
                onClick={() => setActiveVideo(videos[0].id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${videos[0].id}/maxresdefault.jpg`}
                  alt="Featured video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-grey-900/40 group-hover:bg-grey-900/30 transition-colors" />
                <div className="relative z-10 w-20 h-20 bg-burgundy flex items-center justify-center group-hover:bg-burgundy-light transition-colors">
                  <svg className="w-8 h-8 text-beige-50 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl text-grey-900 mb-8 tracking-wide">
            MORE VIDEOS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                <div className="relative aspect-video overflow-hidden mb-4 bg-grey-200">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-grey-900/0 group-hover:bg-grey-900/30 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-burgundy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-beige-50 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-burgundy scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
                <h3 className="font-display text-lg text-grey-900 group-hover:text-burgundy transition-colors">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-grey-900 text-beige-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="accent-line-gold mb-6" />
          <h2 className="font-display text-3xl text-beige-50 mb-12 tracking-wide">
            WHAT YOU&apos;LL FIND
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-[3px] border-gold pl-6">
              <h3 className="font-display text-xl text-beige-50 mb-3">Drum Covers</h3>
              <p className="text-grey-400">
                Full song playthroughs across various genres, showcasing different styles and techniques.
              </p>
            </div>
            <div className="border-l-[3px] border-gold pl-6">
              <h3 className="font-display text-xl text-beige-50 mb-3">Tutorials</h3>
              <p className="text-grey-400">
                Breakdowns of specific grooves, fills, and techniques to help you level up your playing.
              </p>
            </div>
            <div className="border-l-[3px] border-gold pl-6">
              <h3 className="font-display text-xl text-beige-50 mb-3">Studio Sessions</h3>
              <p className="text-grey-400">
                Behind-the-scenes looks at recording sessions and studio workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-burgundy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-beige-50 mb-6 tracking-tight uppercase">
            Don&apos;t Miss New Content
          </h2>
          <p className="text-beige-200 mb-8">
            Subscribe to stay updated with new drum covers, tutorials, and more.
          </p>
          <a
            href="https://www.youtube.com/user/ryz1001?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-beige-50 text-grey-900 px-8 py-4 font-display text-lg tracking-wide uppercase hover:bg-gold transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </>
  );
}
