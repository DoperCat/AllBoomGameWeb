require('./bootstrap');

var idioma = 'ES';

var whoius = document.getElementById("whoius");

var contact = document.getElementById("contact");

var game = document.getElementById('btnGame');

var ftextdownload = document.getElementById('downloadGame');

var wiab = document.getElementById('WIAllboom');

var wiabFtext = document.getElementById('WIAllboomtext1');

var aboutus = document.getElementById('aboutUs');

var aboutustext = document.getElementById('aboutUstext');

var ourstudio = document.getElementById('ourstudio');

var ourstudiotext = document.getElementById('ourstudiotext');

var contact = document.getElementById('contactTi');

var contactcont = document.getElementById('contactcont');

var aviso = document.getElementById('aviso');


var btn1 = document.getElementById("ES");
btn1.addEventListener("click", () => {ChangeLanguageOptions("ES")}, false);

var btn2 = document.getElementById("EN");
btn2.addEventListener("click", () => {ChangeLanguageOptions("EN")}, false);

function ChangeLanguageOptions(option) {
    if(idioma != option){
        idioma = option; 
        ChangeLanguage();
    }
}

function ChangeLanguage() {
    ChangeWhoius();
    ChangeContact();
    ChangeContactBtnGame();
    ChangeTextDownload();
    ChangeWIAB();
    ChangeWIABText1();
    ChangeAboutUs();
    ChangeAboutUsText();
    ChangeOurStudio();
    ChangeOurStudioText();
    ChangeTextContact();
    ChangeContainerContact();
    ChangeAviso();
}

function ChangeWhoius() {
    switch (idioma) {
        case 'ES':
            whoius.innerText = "¿QUIENES SOMOS?"
            break;

        case 'EN':
            whoius.innerText = "ABOUT US"
            break;
    }
}

function ChangeContact() {
    switch (idioma) {
        case 'ES':
            contact.innerText = "CONTACTO"
            break;

        case 'EN':
            contact.innerText = "CONTACT"
            break;
    }
}

function ChangeContactBtnGame() {
    switch(idioma) {
        case 'ES':
            game.innerText = "JUEGA"
            break;
        
        case 'EN':
            game.innerText = "PLAY"
            break;
    }
}

function ChangeTextDownload() {
    switch(idioma) {
        case 'ES':
            ftextdownload.innerHTML = "Descargate nuestro juego <br> en Google Play <br> o en la App Store"
            break;

        case 'EN':
            ftextdownload.innerHTML = "Download our game <br> on Google Play <br> or on App Store"
            break;
    }
}

function ChangeWIAB() {
    switch(idioma) {
        case 'ES':
            wiab.innerHTML = "¿QUÉ ES ALLBOOM?"
            break;

        case 'EN':
            wiab.innerHTML = "WHAT IS ALLBOM?"
            break;
    }
}

function ChangeWIABText1() {
    switch(idioma) {
        case 'ES':
            wiabFtext.innerHTML = "AllBoom es un videojuego de acción multijugador con diferentes batallas. Podrás escoger 1 VS <br> 1,3 VS 3 o Survival 10 jugadores todos contra todos. <br> <br> All Boom Game tiene el propósito de no solo ser estratégico, sinó también divertido, haciendo <br> así de sus personajes, unas fotografías, que luchan por mantenerse vivas ganando píxeles des- <br> pués de cada batalla para poder escalar muros (ligas).<br> <br> El juego se dará dentro de mapas a seleccionar del usuario, y/o aleatoriamente. El jugador con-<br> tará con habilidades acumulativas en función del muro en el que se encuentre.<br> <br> Las monedas del videojuego serán los Amokens y las Gemas. Las gemas servirán para comprar <br> diferentes skins y accesorios gratuitos, en cambio los Amokens será la moneda premium."
            break;
        
        case 'EN':
            wiabFtext.innerHTML = "AllBoom is a multiplayer action video game with different battles. You can choose 1 VS <br> 1,3 VS 3 or Survival 10 players free-for-all. AllBoom is a multiplayer action video game with different battles. You can choose 1 VS <br> 1,3 VS 3 or Survival 10 players free-for-all. <br> <br> All Boom Game has the purpose of not only being strategic, but also fun, making <br> like this of its characters, some photographs, that fight to stabilize alive, gaining pixels after <br> each battle to be able to climb walls (leagues).<br> <br> The game will take place within maps to be selected by the user, and/or randomly. The player will <br> have cumulative abilities depending on the wall they are on.<br> <br> The currencies of the video game will be Amokens and Gems. The gems will be used to buy <br> different skins and accessories for free, instead the Amokens will be the premium currency."
            break;
    }
}

function ChangeAboutUs() {
    switch(idioma) {
        case 'ES':
            aboutus.innerHTML = "¿QUIENES SOMOS?"
            break;

        case 'EN':
            aboutus.innerHTML = "ABOUT US"
            break;
    }
}

function ChangeAboutUsText() {
    switch(idioma) {
        case 'ES':
            aboutustext.innerHTML = "A.I Amoka se formó a principios del 2021 con el objetivo de producir videojuegos de calidad para que los consumidores pudieran descargar gratuitamente en sus teléfonos móviles. <br> <br> <b>AllBoomGame es nuestro juego debut en estas plataformas. </b><br> <br>Todos los días encontramos nuevas formas de abrir nuevos caminos.La cultura de A.I.Amoka es apasionada, colaborativa y fomenta el tipo de innovación necesaria para continuar desarrollando videojuegos. <br> <br>¡Cada miembro del equipo es un apasionado de su trabajo! La búsqueda de la excelencia es lo más importante para nosotros."
            break;

        case 'EN':
            aboutustext.innerHTML = "A.I.Amoka was founded in 2021 with the goal of producing quality games that consumers could easily download for free on their mobile phones.<br> <br>  <b>All Boom is our debut title on these platforms. </b><br> <br> Every day we find new ways to break new ground. The A.I.Amoka culture is passionate, collaborative, and fosters the kind of innovation necessary to continue developing video games. <br> <br> Every single member of the team is passionate about their work! The pursuit of excellence is the most important for us. "
            break;
    }
}

function ChangeOurStudio() {
    switch(idioma) {
        case 'ES':
            ourstudio.innerHTML = "NUESTRO ESTUDIO"
            break;
        
        case 'EN':
            ourstudio.innerHTML = "OUR STUDIO"
            break;
    }
}

function ChangeOurStudioText() {
    switch(idioma) {
        case 'ES':
            ourstudiotext.innerHTML = "La mayor parte de nuestro desarrollo de juegos se lleva a cabo en la oficina de Barcelona.  <br> <br> <b>Barcelona, ciudad inteligente</b><br> <br>Todos los días encontramos nuevas formas de abrir nuevos caminos. Barcelona es mundialmente conocida por su arquitectura, diseño,  gastronomía, deporte, turismo, investigación científica, conocimiento y entorno social. <br> <br>Actualmente hablar de Barcelona es aludir también a un referente en el ámbito tecnológico.  Se ha convertido en una de las ciudades más atractivas y en una de las grandes marcas de todo el mundo. <br> Barcelona es poderosa, Barcelona tiene poder!"
            break;

        case 'EN':
            ourstudiotext.innerHTML = "Most of our game development takes place in the Barcelona office. <br> <br> <b> Barcelona has been known as a world leader in architecture</b>, design, food, sport, tourism, scientific research, knowledge and the social environment. <br> <br> Currently talking about Barcelona is also referring to a benchmark in the technological field. Its desire to be ever more intelligent is turning it into one of the most attractive cities in the world and a great brand. <br> Barcelona is powerful, Barcelona has power!"
            break;

    }
}

function ChangeTextContact() {
    switch(idioma) {
        case 'ES':
            contact.innerHTML = "CONTACTO"
            break;

        case 'EN':
            contact.innerHTML = "CONTACT"
            break;
    }
}

function ChangeContainerContact() {
    switch(idioma) {
        case 'ES':
            contactcont.innerHTML = "¿EN QUÉ PODEMOS AYUDARTE?"
            break;

        case 'EN':
            contactcont.innerHTML = "HOW CAN WE HELP YOU?"
            break;
    }
}

function ChangeAviso() {
    switch(idioma) {
        case 'ES':
            aviso.innerHTML = "Aviso Legal"
            break;

        case 'EN':
            aviso.innerHTML = ""
            break;
    }
}