import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogData, blogDetailsData, contentData, getBlogDetailsById } from '../mock-data';
import { parse } from 'date-fns';
import { get } from 'react-hook-form';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{contentData.common.messages.noResults}</h1>
          <Link to="/blog">
            <Button className="bg-teal-600 hover:bg-teal-700">
              {contentData.blogDetail.navigation.back}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Mock full blog content - for demo purposes, we'll generate some content
  // Import fullContent from mock-data based on blog post
  const fullContent = getBlogDetailsById(post.id).fullContent;
  console.log(fullContent);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="text-white hover:text-teal-400 mb-8"
          >
            <ArrowLeft className="mr-2" /> {contentData.blogDetail.navigation.back}
          </Button>

          <div className="max-w-4xl">
            <span className="px-4 py-2 bg-teal-600/20 text-teal-400 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 serif-font">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <span className="text-white text-9xl font-bold opacity-20">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-12 italic border-l-4 border-teal-600 pl-6">
              {post.excerpt}
            </p>

            {/* Full Content */}
            <div className="prose prose-lg max-w-none">
              {fullContent.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-12 mb-6 serif-font">
                      {block.content}
                    </h2>
                  );
                } else if (block.type === 'paragraph') {
                  return (
                    <p key={index} className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {block.content}
                    </p>
                  );
                } else if (block.type === 'list') {
                  return (
                    <ul key={index} className="space-y-3 mb-8">
                      {block.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700 text-lg flex items-start">
                          <span className="text-teal-600 mr-3 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <Tag className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {['Digital Marketing', post.category, '2025', 'Strategy'].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center space-x-4">
                <Share2 className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Share:</span>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                  >
                    <Facebook size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-sky-50 hover:text-sky-600 hover:border-sky-600"
                  >
                    <Twitter size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700"
                  >
                    <Linkedin size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 serif-font">{contentData.blogDetail.navigation.relatedPosts}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogData
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 to-cyan-500 h-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold opacity-20">
                        {relatedPost.category[0]}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0">
                        {contentData.common.buttons.readMore} →
                      </Button>
                    </Link>
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
            {contentData.blogDetail.cta.title}
          </h2>
          <p className="text-white/90 text-xl mb-8">
            {contentData.blogDetail.cta.subtitle}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {contentData.blogDetail.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;