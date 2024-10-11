

const Example = ({heading, exCode, exText, exOutput, exDescription, index}) => {
    return (
        <div>
        {index? <h2 className="text-2xl font-bold">Example - {index} : {heading}</h2> : <h2 className="text-2xl font-bold">Example</h2>}
        {exText && <p>{exText}</p>}
        {exCode && <pre className="code my-10px">{exCode}</pre>}
        {exOutput && <div>
            <h2 className="text-2xl font-bold">Output</h2>
            <pre className="code">{exOutput}</pre>
            </div>}
        {
        exDescription  && 
        <div className="my-5">
            <h2 className="text-3xl">Describtion of example</h2>
        <div className="bg-highlight p-5">{exDescription.map(des=><li>{des}</li>)}</div>
        </div>}
        {/* {description.length} */}
    </div>
    );
};

export default Example;