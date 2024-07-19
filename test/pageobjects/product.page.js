import Page from "./page.js";


class ProductPage extends Page {
    get productPrice () {
        return $(`//*[text()="${this.productName}"]/parent::*/parent::*/parent::*/child::div[@class="pricebar"]/child::div[@class="inventory_item_price"]`)
        // return $(`//div[text()='${this.productName}']//ancestor::div[@class='inventory_item']//div[@class='inventory_item_price']`)
    }

    setProductName(productName){
        this.productName = productName
    }


    // Dapatkan teks dari elemen harga
    getProductPrice () {
        return this.productPrice.getText();
    }
}


export default new ProductPage();