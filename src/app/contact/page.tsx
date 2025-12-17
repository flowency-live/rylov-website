"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";

// Contact card data for QR code
const contactData = {
  name: "Rhyan Lovell",
  title: "Session Drummer",
  location: "Cheshire, UK",
  website: "https://ryhanlovell.opstack.uk",
  instagram: "https://www.instagram.com/ryhan.lovell.drums/",
  facebook: "https://www.facebook.com/ryhan.lovell.drums/",
  youtube: "https://www.youtube.com/user/ryz1001",
};

// Generate vCard string
const generateVCard = () => {
  return `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
TITLE:${contactData.title}
URL:${contactData.website}
X-SOCIALPROFILE;TYPE=instagram:${contactData.instagram}
X-SOCIALPROFILE;TYPE=facebook:${contactData.facebook}
X-SOCIALPROFILE;TYPE=youtube:${contactData.youtube}
NOTE:Session Drummer - Remote Recording, Music Transcriptions, Lessons
END:VCARD`;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    // Generate QR code on client side
    const generateQR = async () => {
      try {
        const QRCode = (await import("qrcode")).default;
        const vCard = generateVCard();
        const qr = await QRCode.toDataURL(vCard, {
          width: 200,
          margin: 2,
          color: {
            dark: "#171717",
            light: "#f5f0e8",
          },
        });
        setQrCode(qr);
      } catch (err) {
        console.error("QR generation failed:", err);
      }
    };
    generateQR();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // For now, we'll use a mailto link as fallback
    // In production, you'd integrate with Formspree or similar
    const mailtoLink = `mailto:contact@ryhanlovell.com?subject=${encodeURIComponent(
      formData.subject || "Website Enquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus("success");
  };

  const downloadVCard = () => {
    const vCard = generateVCard();
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rhyan-lovell.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="accent-line mb-6" />
          <h1 className="section-title">Contact</h1>
          <p className="body-text mt-6 max-w-2xl">
            Ready to start a project or have a question? Get in touch and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl text-grey-900 mb-8 tracking-wide">
                SEND A MESSAGE
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-grey-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-beige-50 border-l-[3px] border-grey-300 focus:border-burgundy outline-none transition-colors text-grey-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-grey-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-beige-50 border-l-[3px] border-grey-300 focus:border-burgundy outline-none transition-colors text-grey-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-grey-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-beige-50 border-l-[3px] border-grey-300 focus:border-burgundy outline-none transition-colors text-grey-900"
                  >
                    <option value="">Select a subject</option>
                    <option value="Remote Recording">Remote Recording</option>
                    <option value="Transcription Request">Transcription Request</option>
                    <option value="Lessons Enquiry">Lessons Enquiry</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-grey-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-beige-50 border-l-[3px] border-grey-300 focus:border-burgundy outline-none transition-colors text-grey-900 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Opening Email..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Card */}
            <div>
              <h2 className="font-display text-2xl text-grey-900 mb-8 tracking-wide">
                CONNECT
              </h2>

              {/* Digital Business Card */}
              <div className="bg-grey-900 text-beige-50 p-8 mb-8">
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h3 className="font-display text-3xl mb-2">{contactData.name}</h3>
                    <p className="text-gold mb-4">{contactData.title}</p>
                    <p className="text-grey-400 text-sm mb-6">{contactData.location}</p>

                    <div className="space-y-3">
                      <a
                        href={contactData.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-grey-300 hover:text-gold transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span className="text-sm">@ryhan.lovell.drums</span>
                      </a>
                      <a
                        href={contactData.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-grey-300 hover:text-gold transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span className="text-sm">Rhyan Lovell Drums</span>
                      </a>
                      <a
                        href={contactData.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-grey-300 hover:text-gold transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span className="text-sm">YouTube Channel</span>
                      </a>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex flex-col items-center">
                    {qrCode ? (
                      <img src={qrCode} alt="Contact QR Code" className="w-32 h-32" />
                    ) : (
                      <div className="w-32 h-32 bg-grey-800 flex items-center justify-center">
                        <span className="text-grey-600 text-xs">Loading...</span>
                      </div>
                    )}
                    <p className="text-grey-500 text-xs mt-2 text-center">Scan to save contact</p>
                  </div>
                </div>

                <button
                  onClick={downloadVCard}
                  className="mt-6 w-full py-3 bg-burgundy text-beige-50 font-display tracking-wide uppercase hover:bg-burgundy-light transition-colors"
                >
                  Download Contact Card
                </button>
              </div>

              {/* Lessons Link */}
              <div className="bg-beige-50 p-6 border-l-[3px] border-gold">
                <h4 className="font-display text-lg text-grey-900 mb-2">Lessons & Education</h4>
                <p className="text-grey-600 text-sm mb-4">
                  Follow my educational content for drumming tips and rudiments.
                </p>
                <a
                  href="https://www.instagram.com/rudiments.with.ryhan.lovell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors font-medium"
                >
                  <span>@rudiments.with.ryhan.lovell</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
