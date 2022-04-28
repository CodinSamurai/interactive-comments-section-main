var increase = document.querySelectorAll('.increase');
var decrease = document.querySelectorAll('.decrease');
var result = document.querySelector('.result');


increase.forEach(function(hello){
    hello.addEventListener('click', function(){
        hello.style.backgroundColor = 'green';
        console.log(hello);
        // res1++;
        // if (res1 > 0){
        //     res1.style.color = "blue"
        // } else{
        //     res1.style.color = "red"
        // }
        result.innerHTML++;
        if (result.innerHTML > 0){
            result.style.color = "blue"
        } else{
            result.style.color = "red"
        }
    })
});

decrease.forEach(function(hello2){
    hello2.addEventListener('click', function(){
    //    var res = e.target.parentElement.previousElementSibling;
    //    console.log(res.innerHTML);
    //    res--;
    // //    if (res > 0){
    // //        res.style.color = "blue"
    // //    } else{
    // //        res.style.color = "red"
    // //    }
    result.innerHTML = result.innerHTML - 1;
    if (result.innerHTML > 0){
        result.style.color = "blue"
    } else{
        result.style.color = "red"
    }
  })
})




var reply = document.querySelector('.btn');
var form = document.querySelector('.quote');

reply.addEventListener('click', function(){
    // form.style.display = 'block';
    // form.classList.add('work');
    // console.log('hello')
    if (form.style.display == "none"){
        form.style.display = "block";
        form.classList.add('work');
    } else {
        form.style.display = "none";
        // form.classList.add('work');
    }
})


var image1 = document.querySelector('.image');
var hello = document.querySelector('.hello');
var form1 = document.forms[0];
form1.addEventListener('submit', function(e){
    e.preventDefault();
    var newText = form1.querySelector('input[type="text"]').value;
    var p = document.createElement('p');
    var div = document.createElement('div');
    var span = document.createElement('span')
    var img = document.createElement('img');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span)
    hello.appendChild(div);

    p.textContent = newText;
    img.src = "images/avatars/image-juliusomo.png"
    span.textContent = 'Delete'

    div.classList.add("newDiv");
    span.classList.add('deleteSpan')



    form1.reset();
})


var spann = document.querySelectorAll('.deleteSpan');
spann.forEach(function(all){
    all.addEventListener('click', function(e){
        // all.style.backgroundColor = 'blue';
        // console.log(all.innerHTML);
    if (e.target.classList == 'deleteSpan'){
        // const par = e.target.parentElement;
        // hello.removeChild(par);
        // console.log('working');
        e.target.style.backgroundColor = 'blue';
        console.log(e.target.innerHTML);
    }
})
})
