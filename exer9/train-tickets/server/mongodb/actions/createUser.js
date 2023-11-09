import connectDB from '../index.js';
import User from '../models/User.js';
export default async function createUser(data) {
    try {
        await connectDB();
        const user = new User(data);
        await user.save();
    } catch (error) {
        console.error('Failed to create user:', error);
        throw error;
    }
}