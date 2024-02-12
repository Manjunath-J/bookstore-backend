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
    let data = await Book.find()
    data = data.filter((e)=> {
        if(searchContent === e.bookName || searchContent === e.author)
            return e;
    })
    return data;
  } catch (error) {
    console.log(error);
  }
};
