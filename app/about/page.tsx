"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Yash Dhadge",
    role: "Chair Person",
    image: "/team/yash.jpg",
    linkedin: "https://www.linkedin.com/in/yash-dhadge-571157202/",
    email: "yash.dhadge_comp23@pccoer.in"
  },
  {
    name: "Kalyani Kolpe",
    role: "Vice Chair Person",
    image: "/team/kalyani.jpg",
    linkedin: "https://www.linkedin.com/in/kalyani-kolpe-b66800234/",
    email: "kalyani.kolpe_comp23@pccoer.in"
  }
];

const organizingTeam: TeamMember[] = [
  {
    name: "Vedant Rane",
    role: "Coordinator",
    image: "/team/vedant1.jpg",
    linkedin: "https://www.linkedin.com/in/vedant-rane-861a1528a/",
    email: "vedant.rane_comp23@pccoer.in"
  },
  {
    name: "Ashwin Sangokar",
    role: "Coordinator",
    image: "/team/ashwin.jpg",
    linkedin: "https://www.linkedin.com/in/ashwin-sangokar-39837b28a/",
    email: "ashwin.sangokar_comp23@pccoer.in"
  },
  {
    name: "Kimaya Tambe",
    role: "Coordinator",
    image: "/team/kimaya.jpg",
    linkedin: "https://www.linkedin.com/in/kimaya-tambe-337ab0289/",
    email: "kimaya.tambe_comp23@pccoer.in"
  },
    {
    name: "Srushti Pounikar",
    role: "Coordinator",
    image: "/team/srushti.jpg",
    linkedin: "https://www.linkedin.com/in/srushti-pounikar-a25b3a317/",
    email: "srushti.pounikar_comp23@pccoer.in"
  },
  // Add more team members as needed
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="touch-none" // Prevents sticky hover effects on mobile
    >
      <Card className="relative overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-[4/5]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-blue-300 font-medium mb-4">{member.role}</p>
            
            {/* Social Links */}
            <div className="flex gap-4 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="text-white/80 hover:text-blue-400 transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm"
                >
                  <Linkedin size={18} />
                </Link>
              )}
              {member.github && (
                <Link
                  href={member.github}
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm"
                >
                  <Github size={18} />
                </Link>
              )}
              {member.email && (
                <Link
                  href={`mailto:${member.email}`}
                  className="text-white/80 hover:text-red-400 transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm"
                >
                  <Mail size={18} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r text-white py-20 overflow-hidden">
        {/* ACM Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[600px] h-[800px] opacity-23">
            <img
              src="/logo.png"
              alt="ACM Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">About Us</h1>
            <p className="text-xl text-black">Building the future of technology, one student at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-2 bg-blue-600 rounded-full"></div>
                <h2 className="text-4xl font-bold text-gray-800 relative pb-2 group">
                  <span>ACMxPCCOER</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  ACM Student Chapter at PCCOE&R is dedicated to advancing computing as a science and profession.
                  Our chapter provides opportunities for professional growth, networking, and knowledge sharing among
                  computing professionals and students.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    Technical Workshops & Seminars
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    Industry Expert Sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    Networking Opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    Hands-on Learning Experience
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-2 bg-blue-600 rounded-full"></div>
                <h2 className="text-4xl font-bold text-gray-800 relative pb-2 group">
                  <span>SkillSprint</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  SkillSprint is our flagship month-long competition designed to challenge and enhance the technical
                  skills of participants. Through this platform, students can showcase their talents and gain
                  practical experience in different domains.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-blue-600 mb-2">DSA Competition</h3>
                    <p className="text-sm text-gray-600">Master algorithms and problem-solving skills</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-purple-600 mb-2">UI/UX Design</h3>
                    <p className="text-sm text-gray-600">Create stunning user interfaces with Figma</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-green-600 mb-2">Web Development</h3>
                    <p className="text-sm text-gray-600">Build modern web applications</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-orange-600 mb-2">AI/ML</h3>
                    <p className="text-sm text-gray-600">Explore artificial intelligence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-gray-600">
              Meet our dedicated leadership team driving innovation and excellence at ACMxPCCOER.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            {leadershipTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Organizing Team</h2>
            <p className="text-gray-600">
              The talented individuals behind SkillSprint working tirelessly to create an exceptional experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            {organizingTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}