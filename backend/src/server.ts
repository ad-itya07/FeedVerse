import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router as userRoute} from "./routes/userRoute";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user' , userRoute)

app.listen(3000 , () => {
    console.log(`App running on port 3000`);
})