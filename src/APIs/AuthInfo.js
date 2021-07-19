export const AuthInfo = {
    isAuthenticated: false,
    authUser: {},
    userSignup: cb => {
        AuthInfo.isAuthenticated = true;
        cb()
    },
    userSignin: function(cb){
        this.isAuthenticated = true;
        cb();
    },
    userSignout: cb => {
        AuthInfo.isAuthenticated = false;
        cb()
    },
}