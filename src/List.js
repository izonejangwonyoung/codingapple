import {useState} from "react";
// const changeTitle = () => {
//     const newTitle = [...title];   ///spread operator 사용
//     newTitle[0] = '여자 코트 추천'
//     setTitle(newTitle);
// }
function List() {
    const [title, setTitle] = useState(['남자 코트 추천', '파이썬 독학', '강남 우동 맛집'])
    const [thumb, setThumb] = useState(0,0,0);
    const a = 0;
    const addThumb = () => {
        setThumb(thumb + 1);
    };
    const minusThumb = () => {
        setThumb(thumb - 1);
    };

    const alignTitle = () => {
        const sortedTitle = [...title].sort();
        setTitle(sortedTitle);
    }
    return (
        <div className='list'>
            <h4>{title[a]}
                <button onClick={addThumb}>👍</button>
                <button onClick={minusThumb}>👎</button>
                {thumb[0]}</h4>
            <p>11-07 발행</p>
        </div>
    )
}
