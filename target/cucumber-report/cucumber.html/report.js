$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "\r\nAs a user I want to shop computer products successfully",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3949261300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to arrange products in \"Name: Z to A\" alphabetical order",
  "description": "",
  "id": "computer-test;user-should-able-to-arrange-products-in-\"name:-z-to-a\"-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on computer top tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by position \"Name: Z to A\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to verify the product arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 228529600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iMouseHoverOnComputerTopTab()"
});
formatter.result({
  "duration": 270098400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 28
    }
  ],
  "location": "ComputerStepdefs.iMouseHoverAndClickOn(String)"
});
formatter.result({
  "duration": 3433260900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 27
    }
  ],
  "location": "ComputerStepdefs.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 1206282200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iShouldBeAbleToVerifyTheProductArrangedInDescendingOrder()"
});
formatter.result({
  "duration": 4105949100,
  "status": "passed"
});
formatter.after({
  "duration": 701785000,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "\r\nAs a user I want to click on top menu tabs and verify page navigation on nopcommerce website",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to click top menu tab and navigate to \"\u003ctopMenuTab\u003e\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"\u003ctopMenuTab\u003e\" from top tabs",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"\u003ctopMenuTab\u003e\" and verify the page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;",
  "rows": [
    {
      "cells": [
        "topMenuTab"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;1"
    },
    {
      "cells": [
        "Computers"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;2"
    },
    {
      "cells": [
        "Electronics"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;3"
    },
    {
      "cells": [
        "Apparel"
      ],
      "line": 18,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;4"
    },
    {
      "cells": [
        "Digital downloads"
      ],
      "line": 19,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;5"
    },
    {
      "cells": [
        "Books"
      ],
      "line": 20,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;6"
    },
    {
      "cells": [
        "Jewellary"
      ],
      "line": 21,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;7"
    },
    {
      "cells": [
        "Gift Cards"
      ],
      "line": 22,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2812318000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to click top menu tab and navigate to \"Computers\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Computers\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Computers\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2220466400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1074990300,
  "status": "passed"
});
formatter.after({
  "duration": 730220500,
  "status": "passed"
});
formatter.before({
  "duration": 3026060800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to click top menu tab and navigate to \"Electronics\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Electronics\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Electronics\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 2318691200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1078491300,
  "status": "passed"
});
formatter.after({
  "duration": 765726300,
  "status": "passed"
});
formatter.before({
  "duration": 2855671500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to click top menu tab and navigate to \"Apparel\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Apparel\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Apparel\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 3035382400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1073138300,
  "status": "passed"
});
formatter.after({
  "duration": 746677700,
  "status": "passed"
});
formatter.before({
  "duration": 2011088200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to click top menu tab and navigate to \"Digital downloads\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Digital downloads\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Digital downloads\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 1768054500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1054712000,
  "status": "passed"
});
formatter.after({
  "duration": 756664700,
  "status": "passed"
});
formatter.before({
  "duration": 2942848400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to click top menu tab and navigate to \"Books\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Books\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Books\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 3154037300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1053535900,
  "status": "passed"
});
formatter.after({
  "duration": 819888200,
  "status": "passed"
});
formatter.before({
  "duration": 2868825200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to click top menu tab and navigate to \"Jewellary\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Jewellary\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Jewellary\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewellary",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 1129428600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewellary",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 21140009100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027page-title\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6HCANK\u0027, ip: \u0027192.168.1.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\jalpa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f99586910c7de3467f25e4a2b815a857\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027page-title\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.getActualText(HomePage.java:43)\r\n\tat com.nopcommerce.demo.cucumber.stepDefs.TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(TopMenuStepdefs.java:25)\r\n\tat ✽.Then I should be able to navigate to the \"Jewellary\" and verify the page title(src/test/java/resources/featureFile/topmenu.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1045778000,
  "status": "passed"
});
formatter.before({
  "duration": 2852329400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to click top menu tab and navigate to \"Gift Cards\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Gift Cards\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Gift Cards\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 296800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "TopMenuStepdefs.iClickOnFromTopTabs(String)"
});
formatter.result({
  "duration": 1738681400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 37
    }
  ],
  "location": "TopMenuStepdefs.iShouldBeAbleToNavigateToTheAndVerifyThePageTitle(String)"
});
formatter.result({
  "duration": 1070600700,
  "status": "passed"
});
formatter.after({
  "duration": 748037000,
  "status": "passed"
});
});