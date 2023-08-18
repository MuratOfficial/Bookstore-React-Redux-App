const compose =
  (...funcs) =>
  (comp) => {
    return funcs.reduceRight((wrapprf, f) => f(wrapped), comp);
  };

export default compose;
