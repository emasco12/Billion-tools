class SmartMoneyEngine {

    constructor(candles) {
        this.candles = candles;
    }

    analyze(){

        return{

            liquidity: this.detectLiquidity(),

            bos: this.detectBOS(),

            choch: this.detectCHOCH(),

            orderBlock: this.detectOrderBlock(),

            fvg: this.detectFVG(),

            recommendation: this.recommend()

        }

    }

}

module.exports = SmartMoneyEngine;detectLiquidity(){

    const highs = this.candles.map(c=>c.high);

    const lows = this.candles.map(c=>c.low);

    return{

        buySide: Math.max(...highs),

        sellSide: Math.min(...lows),

        nearest:

            Math.abs(this.candles.at(-1).close-Math.max(...highs))

            <

            Math.abs(this.candles.at(-1).close-Math.min(...lows))

            ?

            "BUY SIDE"

            :

            "SELL SIDE"

    }

}detectBOS(){

    const last=this.candles.at(-1);

    const previous=this.candles.at(-2);

    if(last.high>previous.high)

        return "Bullish";

    if(last.low<previous.low)

        return "Bearish";

    return "Waiting";

}detectCHOCH(){

    const last=this.candles.at(-1);

    const prev=this.candles.at(-2);

    if(last.close>prev.high)

        return "Bullish";

    if(last.close<prev.low)

        return "Bearish";

    return "Waiting";

}detectOrderBlock(){

    const candles=this.candles;

    const last=candles.at(-2);

    if(last.close<last.open)

        return{

            type:"Bullish",

            zone:last.low+" - "+last.high

        }

    if(last.close>last.open)

        return{

            type:"Bearish",

            zone:last.low+" - "+last.high

        }

    return null;

}detectFVG(){

    const a=this.candles.at(-3);

    const b=this.candles.at(-2);

    const c=this.candles.at(-1);

    if(a.high<c.low){

        return{

            type:"Bullish",

            top:c.low,

            bottom:a.high

        }

    }

    if(a.low>c.high){

        return{

            type:"Bearish",

            top:a.low,

            bottom:c.high

        }

    }

    return null;

}recommend(){

    const bos=this.detectBOS();

    const choch=this.detectCHOCH();

    const fvg=this.detectFVG();

    const ob=this.detectOrderBlock();

    if(

        bos==="Bullish" &&

        choch==="Bullish" &&

        fvg &&

        ob?.type==="Bullish"

    )

        return "BUY";

    if(

        bos==="Bearish" &&

        choch==="Bearish" &&

        fvg &&

        ob?.type==="Bearish"

    )

        return "SELL";

    return "WAIT";

}
