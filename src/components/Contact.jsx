import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [succemddessage, setSuccemddessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccemddessage("");

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (form.message.length > 500) {
      setErrorMessage("Message cannot exceed 500 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://us-central1-dust-of-war.cloudfunctions.net/sendContactEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setSuccemddessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccemddessage("");
        }, 3000);
      } else {
        setErrorMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="p-[1.4rem] bg-accent rounded-btn">
      <h2 className="text-4xl uppercase mb-6 font-sans text-white">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-4">
          <label className="text-lg w-24 text-white">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full md:flex-1 p-2 bg-background border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-4">
          <label className="text-lg w-24 text-white">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full md:flex-1 p-2 bg-background border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-6">
          <label className="text-lg w-24 text-white">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full md:flex-1 p-2 bg-background border border-white text-white placeholder-white resize-none focus:outline-none focus:ring-2 focus:ring-white"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 text-[14px] leading-[16px] sm:text-[16px] sm:leading-[18px] uppercase bg-highlight text-black font-chivo hover:bg-white transition-colors rounded-btn"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
