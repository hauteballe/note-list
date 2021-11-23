import { formatDate } from "./formatDate";

const TEST_DATE = "2021-11-23T20:28:20.444Z";

it("Format the date", () => {
  const date = formatDate(TEST_DATE);
  expect(date).toEqual("Tue Nov 23 2021");
});
