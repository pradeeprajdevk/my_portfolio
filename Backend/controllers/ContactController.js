import { Contact } from '../models/index.js';

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
