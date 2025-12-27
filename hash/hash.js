import { createHash } from 'crypto';

function hash(password) {
  return createHash('sha256').update(password).digest('hex');
}

console.log(hash('Uma string qualquer'));

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = hash(password);
  }

  auth(name, password) {
    if (name === this.name && this.hash === hash(password)) {
      console.log('Usuário autencidado:', true);
    } else {
      console.log('Usuário autencidado:', false);
    }
  }
}

const user = new User('petteco', 'senhasecreta123');
user.auth('petteco', 'senhasecreta123');
user.auth('petteccco', 'senhasecreta12345');
