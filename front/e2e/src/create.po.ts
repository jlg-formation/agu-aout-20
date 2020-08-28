import { by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class CreatePage {
  async fillForm(a1: Article): Promise<void> {
    const input = element(by.css('input[formcontrolname="name"'));
    await input.clear();
    await input.sendKeys(a1.name);

    const input2 = element(by.css('input[formcontrolname="price"'));
    await input2.clear();
    await input2.sendKeys(a1.price);

    const input3 = element(by.css('input[formcontrolname="qty"'));
    await input3.clear();
    await input3.sendKeys(a1.qty);
  }

  async submitForm(): Promise<void> {
    await element(by.css('button')).click();
  }
}
