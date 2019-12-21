class Pass extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateItemQuality() {
        
        if (this.sellIn <= 0) {
            this.quality = 0;
        }
        else if (this.sellIn > 5 && this.sellIn <= 10) {
            this.quality = this.quality + 2;
        }
        else if (this.sellIn > 0 && this.sellIn <= 5) {
            this.quality = this.quality + 3;
        }
        else 
            this.quality++;

        if (this.quality > 50) {
            this.quality = 50;
        }
        
    }

    updateItemSellIn() {
        this.sellIn--;
    }

}
