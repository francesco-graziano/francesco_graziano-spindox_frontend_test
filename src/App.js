import { useState, useCallback, useEffect } from "react";
import "./App.css";

import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
import HeadingComponent from "./components/HeadingComponent/HeadingComponent";
import BodyComponent from "./components/BodyComponent/BodyComponent";

function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeProp, setActiveProp] = useState({ text: "", value: "" });

  const fetchUserHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api");
      if (!response.ok) {
        throw new Error("Oops! Something went wrong!");
      }
      const data = await response.json();
      const userData = data.results.map((u) => {
        return {
          fullName: {
            text: "Hi! My name is",
            value: `${u.name.first} ${u.name.last}`,
          },
          email: {
            text: "My email address is",
            value: u.email,
          },
          birthDate: {
            text: "My birthday is",
            value: new Date(u.dob.date).toLocaleDateString(),
          },
          address: {
            text: "My address is",
            value: `${u.location.street.number} ${u.location.street.name}`,
          },
          phone: {
            text: "My phone number is",
            value: u.phone,
          },
          password: {
            text: "My password is",
            value: u.login.password,
          },
          profilePic: {
            text: `${u.name.first} ${u.name.last} profile pic`,
            value: u.picture.large,
          },
        };
      });
      setUser(userData[0]);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  let content = "";
  if (Object.entries(user).length > 0) {
    content = (
      <>
        <HeadingComponent
          imgUrl={user.profilePic.value}
          altAttr={user.profilePic.text}
        />
        <BodyComponent
          user={user}
          active={activeProp}
          setActive={setActiveProp}
        />
      </>
    );
  }
  if (error) {
    content = <ErrorComponent errorText={error} />;
  }
  if (isLoading) {
    content = <LoadingComponent />;
  }

  return <div className="App">{content}</div>;
}

export default App;
