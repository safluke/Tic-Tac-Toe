const state={
    numCells:9,
    selection:Array(9).fill(0),
    round:0,
    finished:false
}



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

    
    index=evt.currentTarget.myParam
    
    if (state.selection[index] ===0){
        round=state.round++
        
        if (round%2===0===true){
            cell[index].textContent=("X")
            state.selection[index] = 1
        }else{
            cell[index].textContent=("O")
            state.selection[index] = 2
        }

        
    }
    let winner = checkWinner()
    if (winner===true){
    if (round%2===0===true){
        endGame(1)}
    else{endGame(2)}

    }
    
    if(winner!==true){
    checkDraw()}}
}

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
        ){return true}

    
        
    }
}

const checkDraw=()=>{
    let check=0
    state.selection.forEach(element => {
        if (element!==0){
            check++
        }
        if (check===state.selection.length){
            endGame(check)
        }
    }
)}





const endGame=(winner)=>{
    console.log(winner)

    state.finished=true

    //winner banner
    const win =document.createElement("div")
    win.classList.add("win")
    const container = document.querySelector(".container")
    container.append(win)
    if (winner===1){
        console.log("x")
        win.textContent=("X Wins!")
        win.addEventListener('click',reset,);}
    if (winner===2){
        console.log("o")
        win.textContent=("O Wins!")
        win.addEventListener('click',reset,);}
    if(winner===9){
        console.log("draw")
        win.textContent=("Draw")
        win.addEventListener('click',reset,);}
    
}
//retrieve cell info


reset=(evt)=>{
    state.finished=false
    state.selection=Array(9).fill(0)
    resetpop=document.querySelector(".win")
    resetpop.parentNode.removeChild(resetpop)

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


//Integrate Minimax algorith - computer