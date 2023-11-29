import bcrypt, { hashSync } from 'bcryptjs';
import db from './models/index';
import { Model } from 'sequelize';

const salt = bcrypt.genSaltSync(10);

let createNewUser =  (data) =>{
    return new Promise (async(resole, reject) =>{
            try{
                let hashPasswordBcryct = await hashUserPassword(data.password);
                 await db.User.creat({
                    email: data.email,
                    fullname: data.fullname,
                    password: hashPasswordBcryct,
                    roleid: data.roleid,
                    phonenumber: data.phonenumber,
                    positionId: data.positionId
                })
                resole('ok')
            }catch(e){
                reject(e)
            }
            
    })
    
}
let hashUserPassword = (password) =>{
    return new Promise (async(resole, reject) => {
        try{
            let hashPasswordBcrypt = await hashSync(data, salt);
            resolve('ok hashpassword')
        }catch(e){
            reject(e)
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
}