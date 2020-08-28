import { by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class StockPage {
  async clickOnAdd(): Promise<void> {
    await element(by.css('button[title="Ajouter"]')).click();
  }

  async getLastArticle(): Promise<Article> {
    const name = await element(
      by.css('tbody tr:last-child td:nth-child(1)')
    ).getAttribute('title');
    const price = await element(
      by.css('tbody tr:last-child td:nth-child(2)')
    ).getText();
    const qty = await element(
      by.css('tbody tr:last-child td:nth-child(3)')
    ).getText();
    return {
      name,
      price: +price,
      qty: +qty,
    } as Article;
  }
}
