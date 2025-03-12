import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";

const App = () => {
  const [user, setUser] = useState(null);
  const responseGoogle = (response) => {
    console.log(response);
    setUser(response?.profileObj);
  };
  const responseGoogleFail = (response) => {
    console.log(response);
  };
  const responseGoogleError = (response) => {
    console.log(response);
  };
  return (
    <div>
      {user ? (
        <>
          <img src={user?.imageUrl} alt="" />
          <p>{user?.email}</p>
          <p>{user?.name}</p>
        </>
      ) : (
        <GoogleLogin
          // clientId={process.env.GOOGLE_CLIENT_ID}
          clientId="554327446243-c7upokp8l242lh30vob2o2ag1db3jn6p.apps.googleusercontent.com"
          onFailure={responseGoogleFail}
          onSuccess={responseGoogle}
          onError={responseGoogleError}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Login
            </button>
          )}
        />
      )}
    </div>
  );
};

export default App;
