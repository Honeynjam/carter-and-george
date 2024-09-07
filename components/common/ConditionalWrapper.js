const ConditionalWrapper = ({ condition, trueWrapper, falseWrapper, children }) =>
  condition ? trueWrapper(children) : falseWrapper(children);

export default ConditionalWrapper;
