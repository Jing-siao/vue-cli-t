module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
    // ["@vue/app", { useBuiltIns: "entry" }]
    //   [
    //     "@vue/app",
    //     {
    //       "targets": {
    //         "ie": "11"
    //       }
    //     }
    //   ]
    // ]
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 1 version", "ie >= 11"]
        }
      }
    ]
  ]
}
