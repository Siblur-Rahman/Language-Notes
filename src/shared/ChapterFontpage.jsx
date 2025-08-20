
//

import Blog from "./Blog";
import ShowHideBlog from "./ShowHideBlog";

const ChapterFontpage = ({chapterData, chapter}) => {
    return ( 
    <div className="">
    {
        chapterData && 
        <>
            {           
                chapterData?.map((topic, index) =><div className={`${chapter}${topic?.topic} topic-border`}>
                <Blog topic={topic?.topic}/>

                {
                    topic?.sentences?.map((sentence, index) =><ShowHideBlog button={sentence?.from} content={sentence?.to}/>)
                }

            </div>)
            }
        </>
    }
    </div>    
);
};

export default ChapterFontpage;