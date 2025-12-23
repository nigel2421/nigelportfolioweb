
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-blue-400" />
                <a href="mailto:nigelandahua@gmail.com" className="text-lg hover:text-blue-300">nigelandahua@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-blue-400" />
                <a href="tel:+254714625243" className="text-lg hover:text-blue-300">+254 714 625 243</a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin size={24} className="text-blue-400" />
                <a href="https://www.linkedin.com/in/nigel-andahua-079793169/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-300">LinkedIn Profile</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
