import React, {useState} from 'react';

const Tabs = (props) => {
    const [content, setContent] = useState("");

    const {arr} = props;
    return (
        <div>
            <ul>
                {arr.map((item) => {
                    return <li onClick={() => {setContent(item.content)}}>{item.title}</li>;
                })}
            </ul>
            <p>{content}</p>
        </div>
    )
}

export default Tabs;