

const Title = ({name,idx}) => {
    const {price,title} =name
    return (
        <ul>
            <li className="text-1xl font-semibold">{idx} {title}</li>
        
        </ul>
    );
};

export default Title;