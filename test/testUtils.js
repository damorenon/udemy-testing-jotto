export const findByTestAttr = (shallowWrapper, value) => {
  return shallowWrapper.find(`[data-test="${value}"]`);
};
