import conf from '../conf/conf.js'

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl) // Your API Endpoint
        .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
          try {
                return await this.databases.createDocument(
                    conf.appWriteDatabaseId,
                    conf.appWriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                )
          } catch (error) {
            console.log("AppWrite service :: createpost:: error",error);
          }
    }


    async updatePost(slug,{title,content,featuredImage,status}){
       try {
          return await this.databases.updateDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
          )
       } catch (error) {
        console.log("AppWrite service :: updatePost:: error",error);
       }
    }

    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
              conf.appWriteDatabaseId,
              conf.appWriteCollectionId,
              slug,
            )
            return true;
         } catch (error) {
          console.log("AppWrite service :: deletePost:: error",error);
          return false;
         }
    }

//for singal post
    async getPost(slug){
      try {
        return await this.databases.getDocument(
          conf.appWriteDatabaseId,
          conf.appWriteCollectionId,
          slug
        )
      } catch (error) {
        console.log("AppWrite service :: GetSingalPost:: error",error);
        return false
      }
    }

    //get All posts
    async getPosts (queries=[Query.equal("status","active")]){
      try {
         return await this.databases.listDocuments(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            queries
          )
      } catch (error) {
        console.log("AppWrite service :: getAllPost:: error",error);
        return false
      }
    }

    //file upload service

    async uploadFile(file){
      try {
          return await this.bucket.createFile(
            conf.appWriteBucketId,
            ID.unique(),
            file
          )
      } catch (error) {
        console.log("AppWrite service :: fileUpload:: error",error);
        return false;
      }
    }

    //deleting the file
    async deleteFile(fileId){
      try {
          await this.bucket.deleteFile(
            conf.appWriteBucketId,
            fileId
          )
          return true
      } catch (error) {
        console.log("AppWrite service :: deletefile:: error",error);
        return false;
      }
    }


    // file preview :---->

    getFilePreview(fileId){
      return this.bucket.getFilePreview(
        conf.appWriteBucketId,
        fileId
      )
    }


}


const service = new Service()

export default service