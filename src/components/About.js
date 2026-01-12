import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// class based component

class About extends React.Component {

  // construcotor (props) {
  //     super(props);

  //     this.state = {
  //         count: 0
  //     };
  //     console.log("Parent constructor");
  // }

  render() {
  //   const { name, location, Contact } = this.props;
  //   const { count } = this.state;

    console.log("Parent render");

    return (
      <div>
       
          {/* Heading */}
          <h1 className="text-4xl font-semibold text-orange-500 mb-0 m-[4%]">
            About Me
          </h1>
          {/* <div>
            <UserContext.Consumer>
              {({ loggedInUser }) => <h1 className="font-bold"><span>{loggedInUser}</span></h1>}
            </UserContext.Consumer>
          </div> */}

          <p className="text-gray-500 mb-10 ml-[4%] text-sm">
            A little about who I am and what I love building.
          </p>

          {/* Profile section */}
          <div className=" flex items-start ">
            
            {/* Photo + basic info */}
            <div className="w-[22%] ml-[10%] mt-3 border-gray-200 rounded-lg shadow-sm shadow-orange-200 hover:shadow-lg transition-shadow duration-300 hover:border-orange-300 hover:bg-orange-50 focus:outline focus:outline-2 focus:outline-orange-500 focus:outline-offset-2">
            <UserClass
              // name={"Shruti"}
              // location={"India"}
              // Contact={"alewashruti@gmail.com"}
            />
            </div>

            

            {/* About text */}
            <div className=" w-[50%] mt-[8%] mb-[4%] m-10 p-11 border-gray-200 bg-orange-50 rounded-lg shadow-sm shadow-orange-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                I’m a <span className="font-medium">tech enthusiast</span> who enjoys
                learning how things work under the hood and turning ideas into
                real, usable products.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                I love connecting with people who share a similar mindset —
                curious, driven, and always willing to grow. Whether it’s
                building projects, exploring new technologies, or debugging
                things that refuse to work at 2 AM, I genuinely enjoy the
                process.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Right now, I’m focused on improving my skills, building better
                systems, and collaborating with people who believe in learning
                by doing.
              </p>
            </div>

          </div>

          {/* <UserClass name={"Elon Musk"} location={"USA"} Contact={"abc@gmail.com"} /> */}
        
      </div>
    );
  }
}

export default About;



/*

-Parent constructor
-Parent render

   -first constructor
   -first render

   -second constructor
   -second render

  -first componentDidMount
  -second componentDidMount

-parent componentDidMount

*/
