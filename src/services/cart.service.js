import Cart from '../models/cart.model';
import Book from '../models/book.model';

export const addToCart = async (bookId, details) => {
  try {
    const book = await Book.findOne({ _id: bookId });

    if (!book) throw new Error('Book not found');

    if (book.quantity <= 0) throw new Error('Out of Stock');

    // Decrease the quantity of the book by 1
    await Book.findOneAndUpdate(
      { _id: bookId },
      { $inc: { quantity: -1 } },
      { new: true }
    );

    // Check if the book already exists in the user's cart
    const updateResult = await Cart.findOneAndUpdate(
      { user_id: details.user_id, 'items.book_id': bookId },
      {
        $inc: {
          'items.$.quantity': 1,
          total: book.price
        }
      },
      { new: true }
    );

    // If the book doesn't exist in the user's cart, add it
    if (!updateResult) {
      let cartData = await Cart.findOne({ user_id: details.user_id });

      // If the user doesn't have a cart, create a new one
      if (!cartData) {
        cartData = await Cart.create({
          user_id: details.user_id,
          items: [
            {
              book_id: book._id,
              bookImage: book.bookImage,
              bookName: book.bookName,
              price: book.price,
              quantity: 1
            }
          ],
          total: book.price
        });
        return cartData;
      }

      // Add the book to the user's cart
      cartData.items.push({
        book_id: book._id,
        bookImage: book.bookImage,
        bookName: book.bookName,
        price: book.price,
        quantity: 1
      });

      cartData.total += book.price;
      await cartData.save();

      return cartData;
    }

    return updateResult;
  } catch (error) {
    console.log(error)
    throw new Error('Failed to add item to cart');
  }
};



export const getCart = async (user) => {
  try {
    const cartData = await Cart.findOne({ user_id: user.user_id });
    return cartData;
  } catch (error) {
    console.log(error);
  }
};



export const removeCart = async (bookId, userDetails) => {
  try {
    const book = await Book.findOne({ _id: bookId });

    // Find the cart for the given user
    let cartData = await Cart.findOne({ user_id: userDetails.user_id });
    if (!cartData) {
      throw new Error('Cart Not found.');
    }

    // Find the index of the item to be removed in the cart items array
    const itemIndex = cartData.items.findIndex(
      (item) => item.book_id == bookId
    );
    if (itemIndex !== -1) {
      cartData.total -= cartData.items[itemIndex].price

      // Remove the item from the cart items array
      if(cartData.items[itemIndex].quantity === 1){
        cartData.items.splice(itemIndex, 1)
      }
      else {
        cartData.items[itemIndex].quantity -= 1;
      }

      book.quantity +=1;
      // Save the updated cart
      await book.save();
      await cartData.save();

      console.log('Item removed successfully.');
      
      return cartData;
    } else {
      throw new Error('Item not found in the cart.');
    }
  } catch (error) {
    console.log(error);
  }
};


export const ispurchase = async (bookDetails) => {
  try {
    const cartData = await Cart.findOne({
      user_id: bookDetails.user_id
    });

    if (cartData.items.length === 0) {
      throw new Error('Cart is empty');
    }

    cartData.isPurchase = true;
    await cartData.save();

    return cartData;
  } catch (error) {
    console.error('Error in ispurchase:', error);
    throw error;
  }
};