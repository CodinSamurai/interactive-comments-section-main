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
$('h1').css('color', 'red');
$('h2').addClass('jqueryy');
console.log($('h2'))

// $(document).keypress(function(e){
//   console.log(e.target);
//   $('h1').text(e.key);
// });

$('h1').on('mouseenter',function(){
  $('h2').css('color', 'yellow')
})

$('h2').click(function(){
$('h2').css('color', 'red')
$('h2').slideUp().slideDown();
})

// $('button').click(function(){
//   $(this).text('wait please');
//   $(this).css('backgroundColor', 'green');
//   $(this).attr('disabled', true);
//   setTimeout(() => {
//     $(this).attr('disabled', false);
//     $(this).text('submit');
//     $(this).css('backgroundColor', 'red');
//   }, 1000);
// })

$('button').click(function(e){
  $(e.target).text('wait please');
  $(e.target).css('backgroundColor', 'green');
  $(e.target).attr('disabled', true);
  setTimeout(() => {
    $(e.target).attr('disabled', false);
    $(e.target).text('submit');
    $(e.target).css('backgroundColor', 'red');
  }, 1000);
})