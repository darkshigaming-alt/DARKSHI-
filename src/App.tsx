/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, Instagram, Facebook, Twitter, Play, Info, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1f1f1f]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-brand tracking-tighter"
          >
            DarkshiGaming
          </motion.h1>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#videos" className="hover:text-brand transition-colors">Videos</a>
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-2 text-brand mb-4">
              <Play size={24} fill="currentColor" />
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest">Featured Video</h2>
            </div>
            <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-brand/10 border border-white/10">
              {/* Using the user's provided upload list embed which works for showing the latest video */}
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=UCuA0Z7pJv2mcnP4JtihyG0g" 
                title="Featured Video"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Latest Videos Section */}
        <section id="videos" className="py-20 bg-[#181818] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Youtube className="text-brand" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-tight">Latest Videos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* For "Latest Videos", we can use specific IDs or another list embed. 
                  Since we want them to "work", I'll use some actual recent video IDs if I can find them, 
                  otherwise I'll use the channel's recent uploads in a grid. */}
              {[
                "https://www.youtube.com/embed?listType=user_uploads&list=UCuA0Z7pJv2mcnP4JtihyG0g&index=1",
                "https://www.youtube.com/embed?listType=user_uploads&list=UCuA0Z7pJv2mcnP4JtihyG0g&index=2",
                "https://www.youtube.com/embed?listType=user_uploads&list=UCuA0Z7pJv2mcnP4JtihyG0g&index=3",
                "https://www.youtube.com/embed?listType=user_uploads&list=UCuA0Z7pJv2mcnP4JtihyG0g&index=4",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-white/5 hover:border-brand/50 transition-all shadow-lg"
                >
                  <iframe 
                    className="w-full h-full"
                    src={src} 
                    title={`Latest Video ${index + 1}`}
                    allowFullScreen
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="flex items-center justify-center gap-2 text-brand mb-2">
              <Info size={28} />
              <h2 className="text-3xl md:text-4xl font-bold uppercase">About DarkshiGaming</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Welcome to <span className="text-white font-medium">DarkshiGaming</span>! 
              Here you’ll find the latest gameplay, tips, and walkthroughs from your favorite games. 
              Subscribe and join our gaming community for daily content and exclusive updates.
            </p>
          </motion.div>
        </section>

        {/* Contact & Socials Section */}
        <section id="contact" className="py-20 bg-[#1f1f1f] px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-tighter">Connect With Me</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { icon: Youtube, label: "YouTube", href: "https://youtube.com/@darkshigaming?si=0jV4LbbAxjAKCWRv" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/darkshigaming" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/darkshigaming" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/darkshigaming" },
                { icon: Mail, label: "Email", href: "mailto:darkshigaming@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-brand/20 group-hover:text-brand transition-all">
                    <social.icon size={28} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-white/5 bg-[#121212]">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-2xl font-bold text-brand tracking-tighter">DarkshiGaming</p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DarkshiGaming. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
