


window.addEventListener("scroll" , ()=>{
    let navbar = document.getElementById("stic")
    if(pageYOffset >= 98){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
})