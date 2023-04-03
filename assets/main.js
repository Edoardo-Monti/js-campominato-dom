/*
Consegna

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

let destination1 = document.querySelector(".griglia1")
let quadratino1
function mioElemento(){
    //variabile che indica la destinazion nell'html
    destination1 = document.querySelector(".griglia1")
    
    for(i = 1; i <= 100; i++){
        //creo l'elemento che voglio vedere
        quadratino1 = document.createElement(`div`)
        //aggiungo la classe gia creata ad ogni elemento
        quadratino1.classList.add("box")
        //ad ogni quadratino scrivo dentro il valore di i
        quadratino1.innerText = i
        // quadratino.classList.add("different-color")
        // console.log(quadratino)

        //al click del mio quadratino tolgo o aggiungo la classe che cambia di colore
        quadratino1.addEventListener(`click`, function(){
            //con this targettizzo l'elemento che voglio(credo)
            
            if(!bombs100.includes(parseInt(this.innerText))){
                
                this.classList.toggle("different-color")     
                console.log(parseInt(this.innerText))
            }else{
                this.innerHTML = `<i class="fa-solid fa-bomb fa-beat-fade" style="color: #cb2525;"></i>`
                destination1.innerHTML 
            }
        })
        //visualizzo il mio elemtno in pagina
        destination1.append(quadratino1)
    }  
     
}

mioElemento()


// console.log(quadratino)





/***************  BONUS 1 ********************************/


let destination2 = document.querySelector(".griglia2")
let quadratino2
function mioElemento2(){
    //variabile che indica la destinazion nell'html
    destination2 = document.querySelector(".griglia2")
    
    for(a = 1; a <= 81 ; a++){
        //creo l'elemento che voglio vedere
        quadratino2 = document.createElement(`div`)
        //aggiungo la classe gia creata ad ogni elemento
        quadratino2.classList.add("box2")
        //ad ogni quadratino scrivo dentro il valore di i
        quadratino2.innerText = a
        

        //al click del mio quadratino tolgo o aggiungo la classe che cambia di colore
        quadratino2.addEventListener(`click`, function(){
            //con this targettizzo l'elemento che voglio(credo)
            if(!bombs81.includes(parseInt(this.innerText))){
                
                this.classList.toggle("different-color")     
                console.log(parseInt(this.innerText))
            }else{
                this.innerHTML = `<i class="fa-solid fa-bomb fa-beat-fade" style="color: #cb2525;"></i>`
                destination2.innerHTML 
            }
        })
        //visualizzo il mio elemtno in pagina
        destination2.append(quadratino2)
    }  
     
}

mioElemento2()

/********************  BONUS 2  ****************************************** */

let destination3 = document.querySelector(".griglia3")
let quadratino3
function mioElemento3(){
    //variabile che indica la destinazion nell'html
    destination3 = document.querySelector(".griglia3")
    
    for(x = 1; x <= 49 ; x++){
        //creo l'elemento che voglio vedere
        quadratino3 = document.createElement(`div`)
        //aggiungo la classe gia creata ad ogni elemento
        quadratino3.classList.add("box3")
        //ad ogni quadratino scrivo dentro il valore di i
        quadratino3.innerText = x
        

        //al click del mio quadratino tolgo o aggiungo la classe che cambia di colore
        quadratino3.addEventListener(`click`, function(){
            //con this targettizzo l'elemento che voglio(credo)
            if(!bombs49.includes(parseInt(this.innerText))){
                
                this.classList.toggle("different-color")     
                console.log(parseInt(this.innerText))
            }else{
                this.innerHTML = `<i class="fa-solid fa-bomb fa-beat-fade" style="color: #cb2525;"></i>`
                destination3.innerHTML 
            }
        })
        //visualizzo il mio elemtno in pagina
        destination3.append(quadratino3)
    }  
     
}

mioElemento3()





//creo la variabile per targhettizzare il mio elemento html
let button = document.querySelector("button")
//al click del mio bottone faccio apparire la griglia
button.addEventListener(`click`, function(){

    //prendo il mio elemento select 
    let select = document.getElementById("select");
    //è il valore delle mie option dell'html
    let option = parseInt(select.value)


    if(option == 1){
        destination1.classList.remove("display-none")
        console.log(bombs100)
    }else if(option == 2){
        destination2.classList.remove("display-none")
        console.log(bombs81)
    }else{
        destination3.classList.remove("display-none")
        console.log(bombs49)
    }

    
})

//creazione funzione che cre un numero random
function numeroRandom(max, min){
    const array = []
    
    r = 1; 
    while (array.length < 16){
        let random = Math.floor(Math.random() * max) + min
        if(!array.includes(random)){
           array.push(random) 
        }
        r++
        
    }
    return array
}
let bombs100 = numeroRandom(100, 1)
let bombs81 = numeroRandom(81, 1)
let bombs49 = numeroRandom(49, 1)
