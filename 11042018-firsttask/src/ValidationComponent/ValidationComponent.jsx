import React from 'react';

const validationComponent = (props) => {
    const inputLength = props.symbols;
    let validationMessage = null;

    if (inputLength === 7) {
        validationMessage = (
            <p>Bingo!</p>
        )
    }
    else if (inputLength > 7) {
        validationMessage = (
            <p>Text too long</p>
        )
    }
    else {
        validationMessage = (
            <p>Text too short</p>
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