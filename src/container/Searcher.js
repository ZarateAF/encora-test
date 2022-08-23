import { useState } from "react";
import { Button, Input } from "../components";

export const Searcher = ({ onClick }) => {
  const [topic, setTopic] = useState("");

  const handleClick = () => {
    if(topic !== "") onClick(topic)
  }

  return (
    <div className="search">
      <Input
        type="text"
        placeholder="Topic..."
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
      />
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
};
