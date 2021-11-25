function pageCount(n, p) {
    // Write your code here
  let startFirst = Math.floor(p / 2);
  let startEnd = Math.floor((n - p) / 2);

  return Math.floor(Math.min(startFirst, startEnd) / 2);
}
