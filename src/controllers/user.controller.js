import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


//Create User
export const createUser = async (req, res, next) => {
  try {
    const data = await UserService.createUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};


//Log In
export const logIn = async (req, res, next) => {
  try {
    const data = await UserService.logIn(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User Logged-In successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};