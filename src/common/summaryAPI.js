export const baseURL = "http://localhost:2230";

const summaryAPI = {
    signUp: {
        url: '/api/v1/user/signup',
        method: 'POST'
    },
    login: {
        url: '/api/v1/user/signin',
        method: 'POST'
    },
    otpVerify: {
        url: '/api/v1/user/verify-otp-code',
        method: 'POST'
    },
    resendOTP: {
        url : '/api/v1/user/send-otp',
        method: 'POST'
    },
    fetchUser: {
        url : '/api/v1/user/me',
        method: 'GET'
    },
    createBiz: {
        url : '/api/v1/business/business-registration',
        method: 'POST'
    },
    emailResetPass: {
        url : '/api/v1/user/request-password-reset',
        method: 'POST'
    },
    fetchMerchant: {
        url : '/api/v1/business/merchant-details',
        method: 'GET'
    },
    uploadProfileImage: {
        url : '/api/v1/user/upload-avatar',
        method: 'PUT'
    },
    verifyOTPreset: {
        url : '/api/v1/user/verifyResetPasswordOTP',
        method: 'POST'
    },
    resetPassword: {
        url : '/api/v1/user/reset-password',
        method: 'PATCH'
    },
    logOut: {
        url: '/api/v1/user/signout',
        method: 'POST'
    }
}

export default summaryAPI