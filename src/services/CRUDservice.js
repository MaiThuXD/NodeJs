import bcrypt from 'bcryptjs';
import db from './models/index';

const salt = bcrypt.genSaltSync(10);

let createNewUser =  (data) =>{
    return new Promise (async(resole, reject) =>{
            try{
                 await db.User.creat({
                    email: data.email,
                    fullname: data.fullname,
                    password: data.password,
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
// let hashUserPassword = (password) =>{
//     return new Promise (async(resole, reject) => {
//         try{
//             let hashPasswordBcrypt = await hashUserPassword(data, salt),
//             resole('ok hashpassword')
//         }catch(e){
//             reject(e)
//         }
//     })
// }