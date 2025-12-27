import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const message = 'Demonstração da criptografia simétrica';
const key = randomBytes(32);
const vi = randomBytes(16);

const cipher = createCipheriv('aes256', key, vi);

const cipherMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');

console.log(message);
console.log(cipherMessage);
