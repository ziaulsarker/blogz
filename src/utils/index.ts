const LOCAL = 'http://localhost:3000'
const PROD =  "https://school-eight-red.vercel.app"
const isDevelopment = process.env.NODE_ENV === "development"

export const BASE_URL = isDevelopment ? LOCAL : PROD
export const checkEnvironment = () => process.env.NODE_ENV;
