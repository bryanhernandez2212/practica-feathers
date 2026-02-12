// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  shoppingDataValidator,
  shoppingPatchValidator,
  shoppingQueryValidator,
  shoppingResolver,
  shoppingExternalResolver,
  shoppingDataResolver,
  shoppingPatchResolver,
  shoppingQueryResolver
} from './shopping.schema.js'
import { ShoppingService, getOptions } from './shopping.class.js'
import { shoppingPath, shoppingMethods } from './shopping.shared.js'

export * from './shopping.class.js'
export * from './shopping.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const shopping = app => {
  // Register our service on the Feathers application
  app.use(shoppingPath, new ShoppingService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: shoppingMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(shoppingPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(shoppingExternalResolver),
        schemaHooks.resolveResult(shoppingResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(shoppingQueryValidator),
        schemaHooks.resolveQuery(shoppingQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(shoppingDataValidator),
        schemaHooks.resolveData(shoppingDataResolver)
      ],
      patch: [
        schemaHooks.validateData(shoppingPatchValidator),
        schemaHooks.resolveData(shoppingPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
