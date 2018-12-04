package com.FreeCRM.StepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

public class AmazonLogin {

	WebDriver driver; 
	
	@Given("^User is on First Page$")
	public void User_is_on_Login_Page()
	{
	   System.setProperty("webdriver.chrome.driver", "C:\\Users\\deekumar23\\Desktop\\SBUX_Automation\\Workspace_SBUX\\FreeCRM_BDD_Framework\\Drivers\\chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.get("https://www.amazon.in/");
	}
	
	
	@When("^User clicks on Cart Icon & Sign-In Button$")
	public void use_clicks_on_Cart()  
	{
		 driver.findElement(By.xpath("//span[contains(@class,'nav-cart-icon nav-sprite')]")).click();
		 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 driver.findElement(By.xpath("//span[@class='action-inner'][contains(.,'Sign in')]")).click();
	    
	}

	@Then("^User Enters AUsername$")
	public void user_Enters_Username1() {
		driver.findElement(By.xpath("//input[@type='email']")).sendKeys("9873503803");
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[contains(@type,'submit')]")).click();
	    
	}

	@Then("^User Enters APassword$")
	public void user_Enters_Password1()  {
		driver.findElement(By.xpath("//input[contains(@type,'password')]")).sendKeys("Winterfell@3");
	    
	}

	@Then("^user clicks login button$")
	public void user_Clicks_on_Login_Button()  {
		driver.findElement(By.xpath("//input[@tabindex='5']")).click();
	    
	   
	}

	@Then("^user closes the Browser$")
	public void user_is_on_Home_Page() throws Throwable {
		driver.close();
	}
}
