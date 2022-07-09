function translatePigLatin(str) {
  const regex = /^[^(aeiou)]+/g;
  if (regex.test(str)){
  	let newe = str.match(regex);
    const back_part = newe[0];
    newe = str.slice(back_part.length, str.length) + back_part + 'ay';
    str = newe;
  }
  else{
  	str += 'way';
  }
  return str;
}

translatePigLatin("consonant");
