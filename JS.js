function show(){
    document.querySelector('nav.menu').classList.toggle('show')
    if (document.querySelector('nav.menu').classList.contains('show') == true) {
        document.getElementById('guitarra-up').innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    }else {
        document.getElementById('guitarra-up').innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    }
}