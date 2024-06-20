import conf from "../conf/conf";
import { Client, Storage , Databases, Query , ID } from "appwrite";

export class service{
    Client = new Client();
    Storage;
    Database;

    constructor(){
        this.Client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProject);
        this.Storage = new Storage(this.Client);
        this.Database = new Databases(this.Client);
    }

    async creatPost({title, content,image,status,user,slug}){
        try {
            return await this.Database.createDocument(conf.appwriteDatabase,conf.appwriteCollection,slug,{
                title,
                content,
                image,
                status,
                user
            });
        } catch (error) {
            console.log("appwrite service :: creatPost :: error", error);
            return false;
        }
    }

    async updatePost(slug,{title,content,image,status}){
        try {
            return await this.Database.updateDocument(conf.appwriteDatabase,conf.appwriteCollection,slug,{
                title,
                content,
                image,
                status
            });
        } catch (error) {
            console.log("appwrite service :: updatePost :: error", error);
            return false;
        }
    }

    async deletePost(slug){
        try {
            await this.Database.deleteDocument(conf.appwriteDatabase,conf.appwriteCollection,slug);
            return true;
        } catch (error) {
            console.log("appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.Database.getDocument(conf.appwriteDatabase,conf.appwriteCollection,slug);
        } catch (error) {
            console.log("appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.Database.listDocuments(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.Storage.createFile(
                conf.appwriteBucket,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.Storage.deleteFile(
                conf.appwriteBucket,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.Storage.getFilePreview(
            conf.appwriteBucket,
            fileId
        )
    }

}