import React from 'react';

function List({ items = [], rowComponent = () => {} }) {
  return (
    <ul className="List__component">
      {items.map((item, index) => (
        <li key={item.key || index}>{rowComponent(item, index)}</li>
      ))}
    </ul>
  );
}

export default List;
