import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { AppBar, Drawer } from './components'
import { Dashboard } from './pages'

const App: React.FC = () => {

  return (
    <Container maxWidth='lg'>
      <AppBar />
      <Drawer>
        <Dashboard />
        <Outlet />
      </Drawer>
    </Container>
  )
}

export default App
