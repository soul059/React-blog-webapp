import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProject);
        this.account = new Account(this.client);
    }

    async creatAccount({email, password,name}){
        try {
            //login
            return this.login({email, password});
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
           return await this.client.account.createEmailPasswordSession(email, password); 
        } catch (error) {
            throw error;
        }
    }

    async getCorrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite service :: getcurrentuser :: error", error);
            
        }
    
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;