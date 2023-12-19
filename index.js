// My Solution.

// document.getElementById("red").addEventListener("click",() => {
//     document.body.style.backgroundColor = "red";
// })

// document.getElementById("yellow").addEventListener("click",() => {
//     document.body.style.backgroundColor = "yellow";
// })

// document.getElementById("green").addEventListener("click",() => {
//     document.body.style.backgroundColor = "green";
// })

// document.getElementById("purple").addEventListener("click",() => {
//     document.body.style.backgroundColor = "purple";
// })

// Sir's solution.

let body = document.querySelector("body");

Array.from(document.querySelectorAll("span")).map(element => {

        element.addEventListener("click", (e) => {
            // console.log(e.target.id);
            if(e.target.id == "yellow") body.style.backgroundColor = e.target.id;
            if(element.getAttribute("id") == "green") document.body.style.backgroundColor = "green";
            if(element.getAttribute("id") == "red") document.body.style.backgroundColor = "red";
            if(element.getAttribute("id") == "purple")  document.body.style.backgroundColor = "purple";
        });
})


// document.querySelectorAll("span")

