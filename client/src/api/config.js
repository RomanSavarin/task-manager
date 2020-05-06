const baseUrlConfig = {
  production: 'https://task-manager-pet.herokuapp.com/api/',
  development: 'http://localhost:4000/api/'
};
const wsUrlConfig = {
  production: 'ws://task-manager-pet.herokuapp.com/',
  development: 'ws://localhost:4000/'
};
const currentEnv = process.env.REACT_APP_ENV || process.env.NODE_ENV;
const getEnv = (env, config) => {
  const result = config[env];
  if (!result) {
    console.log('Unknown environment instance: ', env);
  }
  
  return result;
};

export const baseUrl = getEnv(currentEnv, baseUrlConfig);
export const wsUrl = getEnv(currentEnv, wsUrlConfig);
export const jsonContentType = 'application/json; charset=utf-8';
