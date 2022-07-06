function palindrome(str) {
  const regex = /[^A-Z^a-z^0-9]/g;
  str = str.replace(regex, '');
  if (str.length % 2 == 0){
      const str1 = str.substring(0, str.length/2).toLowerCase();
      let str2 = str.substring(str.length/2, str.length).toLowerCase();
      str2 = [...str2].reverse().join('');
      if (str1===str2)
        return true;
  }
  else{
      const str1 = str.substring(0, Math.ceil(str.length/2)-1).toLowerCase();
      let str2 = str.substring(Math.ceil(str.length/2), str.length).toLowerCase();
      str2 = [...str2].reverse().join('');
      if (str1===str2)
        return true;
  }
  return false;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
