module.exports.iniciaChat = function(application,req,res){
    
    var dadosForm = (req.body);

    req.assert('apelido',"O apleido é obrigatório!").notEmpty();

    var erros = req.validationErrors();

    if (erros){
        res.render('index', {validacao : erros});
        return;
    }
    
    res.render('chat');
}