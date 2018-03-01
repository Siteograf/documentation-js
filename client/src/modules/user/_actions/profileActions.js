import { patch } from '../../utils/httpRequest/httpMethods';

export function shippingListLoad() {
  return (dispatch, getState) =>
    dispatch({
      type: 'SHIPPING_LIST_LOAD',
      payload: getState().user.userInfo.shipping,
    });
}

export function shippingListItemAdd(form) {
  return dispatch =>
    dispatch({
      type: 'SHIPPING_LIST_ITEM_ADD',
      payload: form,
    });
}

export function updateShipping(userId, data) {
  return () =>
    patch(
      `/user/shipping/${userId}`,
      data,
    );
}

export function updateBilling(userId, data) {
  return () =>
    patch(
      `/user/billing/${userId}`,
      data,
    );
}