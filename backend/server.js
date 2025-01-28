import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors";

// Configure CORS
app.use(cors({
  origin: 'https://job-career-connect.vercel.app', // Replace with your frontend URL
  credentials: true,
}));

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});