/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//addEventListener 
//ciclo for
//append
//CreateElement

Ogni cella ha un numero progressivo, da 1 a 100.


Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
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
            this.classList.toggle("different-color")     
            console.log(parseInt(this.innerText))
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
            this.classList.toggle("different-color")     
            console.log(this.innerText)
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
            this.classList.toggle("different-color")     
            console.log(this.innerText)
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
    }else if(option == 2){
        destination2.classList.remove("display-none")
    }else{
        destination3.classList.remove("display-none")
    }

})