"use client";

import { useRef, useState } from "react";
import AnimatedSection from "../component/AnimatedSection";
// import emailjs from '@emailjs/browser'
// import AnimatedSection from '../components/AnimatedSection'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    //     emailjs
    //       .sendForm(
    //         'your_service_id',      // Replace with your EmailJS service ID
    //         'your_template_id',     // Replace with your template ID
    //         formRef.current!,
    //         'your_public_key'       // Replace with your public key
    //       )
    //       .then(
    //         () => {
    //           setLoading(false)
    //           setSuccess(true)
    //           formRef.current?.reset()
    //         },
    //         (error) => {
    //           setLoading(false)
    //           console.error(error)
    //           alert('Failed to send. Try again later.')
    //         }
    //       )
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      </AnimatedSection>
      {/* <AnimatedSection></AnimatedSection> */}

      <AnimatedSection>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-500 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
        </form>
      </AnimatedSection>
    </div>
  );
}
