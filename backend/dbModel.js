import mongoose from 'mongoose';

const tiktokSchema = mongoose.Schema({
    video_url: String, 
    channel: String, 
    description: String, 
    song: String, 
    likes: String, 
    messages: String, 
    shares: String
})

//export the schema then import in server.js
export default mongoose.model('tiktok', tiktokSchema);