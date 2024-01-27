import s from "./MainButton.module.css";
import { Link } from "react-router-dom";

export default function MainButton({ bgc, title, to }) {
  console.log(bgc);
  return (
    <Link
      to={to}
      style={{
        backgroundImage: `url(${bgc})`,
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
