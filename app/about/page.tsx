
import { Metadata } from "next";
import PageSchema from "../components/structured-data/page-schema";

export const metadata: Metadata = {
  title: "About | RandomBuddy",
  description:
    "Learn more about RandomBuddy — your vintage-style hub for fun random generators like fantasy names, usernames, team names, and more.",
};

export default function About() {
  return (
    <>
    <PageSchema/>
    <main className="min-h-screen max-w-6xl mx-auto  text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 border-b border-[#e0d5c5]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#5a4631]">
          🌟 About RandomBuddy
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[#6b5a4d]">
          Your vintage-style hub for <strong>fun random generators</strong> —
          built to inspire creativity and make your day a little more fun.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center space-y-6">
        <p className="text-[#5a4631] text-lg leading-relaxed">
          At <strong>RandomBuddy</strong>, we believe randomness can spark creativity.
{" Whether you're brainstorming fantasy character names, looking for"}      
    a unique Instagram handle, or searching for spooky text effects,
          we make it simple, fun, and free.
        </p>

        <p className="text-[#6b5a4d] text-base leading-relaxed">
          RandomBuddy started as a small side project for curious minds.
          Over time, we added more tools, from name generators to text
          effects, keeping everything lightweight and user-friendly — with a
          <span className="font-semibold"> vintage aesthetic</span> for a cozy feel.
        </p>
      </section>

      {/* Features Section */}
      <section className=" border-y border-[#e0d5c5] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#5a4631] mb-6">
            ✨ What You Can Do With RandomBuddy
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#6b5a4d]">
            <li className=" p-4 rounded-xl shadow-sm border border-[#e0d5c5] hover:shadow-md transition">
              🎭 Generate creative Instagram usernames
            </li>
            <li className=" p-4 rounded-xl shadow-sm border border-[#e0d5c5] hover:shadow-md transition">
              🧙‍♂️ Discover unique fantasy & RPG names
            </li>
            <li className=" p-4 rounded-xl shadow-sm border border-[#e0d5c5] hover:shadow-md transition">
              🎡 Pick random names using our wheel picker
            </li>
            <li className=" p-4 rounded-xl shadow-sm border border-[#e0d5c5] hover:shadow-md transition">
              👻 Create creepy & spooky text styles
            </li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-[#5a4631] mb-4">
          Our Mission 🎯
        </h2>
        <p className="text-[#6b5a4d] text-lg leading-relaxed">
         {" RandomBuddy is here to make creativity effortless. No complicated setups. No sign-ups. Just click, generate, and have fun. We focus on keeping everything"} <strong>simple, vintage, and delightful</strong>.
         
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[#e0d5c5] text-sm text-[#6b5a4d]">
        © {new Date().getFullYear()} RandomBuddy — All Rights Reserved.
      </footer>
    </main>
        </>

  );
}
