import { useQuery } from "@apollo/client";
import { Card, NavBar } from "../components";
import { TOPIC_QUERY } from "../queries";
import { Searcher } from "./Searcher";

const Topics = ({ topic = "", onClick }) => {
  const { data, error, loading } = useQuery(TOPIC_QUERY, {
    variables: { topic },
  });

  if (error) return <div>Internal Error</div>;

  if (loading || !data) return <div className="loader">Loading</div>;

  return (
    <div>
      <div className="container">
        <NavBar title={data?.topic?.name} onClick={onClick} />
        <Searcher onClick={onClick}/>
        <div className="topics">
          {data?.topic?.relatedTopics.map((t) => (
            <Card
              key={t.name}
              name={t.name}
              stargazerCount={t.stargazerCount}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
