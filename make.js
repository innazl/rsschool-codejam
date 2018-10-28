module.exports.make = function make(...args) {
  const argPrev = args.length - 1;
  if (args[argPrev] instanceof Function) {
      const reducFunc = args[argPrev];
      return args
        .slice(0, argPrev)
        .reduce(reducFunc);
  } else {
      return make.bind(this,...args);
  }
}