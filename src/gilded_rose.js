class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  showItemName(index) {
    return this.items[index].name
  }

  updateSellIn(){
    for (const item of this.items) {
      item.updateItemSellIn()
    }
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateItemQuality()
    }
    this.updateSellIn();
    return this.items;
  }

}

// module.exports = {
//   Item,
//   Shop
// }
