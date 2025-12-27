import jwt from 'jsonwebtoken';

const secretKey = 'chaveSuperSecreta';

const token = jwt.sign(
  {
    apelido: 'jm',
    curso: 'segurança e node.js',
  },
  secretKey,
);

console.log(token);

const decodedToken = jwt.verify(token, secretKey);

console.log(decodedToken);
