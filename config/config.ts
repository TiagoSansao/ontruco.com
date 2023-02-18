const NODE_ENV = process.env.NODE_ENV || 'DEV';

interface Config {
  port: number;
}

const dev: Config = {
  port: 3214,

}
const prod: Config = {
  port: 3214,
}

const config = NODE_ENV.toUpperCase() === "PROD" ? prod : dev;

export default config;