import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  base: '/yagami/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  mfsu: {},
  devtool: 'eval-cheap-module-source-map',
})
