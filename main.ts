import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json());

app.use(express.static('public'))
app.get('/vi/health',(req,res)=>{
    res.send('365ms')
})
app.post('/proxy',(req,resx)=>{
    const {body} = req
    axios(body).then(res=>{
        resx.send(res.data)
    }).catch(err=>{
        resx.send({success:false})
    })
})
app.listen(3500,()=>{
    console.log('hi')
})