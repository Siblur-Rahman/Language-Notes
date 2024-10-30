import Blog from "../../../shared/Blog";


const School = () => {
    const datas = [
        {
            topic:'', 
            sentences:[
                {bang:'', eng:''},
                {bang:'', eng:''},
                {bang:'', eng:''},
                {bang:'', eng:''},
                ]
        },
        {
            topic:'', 
            sentences:[
                {bang:'', eng:''},
                {bang:'', eng:''},
                {bang:'', eng:''},
                {bang:'', eng:''},
                ]
        },
    ]
    return (   
            <div className="topic-border">
                {datas.map((data) =>
                    <div>
                        {data?.topic && <h2>{data.topic}</h2>}
                        {data?.sentences?.map((sent, index) =><p>{index+1} . <span>{sent?.bang}</span> : <span>{sent?.eng}</span></p>)}
                    </div>)}
            </div>
    );
};

export default School;