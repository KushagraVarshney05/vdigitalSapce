import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { teamData, statsData, contentData } from '../mock-data';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="particles-hero relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Particle Background */}
        <ParticleBackground preset="subtle" id="about-particles" interactive={true} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 serif-font">
              {contentData.about.hero.title}
            </h1>
            <p className="text-xl text-gray-300">
              {contentData.about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src={contentData.about.whoWeAre.image.src}
                alt={contentData.about.whoWeAre.image.alt}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 serif-font">{contentData.about.whoWeAre.title}</h2>
              {contentData.about.whoWeAre.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentData.about.values.items.map((value, index) => {
              const IconComponent = value.icon === 'Target' ? Target :
                value.icon === 'Users' ? Users :
                  value.icon === 'Award' ? Award : TrendingUp;

              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      {teamData && teamData.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold serif-font mb-4">{contentData.about.team.title}</h2>
              <p className="text-gray-600 text-lg">{contentData.about.team.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamData.map((member) => (
                <Card key={member.id} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                    <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>)}

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;