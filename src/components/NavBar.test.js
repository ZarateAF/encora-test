import renderer from "react-test-renderer";
import { NavBar } from "./";

it("renders correctly", () => {
  const tree = renderer
    .create(<NavBar title={"title"} onClick={(a) => a}></NavBar>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
