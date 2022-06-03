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
   
    //    datos.flatMap((item) =>{
    //   
    //    const ul = document.createElement('ul')
    //    const liDefinition1 = document.createElement('li')
    //    const liDefinition2 = document.createElement('li')
    //    const liDefinition3 = document.createElement('li')
    //    const liPhonetics = document.createElement('li')
    //    definition.appendChild(ul)
    //    ul.appendChild(liDefinition1)
    //    ul.appendChild(liDefinition2)
    //    ul.appendChild(liDefinition3)
    //    ul.appendChild(liPhonetics)
    //       
    //       
    //if(item.meanings.length > 1 ){ 
    //    
    //   
    //    liDefinition1.appendChild(document.createTextNode(  `-Meaning: ${item.meanings[0].definitions[0].definition}` )) 
    //    liDefinition2.appendChild(document.createTextNode( `-Meaning: ${item.meanings[1].definitions[0].definition}` ))
    //    liDefinition3.appendChild(document.createTextNode( `-Meaning: ${item.meanings[2].definitions[0].definition}` ))
    //    liPhonetics.appendChild(document.createTextNode(`-Phonetics: ${item.phonetics[1].text}`))
    //  } else{
    //   
    //   
    //    liDefinition1.appendChild(document.createTextNode(  `-Definition: ${item.meanings[0].definitions[0].definition}` )) 
    //       } 
    
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
        
        
        //for(let i = 0; i < 5 ; i++)
       if( item.meanings.length > 1){
           
           ul.appendChild(li)
           ul.appendChild(li2)
           ul.appendChild(li3)
           ul.appendChild(liDefinition1)
           ul.appendChild(liDefinition2)
           ul.appendChild(liDefinition3)
           ul.appendChild(liPhonetics)
           ul.appendChild(liPhoneticsAudio)
           li.appendChild(a)
    
           li.appendChild(document.createTextNode(` -Part of speech :${item.meanings[0].partOfSpeech}  ||Definition: ${item.meanings[0].definitions[0].definition} || Example: ${item.meanings[0].definitions[0].example}`))
           li2.appendChild(document.createTextNode(` -Part of speech :${item.meanings[1].partOfSpeech} ||Definition: ${item.meanings[1].definitions[0].definition}|| Example: ${item.meanings[1].definitions[0].example}`))
           li3.appendChild(document.createTextNode(` -Part of speech :${item.meanings[2].partOfSpeech} ||Definition: ${item.meanings[2].definitions[0].definition} || Example: ${item.meanings[2].definitions[0].example}`))
           liDefinition1.appendChild(document.createTextNode(  `-Definition: ${item.meanings[1].definitions[0].definition} || Example: ${item.meanings[1].definitions[0].example}` )) 
           liPhonetics.appendChild(document.createTextNode(`-Phonetics: ${item.phonetics[1].text}`))
           a.setAttribute("href", `${item.phonetics[1].audio}` )
           a.appendChild(button)
           button.appendChild(document.createTextNode("Audio"))
         

           
           
       } else  {
           
       }
    
     
        } )



  
    
})
