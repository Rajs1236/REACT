import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class Authservice{
    client=new Client();
    account;


    constructor(){
        
    async createAccount(email,password,name){
try {
   const useraccount=await this.account.create(ID.unique(),email,password,name) 
if(useraccount){
   //call other method
   return this.login({email,password})
}
else{
 return useraccount
}
} catch (error) {
    throw error
}    }

async login(email,password){
    try {
      return await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw error
    }
}

async getCurrentUser(){
    try {
     return await this.account.get();
    } catch (error) {
        throw error;
    }

    return null; 
}

async logout(){
    try {
       await this.account.deleteSessions();
    } catch (error) {
        throw error
    }
}
}
const authservice=new Authservice();

export default Authservice
const client=new  Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('[PROJECT_ID');

const account=new Account(client)

const user=await account.create(
    ID.unique(),
    'email@example.com',
    'password'
);