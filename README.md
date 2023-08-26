# English Pronunciation Teacher

PROJECT THESIS
📝 Topic: Building an English learning website using the MERN Stack


Introduction
💻 Technologies used

Frontend: ReactJS, Material UI, Redux, Axios, React Hook Form, Yup    
Backend: NodeJS, ExpressJS, JWT, Nodemailer, Mongoose     
Database: MongoDB
Storage: Cloudinary
Deploy: -----------------

✨ Main functions
Register, login  
Email authentication, forgot password  
Listen and pronounce vocabulary with Speaker icon
General settings like voice, speed, custom theme
Learn IPA (International Phonetic Alphabet) table
Learn vocabulary by topic (Collection & Item)
Learn grammar by level (Watch video, grammar points & take quiz)  
Learn listening by topic (Watch video & take quiz)
Play vocabulary review games    
Leaderboard to compare results with other players
Take tests
Change user information   
Administration (Vocabulary, listening, quizzes, grammar & users)
Statistics

⚙ Setup


Install libraries in Frontend and Backend
npm install (or yarn install)
Go to Backend folder, create .env file and update following parameters

MONGODB_URL = Your MongoDB URL
ACTIVATION_TOKEN_SECRET = Your Activation Token Secret
ACCESS_TOKEN_SECRET = Your Access Token Secret   
REFRESH_TOKEN_SECRET = Your Refresh Token Secret
CLIENT_URL = Your Client URL
NODE_MAILER_USER = Your Email     
NODE_MAILER_PASSWORD = Your Email Password
CLOUD_NAME = Your Cloudinary Name
CLOUD_API_KEY = Your Cloudinary API Key
CLOUD_API_SECRET = Your Cloudinary API Secret
NODE_ENV = production

Token related parameters are from https://passwordsgenerator.net/

Run project
cd backend
npm start (or yarn dev to run dev environment)
cd frontend 
npm start (yarn start)