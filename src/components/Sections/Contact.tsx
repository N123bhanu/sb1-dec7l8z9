import { useState } from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend)
    alert('Thank you for your message! This would be connected to a backend in a real implementation.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    { 
      icon: <Mail size={24} />, 
      title: 'Email',
      value: 'midathachandini@gmail.com',
      link: 'mailto:midathachandini@gmail.com',
    },
    { 
      icon: <Linkedin size={24} />, 
      title: 'LinkedIn',
      value: 'linkedin.com/in/chandini-midatha',
      link: 'https://linkedin.com/in/chandini-midatha',
    },
    { 
      icon: <Github size={24} />, 
      title: 'GitHub',
      value: 'github.com/chandini12222546',
      link: 'https://github.com/chandini12222546',
    },
    { 
      icon: <Phone size={24} />, 
      title: 'Phone',
      value: '8096565410',
      link: 'tel:8096565410',
    },
  ];

  return (
    <section id="contact" className="py-16 min-h-screen flex flex-col justify-center opacity-0">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block">
          Contact Me
          <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500"></div>
        </h2>
        
        <p className="text-lg text-gray-600 mt-6 mb-12">
          Get in touch with me for collaborations, opportunities, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{method.title}</h3>
                  <p className="text-gray-600">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-gray-500">
          &copy; 2025 Midatha Chandini. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;