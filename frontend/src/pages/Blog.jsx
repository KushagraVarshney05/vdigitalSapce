import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogData, contentData } from '../mock-data';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';
import { toast } from '../hooks/use-toast';

const Blog = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: contentData.blog.newsletter.errorTitle,
        description: contentData.blog.newsletter.errorDescription,
        variant: 'destructive'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: contentData.blog.newsletter.invalidEmailTitle,
        description: contentData.blog.newsletter.invalidEmailDescription,
        variant: 'destructive'
      });
      return;
    }

    // Mock newsletter subscription
    console.log('Newsletter subscription:', email);

    toast({
      title: contentData.blog.newsletter.successTitle,
      description: contentData.blog.newsletter.successDescription,
    });

    // Reset form
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="particles-hero relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Particle Background */}
        <ParticleBackground preset="subtle" id="blog-particles" interactive={true} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 serif-font">
              {contentData.blog.hero.title}
            </h1>
            <p className="text-xl text-gray-300">
              {contentData.blog.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 to-cyan-500 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">
                      {post.category[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white text-teal-600 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0"
                      >
                        {contentData.common.buttons.readMore} <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 serif-font">{contentData.blog.newsletter.title}</h2>
            <p className="text-gray-600 text-lg mb-8">
              {contentData.blog.newsletter.subtitle}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={contentData.blog.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none"
              />
              <Button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 transition-all duration-300 hover:scale-105"
              >
                {contentData.blog.newsletter.button}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;