function numbers(valueP) {
    document.getElementById('result').value += valueP;
}

function operation() {
    var op = document.getElementById('result').value;
    if (op == 0) {
        document.getElementById('result').value = "No operation";
    } else {
        document.getElementById('result').value = eval(op);
    }
}

function reset() {
    document.getElementById('result').value = "";
}
