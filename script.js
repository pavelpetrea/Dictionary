function Add() {
    let myArr = [];
    let inputText = document.getElementById('search').value;
    myArr.push(inputText);
    let pval = "";
    for(i = 0; i < myArr.length; ++i){
        pval = pval + myArr[i];
    }
    alert("You've just added the word to the list!");
}
function Search() {
    let InputText = document.getElementById('search').value;
    let found = 0;
    for (i = 0; i < myArr.length; ++i){
        if(InputText == myArr[i]) {
            found = 1;
        }
    }
    if(found == 1) {
        alert("The word already exist!");
    } else {
        alert("The word doesen't exist in the list!");
    }
}