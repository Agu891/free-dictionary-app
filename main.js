const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'
const form = document.querySelector("#form")
const definition = document.querySelector("#definition")
const input = document.querySelector("#texto")
let tituloPalabra = document.querySelector("#tituloPalabra")


  
form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    let inputValue = input.value
    let datos = []
    
    
    if(input){
        let response =  await fetch(`${url}/${inputValue}`)
        let palabras = await response.json()
        datos = palabras
      
    } 
   
    
    if(definition.hasChildNodes()){
        definition.removeChild(definition.firstChild)
    } 
    
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let liDefinition1 = document.createElement('li')
    let liDefinition2 = document.createElement('li')
    let liDefinition3 = document.createElement('li')
    let liPhonetics = document.createElement('li')
    let liPhoneticsAudio = document.createElement('li')
    let a = document.createElement('a')
    let button = document.createElement('button')
    definition.appendChild(ul)
   
    
    
    datos.flatMap((item) =>{
        
       if( item.meanings.length > 1 ){
           
           ul.appendChild(li)
           ul.appendChild(li2)
           ul.appendChild(li3)
           ul.appendChild(liDefinition1)
           ul.appendChild(liDefinition2)
           ul.appendChild(liDefinition3)
           ul.appendChild(liPhonetics)
           li.appendChild(a)
    
           li.appendChild(document.createTextNode(` -Part of speech :${item.meanings[0].partOfSpeech}  ||Definition: ${item.meanings[0].definitions[0].definition} || Example: ${item.meanings[0].definitions[0].example}`))
           li2.appendChild(document.createTextNode(` -Part of speech :${item.meanings[1].partOfSpeech} ||Definition: ${item.meanings[1].definitions[0].definition}|| Example: ${item.meanings[1].definitions[0].example}`))
           li3.appendChild(document.createTextNode(` -Part of speech :${item.meanings[2].partOfSpeech} ||Definition: ${item.meanings[2].definitions[0].definition} || Example: ${item.meanings[2].definitions[0].example}`))
           liPhonetics.appendChild(document.createTextNode(`-Phonetics: ${item.phonetics[1].text}` ||`-Phonetics: ${item.phonetics[1].text}`))
           a.setAttribute("href", `${item.phonetics[1].audio}` )
           a.appendChild(button)
           button.appendChild(document.createTextNode("Audio"))
         

           
           
       }
        else {
        
        ul.appendChild(li)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(liDefinition1)
        ul.appendChild(liDefinition2)
        ul.appendChild(liDefinition3)
        ul.appendChild(liPhonetics)
        li.appendChild(a)
 
        li.appendChild(document.createTextNode(` -Part of speech :${item.meanings[0].partOfSpeech}  ||Definition: ${item.meanings[0].definitions[0].definition} || Example: ${item.meanings[0].definitions[0].example}`))
        liDefinition1.appendChild(document.createTextNode(  `-Definition: ${item.meanings[0].definitions[1].definition} || Example: ${item.meanings[0].definitions[1].example}` ))
        liDefinition2.appendChild(document.createTextNode(  `-Definition: ${item.meanings[0].definitions[2].definition} || Example: ${item.meanings[0].definitions[2].example}` ))
        liDefinition3.appendChild(document.createTextNode(  `-Definition: ${item.meanings[0].definitions[3].definition} || Example: ${item.meanings[0].definitions[3].example}` ))
        liPhonetics.appendChild(document.createTextNode(`-Phonetics: ${item.phonetics[0].text}`))
        a.setAttribute("href", `${item.phonetics[0].audio}` )
        a.appendChild(button)
        button.appendChild(document.createTextNode("Audio"))
       
       } 
       
     
        } )



  
    
})
