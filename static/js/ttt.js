let moveType = "X";

function clearField(){
    let tags = document.getElementsByClassName("field");
    for(i in tags){
        tags[i].textContent = "";
    }
    return false
}


function makeMove(field){
    if(field.textContent === ''){
        field.textContent = moveType;
        isWin()
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


function isWin(){
    let tags = document.getElementsByClassName("field");
    if (tags[0].textContent === tags[1].textContent && tags[1].textContent === tags[2].textContent
        && tags[0].textContent != ''){
        alert(`${tags[0].textContent} has won`)
        clearField()
    }
    if (tags[3].textContent === tags[4].textContent && tags[4].textContent === tags[5].textContent
        && tags[3].textContent != ''){
        alert(`${tags[3].textContent} has won`)
        clearField()
    }
    if (tags[6].textContent === tags[7].textContent && tags[7].textContent === tags[8].textContent
        && tags[6].textContent != ''){
        alert(`${tags[6].textContent} has won`)
        clearField()
    }
    if (tags[0].textContent === tags[3].textContent && tags[3].textContent === tags[6].textContent
        && tags[0].textContent != ''){
        alert(`${tags[0].textContent} has won`)
        clearField()
    }
    if (tags[1].textContent === tags[4].textContent && tags[4].textContent === tags[7].textContent
        && tags[1].textContent != ''){
        alert(`${tags[1].textContent} has won`)
        clearField()
    }
    if (tags[2].textContent === tags[5].textContent && tags[5].textContent === tags[8].textContent
        && tags[2].textContent != ''){
        alert(`${tags[2].textContent} has won`)
        clearField()
    }
    if (tags[0].textContent === tags[4].textContent && tags[4].textContent === tags[8].textContent
        && tags[0].textContent != ''){
        alert(`${tags[0].textContent} has won`)
        clearField()
    }
    if (tags[2].textContent === tags[4].textContent && tags[4].textContent === tags[6].textContent
        && tags[2].textContent != ''){
        alert(`${tags[2].textContent} has won`)
        clearField()
    }
}