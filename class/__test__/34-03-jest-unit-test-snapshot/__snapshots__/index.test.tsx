import { render } from "@testing-library/react";
import JestUnitTestSnapshotPage from "../../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐 게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
});
