const bcrypt = require('bcrypt');

//Hashing the password 
export async function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}

//verify a password against a hashed one
export async function verifyPassword(plainPassword, hashedPassword) {
  try {

    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;

  } catch (error) {
    throw error;
  }
}