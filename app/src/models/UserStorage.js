"use strict"

class UserStorage{
   static #users = {
        id : ["test","test1","test2"],
        password : ["pass","pass1","pass2"],
        name: ["testn","testn1","testn2"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsesrs = fields.reduce((newUsesrs, field)=>{
            if(users.hasOwnProperty(field)){
                newUsesrs[field] = users[field];
            }
            return newUsesrs;
        },{});
        return newUsesrs;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users)
        const userInfo = userKeys.reduce((newUser,info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
    
}

module.exports = UserStorage;