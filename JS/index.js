let menuVisible = false;

//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Funcion que oculta el menu  una vez  que seleccione una opcion
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Funcion que aplica para la animacionde de la habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("js");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("office");
        habilidades[3].classList.add("db");
        habilidades[4].classList.add("baile");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("team");
        habilidades[7].classList.add("confidencialidad");
        habilidades[8].classList.add("problemas");
        habilidades[9].classList.add("liderazgo");
        habilidades[10].classList.add("adaptabilidad");
        habilidades[11].classList.add("responsabilidad");
        habilidades[12].classList.add("creatividad");
    }
}

//Scrolling para aplicar la animacion  de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}