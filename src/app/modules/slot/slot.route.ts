import { Router } from 'express'
import { SlotControllers } from './slot.controller'

import { SlotValidations } from './slot.validation'

import { USER_ROLE } from '../user/user.constant'
import auth from '../../middleware/auth'
import validateRequest from '../../middleware/validateRequest'

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
