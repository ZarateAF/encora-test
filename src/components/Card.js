export const Card = ({name, stargazerCount, onClick}) => {
  return (
    <div key={name} className="card" onClick={() => onClick(name)}>
      <label>{name}</label>
      <i className="fa-solid fa-star">{stargazerCount}</i>
    </div>
  );
};
