const nav = document.getElementById("nav")


function reveal() {
    if (nav.style.display === "flex") {
        nav.style.display = "none"
    }else{
        nav.style.display = "flex"
    }
}