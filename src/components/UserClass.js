import React, { useState } from "react";
// import avatar from "./cute.jpg";



class UserClass extends React.Component {
// to make props we need constructor
// loading a class based component means creating an instant of that classv, so whenevr you create an instant of a class , the constructor is being called, and thsi is the best place to recieve props and to create state varisble

   constructor (props) {
        super(props);

        console.log("Child constructor");
        console.log("👉 super(props) parent class ka constructor call karta hai, taaki this usable ho jaye.");

        this.state ={
            showImage: false,
            useInfo: {
                name: "Dummy",
                location: "India",
                Contact: "dummy@gmail.com",
                avatar_url: null
                //renders happen with state state 
            },
            count: 0,
            count2: 2
        }; // is a big whole obj 
    }

  // const { name } = this.props; and insted of 'this.props.name', write 'name' only. 

/*
    componentDidMount() {
        // best place to make API calls
        console.log("Child componentDidMount");
    }
*/
    async componentDidMount() {
        // JavaScript doesn’t wait for one task to finish before starting the next one.
        const data = await fetch("https://api.github.com/users/Shruti-369");
        const json = await data.json();

        // 🔥 IMPORTANT: sirf jo chahiye wahi lo
    this.setState({
      useInfo: {
        name: "Shruti",                     // 👈 hardcoded (NO login)
        location:"India",                   // 👈 apna
        Contact: "alewashruti@gmail.com",   // 👈 apna
        avatar_url: json.avatar_url,        // 👈 GitHub image
      }
    });
    
        console.log(json);
    }
   

    render() {
        // debugger; (run this to see debugger in action)
        const { name, location, Contact, avatar_url } = this.state.useInfo;
        const {count, count2} = this.state;

        console.log("Child render");

        return (
            <div className="user-card">
                <hr />
                {/*
                <h1> Count: {count}</h1>
                <button onClick={ () => {
                // NEVER DO THIS: this.state.count = this.state.count + 1
                    this.setState( { 
                        count: this.state.count + 1
                     } ) 
                 }}>
                    Increment Count
                </button>
                */}
             
                <div className="flex items-center gap-3">
  <img
    src={avatar_url}
    alt="profile"
   onClick={() => this.setState({ showImage: true })}
  className="w-32 h-32 rounded-full object-cover cursor-pointer border-2 border-orange-300 "

  />
  {this.state.showImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    
    {/* Close button */}
    <button
      onClick={() => this.setState({ showImage: false })}
      className="absolute top-6 right-8 text-white text-3xl"
    >
      ×
    </button>

    {/* Big image */}
    <img
      src={this.state.useInfo?.avatar_url}
      alt="profile-large"
      className="w-115 h-115 rounded-se-3xl object-cover"
    />
  </div>
)}
  <div>
    <h2 className="text-2xl font-medium text-gray-900 mb-2">
      {name}
    </h2>
    <p className="text-gray-600  text-sm">{location}</p>
    <p className="text-gray-600 text-sm">{Contact}</p>
  </div>
</div>

            </div>
        );
    }
};

export default UserClass;




//  first constructor is called, then render() , then componentDidMount()