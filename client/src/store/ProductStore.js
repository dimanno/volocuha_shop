import {makeAutoObservable} from "mobx";

export class ProductStore {
    constructor() {
        this._categories = [
            {id: 1, name: 'Backpacks'},
            {id: 2, name: 'Tents'},
            {id: 3, name: 'Sleeping bag'},
            {id: 4, name: 'Sleeping pads'},
            {id: 5, name: 'Kitchen'},
            {id: 6, name: 'Trekking poles'},
            {id: 7, name: 'Lighting'},
            {id: 8, name: 'Accessories'},

        ]
        this._brands = [
            {id: 1, name: 'Columbia'},
            {id: 2, name: 'Deuter'},
            {id: 3, name: 'Fjord Nansen'},
            {id: 4, name: 'Obsprey'},
            {id: 5, name: 'Terra Incognita'},
        ]
        this._products = [
            {
                id: 1,
                name: 'Mountain',
                price: 300,
                rating: 5,
                img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'
            },
            {
                id: 2,
                name: 'Mountain 100',
                price: 300,
                rating: 5,
                img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'
            },
            {
                id: 3,
                name: 'Mountain 100',
                price: 300,
                rating: 5,
                img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'
            },
            {
                id: 4,
                name: 'Mountain 100',
                price: 300,
                rating: 5,
                img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'
            },
            {
                id: 5,
                name: 'Mountain 100',
                price: 300,
                rating: 5,
                img: 'https://palatka.com.ua/images/watermarked/1/thumbnails/750/553/detailed/70/rukzak-Terra-Incognita-Vertex-blue-grey.jpg'
            }
        ]
        this._selectedCategories = {}
        this._selectedBrands = {}
        makeAutoObservable(this)
    }

    setCategories(category) {
        this._categories = category
    }

    setBrands(brand) {
        this._brands = brand
    }

    setProducts(product) {
        this._products = product
    }

    setSelectedCategories(category) {
        this._selectedCategories = category
    }

    setSelectedBrands(brand) {
        this._selectedBrands = brand
    }

    get categories() {
        return this._categories
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }

    get selectedCategories() {
        return this._selectedCategories
    }

    get selectedBrands() {
        return this._selectedBrands
    }
}
