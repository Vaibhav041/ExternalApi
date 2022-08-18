const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request-promise');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    request('https://jsonplaceholder.typicode.com/users').then(body => {
        res.send(body);
    }).catch(err => {console.log(err)});
})

app.listen(9000, () => {
    console.log('connected')
});