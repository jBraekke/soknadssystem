class Soknad {
    constructor(navn = '', org = '', postnr = '', poststed = '', kontakt = '', status = '', id = 0) {
        this.navn = navn;
        this.org = org;
        this.postnr = postnr;
        this.poststed = poststed;
        this.kontakt = kontakt;
        this.status = status;
        this.id = id;
    }
}

export default Soknad;