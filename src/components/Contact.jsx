
import React from 'react';
import { Mail, Phone, Linkedin, MessageCircle, Facebook, Twitter, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Format the message for WhatsApp
    const formattedMessage = `Hello Nigel,%0A%0AMy Name is: ${name}%0AMy Email is: ${email}%0A%0AMessage:%0A${message}`;

    // WhatsApp URL with the phone number and pre-filled text
    const whatsappUrl = `https://wa.me/254720016343?text=${formattedMessage}`;

    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                <a href="mailto:nigel2421@gmail.com" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300">nigelandahua@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-blue-600 dark:text-blue-400" />
                <div className="flex flex-col">
                  <a href="https://wa.me/254720016343" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 flex items-center gap-2">
                    <MessageCircle size={20} /> WhatsApp: +254 720 016 343
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect with me</h3>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/nigel-andahua-079793169/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Linkedin size={28} />
                  </a>
                  <a href="http://www.facebook.com/signor.nigel" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Facebook size={28} />
                  </a>
                  <a href="https://x.com/nigel_andahua" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    <Twitter size={28} />
                  </a>
                  <a href="https://github.com/nigel2421" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSendMessage} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-200 dark:border-gray-700"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-200 dark:border-gray-700"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-200 dark:border-gray-700"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
