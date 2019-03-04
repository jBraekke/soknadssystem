import React from 'react'
import Hero from '../elements/Hero';
import Logg from '../elements/Logg';
import './style/Søknader.css';


const Søknad = () => (
    <div>
        <div class="columns">
            <div class="column is-two-thirds">
                <Hero title="Søknad" subtitle="Se på søknad"></Hero>
                <div className="container">
                    <form>
                        <input placeholder="fødselsnummer" />
                        <input placeholder="Sykdom" />
                        <input placeholder="Legemiddel" />
                        <button>Send inn søknad</button>
                    </form>
                    <div>
                        <p>Todo: Pling! Sjekk motor om jeg får lov?</p>
                    </div>
                    <div>
                        <p>Todo: Hvis jeg får lov, send søknaden til neste prosess</p>
                    </div>
                    <div>
                        <p>Manuell || Godkjent</p>
                    </div>
                </div>
            </div>
            <div class="column is-one-thirds borderLeft">
                <Logg title="Logg" subtitle="Søknadens siste handlinger"></Logg>
            </div>
        </div>
    </div>
)

export default Søknad