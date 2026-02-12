// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const shoppingSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    UserID : Type.String(),
    Products : Type.Array(Type.Object({
      Id: Type.String(),
      quantity: Type.Number()
    })),
    Date : Type.String()
  },
  { $id: 'Shopping', additionalProperties: false }
)
export const shoppingValidator = getValidator(shoppingSchema, dataValidator)
export const shoppingResolver = resolve({})

export const shoppingExternalResolver = resolve({})

// Schema for creating new entries
export const shoppingDataSchema = Type.Pick(shoppingSchema, ['UserID', 'Products', 'Date'], {
  $id: 'ShoppingData'
})
export const shoppingDataValidator = getValidator(shoppingDataSchema, dataValidator)
export const shoppingDataResolver = resolve({})

// Schema for updating existing entries
export const shoppingPatchSchema = Type.Partial(shoppingSchema, {
  $id: 'ShoppingPatch'
})
export const shoppingPatchValidator = getValidator(shoppingPatchSchema, dataValidator)
export const shoppingPatchResolver = resolve({})

// Schema for allowed query properties
export const shoppingQueryProperties = Type.Pick(shoppingSchema, ['_id', 'UserID', 'Products', 'Date'])
export const shoppingQuerySchema = Type.Intersect(
  [
    querySyntax(shoppingQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const shoppingQueryValidator = getValidator(shoppingQuerySchema, queryValidator)
export const shoppingQueryResolver = resolve({})
