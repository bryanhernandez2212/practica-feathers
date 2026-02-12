export const shoppingPath = 'shopping'

export const shoppingMethods = ['find', 'get', 'create', 'patch', 'remove']

export const shoppingClient = client => {
  const connection = client.get('connection')

  client.use(shoppingPath, connection.service(shoppingPath), {
    methods: shoppingMethods
  })
}
