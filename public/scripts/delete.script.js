const container = document.querySelector('.container');
if (container) {
  container.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btndelet')) {
      const delbtn = event.target;
      const parentConteiner = delbtn.closest('.cardone');
      const { id } = parentConteiner.dataset;
      const res = await fetch(`api/card/${id}`, { method: 'DELETE' });
      const data = await res.json();
      console.log(data);
      if (data.message === 'ok') {
        parentConteiner.remove();
      }
    }
  });
}
