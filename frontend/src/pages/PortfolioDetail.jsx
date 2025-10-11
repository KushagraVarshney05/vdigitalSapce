import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Users } from 'lucide-react';
import { mockData } from '../mock';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = mockData.portfolio.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/portfolio')}
            className="text-white hover:text-teal-400 mb-8"
          >
            <ArrowLeft className="mr-2" /> Back to Portfolio
          </Button>
          <div className="max-w-4xl">
            <span className="px-4 py-2 bg-teal-600/20 text-teal-400 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 serif-font">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Details */}
            <div>
              <h2 className="text-4xl font-bold mb-6 serif-font">Project Overview</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our team worked closely with {project.title} to develop a comprehensive digital
                marketing strategy that addressed their unique challenges and goals. Through careful
                analysis and strategic planning, we implemented a multi-channel approach that
                delivered exceptional results.
              </p>

              <h3 className="text-2xl font-bold mb-4">Challenge</h3>
              <p className="text-gray-600 mb-6">
                {project.title} faced significant competition in the {project.category.toLowerCase()} space
                and needed to differentiate their brand while scaling their customer acquisition efforts.
                They required a data-driven approach to maximize ROI and achieve sustainable growth.
              </p>

              <h3 className="text-2xl font-bold mb-4">Solution</h3>
              <p className="text-gray-600 mb-6">
                We developed a comprehensive strategy combining SEO, content marketing, paid advertising,
                and social media to create a cohesive brand presence. Our approach focused on data
                analysis, continuous optimization, and creative excellence to drive measurable results.
              </p>
            </div>

            {/* Right Column - Key Metrics */}
            <div className="space-y-6">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2 text-teal-600">{project.results}</h4>
                      <p className="text-gray-600">Primary Growth Metric</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2">6 Months</h4>
                      <p className="text-gray-600">Project Duration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2">5 Channels</h4>
                      <p className="text-gray-600">Marketing Channels Used</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 serif-font">Services Delivered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'SEO Optimization',
              'Content Marketing',
              'Paid Advertising',
              'Social Media Management',
              'Email Campaigns',
              'Analytics & Reporting'
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="font-semibold">{service}</span>
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
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Let's discuss how we can help grow your business
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
