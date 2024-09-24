import { Button } from "flowbite-react";

const { Component } = require("react");

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: "", users: null };
  }

  static getDerivedStateFromProps(props, state) {
    return { name: props.name };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    console.log("users", this.state.users);
    return (
      <div className="flex items-center gap-8">
        <p>{this.state.name}</p>
        <Button onClick={this.handleDecrement}>-</Button>
        <p className="text-xl">{this.state.count}</p>
        <Button onClick={this.handleIncrement}>+</Button>

        <ul>
          {this.state.users?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MyComponent;
