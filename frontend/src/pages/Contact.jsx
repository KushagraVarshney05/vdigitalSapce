import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { servicesData, companyData, faqData, contentData } from '../mock-data';
import ParticleBackground from '../components/ParticleBackground';
import { emailConfig } from '../config/emailConfig';
import CountryCodeSelect from '../components/CountryCodeSelect';

// Initialize EmailJS
emailjs.init(emailConfig.publicKey);

// Common country calling codes for dropdown
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '',
    address: '',
    company: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          to_email: emailConfig.recipientEmail,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          country_code: formData.countryCode || 'Not specified',
          address: formData.address || 'Not specified',
          company: formData.company,
          service: formData.service || 'Not specified',
          message: formData.message,
          reply_to: formData.email
        }
      );

      if (result.status === 200) {
        toast({
          title: contentData.contact.form.submitButton.successTitle,
          description: contentData.contact.form.submitButton.successDescription,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '',
          address: '',
          company: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="particles-hero relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Particle Background */}
        <ParticleBackground preset="default" id="contact-particles" interactive={true} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 serif-font">
              {contentData.contact.hero.title}
            </h1>
            <p className="text-xl text-gray-300">
              {contentData.contact.hero.subtitle}
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
              <h2 className="text-3xl font-bold mb-6 serif-font">{contentData.contact.form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{contentData.contact.form.fields.name.label}</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder={contentData.contact.form.fields.name.placeholder}
                  />
                </div>

                <div>
                  <Label htmlFor="email">{contentData.contact.form.fields.email.label}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder={contentData.contact.form.fields.email.placeholder}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{contentData.contact.form.fields.phone.label}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder={contentData.contact.form.fields.phone.placeholder}
                  />
                </div>

                <div>
                  <Label htmlFor="countryCode">Country Code</Label>
                  <div className="mt-2">
                    <CountryCodeSelect
                      value={formData.countryCode}
                      onChange={(code) => setFormData((prev) => ({ ...prev, countryCode: code }))}
                      placeholder="Search and select country code"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Street address, city, country"
                  />
                </div>

                <div>
                  <Label htmlFor="company">{contentData.contact.form.fields.company.label}</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder={contentData.contact.form.fields.company.placeholder}
                  />
                </div>

                <div>
                  <Label htmlFor="service">{contentData.contact.form.fields.service.label}</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="">{contentData.contact.form.fields.service.placeholder}</option>
                    {servicesData.map((service) => (
                      <option key={service.id} value={service.value}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">{contentData.contact.form.fields.message.label}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2"
                    rows={6}
                    placeholder={contentData.contact.form.fields.message.placeholder}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : contentData.contact.form.submitButton.text}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 serif-font">{contentData.contact.info.title}</h2>
              <p className="text-gray-600 text-lg mb-8">
                {contentData.contact.info.subtitle}
              </p>

              <div className="space-y-6 mb-12">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{contentData.contact.info.cards.email.title}</h4>
                      <p className="text-gray-600">{companyData.contact.email.primary}</p>
                      <p className="text-gray-600">{companyData.contact.email.support}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{contentData.contact.info.cards.phone.title}</h4>
                      <p className="text-gray-600">{companyData.contact.phone.number}</p>
                      <p className="text-gray-600">{companyData.contact.phone.hours}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{contentData.contact.info.cards.address.title}</h4>
                      <p className="text-gray-600">{companyData.contact.address.street}</p>
                      <p className="text-gray-600">{companyData.contact.address.city}</p>
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
              {contentData.contact.faq.title}
            </h2>
            <div className="space-y-6">
              {faqData.map((faq) => (
                <Card key={faq.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
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
