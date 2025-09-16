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
      <section id="home" className="relative w-screen h-[600px] text-center text-white flex items-center justify-center overflow-hidden">
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
          <Button>Register Now</Button>
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


    </div>
  );
}
