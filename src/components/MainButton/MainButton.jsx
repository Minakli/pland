import s from "./MainButton.module.css";
import { Link } from "react-router-dom";
// import { apartImg } from "../../data/data";
// import qq from
//               apartImg[Math.floor(Math.random() * (apartImg.length - 1))].img

export default function MainButton({ bgc, title, to }) {
  console.log(bgc);
  return (
    <Link
      to={to}
      style={{
        backgroundImage: `url(${bgc})`,
        // backgroundImage: `url(${qq})`,
      }}
      className={s.btn}
    >
      <div className={s.decorline}></div>
      <div className={s.title_bgc}>
        <h2 className={s.h2}>{title}</h2>
      </div>
    </Link>
  );
}
