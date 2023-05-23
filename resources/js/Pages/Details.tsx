import { Items } from "@/types";

// react component for details page with id as url parameter
const Details = (props: Items) => {
    return (
        <div>
            <h1>Details Page</h1>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            <h4>{props.price}</h4>
            <h5>{props.quantity}</h5>
            <img src={props.image} alt={props.name} />
        </div>
    );
}