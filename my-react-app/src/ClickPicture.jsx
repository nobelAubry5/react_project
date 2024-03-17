function ClickPicture() {
  const imageUrl = "./src/assets/reactLogo.png";
  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return (
    <>
      <p>Click the img</p>
      <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    </>
  );
}
export default ClickPicture;
