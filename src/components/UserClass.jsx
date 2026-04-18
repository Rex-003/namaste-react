class UserClass extends React.Component {
  // if you want to accpet the props then you have to create a constructor
  constructor(props) {
    // important to write the super keyword
    super(props);
    // If we want to create state variables in this case we will be using this way
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    // destructure the code here
    const { name, location } = this.props;
    // We can also destrucutre the code here as well
    const { count, count2 } = this.state;
    console.log("child Constructor");
    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Reset
        </button>
        <h1>count : {count2}</h1>
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Age: 22</h3>
      </div>
    );
  }
}
export default UserClass;
