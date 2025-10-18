import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData, contentData } from '../mock-data';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="particles-hero relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Particle Background */}
        <ParticleBackground preset="subtle" id="services-particles" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <span className="px-4 py-2 bg-teal-600/20 text-teal-400 rounded-full text-sm font-semibold">
              {contentData.services.hero.badge}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 serif-font">
              {contentData.services.hero.title}
            </h1>
            <p className="text-xl text-gray-300">
              {contentData.services.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {servicesData.map((service, index) => {
              const IconComponent = Icons[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'
                    }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <Card className="hover:shadow-2xl transition-all duration-500">
                      <CardContent className="p-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle2 className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link to="/contact">
                          <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:scale-105">
                            {contentData.common.buttons.learnMore} <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>

                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <img
                      src={`https://images.unsplash.com/photo-${[
                        '1460925895917-afdab827c52f',
                        '1556761175-b413da4baf72',
                        '1551288049-bebda4e38f71',
                        '1557804506-669a67965ba0',
                        '1563986768494-4dee2763ff3f',
                        '1551288049-bebda4e38f71'
                      ][index % 6]}?w=800`}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 serif-font">
            {contentData.services.cta.title}
          </h2>
          <p className="text-white/90 text-xl mb-8">
            {contentData.services.cta.subtitle}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {contentData.services.cta.button} <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;