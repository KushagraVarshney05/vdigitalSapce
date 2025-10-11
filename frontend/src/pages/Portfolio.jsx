import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mock';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'SaaS', 'E-commerce', 'Finance', 'Healthcare'];

  const filteredPortfolio =
    filter === 'All'
      ? mockData.portfolio
      : mockData.portfolio.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 serif-font">
              Our Success Stories
            </h1>
            <p className="text-xl text-gray-300">
              Real results for real businesses
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={`transition-all duration-300 ${
                  filter === category
                    ? 'bg-teal-600 hover:bg-teal-700 text-white'
                    : 'hover:border-teal-600 hover:text-teal-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPortfolio.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">{item.results}</span>
                    <Link to={`/portfolio/${item.id}`}>
                      <Button
                        variant="ghost"
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                      >
                        View Case Study <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 serif-font">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Let's discuss how we can help you achieve similar results
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;