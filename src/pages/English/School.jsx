

const School = () => {
    const datas = [
        // {
        //     topic:'', 
        //     sentences:[
        //         {bang:"", eng:""},
        //         {bang:"", eng:""},
        //         {bang:"", eng:""},
        //         {bang:"", eng:""},
        //         {bang:"", eng:""},
        //         {bang:"", eng:""},
        //         {bang:"", eng:""},

        //         ]
        // },
        {
            topic:'Sentences', 
            sentences:[
                {bang:'স্কুল ফাঁকি দিওনা', eng:"don't skip school"},
                {bang:"", eng:""},
                ]
        },
        {
            // topic:'', 
            sentences:[
                {bang:"fhghfgh", eng:"hghgj"},
                {bang:"", eng:""},
                {bang:"", eng:""},
                {bang:"", eng:""},
                {bang:"", eng:""},
                {bang:"", eng:""},
                {bang:"", eng:""},

                ]
        },
    ]
    return (   
            <div className="topic-border">
                {datas.map((data) =>
                    <div>
                        {data?.topic ? 
                        <div className={data?.topic}> 
                                    <h2>{data?.topic}</h2>
                                    {data?.sentences?.map((sent, index) =><p>{index+1} . <span>{sent?.bang}</span> : <span>{sent?.eng}</span></p>)}
                        </div> : 
                        <div>
                            {data?.sentences?.map((sent, index) =><p>{index+1} . <span>{sent?.bang}</span> : <span>{sent?.eng}</span></p>)}
                        </div>
                        }
                    </div>)}
            </div>
    );
};

export default School;