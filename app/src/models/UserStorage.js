"use strict"

const fs = require("fs").promises;

class UserStorage {
    //이런 함수는 상단에
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

    static #getUsers(data,isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) {
            return users;
        }
        const newUsesrs = fields.reduce((newUsesrs, field) => {
            if (users.hasOwnProperty(field)) {
                newUsesrs[field] = users[field];
            }
            return newUsesrs;
        }, {});
        return newUsesrs;
    }
    static getUsers(isAll,...fields) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUsers(data,isAll, fields);
            })
            .catch(console.error);   //promise 반환


    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);   //promise 반환

    }


    static async save(userInfo) {
        const users =await this.getUsers(true)
        if(users.id.includes(userInfo.id)){
           throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.userName.push(userInfo.userName);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success:true};
    }
}

module.exports = UserStorage;