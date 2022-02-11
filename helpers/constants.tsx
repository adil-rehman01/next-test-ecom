const APP_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'http://localhost:3000'
const MONGO_URI = 'mongodb://localhost:27017/testecom'
const JWT_SECRET_ENV = 'z5n8YCGETbd4ChxvnDmVRt2MJ9zC8hrv8oPVGHOg'

export { APP_URL, MONGO_URI, JWT_SECRET_ENV }