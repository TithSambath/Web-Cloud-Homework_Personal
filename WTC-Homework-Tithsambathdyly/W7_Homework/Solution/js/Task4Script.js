function sum(){
    let result = 0;
    for (let i = 0; i <arguments.length; i++){
        result += parseFloat(arguments[i]);
    }
    document.getElementById('outputResult').value = result;
}
function getparameter(){
    return document.getElementById('inputNumber').value;
}
function calculate(){
    let arr = filterUserInput(getparameter().split(','));
    console.log(...arr);
    sum(...arr);
}

/*filter empty space in case exist*/
function filterUserInput(arr){
    arr = arr.filter(function(element){
        return element !== '';
    })
    return arr;
}