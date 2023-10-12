// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Import Axios

// function Signup() {
//   // State variables for form fields
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Event handlers for input changes
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = {
//       name: name, // Assuming 'name' is a state variable in your component
//       email: email, // Assuming 'email' is a state variable
//       password: password, // Assuming 'password' is a state variable
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/creatuser",
//         userData,
//         {
//           headers: {
//             "Content-Type": "application/json", // Set the content type of the request
//           },
//         }
//       );

//       if (response.status === 200) {
//         // Handle a successful response here (e.g., show a success message)
//         console.log("User created successfully!");
//       } else {
//         // Handle errors or failed response (e.g., show an error message)
//         console.error("Failed to create user");
//       }
//     } catch (error) {
//       // Handle any network or request-related errors
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={handleNameChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               location
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>

//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

function Signup() {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState(""); // State variable for location
  const [password, setPassword] = useState("");

  // Event handlers for input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update the location state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      location: location, // Include location in user data
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/createuser",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Handle a successful response here (e.g., show a success message)
        console.log("User created successfully!");
      } else {
        // Handle errors or failed response (e.g., show an error message)
        console.error("Failed to create user");
      }
    } catch (error) {
      // Handle any network or request-related errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
