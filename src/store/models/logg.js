import moment from 'moment';

function RandomDate() {
    const days = Math.floor(Math.random() * 30);
    const date = moment().subtract(days, 'days');

    return date.format('DD/MM/YYYY');
}


class Logg {
    constructor(beskjed = '', opprettetAv: '', dato = RandomDate()) {
        this.beskjed = beskjed;
        this.opprettetAv = opprettetAv;
        this.dato = dato;
    }
}

export default User;