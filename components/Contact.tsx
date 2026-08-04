"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  Loader2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

type FormData = {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
};

const contacts = [
  {
    icon: <Mail size={22} className="text-cyan-400" />,
    title: "Email",
    value: "contact@adarshinfo.in",
    link: "mailto:contact@adarshinfo.in",
  },
  {
    icon: <Phone size={22} className="text-cyan-400" />,
    title: "Phone",
    value: "+91 7700082302",
    link: "tel:+917700082302",
  },
  {
    icon: <Globe size={22} className="text-cyan-400" />,
    title: "Website",
    value: "www.adarshinfo.in",
    link: "https://adarshinfo.in",
  },
  {
    icon: <FaLinkedin size={22} className="text-cyan-400" />,
    title: "LinkedIn",
    value: "linkedin.com/in/singhadarshkumar",
    link: "https://www.linkedin.com/in/singhadarshkumar",
  },
  {
    icon: <FaGithub size={22} className="text-cyan-400" />,
    title: "GitHub",
    value: "github.com/akbengaltiger",
    link: "https://github.com/akbengaltiger",
  },
  {
    icon: <MapPin size={22} className="text-cyan-400" />,
    title: "Location",
    value: "Mumbai, Maharashtra, India",
    link: "#",
  },
];

const initialState: FormData = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!form.from_name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }

    if (!form.from_email.trim()) {
      toast.error("Please enter your email.");
      return false;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(form.from_email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!form.subject.trim()) {
      toast.error("Please enter a subject.");
      return false;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message.");
      return false;
    }

    if (form.message.trim().length < 10) {
      toast.error("Message should contain at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully.");

      setForm(initialState);
    } catch (error) {
      console.error(error);

      toast.error("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
        <section id="contact" className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Let's Work
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Looking for an experienced IT professional or technology partner?
            Feel free to contact me for Infrastructure, Windows Server,
            Active Directory, Networking, Web Development and IT Consulting.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="space-y-5">

            {contacts.map((item) => (

              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,.25)]"
              >

                <div className="rounded-xl bg-cyan-500/10 p-4">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="font-semibold text-white">
                    {item.value}
                  </h3>
                </div>

              </a>

            ))}

            <a
              href="https://wa.me/917700082302"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-green-500 py-4 text-lg font-semibold text-white transition hover:bg-green-600"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>

          </div>

          {/* Contact Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-500/10 bg-slate-900/60 p-8 backdrop-blur-xl"
          >

            <h3 className="mb-8 text-3xl font-bold text-white">
              Send Message
            </h3>

            <input
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="mb-5 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
            />

            <input
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="mb-5 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="mb-5 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Your Message"
              className="mb-6 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 py-4 font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}

            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}