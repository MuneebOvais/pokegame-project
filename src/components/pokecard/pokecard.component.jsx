import React, {Component} from 'react';
import './pokecard.styles.scss';

class Pokecard extends Component{
    doPadding = (num) => {
        let paddedDigits;
        let numOfDigits = num.toString().length;

        if(numOfDigits === 3){
            paddedDigits = num;
        }else if(numOfDigits === 2){
            paddedDigits = `0${num}`;
        }
        else{
            paddedDigits = `00${num}`
        }

        return paddedDigits;
    }

    render(){
        // destructuring props to prevent repetitions eg: this.props
        const {id, name, type, base_experience: exp} = this.props;
        return(
            <div>
                <p>{name}</p>
                <img
                    alt='pokemon'
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.doPadding(id)}.png`}
                    />
                <p>Type: {type}</p>
                <p>EXP: {exp}</p>
                <br />
            </div>
        )
    }
}

export default Pokecard;