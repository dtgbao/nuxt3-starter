import { primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

export const product = {
  id: primaryKey(faker.number.int),
  name: faker.commerce.productName,
  price: () => faker.number.int({ min: 1, max: 1000 }),
}
