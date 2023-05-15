//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botao-cadastra").click(function(){

        $("form-cadastra").slideToggle("slow");
        $("section-login").slideToggle("slow");
        $("botao-cadastra").hide();



    });
});