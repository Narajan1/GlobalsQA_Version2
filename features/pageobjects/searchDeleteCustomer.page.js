const Page = require('./page');

class SearchAndDeleteCustomer extends Page {

    get customers () {
        return $("button[ng-click='showCust()']");
    }; 

    get searchField() {
        return $("input[ng-model='searchCustomer']");
    };

    get customersListTable() {
        return $("tbody");
    };
    
    get customersList() {
        return $$("tbody tr");
    };

    get fNameFromTable() {
        return $("tbody tr td:nth-child(1)");
    };

    get lNameFromTable() {
        return $("tbody tr td:nth-child(2)");
    };

    get zipFromTable() {
        return $("tbody tr td:nth-child(3)");
    };

    get DeleteBtn() {
        return $("button[ng-click='deleteCust(cust)']");
    };

    async openCustomers() {
        const elem = await this.customers;
        await elem.click();
    };

    async inputValueInSearchField(value) {
        const elem = await this.searchField;
        await elem.click();
        await elem.setValue(value);
    };

    async clickOnDeleteBtn() {
        const btn = await this.DeleteBtn;
        await btn.click();
    };    

    async getCustomerInfoObjFromTable() {
        const name = await (await this.fNameFromTable).getText();
        const surename = await (await this.lNameFromTable).getText();
        const zipCode = await (await this.zipFromTable).getText();
        const obj = {firstName: name, lastName: surename, postCode: zipCode};
        return obj;
    };
};

module.exports = new SearchAndDeleteCustomer();
