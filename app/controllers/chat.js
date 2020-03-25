module.exports.iniciaChat = function(application,req,res){
    
    var dadosForm = (req.body);

    req.assert('apelido',"O apelido é obrigatório!").notEmpty();

    var erros = req.validationErrors();

    if (erros){
        res.render('index', {validacao : erros});
        return;
    }

    application.get('io').emit('novoCliente', { apelido : dadosForm.apelido , mensagem : 'Entrou na sala'});
    
    res.render('chat', {apelido : dadosForm.apelido});
}