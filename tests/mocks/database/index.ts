import { factory } from '@mswjs/data'
import { product } from './product'

const db = factory({
  product,
})

export default db
