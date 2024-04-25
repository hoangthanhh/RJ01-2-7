import React from 'react';

const FoodComponent = () => {
  // Tạo một mảng chứa 3 thẻ li
  const items = [
    <li>Rice</li>,
    <li>Noodle</li>,
    <li>Cake</li>
  ];

  return (
    <div>
      {/* Hiển thị danh sách trong thẻ ul */}
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default FoodComponent;
