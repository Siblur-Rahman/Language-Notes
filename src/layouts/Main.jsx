import {Outlet, useLocation} from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import NotesLeftbar from '../pages/NotesLeftbar'
import { useEffect } from 'react'
import NotesRightbar from '../pages/NotesRightbar'
import { Active } from '../shared/CommonJS'


const NotesLayout = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  Active();
  useEffect(() =>{
    // Active();
}, [])

  return (
     <>
        <Header/>
        {/* sideber */}
       <div className="leftBar min-h-[calc(100vh-200px)]">              
              <NotesLeftbar/>
        </div>
        {/* outlet */}
        <div className={`content min-h-screen ${pathname.includes('login')? 'w-full left-0':'w-[80%] left-[20%]'}`}>
          <Outlet/>
        </div>
            {/* rirhteber */}
       {/* <div className="rightbar min-h-[calc(100vh-200px)]">              
              <NotesRightbar/>
        </div> */}
        {/* Footer */}
        <div className='w-[80%] relative bottom-0 left-[20%] mt-10'>
          <Footer/>
        </div>
        </>
  )
}

export default NotesLayout
