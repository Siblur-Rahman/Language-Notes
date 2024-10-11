// description must ba a Array
const Syntax = ({ syntax, synText, synDescription }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">Syntax</h2>
            {synText && <p>{synText}</p>}
            {syntax && <pre className="npmCode my-10px">{syntax}</pre>}
            {
            synDescription  && 
            <div className="my-5">
                <h2 className="text-3xl">Describtion of Syntax</h2>
            <div className="bg-highlight p-5">{synDescription.map(des=><li>{des}</li>)}</div>
            </div>}
            {/* {synDescription.length} */}
        </div>
    );
};

export default Syntax;