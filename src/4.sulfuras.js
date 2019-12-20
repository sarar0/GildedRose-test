class Sulfuras extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateItemQuality() {
        return this.quality;
    }

    updateItemSellIn() {
        return this.sellIn;
    }

}