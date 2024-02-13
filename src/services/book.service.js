import Book from '../models/book.model';

export const getAllBooks = async () => {
  try {
    const data = await Book.find();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (id) => {
  try {
    const data = await Book.findById(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (searchContent) => {
  try {
    const content = new RegExp(searchContent, 'i')
    let data = await Book.find({
      $or: [
        { bookName: { $regex: content } },
        { author: { $regex: content } }
      ]
    })
    return data
  } catch (error) {
    console.log(error);
  }
};


export const filterPrice = async () => {
  try {
    const data = await Book.find().sort({ price: 1 }); 
    return data;
  } catch (error) {
    console.log(error);
  }
};