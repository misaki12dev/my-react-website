import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary_color">
      <h2 className="font-bold">CONTACT</h2>
      <div className="contact__box bg-white shadow-md rounded-xl max-w-lg mx-auto">
        <form action="" className="flex flex-col gap-10 p-10 max-auto">
          <input
            className="border rounded p-3"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="border rounded p-3"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="border rounded p-3"
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>

          <button type="submit" className="btn-primary bg-secondary_color">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact
