import moment from 'moment';

function RandomDate() {
    const days = Math.floor(Math.random() * 30);
    const date = moment().subtract(days, 'days');

    return date.format('DD/MM/YYYY');
}

function pad(tall) {
    if(tall < 10){
        return '0' + tall;
    }
    return tall;
}

function RandomTime() {
    const timer = Math.floor(Math.random() * 23);
    const minutter = Math.floor(Math.random() * 60);

    return `${pad(timer)}:${pad(minutter)}:${pad(minutter)}`;
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
    constructor(beskjed = '', opprettet = RandomDate(), opprettetAv = OpprettetAvRandom(), tid = RandomTime()) {
        this.beskjed = beskjed;
        this.opprettet = opprettet;
        this.opprettetAv = opprettetAv;
        this.tid = tid;
    }
}

export default Logg;
