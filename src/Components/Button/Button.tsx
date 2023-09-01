import React from 'react';

type ButtonStyle ={
    btnStyle: React.CSSProperties
}
const Button = (props: ButtonStyle) => {
    return (
        <div>
            <div style={props.btnStyle}>ButtonStyles</div>
        </div>
    );
};

export default Button;