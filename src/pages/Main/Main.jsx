import s from "./Main.module.css";
import logo from "./logo.png";
import MainButton from "../../components/MainButton/MainButton";
import bgc from "../../components/MainButton/1677605581_fonovik-com-p-remont-kvartir-pod-klyuch-foto-26.jpg";

export default function Main() {
  let buttonTitle = "qweqweqwe";
  return (
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.sidebar}>
          <div className={s.side_footer}></div>
          <div className={s.side_header_wrapper}>
            <button className={s.side_header_btn}>
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
            </button>
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
          <MainButton bgc={bgc} title="Отделка" />
          <MainButton bgc={bgc} title="Лоджии" />
          <MainButton bgc={bgc} title="Окна" />
          <MainButton bgc={bgc} title="Двери" />
        </div>
      </div>
    </div>
  );
}
