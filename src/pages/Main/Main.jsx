import s from "./Main.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import MainButton from "../../components/MainButton/MainButton";
import bgc from "../../components/MainButton/1677605581_fonovik-com-p-remont-kvartir-pod-klyuch-foto-26.jpg";
import { apartImg } from "../../data/data";

export default function Main() {
  console.log(
    process.env.PUBLIC_URL +
      apartImg[Math.floor(Math.random() * (apartImg.length - 1))].img
  );
  let buttonTitle = "qweqweqwe";
  return (
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.sidebar}>
          <div className={s.side_footer}></div>
          <div className={s.side_header_wrapper}>
            <Link to="/about" className={s.side_header_btn}>
              <div className={s.title_box}>
                <img
                  className={s.logo}
                  src={logo}
                  alt="Logo"
                  width="100"
                  height="100"
                />
                <div className={s.title_text_wrapper}>
                  <h1 className={s.h1}>Plan-D</h1>
                  <div className={s.title_description}>О нас</div>
                </div>
              </div>
            </Link>
          </div>
          <div className={s.side_footer}>
            <span className={s.author_text}>
              Created by&nbsp;
              <a
                href="https://github.com/Minakli"
                target="_blank"
                className={s.author_href}
              >
                @Minakli
              </a>
              &nbsp;2024
            </span>
          </div>
        </div>
        <div className={s.main}>
          <MainButton
            to={"apartments"}
            bgc={
              process.env.PUBLIC_URL +
              apartImg[Math.floor(Math.random() * (apartImg.length - 1))].img
            }
            title="Отделка"
          />
          <MainButton to={"loggias"} bgc={bgc} title="Лоджии" />
          <MainButton to={"window"} bgc={bgc} title="Окна" />
          <MainButton to={"doors"} bgc={bgc} title="Двери" />
        </div>
      </div>
    </div>
  );
}
