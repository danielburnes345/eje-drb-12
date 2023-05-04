const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors');
const puerto = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/view/partials', ()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json());
app.use(cors());

//Definir rutas: login, categorias, index y Not Found
//GET o POsT

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/login',(req,res)=>{
    res.render('signin-one')
})

app.get('/categorias',(req,res)=>{
    res.render('advance-table')
})

app.listen(puerto,()=>{
    console.log('El servidor esta ejecutandose en el puerto '+ puerto)
})

app.get('*',(req,res)=>{
    res.render('404')
})