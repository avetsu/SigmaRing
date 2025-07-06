import "./PromoCard.css";

function PromoCard(props) {
  return (
    <div className="PromoCard" style={props.styles}>
      <div className="PromoCardImage">
        <img
          className="PromoCardImgTag"
          src={props.image}
          alt={props.title}
          style={props.stylesimage}
        />
      </div>
      <div className="PromoCardText" style={props.stylestext}>
        {props.text}
      </div>
    </div>
  );
}

export default PromoCard;
