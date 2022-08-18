export const NavBar = ({ title, onClick }) => {
  return (
    <div className="navbar">
      <div className="home" onClick={() => onClick("react")}>HOME</div>
      <h1>{title}</h1>
    </div>
  );
};
