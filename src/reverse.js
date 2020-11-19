const reverse = source => {
  for (let i = 0; i < source.length / 2; i++) {
    // Last value (source[(source.length - i) - 1]) iteration ==> First item (source[i])
    source[i] = source[(source.length - i) - 1];

    // First value (source[(source.length - i) - 1]) item (source[i]) ==> Last item
    source[(source.length - i) - 1] = source[i];
  }

  return source;
}

module.exports = reverse;