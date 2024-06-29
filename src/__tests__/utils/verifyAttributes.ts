export const verifyAttributes = (
  element: HTMLElement,
  attributes: string[][]
) => {
  attributes.forEach(([attr, value]) => {
    expect(element).toHaveAttribute(attr, value);
  });
};
