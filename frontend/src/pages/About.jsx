import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 serif-font">
              Our Story
            </h1>
            <p className="text-xl text-gray-300">
              Building digital excellence since 2010
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 serif-font">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-6">
                VdigitalSpace was founded with a simple mission: to help businesses thrive in the digital age. 
                Over the past 15 years, we've grown from a small startup to a leading digital marketing agency, 
                serving over 200 clients worldwide.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our team of 45+ experts combines creative thinking with data-driven strategies to deliver 
                exceptional results. We believe in transparent communication, measurable outcomes, and building 
                long-term partnerships with our clients.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're a startup looking to establish your brand or an enterprise seeking to optimize 
                your digital presence, we have the expertise and passion to help you succeed.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Results Driven', desc: 'Every strategy focused on measurable outcomes' },
              { icon: Users, title: 'Client First', desc: 'Your success is our success' },
              { icon: Award, title: 'Excellence', desc: 'Committed to delivering the highest quality' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Staying ahead of digital trends' }
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold serif-font mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">The minds behind your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.team.map((member) => (
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
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mockData.stats.map((stat, index) => (
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