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
            badge: "Complete Digital Solutions",
            mainTitle: "Transform Your",
            highlightTitle: "Digital Presence",
            description: "We provide comprehensive digital marketing and technical solutions including website development, email migration, SEO, social media marketing, Google Ads, Meta Ads, and more - serving businesses globally.",
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
            subtitle: "Complete Digital Marketing & Technical Solutions",
            description: "From website development and migrations to SEO, social media marketing, and advertising campaigns - we offer end-to-end digital solutions for businesses across the globe.",
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
                "Adsversa was founded with a comprehensive vision: to be the one-stop solution for all digital marketing and technical needs. Over the past decade, we've evolved into a full-service digital agency, helping 500+ businesses across the globe establish and grow their digital presence.",
                "Our team of 60+ specialists spans web development, digital marketing, technical migrations, SEO experts, social media marketers, and advertising specialists. We combine technical expertise with creative marketing strategies to deliver complete digital solutions.",
                "Whether you need website development, email migration, domain transfers, SEO optimization, social media marketing, Google Ads, Meta Ads, or any other digital service - we have the global expertise to help businesses of all sizes succeed online."
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
            badge: "Our Services",
            title: "Comprehensive Digital Marketing Solutions",
            subtitle: "From strategy to execution, we provide end-to-end digital marketing services that drive results"
        },
        intro: {
            title: "Everything You Need to Succeed Online",
            description: "Our full-service digital marketing approach ensures all aspects of your online presence work together to drive growth and achieve your business objectives."
        },
        cta: {
            title: "Ready to Get Started?",
            subtitle: "Let's create a customized marketing strategy for your business",
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
        tagline: "Complete digital marketing and technical solutions for businesses worldwide",
        sections: {
            company: {
                title: "Company",
                links: ["About Us", "Our Team", "Careers", "Contact"]
            },
            services: {
                title: "Services",
                links: ["Website Development", "SEO & SMO", "Google & Meta Ads", "Email Migration"]
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
