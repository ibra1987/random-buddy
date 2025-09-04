import { Metadata } from "next";
import ContactForm from "../components/contact-form";
import FeaturesSection from "../components/features";
import PageSchema from "../components/structured-data/page-schema";

export const metadata: Metadata = {
  title: "Contact | RandomBuddy",
  description:
    "Get in touch with the RandomBuddy team. Have feedback, feature requests, or questions? We'd love to hear from you!",
};

export default function Contact() {
  return (

    <>
    <PageSchema/>
    
    <main className="min-h-screen max-w-6xl mx-auto text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 border-b border-[#e0d5c5]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#5a4631]">
          📩 Contact Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[#6b5a4d]">
          Got questions, feedback, or feature requests?  
          We'd love to hear from you!
        </p>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Extra Contact Info */}
      <section className="text-center max-w-xl mx-auto px-6 pb-12">
        <p className="text-[#6b5a4d] mb-2">
          Prefer direct contact? Reach us at:
        </p>
        <a
          href="mailto:support@randombuddy.com"
          className="text-[#5a4631] font-medium hover:underline"
        >
          support@randombuddy.com
        </a>
      </section>

    </main>
        </>

  );
}
