import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
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
    setSuccessMessage("");

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setErrorMessage("Please enter a valid email address.");
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
        setSuccessMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccessMessage("");
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
    <div
      id="contact"
      className="bg-gradient-to-b from-primaryDark via-secondaryDark to-black py-10 px-6 text-white relative"
    >
      <h2 className="text-4xl font-extrabold text-center mb-6 uppercase tracking-wide text-gold relative">
        Contact Us
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-20 bg-gold"></span>
      </h2>
      <div className="max-w-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-secondaryDark p-8 rounded-lg shadow-lg border border-grayLight relative"
        >
          {(successMessage || errorMessage) && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center rounded-lg z-10">
              <p
                className={`text-2xl font-bold mb-4 ${
                  successMessage ? "text-yellowBright" : "text-red-400"
                }`}
              >
                {successMessage || errorMessage}
              </p>
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 mb-6 bg-grayNeutral text-white rounded border border-grayLight focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 mb-6 bg-grayNeutral text-white rounded border border-grayLight focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 mb-6 bg-grayNeutral text-white rounded border border-grayLight focus:outline-none focus:ring-2 focus:ring-gold resize-none"
            rows="5"
            maxLength="500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gold text-black font-bold rounded hover:bg-yellowBright transition duration-300 flex justify-center items-center"
          >
            {loading ? (
              <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
