$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonLogin.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login Featur",
  "description": "",
  "id": "crm-login-featur",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "CRM Login Scenario",
  "description": "",
  "id": "crm-login-featur;crm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on First Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on Cart Icon \u0026 Sign-In Button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Enters AUsername",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enters APassword",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user closes the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.User_is_on_Login_Page()"
});
formatter.result({
  "duration": 18698231926,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLogin.use_clicks_on_Cart()"
});
formatter.result({
  "duration": 3113683141,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLogin.user_Enters_Username1()"
});
formatter.result({
  "duration": 1636055389,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLogin.user_Enters_Password1()"
});
formatter.result({
  "duration": 113824269,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLogin.user_Clicks_on_Login_Button()"
});
formatter.result({
  "duration": 3562065676,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLogin.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 2336180325,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login Featur",
  "description": "",
  "id": "crm-login-featur",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "CRM Login Scenario",
  "description": "",
  "id": "crm-login-featur;crm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title for Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enters Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.User_is_on_Login_Page()"
});
formatter.result({
  "duration": 7938556089,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_for_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 21823782,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027WKWIN7186289\u0027, ip: \u002710.180.161.119\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7), userDataDir\u003dC:\\Users\\DEEKUM~1\\AppData\\Local\\Temp\\scoped_dir7720_1517}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.110, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f2db23377424cce5ac4a9339fe1890a1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:374)\r\n\tat com.FreeCRM.StepDefinations.LoginStepDefination.title_for_Login_Page_is_Free_CRM(LoginStepDefination.java:29)\r\n\tat ✽.When Title for Login Page is Free CRM(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_Enters_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_Enters_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "CRM Login Scenario",
  "description": "",
  "id": "crm-login-featur;crm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Title for Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Enters Username",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Enters Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.User_is_on_Login_Page()"
});
formatter.result({
  "duration": 2781994477,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027WKWIN7186289\u0027, ip: \u002710.180.161.119\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7), userDataDir\u003dC:\\Users\\DEEKUM~1\\AppData\\Local\\Temp\\scoped_dir24544_19727}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.110, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 5c7cd273f5392b8f71d7ff55ab9ac95c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com.FreeCRM.StepDefinations.LoginStepDefination.User_is_on_Login_Page(LoginStepDefination.java:22)\r\n\tat ✽.Given User is on Login Page(Login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.title_for_Login_Page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_Enters_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_Enters_Password()"
});
formatter.result({
  "status": "skipped"
});
});