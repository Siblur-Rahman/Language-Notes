import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'

import EnglishNotes from '../pages/English/EnglishNotes';
import UrduNotes from '../pages/Urdu/UrduNotes';
import AddTopic from '../pages/AddChapter/AddTopic';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
     
      {
        path:'/english',
        element:<EnglishNotes/>
      },
      {
        path:'/add-chapter',
        element:<AddTopic/>
      },
      {
        path:'/urdu',
        element:<UrduNotes/>
      },
    ]
  }
])

export default router