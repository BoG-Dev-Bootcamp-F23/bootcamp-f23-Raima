import connectDB from '../index.js';
import Ticket from '../models/Ticket.js';
import User from "../models/User.js";

export default async function updateTicketByUser(data) {
  try {
    await connectDB();
    const { ticketId, userId } = data;
    const ticketExists = await Ticket.findById(ticketId);
    if (!ticketExists) {
      const error = new Error('Ticket Not Found');
      error.statusCode = 400;
      throw error;
    }
    const userExists = await User.findById(userId);
    if (!userExists) {
      const error = new Error('User Not Found');
      error.statusCode = 400;
      throw error;
    }
    await Ticket.findByIdAndUpdate(ticketId, { userId });
  } catch (error) {
    console.error('Failed to update ticket:', error);
    throw error;
  }
}