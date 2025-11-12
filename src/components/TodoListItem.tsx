
import Cancel from "../assets/icon-cross.svg";
const TodoListItem = () => {
    return ( <li>
        <input type="checkbox" name="" id="" />
        <span>Sample Todo Item</span>
        <button><img src={Cancel} alt="Cancel" /></button>
    </li> );
}
 
export default TodoListItem;