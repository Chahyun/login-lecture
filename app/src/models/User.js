"use strict"

const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }
    async login() {
        const client = this.body
        try {
            const { id, password } = await UserStorage.getUserInfo(client.id);
            if (id) {
                if (id === client.id && password === client.password) {
                    return { success: true };
                } return { success: false, msg: "비밀번호가 일치하지 않습니다." };
            } return { success: false, msg: "존재하는 아이디가 없습니다." };
        }catch(err) {
            return {success: false, err};
        }
        
    }
    async register() {
        const client = this.body
        console.log(client);
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err };;
        }

    }
}
module.exports = User;