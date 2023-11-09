const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    age: Number
});

export default mongoose.models?.User || mongoose.model("User", userSchema)