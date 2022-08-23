import style from "./navbar.module.css";

export const NavBar = ({ title, onClick }) => {
  return (
    <div className={style.navbar}>
      <div className={style.home} onClick={() => onClick("")}>
        HOME
      </div>
      <h1>{title ? title : "Github"}</h1>
    </div>
  );
};
