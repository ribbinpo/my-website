import { render } from "@testing-library/react";

import Button from "@/components/form/button.form";

it("renders index page unchanged", () => {
  const button = render(<Button />);
  expect(button).toMatchSnapshot();
});
