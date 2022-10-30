import express from 'express'
import * as advisorStudentPeople from '../services/advisorStudentPeople.service'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', asyncHandler(async (_req, res, next): Promise<any> => {
  try {
    const response = await advisorStudentPeople.getAll(res.locals.personId)
    res.send(response)
  } catch (error) {
    next(error)
  }
}))

export default router
