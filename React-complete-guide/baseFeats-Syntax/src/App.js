// class based component

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //if state changes, it will lead react to re render the dom element

  state = {
    persons: [
      {
        name: "Tan",
        age: 30
      },
      {
        name: "Sub",
        age: 29
      },
      {
        name: "Rota",
        age: 26
      }
    ],
    otherValue: "some other value"
  };

  switchNameHandler = newName => {
    // console.log('Was clicked');
    // dont do this !!   this.state.persons[0].name = 'Max';

    this.setState({
      persons: [
        {
          name: newName,
          age: 30
        },
        {
          name: "Sub",
          age: 29
        },
        {
          name: "Rota",
          age: 28
        }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "Tan",
          age: 30
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: "Rota",
          age: 26
        }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>THis is working </p>
        <button style={style} onClick={() => this.switchNameHandler("Tanneguy !!")}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Tan!")}
          changed={this.nameChangedHandler}
        >
          My hobbies : Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // this is what gets executed behind the scenes
    // return React.createElement(
    // 	'div',
    // 	{ className: 'App' },
    // 	React.createElement('h1', null, 'Does this work now ?')
    // );
  }
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: "Tan",
//         age: 30
//       },
//       {
//         name: "Sub",
//         age: 29
//       },
//       {
//         name: "Rota",
//         age: 26
//       }
//     ]
//   });

//   const [otherState, setOtherState] = useState("some other value");
//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked');
//     // dont do this !!   this.state.persons[0].name = 'Max';
//     setPersonsState({
//       persons: [
//         {
//           name: "Tanneguy",
//           age: 30
//         },
//         {
//           name: "Sub",
//           age: 29
//         },
//         {
//           name: "Rota",
//           age: 28
//         }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a react App</h1>
//       <p>THis is working </p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My hobbies : Racing
//       </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );

//   // this is what gets executed behind the scenes
//   // return React.createElement(
//   // 	'div',
//   // 	{ className: 'App' },
//   // 	React.createElement('h1', null, 'Does this work now ?')
//   // );
// };

// export default app;