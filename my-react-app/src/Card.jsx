import reactLogo from "./assets/reactLogo.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={reactLogo} alt="profile picture"></img>
      <h2 className="card-title">Test code</h2>
      <p className="card-text">Im starting my first react project</p>
    </div>
  );
}
export default Card;
