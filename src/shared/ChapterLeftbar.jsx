
import { PropTypes } from 'prop-types';
import { Link } from 'react-scroll';
import { handleToggleDesplay } from './CommonJS';
import useAuth from '../hooks/useAuth';


const ChapterLeftbar = ({chapterData, chapter}) => {
  const { isHide } = useAuth();

    return (
        <div>
            {
                chapterData &&  <>
                {chapter && <button onClick={handleToggleDesplay} className='leftbarHeading uppercase'>{chapter}</button>}
                    <div className={`${isHide && 'hidden'} ml-2`}>
                        {
                        chapterData?.map((topic, index) =><Link activeClass="active p-0" to={`${chapter}${topic?.topic}`} spy={true} smooth={true} offset={-100} duration={100} key={index}  className="link pl-2">{topic?.topic}</Link>)
                        }
                    </div>
             </>
            }
        </div>
    );
};

ChapterLeftbar.PropTypes = {
    chapterData: PropTypes.array.isRequired,
    hidden: PropTypes.bool.isRequired,
}

export default ChapterLeftbar;