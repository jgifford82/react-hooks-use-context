// src/context/user.js
import React from "react";

// create the context
const UserContext = React.createContext();

// // create a provider component
// function UserProvider({ children }) {
//   // the value prop of the provider will be our context data
//   // this value will be available to child components of this provider
//   return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
// }

// useContext hook lets us access the value of our context provider in any child component.You can test this out by updating the value prop in our UserProvider to something different, and see that the Profile component has access to the updated data:
function UserProvider({ children }) {
  // In the first version of our app, user login was available to use in the App component since we had a user variable as state. We can re-gain this functionality by setting up the context value to be stateful instead!
  const [user, setUser] = useState(null);

  //   const currentUser = {
  //     name: "Duane",
  //     interests: ["Coding", "Biking", "Words ending in 'ing'"],
  //   };

  return (
    // <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
