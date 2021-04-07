import Layout from './component/common/Layout'
import Dashboard from './component/screen/Dashboard'

const App = () => (
  <Layout loggedIn={true}>
    <Dashboard />
  </Layout>
)

export default App