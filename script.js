const state = {
    numCells: 9,
    selection: Array(9).fill(0),
    round: 0,
    finished: false,
    playerComputer: false
}



const initBoard = (() => {
    const container = document.querySelector(".container")

    const grid = document.createElement("div")
    grid.classList.add("grid")

    for (let index = 0; index < state.numCells; index++) {

        const cell = document.createElement("div")
        cell.classList.add("cell")
        grid.append(cell)
    }
    container.append(grid)
})()

const updateArray = (evt) => {
    if (state.finished === false) {




        const checkWinner = () => {
            for (let num = 1; num < 3; num++) {
                if ((state.selection[0] === num && state.selection[1] === num && state.selection[2] === num) ||
                    (state.selection[3] === num && state.selection[4] === num && state.selection[5] === num) ||
                    (state.selection[6] === num && state.selection[7] === num && state.selection[8] === num) ||
                    (state.selection[0] === num && state.selection[3] === num && state.selection[6] === num) ||
                    (state.selection[1] === num && state.selection[4] === num && state.selection[7] === num) ||
                    (state.selection[2] === num && state.selection[5] === num && state.selection[8] === num) ||
                    (state.selection[0] === num && state.selection[4] === num && state.selection[8] === num) ||
                    (state.selection[2] === num && state.selection[4] === num && state.selection[6] === num)
                ) {
                    return true
                }



            }
        }

        const checkDraw = () => {
            let check = 0
            state.selection.forEach(element => {
                if (element !== 0) {
                    check++
                }
            })
            if (check === state.selection.length) {

                return true

            } else {
                return false
            }
        }

        const checkEnd = () => {

            let winner = checkWinner()
            if (winner === true) {
                if (state.round % 2 === 0 === true) {
                    endGame(1)
                } else {
                    endGame(2)
                }
                return true
            }
            let draw = false
            if (winner !== true) {

                draw = checkDraw()

                if (draw === true) {
                    console.log(state.selection.length)
                    endGame(state.selection.length)
                }
                if (winner === true || draw === true) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }

        }




        const deployAI = () => {
            let legal = false

            while (legal === false) {
                const rand = Math.floor((Math.random() * 8 + 0.5))

                if (state.selection[rand] === 0) {

                    cell[rand].textContent = ("O")
                    state.selection[rand] = 2
                    legal = true
                }
            }
        }

        index = evt.currentTarget.myParam

        if ((state.selection.includes(1) || state.selection.includes(2)) !== true) {
            round = state.round = 0
        }

        if (state.selection[index] === 0) {
            round = state.round++


            if (state.playerComputer === true) {
                if (round % 2 !== 0 === false) {
                    cell[index].textContent = ("X")
                    state.selection[index] = 1

                } else {
                    cell[index].textContent = ("O")
                    state.selection[index] = 2
                }

                checkEnd()
            } else {


                cell[index].textContent = ("X")
                state.selection[index] = 1
                console.log("player " + round)

                let won = checkEnd()
                console.log("won " + won)

                if (won !== true) {
                    round = state.round++
                    console.log("AI " + round)
                    setTimeout(deployAI, 50)
                    setTimeout(checkEnd, 50)


                }
            }
        }

    }
}




const endGame = (winner) => {

    state.finished = true
    console.log("winner tag: " + winner)
    //winner banner
    const win = document.createElement("div")
    win.classList.add("win")
    const container = document.querySelector(".container")
    container.append(win)
    if (winner === 2) {
        console.log("x")
        win.textContent = ("X Wins!")
        win.addEventListener('click', reset, );
    }
    if (winner === 1) {
        console.log("o")
        win.textContent = ("O Wins!")
        win.addEventListener('click', reset, );
    }
    if (winner === 9) {
        console.log("draw")
        win.textContent = ("Draw")
        win.addEventListener('click', reset, );
    }

}
//retrieve cell info


reset = (evt) => {
    state.finished = false
    state.selection = Array(9).fill(0)
    resetpop = document.querySelector(".win")

    try {
        resetpop.parentNode.removeChild(resetpop)
        index = evt.currentTarget.myParam
    } catch (TypeError) {

    }





    for (let index = 0; index < state.selection.length; index++) {
        cell[index].textContent = ("")
    }




}

const cell = document.getElementsByClassName("cell")

for (let index = 0; index < cell.length; index++) {
    cell[index].addEventListener("click", updateArray)
    cell[index].myParam = index;

}




toggle = (player) => {
    if (player == "Computer") {
        state.playerComputer = true
    }
    if (player == "Human") {
        state.playerComputer = false
    }
    reset()
}