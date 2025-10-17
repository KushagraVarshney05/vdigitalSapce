// Portfolio base data with detailed information
const portfolioProjects = [
    {
        id: 1,
        title: 'TechStart Inc.',
        category: 'SaaS',
        description: '300% increase in qualified leads through strategic SEO and content marketing.',
        results: '+300% Leads',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        duration: '8 Months',
        channels: '6 Channels',
        challenge: 'TechStart Inc. faced significant competition in the SaaS space and needed to differentiate their brand while scaling their customer acquisition efforts. They required a data-driven approach to maximize ROI and achieve sustainable growth in a crowded market.',
        solution: 'We developed a comprehensive strategy combining advanced SEO techniques, targeted content marketing, and conversion optimization. Our approach focused on technical SEO improvements, thought leadership content, and strategic link building to establish domain authority and drive qualified traffic.',
        services: ['Technical SEO', 'Content Strategy', 'Lead Generation', 'Conversion Optimization', 'Marketing Automation', 'Performance Analytics']
    },
    {
        id: 2,
        title: 'EcoLife Brand',
        category: 'E-commerce',
        description: 'Boosted online sales by 250% with targeted social media campaigns.',
        results: '+250% Sales',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
        duration: '6 Months',
        channels: '5 Channels',
        challenge: 'EcoLife Brand struggled with low online visibility and needed to build brand awareness in the competitive e-commerce sustainability market. They required a strategy to reach environmentally conscious consumers and drive online sales.',
        solution: 'We created an integrated social media and influencer marketing strategy focused on authentic storytelling and community building. Our approach included user-generated content campaigns, sustainable lifestyle content, and strategic partnerships with eco-influencers.',
        services: ['Social Media Marketing', 'Influencer Partnerships', 'Content Creation', 'E-commerce Optimization', 'Email Marketing', 'Brand Strategy']
    },
    {
        id: 3,
        title: 'FinanceFlow',
        category: 'Finance',
        description: 'Reduced customer acquisition cost by 40% through optimized PPC.',
        results: '-40% CAC',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        duration: '4 Months',
        channels: '4 Channels',
        challenge: 'FinanceFlow needed to reduce their high customer acquisition costs while maintaining lead quality in the competitive financial services sector. They required more efficient targeting and conversion strategies.',
        solution: 'We implemented advanced PPC optimization techniques including audience segmentation, ad copy testing, and landing page optimization. Our data-driven approach focused on identifying high-converting keywords and eliminating wasteful spending.',
        services: ['PPC Management', 'Landing Page Optimization', 'Conversion Tracking', 'Audience Targeting', 'A/B Testing', 'ROI Analysis']
    },
    {
        id: 4,
        title: 'HealthPlus',
        category: 'Healthcare',
        description: 'Built engaged community of 100K+ followers across social platforms.',
        results: '100K+ Followers',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
        duration: '10 Months',
        channels: '7 Channels',
        challenge: 'HealthPlus needed to build trust and credibility in the healthcare space while growing their online community. They required compliant marketing strategies that would engage users while adhering to strict healthcare regulations.',
        solution: 'We developed an educational content strategy focused on health awareness and community building. Our approach included expert interviews, patient success stories, and interactive wellness content that built trust and engagement.',
        services: ['Community Management', 'Content Marketing', 'Healthcare Compliance', 'Educational Content', 'Social Media Strategy', 'Reputation Management']
    }
];

// Function to get detailed portfolio data by ID
export const getPortfolioDetailsById = (projectId) => {
    const project = portfolioProjects.find(p => p.id === parseInt(projectId));
    if (!project) return null;

    return {
        ...project,
        detailedOverview: `Our team worked closely with ${project.title} to develop a comprehensive digital marketing strategy that addressed their unique challenges in the ${project.category.toLowerCase()} industry. Through careful analysis and strategic planning, we implemented a multi-channel approach that delivered exceptional results, achieving ${project.results.toLowerCase()} through innovative marketing techniques.`,
    };
};

// Export all portfolio projects for listing pages
export const getAllPortfolioProjects = () => {
    return portfolioProjects;
};

// Export specific project by ID for detail pages
export const getPortfolioProjectById = (projectId) => {
    return portfolioProjects.find(p => p.id === parseInt(projectId));
};
