"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Globe, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

const timelineData = [
  { month: "August", color: "#2563EB", 
    summary: `9 September - DSA Competition    
    10 - 16 September - Figma Competition
    17 - 23 September - Web Coding Competition  
    `, 
    
    details: `DSA Competition - Simple DSA contest on Arrays with different algorithms like searching and sorting. 
    
    Figma Competition 
    🚀 Problem Statement: Figma UI Design A strong first impression is crucial for engaging users online. The starting frames of a website set the tone, capture attention, and guide users toward exploring further. 
    Your task is to design the initial frames of a marketing website UI in Figma. The goal is to create a visually appealing, user-friendly, and engaging starting point that highlights the purpose of the website and encourages user interaction.
    ✅ Requirements: 
    ⿡ Intro Section (headline, subtext, and visuals) 
    ⿢ Showcase Section (highlight key offerings briefly) 
    ⿣ About Section (introduce the concept) 
    ⿤ Engagement Section (buttons, sign-up prompts, or contact options) 
    ✨ Bonus (Optional): 
    ⿡Responsive mockups (desktop & mobile views) 
    ⿡Simple animations/landing pages. 
    🏆 The best Figma designs will be showcased, and winners will be announced at the end of the month!
    
    Web Coding Competition
    🚀 Problem Statement: Local Business Launchpad
    Your task is to design and develop a marketing website for a local business of your choice. The goal is to promote the business, highlight its offerings, and provide a way for customers to connect or engage.
    ✅ Requirements:
    ⿡ Product/Service Showcase
    ⿢ Customer Testimonials Section
    ⿣ About/Story Section
    ⿤ Call-to-Action Section
    ⿥ Promotions/Offers Section
    ✨ Bonus (Optional): Responsive design, location/map integration, animated counters.    
    🏆 The best projects will be showcased and winners announced at the end of the month!
    ` }, // blue-600
  { month: "September", color: "#8B5CF6", summary: `To be release soon`, details: `To be release soon` }, // purple-600
  { month: "October", color: "#16A34A", summary: `To be release soon`, details: `To be release soon` }, // green-600
  { month: "November", color: "#F97316", summary: `To be release soon`, details: `To be release soon` }, // orange-500
];


  return (
    <div className="space-y-12">

      {/* Full-Width Hero Section */}
      <section id="home" className="relative w-screen h-[640px] text-center text-white flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: "url('/background-image.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 space-y-6 px-4 max-w-[1400px] mx-auto">
          <h1 className="text-5xl font-extrabold">
            Welcome to SkillSprint 2025
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            SkillSprint is a 4-week competition organized by ACMxPCCOER, featuring exciting contests in DSA, Figma, Web Coding, and AIML.
          </p>
          <Button
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc_URk6CvfCQVQVZFlLXp-bBC281DVvGgriClnOdEScwxz8uQ/viewform', '_blank')}
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* Contests Section */}
      <section id="contests" className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">
          CONTESTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* DSA Contest */}
          <Card className="p-6 text-center shadow-md rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Code2 className="mx-auto w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">DSA Contest</h3>
            <p className="mt-2 text-gray-600">
              Test your problem-solving skills with challenging data structures and algorithms problems.
            </p>
            <ul className="text-gray-600 mt-4 space-y-1 text-sm text-left">
              <li>• Dynamic Programming</li>
              <li>• Graph Algorithms</li>
              <li>• Tree Structures</li>
              <li>• Competitive Programming</li>
            </ul>
            {/* <Button className="mt-4 w-full">Learn More</Button> */}
          </Card>

          {/* Figma Contest */}
          <Card className="p-6 text-center shadow-md rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Palette className="mx-auto w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Figma Design Contest</h3>
            <p className="mt-2 text-gray-600">
              Showcase your creativity and design thinking with stunning UI/UX designs.
            </p>
            <ul className="text-gray-600 mt-4 space-y-1 text-sm text-left">
              <li>• UI/UX Design</li>
              <li>• Prototyping</li>
              <li>• Design Systems</li>
              <li>• User Research</li>
            </ul>
            {/* <Button className="mt-4 w-full">Learn More</Button> */}
          </Card>

          {/* Web Coding Contest */}
          <Card className="p-6 text-center shadow-md rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Globe className="mx-auto w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Web Coding Contest</h3>
            <p className="mt-2 text-gray-600">
              Build amazing web applications using modern frameworks and technologies.
            </p>
            <ul className="text-gray-600 mt-4 space-y-1 text-sm text-left">
              <li>• React/Next.js</li>
              <li>• Full-Stack Development</li>
              <li>• API Integration</li>
              <li>• Responsive Design</li>
            </ul>
            {/* <Button className="mt-4 w-full">Learn More</Button> */}
          </Card>

          {/* AIML Contest */}
          <Card className="p-6 text-center shadow-md rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Brain className="mx-auto w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">AIML Contest</h3>
            <p className="mt-2 text-gray-600">
              Dive into artificial intelligence and machine learning challenges.
            </p>
            <ul className="text-gray-600 mt-4 space-y-1 text-sm text-left">
              <li>• Machine Learning</li>
              <li>• Deep Learning</li>
              <li>• Data Science</li>
              <li>• Neural Networks</li>
            </ul>
            {/* <Button className="mt-4 w-full">Learn More</Button> */}
          </Card>

        </div>
      </section>

{/* Timeline Section */}
<section id="timeline" className="relative max-w-[900px] mx-auto px-4 py-16">
  <h2 className="text-3xl text-center font-bold text-gray-800 mb-12">SCHEDULE TIMELINE</h2>

  <div className="relative">
    {/* Center Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

    <div className="space-y-12">
      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={item.month}
            className="relative flex items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : ""}`}>
              {isLeft && (
                <Card
                  onClick={() => setSelectedMonth(item.month)}
                  className="p-6 shadow-md rounded-2xl cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                <h3 className="text-xl font-bold" style={{ color: item.color }}>
                  {item.month}
                </h3>
                  <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>{item.summary}</p>
                </Card>
              )}
            </div>

            {/* Dot with month color */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md"
              style={{ backgroundColor: item.color }}
            ></div>

            <div className={`w-1/2 ${!isLeft ? "pl-8 text-left" : ""}`}>
              {!isLeft && (
                <Card
                  onClick={() => setSelectedMonth(item.month)}
                  className="p-6 shadow-md rounded-2xl cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                <h3 className="text-xl font-bold" style={{ color: item.color }}>
                  {item.month}
                </h3>
                  <p className="text-gray-600">{item.summary}</p>
                </Card>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


{/* Modal */}
{selectedMonth && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    onClick={() => setSelectedMonth(null)}
  >
    <div
      className="bg-white rounded-2xl p-8 max-w-lg mx-4 shadow-xl max-h-[80vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-2xl font-bold mb-4">{selectedMonth}</h3>
      <p className="text-gray-700" style={{ whiteSpace: 'pre-line' }}>
        {timelineData.find((item) => item.month === selectedMonth)?.details}
      </p>
      <Button
        className="mt-6 w-full"
        onClick={() => setSelectedMonth(null)}
      >
        Close
      </Button>
    </div>
  </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">About SkillSprint</h3>
              <p className="text-gray-300">
                A 4-week competition series organized by ACMxPCCOER to showcase and enhance student talents across multiple domains.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#contests" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Contests
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="/leaderboard" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Leaderboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>ACM Student Chapter</p>
                <p>PCCOE&R, Ravet</p>
                <p>Pune, Maharashtra</p>
                <div className="flex justify-end px-35 space-x-4 mt-4">
                  <a href="https://www.linkedin.com/company/pccoer-acm-student-chapter/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/pccoeracm?igsh=Nml4MnN4ejJna2U1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                  <a href="https://chat.whatsapp.com/IXVTzfkaqHsEHyHNRl9JQc?mode=ems_qr_t" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-gray-400">
              © 2025 SkillSprint by ACMxPCCOER. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}