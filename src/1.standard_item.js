class Standard extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateItemQuality() {
        if (this.quality > 0) {
            this.quality--;
        }
        if (this.quality > 1 && this.sellIn < 0 ) {
            this.quality--;
        }
    }

    updateItemSellIn() {
        this.sellIn--;
    }

}