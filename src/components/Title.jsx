

const Title = ({name,idx}) => {
    const {price,title} =name
    return (
        <ul>
            <li className="text-1xl font-semibold bg-white m-2 rounded-lg p-2">{idx} {title}</li>
        
        </ul>
    );
};

export default Title;