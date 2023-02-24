import searchUiAppSearchConnector from '@elastic/search-ui-app-search-connector'

const { default: AppSearchAPIConnector } = searchUiAppSearchConnector;

const connector = new AppSearchAPIConnector({engineName: 'a', endpointBase: 'a'});

console.log(connector instanceof AppSearchAPIConnector);
