const nav = document.getElementById('nav')

function show(params) {
    if (nav.style.display === 'flex' ) {
        nav.style.display = 'none'
    }
    else{
        nav.style.display = 'flex'
    }
}
