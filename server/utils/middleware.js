import logger from "./logger.js"

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path: ', request.path)
  logger.info('Body', request.body)
  logger.info('---')
  next()
}

const unkownEndpoint = (request, response) => {
  // unknown endpoint middleware uses .end() because there's no body to send 
  response.status(404).end().send({error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    // Without return, after sending the 400 response the code would keep running and hit next(error)
    return response.status(400).send({error: 'malformeatted id'})
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).json({error: error.message})
  }

  // If the error doesn't match any of the known types above, pass it on. 
  // This either hits another error handler you've registered, or falls through to Express's built-in default error handler which sends a 500
  next(error)
}

export default {
  requestLogger,
  unkownEndpoint,
  errorHandler
}