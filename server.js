const express= require('express');

const app = express();
const route = express.Router();

app.use(route);


route.get('/login', (req, res) =>{
    res.send('formulario login');
})
route.get('/register', (req, res) =>{
    res.send('formulario registro');
})
route.get('/', (req,res) => {
    res.send('dashboard o pagina principal')
});

route.get('/register', (req,res) => {
    res.send('registro exitoso');
});

route.post('/login', (req,res) => {
    res.send('inicio de sesion')
});



// app.use('/', (req,res) => {
// res.send('formulario de registro')
// });
// app.use('/signup', (req,res) => {
// res.send('formulario de registro')
// });

app.use('/project', express.static('public'))

app.listen(4010);
console.log('mi app is running')