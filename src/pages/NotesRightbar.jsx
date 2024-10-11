import { Link, useLocation } from "react-router-dom";

const NotesRightbar = () => {
    const {pathname} = useLocation();
    return (
        <>
        <div className="">
            <div className="sidebarHeading">Common Notes Link</div>
            <div className=""><Link to="/notes/javascript" className={`my-1 text-[15px] px-2 ${location.pathname.includes('javascript') && 'bg-active'}`}>JavaScript</Link></div>
            <div className=""><Link to="/notes/react" className={`my-1 text-[15px] px-2 ${location.pathname.includes('react') && 'bg-active'}`}>React</Link></div>
            <div className=""><Link to="/notes/backend" className={`text-[15px] px-2 ${pathname.includes('note/backend') && 'bg-active'}`}>BackendNote</Link></div>
            <div className=""><Link to="/notes/tools" className={`text-[15px] px-2 ${pathname.includes('tool') && 'bg-active'}`}>Tools</Link></div>
            <div className=""><Link to="/notes/folder" className={`text-[15px] px-2 ${pathname.includes('tool') && 'bg-active'}`}>Folder</Link></div>
        </div>
            {/* {pathname.includes('notes/javascript') && <JavasctiptNotesRightbar/>} */}
        </>
    );
};

export default NotesRightbar;