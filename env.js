const variables = {
  development: {
    googleApiKey: "AIzaSyDmzMwYNHgFeZiW8afSPHq3xmUVgs6UVso",
  },
  production: {
    googleApiKey: "AIzaSyDmzMwYNHgFeZiW8afSPHq3xmUVgs6UVso",
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development;
  }
  return variables.production;
};

export default getEnvVariables;
