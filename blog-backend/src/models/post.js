import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
   title: String,
   body: String,
   tags: [String], //문자열 배열
   publishedDate: {
       type: Date,
       default: Date.now, //현재 날짜
   }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;