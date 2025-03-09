import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import "../app/globals.css"; 
import Navbar from '../components/NavBar'; 

Modal.setAppElement("#__next"); // Accessibility requirement

export default function Contact() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",  // Added email field
    message: "",
    service: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    
    const templateParams = {
      name: formData.name,
      email: formData.email,  // User's email to be used in the template
      message: formData.message,
      service: formData.service,
    };
    
    emailjs
      .send("service_cjhf708", "template_bltj2ps", templateParams, "XZdVw6tx29Af0T7pM")
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message. Please try again."));
  };

  return (
    <div className="bg-[#ffe8a2]">
      <Navbar />
    <div className="min-h-screen flex justify-center items-center bg-[#ffe8a2]">
      <button
        onClick={() => setModalIsOpen(true)}
        className="px-6 py-3 text-3xl font-bold font-serif rounded-md bg-[#fffdfb] text-black hover:bg-[#e9decb] transition"
      >
        CONTACT
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#313B2F]"></h2>
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e9decb]"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e9decb]"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 border rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-[#e9decb]"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <select
            name="service"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e9decb]"
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="">select a service</option>
            <option value="Mixing">Mixing</option>
            <option value="Film Composition">Composition for Film</option>
            <option value="Music Production">Music Production</option>
            <option value="Editing">Editing</option>
          </select>
          <button
            type="submit"
            className="px-6 py-3 text-lg font-bold rounded-md bg-[#6d624f] text-white hover:bg-[#e9decb] transition"
          >
            Send
          </button>
        </form>
        <button
          onClick={() => setModalIsOpen(false)}
          className="mt-4 text-gray-500 hover:text-black transition"
        >
          Close
        </button>
      </Modal>
    </div>
    </div>
  );
}