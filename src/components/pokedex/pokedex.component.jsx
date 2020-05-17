import React, {Component} from 'react';
import Pokecard from '../pokecard/pokecard.component';
import './pokedex.styles.scss';
import POKEMONS from './pokedex.data';

class Pokedex extends Component{

    static defaultProps = {
        pokemons: POKEMONS
    }

    render(){
        return(
            <div>
                <h1>Pokedex</h1>
                {   // we used this code instead of below bcz we it's short and does the same work for our case
                    this.props.pokemons.map(pokemon => (
                        // we can also pass pokemon object by pokemon={pokemon}, by doing so we will have to write-
                        // - .... = this.props.pokemon in pokecard component
                        <Pokecard key={pokemon.id} {...pokemon}/>

                    // callback function in map have each item of pokemons array as parameter, and each item's an object-
                    //- ,so we are destructuring each object and then collecting the remaining props in
                    //- otherPokeProps object

                    // this.props.pokemons.map( ( {id, ...otherPokeProps} ) => (

                        // now we are spreading the key-value pairs in otherPokedex and passing them to Pokecard-
                        // -component which will be availabe by their names

                        // <Pokecard key={id} {...otherPokeProps} />  
                    // ))
                    ))
                }
            </div>
        )
    }
}

export default Pokedex;