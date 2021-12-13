
/* Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi. */
let contenitoreRandomNum = []
let contenitoreInserimentoNum = []

for(let i = 0; i < 5; i++){
   
    let randomNum = getRndInteger(0, 30)
    
    alert(randomNum)

    contenitoreRandomNum.push(randomNum)

}




//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() VEDI FUNZIONE IN BASSO.

setTimeout(tempo, 7000)


//Con questo ciclo stampa i numeri generati random
for(let i = 0; i < contenitoreRandomNum.length; i++){
    thisNum = contenitoreRandomNum[i]
   


}


/*----------------------------------------------------------------------------------
FUNCTIONS:
----------------------------------------------------------------------------------*/
//Genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
 //Fa scorrere i 30 secondi al termine dei quali dovranno essere inseriti i  numeri 
function tempo(){
    

    for(let i = 0; i <5; i++){
        let inserimentoNum = parseInt(prompt('Inserisci i 5 numeri che hai visto prima: '))
        contenitoreInserimentoNum.push(inserimentoNum)
        //Con questo ciclo stampa in log i numeri che ha inerito l'utente
        for(let i = 0; i <contenitoreInserimentoNum.length; i++ ){

            thisNum = contenitoreInserimentoNum[i]
          

        }
        
        

    }
    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
   for(let i = 0; i < 5; i++){
       thisInserimentoNum = contenitoreInserimentoNum[i]
       thisContenitoreRandomNum = contenitoreRandomNum[i]
       if(thisInserimentoNum === thisContenitoreRandomNum){
        console.log('Giusto');
    }else{
        console.log('Sbagliato');
    } 

   }
   
}
