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
}