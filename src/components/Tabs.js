import React, {useState} from 'react';

const Tabs = (props) => {
    const {arr} = props;
    const [content, setContent] = useState(arr[0].content);

    
    return (
        <div>
            <ul>
                {arr.map((item, index) => {
                    return <li key={index} onClick={() => {setContent(item.content)}}>{item.title}</li>;
                })}
            </ul>
            <p>{content}</p>
        </div>
    );
}

export default Tabs;