import s from "./PaginationItem.module.css";

export default function PaginationItem({ isSelected, setShowImg, index }) {
  return (
    <button
      className={isSelected ? s.active : s.inactive}
      onClick={() => {
        setShowImg(index);
      }}
    ></button>
  );
}
