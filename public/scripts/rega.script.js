const formReg = document.querySelector('.formReg');
if (formReg) {
    formReg.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, password, email, city  } = event.target;
    console.log(name);
  
  try {;
      const response = await fetch('/api/auth/rega', {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          password: password.value,
          email: email.value,
          city: city.value
          
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const body = await response.json()
      console.log(body, ' !!!!!!!!!!!!!!!!!!');
      if(body.success){
        window.location.href='/auth/login'
      }


    } catch (error) {
      console.error(error.message);
    }
  });
}
