'use strict';
const awilix = require('awilix');
const { asClass, asFunction, asValue} = awilix;
// Create container
const container = awilix.createContainer();

const bitcoin_converter = require('./bitcoin_converter');
const bittrex_data_retriever = require('./bittrex_data_retriever');
const bittrex_manager = require('./bittrex_manager');
const coin_converter = require('./coin_converter');
const utils = require('./utils');

container.register('BitcoinConverter', asClass(bitcoin_converter));
container.register('BittrexDataRetriever', asClass(bittrex_data_retriever));
container.register('BittrexManager', asClass(bittrex_manager));
container.register('CoinConverter', asClass(coin_converter));
container.register('Utils', asValue(utils));
module.exports = container;
