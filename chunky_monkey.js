function chunkArrayInGroups(arr, size) {
  const count = Math.trunc(arr.length / size);
  let new_arr = [];
  for(let i = 0; i < count; i++)
    new_arr.push(arr.slice(i * size, i * size + size));
  if (arr.length % size != 0)
    new_arr.push(arr.slice(arr.length - arr.length % size, arr.length));
  return new_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
