const btn = document.querySelectorAll('button');
console.log(btn)
// for (i = 0; i < btn.length; i++){
//   btn[i].style.backgroundColor = 'red'
// }
btn.forEach(function(e){
  e.style.backgroundColor = 'red';
})
// btn.addEventListener('click', function handleClick(event) {
//   // 👇️ if you are submitting a form (prevents page reload)
//   event.preventDefault();

//   const firstNameInput = document.getElementById('first_name');

//   // Send value to server
//   console.log(firstNameInput.value);

//   // 👇️ clear input field
//   firstNameInput.value = '';
// });
