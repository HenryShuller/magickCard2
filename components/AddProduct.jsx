const React = require('react');


function AddProduct() {
  return (
    <form className='addForm'>
      <input
        type="text"
        className="formAdd"
        name="name"
        placeholder="name product"
      />
      <input
        type="text"
        className="formAdd"
        name="img"
        placeholder="img"
        required
      />
      <input
        type="text"
        className="formAdd"
        name="price"
        placeholder="price"
      />
       <input
        type="text"
        className="formAdd"
        name="newold"
        placeholder="newold"
      />
      <button type="submit" className="AddButtom"> Добавить карту</button>
    </form>
  );
}

module.exports = AddProduct;
