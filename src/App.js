import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    person: {
      firstName: "maher",
      bio: "male",
      imgSrc: "photos",

      profession: "sales agent",
    },
    show: true,
    date: new Date(),
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    return (
      <div>
        {this.state.show && (
          <div>
            <h1>{this.state.person.firstName}</h1>
            <h1>{this.state.person.bio}</h1>
            <h1>{this.state.person.profession}</h1>
            <h1>{this.state.person.imgSrc}</h1>
          </div>
        )}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          toggleShow
        </button>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;
