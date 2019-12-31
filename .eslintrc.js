const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: ['plugin:jsx-a11y/recommended', 'plugin:import/errors'],
  plugins: ['react', 'import', 'jsx-a11y'],
  env: {
    browser: true,
  },
  rules: {
    'no-console': [WARN],
    'no-extra-boolean-cast': [OFF], // allows !![].length sort of stuff
    'no-unused-vars': [ERROR, { argsIgnorePattern: '^_' }], // un used variables are bad, but sometimes you need them as args so prefix them with an underscore
    'no-underscore-dangle': [ERROR], // goes hand-in-hand with above
    'no-undef': [ERROR], // shouldn't be using random window vars unless we explicitly declare we will
    'no-return-assign': [OFF],
    'no-unreachable': [ERROR], // unreachable code is bad code
    'no-dupe-keys': [ERROR], // disable multiple properties with the same key in object literals

    'import/no-named-as-default': [OFF], // we regularly export anonymous functions by default
    'import/prefer-default-export': [OFF], // default exports mess with webpacks tree shaking
    'import/no-unresolved': [ERROR, { commonjs: true }],
    'import/no-extraneous-dependencies': [ERROR],

    'react/no-deprecated': [ERROR], // don't use deprecated things
    'react/no-direct-mutation-state': [ERROR], // don't touch the internal state of a component
    'react/no-find-dom-node': [ERROR], // findDOMNode is bad and it will eventually be deprecated as well
    'react/no-is-mounted': [ERROR], // this.isMounted is bad and unreliable
    'react/no-typos': [ERROR], // common spelling mistakes for react lifecycle methods
    'react/no-danger': [ERROR], // if you need to use __dangerouslySetInnerHTML you probably need to rethink your approach
    'react/no-render-return-value': [ERROR], // the return value of ReactDOM.render is unreliable, don't use it
    'react/no-string-refs': [ERROR], // Don't use string refs
    'react/no-unescaped-entities': [ERROR], // need to escape stuff that gets rendered
    'react/no-unknown-property': [ERROR], // wont let you put bad attrs on html elements
    'react/no-did-mount-set-state': [ERROR], // calling this.setState directly in componentDidMount is bad
    'react/no-did-update-set-state': [ERROR], // calling this.setState directly in componentDidUpdate is bad
    'react/no-will-update-set-state': [ERROR], // calling this.setState directly in componentWillUpdate is bad
    'react/no-redundant-should-component-update': [ERROR], // when using React.PureComponent dont have a shouldComponentUpdate
    'react/no-unused-prop-types': [ERROR], // dont have stuff in proptypes if its not being used
    'react/react-in-jsx-scope': [ERROR], // if jsx is used in a file React needs to be imported
    'react/require-render-return': [ERROR], // render method and stateless component need a return expression
    'react/prefer-es6-class': [ERROR, 'always'], // dont use React.createClass({})
    'react/prefer-stateless-function': [ERROR, { ignorePureComponents: true }], // classes with only render -> pure component
    'react/prop-types': [ERROR, { skipUndeclared: true }], // enforce all propTypes if they are there at all
    'react/self-closing-comp': [ERROR], // <div></div> -> <div/>
    'react/void-dom-elements-no-children': [ERROR], // <img/>, <br/>, <input/>, etc... should never have children
    'react/style-prop-object': [ERROR], // style prop needs to be an object

    'react/jsx-uses-react': [ERROR], // stops eslint from complaining about React not being used when its being used
    'react/jsx-uses-vars': [ERROR], // stops eslint from complaining about Components being not used when they are being used
    'react/jsx-no-comment-textnodes': [ERROR], // comments in jsx can sometimes be tricky
    'react/jsx-no-duplicate-props': [ERROR], // having multiple props with the same name is just silly
    'react/jsx-no-target-blank': [ERROR], // target="_blank" is dangerous without some specific ref values
    'react/jsx-no-undef': [ERROR], // Can only use JSX components that are available in the current scope/module
    'react/jsx-boolean-value': [ERROR, 'never'], // probs without values are true and allowed
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }], // never use .jsx file extension
    'react/jsx-pascal-case': [ERROR], // This_Is NOT_CONSIDERED aValid userDefined_ComponentName
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: '16.10',
    },
  },
}
