import style from "./App.module.css";
import phone from "./assets/movil.png";
import iconAppStore from "./assets/icon-app-store.svg";
import iconPlayStore from "./assets/icon-play-store.svg";

export function App() {
  return (
    <>
      <section className={style.Container}>
        <img src={phone} />
        <div className={style.infoSection}>
          <h2 className="titleSection">Download our apps</h2>
          <p className="descripoSection">
            All you need to do is download ane of the best food deliver apps,
            make a selection, place an order, and make payment via your
            smartphone, or pay on delivery.
          </p>
          <div className={style.Download}>
            <button className={style.buttonDownload}>
              <img className={style.iconDownload} src={iconAppStore} />
              App Store
            </button>
            <button className={style.buttonDownload}>
              <img className={style.iconDownload} src={iconPlayStore} />
              Pay Store
            </button>
          </div>
        </div>
        <img src={phone} />
      </section>
    </>
  );
}
