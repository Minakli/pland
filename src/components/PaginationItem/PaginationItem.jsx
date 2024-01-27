import s from "./PaginationItem.module.css";

export default function PaginationItem({ isSelected }) {
  console.log(isSelected);
  return <div className={isSelected ? s.active : s.inactive}></div>;
}
