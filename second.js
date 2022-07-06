function convertToRoman(num) {
    let result = '', ref = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'], xis = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    if (num <= 3999999 && num >= 4000) {
        num += '';
        result = convert(num.substring(0,num.length-3));
        num = num.substring(num.length-3);
    }
    for (let x = 0; x < ref.length; x++){
        while(num >= xis[x]){
            result += ref[x];
            num -= xis[x];
        }
    }
    num = result;
    return num;
}

console.log(convertToRoman(36));
