"use client";
const ContactForm = () => {
  return (
    <section className="max-w-xl mx-auto px-6 py-12">
        <form
          className="bg-[#fef8f2] p-6 rounded-2xl shadow-lg border border-[#e0d5c5] space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for reaching out! We'll get back to you soon.");
          }}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-[#5a4631] mb-1 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-[#d1c3b0] rounded-lg p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c7b49b] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#5a4631] mb-1 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-[#d1c3b0] rounded-lg p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c7b49b] transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-[#5a4631] mb-1 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              rows={5}
              required
              className="w-full border border-[#d1c3b0] rounded-lg p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c7b49b] transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#5a4631] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#7b5e42] transition"
          >
            Send Message
          </button>
        </form>
      </section>
  )
}

export default ContactForm