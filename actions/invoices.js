import {createActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const {
  invoiceGet,
  invoiceGetSuccess,
  invoicesGet,
  invoicesGetSuccess,
  invoicesPost,
  invoicesPostSuccess,
  invoicesPut,
  invoicesPutSuccess,
  invoicesRemoveActive,
  invoiceItemPost,
  invoiceItemPostSuccess,
  invoiceItemGet,
  invoiceItemGetSuccess,
  invoiceItemPut,
  invoiceItemPutSuccess,
} = createActions({
  [ActionTypes.INVOICE_GET]: (payload) => payload,
  [ActionTypes.INVOICE_GET_SUCCESS]: (payload) => payload,
  [ActionTypes.INVOICES_GET]: (payload) => payload,
  [ActionTypes.INVOICES_GET_SUCCESS]: (payload) => payload,
  [ActionTypes.INVOICES_POST]: (payload) => payload,
  [ActionTypes.INVOICES_POST_SUCCESS]: (payload) => payload,
  [ActionTypes.INVOICES_PUT]: (payload) => payload,
  [ActionTypes.INVOICES_PUT_SUCCESS]: (payload) => payload,
  [ActionTypes.INVOICES_REMOVE_ACTIVE]: () => {
    return {}
  },
  [ActionTypes.INVOICE_ITEM_POST]: (payload) => payload,
  [ActionTypes.INVOICE_ITEM_POST_SUCCESS]: (payload) => payload,
  [ActionTypes.INVOICE_ITEM_GET]: (payload) => payload,
  [ActionTypes.INVOICE_ITEM_GET_SUCCESS]: (payload) => payload,
  [ActionTypes.INVOICE_ITEM_PUT]: (payload) => payload,
  [ActionTypes.INVOICE_ITEM_PUT_SUCCESS]: (payload) => payload,
});