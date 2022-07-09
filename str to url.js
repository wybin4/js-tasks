function urlSlug(title) {
  const new_str = title.split(' ')
    .map(char => char.toLowerCase())
    .filter(char => char !== '')
    .join('-');
  return new_str;
}
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
