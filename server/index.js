import { PORT } from '../server/utils/config.js'
import app from "../server/app.js"

app.listen(
  PORT,
  () => {
    console.log(`Server running on port: ${PORT}`)
  }
)