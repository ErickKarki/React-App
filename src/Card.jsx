import profilePic from "./assets/evansi.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Evansi Karki-Sister of Erick Karki</h2>
      <p>Gorakhkali English Boarding School</p>
    </div>
  );
}

export default Card;
