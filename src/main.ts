
import { sp } from '@pnp/sp'

function getPageContext () {
  return window
    // @ts-ignore
    ?.spModuleLoader
    ?._bundledComponents
    ?.['b6917cb1-93a0-4b97-a84d-7cf49975d4ec']
    ?.PageManager
    ?._instance
    ?.pageContext
}

sp.setup({
  ie11: false,
  sp: {
    headers: {
      Accept: 'application/json;odata=minimalmetadata',
      'OData-Version': '3.0',
    },
    baseUrl: getPageContext()?.web?.absoluteUrl ?? window.location.origin,
  },
})
