const ujJatekgomb = document.getElementById("ujjatek")
const jatekterElem = document.querySelector(".jatekter")

ujJatekgomb.addEventListener("click", megjelen)
console.log(jatekterElem)

function megjelen(){
    const htmlKod = `
        <div id="gep">
            <h2>A gép tippje:</h2>
            <div class="kep">
                <img src="kepek/ko.PNG" alt="kopapirollo">
            </div>
        </div>
        <div id="jatekos">
            <h2>A játékos tippje:</h2>
            <div class="kep">
                <img src="kepek/ollo.PNG" alt="kopapirollo">
            </div>
            <div class="gombok">
                <button id="ko">Kő</button>
                <button id="papir">Papír</button>
                <button id="ollo">Olló</button>
            </div>
        </div>
    ` 
    jatekterElem.innerHTML = ""
    jatekterElem.insertAdjacentHTML("beforeend", htmlKod)
    const jatekgomb = document.querySelectorAll(".gombok button")
    jatekgomb[0].addEventListener("click", kivalaszt)
    jatekgomb[1].addEventListener("click", kivalaszt)
    jatekgomb[2].addEventListener("click", kivalaszt)
}

function kivalaszt(){
    console.log("event.targer.id")
}