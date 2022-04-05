import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type='text'
        ref={inputRef}
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type='submit' onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
