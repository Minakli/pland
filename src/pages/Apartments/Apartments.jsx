import { useState, useEffect } from "react";
import s from "./Apartments.module.css";
import PaginationItem from "../../components/PaginationItem/PaginationItem";

export default function Apartments({ images, setImages, shuffleArray }) {
  const [showImg, setShowImg] = useState(2);

  return (
    <div className={s.wrapper}>
      <h1 className={s.h1}>Apartments</h1>
      <div className={s.photo_box}>
        <button
          onClick={() => {
            showImg === 0
              ? setShowImg(images.length - 1)
              : setShowImg(showImg - 1);
          }}
          className={s.left_arrow}
        ></button>
        <img
          onClick={() => {
            showImg === 0
              ? setShowImg(images.length - 2)
              : showImg === 1
              ? setShowImg(images.length - 1)
              : setShowImg(showImg - 2);
          }}
          className={s.left_far_photo}
          src={
            process.env.PUBLIC_URL +
            images[
              showImg === 0
                ? images.length - 2
                : showImg === 1
                ? images.length - 1
                : showImg - 2
            ].img
          }
        />
        <img
          onClick={() => {
            showImg === 0
              ? setShowImg(images.length - 1)
              : setShowImg(showImg - 1);
          }}
          className={s.left_close_photo}
          src={
            process.env.PUBLIC_URL +
            images[showImg === 0 ? images.length - 1 : showImg - 1].img
          }
        />
        <div className={s.mid_wrapper}>
          <img
            className={s.mid_photo}
            src={process.env.PUBLIC_URL + images[showImg].img}
            alt=""
          />
          <button className={s.folder_btn}>
            <img className={s.folder_img} src="" alt="" />
            <h2 className={s.folder_name}>{images[showImg].description}</h2>
          </button>
        </div>
        <img
          onClick={() => {
            showImg === images.length - 1
              ? setShowImg(0)
              : setShowImg(showImg + 1);
          }}
          className={s.right_close_photo}
          src={
            process.env.PUBLIC_URL +
            images[showImg === images.length - 1 ? 0 : showImg + 1].img
          }
        />
        <img
          onClick={() => {
            showImg === images.length - 1
              ? setShowImg(1)
              : showImg === images.length - 2
              ? setShowImg(0)
              : setShowImg(showImg + 2);
          }}
          className={s.right_far_photo}
          src={
            process.env.PUBLIC_URL +
            images[
              showImg === images.length - 1
                ? 1
                : showImg === images.length - 2
                ? 0
                : showImg + 2
            ].img
          }
        />
        <button
          onClick={() => {
            showImg === images.length - 1
              ? setShowImg(0)
              : setShowImg(showImg + 1);
          }}
          className={s.right_arrow}
        ></button>
      </div>
      <div className={s.pagination}>
        {images.map((elem, index) => {
          let isSelected = false;
          if (index == showImg) {
            isSelected = true;
          }
          return (
            <PaginationItem
              key={index}
              isSelected={isSelected}
              setShowImg={setShowImg}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
