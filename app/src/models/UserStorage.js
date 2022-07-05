"use strict"

const db = require("../config/db");

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

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "select * from users where id= ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }
    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "insert into users(id, userName, password) values (?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.userName, userInfo.password],
                (err) => {
                    if (err) reject(`${err}`);
                    else resolve({ success: true });
                });
        });
    }
}

module.exports = UserStorage;