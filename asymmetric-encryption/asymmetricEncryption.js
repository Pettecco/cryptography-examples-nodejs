import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

console.log(publicKey);
console.log(privateKey);

const encryptedData = publicEncrypt(publicKey, Buffer.from('Mensagem super secreta'));

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString('utf-8'));
