"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface TeamData {
  teamName: string;
  members: string[];
  score: number;
  rank?: number; // Made optional since it will be calculated
}

interface LeaderboardData {
  [month: string]: TeamData[];
}

// Generate months array dynamically
const generateMonths = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Create array of months for the current year
  return monthNames.map(month => `${month} ${currentYear}`);
};

const months = generateMonths();

const leaderboardData: LeaderboardData = {
  "September 2025": [
    {
      teamName: "Pryog",
      members: ["Omkar Patil", "Prajyot Tayde", "Yash Urade", "Greshal Saldanha", "Pranav Ramane"],
      score: 202,
    },
    {
      teamName: "TEAM FNATIC",
      members: ["Divyesh patil ", "Om badgujar ", "Shivani satav", "Swanandi Deshmukh","Yash chavan "],
      score: 150,
    },
    {
      teamName: "Vyom",
      members: ["Irfan Mohammad", "Rajesh Patil", "Atharva Pawar","Himanshu Chougule","Shruti Jadhav"],
      score: 90,
    },
    {
      teamName: "Nocturnals",
      members: ["Rohit Tare", "Adarsh Thakare", "Mayur Tummewar","Akshat", "Neha Thakare"],
      score: 67,
    },
    {
      teamName: "Supreme",
      members: ["Albin Mathew", "Sahil Alaknur", "Drishti Agarwal","Pranav Shegokar","Rugved Bairagi"],
      score: 60,
    },
    {
      teamName: "GAN",
      members: ["Sourav Pareek", "Aryan Jadhav", "Rahul Hadap","Rupam Agrawal","Vaishanavi Jadhav"],
      score: 52,
    },    
    {
      teamName: "TechTitans",
      members: ["Aliya Shaikh", "Purva", "Yash Aware","Adarsh Gunari","Shreyas Padaganure"],
      score: 21,
    },    
    {
      teamName: "Binary Beasts",
      members: ["Sudarshan Patil", "Sandip Patil", "Sneha Hadole","Nandini Gandhi","Rohit Jadhav"],
      score: 9,
    },    
    {
      teamName: "AlgoRangers ",
      members: ["Ashwini Tambe ", "Divya Barve", "Radhika Khile ","Sanika Ravindra ","Rohit Jadhav"],
      score: 5,
    },    
    {
      teamName: "Codeify",
      members: ["Kajal Jain ", "Rohan kapadi", "Swaraj karle","Janhvesh patil","Kanushri Soni"],
      score: 5,
    },    
    {
      teamName: "HackHer S",
      members: ["Gowri Surve", "Sneha Telsang", "Varshita Chitkesi","Sankshi Wankhade"],
      score: 5,
    },    {
      teamName: "Team NullPointers",
      members: ["Rushikesh Sonaje ", "Prathmesh Kulkarni ", "Mayuresh Deshpande ","Tejas Kolekar ","Ananya Deshpande"],
      score: 5,
    },    {
      teamName: "HackHer S",
      members: ["Gowri Surve", "Sneha Telsang", "Varshita Chitkesi","Sankshi Wankhade"],
      score: 5,
    },    
    {
      teamName: "Versatile",
      members: ["Utkarsh Kashid", "Soham Katore", "Riya Kawade","Mrunmayee Khot","Aditya S. Kashid"],
      score: 5,
    },    {
      teamName: "AlgoCrew",
      members: ["Neha Shingi ", "Shruti Sandage ", "Sakshi Yelpale","Shravani Patil"],
      score: 0,
    },    {
      teamName: "ARAIA",
      members: ["Ishaan Gandhi", "Ashmit Kadam", "Atharva Jejurkar","Athena Gutte","Rutvij Chintalwar"],
      score: 0,
    },    {
      teamName: "Code Squad",
      members: ["Kalyani Joshi", "Apurva Khade", "Anushka Kadam"],
      score: 0,
    },    
    {
      teamName: "Ctrl Alt Achieve",
      members: ["Prajwal Waghmare ", "Mihir Yadav", "Dnyaneshwari Varpe","Shrawani Jagtap"],
      score: 0,
    },    {
      teamName: "Debug Demons",
      members: ["Raj Shinde ", "Ronit singh", "Siya Bhosale","Shreeya Takalkar","Ganesh Kendre"],
      score: 0,
    },    {
      teamName: "Debug thugs",
      members: ["Rasika kharche ", "Anoma mhaiskar", "Rakshita bhushan","Samiksha bidkar","Gauri mhasram"],
      score: 0,
    },    {
      teamName: "Hawkeyes",
      members: ["Aditya Sharad Patil ", "Om Shinde", "Mayuresh Mudase","Pratik Kulkarni","Nisarga Patil "],
      score: 0,
    },    
    {
      teamName: "Helicopter ",
      members: ["Sharvari Anil Kinge", "Preeti Satao", "Rajshree Karlekar"],
      score: 0,
    },    {
      teamName: "Pinnacle ",
      members: ["Shweta Ganage ", "Kajal Patil", "Aayushi Dhawas ","Gunn Bhatia"],
      score: 0,
    },    {
      teamName: "QUAD SQUAD ",
      members: ["Soham Patil ", "Riddhi Sonawane", "Rekha Kumawat","Simran Tejwani"],
      score: 0,
    },    {
      teamName: "Runtime Rebels",
      members: ["Bipasha Shaw ", "Riya Borana", "Aadi Kulkarni","Abhyudaya Waghmare","Rohit Choudhari "],
      score: 0,
    },    
    {
      teamName: "Team Phoenix ",
      members: ["Khushi Deshmukh ", "Samruddhi Achari ", "Vijayalaxmi Katke","Shreya Kharade","Shrawani Pilgar"],
      score: 0,
    },    {
      teamName: "Team Stack'd",
      members: ["Ketaki Mahajan", "Anushka Patil ", "Aaditi Malthane","Mimansha Sharma"],
      score: 0,
    },    {
      teamName: "The Big O(h) my God",
      members: ["Siddhi Chandrashekhar Badhe ", "Sneha Vinod Mankar", "Samiksha Thorat ","Somesh Thakare"],
      score: 0,
    },    {
      teamName: "Xstream",
      members: ["Rushikessh Andhare "],
      score: 0,
    },
  ],
};

export default function LeaderboardPage() {
  // Get current month and year
  const getCurrentMonthYear = () => {
    const date = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthYear());
  
  // Sort and assign ranks based on scores
  let currentMonthData: TeamData[] = [];
  currentMonthData = (leaderboardData[selectedMonth] || [])
    .sort((a, b) => b.score - a.score) // Sort by score in descending order
    .map((team, index) => {
      // Handle tied scores
      if (index > 0 && team.score === currentMonthData[index - 1]?.score) {
        return { ...team, rank: currentMonthData[index - 1].rank };
      }
      return { ...team, rank: index + 1 };
    });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl font-bold text-center text-blue-600 pt-8">
              SkillSprint Leaderboard
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl text-center">
              Track the progress of top-performing teams and witness their journey to excellence
            </p>
            <div className="rounded-lg p-2 mt-4">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[200px] bg-white/80 border border-gray-400 rounded-md">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl border shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="w-20 py-4">Rank</TableHead>
                <TableHead className="py-4">Team Name</TableHead>
                <TableHead className="py-4">Team Members</TableHead>
                <TableHead className="text-right w-32 py-4">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentMonthData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-gray-500">
                    No leaderboard data available for this month
                  </TableCell>
                </TableRow>
              ) : (
                currentMonthData.map((team) => (
                  <TableRow
                    key={team.rank}
                    className={
                      (team.rank ?? 0) <= 3
                        ? "bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50/70"
                        : ""
                    }
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <span className="w-8 text-center">{team.rank}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold text-blue-600">{team.teamName}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1.5">
                        {team.members.map((member, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-colors"
                            style={{
                              backgroundColor: `hsl(${
                                (index * 60) % 360
                              }, 70%, 95%)`,
                              color: `hsl(${(index * 60) % 360}, 70%, 35%)`,
                            }}
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-mono font-semibold text-lg">
                        {team.score.toLocaleString()}
                      </div>
                      {/* {team.rank <= 3 && (
                        <div className="text-xs text-gray-500 mt-1">points</div>
                      )} */}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}