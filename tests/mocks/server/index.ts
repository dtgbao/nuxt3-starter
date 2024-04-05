import { RequestHandler } from 'msw'
import { setupServer } from 'msw/node'
import db from '../database'

const handlers: RequestHandler[] = [...db.product.toHandlers('rest')]

export const server = setupServer(...handlers)
