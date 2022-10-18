 //declare variable
 const button = document.getElementsByClassName('item')
 const toggleable = document.getElementsByClassName('toggle_text')

    // convert the variable to button arrays and toggle(text) array
    const btnArr = Array.from(button)
    const toggleArr = Array.from(toggleable)

    //loop through the button array using for each loop
    btnArr.forEach((btn, i)=> {
        
      
        //add eventlistner for each button using anonymous function, using e to target the clicked button id
        btn.addEventListener("click", (e)=> {
            
            // when the event is fired map through the button array for any button id that is not equal to 
            //the id of the clicked element, remove the show class
            btnArr.map((botn, index)=> {
                    if (botn.id !== e.target.closest(`#${btn.id}`).id){
                    toggleable[index].classList.remove("show")
                    console.log(botn.id)
                   
                } 
                // then if the button id is equal to the id of what has been clicked toggle the
                //show classlist in the equivalent toggleable array
                if (botn.id === e.target.closest(`#${btn.id}`).id){
    
                    toggleArr[index].classList.toggle('show')
                    console.log("cl")
                    
                } 
             })
        })
        
        

    })
    
  
//  function display() {

//     for(const content of toggleable){
//             content.classList.toggle('show')
//         }
    
//  }
//   for(const btn of button){
//     btn.addEventListener('click', display);

//   }