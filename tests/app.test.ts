import App from '../app.vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import db from './mocks/database'

describe('App', () => {
  const productIds: number[] = []

  beforeAll(() => {
    Array.from({ length: 3 }).forEach(() => {
      const product = db.product.create()
      console.log('product', product)
      productIds.push(product.id)
    })
  })

  // IMPORTANT: Always clean up the database after all tests
  afterAll(() => {
    db.product.deleteMany({ where: { id: { in: productIds } } })
  })

  it('should render app correctly', async () => {
    await renderSuspended(App)
    expect(screen.getByText('Welcome to Nuxt!')).toBeInTheDocument()
  })
})
