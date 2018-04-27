import React from 'react';

const red = {
    color: 'red'
}

const green = {
    color: 'green'
}

const validationComponent = (props) => {
    const inputLength = props.symbols;
    let validationMessage = null;

    if (inputLength === 7) {
        validationMessage = (
            <p style={green}>Bingo!</p>
        )
    }
    else if (inputLength > 7) {
        validationMessage = (
            <p style={red}>Text too long</p>
        )
    }
    else {
        validationMessage = (
            <p style={red}>Text too short</p>
        )
    }

    return (
        <div>
            {validationMessage}
            <p>{props.symbols}</p>
        </div>
    )
}

export default validationComponent;