'use strict';

const User = require('../json/user');

class UserRepository {
    constructor() {
        this.users = new Map([
            ['1', new User("1", 'fn1', 'ln1', '001@gmail.na')],
            ['2', new User("2", 'fn2', 'ln2', '002@gmail.na')]
        ]);
    }

    get(id) {
        return this.users.get(id);
    }

    save(id,user) {
        if(Math.random() < 0.499)
        {
            return null;
        }
        if (this.users.get(id) !== undefined) {
            this.users[user.id] = user;
            return 'Updated User with id=' + user.id;
        }
        else {
            this.users.set(user.id, user);
            return 'Added User with id=' + user.id;
        }
    }
}

const userRepository = new UserRepository();

module.exports = userRepository;