function getMinMax(str) {
  let totalResult = str
  .split(" ")
  .filter((item) => isFinite(item))
  .map((item) => +item);

 return {min: Math.min(...totalResult),
         max: Math.max(...totalResult)}
}
