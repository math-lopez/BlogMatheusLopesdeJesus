import { Link } from "react-router-dom";

const Card = ({ title, text, href = "/", textLink }) => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ text }</p>
                <Link to={href} className="btn btn-primary">{textLink}</Link>
            </div>
        </div>
    )
}

export default Card;