import { shopping } from './shopping/shopping.js'
import { products } from './products/products.js'
import { users } from './users/users.js'
export const services = app => {
  app.configure(shopping)

  app.configure(products)

  app.configure(users)

  // All services will be registered here
}
