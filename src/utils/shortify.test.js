import { shortify } from "./shortify";

const TEST_STRING =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate sodales turpis et congue.";

it("shortify string to 20 symbols", () => {
  const string = shortify(TEST_STRING);
  expect(string).toEqual("Lorem ipsum dolor si");
});
