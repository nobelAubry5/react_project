// click event = An interaction when a user click on a specific element.
// We can respond to clicks by passing
//a callback to the onClick event handler.

function ClickEvent() {
  let count = 0;

  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };
  const handleClick2 = (e) => {
    e.target.textContent = "Ouch!";
    console.log(e);
  };
  return (
    <>
      <button onClick={() => handleClick("Bro")}> Click me </button>
      <button onDoubleClick={(e) => handleClick2(e)}> Double Click me</button>
    </>
  );
}
export default ClickEvent;
