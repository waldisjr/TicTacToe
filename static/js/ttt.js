let moveType = "X";

function clearField(){
    let tags = document.getElementsByClassName("field");
    for(i in tags){
        tags[i].textContent = "";
    }
}


function makeMove(field){
    if(field.textContent === ''){
        field.textContent = moveType;
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

function isWin(){}