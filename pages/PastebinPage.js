
class PastebinPage {
    constructor() {
        this.acceptCookiesButton = $('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]');
        this.codeTextarea = $('//*[@id="postform-text"]');
        this.expirationDropdown = $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[4]/div/span');
        this.tenMinutesOption = $('#select2-postform-expiration-result-3pcd-10M');
        this.nameInput = $('//*[@id="postform-name"]');
    }

    async acceptCookies() {
        await this.acceptCookiesButton.waitForDisplayed({ timeout: 10000 });
        await this.acceptCookiesButton.click();
    }

    async setCode(code) {
        await this.codeTextarea.waitForDisplayed({ timeout: 10000 });
        await this.codeTextarea.setValue(code);
    }

    async setExpiration() {
        await this.expirationDropdown.waitForDisplayed({ timeout: 10000 });
        await this.expirationDropdown.click();
        await browser.pause(1000); // Adding a short pause to ensure the dropdown options are loaded
        await this.tenMinutesOption.waitForDisplayed({ timeout: 5000 });
        await this.tenMinutesOption.click();
    }

    async setName(name) {
        await this.nameInput.waitForDisplayed({ timeout: 10000 });
        await this.nameInput.setValue(name);
    }
}

export default new PastebinPage();
