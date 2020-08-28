const axios = require('axios')
require('./index')

axios.get('http://127.0.0.1:5000/')
    .then(r => {
        console.log(r)
        process.exit(0)
    })
    .catch(e => {
        console.log(e)
        process.exit(1)
    })

