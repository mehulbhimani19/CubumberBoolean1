package Testing;

import com.thoughtworks.selenium.webdriven.ElementFinder;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;

import static Testing.DriverManager.driver;
import static java.lang.Math.random;

/**
 * Created by Mehul on 29/11/2016.
 */
public class logInStepDeft
{

    @Given("^I am in log in page$")
    public void i_am_in_log_in_page()
    {

    }

    @When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_valid_and(String username, String password) throws IOException,    InterruptedException
    {

        driver.findElement(By.name("uid")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);

//      File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);

//        try {
//            FileUtils.copyFile(scrFile, new File("C:\\Users\\Mehul\\IdeaProjects\\CubumberBoolean1\\src\\test\\Resources"+random() +".jpg"));
//        } catch (IOException e) {
//
//            e.printStackTrace();
//        }

        driver.findElement(By.name("btnLogin")).click();
     Thread.sleep(3000);

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);

        FileUtils.copyFile(scrFile, new File("C:\\Users\\Mehul\\IdeaProjects\\CubumberBoolean1\\src\\test\\Resources"+random() +".jpg"));


        try
        {

            Alert alert = driver.switchTo().alert();
            alert.accept();

        }
        catch (Exception e)
        {

        }

    }

    @Then("^I should able to see homepage \"([^\"]*)\"$")
    public void i_should_able_to_see_homepage(Boolean result)
    {

        boolean exp = result ;
        boolean actual;

        actual= driver.findElement(By.className("heading3")).getText().contains("Welcome To Manager's Page of Guru99 Bank");

        Assert.assertTrue(result.equals(actual));


    }






}
