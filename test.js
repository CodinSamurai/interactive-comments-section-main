const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('first_name');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  firstNameInput.value = '';
});
