import renderer from "react-test-renderer";
import { Card } from "./";

it("renders correctly", () => {
  const tree = renderer
    .create(<Card  name={"name"}
      stargazerCount={"1000"}
      onClick={a => a}></Card>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
