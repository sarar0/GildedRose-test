describe("Backstage passes Class", function() {
    describe ("inherits properties from Item class", function () {
        it("should return the name, sellIn and quality of the item", function() {
            const passItem = new Pass("Item name", 2, 3);
            expect(passItem.name).toEqual("Item name");
            expect(passItem.sellIn).toEqual(2);
            expect(passItem.quality).toEqual(3);
        });

    });

    describe ("updateItemQuality", function () {
        it("should increase quality by 1 when sellIn value is more than 11", function() {
            const passItem = new Pass("Item name", 12, 3);
            passItem.updateItemQuality();
            expect(passItem.quality).toEqual(4);
        });

        it("should increase quality by 2 when sellIn value is between 5 and 10", function() {
            const passItem = new Pass("Item name", 6, 3);
            passItem.updateItemQuality();
            expect(passItem.quality).toEqual(5);
        });

        it("should increase quality by 3 when sellIn value is between 0 and 5", function() {
            const passItem = new Pass("Item name", 4, 3);
            passItem.updateItemQuality();
            expect(passItem.quality).toEqual(6);
        });

        it("should set quality to 0 when sellIn value is 0 or less", function() {
            const passItem = new Pass("Item name", -12, 3);
            passItem.updateItemQuality();
            expect(passItem.quality).toEqual(0);
        });
  
        describe("edge cases", function() {
            
            it("should NOT increase quality by 3 if quality is 48 (max quality is 50)", function() {
                const passItem = new Pass("Item name", 4, 48);
                passItem.updateItemQuality();
                expect(passItem.quality).toEqual(50);
            });

            it("should NOT increase quality by 3 if quality is 49 (max quality is 50)", function() {
                const passItem = new Pass("Item name", 4, 48);
                passItem.updateItemQuality();
                expect(passItem.quality).toEqual(50);
            });

            it("should NOT increase quality by 2 if quality is 49 (max quality is 50)", function() {
                const passItem = new Pass("Item name", 8, 49);
                passItem.updateItemQuality();
                expect(passItem.quality).toEqual(50);
            });

            it("should NOT increase quality if quality is 49 (max quality is 50)", function() {
                const passItem = new Pass("Item name", 4, 50);
                passItem.updateItemQuality();
                expect(passItem.quality).toEqual(50);
            });

        });

    });

    describe ("updateItemSellIn", function () {
        it("should decrease sellIn value by 1", function() {
            const passItem  = new Pass("Item name", 10, 6);
            passItem .updateItemSellIn();
            expect(passItem.sellIn).toEqual(9);
        });

    });

});