import style from "./Contact.module.css";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import linkedin from "./assets/icon-linkedin-in.svg";
import twitter from "./assets/icon-twitter.svg";

export function Contact() {
  return (
    <>
      <section className={style.Container}>
        <div className={style.freeDeliver}>
          <h2>Free unlimited delivery for 30 days!</h2>
          <div className={style.emailSend}>
            <input type="text" placeholder="Enter your email" />
            <p>Submit</p>
          </div>
        </div>
        <footer className={style.ContentFooter}>
          <div className={style.backgroupFooter}></div>

          <div className={style.socialFooter}>
            <p>Food Delivery</p>
            <ul className={style.socialRed}>
              <li>
                <img src={facebook} />
              </li>
              <li>
                <img src={twitter} />
              </li>
              <li>
                <img src={linkedin} />
              </li>
              <li>
                <img src={instagram} />
              </li>
            </ul>
          </div>
          <TitleSection
            title="Company"
            enlaces={["Privacy policy", "Terms of service", "Career", "About"]}
          />
          <TitleSection
            title="Service"
            enlaces={["How it work", "Blog", "FAQ", "Location"]}
          />
          <TitleSection
            title="Address"
            enlaces={[
              "145 Hill view street",
              "A3, New Your",
              "Fooddelivery@gmail.com",
              "+12 3456 789 0987",
            ]}
          />
        </footer>
      </section>
    </>
  );
}

const TitleSection = ({ title, enlaces }) => {
  return (
    <div className={style.SectionFooter}>
      <p className={style.TitleSectionFooter}>{title}</p>
      {enlaces.map((enlace) => (
        <SectionEnlace text={enlace} />
      ))}
    </div>
  );
};

const SectionEnlace = ({ text }) => {
  return <p className={style.SectionEnlace}>{text}</p>;
};
