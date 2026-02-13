import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
// You can get them at https://dashboard.emailjs.com/admin/account
const SERVICE_ID = "service_rh81nsq";
const TEMPLATE_ID = "template_1vvvozo";
const PUBLIC_KEY = "bl60hsPObEGwbyffFlLGB";

export const sendEmail = async (templateParams: Record<string, unknown>) => {
    try {
        const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return { success: true, text: result.text };
    } catch (error) {
        console.error("Email sending failed:", error);
        return { success: false, error };
    }
};
