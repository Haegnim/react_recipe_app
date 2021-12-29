import React from 'react';

const Details = (props) => {
    console.log(props);
    const title = props.location.state.title;
    const img = props.location.state.img;
    const calories = props.location.state.calories;
    const ingrs = props.location.state.ingrs;
    return (
        <div className="recipes">
            <h2>{title}</h2>
            <img src={img} alt="" />
            <p>칼로리 : {calories}</p>
            <ul>
                {ingrs.map((ingr, i) => (
                    <li key={i}>{ingr.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Details;
