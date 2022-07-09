function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (str === alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]) + 1))
  	return undefined;
  else{
  	const real = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]) + 1);
    return [...real].filter(char => str.indexOf(char) === -1).join();
  }
}

console.log(fearNotLetter("abcdefghjklmno"));
