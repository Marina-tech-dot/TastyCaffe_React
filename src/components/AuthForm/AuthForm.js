import { CardOnBody } from "../UI/Card-onBody.js/CardOnBody";
import { Form, Link, useSearchParams } from "react-router-dom";
import { useRef } from "react";

export const AuthForm = () => {
   const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <CardOnBody>
      <Form method="post">
        <h1>Log in</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            name="email"
            // ref={emailRef}
            required
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            name="password"
            // ref={passwordRef}
            required
          />
        </p>
        <div>
          <button type="submit">{isLogin ? "Create new user" : "Login"}</button>
        </div>
      </Form>
    </CardOnBody>
  );
}


// export const AuthForm = () => {
//   // получим параметр mode
//   const [searchParams] = useSearchParams();
//   const isLogin = searchParams.get("mode") === "login";

//   return (
//     <CardOnBody>
//       <Form method="post">
//         <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
//         <p>
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" required />
//         </p>
//         <p>
//           <label htmlFor="image">Password</label>
//           <input id="password" type="password" name="password" required />
//         </p>
//         <div>
//           <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
//             {isLogin ? "Create new user" : "Login"}
//           </Link>
//           <button>Save</button>
//         </div>
//       </Form>
//     </CardOnBody>
//   );
// }



// bootstrap
{/* <Form>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' ref={emailRef} required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' ref={passwordRef} required />
        </Form.Group>
        <Form.Group id="password-confirm">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control type='password' ref={passwordConfirmRef} required />
        </Form.Group>
        <button type="submit">SignUp</button>
      </Form> */}