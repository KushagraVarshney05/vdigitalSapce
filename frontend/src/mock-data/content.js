// All page content and UI text for easy modification by non-technical users
export const contentData = {
    // Contact Page Content
    contact: {
        hero: {
            title: "Let's Work Together",
            subtitle: "Have a project in mind? We'd love to hear from you."
        },
        form: {
            title: "Send Us a Message",
            fields: {
                name: {
                    label: "Full Name *",
                    placeholder: "John Doe"
                },
                email: {
                    label: "Email Address *",
                    placeholder: "john@example.com"
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "+1 (555) 123-4567"
                },
                company: {
                    label: "Company Name",
                    placeholder: "Your Company"
                },
                service: {
                    label: "Service Interested In",
                    placeholder: "Select a service"
                },
                message: {
                    label: "Your Message *",
                    placeholder: "Tell us about your project..."
                }
            },
            submitButton: {
                text: "Send Message",
                successTitle: "Message Sent!",
                successDescription: "Thank you for contacting us. We'll get back to you soon."
            }
        },
        info: {
            title: "Get in Touch",
            subtitle: "We're here to answer your questions and discuss how we can help grow your business.",
            cards: {
                email: {
                    title: "Email Us"
                },
                phone: {
                    title: "Call Us"
                },
                address: {
                    title: "Visit Us"
                }
            }
        },
        faq: {
            title: "Frequently Asked Questions"
        }
    },

    // Home Page Content
    home: {
        hero: {
            badge: "AI Data Services & Digital Marketing",
            mainTitle: "Build Smarter with",
            highlightTitle: "AI & Digital Solutions",
            description: "We provide end-to-end AI data collection, annotation, and validation services alongside comprehensive digital marketing solutions — helping businesses, startups, and research teams build reliable AI models and grow their online presence globally.",
            cta: {
                primary: "Get Started",
                secondary: "Our Services"
            }
        },
        stats: {
            title: "Trusted by Businesses Worldwide"
        },
        services: {
            title: "Our Services",
            subtitle: "AI Data Services & Digital Marketing Solutions",
            description: "From AI data collection, annotation, and dataset validation to website development, SEO, social media marketing, and advertising campaigns — we offer end-to-end solutions for businesses and AI teams across the globe.",
            cta: "View All Services"
        },
        portfolio: {
            title: "Success Stories",
            subtitle: "Global Results for Growing Businesses",
            cta: "View All Projects"
        },
        finalCta: {
            title: "Ready to Transform Your Digital Presence?",
            subtitle: "Let's discuss how our comprehensive digital solutions can accelerate your business growth globally",
            button: "Start Your Project"
        }
    },

    // About Page Content
    about: {
        hero: {
            title: "Our Story",
            subtitle: "Building digital excellence since 2010"
        },
        whoWeAre: {
            title: "Who We Are",
            image: {
                src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
                alt: "Our team"
            },
            paragraphs: [
                "Adsversa operates at the intersection of AI data services and digital marketing. We specialize in end-to-end AI data collection, annotation, and validation — helping businesses, startups, and research institutions build accurate, production-ready datasets for machine learning, computer vision, and NLP applications.",
                "Beyond AI data operations, our team of 60+ specialists delivers comprehensive digital marketing solutions including web development, SEO, social media marketing, and paid advertising. We combine technical AI expertise with creative marketing strategies to serve clients across the globe.",
                "Whether you need custom image datasets, multilingual speech data, bounding box annotation, participant recruitment, or a full digital marketing campaign — we have the global expertise and operational scale to deliver."
            ]
        },
        values: {
            title: "Our Values",
            items: [
                {
                    icon: "Target",
                    title: "Results Driven",
                    description: "Every strategy focused on measurable outcomes"
                },
                {
                    icon: "Users",
                    title: "Client First",
                    description: "Your success is our success"
                },
                {
                    icon: "Award",
                    title: "Excellence",
                    description: "Committed to delivering the highest quality"
                },
                {
                    icon: "TrendingUp",
                    title: "Innovation",
                    description: "Staying ahead of digital trends"
                }
            ]
        },
        team: {
            title: "Meet Our Team",
            subtitle: "The minds behind your success"
        }
    },

    // Services Page Content
    services: {
        hero: {
            badge: "AI & Digital Services",
            title: "AI Data Services & Digital Marketing",
            subtitle: "From AI data collection and annotation pipelines to full-scale digital marketing — we deliver end-to-end solutions that power intelligent products and business growth"
        },
        intro: {
            title: "Everything You Need to Succeed Online",
            description: "Our full-service approach combines real AI data operations with proven digital marketing strategies to help businesses build smarter products and grow their online presence."
        },
        cta: {
            title: "Ready to Get Started?",
            subtitle: "Let's create a customized AI data or marketing strategy for your business",
            button: "Contact Us Today"
        }
    },

    // Portfolio Page Content
    portfolio: {
        hero: {
            title: "Our Success Stories",
            subtitle: "Real results for real businesses"
        },
        filters: {
            all: "All Projects",
            categories: ["All", "SaaS", "E-commerce", "Finance", "Healthcare"]
        },
        cta: {
            title: "Ready to Be Our Next Success Story?",
            subtitle: "Let's discuss how we can help you achieve similar results",
            button: "Start Your Project"
        }
    },

    // Blog Page Content
    blog: {
        hero: {
            title: "Insights & Resources",
            subtitle: "Stay updated with the latest digital marketing trends and strategies"
        },
        featured: {
            title: "Featured Article"
        },
        newsletter: {
            title: "Subscribe to Our Newsletter",
            subtitle: "Get the latest insights delivered straight to your inbox",
            placeholder: "Enter your email",
            button: "Subscribe",
            successTitle: "Successfully Subscribed!",
            successDescription: "Thank you for subscribing to our newsletter. You'll receive the latest insights in your inbox.",
            errorTitle: "Error",
            errorDescription: "Please enter your email address",
            invalidEmailTitle: "Invalid Email",
            invalidEmailDescription: "Please enter a valid email address"
        }
    },

    // Blog Detail Page Content
    blogDetail: {
        navigation: {
            back: "Back to Blog",
            relatedPosts: "Related Articles"
        },
        cta: {
            title: "Ready to Transform Your Digital Strategy?",
            subtitle: "Let's discuss how we can help you achieve your marketing goals",
            button: "Get Started Today"
        }
    },

    // Portfolio Detail Page Content
    portfolioDetail: {
        navigation: {
            back: "Back to Portfolio"
        },
        sections: {
            overview: "Project Overview",
            challenge: "Challenge",
            solution: "Solution",
            services: "Services Delivered",
            results: "Results Achieved"
        },
        metrics: {
            duration: "Project Duration",
            channels: "Marketing Channels Used",
            growth: "Primary Growth Metric"
        },
        cta: {
            title: "Ready to Achieve Similar Results?",
            subtitle: "Let's discuss how we can help grow your business",
            button: "Start Your Project"
        }
    },

    // Navigation Menu
    navigation: {
        logo: "Adsversa",
        menu: {
            home: "Home",
            about: "About",
            services: "Services",
            portfolio: "Portfolio",
            blog: "Blog",
            contact: "Contact"
        },
        cta: "Get Quote"
    },

    // Footer Content
    footer: {
        tagline: "AI data services and digital marketing solutions for businesses and AI teams worldwide",
        sections: {
            company: {
                title: "Company",
                links: ["About Us", "Our Team", "Careers", "Contact"]
            },
            services: {
                title: "Services",
                links: ["AI Data Collection", "Data Annotation", "Dataset Validation", "Digital Marketing"]
            },
            resources: {
                title: "Resources",
                links: ["Blog", "Case Studies", "Digital Tools", "Support"]
            }
        },
        social: {
            title: "Follow Us"
        },
        copyright: "© 2025 Adsversa. All rights reserved.",
        legal: ["Privacy Policy", "Terms of Service"]
    },

    // Common Buttons & Actions
    common: {
        buttons: {
            learnMore: "Learn More",
            getStarted: "Get Started",
            viewMore: "View More",
            contactUs: "Contact Us",
            readMore: "Read More",
            backToTop: "Back to Top",
            close: "Close",
            submit: "Submit",
            cancel: "Cancel",
            save: "Save",
            edit: "Edit",
            delete: "Delete",
            share: "Share",
            download: "Download"
        },
        messages: {
            loading: "Loading...",
            error: "Something went wrong. Please try again.",
            success: "Success!",
            noResults: "No results found.",
            comingSoon: "Coming Soon"
        }
    }
};
