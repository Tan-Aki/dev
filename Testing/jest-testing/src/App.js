/////////////////////////////////////////////////////////////////////////////
//// Regular tests, without API
/////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//     const [items, setItems] = React.useState([]);
//     const [text, setText] = React.useState('');

//     const handleChange = (e) => setText(e.target.value);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!text.length) {
//             return;
//         }

//         const newItem = {
//             text,
//             id: Date.now(),
//         };

//         setText('');
//         setItems(items.concat(newItem));
//     };

//     return (
//         <div>
//             <h1>TODOs</h1>

//             <ul>
//                 {items.map((item) => (
//                     <li key={item.id}>{item.text}</li>
//                 ))}
//             </ul>

//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="new-todo">What needs to be done?</label>
//                 <br />
//                 <input id="new-todo" value={text} onChange={handleChange} />
//                 <button>Add #{items.length + 1}</button>
//             </form>
//         </div>
//     );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////
//// Tests with API
/////////////////////////////////////////////////////////////////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';


import { api } from './api';
import { RandomComponent } from './RandomComponent';

function App() {
    const [items, setItems] = React.useState([]);
    const [text, setText] = React.useState('');

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.length) {
            return;
        }

        const newItem = {
            text,
            id: Date.now(),
        };

        // *** NEW ***
        api.createItem('/items', newItem).then((persistedItem) => {
            setText('');
            setItems(items.concat(persistedItem));
        });
    };

    return (
        <div>
            <RandomComponent />
            <h1>TODOs</h1>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <br />
                <input id="new-todo" value={text} onChange={handleChange} />
                <button>Add #{items.length + 1}</button>
            </form>
        </div>
    );
}

export default App;
