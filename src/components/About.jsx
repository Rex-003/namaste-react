import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constuctor");
  }
  componentDidMount() {
    console.log("Parent component did mount ");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>This is the About Page</h1>
        <User name={"Rajat Chahar (Functional)"} location={"Agra"} />
        <UserClass name={"Rajat Chahar (Class)"} location={"Agra"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is the About Page</h1>
//       <User name={"Rajat Chahar (Functional)"} location={"Agra"} />
//       <UserClass name={"Rajat Chahar (Class)"} location={"Agra"} />
//     </div>
//   );
// };
export default About;
