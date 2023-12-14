const formPut = document.querySelector('.formPut');

if (formPut) {
  formPut.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, img, price, newold } = e.target;
    const { id } = e.target.dataset;
    const uppDate = {
      name: name.value,
      img: img.value,
      price: price.value,
      newold: newold.value,
    };

    try {
      const res = await fetch(`/api/card/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uppDate),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = '/cards';
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}
