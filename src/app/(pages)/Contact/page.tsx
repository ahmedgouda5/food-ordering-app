'use client'

import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">Contact Us</h1>

      <p className="text-gray-600 text-center mb-8">
        We&apos;d love to hear from you! Whether you have questions, feedback, or want to place a special order,
        reach out to us using the form or contact info below.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        Or reach us directly at <span className="font-semibold text-orange-600">contact@pizzatime.com</span> <br />
        📞 +1 (234) 567-8901
      </div>
    </div>
  )
}

export default Contact
