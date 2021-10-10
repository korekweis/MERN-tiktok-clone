import express from 'express';
import mongoose from 'mongoose';
// we need to place .js since we'll be using node js
import Data from "./data.js";
import Videos from "./dbModel.js";
// import Cors from 'cors';

/** App Configuration */
//TODO: 1st step 
const app = express();
const port = process.env.PORT || 9000;
//TODO: 4th step: setting up from monggodb 
const connection_url ="mongodb+srv://korekweis:kw3iskw3is!@cluster0.if88s.mongodb.net/tiktokDB?retryWrites=true&w=majority";


/** Middleware */
app.use(express.json());
//this is for deployment -> security without security 
app.use((req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin', '*'),
    res.setHeaders('Access-Control-Allow-Headers', '*'),
    next()
});
// app.use(Cors());

/** DB Config */
mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

/** API endpoints */
//200 means ok
//TODO: 2nd step 
app.get('/', (req, res) => res.status(200).send("HELLO PROGRAMMER"));

app.get('/v1/posts', (req, res) => {
    Data.find((err, data) => {
        if (err){ 
            //500 - internal server error
            res.status(500).send(err)
        } else { 
            //200 - means successfully found
            res.status(200).send(data)
        }
    })
});

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => { 
        if (err){ 
            //500 - internal server error
            res.status(500).send(err)
        } else { 
            //200 - means successfully found
            res.status(200).send(data)
        }
    })
});

app.post('/v2/posts', (req, res) => { 
    const video = req.body; 
    Videos.create(video, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else { 
            res.status(201).send(data);
        }
    });
});

/** check if the app is listening */
//TODO: 3rd step 
app.listen(port, () => console.log(`listening on localhost: ${port}`));