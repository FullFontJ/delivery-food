import style from "./Work.module.css";
import iconMap from "./assets/icon-location.svg";
import iconCalendar from "./assets/icon-calendar.svg";
import iconCard from "./assets/icon-card.svg";

export function Work() {
  return (
    <>
      <section className={style.Container}>
        <h2 className="titleSection" >How it Work</h2>
        <p className="descripoSection">
          We have simple three steps. Just enter your location, specify the time
          & make Payment
        </p>
        <div className={style.infoWork}>
          <CardWork
            detailServi="Enter your location"
            description="if you have multiple locations, open the location you'd like to manage"
            imagen={iconMap}
          />
          <CardWork
            detailServi="Specify the time"
            description="You must put a specific duration of time to get the food"
            imagen={iconCalendar}
            extraStyle={style.redCard}
            fontStyle={style.whiteFont}
          />
          <CardWork
            detailServi="Ensure the payment"
            description="We have easy payment system. Like Visa, Master card"
            imagen={iconCard}
          />
        </div>
      </section>
    </>
  );
}

const CardWork = ({ imagen, detailServi, description, extraStyle, fontStyle}) => {
  return (
    <div className={style.cardWork +' '+ extraStyle}>
      <div className={style.iconCard}>
        <img src={imagen} />
      </div>
      <p className={style.blueFont +' '+ fontStyle}>{detailServi}</p>
      <span className={style.blueFont +' '+ fontStyle}>{description}</span>
    </div>
  );
};
