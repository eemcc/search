$(".search").click(function() {
  $(".drawer").show();
});

if (!window.losantAlgoliaSearchClient && !window.search) {
  window.losantAlgoliaSearchClient = algoliasearch('3J2D8ITRRP', '7aaf1b8db0ab4f0de35c2ed6649efeb5');
  window.search = losantAlgoliaSearchClient.initIndex('prod_MarketingSite');
}

autocomplete(
  '#univ-search-input-desktop',
  {
    debug: true,
    minLength: 2,
  },
  [
    {
      source: autocomplete.sources.hits(window.search, {hitsPerPage: 10}),
        displayKey: 'Losant',
        name: 'title',
        templates: {
          suggestion({url, _highlightResult, _snippetResult, type}) {
            return `
            <a href="${url}">
              <div class="box">
                  <div>
                    <h4 style="text-transform: capitalize;">${_highlightResult.header.value} <span style="color: #FF495C;">|</span> ${type}</h4>
                  </div>
                  <div>
                    <img src="https://f.hubspotusercontent40.net/hubfs/742943/Website/Images/Icons/ios-arrow-forward.svg" width="30px"; height="30px";>
                  </div>
              </div>
              <p>${_snippetResult.body.value}</p>
             </a>`;
          },
        },
    }
  ]
);

autocomplete(
  '#univ-search-input-mobile',
  {
    debug: true,
    minLength: 2,
  },
  [
    {
      source: autocomplete.sources.hits(window.search, {hitsPerPage: 10}),
        displayKey: 'Losant',
        name: 'title',
        templates: {
          suggestion({url, _highlightResult, _snippetResult, type}) {
            return `
            <a href="${url}">
              <div class="box">
                  <div>
                    <h4 style="text-transform: capitalize;">${_highlightResult.header.value} <span style="color: #FF495C;">|</span> ${type}</h4>
                  </div>
                  <div>
                    <img src="https://f.hubspotusercontent40.net/hubfs/742943/Website/Images/Icons/ios-arrow-forward.svg" width="30px"; height="30px";>
                  </div>
              </div>
              <p>${_snippetResult.body.value}</p>
              </a>`;
          },
        },
    }
  ]
);


