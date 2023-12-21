const express = require('express')
//載入 express 函式庫
const users = express.Router()
//路由模塊
const cors = require('cors')
//Express 預設就會是 mode: no-cors 非同網域不能獲取資源
users.use(cors())
const fetch = require('node-fetch');

users.get('/Test_Button/:id', (req, res) => {
    console.log("確認這邊")
    const Process = async () => {
        const id = req.params.id
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        const url = `https://petstore.swagger.io/v2/store/order/${id}`
        const Response = await fetch(url, options)
        const ResponseJSON = await Response.json()
        res.send({"Response": ResponseJSON})
    }
    Process()
})

module.exports = users