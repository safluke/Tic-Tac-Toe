const state={
    numCells:9,
    selection:Array(9).fill(0),
    round:0,
    finished:false
}

console.log(state.selection)



const initBoard=(()=>{
    const container = document.querySelector(".container")

    const grid =document.createElement("div")
    grid.classList.add("grid")

    for (let index = 0; index < state.numCells; index++) {

        const cell= document.createElement("div")
        cell.classList.add("cell")
        grid.append(cell)
    }
    container.append(grid)

    return {container}
})()

const updateArray=(evt)=>{
    if(state.finished===false){

    round=state.round++
    index=evt.currentTarget.myParam
    
    if (state.selection[index] ===0){
        
        if (round%2===0===true){
            cell[index].textContent=("X")
            state.selection[index] = 1
        }else{
            cell[index].textContent=("O")
            state.selection[index] = 2
        }

        
    }
    let winner = checkWinner()
    if (winner===1 || winner===2){
        endGame(winner)

    
    }
    
    let draw=checkDraw()
        if(draw===false)
        {endGame(draw)}
}}

const checkWinner=()=>{
    for (let num = 1; num <3; num++) {
        if ((state.selection[0]=== num && state.selection[1] === num && state.selection[2] === num)
        || (state.selection[3]=== num && state.selection[4] === num && state.selection[5] === num)
        || (state.selection[6]=== num && state.selection[7] === num && state.selection[8] === num)
        || (state.selection[0]=== num && state.selection[3] === num && state.selection[6] === num)
        || (state.selection[1]=== num && state.selection[4] === num && state.selection[7] === num)
        || (state.selection[2]=== num && state.selection[5] === num && state.selection[8] === num)
        || (state.selection[0]=== num && state.selection[4] === num && state.selection[8] === num)
        || (state.selection[2]=== num && state.selection[4] === num && state.selection[6] === num)
        ){return num
       
        }else{return false}
        
    }
}

const checkDraw=()=>{
    check=true
    state.selection.forEach(element => {
        if (element!==0){
            check=false
        }
    return check
    });
}


const endGame=(winner)=>{

    console.log(winner)
    state.finished=true

    //winner banner
    const win =document.createElement("div")
    win.classList.add("win")
    const container = document.querySelector(".container")
    container.append(win)
    if (winner===1){
    win.textContent=("O Wins!")}
    if (winner===2){
    win.textContent=("X Wins!")
    }
    else{
        win.textContent=("Draw")
    }
    win.addEventListener('click',reset);
}
//retrieve cell info


reset=(evt)=>{
    state.finished=false
    state.selection=Array(9).fill(0)
    reset=document.querySelector(".win")
    reset.parentNode.removeChild(reset)

    index=evt.currentTarget.myParam
    
    
    for (let index = 0; index < state.selection.length; index++) {
        cell[index].textContent=("")
    }
        
        
    

}

const cell = document.getElementsByClassName("cell")

for (let index = 0; index < cell.length; index++) {
    cell[index].addEventListener("click", updateArray)
    cell[index].myParam =index;
    
}


//add a winner banner
//reset array to 0 for reset