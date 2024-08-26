import { Router } from 'express'
import { BookingControllers } from './booking.controller'

import { BookingValidations } from './booking.validation'

import { USER_ROLE } from '../user/user.constant'
import validateRequest from '../../middleware/validateRequest'
import auth from '../../middleware/auth'

const router = Router()

router.post(
  '/bookings',
  auth(USER_ROLE.user),
  validateRequest(BookingValidations.bookingCreateValidationSchema),
  BookingControllers.createBooking,
)

router.get(
  '/bookings',
  auth(USER_ROLE.admin),
  BookingControllers.getAllBookings,
)

router.get(
  '/my-bookings',
  auth(USER_ROLE.user),
  BookingControllers.getUserBookings,
)

export const BookingRoutes = router;
