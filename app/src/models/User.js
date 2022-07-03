"use strict"

const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const client = this.body
        const { id, password } = UserStorage.getUserInfo(client.id);
        if (id) {
            if (id === client.id && password === client.password) {
                return { success: true };
            } return { success: false, msg: "비밀번호가 일치하지 않습니다." };
        } return { success: false, msg: "존재하는 아이디가 없습니다." };

    }
    register() {
        const client = this.body
        UserStorage.save(client);
    }
}
module.exports = User;