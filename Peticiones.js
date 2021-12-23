const express = require ('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/Public"))

app.get('/',(req,res)=>{
    res.render("index",{
        titulo : "Curriculum Vitae"

    })
})


app.get('/contactanos',(req,res)=>{
    res.render("contactanos",{
      tituloP :"Biblioteca-ML",
      titulo : "Página de Contactanos"
    })
})

app.get('/html',(req,res)=>{
    res.render("html",{
      tituloP :"Biblioteca-ML",
      titulo : "Página de menu"
    })
})
/*app.get('/contactanos',(req,res)=>{
        res.send('Estamos en contactanos')
    })*/

 

app.listen(port,()=>{
    console.log ('puerto', port)
})
