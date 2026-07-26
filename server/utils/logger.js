const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params)
  }
}

const error = (...params) => {
  // spread operator unpacks the array back out into individual arguments when calling console.error
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params)
  }
}

export default { info, error }