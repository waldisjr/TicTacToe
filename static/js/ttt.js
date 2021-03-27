let moveType = "X";

function clearField(){
    let tags = document.getElementsByClassName("field");
    let flash = document.getElementById("flash")
    let i;
    flash.textContent = ''
    for(i in tags){
        tags[i].textContent = "";
    }
    return false
}


function makeMove(field){
    let flash = document.getElementById('flash')
    if (flash.textContent !== ''){
        alert('Game finished !\nPlease click restart.')
    }
    else if(field.textContent === ''){
        field.textContent = moveType;
        isWin()
        isDraw()
        if(moveType === 'X'){
            moveType = 'O';
        }
        else{
            moveType = 'X';
        }
    }
    else{
        alert('Hey! This field is already filled!')
    }
}


function isDraw(){
    let tags = document.getElementsByClassName("field");
    let flash = document.getElementById('flash');
    let i;
    let flag = true;
    for (i in tags){
        console.log(tags[i].textContent)
        if (tags[i].textContent === ''){
            flag = false
        }
    }
    if (flag === true && flash.textContent === ''){
        flash.textContent = 'Draw !'
    }
}



function isWin(){
    let tags = document.getElementsByClassName("field");
    let flash = document.getElementById('flash')

    if (tags[0].textContent === tags[1].textContent && tags[1].textContent === tags[2].textContent
        && tags[0].textContent !== '') {
        flash.textContent = `${tags[0].textContent} has won`
    }
    if (tags[3].textContent === tags[4].textContent && tags[4].textContent === tags[5].textContent
        && tags[3].textContent !== ''){
        flash.textContent = `${tags[3].textContent} has won`
    }
    if (tags[6].textContent === tags[7].textContent && tags[7].textContent === tags[8].textContent
        && tags[6].textContent !== ''){
        flash.textContent = `${tags[6].textContent} has won`
    }
    if (tags[0].textContent === tags[3].textContent && tags[3].textContent === tags[6].textContent
        && tags[0].textContent !== ''){
        flash.textContent = `${tags[0].textContent} has won`
    }
    if (tags[1].textContent === tags[4].textContent && tags[4].textContent === tags[7].textContent
        && tags[1].textContent !== ''){
        flash.textContent = `${tags[1].textContent} has won`
    }
    if (tags[2].textContent === tags[5].textContent && tags[5].textContent === tags[8].textContent
        && tags[2].textContent !== ''){
        flash.textContent = `${tags[2].textContent} has won`
    }
    if (tags[0].textContent === tags[4].textContent && tags[4].textContent === tags[8].textContent
        && tags[0].textContent !== ''){
        flash.textContent = `${tags[0].textContent} has won`
    }
    if (tags[2].textContent === tags[4].textContent && tags[4].textContent === tags[6].textContent
        && tags[2].textContent !== ''){
        flash.textContent = `${tags[2].textContent} has won`
    }
}