import style from "./Home.module.css";
import delivery from "./assets/delivery-man.png";

export function Home() {
  return (
    <>
      <section className={style.Home}>
        <div className={style.imgHome}>
          <div></div>
          <img src={delivery} />
        </div>
        <div className={style.infoHome}>
          <h1>We Deliver the food at your Door</h1>
          <p>
            We are online bases food delivery company. You'll get your food on
            time Quality & on time delivery is our main Goal.
          </p>
          <div className={style.search}>
            <p>Type your location</p>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </section>
    </>
  );
}
