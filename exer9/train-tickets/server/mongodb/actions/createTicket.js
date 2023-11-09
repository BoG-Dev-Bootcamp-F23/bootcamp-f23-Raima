import connectDB from '../index.js';
import Ticket from '../models/Ticket.js';
export default async function createTicket(data) {
    try {
        await connectDB();
        const ticket = new Ticket(data);
        await ticket.save();
    } catch (error) {
        console.error('Failed to create ticket:', error);
        throw error;
    }
}