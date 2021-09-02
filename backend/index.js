import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors'; 

const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
//app.use(bodyparser.urlencoded({ extended: true}));
//app.use(bodyparser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) =>
    res.send(`App is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);
//nodemon ./index.js --exec babel-node -e js