
import PastebinPage from '../../pages/PastebinPage.js';

describe('Pastebin', () => {
    beforeEach(async () => {
        await browser.url('https://pastebin.com/');
        await browser.maximizeWindow();
    });

    it('should accept cookies', async () => {
        await PastebinPage.acceptCookies();
    });

    it('should fill out the code field', async () => {
        await PastebinPage.setCode('Hello from WebDriver');
    });

    it('should select paste expiration', async () => {
        await PastebinPage.setExpiration();
    });

    it('should fill out the paste name', async () => {
        await PastebinPage.setName('helloweb');
    });
});
