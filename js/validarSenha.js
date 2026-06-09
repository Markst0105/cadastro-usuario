class Senha {
    static quantidade(expressao, palavra) {
        var qte = 0;
        if (palavra.match(expressao) !== null) {
            qte = palavra.match(expressao).length;
        }
        return qte;
    }
    
    static validarSenha(primeiroNome, anoDeNascimento, senha) {
        primeiroNome = String(primeiroNome);
        senha = String(senha);
        anoDeNascimento = String(anoDeNascimento);
    
        var expLetra = /[a-zA-Z]/g;
        var expNum = /[0-9]/g;
        var expCarEspecial = /[@#%&!+]/g;
        var expMaiuscula = /[A-Z]/g;

        var qtdLetra = this.quantidade(expLetra, senha);
        var qtdNumero = this.quantidade(expNum, senha);
        var qtdCarEspecial = this.quantidade(expCarEspecial, senha);
        var qtdMaiuscula = this.quantidade(expMaiuscula, senha);
    
        if (!(senha.length >= 6 && senha.length <= 20)) {
            return false;
        }
    
        if ((primeiroNome.length > 0 && senha.includes(primeiroNome)) || (anoDeNascimento.length > 0 && senha.includes(anoDeNascimento))) {
            return false;
        }
    
        if (qtdLetra >= 1 && qtdNumero >= 1 && qtdCarEspecial >= 1) {
            if ((senha.length > 12) && (qtdCarEspecial > 1) && (qtdMaiuscula > 1) && (qtdNumero > 1)) {
                return 'forte';
            }
            else if ((senha.length > 8) && (qtdCarEspecial >= 1) && (qtdNumero >= 1) && (qtdMaiuscula >= 1)) {
                return 'moderada';
            }
            else if (senha.length < 8 && qtdCarEspecial >= 1 && qtdNumero >= 1) {
                return 'fraca';
            }
            return 'fraca';
        }
        return false;
    }
}

if(typeof exports !== 'undefined'){
    module.exports = Senha;
}
