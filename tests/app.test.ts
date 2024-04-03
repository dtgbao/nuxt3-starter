import App from '../app.vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'

describe('App', () => {
  it('should render app correctly', async () => {
    await renderSuspended(App)
    expect(screen.getByText('Welcome to Nuxt!')).toBeInTheDocument()
  })
})
