import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-10 text-indigo-500">
          Contact Me
        </h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-8 shadow-md space-y-6"
          style={{ backgroundColor: "var(--card)" }}
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-center">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
