import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parseError } from "../config/api";
import { signInUser } from "../services/userServices";
import { useGlobalState } from "../utils/stateContext";
// import { useGlobalState } from "../config/store";

// export const SignIn = (props) => {
//   const initialValues = { login: "", password: "" };
//   const [formUserValues, setFormUserValues] = useState(initialValues);
//   const [errorMessage, setErrorMessage] = useState("");
//   const { dispatch } = useGlobalState();
//   const navigate = useNavigate();

//   function handleChange(event) {
//     setFormUserValues({
//       ...formUserValues,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     signInUser(formUserValues)
//       .then((response) => {
//         console.log(response);
//         dispatch({ type: "setSignedInUser", data: response.username });
//         dispatch({ type: "setJWT", data: response.jwt });
//         navigate("/");
//       })
//       .catch((error) => {
//         const message = parseError(error);
//         setErrorMessage(message);
//       });

//     return (
      
//         <>
//       <section>
//         <h2>Sign In</h2>
//         <div>
//           <img
//             src={process.env.PUBLIC_URL + "/park_image1.jpg"}
//             alt="melbourne google map"
//             style={{ width: "100%" }}
//           />
//           {/* <form onSubmit={handleSubmit}> */}
//           <form onSubmit={handleSubmit}>
//             {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//             <div>
//               <label>
//                 Username
//                 <input
//                   id="username"
//                   type="text"
//                   name="email"
//                   placeholder="Enter Username"
//                   value={formUserValues.login}
//                   onChange={handleChange}
//                 />
//               </label>
//               <label>
//                 Password
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   placeholder="Enter password"
//                   value={formUserValues.password}
//                   onChange={handleChange}
//                 />
//               </label>
//               <button type="submit" className="primary">
//                 Sign In
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//       <h2>
//         <Link to="/signup">Create an account</Link>
//       </h2>
//     </>
   
//     );
//   }
// };  

export default function SignIn(props) {
  const {store}= useGlobalState();
  const {user} = store

  const initialValues = {
    email: "",
    password: "",
  };

  const [formUserValues, setUserFormValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setUserFormValues({
      ...formUserValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(formUserValues)
      .then((response) => {
        dispatchEvent({
          type: "setSignedInUser",
          data: response.username,
        });
        // dispatchEvent({
        //   type: "setJWT",
        //   data: response.jwt,
        // });
        navigate("/");
      })
      .catch((error) => {
        const message = parseError(error);
        setErrorMessage(message);
      });
  }

  return (
    <>
      <section>
        <h2>Sign In</h2>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/park_image1.jpg"}
            alt="melbourne google map"
            style={{ width: "50%", heigh: "50%" }}
          />
          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={handleSubmit}>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div>
              <label>
                Username
                <input
                  id="username"
                  type="text"
                  name="email"
                  placeholder="Enter Username"
                  value={formUserValues.login}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formUserValues.password}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="primary">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
      <h2>
        <Link to="/signup">Create an account</Link>
      </h2>
    </>
  );
}
