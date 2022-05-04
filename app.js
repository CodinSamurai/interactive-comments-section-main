var increase = document.querySelectorAll('.increase');
var decrease = document.querySelectorAll('.decrease');
var result = document.querySelectorAll('.result');

increase.forEach(function(hello){
    hello.addEventListener('click', function () {
        // hello.style.backgroundColor = 'green';
        // hello.classList.toggle('reddd');
        hello.classList.add('reddd');
        console.log(hello);
        setTimeout(function(){
             hello.classList.remove('reddd');
        }, 500);
        // res1++;
        // if (res1 > 0){
        //     res1.style.color = "blue"
        // } else{
        //     res1.style.color = "red"
        // }
       var ress = hello.parentElement.children[1];
       ress.innerHTML++;
        if (ress.innerHTML > 0){
            ress.style.color = "green"
        } else{
            ress.style.color = "red"
        }
    })
});

decrease.forEach(function(hello2){
    hello2.addEventListener('click', function(e){
        hello2.classList.add('green');
        setTimeout(() => {
           hello2.classList.remove('green');
        }, 1000);
       var res = e.target.parentElement.previousElementSibling;
       res.innerHTML  = res.innerHTML - 1;
       console.log(res);
    if (res.innerHTML > 0){
        res.style.color = "green";
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
        if (longie.style.display == "flex"){
            longie.style.display = "none";
            console.log('fired');
            } else {
                longie.style.display = "flex";
                longie.classList.add('work');
                console.log('fired  again');
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

var span;
var formm = document.forms;
console.log(formm);
Array.from(formm).forEach(function(ee){
    ee.addEventListener('submit', function(e){
        e.preventDefault();
        var newText = ee.querySelector('input[type="text"]').value;
        console.log(newText);
        if (newText.length == 0) {
            alert('Empty comment invalid')
        } else{
        var p = document.createElement('p');
        var div = document.createElement('div');
        span = document.createElement('span')
        var img = document.createElement('img');
        var hello2 = e.target.parentElement.parentElement.children[0];
    
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span)
        hello2.appendChild(div);
    
        p.textContent = newText;
        img.src = "images/avatars/image-juliusomo.png"
        span.textContent = 'Delete'
    
        div.classList.add("newDiv");
        span.classList.add('deleteSpan');
        p.classList.add('red')
        // console.log(p.classList);
        console.log(span)
    }
    
    
    
        ee.reset();
       console.log( e.target.parentElement.parentElement.children[0]);

    //    span.addEventListener("click",function(e){
    //     //    e.target.style.color = 'blue';
    //     var chi = e.target.parentElement;
    //     var par = e.target.parentElement.parentElement
    //     par.removeChild(chi);
    //         console.log(e.target.parentElement.parentElement);
    //    })

    $('span').click(function(e){
        var chi = e.target.parentElement;
              var par = e.target.parentElement.parentElement;
              par.removeChild(chi);
                  console.log(e.target.parentElement.parentElement);
      })
    })

})


var dark1 = document.querySelector('.dark');
dark1.addEventListener('click', function(){
    var body = document.querySelector('.container');
    body.classList.toggle('darkmode');
    var ele = document.querySelectorAll('.header2');
    ele.forEach(function(e){
        e.classList.toggle('darkmode');
        e.classList.toggle('white');

    })

    var ele2 = document.querySelectorAll('.float');
    ele2.forEach(function(ee){
        ee.classList.toggle('darkmode');
        ee.classList.toggle('white2');

    })
    
    var comment = document.querySelector('.appendComment');
    comment.classList.toggle('darkmode');
})
