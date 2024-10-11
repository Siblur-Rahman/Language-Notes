
import EnglishNotesNotesLeftbar from "./English/EnglishNotesNotesLeftbar";

import { useLocation } from 'react-router-dom';
import UrduNotesNotesLeftbar from "./Urdu/_UrduNotesLeftbar";

const NotesLeftbar = () => {
  const {pathname} = useLocation();
    return (
        <div className="p-3">
            {pathname==='/english' && <EnglishNotesNotesLeftbar/>}
            {pathname==='/urdu' && <UrduNotesNotesLeftbar/>}
        </div>
    );
};

export default NotesLeftbar;