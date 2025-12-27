import { generateKeyPairSync, createSign, createVerify } from 'crypto';

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

let data = 'Essa string vai ser assinada!';

// Signature
const signer = createSign('rsa-sha256');

signer.update(data);

const signature = signer.sign(privateKey, 'hex');

console.log(`Assinatura:\n${signature}`);

// Intermediary
// data += ' Arquivo alterado'

// Sending this document -------- Document, signature and public key
const verifier = createVerify('rsa-sha256');

verifier.update(data);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(isVerified);
