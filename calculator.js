
function calc(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var opr = document.getElementById('opr').value;

    switch(opr) {
        case '+': document.getElementById('result').value = n1+n2;
        break;
        case '-': document.getElementById('result').value = n1-n2;
        break;
        case '*': document.getElementById('result').value = n1*n2;
        break;
        case '/': document.getElementById('result').value = n1/n2;
        break;
        case '%': document.getElementById('result').value = n1/100*n2;
        break;
        default: alert('not valid')
        
    }
}

var opr2;
var val;
var val1;

function calcArea() {
    var pi =3.1415926535898;

    var opr2 = document.getElementById('opr2').value;
    var val = parseFloat(document.getElementById('val').value);
    var val1 = parseFloat(document.getElementById('val1').value);

    switch(opr2) {
        case 'c': document.getElementById('result2').value = 2*pi*val;
        break;
        case 'r': document.getElementById('result2').value = val/2;
        break;
        case 'd': document.getElementById('result2').value = 2*val;
        break;
        case 'a': document.getElementById('result2').value = pi*val*val;
        break;
        case 'rect': document.getElementById('result2').value = val*val1;
        break;
        default: alert('not valid')
    }
}

function rectangle(oObject){    //this function is to disable the second input field until selected
    var selectRect = oObject.options[oObject.selectedIndex].value;
    var val1 = document.getElementById('val1');

    val1.disabled = false;

    if(selectRect == 'rect'){
        val1.disabled = false;
    }else {
        val1.disabled = true;
    }
}