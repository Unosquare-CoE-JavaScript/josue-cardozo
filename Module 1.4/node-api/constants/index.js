module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_FETCHED: 'Product Fetched Successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found',
        PRODUCT_UPDATED: 'Product Updated Successfully',
        PRODUCT_DELETED: 'Product Deleted Successfully'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        DUPLICATE_EMAIL: 'User Already Exists With Given Email',
        LOGIN_SUCCESSS: 'Login Success',
        USER_NOT_FOUND: 'User Not Found',
        INVALID_PASSWORD: 'Invalid Password'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid Fields',
        TOKEN_MISSING: 'Token Missing From Header'
    },
    dataBaseMessage: {
        INVALID_ID: 'Invalid Id'
    },
};
