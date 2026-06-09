class Ano {

    static validarAno(ano){ 
        ano = String(ano);
        const regex = /^[0-9]{4}$/;
        if(!regex.test(ano)){
            return false;
        }
        const anoInt = parseInt(ano, 10);
        const anoAtual = new Date().getFullYear();
        if(anoInt < anoAtual - 120 || anoInt > anoAtual){
            return false;
        }
       return true;
    }
    
}

if(typeof exports !== 'undefined'){
    module.exports = Ano;
}

