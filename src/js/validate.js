export default class Validator {
    validateUsername(userName) {
        if ( (/[^a-z0-9\-\_]/i).test(userName) ) {
            return false;
        }
        
        if( (/^[0-9]/).test(userName) ) {
            return false;
        }
        if((/^[\-\_]/).test(userName)){
            return false;
        }
        if(/[0-9]$/.test(userName)){
            return false;
        }
        if(/[\-\_]$/.test(userName)){
            return false;
        }
        if(/\d{4,}/.test(userName)){
            return false;
        }
        return true;

    }
}