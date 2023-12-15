const putForm = document.querySelector('.putForm');
if (putForm) {
  putForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { name, img, price, newold } = e.target;

    const uppDate = {
      name: name.value,
      img: img.value,
      price: price.value,
      newold: newold.value,
    };

    try {
      const res = await fetch(`/api/card/${putForm.dataset.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uppDate),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}
