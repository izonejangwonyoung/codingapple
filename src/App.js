import './App.css';
import {useState} from "react";
import React from 'react';
import Modal from "./Modal";

var i;

function App() {
    const [title, setTitle] = useState(['남자 코트 추천', '파이썬 독학', '강남 우동 맛집'])
    const [thumb, setThumb] = useState([0, 0, 0]);
    let [modal, setModal] = useState(0);
    // const addThumb = (i) => {
    //
    //     const newThumb = [...thumb]
    //     console.log(newThumb)
    //     newThumb[i] = newThumb[i] + 1
    //     setThumb(newThumb[i]);
    // };
    const minusThumb = (i) => {
        const newThumb = [...thumb]
        console.log(newThumb)
        newThumb[i] = newThumb[i] - 1
        setThumb(newThumb[i]);
    };

    const alignTitle = () => {
        const sortedTitle = [...title].sort();
        setTitle(sortedTitle);
    }

    const showModal = () => {
        if (modal === 1) {
            modal = 0
        } else {
            modal = 1
        }
        setModal(modal)
    }

    return (
        <div className="App">
            <div className="black_nav">
                <h4>react blog</h4>
            </div>
            <button onClick={alignTitle}>재정렬</button>
            {
                title.map(function (a, i) {
                    return (
                        <div className='list' key={i}>
                            {/*<button onClick={setModal}>모달창 토글</button>*/}
                            <h4 onClick={showModal} style={thumb[i]<0?{color:'red'}:{}}>{a}
                                <button onClick={() => {
                                    const newThumb = [...thumb];
                                    newThumb[i] = newThumb[i] + 1;
                                    setThumb(newThumb)
                                }}>👍
                                </button>
                                <button onClick={() => {
                                    const newThumb = [...thumb];
                                    newThumb[i] = newThumb[i] - 1;
                                    setThumb(newThumb)
                                }}>👎</button>
                                {thumb[i]}</h4>
                            <p>11-07 발행</p>
                        </div>

                    )
                })}
            {
                modal === 1 ? <Modal/> : null
            }
        </div>
    );
}

export default App;
