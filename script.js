const cellElements=document.querySelectorAll('.cell')
const winning_message=document.querySelector('.winning-message')
const restart=document.querySelector('#restartButton')

const drawRestart=document.querySelector('.draw-message')
const winning_combinations=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
restart.addEventListener('click',handleRestart)

drawRestart.addEventListener('click',handleRestart)
function handleRestart()
{
    location.reload()
}

cellElements.forEach(cell=>{
    cell.addEventListener('click',handleClick,{once:true})
})
let x=true;
let o=false;
let currentClass
let count=0
function handleClick(e)
{
   
    const cell=e.target;
    if(x){
        cell.innerHTML='x';
        x=false;
        o=true;
        count++
        currentClass='x'
    }
    else{
        count++
       o=false;
       x=true;
   cell.innerHTML='o'
        currentClass='o'
    }
    cell.classList.add(currentClass)
  

   if(checkWin(currentClass))
   {

        winning_message.appendChild(document.createTextNode(currentClass+ ' Wins'))
       winning_message.classList.add('show')

   }
   if( !checkWin(currentClass) && count==9){
    winning_message.appendChild(document.createTextNode('DRAW'))
   winning_message.classList.add('show')
   }
  

}
 function checkWin(currentClass)
{
    // this return true if any of the value are true
   return winning_combinations.some(combination=>{
        return combination.every(index=>{          // check index
            return cellElements[index].classList.contains(currentClass)  // if all have same combination then winnner
        })
    })
}
