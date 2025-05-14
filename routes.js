import {Router} from "express"
import { database } from "./db.js"
const dadosUsuario = [
    "name","email","password"
]
export const userRoutes = Router()

userRoutes.get("",(req,res)=>{
   
    const users = database.users
    return res.status(200).json(users)
})
userRoutes.post("",(req,res)=>{
    const infos = Object.keys(req.body)
    console.log(infos,"infos")
    if(infos.length < dadosUsuario.length){
        return res.status(403).
        json({message:`Dados inválidos, os dados que devem ser enviados são:
             ${dadosUsuario.map((dado)=>dado)}`})
    }
    const user = req.body
    user.id = String(new Date().getTime())
 
    database.users.push(user)
    return res.status(201).json(user)
})
userRoutes.get("/:id",(req,res)=>{
    const findUser = database.users.find((user)=>user.id === req.params.id)
    if(!findUser){
       return res.status(404).json({message:"Usuário não encontrado"})
    }
    return res.status(200).json(findUser)
    
})