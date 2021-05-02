import checkPropTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} shallowWrapper
 * @param {string } value
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (shallowWrapper, value) => {
  return shallowWrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
