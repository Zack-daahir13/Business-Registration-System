import express from 'express'
import connectDb from './config/connect.js'
import router from './routes/businessType.js';
const app = express();
const port = process.env.PORT || 5000;

connectDb();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/api/businessType",router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});