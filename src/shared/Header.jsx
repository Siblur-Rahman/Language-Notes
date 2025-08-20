
import {Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
        const {pathname} = useLocation()

      
        const links = [
          {
            title:'Home',
            path:'/'
          },
          {
            title:'Add Cahapter',
            path:'/add-chapter'
          },
          {
            title:'English',
            path:'/english'
          },
          {
            title:'Urdu',
            path:'/urdu'
          },
        ]
    return (
<div className="border-b-2">
  <ul className="flex justify-evenly leading-10 px-2 bg-black fixed top-0 z-10 h-[40px] min-h-10 border-b-2 w-full border-yellow-500">
                  <li className="text-yellow-500">Programming Notes</li>
                  { links.map((link, index) => <li className={`px-2 ${pathname === link.path && 'bg-red-600  rounded-lg'}`}><Link  to={link.path}>{link.title}</Link></li>)}
  </ul>
</div>
    );
};

export default Header;