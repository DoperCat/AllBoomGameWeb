require('./bootstrap')

var idioma = 'ES'
var btnGame = document.getElementById('btnGame')
var textdownload = document.getElementById('downloadGame')
var whatIsAllboom = document.getElementById('whatIsAllboom')
var whatIsAllboomText = document.getElementById('whatIsAllboomText')

var btn1 = document.getElementById("ES");
if(btn1 != null){
    btn1.addEventListener("click", () => {ChangeLanguageOptions("ES")}, false)
}

var btn2 = document.getElementById("EN");
if(btn2 != null){
    btn2.addEventListener("click", () => {ChangeLanguageOptions("EN")}, false)
}

function ChangeLanguageOptions(option) {
    if(idioma != option){
        idioma = option
        ChangeLanguage()
    }
}

function ChangeLanguage() {
    ChangeBtnGame();
    ChangeTextDownload();
    ChangeWhatisAllboom();
    ChangeWhatIsAllboomText();
}

function ChangeBtnGame() {
    if(btnGame == null){
        return
    }
    switch(idioma) {
        case 'ES':
            btnGame.innerText = "JUEGA"
            break;
        case 'EN':
            btnGame.innerText = "PLAY"
            break;
    }
}

function ChangeTextDownload() {
    if(textdownload == null){
        return
    }
    switch(idioma) {
        case 'ES':
            textdownload.innerHTML = "Descargate nuestro juego <br> en Google Play <br> o en la App Store"
            break;
        case 'EN':
            textdownload.innerHTML = "Download our game <br> on Google Play <br> or on App Store"
            break;
    }
}

function ChangeWhatisAllboom() {
    if(whatIsAllboom == null){
        return
    }
    switch(idioma) {
        case 'ES':
            whatIsAllboom.innerHTML = "¿QUÉ ES ALLBOOM?"
            break;
        case 'EN':
            whatIsAllboom.innerHTML = "WHAT IS ALLBOOM?"
            break;
    }
}

function ChangeWhatIsAllboomText() {
    if(whatIsAllboomText == null){
        return
    }
    switch(idioma) {
        case 'ES':
            var tmpText = "AllBoomGame es un battle royale gratuito que está ambientado en un mundo digital."
            tmpText += "Las fotos de los usuarios cobran vida y se convierten en los personajes principales del mundo."
            tmpText += "<br><br> Se puede jugar de manera individual o por equipos, donde puedes usar habilidades y armas que te encuentras por el escenario para eliminar a tus oponentes."
            tmpText += "<br><br> Hay diferentes mapas y ligas que, en función de las partidas, cada jugador irá consiguiendo. En cada partida hay 1 o 2 llaves que, aleatoriamente, las tiene un jugador."
            tmpText += "El jugador en cuestión que tenga la llave, la podrá; conseguir en el momento que encuentre el portal que estará; abierto durante un tiempo limitado. En cualquier momento los demás adversarios podrán luchar para conseguir la llave de su contrincante. Las llaves conseguidas nos permitirán comprar habilidades."
            whatIsAllboomText.innerHTML = tmpText
            break;
        case 'EN':
            whatIsAllboomText.innerHTML = "AllBoomGame is a free to play battle royale that is set in a digital world. Users' photos come to life and become the main characters in the world. <br><br> It can be played individually or in teams, where you can use skills and weapons that you find around the stage to eliminate your opponents. <br><br> There are different maps and leagues that, depending on the games, each player will get. In each game there are 1 or 2 keys that are randomly held by a player. The player in question who has the key, will be able to; get the moment you find the portal you will be; open for a limited time. At any time the other opponents can fight to get their opponent's key. The keys obtained will allow us to buy skills."
            break;
    }
}