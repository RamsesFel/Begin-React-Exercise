import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Fransisco", "London", "Tokyo", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handlePress = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="secondary" onPress={() => console.log("Clicked")}>
        blah
      </Button>
    </div>
  );
}

export default App;
