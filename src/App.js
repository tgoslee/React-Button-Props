import "./styles.css";
import JazzyButton from "./components/JazzyButton";

const App = () => {
  const buttonData = [
    {
      name: "Button 1",
      fact: "It was created first"
    },
    {
      name: "Button 2",
      fact: "It was created second"
    },
    {
      name: "Button 3",
      fact: "It was created third"
    },
    {
      name: "Button 4",
      fact: "It was created fourth"
    }
  ];

  const buttonList = buttonData.map((button) => {
    return (
      <JazzyButton key={button.name} name={button.name} fact={button.fact} />
    );
  });

  return (
    <main className="App">
      <h1>Welcome to React</h1>
      <div> {buttonList} </div>
    </main>
  );
};

export default App;
