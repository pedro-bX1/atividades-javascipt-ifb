function cadastrarPrato() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/prato',
        data: {
            'nome': $('#nome_prato').val(),
            'quantidade': $('#quantidade_prato').val(),
            'valor': $('#valor_prato').val()
        },
        success: function (dados) {
            console.log(dados)
            $('#tabela_pratos').text(dados.mensagem)
        },
        error: function (dados) {
            console.log(dados);

        }
    });
}
function atualizarPrato() {
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/prato',
        data: {
            'nome': $('#nome_prato').val(),
            'quantidade': $('#quantidade_prato').val(),
            'valor': $('#valor_prato').val()
        },
        success: function (dados) {
            console.log(dados)
            $('#tabela_pratos').text(dados.mensagem)
        },
        error: function (dados) {
            console.log(dados);

        }
    });
}
function excluirPrato() {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/prato',
        data: {
            'nome': $('#nome_prato').val(),
            'quantidade': $('#quantidade_prato').val(),
            'valor': $('#valor_prato').val()
        },
        success: function (dados) {
            console.log(dados)
            $('#tabela_pratos').text(dados.mensagem)
        },
        error: function (dados) {
            console.log(dados);

        }
    });
}
function visualizarPrato() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/prato',
        success: function (dados) {
            console.log(dados.prato)
            $('#tabela_pratos').append('<p>' + dados.prato[0].nome + '</p>')
            $('#tabela_pratos').append(dados.prato[1].nome)
        },
        error: function (dados) {

        }
    });
}
function verBru() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/bruschetta',
        success: function (dados) {
            $('.bru').eq(0).html(`<img src=${dados.imagem} width=100% height=100%> <br>`)
            $('.bru').eq(1).html('<p>' + dados.descricao + '</p>')

        },
        error: function (dados) {

        }
    });
}
function verTortellini() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/tortellini',
        success: function (dados) {
            $('.torte').eq(0).html(`<img src=${dados.imagem} width=100% height=100%> <br>`)
            $('.torte').eq(1).html('<p>' + dados.descricao + '</p>')
        },
        error: function (dados) {

        }
    });
}
function verCalzone() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/calzone',
        success: function (dados) {
            $('.cal').eq(0).html(`<img src=${dados.imagem} width=100% height=100%> <br>`)
            $('.cal').eq(1).html('<p>' + dados.descricao + '</p>')

        },
        
        error: function (dados) {

        }
    });
}
function verGelato(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/gelato',
        success: function (dados) {
            $('.gelato').eq(0).html(`<img src=${dados.imagem} width=100% height=100%> <br>`)
            $('.gelato').eq(1).html('<p>' + dados.descricao + '</p>')
        },
        error: function (dados) {

        }
    });
}

function verSpaguetti(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/spaguetti',
        success: function (dados) {
            $('.spague').eq(0).html(`<img src=${dados.imagem} width=100% height=100%> <br>`)
            $('.spague').eq(1).html('<p>' + dados.descricao + '</p>')
        },
        error: function (dados) {

        }
    });
}

