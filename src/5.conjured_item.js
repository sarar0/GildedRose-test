class Conjured extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateItemQuality() {
        if (this.quality >= 4 && this.sellIn < 0) {
            this.quality = this.quality - 4;
        }
        else if (this.quality >= 2 && this.sellIn >= 0) {
            this.quality = this.quality - 2;
        }
        else {
        this.quality = this.quality - this.quality;
        }

    }

}