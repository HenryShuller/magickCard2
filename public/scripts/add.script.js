const FormAdd = document.querySelector('.addForm');
if (FormAdd) {
  FormAdd.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, price, img, newold } = event.target;
    const add = {
      name: name.value,
      price: price.value,
      img: img.value,
      newold: newold.value,
    };

    const res = await fetch('/api/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(add),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      document
        .querySelector('.container')
        .insertAdjacentHTML('beforeend', data.html);
      FormAdd.reset();
    }
  });
}
