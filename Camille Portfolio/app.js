const express = require('express');
// const serverless = require('serverless-http')
const app = express();
const path = require('path')
const ejsMate = require('ejs-mate')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'src/components')))

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/pages'));



app.get('/', (req ,res) => {
        res.render('content/home')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

// module.exports.handler = serverless(app)