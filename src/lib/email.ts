import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
// You can get them at https://dashboard.emailjs.com/admin/account
const SERVICE_ID = "service_rh81nsq";
const TEMPLATE_ID = "template_1vvvozo";
const PUBLIC_KEY = "bl60hsPObEGwbyffFlLGB";

export const sendEmail = async (templateParams: Record<string, unknown>) => {
    try {
        console.log("Sending email with params:", templateParams);

        const emailsStr = (templateParams.to_email as string) || "zagrebtransfers.hr@gmail.com";
        const emails = emailsStr.split(',').map(e => e.trim()).filter(Boolean);

        let lastResult;
        for (const email of emails) {
            const params = { ...templateParams, to_email: email };
            lastResult = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
            console.log(`Email sent successfully to ${email}`);
        }

        return { success: true, text: lastResult?.text };
    } catch (error) {
        console.error("Email sending failed detailed:", error);
        return { success: false, error };
    }
};
