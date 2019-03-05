import moment from 'moment';

function RandomDate() {
    const days = Math.floor(Math.random() * 30);
    const date = moment().subtract(days, 'days');

    return date.format('DD/MM/YYYY');
}

function OpprettetAvRandom() {
    const folk = [
        "Jørgen Brække",
        "Kamilla Fredriksen",
        "Systemjobb",
        "Per Jensen (søker)"
    ]

    return folk[Math.floor(Math.random() * (folk.length))];
}

class Logg {
    constructor(beskjed = '', opprettet = RandomDate(), opprettetAv = OpprettetAvRandom()) {
        this.beskjed = beskjed;
        this.opprettet = opprettet;
        this.opprettetAv = opprettetAv;
    }
}

export default Logg;