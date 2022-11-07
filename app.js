// TODO
const { useState } = React;
let GroceryList = ({items}) => {
  return (
    <ul>
      {items.map((GroceryItem) => (
        <GroceryListItem item={GroceryItem} />
      ))}
    </ul>
  )
};

function GroceryListItem ({item}) {
  const [isDone, setIsDone] = useState(false);
  const style = {
    fontWeight: isDone ? 'bold' : 'normal'
  };
  function handleClick() {
   setIsDone(!isDone);
  }

  return (
    <li style={style} onClick={handleClick}>{item}</li>
  )
}
let items = ['Apples', 'Bananas'];

ReactDOM.render(<GroceryList items={items} />, document.getElementById('app'));