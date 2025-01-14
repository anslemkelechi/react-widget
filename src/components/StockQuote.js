import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axiosInstance from './../index';


function StockQuote(props) {
    const varColor = 'text-green-500';

    return (
        <div className={'quote rounded-lg shadow-md p-4 bg-gray-800'}>
            <span className={'quoteSymbol text-sm text-white font-bold'}>{props.symbol}</span>
            <span className={'quoteSymbol text-2xs text-gray-400 ml-1'}>Hello World</span>
            <span className={'quoteSymbol text-2xs text-gray-400 ml-1'}>Nice Day</span>
            <div className={'quote flex flex-row justify-between mt-1'}>
                <div className={'quotePrice self-center text-2xl font-bold items-center text-white'}>600.00</div>
                <div className={'flex flex-col text-right'}>
                    <div className={'quoteVar ' + varColor}></div>
                    <div className={'quoteTime text-right text-2xs text-gray-400'}>10:00pm</div>
                </div>
            </div>
        </div>
    );
}

export default StockQuote;
