import s from "./Main.module.css";

export default function Main() {
  return (
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.sidebar}>
          <div className={s.header}></div>
          <div className={s.footer}></div>
        </div>
        <div className={s.main}>
          <button className={s.button}></button>
          <button className={s.button}></button>
          <button className={s.button}></button>
          <button className={s.button}></button>
        </div>
      </div>
    </div>
  );
}
