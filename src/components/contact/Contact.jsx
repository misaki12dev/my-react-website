import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h1 className="text-center text-bold">Contact</h1>
      <div className="contact__box shadow-md rounded-xl max-w-lg mx-auto">
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
          <button
            type="submit"
            className="px-6 py-2.5 bg-coral text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-coral-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact
