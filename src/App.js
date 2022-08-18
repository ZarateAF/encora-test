import { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from "./config";
import Topics from "./container/Topics";

function App() {
  const [topic, setTopic] = useState("react");
  const handleClick = (info) => {
    setTopic(info);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <Topics topic={topic} onClick={handleClick} />
    </ApolloProvider>
  );
}

export default App;
