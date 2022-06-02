const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'
const form = document.querySelector("#form")
const definition = document.querySelector("#definition")
const input = document.querySelector("#texto")


form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    let inputValue = input.value
    let datos = []
    
    
    if(input){

     
        let response =  await fetch(`${url}/${inputValue}`)
        let palabras = await response.json()
        datos = palabras
        

    } 

    
    //let arraySignificado =  datos.map((item) => `Palabra: ${item.word} Significado: ${item.meanings[0].definitions[0].definition} `)
        datos.flatMap((item) =>{

       
        const ul = document.createElement('ul')
        const liDefinition1 = document.createElement('li')
        const liDefinition2 = document.createElement('li')
        const liDefinition3 = document.createElement('li')
        const p = document.createElement('p')
        definition.appendChild(p)
        definition.appendChild(ul)
        
        
        
        ul.appendChild(liDefinition1)
        ul.appendChild(liDefinition2)
        ul.appendChild(liDefinition3)
        
        
    if(item.meanings.length > 1){ 
        p.appendChild(document.createTextNode(`${inputValue}`))
        liDefinition1.appendChild(document.createTextNode(  `Definition: ${item.meanings[0].definitions[0].definition}` )) 
        liDefinition2.appendChild(document.createTextNode( `Definition: ${item.meanings[1].definitions[0].definition}` ))
        liDefinition3.appendChild(document.createTextNode( `Definition:  ${item.meanings[2].definitions[0].definition}` ))
      } else{

        p.appendChild(document.createTextNode(`${inputValue}`))
        liDefinition1.appendChild(document.createTextNode(  `Definition: ${item.meanings[0].definitions[0].definition}` )) 
           } 
        
    
     
        } )


        

    
       
  
    
})
