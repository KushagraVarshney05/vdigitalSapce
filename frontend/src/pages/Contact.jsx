import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you soon.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 serif-font">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-300">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 serif-font">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO & Content Marketing</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="ppc">PPC & Paid Advertising</option>
                    <option value="brand">Brand Strategy & Design</option>
                    <option value="email">Email Marketing</option>
                    <option value="analytics">Analytics & Insights</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2"
                    rows={6}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:scale-105"
                >
                  Send Message <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 serif-font">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                We're here to answer your questions and discuss how we can help grow your business.
              </p>

              <div className="space-y-6 mb-12">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-gray-600">hello@vdigitalspace.com</p>
                      <p className="text-gray-600">support@vdigitalspace.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                      <p className="text-gray-600">123 Marketing Street</p>
                      <p className="text-gray-600">Digital City, DC 10001</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-white" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 serif-font">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What services do you offer?',
                  a: 'We offer a full range of digital marketing services including SEO, content marketing, social media management, PPC advertising, brand strategy, email marketing, and analytics.'
                },
                {
                  q: 'How long does it take to see results?',
                  a: 'Most clients see initial improvements within 30-60 days, with significant results typically appearing within 3-6 months. Timeline varies based on your industry and specific goals.'
                },
                {
                  q: 'Do you work with small businesses?',
                  a: 'Yes! We work with businesses of all sizes, from startups to enterprises. We tailor our strategies to fit your specific needs and budget.'
                },
                {
                  q: 'What is your pricing structure?',
                  a: 'Our pricing is customized based on your specific needs and goals. Contact us for a personalized quote based on the services you require.'
                }
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
