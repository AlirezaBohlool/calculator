var powerFlag = false;
function addinresult(value) {
    document.getElementById('result-0').value += value;
    if(powerFlag==true){
        var number= document.getElementById('result-0').value.split('^');
        document.getElementById('result-0').value=Math.pow(number[0],number[1])
        powerFlag=false;
    }

}
function finiliz() {
    document.getElementById('result-0').value = eval(document.getElementById('result-0').value)
}
function reset() {
    document.getElementById('result-0').value = "";
}
function opretor(mathFunc) {
    if (mathFunc == 'pow') {
        powerFlag = true;
        document.getElementById('result-0').value += '^';
    } else {
        var c = document.getElementById('result-0').value;
        document.getElementById('result-0').value = Math[mathFunc](c);
    }

}
