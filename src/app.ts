import express, { Application } from 'express'
import cors from 'cors'
import { routes } from './app/routes'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFoundRoute'


const app: Application = express()

// middleware
app.use(cors())
app.use(express.json())

// application routes
app.use('/', routes)

app.get('/', (req, res) => {
  res.send('Car Wash Booking Server is running...')
})

// customize error
app.use(globalErrorHandler)
app.use(notFound)

export default app;
