import style from "./Menu.module.css";

export function Menu() {
  return (
    <>
      <header className={style.ContainerMenu}>
        <nav className={style.Menu}>
            <ul className={style.navMenu}>
                <li><ButtonNav name="Home" activo={style.activoSelect}/></li>
                <li><ButtonNav name="How it works" /></li>
                <li><ButtonNav name="Our Menu" /></li>
                <li><ButtonNav name="Testimonials" /></li>
                <li><ButtonNav name="Contact us" /></li>
                <li><ButtonNav name="Book now" classExtra={style.ButtonNow}/></li>
            </ul>
        </nav>
      </header>
    </>
  );
}


const ButtonNav = ({name, anclaje, activo, classExtra}) =>{
    return(
        <a className={style.buttonNav + " " + activo + " " + classExtra}>
            {name}
            <div className={style.ButtonSelect + " " + activo}></div>
        </a>
    );
}