import { Component } from "react";
import Form from "./components/Form";
import Title from "./components/Title";

class App extends Component {
    render() {
        return (
          <div className="app">
            <Title name="Registration Form"/>
            <Form />
          </div>
        );
    }
}

export default App;
