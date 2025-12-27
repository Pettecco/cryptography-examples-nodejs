import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function hashWithSalt(password) {
  const salt = randomBytes(16).toString('hex');

  const hashedPassword = scryptSync(password, salt, 64).toString('hex');

  return `${salt}:${hashedPassword}`;
}

class User {
  constructor(name, password) {
    this.name = name;
    [this.salt, this.hash] = hashWithSalt(password).split(':');
  }

  auth(name, password) {
    if (name === this.name) {
      const testHash = scryptSync(password, this.salt, 64);
      const realHash = Buffer.from(this.hash, 'hex');

      return timingSafeEqual(testHash, realHash);
    }

    return false;
  }
}

const newUser = new User('João', 'senhacoxinha123');

console.log(newUser);
console.log('Usuário autenticado:', newUser.auth('João', 'senhacoxinha123'));
console.log('Usuário autenticado:', newUser.auth('João', 'senhacoxinha12345'));
