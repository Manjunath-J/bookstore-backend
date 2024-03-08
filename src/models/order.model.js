import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  user_id: {
    type: String
  },
  orderData:[
    {
      items: [
        {
          book_id: {
            type: String
          },
          bookImage: {
            type: String
          },
          bookName: {
            type: String
          },
          price: {
            type: Number
          },
          quantity: {
            type: Number
          }
        }
      ],
      total: {
        type: Number,
        default: 0
      },
      orderDate:{
        type: String,
      },
    }
  ],
});

export default model('Order', orderSchema);