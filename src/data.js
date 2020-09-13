var pricingData = [];
for(var i=0;i<5;i++){
    pricingData[i] = new Array(4);
    for(var j=0;j<4;j++){
        pricingData[i][j] = new Array(4);
        for(var k = 0;k<4;k++){
            pricingData[i][j][k] = Math.floor(Math.random() * 100);
        }
    }
}
export default pricingData;