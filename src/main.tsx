import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.css'
import { AppBar, Drawer } from './components'
import Container from '@mui/material/Container'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Container maxWidth='lg'>
        <AppBar />
        <Drawer>
          <RouterProvider router={router} />
        </Drawer>
      </Container>
    </Provider>
  </React.StrictMode>,
)
