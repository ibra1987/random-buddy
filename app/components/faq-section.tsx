"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is RandomBuddy?",
    answer:
      "RandomBuddy is a free online generator for unique names, ideas, and creative inspiration for fantasy and RPG settings.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes! All our name generators are 100% free and require no sign-up.",
  },
  {
    question: "Can I use generated names in my games?",
    answer:
      "Absolutely! You can use any names you generate for your characters, stories, or games.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#fffdf9] py-16 px-6 max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5a4631] mb-10">
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#e0d5c5] rounded-lg shadow-sm bg-[#fef8f2]"
            >
              <button
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 text-left text-[#5a4631] font-medium"
              >
                {faq.question}
                <span>{active === idx ? "−" : "+"}</span>
              </button>
              {active === idx && (
                <div className="p-4 text-[#6b5a4d] border-t border-[#e0d5c5]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
