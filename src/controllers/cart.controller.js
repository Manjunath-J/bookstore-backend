import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

export const addToCart = async (req, res) => {
  try {
    console.log(req.header('Authorization'));
    const data = await cartService.addToCart(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Added to Cart Successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

export const removeCart = async (req, res) => {
  try {
    const data = await cartService.removeCart(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Removed from Cart'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const data = await cartService.getCart(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Cart Items fetched Successfully'
    });
  } catch {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

export const isPurchase = async (req, res) => {
  try {
    
    const data = await cartService.isPurchase(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Successfull'
    });
  } catch (error) {
    if (error.message === 'Book not found in the cart.') {
      return res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message: error.message
      });
    } else {
      console.error("Error in isPurchase:", error);
      return res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: 'Error'
      });
    }
  }
};