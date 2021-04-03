let moveType = "X";
let used = 0;

function clearField(){
    let tags = document.getElementsByClassName("field");
    let flash = document.getElementById("flash")
    let i;
    flash.textContent = ''
    used = 0
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
        if(moveType === 'X'){
            moveType = 'O';
        }
        else{
            moveType = 'X';
        }
        used += 1
        if (used === 9){
            flash.textContent = 'Draw !'
        }
    }
    else{
        alert('Hey! This field is already filled!')
    }
    return false
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
    return false
}