import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';
import * as Icons from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 slide-in-left">
              <div className="inline-block">
                <span className="px-4 py-2 bg-teal-600/20 text-teal-400 rounded-full text-sm font-semibold">
                  Digital Marketing Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white serif-font leading-tight">
                Grow Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {mockData.company.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-600/50"
                  >
                    Get Started <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-all duration-300"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {mockData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-teal-400">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div
              className="relative slide-in-right"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="relative w-full h-[600px]">
                {/* Floating Cards */}
                <Card className="absolute top-0 right-0 w-64 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
                    <h3 className="font-bold text-xl mb-2">300% Growth</h3>
                    <p className="text-gray-600 text-sm">Average client growth in first 6 months</p>
                  </CardContent>
                </Card>

                <Card className="absolute top-32 left-0 w-64 shadow-2xl hover:shadow-coral-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 delay-100">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-coral-600 mb-4" />
                    <h3 className="font-bold text-xl mb-2">50M+ Reach</h3>
                    <p className="text-gray-600 text-sm">Combined audience reach across platforms</p>
                  </CardContent>
                </Card>

                <Card className="absolute bottom-20 right-12 w-64 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 delay-200">
                  <CardContent className="p-6">
                    <Target className="w-12 h-12 text-teal-600 mb-4" />
                    <h3 className="font-bold text-xl mb-2">ROI Focused</h3>
                    <p className="text-gray-600 text-sm">Data-driven strategies for maximum returns</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 serif-font">What We Do Best</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => {
              const IconComponent = Icons[service.icon];
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-teal-600"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:scale-105"
              >
                View All Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 serif-font mb-6">
                Partner With Industry Leaders
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We combine creative excellence with data-driven strategies to deliver exceptional results for our clients.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Fast Results', desc: 'See measurable impact within the first 30 days' },
                  { icon: Target, title: 'Targeted Approach', desc: 'Customized strategies for your specific audience' },
                  { icon: TrendingUp, title: 'Proven Growth', desc: '300% average ROI for our clients' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 serif-font">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your marketing goals
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Schedule a Consultation <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;