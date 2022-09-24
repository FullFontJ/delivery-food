import style from "./Testimonial.module.css";
import iconStark from "./assets/icon-stark.svg";

export function Testimonial() {
  return (
    <>
      <section className={style.Container}>
        <h2 className="titleSection">Testimonials</h2>
        <p className="descripoSection">Here are some speech of our customers</p>
        <div className={style.Comments}>
          <Comment
            avatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            coment="My husband and i had  our anniversary dinner last right we ordered. this is really good quality of food & on time deliver. We would highly recommend it to everyone!!"
            nameAutor="juliana angel"
            typeClient="housewife"
          />
          <Comment
            avatar="https://images.pexels.com/photos/7752813/pexels-photo-7752813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            coment="It is very good app and there is no found is no fraund i order food from there thousand time always on time there delivery man are alsa professional"
            nameAutor="micheal jhon"
            typeClient="businessman"
          />
        </div>
      </section>
    </>
  );
}

const Comment = ({ avatar, coment, nameAutor, typeClient }) => {
  return (
    <div className={style.Card}>
      <img className={style.CardAvatar} src={avatar} />
      <ul className={style.califSevice}>
        <li>
          <img src={iconStark} className={style.califStark} />
        </li>
        <li>
          <img src={iconStark} className={style.califStark} />
        </li>
        <li>
          <img src={iconStark} className={style.califStark} />
        </li>
        <li>
          <img src={iconStark} className={style.califStark} />
        </li>
        <li>
          <img src={iconStark} className={style.califStark} />
        </li>
      </ul>
      <p className={style.CardComment}>{coment}</p>
      <p className={style.CardAutor}>{nameAutor}</p>
      <span className={style.CardTypeClient}>{typeClient}</span>
    </div>
  );
};
