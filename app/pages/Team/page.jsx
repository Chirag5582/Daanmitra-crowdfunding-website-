"use client"
import React from 'react'
import Image from 'next/image';
import Header from "../../components/Header";
import l from "../../../public/l.jpg"
import p from "../../../public/p.jpg"
import s from "../../../public/s.jpg"
import c from "../../../public/c.jpg"



const teamMembers = [
  {
    name: "Lalit Rathod",
    role: "Frontend Developer",
    image: l,
  },
  {
    name: "Pragyanshu Gupta",
    role: "Frontend Developer",
    image: p,
  },
  {
    name: "Sharul Gautam",
    role: "Backend Developer",
    image: s,
  },
  {
    name: "Chirag Sharma",
    role: "Backend Developer",
    image: c,
  },
];

function Team() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-purple-600 flex flex-col items-center py-24">
      <div className="max-w-6xl w-full px-6 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Meet Our Designers & Developers
        </h1>
        <p className="mt-4 text-lg text-gray-200">
        We are dedicated to delivering world-class digital experiences.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 mx-auto rounded-full border-4 border-purple-200 transition duration-300 transform group-hover:scale-110"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{member.name}</h2>
              <p className="text-gray-300">{member.role}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Team