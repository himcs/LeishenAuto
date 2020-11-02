const axios = require('axios');
const service = axios.create({
    //https://webapi.leigod.com
    baseURL: process.env.VUE_APP_BASE_API || "https://webapi.leigod.com/", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

module.exports = service