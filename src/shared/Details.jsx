
const Details = ({details}) => {
    return (<>{details && <a href={details} target='_blank'><span className='text-yellow-300'> Details</span></a>}</>);
};

export default Details;