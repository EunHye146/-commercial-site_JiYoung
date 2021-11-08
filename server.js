const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port  = process.env.PORT || 5000;

const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.get('/api/events', (req, res) => {
    res.send([
        {
            'id': 1,
            'img': 'https://i.ibb.co/ZM82Sgd/charge1.jpg',
            'title': '오픈 이벤트',
            'date': '2021-12-20'
        },
        {
            'id': 2,
            'img': 'https://placeimg.com/64/64/2',
            'title': '오픈 이벤트2',
            'date': '2021-12-21'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));