// const fs = require("fs");
//
// const normalizeTechnologies = line => {
//   if (/\b(.net|dotnet|\.net)\s*(core|framework|mvc|api|[0-9.]+)?\b/i.test(line)) {
//     return ".NET";
//   }
//   return line;
// };
// const readCSV = () => {
//   fs.readFile("dev.csv", "utf8", (err, data) => {
//     if (err) console.log("ERR", err);
//     else {
//       // console.log("DATA", data);
//       fs.writeFile("base.txt", data, err => {
//         console.log("ERROR", err);
//       });
//
//       const lines = data.split("\n");
//       console.log("xdd", lines);
//       const normalizedLines = lines.map(line => normalizeTechnologies(line));
//       fs.writeFile("parsed.txt", normalizedLines.join("\n"), err => {
//         console.log("ERROR", err);
//       });
//     }
//   });
// };
//
// readCSV();

const fs = require("fs");

const regexPatterns = {
  ".net": /\.net(?:\s*(core|framework|\d+\.*\d*|\w+))?/i,
  aws: /\baws(?:\s*\w+)?\b/i,
  azure: /\bazure(?:\s*\w+)?\b/i,
  java: /\bjava(?:\s*[\w/.,]*)?\b/i,
  python: /\bpython(?:\s*[\w/.,]*)?\b/i,
  kubernetes: /\bkubernetes(?:\s*\w+)?\b/i,
  docker: /\bdocker(?:\s*\w+)?\b/i,
  javascript: /\bjavascript(?:\s*[\w/.,]*)?\b/i,
  angular: /\bangular(?:\s*\w+)?\b/i,
  react: /\breact(?:\s*\w+)?\b/i,
  "vue.js": /\bvue\.js(?:\s*\w+)?\b/i,
  css: /\bcss(?:\s*[\w/.,]*)?\b/i,
  html: /\bhtml(?:\s*[\w/.,]*)?\b/i,
  sql: /\bsql(?:\s*[\w/.,]*)?\b/i,
  git: /\bgit(?:\s*\w+)?\b/i,
  linux: /\blinux(?:\s*[\w/.,]*)?\b/i,
  "node.js": /\bnode\.js(?:\s*\w+)?\b/i,
  spring: /\bspring(?:\s*\w+)?\b/i,
  terraform: /\bterraform(?:\s*\w+)?\b/i,
  jenkins: /\bjenkins(?:\s*\w+)?\b/i,
  prometheus: /\bprometheus(?:\s*\w+)?\b/i,
  sass: /\bsass(?:\s*[\w/.,]*)?\b/i,
  sap: /\bsap(?:\s*\w+)?\b/i,
  salesforce: /\bsalesforce(?:\s*\w+)?\b/i,
  "c++": /\bc\+\+(?:\s*[\w/.,]*)?\b/i,
  typescript: /\btypescript(?:\s*[\w/.,]*)?\b/i,
  gitlab: /\bgitlab(?:\s*\w+)?\b/i,
  ansible: /\bansible(?:\s*\w+)?\b/i,
  airflow: /\bairflow(?:\s*\w+)?\b/i,
  hadoop: /\bhadoop(?:\s*\w+)?\b/i,
  spark: /\bspark(?:\s*\w+)?\b/i,
  django: /\bdjango(?:\s*\w+)?\b/i,
  flask: /\bflask(?:\s*\w+)?\b/i,
  mongodb: /\bmongodb(?:\s*\w+)?\b/i,
  elasticsearch: /\belasticsearch(?:\s*\w+)?\b/i,
  grafana: /\bgrafana(?:\s*\w+)?\b/i,
  json: /\bjson(?:\s*[\w/.,]*)?\b/i,
  rest: /\brest(?:\s*[\w/.,]*)?\b/i,
  graphql: /\bgraphql(?:\s*\w+)?\b/i,
  mysql: /\bmysql(?:\s*\w+)?\b/i,
  postgresql: /\bpostgresql(?:\s*\w+)?\b/i,
  html5: /\bhtml5(?:\s*\w+)?\b/i,
  "c#": /\bc#(?:\s*[\w/.,]*)?\b/i,
  ruby: /\bruby(?:\s*[\w/.,]*)?\b/i,
  "ruby on rails": /\bruby\s+on\s+rails(?:\s*[\w/.,]*)?\b/i,
  swift: /\bswift(?:\s*\w+)?\b/i,
  php: /\bphp(?:\s*[\w/.,]*)?\b/i,
  "azure devops": /\bazure\s+devops(?:\s*\w+)?\b/i,
  "microsoft dynamics": /\bmicrosoft\s+dynamics(?:\s*\w+)?\b/i,
  tableau: /\btableau(?:\s*\w+)?\b/i,
  "power bi": /\bpower\s+bi(?:\s*\w+)?\b/i,
  gcp: /\bgcp(?:\s*\w+)?\b/i,
  oracle: /\boracle(?:\s*[\w/.,]*)?\b/i,
  nodejs: /\bnodejs(?:\s*\w+)?\b/i,
  "html/css": /\bhtml\/css\b/i,
  angularjs: /\bangularjs\b/i,
  "angular.js": /\bangular\.js\b/i,
  jquery: /\bjquery\b/i,
  "typescript/javascript": /\btypescript\/javascript\b/i,
  "react.js": /\breact\.js\b/i,
  redux: /\bredux\b/i,
  "aws/gcp": /\baws\/gcp\b/i,
  "aws/azure": /\baws\/azure\b/i,
  "aws/azure/gcp": /\baws\/azure\/gcp\b/i,
  "azure/gcp": /\bazure\/gcp\b/i,
  "azure/aws": /\bazure\/aws\b/i,
  "azure/aws/gcp": /\bazure\/aws\/gcp\b/i,
  "java/kotlin": /\bjava\/kotlin\b/i,
  "java/python/scala": /\bjava\/python\/scala\b/i,
  "java/vue.js/pwa": /\bjava\/vue\.js\/pwa\b/i,
  "javascript/es6+": /\bjavascript\/es6\+\b/i,
  "javascript/typescript": /\bjavascript\/typescript\b/i,
  "sass/less": /\bsass\/less\b/i,
  "sass/scss": /\bsass\/scss\b/i,
  bash: /\bbash(?:\s*\w+)?\b/i,
  chef: /\bchef(?:\s*\w+)?\b/i,
  kafka: /\bkafka(?:\s*\w+)?\b/i,
  jira: /\bjira(?:\s*\w+)?\b/i,
  github: /\bgithub(?:\s*\w+)?\b/i,
  kotlin: /\bkotlin(?:\s*\w+)?\b/i,
  perl: /\bperl(?:\s*\w+)?\b/i,
  phpstorm: /\bphpstorm(?:\s*\w+)?\b/i,
  "pl/sql": /\bpl\/sql\b/i,
  plsql: /\bplsql\b/i,
  puppet: /\bpuppet(?:\s*\w+)?\b/i,
  rust: /\brust(?:\s*\w+)?\b/i,
  scala: /\bscala(?:\s*\w+)?\b/i,
  selenium: /\bselenium(?:\s*\w+)?\b/i,
  soap: /\bsoap(?:\s*[\w/.,]*)?\b/i,
  "spring boot": /\bspring\s+boot(?:\s*\w+)?\b/i,
  "sql index": /\bsql\s+index(?:\s*\w+)?\b/i,
  swagger: /\bswagger(?:\s*\w+)?\b/i,
  vue: /\bvue(?:\s*\w+)?\b/i,
  vuex: /\bvuex(?:\s*\w+)?\b/i,
  webpack: /\bwebpack(?:\s*\w+)?\b/i,
  webservices: /\bwebservices(?:\s*\w+)?\b/i,
  websocket: /\bwebsocket(?:\s*\w+)?\b/i,
  "windows index": /\bwindows\s+index(?:\s*\w+)?\b/i,
  wordpress: /\bwordpress(?:\s*\w+)?\b/i,
  xml: /\bxml(?:\s*[\w/.,]*)?\b/i,
  xslt: /\bxslt(?:\s*\w+)?\b/i,
  yaml: /\byaml(?:\s*\w+)?\b/i,
  zend: /\bzend(?:\s*\w+)?\b/i,
  "zend framework": /\bzend\s+framework(?:\s*\w+)?\b/i,
  postgres: /\bpostgres(?:\s*\w+)?\b/i,
  mssql: /\bmssql(?:\s*\w+)?\b/i,
  jsonapi: /\bjsonapi(?:\s*\w+)?\b/i,
  "rest api": /\brest\s+api(?:\s*\w+)?\b/i,
  "restful api": /\brestful\s+api(?:\s*\w+)?\b/i,
  openapi: /\bopenapi(?:\s*\w+)?\b/i,
  openstack: /\bopenstack(?:\s*\w+)?\b/i,
  cassandra: /\bcassandra(?:\s*\w+)?\b/i,
  redis: /\bredis(?:\s*\w+)?\b/i,
  kibana: /\bkibana(?:\s*\w+)?\b/i,
  logstash: /\blogstash(?:\s*\w+)?\b/i,
  fluentd: /\bfluentd(?:\s*\w+)?\b/i,
  datadog: /\bdatadog(?:\s*\w+)?\b/i,
  splunk: /\bsplunk(?:\s*\w+)?\b/i,
  nagios: /\bnagios(?:\s*\w+)?\b/i,
  cloudformation: /\bcloudformation(?:\s*\w+)?\b/i,
  circleci: /\bcircleci(?:\s*\w+)?\b/i,
  travisci: /\btravisci(?:\s*\w+)?\b/i,
  bamboo: /\bbamboo(?:\s*\w+)?\b/i,
  cypress: /\bcypress(?:\s*\w+)?\b/i,
  junit: /\bjunit(?:\s*\w+)?\b/i,
  mocha: /\bmocha(?:\s*\w+)?\b/i,
  chai: /\bchai(?:\s*\w+)?\b/i,
  jest: /\bjest(?:\s*\w+)?\b/i,
  karma: /\bkarma(?:\s*\w+)?\b/i,
  jasmine: /\bjasmine(?:\s*\w+)?\b/i,
  pytest: /\bpytest(?:\s*\w+)?\b/i,
  "robot framework": /\brobot\s+framework(?:\s*\w+)?\b/i,
  webdriverio: /\bwebdriverio(?:\s*\w+)?\b/i,
  protractor: /\bprotractor(?:\s*\w+)?\b/i,
  soapui: /\bsoapui(?:\s*\w+)?\b/i,
  postman: /\bpostman(?:\s*\w+)?\b/i,
};

function normalizeDotNetCategory(input) {
  // // const regex = /\.net\b/i;
  // const regex = /\.net(?:\\s*(core|framework|\\d+\\.*\\d*|\\w+))?/i;
  // if (regex.test(input)) {
  //   return ".net";
  // }

  for (const [unifiedKey, regex] of Object.entries(regexPatterns)) {
    if (regex.test(input)) return unifiedKey;
  }
  return input;
}

fs.readFile("dev.csv", "utf-8", (err, data) => {
  if (err) console.log("ERR", err);

  const parsedData = data.split("\n").map(normalizeDotNetCategory).join("\n");

  fs.writeFile("parsed.txt", parsedData, (err, data) => {
    if (err) console.log("ERR", err);

    return data;
  });
});
