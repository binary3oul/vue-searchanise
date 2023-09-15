Searchanise = {};
// Searchanise.host = 'https://searchserverapi.com';
// Searchanise.ApiKey = '1Q7P8A7s4h';

Searchanise.host = 'https://dev.themodelcentre.com:8111';
Searchanise.ApiKey = '9f1E3E6v9z';

Searchanise.SearchInput = '#search_input';

Searchanise.AutoCmpParams = {};
Searchanise.AutoCmpParams.restrictBy = {};
Searchanise.AutoCmpParams.restrictBy.status = 'A';

Searchanise.ResultsParams = {};
Searchanise.ResultsParams.restrictBy = {};
Searchanise.ResultsParams.restrictBy.status = 'A';

Searchanise.options = {};
Searchanise.options.ResultsDiv = '#snize_results';
Searchanise.options.PriceFormat = {
    rate : 1.0,
    symbol: '$',
    decimals: 2,
    decimals_separator: '.',
    thousands_separator: ',', 
    after: false
};

(function() {
    var __se = document.createElement('script');
    __se.src = './searchanies.js';
    __se.setAttribute('async', 'true');
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(__se, s);
    window.Searchanise = Searchanise
})();
