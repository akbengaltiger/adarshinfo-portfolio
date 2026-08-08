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
    value: "+91 77000 82302",
    link: "tel:+917700082302",
  },
  {
    icon: <Globe size={22} className="text-cyan-400" />,
    title: "Website",
    value: "www.adarshinfo.in",
    link: "https://www.adarshinfo.in",
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
    value: "Thane, Maharashtra, India",
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
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const name = form.from_name.trim();
    const email = form.from_email.trim().toLowerCase();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name) {
      toast.error("Please enter your full name.");
      return false;
    }

    if (!email) {
      toast.error("Please enter your email address.");
      return false;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!subject) {
      toast.error("Please enter the subject.");
      return false;
    }

    if (!message) {
      toast.error("Please enter your message.");
      return false;
    }

    if (message.length < 10) {
      toast.error("Message must contain at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS environment variables are missing."
      );

      toast.error(
        "Email service is not configured. Please try again later."
      );

      return;
    }

    try {
      setLoading(true);

      const templateParams = {
        from_name: form.from_name.trim(),
        from_email: form.from_email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      toast.success(
        "Thanks! Your message has been sent successfully."
      );

      setForm(initialState);
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(
        "Something went wrong. Please try again in a few moments."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

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

          <h2
            id="contact-heading"
            className="mt-6 text-5xl font-black text-white"
          >
            Let's Work
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Looking for an experienced IT professional or technology
            partner? Feel free to contact me for Infrastructure,
            Windows Server, Active Directory, Networking,
            Web Development and IT Consulting.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* ================= CONTACT INFORMATION ================= */}

          <div className="space-y-5">

            {contacts.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={
                  item.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-5 rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(6,182,212,.35)]"
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

            {/* ================= WHATSAPP ================= */}

            <a
              href="https://wa.me/917700082302"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Adarsh Kumar Singh on WhatsApp"
              className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-green-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-600"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>

          </div>

          {/* ================= CONTACT FORM ================= */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-500/10 bg-slate-900/60 p-8 backdrop-blur-xl"
            aria-labelledby="contact-form-heading"
          >

            <h3
              id="contact-form-heading"
              className="mb-8 text-3xl font-bold text-white"
            >
              Send Message
            </h3>

            {/* ================= NAME ================= */}

            <div className="mb-5">
              <label
                htmlFor="from_name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your Name
              </label>

              <input
                id="from_name"
                name="from_name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={form.from_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>

            {/* ================= EMAIL ================= */}

            <div className="mb-5">
              <label
                htmlFor="from_email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email Address
              </label>

              <input
                id="from_email"
                name="from_email"
                type="email"
                autoComplete="email"
                required
                maxLength={150}
                value={form.from_email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>

            {/* ================= SUBJECT ================= */}

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                required
                maxLength={200}
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>

            {/* ================= MESSAGE ================= */}

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                minLength={10}
                maxLength={5000}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>

            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              disabled={loading}
              aria-label={
                loading
                  ? "Sending contact message"
                  : "Send contact message"
              }
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 py-4 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                    aria-hidden="true"
                  />

                  Sending...
                </>
              ) : (
                <>
                  <Send
                    size={20}
                    aria-hidden="true"
                  />

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