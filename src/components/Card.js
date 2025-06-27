import "./Card.css";

function Card(props) {
  return (
    <div className="Card" style={props.styles}>
      <img
        src={props.icon}
        alt="Card Icon"
        style={props.iconstyle}
        className="CardIcon"
      />
      <div className="CardTitle" style={props.titlestyle}>
        <span>{props.title}</span>
      </div>
      <div className="CardContent" style={props.contentstyle}>
        {props.content}
      </div>
    </div>
  );
}

export default Card;
