// EmailJS Configuration
// Sign up at https://emailjs.com to get your credentials
// Once you sign up, update these values with your actual EmailJS keys

export const emailConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_default',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_default',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'public_key_default',
    recipientEmail: 'info@adsversa.com'
};

// Environment variables should be set in .env file:
// REACT_APP_EMAILJS_SERVICE_ID=your_service_id
// REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
// REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
