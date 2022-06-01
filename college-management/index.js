require('dotenv').config()
require('./config/db')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const corsOptionsDelegate = require('./middleware/cors')


app.use('/uploads', express.static('uploads'))
const swaggerJson = require('./swagger/swagger.json')
const swaggerUi = require("swagger-ui-express");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
// const cron = require('node-cron');
// cron.schedule("1-5 * * * *",()=>{
//     console.log(new Date())
// })
app.use(fileUpload())
app.use(
    express.json({
        limit: '1024mb',
    }),
)
app.use(bodyParser.json());
app.use(cors(corsOptionsDelegate))
app.use(bodyParser.urlencoded({
    extended: true
}));

const routes = require('./routes/index')
app.use('/api', routes)



const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`The web server has started on port ${port}`);
});