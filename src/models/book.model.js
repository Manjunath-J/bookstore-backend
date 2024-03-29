import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  bookName: {
    type: String
  },
  author: {
    type: String
  },
  description: {
    type: String
  },
  discountPrice: {
    type: Number
  },
  bookImage: {
    type: String
  },
  admin_user_id: {
    type: String
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  }
});

export default model('Book', bookSchema,'book');
