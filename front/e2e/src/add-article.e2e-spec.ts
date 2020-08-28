import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { StockPage } from './stock.po';
import { CreatePage } from './create.po';
import { a1 } from '../../src/app/test/data';

describe('workspace-project App', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let createPage: CreatePage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    createPage = new CreatePage();
  });

  it('should add an article', async () => {
    await page.navigateTo();
    await page.clickOnSeeStockBtn();
    await stockPage.clickOnAdd();
    await createPage.fillForm(a1);
    await createPage.submitForm();
    const a = await stockPage.getLastArticle();

    expect(a).toEqual(a1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
