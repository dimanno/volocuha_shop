import {makeAutoObservable} from "mobx";

export class ProductStore {
    constructor() {
        this._category = [
            {id: 1, name: 'Backpacks'},
            {id: 1, name: 'Tents'}
        ]
        this._brand = [
            {id: 1, name: 'Deuter'},
            {id: 1, name: 'Terra Incognita'}
        ]
        this._product = [
            {id: 1, name: 'Terra Incognita Mountain 100', price: 300, rating: 5, img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'},
            {id: 2, name: 'Terra Incognita Mountain 100', price: 300, rating: 5, img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'},
            {id: 3, name: 'Terra Incognita Mountain 100', price: 300, rating: 5, img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'},
            {id: 4, name: 'Terra Incognita Mountain 100', price: 300, rating: 5, img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'},
            {id: 5, name: 'Terra Incognita Mountain 100', price: 300, rating: 5, img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'}
        ]
        makeAutoObservable(this)
    }

    setCategory(category) {
        this._category = category
    }
    setBrand(brand) {
        this._brand = brand
    }
    setProduct(product) {
    this._product = product
    }


    get category() {
        return this._category
    }
    get brand() {
        return this._brand
    }
    get product() {
        return this._product
    }
}
