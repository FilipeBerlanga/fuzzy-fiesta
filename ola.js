function formValidator( e ){
    let saida = document.getElementById("saida");
    let texto = e.Name.value;
    let textoSaida ="";
    const lim = e.qtdCaracter.value;
    let conta = 0;
    let funcName = e.txtFuncao.value;
    let openFunction = e.checkbox.checked == true ? "(" : "";
    let closeFunction = e.checkbox.checked == true ? ")" : "";
    openFunction += e.sdelimiter.value;
    closeFunction = e.sdelimiter.value + closeFunction + ( e.chbPonto.checked == true ? ";" : "");
    saida.innerHTML = "";
    textoSaida += "<p>" + funcName + openFunction + "";
    for(var i = 0 ; i < texto.length ; i++){
        if(conta == lim){
            textoSaida += closeFunction + ";</p><p>" + funcName + openFunction ;
            conta = 0;
        }
        if(texto.charAt(i) == '"'){
            textoSaida += "\\\"";
        }else if(texto.charAt(i) == '\n'){
            textoSaida += "\\n";
        }else if(texto.charAt(i) == '\''){
            textoSaida += "\\'";
        }else if(texto.charAt(i) == '<'){
            textoSaida += "&lt;";
        }else if(texto.charAt(i) == '>'){
            textoSaida += "&gt;";
        }else{
            textoSaida += texto.charAt(i);
        }
        conta++;
    }
    textoSaida+=closeFunction;
    console.log(textoSaida);
    saida.innerHTML = textoSaida;
    window.location.hash = "saida";
    return false;
}

