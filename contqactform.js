// src/components/ContactForm.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',     // replace with actual ID from emailjs
      'your_template_id',    // replace with actual template ID
      form.current,
      'your_user_id'         // replace with your user ID or public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message: ' + error.text);
      }
    );
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded" />
        <textarea name="message" placeholder="Your Message" rows="4" required className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
