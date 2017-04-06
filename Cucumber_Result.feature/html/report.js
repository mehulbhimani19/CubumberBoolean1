$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/feature/log_in.feature");
formatter.feature({
  "line": 3,
  "name": "log in functionality of Guru99",
  "description": "",
  "id": "log-in-functionality-of-guru99",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As an Admin I should able to log in with valid credential",
  "description": "",
  "id": "log-in-functionality-of-guru99;as-an-admin-i-should-able-to-log-in-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should able to see homepage \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "log-in-functionality-of-guru99;as-an-admin-i-should-able-to-log-in-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 13,
      "id": "log-in-functionality-of-guru99;as-an-admin-i-should-able-to-log-in-with-valid-credential;;1"
    },
    {
      "comments": [
        {
          "line": 14,
          "value": "#       valid username and password"
        }
      ],
      "cells": [
        "mngr54749",
        "tEquzYn",
        "true"
      ],
      "line": 15,
      "id": "log-in-functionality-of-guru99;as-an-admin-i-should-able-to-log-in-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11481859934,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#       valid username and password"
    }
  ],
  "line": 15,
  "name": "As an Admin I should able to log in with valid credential",
  "description": "",
  "id": "log-in-functionality-of-guru99;as-an-admin-i-should-able-to-log-in-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"mngr54749\" and \"tEquzYn\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should able to see homepage \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "logInStepDeft.i_am_in_log_in_page()"
});
formatter.result({
  "duration": 136199012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr54749",
      "offset": 15
    },
    {
      "val": "tEquzYn",
      "offset": 31
    }
  ],
  "location": "logInStepDeft.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 7366926734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 31
    }
  ],
  "location": "logInStepDeft.i_should_able_to_see_homepage(Boolean)"
});
formatter.result({
  "duration": 69145763,
  "status": "passed"
});
formatter.after({
  "duration": 982710401,
  "status": "passed"
});
});