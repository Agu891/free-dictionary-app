const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'
const form = document.querySelector("#form")
const definition = document.querySelector("#definition")
const input = document.querySelector("#texto")
const divSynonyms = document.querySelector("#divSynonyms")
let tituloPalabra = document.querySelector("#tituloPalabra")
let significados = []

  
form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    let inputValue = input.value
    let datos = []
    
    
    if(input){
        let response =  await fetch(`${url}/${inputValue}`)
        let palabras = await response.json()
        datos = palabras
      
    } 
   
    
    
    
    
   
    definition.innerHTML = ""
        
     for(let i= 0 ; i < datos.length; i++){
        
        let word = datos[i].word.toUpperCase()
       
         for(let j= 0; j < datos[i].meanings.length; j++){
            let partOfSpeech = datos[i].meanings[j].partOfSpeech
            let phonetics = datos[i].phonetics[j].text
            let audio = datos[i].phonetics[j].audio
            
            
            for(let k = 0; k < datos[i].meanings[j].definitions.length; k++ ){
                 
               
                 
                 
                  definition.innerHTML += ` <ul><li> Word : ${word}
                                               <li> Phonetic : ${phonetics} </li>
                                               <li> Word type : ${partOfSpeech} </li>
                                               <li> Definition: ${datos[i].meanings[j].definitions[k].definition} </li>
                                               <li> Examples : ${datos[i].meanings[j].definitions[k].example || 'No hay ejemplos disponibles'} </li> 
                                               <li> ${audio ? `<a href="${audio}" ><button id="audioBtn">Audio</button><a/>`: "No hay audios disponibles"}</li></ul>` 
                                               
                  
                                               
                
                
             }
         }
         }
  if(definition.innerHTML.length === 0){
      alert("La palabra que estas buscando no existe")
  }
    
})
