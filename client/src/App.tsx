import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutAmin from './layout/LayoutAmin'
import LayoutWebsite from './layout/LayoutWebsite'
import PrayPage from './pages/pray/PrayPage'
import Dashboard from './pages/Dashboard/Dashboard'
function App() {
 
  const router = createBrowserRouter([
    {
      path: '/', element: (<LayoutWebsite />), children: [
      {index: true, element: (<PrayPage/>)}
      ]
    },
    {
      path: '/admin', element: (<LayoutAmin />), children: [
      {index: true, element: (<Dashboard/>)}
      ]
    },
    
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
