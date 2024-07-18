const path = require("path");

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  const babelRuleIndex = config.module.rules.findIndex(
    (rule) =>
      rule.use &&
      rule.use.some(
        (useEntry) =>
          useEntry.loader && useEntry.loader.includes("babel-loader")
      )
  );
  config.module.rules[babelRuleIndex].exclude[0] =
    /node_modules\/(?!(gatsby|gatsby-script)\/)/;

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[babelRuleIndex].use[0].loader =
    require.resolve("babel-loader");

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[babelRuleIndex].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ];

  // use @babel/plugin-transform-class-properties for class arrow functions
  config.module.rules[babelRuleIndex].use[0].options.plugins = [
    [
      require.resolve("@babel/plugin-transform-class-properties"),
      { loose: true },
    ],
    [
      require.resolve("@babel/plugin-transform-private-methods"),
      { loose: true },
    ],
    [
      require.resolve("@babel/plugin-transform-private-property-in-object"),
      { loose: true },
    ],
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"];
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]],
      plugins: [
        [
          require.resolve("@babel/plugin-transform-class-properties"),
          { loose: true },
        ],
        [
          require.resolve("@babel/plugin-transform-private-methods"),
          { loose: true },
        ],
        [
          require.resolve("@babel/plugin-transform-private-property-in-object"),
          { loose: true },
        ],
      ],
    },
  });

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve("."),
  ];
  config.resolve.extensions.push(".ts", ".tsx");

  config.resolve.alias = {
    ...config.resolve.alias,
    src: path.resolve(__dirname, "../src"),
  };

  return config;
};
