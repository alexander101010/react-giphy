// const Hello = (props) => {
//   return <div>Hello, {props.name}</div>;
// };
// example code in case I want to revisit

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div
        className={this.state.clicked ? "clicked" : null}
        onClick={this.handleClick}
      >
        Hello {this.props.name}
      </div>
    );
  }
}
