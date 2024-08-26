import { Router } from 'express'
import { ServiceControllers } from './service.controller'

import { ServiceValidations } from './service.validation'

import { USER_ROLE } from '../user/user.constant'
import auth from '../../middleware/auth'
import validateRequest from '../../middleware/validateRequest'

const router = Router()

// create service route
router.post('/', auth(USER_ROLE.admin), ServiceControllers.createService)

// get specific service route
router.get('/:id', ServiceControllers.getSpecificService)

// get all services route
router.get('/', ServiceControllers.getAllServicesFromDB)

// update service route
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidations.serviceUpdateValidationSchema),
  ServiceControllers.updateService,
)

// delete service route
router.delete('/:id', auth(USER_ROLE.admin), ServiceControllers.deleteService)

export const ServiceRoutes = router
