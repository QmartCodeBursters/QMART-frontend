export const baseURL = "http://localhost:2230";

const summaryAPI = {
    signUp : {
        url: '/api/v1/user/signup',
        method: 'POST'
    },
    verifyOTP : {
        url: '/api/v1/user/verify-otp',
        method: 'POST'
    }
}

export default summaryAPI