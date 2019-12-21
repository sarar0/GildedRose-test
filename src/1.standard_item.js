class Standard extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateItemQuality() {
        (this.quality > 1 && this.sellIn < 0 ) ? this.quality -= 2: this.quality;
        (this.quality > 0 && this.sellIn > 0) ? this.quality-- : this.quality;
    }

      updateItemSellIn() {
        this.sellIn--;
    }

}