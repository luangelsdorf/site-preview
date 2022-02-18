// Inicializa o carrosel da versão mobile
$(document).ready(function () {
    $(".carousel-func").owlCarousel({
        items: 1,
        dots: true
    });
    $(".owl-logos-desktop").owlCarousel({
        items: 4,
        dots: true,
        autoplay: true,
    });
    $(".owl-logos-mobile").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
    });
});

// Inicializa as animações com o Animate CSS
new WOW().init();


// Funcionamento do Menu OFF Canvas
function openMenu() {
    document.getElementById("offCanvas").style.width = "75%";
    document.getElementById("hamburguer").style.marginLeft = "250px";
}

function closeMenu() {
    document.getElementById("offCanvas").style.width = "0";
    document.getElementById("hamburguer").style.marginLeft = "0";
}

// Ativa os itens da sessão 'Funcionalidades'
$(document).ready(function(){
    $("#funcionalidades li").click(function(){
       $("#funcionalidades li")
       .removeClass("active"); // remove a classe de todos
       $(this)
       .addClass("active"); // adiciona a classe ao botão clicado
    });
 });

// Troca as imagens com CLICK*
function slide_00() {
    document.getElementById("slide-images").src="img/slide-00.png";
}

function slide_01() {
    document.getElementById("slide-images").src="img/slide-01.gif";
}

function slide_02() {
    document.getElementById("slide-images").src="img/slide-022.png";
}

function slide_03() {
    document.getElementById("slide-images").src="img/slide-03.png";
}

function slide_04() {
    document.getElementById("slide-images").src="img/slide-04.png";
}
