Searchanise = window.Searchanise || {};
Searchanise.templates = {
    Platform: 'shopify',
    StoreName: 'Searchanise Demo',
    AutocompleteLayout: 'multicolumn_new',
    AutocompleteStyle: 'ITEMS_MULTICOLUMN_LIGHT_NEW',
    AutocompleteDescriptionStrings: 0,
    AutocompleteSuggestionCount: 3,
    AutocompletePagesCount: 1,
    AutocompleteItemCount: 5,
    AutocompleteSuggestOnSearchBoxEmpty: 'Y',
    AutocompleteShowRecent: 'Y',
    AutocompleteShowMoreLink: 'Y',
    AutocompleteIsMulticolumn: 'Y',
    AutocompleteEmptyFieldHTML: '<br><i>Start typing something. For example, \'fitnss\'.</i><br><br>',
    AutocompleteTemplate: '<div class="snize-ac-results-content"><div class="snize-results-html" style="cursor:auto;" id="snize-ac-results-html-container"></div><div class="snize-ac-results-columns"><div class="snize-ac-results-column"><ul class="snize-ac-results-list" id="snize-ac-items-container-1"></ul><ul class="snize-ac-results-list" id="snize-ac-items-container-2"></ul><ul class="snize-ac-results-list" id="snize-ac-items-container-3"></ul><ul class="snize-ac-results-list snize-view-all-container"></ul></div><div class="snize-ac-results-column"><ul class="snize-ac-results-multicolumn-list" id="snize-ac-items-container-4"></ul></div></div></div>',
    AutocompleteMobileTemplate: '<div class="snize-ac-results-content"><div class="snize-mobile-top-panel"><div class="snize-close-button"><button type="button" class="snize-close-button-arrow"></button></div><form action="#" style="margin: 0px"><div class="snize-search"><input id="snize-mobile-search-input" autocomplete="off" class="snize-input-style snize-mobile-input-style"></div><div class="snize-clear-button-container"><button type="button" class="snize-clear-button" style="visibility: hidden"></button></div></form></div><ul class="snize-ac-results-list" id="snize-ac-items-container-1"></ul><ul class="snize-ac-results-list" id="snize-ac-items-container-2"></ul><ul class="snize-ac-results-list" id="snize-ac-items-container-3"></ul><ul id="snize-ac-items-container-4"></ul><div class="snize-results-html" style="cursor:auto;" id="snize-ac-results-html-container"></div><div class="snize-close-area" id="snize-ac-close-area"></div></div>',
    AutocompleteItem: '<li class="snize-product ${product_classes}" id="snize-ac-product-${product_id}"><a href="${autocomplete_link}" class="snize-item" draggable="false"><div class="snize-thumbnail"><img src="${image_link}" class="snize-item-image ${additional_image_classes}" alt="${autocomplete_image_alt}"></div><span class="snize-title">${title}</span><span class="snize-description">${description}</span>${autocomplete_product_code_html}${autocomplete_product_attribute_html}${autocomplete_prices_html}${reviews_html}<div class="snize-labels-wrapper">${autocomplete_in_stock_status_html}${autocomplete_product_discount_label}${autocomplete_product_tag_label}${autocomplete_product_custom_label}</div></a></li>',
    AutocompleteMobileItem: '<li class="snize-product ${product_classes}" id="snize-ac-product-${product_id}"><a href="${autocomplete_link}" class="snize-item"><div class="snize-thumbnail"><img src="${image_link}" class="snize-item-image ${additional_image_classes}" alt="${autocomplete_image_alt}"></div><div class="snize-product-info"><span class="snize-title">${title}</span><span class="snize-description">${description}</span>${autocomplete_product_code_html}${autocomplete_product_attribute_html}<div class="snize-ac-prices-container">${autocomplete_prices_html}</div><div class="snize-labels-wrapper">${autocomplete_in_stock_status_html}${autocomplete_product_discount_label}${autocomplete_product_tag_label}${autocomplete_product_custom_label}</div>${reviews_html}</div></a></li>',
    AutocompleteResultsHTML: '<div style="text-align: center;"><a href="#" title="Sale"><img src="https://cdn.shopify.com/s/files/1/0727/3307/files/965x95.png?215" /></a></div>',
    AutocompleteNoResultsHTML: '<p>Sorry, nothing found for [search_string].</p><p>Try some of our <a href="#" title="Bestsellers">bestsellers →</a>.</p>',
    AutocompleteShowInStockStatus: 'Y',
    LabelAutocompleteCategories: 'Collections',
    LabelAutocompleteSku: 'SKU',
    AutocompleteProductDiscountLabelShow: 'Y',
    LabelAutocompleteProductDiscountText: 'On Sale',
    ProductDiscountBgcolor: 'F2052C',
    ResultsShow: 'Y',
    ResultsStyle: 'RESULTS_BIG_PICTURES_NEW',
    ResultsPagesCount: 10,
    ResultsCategoriesCount: 10,
    ResultsShowActionButton: 'quick_view',
    ResultsShowInStockStatus: 'Y',
    ResultsFlipImageOnHover: 'N',
    ResultsEnableInfiniteScrolling: 'Y',
    ResultsShowOptionVariants: 'Y',
    ResultsTitleStrings: 3,
    ResultsDescriptionStrings: 0,
    ResultsUseAsNavigation: 'templates',
    ResultsShowProductDiscountLabel: 'Y',
    LabelResultsProductDiscountText: 'On sale',
    ResultsProductDiscountBgcolor: 'C02E00',
    SmartNavigationOverrideSeo: 'Y',
    ShowBestsellingSorting: 'Y',
    ShowDiscountSorting: 'Y',
    LabelResultsProductAttributeTitle: 'Collections',
    LabelResultsNothingFoundWithoutQuery: 'Noting found',
    LabelResultsSku: 'SKU',
    RecommendationShowActionButton: 'quick_view',
    RecommendationShowOptionVariants: 'Y',
    WeglotSupport: 'Y',
    LangifyDefaultLanguage: 'ly37983',
    Translations: {
        "ly37984": {
            "LabelAutocompleteSuggestions": "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f",
            "LabelAutocompleteCategories": "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
            "LabelAutocompletePages": "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b",
            "LabelAutocompleteProducts": "\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",
            "LabelAutocompleteSku": "SKU",
            "LabelAutocompleteInStock": "\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",
            "LabelAutocompleteOutOfStock": "\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",
            "LabelAutocompleteZeroPriceText": "\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0446\u0435\u043d\u0443",
            "LabelStickySearchboxLabel": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u044e\u0434\u0430, \u0447\u0442\u043e \u0438\u0441\u043a\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435!",
            "LabelStickySearchboxInputPlaceholder": "\u0427\u0442\u043e \u0432\u044b \u0438\u0449\u0435\u0442\u0435?",
            "LabelStickySearchboxInputLabel": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 enter \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",
            "LabelStickySearchboxSearchButtonText": "\u041f\u043e\u0438\u0441\u043a",
            "LabelAutocompleteMoreProducts": "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 [count] \u0442\u043e\u0432\u0430\u0440\u044b",
            "LabelAutocompleteNothingFound": "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 [search_string].",
            "LabelAutocompleteResultsFound": "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c [count] \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0434\u043b\u044f \"[search_string]\"",
            "LabelAutocompleteDidYouMean": "\u0412\u044b \u0438\u043c\u0435\u043b\u0438 \u0432 \u0432\u0438\u0434\u0443: [suggestions]?",
            "LabelAutocompleteNumReviews": "[count] \u043e\u0442\u0437\u044b\u0432(\u043e\u0432)",
            "LabelAutocompleteSearchInputPlaceholder": "",
            "LabelAutocompleteMobileSearchInputPlaceholder": "\u0418\u0441\u043a\u0430\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435...",
            "LabelAutocompleteNoSearchQuery": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043a\u0430\u0442\u044c...",
            "LabelResultsSku": "SKU",
            "LabelResultsInStock": "\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",
            "LabelResultsOutOfStock": "\u041d\u0435\u0442\u0443 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",
            "LabelResultsViewProduct": "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",
            "LabelResultsAddToCart": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",
            "LabelResultsSearch": "\u041f\u043e\u0438\u0441\u043a\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430",
            "LabelResultsFilters": "\u0424\u0438\u043b\u044c\u0442\u0440\u044b",
            "LabelResultsZeroPriceText": "\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0446\u0435\u043d\u0443",
            "LabelResultsSortRelevance": "\u0420\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u044c",
            "LabelResultsSortTitleAsc": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a: A-Z",
            "LabelResultsSortTitleDesc": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432: Z-A",
            "LabelResultsSortPriceAsc": "Price: Low to High",
            "LabelResultsSortPriceDesc": "Price: High to Low",
            "LabelResultsSortRatingDesc": "Rating: High to Low",
            "LabelResultsSortRatingAsc": "Rating: Low to High",
            "LabelResultsSortTotalReviewsDesc": "Total reviews: High to Low",
            "LabelResultsSortTotalReviewsAsc": "Total reviews: Low to High",
            "LabelResultsTabProducts": "Products",
            "LabelResultsTabCategories": "Categories",
            "LabelResultsTabPages": "Pages",
            "LabelResultsQuickView": "Quick view",
            "LabelResultsViewFullDetails": "View full details",
            "LabelResultsQuantity": "Quantity",
            "LabelResultsViewCart": "View cart",
            "LabelResultsFoundWithoutQuery": "Showing [count] results",
            "LabelResultsFound": "Showing [count] results for \"[search_string]\"",
            "LabelResultsNothingFoundWithoutQuery": "Nothing found",
            "LabelResultsNothingFound": "Nothing found for [search_string]",
            "LabelResultsDidYouMean": "Did you mean: [suggestions]?",
            "LabelResultsNothingFoundSeeAllCatalog": "Your search \"[search_string]\" didn\\'t match any results. Look at [link_catalog_start]other items in our store[link_catalog_end]",
            "LabelAutocompleteProductDiscountText": "\u0441\u043a\u0438\u0434\u043a\u0430 [discount]%",
            "LabelResultsProductDiscountText": "\u0441\u0438\u043a\u0434\u043a\u0430 [discount]%",
            "LabelAutocompletePreOrder": "",
            "LabelAutocompleteFrom": "",
            "LabelAutocompleteMore": "",
            "LabelAutocompleteProductAttributeTitle": "",
            "LabelAutocompletePopularSuggestions": "",
            "LabelAutocompleteSeeAllProducts": "",
            "LabelResultsPreOrder": "",
            "LabelResultsFrom": "",
            "LabelResultsProductAttributeTitle": "",
            "LabelResultsShowProducts": "",
            "LabelResultsResetFilters": "",
            "LabelResultsBucketsShowMore": "",
            "LabelResultsInfiniteScrollingLoadMore": "",
            "LabelResultsNoReviews": "",
            "LabelResultsSortBy": "",
            "LabelResultsSortDiscountDesc": "",
            "LabelResultsSortCreatedDesc": "",
            "LabelResultsSortCreatedAsc": "",
            "LabelResultsBestselling": "",
            "LabelResultsFeatured": "",
            "LabelResultsPaginationPreviousPage": "",
            "LabelResultsPaginationNextPage": "",
            "LabelResultsPaginationCurrentPage": "",
            "LabelSeoTitle": "",
            "LabelSeoTitleFilters": "",
            "LabelSeoDescription": "",
            "LabelSeoDescriptionFilters": ""
        }
    },
    SwymCorporationWishlistPlusSupport: 'Y',
    ResultsTagLabels: {
        "13562": {
            "label_id": 13562,
            "custom_field_name": null,
            "custom_field_value": null,
            "product_tag": "Hot",
            "type": "text",
            "text": "Hot",
            "bg_color": "2765C2",
            "text_color": null,
            "image_type": "new",
            "image_url": "",
            "position": "top-left"
        },
        "13564": {
            "label_id": 13564,
            "custom_field_name": null,
            "custom_field_value": null,
            "product_tag": "Bestseller",
            "type": "text",
            "text": "Bestseller",
            "bg_color": "2C9465",
            "text_color": null,
            "image_type": "new",
            "image_url": "",
            "position": "top-left"
        }
    },
    ResultsCustomLabels: {
        "13562": {
            "label_id": 13562,
            "custom_field_name": null,
            "custom_field_value": null,
            "product_tag": "Hot",
            "type": "text",
            "text": "Hot",
            "bg_color": "2765C2",
            "text_color": null,
            "image_type": "new",
            "image_url": "",
            "position": "top-left"
        },
        "13564": {
            "label_id": 13564,
            "custom_field_name": null,
            "custom_field_value": null,
            "product_tag": "Bestseller",
            "type": "text",
            "text": "Bestseller",
            "bg_color": "2C9465",
            "text_color": null,
            "image_type": "new",
            "image_url": "",
            "position": "top-left"
        }
    },
    ReviewsShowRating: 'Y',
    ResultsManualSortingCategories: {
        "equipment": "90998571081",
        "featured": "161927692361"
    },
    EnableShopifyMultiCurrency: 'Y',
    ShopifyLocales: {
        "en": {
            "locale": "en",
            "name": "English",
            "primary": true,
            "published": true
        }
    },
    StickySearchboxShow: 'Y',
    Redirects: {
        "https:\/\/www.apple.com": ["tablet"]
    },
    ColorsCSS: 'div.snize li.snize-product span.snize-title { color: #C7C5C7; }div.snize li.snize-category span.snize-title { color: #C7C5C7; }div.snize li.snize-page span.snize-title { color: #C7C5C7; }div.snize ul.snize-product-filters-list li:hover span { color: #C7C5C7; }div.snize li.snize-no-products-found div.snize-no-products-found-text span a { color: #C7C5C7; }',
    CustomCSS: 'div.snize-recommendation-results .snize-reviews {  display: flex;  justify-content: center;  margin-top: 5px;}div.snize-recommendation-results .snize-reviews .stars-container {  margin-right: 10px;}.page-width {  max-width: 1300px;}div.snize .snize-filters-sidebar .snize-price-range input.snize-price-range-input {  width: 90px;}div.snize .snize-filters-sidebar ul,.snize-main-panel-controls ul,div.snize div.snize-main-panel-dropdown ul.snize-main-panel-dropdown-content {  padding-left: 0 !important;}div.snize div.snize-main-panel-dropdown a {  color: #333 !important;}div.snize div.snize-pagination a.snize-pagination-load-more {  color: #fff !important;}div.snize span.snize-color-filter-hover-name {  line-height: 14px;}#snize-modal-product-quick-view.snize-results-new-design .snize-option-selector-wrapper select,#snize-modal-product-quick-view.snize-results-new-design div.snize-input-wrapper-minus,#snize-modal-product-quick-view.snize-results-new-design div.snize-input-wrapper-plus {  box-sizing: border-box;}div.snize.snize-options #snize-search-results-list-mode li.snize-product > a {  width: 100%;}/*.snize-results-html {  padding: 0px!important;}.snize-results-html img {  border: 0 none;  vertical-align: bottom;  height: auto;}#snize-search-results-grid-mode li.snize-product {  min-width: 250px;}#snize-search-results-grid-mode span.snize-overhidden {  background: #fff;}div.snize input.snize-price-range-input {  border-color: #d3d3d3;}div.snize input.snize-price-range-input:focus {  border-color: #b3b3b3;}div.snize ul.snize-product-color-filter li .snize-color-filter-checkbox input[type=checkbox] + span,div.snize ul.snize-product-color-filter li:hover .snize-color-filter-checkbox input[type=checkbox] + span:before {  border-radius: 50%;}div.snize .snize-product .snize-color-swatch > span {  margin-top: -2px;}div.snize .snize-product .snize-color-swatch > span,.snize-recommendations .snize-product .snize-color-swatch > span {  border-radius: 50%;}div.snize .snize-product .snize-color-swatch.snize-color-swatch-active > span:before,.snize-recommendations .snize-product .snize-color-swatch.snize-color-swatch-active > span:before {  border-radius: 50%;}div.snize .snize-product .snize-color-swatch:not(.snize-color-swatch-active):hover span:before,.snize-recommendations .snize-product .snize-color-swatch:not(.snize-color-swatch-active):hover span:before {  border-radius: 50%;}*//* se-6166 *//*#snize-search-results-grid-mode span.snize-thumbnail {  border: none;}#snize-search-results-grid-mode li.snize-product span.snize-title, #snize-search-results-list-mode li.snize-product span.snize-title {  text-align: left;  font-style: normal;  font-weight: 500;  font-size: 14px;  line-height: 21px;  margin-bottom: 16px;}div.snize #snize-search-results-grid-mode .snize-product .snize-options-box .snize-color-swatch-box {  text-align: left;  margin: 0;  margin-left: 2px;}div.snize #snize-search-results-grid-mode .snize-product .snize-options-box .snize-size-select-box, div.snize #snize-search-results-list-mode .snize-product .snize-options-box .snize-size-select-box {  justify-content: left;  margin-top: 10px;  margin-bottom: 0;}#snize-search-results-grid-mode .snize-price-list {  text-align: left;}div.snize #snize-search-results-grid-mode .snize-reviews,div.snize-recommendations .snize-reviews {  display: flex;  margin-bottom: 0;}div.snize #snize-search-results-grid-mode .stars-container,div.snize-recommendations .stars-container {  margin-right: 17px;}div.snize .stars-container,div.snize-recommendations .stars-container {  letter-spacing: 4px;}div.snize .snize-reviews .total-reviews,div.snize-recommendation-results .snize-reviews .total-reviews {  color: #00C558;  font-size: 12px;}#snize-search-results-grid-mode span.snize-overhidden {  padding-top: 20px;padding-left: 5px;}div.snize .snize-product .snize-color-swatch > span:before,.snize-recommendations .snize-product .snize-color-swatch > span:before {  border-radius: 50% !important;}div.snize ul.snize-product-color-filter li label .snize-color-filter-checkbox > span:before {  border-radius: 50% !important;}#snize-search-results-grid-mode .snize-price-list, #snize-search-results-list-mode .snize-price-list {  margin-top: 10px;  margin-bottom: 17px;}div.snize .snize-product .snize-size-select-box {  margin-bottom: 0;}div.snize li.snize-product .snize-price-list .snize-price,div.snize li.snize-product .snize-price-list .snize-discounted-price,.snize-recommendations li.snize-product .snize-price-list .snize-price,.snize-recommendations li.snize-product .snize-price-list .snize-discounted-price {  font-weight: 500;  font-size: 14px;  line-height: 21px;}div.snize li.snize-product .snize-price-list .snize-price.snize-price-with-discount,.snize-recommendations li.snize-product .snize-price-list .snize-price.snize-price-with-discount {  color: #DF3137;}div.snize li.snize-product .snize-price-list .snize-discounted-price,.snize-recommendations li.snize-product .snize-price-list .snize-discounted-price {  color: #BFBFC9;}#snize_results.snize-mobile-design.snize-new-version #snize-search-results-grid-mode li.snize-product span.snize-title {  font-size: 14px;}#snize_results.snize-mobile-design.snize-new-version .snize-reviews .total-reviews {  margin-top: 0;}#snize_results.snize-mobile-design.snize-new-version .stars-container {  margin-right: 0;  letter-spacing: 2px;}div.snize ul.snize-product-filters-list .snize-filter-variant-count {  margin-left: 10px;}div.snize ul.snize-product-filters-list .snize-filter-variant-count:before, div.snize ul.snize-product-filters-list .snize-filter-variant-count:after {  display: none;}div.snize .snize-product .snize-size-select-box .snize-size-active,div.snize .snize-product .snize-size-select-box .snize-size:not(.snize-size-active):hover,.snize-recommendations .snize-product .snize-size-select-box .snize-size-active,.snize-recommendations .snize-product .snize-size-select-box .snize-size:not(.snize-size-active):hover {  color: #000;  border-color: #000;}div.snize .snize-product .snize-size-select-box .snize-size:not(.snize-size-active),.snize-recommendations .snize-product .snize-size-select-box .snize-size:not(.snize-size-active) {  color: #747474;  border-color: #747474;}div.snize li.snize-product .snize-price-list .snize-price {  margin-right: 15px;}[data-sntooltip]:after, [data-sntooltip]:before {  display: none;}div.snize div.snize-pagination a.snize-pagination-load-more {  border-radius: 0;  border-color: #32302E;  color: #32302E;  padding: 9px 20px;}div.snize #snize-search-results-list-mode .snize-reviews:empty {  display: none;}div.snize #snize-search-results-list-mode .snize-reviews {  margin-bottom: 0;}div.snize ul.snize-product-filters-list li > label {  display: flex;  align-items: center;}div.snize ul.snize-product-filters-list li .snize-filter-checkbox {  margin-top: 0;}#snize-search-results-grid-mode li.snize-product .snize-button {  top: initial;  left: 0;  margin-left: 0;  background: #32302E;  font-style: normal;  font-weight: normal;  font-size: 14px;  text-align: center;  letter-spacing: 1.12px;  text-transform: uppercase;  color: #FFFFFF;  padding: 12px 0;  border-radius: 0;  width: 100%;  bottom: 0;  transition: none;}.snize-option-selector-wrapper select {  box-sizing: border-box;}#snize-modal-mobile-filters-dialog ul.snize-product-filters-list {  padding-top: 1px;}#snize-modal-mobile-filters-dialog ul.snize-product-filters-list li .snize-filter-checkbox {  height: auto;}span.snize-in-stock {  display: none !important;}div.snize-recommendation-results li.snize-product .snize-button {     top: initial;  left: 0;  margin-left: 0;  background: #32302E;  font-style: normal;  font-weight: normal;  font-size: 14px;  text-align: center;  letter-spacing: 1.12px;  text-transform: uppercase;  color: #FFFFFF;  padding: 12px 0;  border-radius: 0;  width: 100%;  bottom: 0;  transition: none;}div.snize-recommendation-results a.buttons {  z-index: 9;}@media (max-width: 768px) {div.snize-recommendation-results li.snize-product .snize-button {  display: none;}}div.searchanise-recommendations.snize-options span.snize-title {  text-align: left;}div.searchanise-recommendations.snize-options span.snize-overhidden {  padding-top: 15px;}.snize-recommendation .snize-product .snize-options-box .snize-color-swatch-box {  text-align: left;}.snize-recommendation .snize-product .snize-options-box .snize-size-select-box {  justify-content: left;}div.snize-recommendation-results .snize-price-list {  text-align: left;}.swym-button.swym-add-to-wishlist-view-product:after {  color: #C02E00 !important;}#snize-search-results-grid-mode span.snize-out-of-stock, #snize-search-results-list-mode span.snize-out-of-stock {  background: #BCBCBC;}#snize-search-results-grid-mode span.snize-pre-order, #snize-search-results-list-mode span.snize-pre-order {  background: #979C8C;}div.snize ul.snize-product-color-filter li label .snize-color-filter-checkbox > span:not([title="White"]),div.snize .snize-product .snize-color-swatch:not([data-value="White"]) > span {  border: 1px solid transparent;}*/#fc_frame, #fc_frame.fc-widget-normal {    bottom: 100px !important;    right: 45px !important;    z-index: 900;}',
    CustomJS: 'document.addEventListener("Searchanise.Loaded",function(){(function($){var snizeCollectionResults=0;$(document).on(\'Searchanise.DataRequestEnd\',function(event,type,params,data){snizeCollectionResults=data.totalItems});$(document).on("Searchanise.ResultsUpdated",function(e,content){$(window).off(\'popstate\').on(\'popstate\',function(event){Searchanise.Start()});if(Searchanise.GetWidgets().searchResults.isCollectionMode()&&snizeCollectionResults!=0){$(\'.snize-main-panel-collection-results-found b\').text(snizeCollectionResults)}})})(window.Searchanise.$)})',
    RecommendationsLayout: {
        "collection": ["2E6P0T2U3L9P5V2", "5Z9Z2W2K4X5D8D5", "5U9X9Y9P2E3C4A8"],
        "search results": ["2E6P0T2U3L9P5V2", "5U9X9Y9P2E3C4A8"],
        "cart": ["2E6P0T2U3L9P5V2"],
        "product": ["3K2O2J0B9X3G2U9", "0C9A0R3K4B6R5Y6", "1C3S3K6L7W9U4Q2", "5U9X9Y9P2E3C4A8"],
        "home page": ["1R0C0O7W2M8D6Y5"]
    },
    IsVoiceSearchEnabled: 'Y'
}
