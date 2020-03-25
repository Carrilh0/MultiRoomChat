// Importar as configurações do servidor
var app = require('./config/server');
var socket = require('socket.io');
// Parametrizar a porta de escuta

var server = app.listen(80, function(){
    console.log('Servidor online');
});

var io = socket.listen(server);

app.set('io',io);

io.on('connect',function(socket){
    console.log("Usuário conectado")

    socket.on('disconnect',function(){
        console.log("Desconectado")
    })

    socket.on('mensagem',function(data){
        socket.emit('mensagens', {data : data , emitente : 1});
    })

    socket.broadcast.on('mensagem',function(data){
        socket.emit('mensagens', {data : data , emitente : 0});
    })
})