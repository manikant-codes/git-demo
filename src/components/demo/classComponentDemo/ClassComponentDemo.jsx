import { Button } from "flowbite-react";

const { Component } = require("react");

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, name: "", user: null };
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
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.count}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ user: data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.name === nextState.name) {
  //     return false;
  //   }
  //   return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count !== this.state.count) {
      fetch(`https://jsonplaceholder.typicode.com/users/${this.state.count}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({ user: data });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  componentWillUnmount() {
    alert("Component will unmount!");
  }

  render() {
    console.log("user", this.state.user);
    return (
      <div className="flex items-center gap-8">
        <p>{this.state.name}</p>
        <Button onClick={this.handleDecrement}>-</Button>
        <p className="text-xl">{this.state.count}</p>
        <Button onClick={this.handleIncrement}>+</Button>

        <ul>
          {this.state.user && (
            <li key={this.state.user.id}>{this.state.user.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default MyComponent;
