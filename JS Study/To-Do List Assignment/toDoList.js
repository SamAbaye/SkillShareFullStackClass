const btn = document.getElementById('btn');
const div = document.getElementById('main');

 
btn.addEventListener('click', function(event){
  // event.preventDefault();
   const input = document.getElementById('input');
   const text =  input.value
   let currentText = '';

   const container = document.createElement('div')
   const list = document.createElement('p')
   const delet = document.createElement('button')
   input.value = currentText;
   
   container.style.display = 'flex'
   // container.style.paddingLeft = '24px'
   container.style.marginLeft = '0.5%'
   // container.style.backgroundColor = 'green'

   container.appendChild(list)
   container.appendChild(delet)

   list.innerHTML = text
   
   list.style.width = '80%'
   list.style.height = '27px'
   list.style.border = '0.5px solid black'
   list.style.borderRadius = '8px'
   list.style.backgroundColor = 'purple'
   list.style.color = 'white'
   list.style.marginLeft = '5%'
   list.style.marginTop = '1.3%'
   list.style.fontFamily = 'Franklin Gothic Medium'
   list.style.padding = '3px'

   
  
   delet.style.marginRight = '2px'
   delet.style.width = '60px'
   delet.style.height = '30px'
   delet.style.border = '1px red solid'
   delet.style.backgroundColor =  'red'
   delet.textContent = 'Delete'
   delet.style.color = 'black'
   delet.style.cursor = 'pointer'
   delet.style.borderRadius = '8px'
   delet.style.fontFamily = 'Franklin Gothic Medium'
   delet.style.margin = '1%'

   if(text != '' && text != "Please Enter your To-Do List!"){
      div.appendChild(container)
      input.style.color = 'black'
   } else if(text === "Please Enter your To-Do List!"){
      input.value = ''
   }
   else {
       input.value = "Please Enter your To-Do List!"
       input.value.style.color = 'red'
   } 
   delet.addEventListener('click', function(){
      container.remove()
   })
   
}) 
