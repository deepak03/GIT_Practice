package com.FreeCRM.StepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefination {

	WebDriver driver; 
	
	@Given("^User is on Login Page$")
	public void User_is_on_Login_Page()
	{
	   System.setProperty("webdriver.chrome.driver", "C:\\Users\\deekumar23\\Desktop\\SBUX_Automation\\Workspace_SBUX\\FreeCRM_BDD_Framework\\Drivers\\chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.get("https://www.freecrm.com");
	}
	
	
	@When("^Title for Login Page is Free CRM$")
	public void title_for_Login_Page_is_Free_CRM()  {
		
	    String Actual = driver.getTitle();
	    Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", Actual);
	    
	}

	@Then("^User Enters Username$")
	public void user_Enters_Username() {
	    driver.findElement(By.name("username")).sendKeys("deekumar23");
	    
	}

	@Then("^User Enters Password$")
	public void user_Enters_Password()  {
		driver.findElement(By.name("password")).sendKeys("im765095");
	    
	}

	@Then("^User Clicks on Login Button$")
	public void user_Clicks_on_Login_Button()  {
		driver.findElement(By.className("btn btn-small")).click();
	    
	   
	}

	@Then("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		String Actual = driver.getTitle();
	    Assert.assertEquals("Login", Actual);
	    throw new PendingException();
	}
}
