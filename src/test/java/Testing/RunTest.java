package Testing;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Mehul on 29/11/2016.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/html", "json:target/output.json"},
        features = "src\\test\\Resources\\feature\\log_in.feature")

public class RunTest
{

}
