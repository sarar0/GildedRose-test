class AgedBrie extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateItemQuality() {
        this.quality < 50 ? this.quality++ : this.quality;
    }

}