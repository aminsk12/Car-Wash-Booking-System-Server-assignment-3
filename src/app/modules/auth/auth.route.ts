import { Router } from 'express'
import { AuthControllers } from './auth.controller'
import { UserValidations } from '../user/user.validation'
import { AuthValidations } from './auth.validation'
import validateRequest from '../../middleware/validateRequest'

const router = Router()

router.post(
  '/signup',
  validateRequest(UserValidations.userCreateValidationSchema),
  AuthControllers.registeredUser,
)

router.post(
  '/login',
  validateRequest(AuthValidations.loginUserValidationSchema),
  AuthControllers.loginUser,
)

export const AuthRoutes = router
