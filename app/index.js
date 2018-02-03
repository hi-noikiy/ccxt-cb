/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================
var ccxt = require('ccxt');

(async function () {
    let gdax = new ccxt.gdax ({
    	verbose: true,
        apiKey: 'YOUR_PUBLIC_API_KEY',
        secret: 'YOUR_SECRET_PRIVATE_KEY',
    })
    let orderbook = await gdax.fetchOrderBook ('ETH/USD')
	let bid = orderbook.bids.length ? orderbook.bids[0][0] : undefined
	let ask = orderbook.asks.length ? orderbook.asks[0][0] : undefined
	let spread = (bid && ask) ? ask - bid : undefined
	console.log (gdax.id, 'market price', { bid, ask, spread });


    //console.log (gdax.id,    await gdax.fetchOrderBook (gdax.symbols[0]));
    //console.log (gdax.id,	 await gdax.fetchTicker ('ETH/USD'));
   // console.log (gdax.id,	 await gdax.fetchTrades ('ETH/USD'));
}) ();

function linearRegression(y,x){
		var lr = {};
        var n = y.length;
        var sum_x = 0;
        var sum_y = 0;
        var sum_xy = 0;
        var sum_xx = 0;
        var sum_yy = 0;

        for (var i = 0; i < y.length; i++) {

            sum_x += x[i];
            sum_y += y[i];
            sum_xy += (x[i]*y[i]);
            sum_xx += (x[i]*x[i]);
            sum_yy += (y[i]*y[i]);
        } 

        lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
        lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
        lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

        return lr;
}

var known_y = [1, 2, 3, 4];
var known_x = [5.2, 5.7, 5.0, 4.2];

var lr = linearRegression(known_y, known_x);

console.log(lr.slope);
console.log(lr.intercept);
console.log(lr.r2);
