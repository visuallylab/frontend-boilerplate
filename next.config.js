const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();
const GITHUB = process.env.DEPLOY_ENV === 'github';
const PROJ_NAME = process.env.PROJ_NAME;

module.exports = withNextEnv({
  assetPrefix: GITHUB ? `/${PROJ_NAME}/` : '',
});
