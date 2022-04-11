
const url_atual = window.location.pathname

if (url_atual == '/'){
    document.getElementById('menuHome').className ='nav-link text-white active'
}else if (url_atual == '/noticias'){
    document.getElementById('menuNoticias').className ='nav-link text-white active'
}else if (url_atual == '/admin'){
    document.getElementById('menuAdmin').className ='nav-link text-white active'
}