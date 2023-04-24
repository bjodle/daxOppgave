function sConsole(event) {
    event.preventDefault();
    var name = document.getElementById("name");
    console.log(name.value);
    
  document.getElementById("nameGoesHere").innerHTML = name.value;
  

  localStorage.setItem("name", name.value)
  document.getElementById("demo").innerHTML = localStorage.getItem(name.value);
}


// Number Thingy

function reload(){
    location.reload();
}
function refresh(){
    setInterval(() => {
        let seconds = new Date().getSeconds();
        console.log('interval', seconds);
        
        if (seconds === 0) {
            console.log('IT SAYS GULLIBLE ON THE CEILING!');
            let x = Math.floor((Math.random() * 100) + 1);
            console.log(x)
            document.getElementById("randomNum").innerHTML = (x);
        }
    }, 1000);
}


refresh();