class User {
    constructor(authenticated = false, navn = '', rolle = '', rollesiden = '', praksis = '', adresse = '', postadresse = '', tlf = '', konto = '') {
        this.authenticated = authenticated;
        this.navn = navn;
        this.rolle = rolle;
        this.rollesiden = rollesiden;
        this.praksis = praksis;
        this.adresse = adresse;
        this.postadresse = postadresse;
        this.tlf = tlf;
        this.konto = konto;
    }
}

export default User;