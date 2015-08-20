function compute() {
    if (document.getElementById("binary").value.length > 0) {
        var input = document.getElementById("binary").value;  
        document.getElementById("decimal").placeholder = BinaryToDecimal(input);
    }
    else if (document.getElementById("decimal").value.length > 0) {
        var input = document.getElementById("decimal").value;  
        document.getElementById("binary").placeholder = DecimalToBinary(input, "");
    }
}

function BinaryToDecimal(binary) {
    var size = binary.length;
    var binaryString = binary.toString();
    var decimal = 0;
    
    for (i = size - 1; i >= 0; i--) {
           decimal += binaryString.substring(i, i+1) * Math.pow(2, size - 1 - i);
    }
    return decimal;
}

function DecimalToBinary(decimal, binary) {
    //Base case
    if (decimal == 0) {
           return binary;
    }
    
    var number = Math.floor(decimal / 2);
    var remainder = decimal % 2;
    
    binary = remainder + binary;
    
    return DecimalToBinary(number, binary);
}