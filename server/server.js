const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require("./config/mongoose.config");
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());

const JournalRoutes = require('./routes/Journal.Routes')
JournalRoutes(app);
const UserRoutes = require('./routes/User.Routes')
UserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );