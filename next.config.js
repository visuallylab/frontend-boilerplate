// Use the @zeit/next-typescript plugin to inject @babel/preset-typescript into Next.js
// ref: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript

const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()
