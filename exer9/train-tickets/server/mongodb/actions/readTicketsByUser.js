import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

export default async function readTicketsByUser(data) {
  try {
      await connectDB();
      const { userId } = data;
      const userExists = await User.findById(userId);
      if (!userExists) {
        const error = new Error('User Not Found');
        error.statusCode = 400;
        throw error;
      }
      return await Ticket.find({ userId : userId }).exec();
  } catch (error) {
      console.error('Failed to read ticket:', error);
      throw error;
  }
}