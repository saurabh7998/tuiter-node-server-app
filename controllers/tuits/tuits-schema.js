import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   avatarImage: String,
                                   userName: String,
                                   handleName: String,
                                   time: String,
                                   topic: String,
                                   content: String,
                                   replies: Number,
                                   retuits: Number,
                                   dislikes: {type: Number, default: 0},
                                   disliked: {type: Boolean, default: false},
                                   likes: {type: Number, default: 0},
                                   liked: {type: Boolean, default: false},
                               }, {collection: 'tuits'});
export default schema;
