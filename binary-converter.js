function compute() {
        var inputNumber = document.getElementById("input").value;  
    
        var inputBaseOptions = document.getElementById("inputBaseOptions");
        var inputBase = parseInt(inputBaseOptions.options[inputBaseOptions.selectedIndex].value);
    
        console.log("Input Base:" + typeof inputBase);
        
        var outputBaseOptions = document.getElementById("outputBaseOptions");
        var outputBase = parseInt(outputBaseOptions.options[outputBaseOptions.selectedIndex].value);
    
        console.log("Output Base:" + outputBase);
        console.log("Input Number:" + inputNumber);
    
        document.getElementById("output").value = BaseAtoBaseB(inputBase, outputBase, inputNumber); 
}

function BaseAtoBaseB(a, b, num) {
    console.log(a + " " + b);
    if (a > b) {
        
        var decNum = BaseAtoBaseB(a, 10, num);
        console.log("a > b");
        return ConvertGreaterBase(10, b, decNum, "");
    }
    else if (a < b){
        console.log("a < b");
        var decNum = ConvertLowerBase(num.length - 1, num.toString(), a);
        return ConvertGreaterBase(10, b, decNum, "");
    }
    
    else {
        console.log("a = b");
      return num;   
    }
    
}

function ConvertLowerBase(exponent, number, base) {
        if (exponent == -1) {
            console.log("CLB " + 0);
            return 0; 
        }
        else {
            console.log("CLB " + number[0] * Math.pow(base, exponent));
            return ConvertLowerBase(exponent - 1, number.substring(1), base) + number[0] *  Math.pow(base, exponent);
        }
}

function ConvertGreaterBase(a, b, num, result) {
    //Base case
    if (num == 0) {
        console.log("CRB " + result);
        return result;
    }
    
    var number = Math.floor(num / b);
    var remainder = num % b;
    
    result = remainder + result;
    console.log("CRB " + result);
        
    return ConvertGreaterBase(a, b, number, result);
}

//binary is the binary number to be converted to decimal
function BinaryToDecimal(binary) {
    var size = binary.length;
    var binaryString = binary.toString();
    var decimal = 0;
    
    for (i = size - 1; i >= 0; i--) {
           decimal += binaryString.substring(i, i+1) * Math.pow(2, size - 1 - i);
    }
    return decimal;
}

//decimal is the decimal number to be converted to binary.
//binary is a string storing the binary number.
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