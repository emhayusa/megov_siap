const environment = {
  baseUrl: "", //"http://localhost:3008/new/",
  api: "", //"http://localhost:8080/",
};

if (process.env.REACT_APP_ENV === "development") {
  environment.baseUrl = "http://localhost:3009/v2/siap/";
  environment.api = "http://localhost:8080/";
}

if (process.env.REACT_APP_ENV === "staging") {
  environment.baseUrl = "http://sta.techlab.id";
}

if (process.env.REACT_APP_ENV === "production") {
  environment.baseUrl = "https://megov.big.go.id/v2/siap/";
  environment.api = "https://megov.big.go.id/api-prod";
}

export default environment;
