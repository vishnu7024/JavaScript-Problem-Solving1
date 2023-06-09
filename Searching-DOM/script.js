// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"




// let ctitle = document.getElementById("firstCardTitle")
// ctitle.style.color = "green"

let ctitle = document.querySelectorAll(".card-title")
ctitle[0].style.color = "red"
ctitle[1].style.color = "blue"
ctitle[2].style.color = "magenta"
console.log(ctitle)


document.querySelector(".navbar-brand").style.color = "red"
// document.querySelector(".navbar-brand").style.color = "green"


let primaryBTN = document.querySelectorAll(".btn-primary")
primaryBTN[0].style.color = "white"
primaryBTN[1].style.color = "white"
primaryBTN[2].style.color = "white"


primaryBTN[0].style.background = "red"
primaryBTN[1].style.background = "blue"
primaryBTN[2].style.background = "magenta"


console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))


console.log(document.getElementsByName("search"))