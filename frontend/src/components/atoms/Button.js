import React from 'react';


// function Button({ onClick, children, className }) {
//     return (
//         <button onClick={onClick} className={className}>
//             {children}
//         </button>
//     );
// }
const Button = ({ onClick, className, text }) => (
    <button onClick={onClick} className={className}>
        {text}
    </button>
);

export default Button;
