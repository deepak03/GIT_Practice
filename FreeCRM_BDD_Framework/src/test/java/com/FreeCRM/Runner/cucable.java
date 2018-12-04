package com.FreeCRM.Runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"C:\\Users\\deekumar23\\Desktop\\SBUX_Automation\\Workspace_SBUX\\FreeCRM_BDD_Framework\\src\\main\\java\\com\\FreeCRM\\Feature\\[CUCABLE:FEATURE].feature"},
        plugin = {"json:target/cucumber-report/[CUCABLE:RUNNER].json"}
)
public class cucable {

}
