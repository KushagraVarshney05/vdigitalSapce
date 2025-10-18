import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { contentData, companyData } from '../mock-data';
import ParticleBackground from './ParticleBackground';

const Footer = () => {
  return (
    <footer className="particles-hero relative bg-gray-900 text-white overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground preset="subtle" id="footer-particles" interactive={true} />

      <div className="container mx-auto px-6 py-16 relative z-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-teal-500 mb-4">{contentData.navigation.logo}</h3>
            <p className="text-gray-400 mb-6">
              {contentData.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{contentData.footer.sections.company.title}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                  {contentData.navigation.menu.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                  {contentData.navigation.menu.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                  {contentData.navigation.menu.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                  {contentData.navigation.menu.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
                  {contentData.navigation.menu.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{contentData.footer.sections.services.title}</h4>
            <ul className="space-y-2">
              {contentData.footer.sections.services.links.map((service, index) => (
                <li key={index} className="text-gray-400">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{contentData.navigation.menu.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{companyData.contact.address.street}, {companyData.contact.address.city}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">{companyData.contact.phone.number}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">{companyData.contact.email.primary}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{contentData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;