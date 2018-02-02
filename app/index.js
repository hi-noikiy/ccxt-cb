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

    console.log (gdax.id,    await gdax.loadMarkets ());
    let updatedMarkets = await gdax.loadMarkets(true);
    console.log(updatedMarkets);

    console.log (gdax.id,    await gdax.fetchOrderBook (gdax.symbols[0]));
    console.log (gdax.id,	 await gdax.fetchTicker ('ETH/USD'));
    console.log (gdax.id,	 await gdax.fetchTrades ('ETH/USD'));
}) ();


