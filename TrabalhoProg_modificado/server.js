const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

let pratos = [];

app.get('/prato', function(req, res){
    res.json({
        'pratos': pratos
    })
})

app.post('/prato', function(req, res){
    pratos.push(
        {
            'nome': req.body.nome,
            'quantidade': req.body.quantidade,
            'valor': req.body.valor
        },
    );
})
app.put('/prato', function(req, res){
    /* realizar um loop dentro do arrey pratos, usar requisão (req.body.nome) para verificar nome */
    
});
app.delete('/prato', function(req, res){
    res.json({
        'mensagem':'Deletado com sucesso',
        'prato':[
            {
                'nome':req.body.nome,
                'quantidade': req.body.quantidade,
                'valor': req.body.valor
            },
        ]
    })
});

app.get('/bruschetta', function(req, res){
    res.json({
        'mensagem':'sucesso',
        'descricao':'A Bruschetta é um petisco tradicional da Itália que pode ser feito com pães italianos, cortado em fatias, torrado e acrescidos de tomate, alho, manjericão e azeite de oliva. As coberturas podem variar, sendo utilizado queijo, salsicha, azeitona, cogumelos, salmão defumado, etc. É uma receita antiga, criada no século XV.',
        'imagem':'imagens/bruschetta.jpg'
    })
});

app.get('/tortellini', function(req, res){
    res.json({
        'mensagem':'sucesso',
        'descricao':'É um tipo de massa italiana com ovos recheados, prosciutto, mortadela, queijo parmesão e noz moscada, com caldo de carne ou galinha.',
        'imagem':'imagens/tortellini.jpg'
    })
});
app.get('/calzone', function(req, res){
    res.json({
        'mensagem':'sucesso',
        'descricao':'É um espécie de massa recheada como se fosse uma pizza. Ela pode ser frita ou assada.',
        'imagem':'imagens/calzone.jpg'
    })
});
app.get('/gelato', function(req, res){
    res.json({
        'mensagem':'sucesso',
        'descricao':'É semelhante ao sorvete, mas com uma adição maior de leite para produzir o creme. Para sua produção é adicionado menor quantidade de gordura e açúcar.',
        'imagem':'imagens/gelato.jpg'
    })
});
app.get('/spaguetti', function(req, res){
    res.json({
        'mensagem':'sucesso',
        'descricao':'É tipo de massa mais popular que pode ser servida com molhos, caldos ou sopas.',
        'imagem':'imagens/comida1.jpg'
    })
});




app.listen(
    3000,
    function () {
        console.log('Inicialização OK!');
    }
);
