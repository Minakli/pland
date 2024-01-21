import s from "./MainButton.module.css";

export default function MainButton({ bgc, title }) {
  return (
    <button
      style={{
        backgroundImage: `url(${bgc})`,
      }}
      className={s.btn}
    >
      <div className={s.decorline}></div>
      <div className={s.title_bgc}>
        <h2 className={s.h2}>{title}</h2>
      </div>
    </button>
  );
}
