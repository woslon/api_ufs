
import express from 'express';
import colecaoUf from './dados.js';

const app = express();

app.get('/ufs', (req, res) => {
 const ab = res.json(colecaoUf)
 console.log(ab)


});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080' );
});