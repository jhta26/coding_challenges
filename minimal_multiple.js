

function minimalMultiple(divisor, lowerBound) {

  if (lowerBound % divisor === 0) {
    return lowerBound;
  }
  return (Math.ceil(lowerBound / divisor)) * divisor;
}

