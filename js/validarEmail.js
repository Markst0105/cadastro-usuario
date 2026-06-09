
class Email {

    static validarEmail(e){ 

        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(br|com|net|org)$/;

        if(e.match(regex) == null){
            return false;
        }
       return true;
    }
    
}

if(typeof exports !== 'undefined'){
    module.exports = Email;
}

