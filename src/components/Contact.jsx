"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "modern-portfolio-backend.vercel.app/api/send-email",
        {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error("Email failed to send!");
      }

      setForm(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-2xl px-4 py-20 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-center">Contact Me</h2>
      {loading ? (
        <div className="flex justify-center items-center min-h-[150px]">
          <BounceLoader color="#6366F1" size={50} />
        </div>
      ) : sent ? (
        <p className="text-center text-green-600">
          Thanks! I'll be in touch soon.
        </p>
      ) : (
        <div className="p-6 transition-shadow bg-white shadow-lg rounded-xl dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 hover:shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Name or Company"
              className="w-full px-4 py-2 text-black border rounded"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 text-black border rounded"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message..."
              className="w-full px-4 py-2 text-black border rounded"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 font-semibold text-indigo-800 transition-all duration-300 bg-indigo-100 rounded-md dark:bg-indigo-700 dark:text-white hover:bg-white hover:text-indigo-700"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
