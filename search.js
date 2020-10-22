$(".univ-search-input").click(function() {
  $(".drawer").fadeIn();
});

const client = algoliasearch('3J2D8ITRRP', '7aaf1b8db0ab4f0de35c2ed6649efeb5');
const search = client.initIndex('dev_MarketingSite');

autocomplete(
  '#univ-search-input',
  {
    debug: true,
    minLength: 2,
  },
  [
    {
      source: autocomplete.sources.hits(search, {hitsPerPage: 10}),
        displayKey: 'Losant',
        name: 'title',
        templates: {
          suggestion({absoluteURL, _highlightResult, _snippetResult, type}) {
            return `
            <a href="${absoluteURL}">
              <table>
                <tr>
                  <th>
                    <h4>${_highlightResult.header.value} <span style="color: #FF495C;">|</span> ${type}</h4>
                  </th>
                  <th>
                    <img src="https://f.hubspotusercontent40.net/hubfs/742943/Website/Images/Icons/ios-arrow-forward.svg" width="30px"; height="30px";>
                  </th>
                </tr>
              </table>
              <p>${_snippetResult.body.value}</p>
              </a>`;
          },
        },
    }
  ]
);
