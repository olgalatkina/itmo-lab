const renderElementsToDOM = (data, containerElement, generateElementFunc) => (
  data.forEach((item) => containerElement.append(generateElementFunc(item)))
);

export {
  renderElementsToDOM,
}
