function gcd(n, m) {
  return m == 0 ? n : gcd(m, n % m);
}

function nok(n, m) {
  return n * m / gcd(n, m);
}

function smallestCommons(arr) {
  arr.sort((a, b) => (a - b));
  let nk = arr[0];
  for(let i = arr[0]; i <= arr[1]; i++)
  	nk = nok(nk, arr[1] + arr[0] - i);
  return nk;
}

smallestCommons([1,5]);
