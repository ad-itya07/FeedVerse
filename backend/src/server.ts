import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router as userRoute} from "./routes/userRoute";

dotenv.config();

const app = express();
const port = process.env.PORT || 7000

app.use(cors());
app.use(express.json());

app.use('/api/user' , userRoute)

app.listen(port , () => {
    console.log(`App running on port ${port}`);
})