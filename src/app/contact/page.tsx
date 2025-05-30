"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../component/AnimatedSection";
import Swal from "sweetalert2";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_3kv2yxb",
        "template_64hu0ki",
        formRef.current,
        "T5DqIO4V57QV4eIaf" //  Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
          Swal.fire("Success!", "Your message has been sent!", "success");
        },
        (error) => {
          setLoading(false);
          console.error("Email send error:", error.text);
          Swal.fire("Oops!", "Something went wrong. Try again later.", "error");
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white"
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
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
