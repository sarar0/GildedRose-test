class AgedBrie extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateItemQuality() {
        if (this.sellIn < 50) {
            this.quality++;
        }

    }

}