"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "./Container";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    if (form.current) {
      emailjs.sendForm(
        'service_vm7fhjh', // Your service ID
        'template_tcphlk8', // Your template ID
        form.current,
        'lpm_hKo86prgugZUq' // Your public key
      ).then(
        (response) => {
          setSuccess(true);
          setSending(false);
          form.current?.reset(); // Reset form after successful submission
        },
        (err) => {
          setError("Failed to send the message. Please try again.");
          setSending(false);
        }
      );
    }
  };

  return (
    <Container>
      <div className="container mx-auto px-2 md:px-20 flex flex-col lg:flex-row lg:space-x-12">
        {/* Contact Details */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Contact Details</h2>
          <p className="text-lg text-gray-600 mb-4 dark:text-gray-300">
            Feel free to reach out to us for any inquiries or support.
          </p>
          <div className="space-y-4 pt-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50">Address</h3>
              <p className="text-gray-600 dark:text-gray-400">82/I, Kandy Road, Pahala Imbulgoda, Imbulgoda, 11856</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+94 75 628 1084</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50">Email</h3>
              <p className="text-gray-600 dark:text-gray-400"> contact@inpower.lk </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white"> Get in Touch </h2>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-600">Message sent successfully! </p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
