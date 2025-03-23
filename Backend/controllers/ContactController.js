import { Contact } from '../models/index.js';
import { sendEmail } from '../services/emailService.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact(req.body);
    await contact.save();

    // Send email to the admin
    const subject = `New Message from ${name}`;
    // Create HTML content dynamically
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #007BFF;">Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f4f4f4; padding: 10px;">${message}</p>
      </div>
    `;
    await sendEmail(email, subject, message, htmlContent);

    res.status(201).json(contact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
