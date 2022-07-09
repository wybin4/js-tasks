function rot13(str) {
  let codes = str.split('').map(char => char.charCodeAt(0));
  let index;
  for(let i = 0; i < codes.length; i++)
    if (codes[i] >= 65 && codes[i] <= 90){
      if (codes[i] <= 77)
      	codes[i] += 13;
      else codes[i] -= 13;
    }
  codes = codes.map(val => String.fromCharCode(val));
  return codes.join('');
}
console.log(rot13("SERR CVMMN!"));
