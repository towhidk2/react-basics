import "./Card.css";

function Card(props) {

    // const className = props.card ? "card" : ""

    return (
        <div className="card font-xl">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    )
}

export default Card;