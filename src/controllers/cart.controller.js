import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';
import { error } from '@hapi/joi/lib/base';

export const addToCart = async (req, res) => {
  try {
    const data = await cartService.addToCart(req.params._id, req.body);
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
    const data = await cartService.ispurchase(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'successfull'
    });
  } catch (error) {
    return res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      message: error.message
    });
  }
};
