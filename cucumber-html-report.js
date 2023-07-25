const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/json-report/",
  reportPath: "./cypress/html-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "NAGP Cypress Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: `${new Date().toLocaleString()}`},
      { label: "Execution End Time", value: `${new Date().toLocaleString()}`},
    ],
  },
});