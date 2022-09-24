import style from "./DisheMenu.module.css";
import iconStark from "./assets/icon-stark.svg";

export function DisheMenu() {
  return (
    <>
      <section className={style.Container}>
        <h2 className="titleSection">Our Specials Menu</h2>
        <p className="descripoSection">
          We have simple three steps. Just enter your location, specify the time
          & make Payment
        </p>
        <div className={style.MenuFood}>
          <div className={style.TypeFood}>
            <OpcionFood text="Italian" active={style.OpcionSelect} />
          </div>
          <div className={style.DisheFood}>
            <FoodDishe
              name="pita sandwich"
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutCSyjFdUoeKkZ6KSDXptzhdggdViByGDSKDnDILj&s"
              descripcion="Lorem ipsum dolor sit amet, consector adipiscing elit"
              precio="$45"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const OpcionFood = ({ text, active }) => {
  return <button className={style.OpcionFood + " " + active}>{text}</button>;
};

const FoodDishe = ({ name, imagen, descripcion, precio }) => {
  return (
    <div className={style.Food}>
      <img src={imagen} />
      <p className={style.nameFood}>{name}</p>
      <ul>
        <li>
          <img src={iconStark} className={style.califFood}/>
        </li>
        <li>
          <img src={iconStark} className={style.califFood}/>
        </li>
        <li>
          <img src={iconStark} className={style.califFood}/>
        </li>
        <li>
          <img src={iconStark} className={style.califFood}/>
        </li>
        <li>
          <img src={iconStark} className={style.califFood}/>
        </li>
      </ul>
      <p className={style.descripFood}>{descripcion}</p>
      <div className={style.InfoBuyFood}>
        <p>{precio}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
