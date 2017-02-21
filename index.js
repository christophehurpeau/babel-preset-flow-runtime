const useDefault = obj => (obj.__esModule ? obj.default : obj);
const pluginSyntaxFlow = useDefault(require('babel-plugin-syntax-flow'));
const pluginFlowRuntime = useDefault(require('babel-plugin-flow-runtime'));


module.exports = function (context, opts = {}) {
  return {
    plugins: [
      pluginSyntaxFlow,
      [pluginFlowRuntime, opts],
    ],
  };
};
