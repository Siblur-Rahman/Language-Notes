import { Link } from "react-scroll";
import { handleToggleDesplay } from "../../shared/CommonJS";

const IkhtilafLeftbar = () => {
    const getdata = [
        {
            // title:"ইখতিলাফ",
            eng:"channel_",
            topics:[
                {
                    bang:'কিছু উর্দু ইউটিউব চ্যানেল',
                     eng:'urduchannel'
                }, 
            ]
        }
    ]
    return (
        <>

            {
                getdata.map(data=>
                <div key={data?.title}>
                    <button onClick={handleToggleDesplay}  className="text-red-500 w-full text-center text-2xl">
                            {data?.title}
                    </button>
                    <div className="">
                        {
                            data?.topics?.map((topic, index) =>
                            <Link activeClass="active" to={`${data?.eng}${topic?.eng}`} spy={true} smooth={true} offset={-100} duration={500} key={index}  className="link">{topic?.bang}</Link>)
                        }
                    </div>
                </div>    
                )
                   
            }

        </>
    );
};

export default IkhtilafLeftbar;