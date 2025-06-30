"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How do I start using Kreatorpay?",
    answer: "Simply sign up for a free account, set up your payment details and start managing your finances effortlessly."
  },
  {
    question: "Can I integrate AI budgeting tools?",
    answer: "Yes — Kreatorpay now features built-in AI to help you track, predict and optimize your earnings and expenses."
  },
  {
    question: "Is there a transaction limit?",
    answer: "Nope! You're free to process unlimited transactions on our platform with industry-best security and reliability."
  },
  {
    question: "How secure is my financial data?",
    answer: "Kreatorpay uses bank-grade encryption and multi-factor authentication to protect your information at all times."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-white  max-w-[1200px] mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-3">All you need to know about how Kreatorpay helps you take control of your money.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              {item.question}
              <span className="ml-2 text-indigo-500 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
