const SERVERURL = 'https://naver.com'

const fetch = require('node-fetch')

fetch(SERVERURL, {
  method: 'GET'
})
  .then( res => {
    let a = res.headers.get('date')
    let date = new Date(Date.parse(a) + (540 * 60 * 1000))
    console.log(date)
  })
  .catch(err => console.log(err))