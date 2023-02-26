// import React, { useState } from "react";
// import Header from "./Header";
// import Profile from "./Profile";

// function App() {
//   const [theme, setTheme] = useState("dark");
//   const [user, setUser] = useState(null);
//   return (
//     <main className={theme}>
//       <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
//       <Profile theme={theme} user={user} />
//     </main>
//   );
// }

// export default App;

import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from "../context/user";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
