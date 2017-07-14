/**
 * Created by muzrea on 17-7-14.
 */
function addbarcode(barcodesArr){
    var goods = [];
    for(var i in barcodesArr){
        goods[i].barcode = new Object();
        goods[i].barcode = barcodesArr[i];
        for(var j in barcodesArr){
            if(barcodesArr[i] = barcodesArr[j]){
                goods[i].barcode.slice(i,1);
                goods[i].count = new Object();
                goods[i].count =  0;
                goods[i].count++;
            }
        }
    }
    return goods;
}
function countGoods(goods){
    for(var i in goods){
        var n = goods[i].barcode.indexOf('-');
        if(n==-1){
            var c = goods[i].barcode.slice(11,goods[i].barcode.length);
            goods[i].count = parseFloat(c);
        }
    }
    return goods;
}

var barcodes = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2.5',
    'ITEM000005',
    'ITEM000005-2',
];
var goods = addbarcode(barcodes);
goods = countGoods(goods);
for(var i in goods){
    console.log(goods[i].barcode);
    console.log(goods[i].count.toFixed(2));
}

