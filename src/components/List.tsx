
import { BsDot } from "react-icons/bs";

interface ListProps {
    items: string[]
}

function ListItem({item}) {
  return (
    <li className="flex items-start gap-1">
      <span>
        <BsDot color="black" size={30} />
      </span>
      {item}
    </li>
  );
}

function List({items}:ListProps) {
  return (
    <ul className="flex flex-col">
    {items.map((item, index) => (
      <ListItem key={index} item={item}/>
    ))}
    </ul>
  );
}

export default List;
