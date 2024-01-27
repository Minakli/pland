import { useState } from "react";
import s from "./Apartments.module.css";
import PaginationItem from "../../components/PaginationItem/PaginationItem";

export default function Apartments({ images, setImages, shuffleArray }) {
  const [showImg, setShowImg] = useState(shuffleArray(images));

  return (
    <div className={s.wrapper}>
      <h1 className={s.h1}>Apartments</h1>
      <div className={s.photo_box}>
        <button className={s.left_arrow}></button>
        <img
          className={s.left_far_photo}
          src={process.env.PUBLIC_URL + showImg[0].img}
        />
        <img
          className={s.left_close_photo}
          src={process.env.PUBLIC_URL + showImg[1].img}
        />
        <div className={s.mid_wrapper}>
          <img
            className={s.mid_photo}
            src={process.env.PUBLIC_URL + showImg[2].img}
            alt=""
          />
          <button className={s.folder_btn}>
            <img className={s.folder_img} src="" alt="" />
            <h2 className={s.folder_name}>{showImg[2].description}</h2>
          </button>
        </div>
        <img
          className={s.right_close_photo}
          src={process.env.PUBLIC_URL + showImg[3].img}
        />
        <img
          className={s.right_far_photo}
          src={process.env.PUBLIC_URL + showImg[4].img}
        />
        <button className={s.right_arrow}></button>
      </div>
      <div className={s.pagination}>
        {showImg.map((elem, index) => {
          let isSelected = false;
          if (index == 2) {
            isSelected = true;
          }
          return <PaginationItem isSelected={isSelected} />;
        })}
      </div>
    </div>
  );
}
