import express from 'express';
import mongoose from 'mongoose';

/** App Configuration */
//TODO: 1st step 
const app = express();
const port = process.env.PORT || 9000;
//TODO: 4th step: setting up from monggodb 

/** API endpoints */
//200 means ok
//TODO: 2nd step 
app.get('/', (req, res) => res.status(200).send("HELLO PROGRAMMER"));

/** check if the app is listening */
//TODO: 3rd step 
app.listen(port, () => console.log(`listening on localhost: ${port}`));