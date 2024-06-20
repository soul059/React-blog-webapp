const conf = {
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProject: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollection: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDatabase: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    
}

export default conf