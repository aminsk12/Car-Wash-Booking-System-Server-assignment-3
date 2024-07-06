import { Router } from 'express'
import { SlotControllers } from './slot.controller'
import validateRequest from '../../middleware/validateRequest'
import { SlotValidations } from './slot.validation'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

// create slot
router.post(
  '/slots',
  auth(USER_ROLE.admin),
  validateRequest(SlotValidations.slotCreateValidationSchema),
  SlotControllers.createSlot,
)

// get all slots
router.get('/availability', SlotControllers.getAllSlots)

export const SlotRoutes = router;
