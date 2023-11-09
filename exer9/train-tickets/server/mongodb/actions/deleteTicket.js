import connectDB from '../index.js';
import Ticket from '../models/Ticket.js';
export default async function deleteTicket(data) {
  try {
    await connectDB();
    const { ticketId } = data;
    const ticketExists = await Ticket.findById(ticketId);
    if (!ticketExists) {
      const error = new Error('Ticket Not Found');
      error.statusCode = 400;
      throw error;
    }
    await Ticket.findByIdAndDelete(ticketId);
  } catch (error) {
    console.error('Failed to delete ticket:', error);
    throw error;
  }
}