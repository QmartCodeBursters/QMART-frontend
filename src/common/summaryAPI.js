export const baseURL = "http://localhost:2230";

const summaryAPI = {
    signUp: {
        url: '/api/v1/user/signup',
        method: 'POST'
    },
    otpVerify: {
        url: '/api/v1/user/verify-otp-code',
        method: 'POST'
    },
    resendOTP: {
        url : '/api/v1/user/resend-otp',
        method: 'POST'
    },
    fetchUser: {
        url : '/api/v1/user/me',
        method: 'GET'
    }
}

export default summaryAPI