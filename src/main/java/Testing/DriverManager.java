package Testing;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.jetty.html.Page;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

/**
 * Created by Mehul on 29/11/2016.
 */
public class DriverManager
{
    protected static WebDriver driver;

    public DriverManager ()
    {
        PageFactory.initElements(driver,this);
    }
     @Before
    public  void openBrowser()

    {
        driver=new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        driver.get("http://www.demo.guru99.com/v4/");
    }
    @After
    public  void closrBrowser()
    {
        driver.quit();
    }


}
