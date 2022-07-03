"use strict"

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users)
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static getUsers(...fields) {
        const newUsesrs = fields.reduce((newUsesrs, field) => {
            if (users.hasOwnProperty(field)) {
                newUsesrs[field] = users[field];
            }
            return newUsesrs;
        }, {});
        return newUsesrs;
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);   //promise 반환

    }


    static save(userInfo) {
        users.id.push(userInfo.id);
        users.userName.push(userInfo.userName);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;