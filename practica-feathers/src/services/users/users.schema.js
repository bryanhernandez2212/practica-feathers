// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const usersSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    password : Type.String(),
    first_name : Type.String(),
    last_name : Type.String(),
    username: Type.String(),
    email : Type.String(),
    gender : Type.String()
  },
  { $id: 'Users', additionalProperties: false }
)
export const usersValidator = getValidator(usersSchema, dataValidator)
export const usersResolver = resolve({})

export const usersExternalResolver = resolve({})

// Schema for creating new entries
export const usersDataSchema = Type.Pick(usersSchema, ['password', 'first_name', 'last_name', 'username', 'email', 'gender'], {
  $id: 'UsersData'
})
export const usersDataValidator = getValidator(usersDataSchema, dataValidator)
export const usersDataResolver = resolve({})

// Schema for updating existing entries
export const usersPatchSchema = Type.Partial(usersSchema, {
  $id: 'UsersPatch'
})
export const usersPatchValidator = getValidator(usersPatchSchema, dataValidator)
export const usersPatchResolver = resolve({})

// Schema for allowed query properties
export const usersQueryProperties = Type.Pick(usersSchema, ['_id', 'first_name', 'last_name', 'username', 'email', 'gender'])
export const usersQuerySchema = Type.Intersect(
  [
    querySyntax(usersQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const usersQueryValidator = getValidator(usersQuerySchema, queryValidator)
export const usersQueryResolver = resolve({})
