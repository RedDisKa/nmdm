export const CUSTOMER_CREATE_REQUEST = 'customer_create_request';
export const CUSTOMER_CREATE_FINISHED = 'customer_create_finished';
export const CUSTOMER_CREATE_FAILURE = 'customer_create_failure';

interface CustomerCreateAction {
    type: typeof CUSTOMER_CREATE_REQUEST | typeof CUSTOMER_CREATE_FINISHED | typeof CUSTOMER_CREATE_FAILURE
    payload: {
        error: string
    }
}

export type CustomerActions = CustomerCreateAction
