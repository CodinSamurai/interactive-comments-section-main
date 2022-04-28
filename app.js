var increase = document.querySelectorAll('.increase');
var decrease = document.querySelectorAll('.decrease');
var result = document.querySelectorAll('.result');

increase.forEach(function(hello){
    hello.addEventListener('click', function () {
        hello.style.backgroundColor = 'green';
        console.log(hello);
        // res1++;
        // if (res1 > 0){
        //     res1.style.color = "blue"
        // } else{
        //     res1.style.color = "red"
        // }
       var ress = hello.parentElement.children[1];
       ress.innerHTML++;
        if (ress.innerHTML > 0){
            ress.style.color = "blue"
        } else{
            ress.style.color = "red"
        }
    })
});

decrease.forEach(function(hello2){
    hello2.addEventListener('click', function(e){
       var res = e.target.parentElement.previousElementSibling;
       res.innerHTML  = res.innerHTML - 1;
       console.log(res);
    if (res.innerHTML > 0){
        res.style.color = "blue"
    } else{
        res.style.color = "red"
    }
  })
})




var reply = document.querySelectorAll('.btn');
var form = document.querySelector('.quote');

reply.forEach(function(replybtn){
    replybtn.addEventListener('click', function(e){
    console.log(e.target.parentElement.parentElement.nextElementSibling.children[1]);
        var longie = e.target.parentElement.parentElement.nextElementSibling.children[1];
        if (longie.style.display == "none"){
            longie.style.display = "block";
            longie.classList.add('work');
            } else {
                longie.style.display = "none";
        
                longie.classList.add('work');
            }


    // form.style.display = 'block';
    // form.classList.add('work');
    // console.log('hello')

    // if (form.style.display == "none"){
    //     form.style.display = "block";
    //     form.classList.add('work');
    // } else {
    //     form.style.display = "none";

        // form.classList.add('work');
    // }
})
})



// var image1 = document.querySelector('.image');
// var hello = document.querySelector('.hello');
// var form1 = document.forms[0];
// form1.addEventListener('submit', function(e){
//     e.preventDefault();
//     var newText = form1.querySelector('input[type="text"]').value;
//     var p = document.createElement('p');
//     var div = document.createElement('div');
//     var span = document.createElement('span')
//     var img = document.createElement('img');

//     div.appendChild(img);
//     div.appendChild(p);
//     div.appendChild(span)
//     hello.appendChild(div);

//     p.textContent = newText;
//     img.src = "images/avatars/image-juliusomo.png"
//     span.textContent = 'Delete'

//     div.classList.add("newDiv");
//     span.classList.add('deleteSpan')



//     form1.reset();
// })


// var spann = document.querySelectorAll('.deleteSpan');
// spann.forEach(function(all){
//     all.addEventListener('click', function(e){
//         // all.style.backgroundColor = 'blue';
//         // console.log(all.innerHTML);
//     if (e.target.classList == 'deleteSpan'){
//         // const par = e.target.parentElement;
//         // hello.removeChild(par);
//         // console.log('working');
//         e.target.style.backgroundColor = 'blue';
//         console.log(e.target.innerHTML);
//     }
// })
// })
