import renderer from "react-test-renderer";
import { Searcher } from "./Searcher";

it("renders correctly", () => {
  const tree = renderer.create(<Searcher onClick={(a) => a} />).toJSON();
  expect(tree).toMatchSnapshot();
});
