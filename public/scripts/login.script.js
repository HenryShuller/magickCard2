const formLog = document.querySelector('.formLog');
if (formLog) {
  formLog.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    console.log(event.target);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const body = await response.json();
      console.log(body);
      if (body.success) {
        window.location.href = '/';
      } else {
        alert(body.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  });
}
