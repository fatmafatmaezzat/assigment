import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.options.*;

import org.junit.jupiter.api.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.*;

@UsePlaywright
public class TestExample {
  @Test
  void test(Page page) {
    page.navigate("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    page.getByPlaceholder("Username").click();
    page.getByPlaceholder("Username").fill("Admin");
    page.getByPlaceholder("Password").click();
    page.getByPlaceholder("Password").fill("admin123");
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Login")).click();
    page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Admin")).click();
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName(" Add")).click();
    page.getByText("-- Select --").first().click();
    page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName("ESS")).click();
    page.getByPlaceholder("Type for hints...").click();
    page.getByPlaceholder("Type for hints...").fill("o");
    page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName("Odis Adalwin")).click();
    page.getByText("-- Select --").click();
    page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName("Disabled")).click();
    page.getByRole(AriaRole.TEXTBOX).nth(2).click();
    page.getByRole(AriaRole.TEXTBOX).nth(2).fill("fatmaezzat");
    page.getByRole(AriaRole.TEXTBOX).nth(3).click();
    page.getByRole(AriaRole.TEXTBOX).nth(3).fill("123456Ff");
    page.getByRole(AriaRole.TEXTBOX).nth(4).click();
    page.getByRole(AriaRole.TEXTBOX).nth(4).fill("123456Ff");
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Save")).click();
    page.getByText("(8) Records Found").click();
    page.getByRole(AriaRole.TEXTBOX).nth(1).click();
    page.getByRole(AriaRole.TEXTBOX).nth(1).fill("fatmaezzat");
    page.locator("form i").first().click();
    page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName("ESS")).click();
    page.getByPlaceholder("Type for hints...").click();
    page.getByPlaceholder("Type for hints...").fill("od");
    page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName("Odis Adalwin")).click();
    page.locator("form i").nth(1).click();
    page.getByRole(AriaRole.OPTION, new Page.GetByRoleOptions().setName("Disabled")).click();
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Search")).click();
    page.locator("div").filter(new Locator.FilterOptions().setHasText(Pattern.compile("^\\(1\\) Record Found$"))).nth(1).click();
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("")).click();
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName(" Yes, Delete")).click();
    page.getByLabel("Topbar Menu").getByText("User Management").click();
    page.getByRole(AriaRole.MENUITEM, new Page.GetByRoleOptions().setName("Users")).click();
    page.getByText("(7) Records Found").click();
  }
}