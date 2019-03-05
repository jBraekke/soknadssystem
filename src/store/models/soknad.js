import moment from 'moment';

function RandomDate() {
    const days = Math.floor(Math.random() * 30);
    const date = moment().subtract(days, 'days');

    return date.format('DD/MM/YYYY');
}

function RandomTlf() {
    let tlf = '';

    for (let index = 0; index < 8; index++) {
        tlf += Math.floor(Math.random() * 10);

        if(index % 2 === 1){
            tlf += " ";
        }
    }

    return tlf;
}

class Soknad {
    constructor(navn = '', org = '', postnr = '', poststed = '', kontakt = '', status = '', id = 0, opprettet = RandomDate(), tlf = RandomTlf()) {
        this.navn = navn;
        this.org = org;
        this.postnr = postnr;
        this.poststed = poststed;
        this.kontakt = kontakt;
        this.status = status;
        this.id = id;
        this.opprettet = opprettet;
        this.tlf = tlf;

        this.epost = `${kontakt.replace(/ /g, '.')}@${navn.replace(/ /g, '.')}`.toLowerCase().replace('.as', '.no');
    }
}

export default Soknad;