import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./props";
import ConditionalRendering from "./conditionalRendering";
import RenderLists from "./RenderLists";
import ClickEvent from "./ClickEvents";
import ClickPicture from "./ClickPicture";
import UseState from "./UseState";
import Counter from "./Counter";
import OnChange from "./OnChange";
import ColorPicker from "./ColorPicker";
import UpdateCounter from "./UpdateCounter";
import UpdateObjects from "./UpdateObjects";
import UpdateArrays from "./UpdateArrays";
import UpdateArraysObjects from "./UpdateArraysObjects";
import ToDoList from "./ToDoList";
function App() {
  //Render Lists Chapter
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 85 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 75 },
    { id: 5, name: "pineapple", calories: 90 },
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];
  return (
    <>
      <Header />
      <Food />
      <hr />
      <Card />
      <Card />
      <Card />
      <hr />
      <Student name="SpongeBob" age={5} isStudent={true} />
      <Student name="Patrick" age={7} isStudent={false} />
      <Student name="SquidWard" age={9} isStudent={false} />
      <Student name="Larry" />
      <hr />
      <ConditionalRendering isLoggedIn={true} username="BroCode" />
      <hr />
      {fruits.length > 0 && <RenderLists items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <RenderLists items={vegetables} category="Vegetables" />
      )}
      <hr />
      <ClickEvent />
      <ClickPicture />
      <hr />
      <UseState />
      <hr />
      <Counter />
      <hr />
      <OnChange />
      <hr />
      <ColorPicker />
      <hr />
      <UpdateCounter />
      <hr />
      <UpdateObjects />
      <hr />
      <UpdateArrays />
      <hr />
      <UpdateArraysObjects />
      <hr />
      <ToDoList />
      <Footer />
    </>
  );
}

export default App;
