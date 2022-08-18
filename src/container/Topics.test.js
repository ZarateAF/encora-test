import renderer from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";

import Topics from "./Topics";
import { TOPIC_QUERY } from "../queries";

const mocks = [
  {
    request: {
      query: TOPIC_QUERY,
      variables: {
        name: 'topic',
      },
    },
    result: {
      data: {
        dog: { id: '1', name: 'topic', breed: 'bulldog' },
      },
    },
  },
];

it("renders correctly", () => {

  const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Topics topic={"topic"} onClick={(a) => a}></Topics>
      </MockedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
