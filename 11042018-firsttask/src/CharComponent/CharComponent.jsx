import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {
    let chars = null;
    if (props.character)  {
        chars = (
            <div>
                {props.character.map((char, index)  =>
                    <div className="CharComponent" key={`${char}${index}`} onClick={() => props.removeChar(index)}>
                        {char}
                     </div>
                )}
            </div>
        )
    }
    return (
        <div>
            {chars}
        </div>
    )
}

export default charComponent;
