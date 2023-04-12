/** BASE URL FOR BACKEND API */
const baseURL = "http://wallet-env.eba-gr5bgv3s.eu-north-1.elasticbeanstalk.com";

const PATHS = {
    register: "/account/register/",
    login: "/account/login/",
    details: "/account/details/",
    changePassword: "/account/change-password/",

    fetchWallet: "/wallet/",
    fundWallet: "/wallet/fund/",
    transferFund: "/wallet/transfer/",
    googleOAUTH: "/oauth/google-auth/",
    bookstoreOAUTH: "/oauth/bookstore-auth/",
    fetchTransactions: "/wallet/transactions/",
    financeOAUTH: "/oauth/upload-transaction/",
};

const clientID = "1066944143940-ot94bjkttr1f61kset8650km8t83nt6o.apps.googleusercontent.com";

// BOOKSTORE DETAILS
const bookHubURL = "http://booksoreapi-env.eba-3igtf73b.us-east-1.elasticbeanstalk.com";
const bookHubClientID = "1TgJA1eyA3xKG5pj5LdJS8dBzYeYeCKNXB47CcQL";
const bookHubCodeChallange = "JW0N0MFkRCoHvIqnA1QJiJQ1lQTUH1PJy1BcFgb-Uhk";
const redirectURI = "http://localhost:3000/oauth";

// FINANCE TRACKER URLS
const fintrackURL = "http://fianancetracker-env.eba-zzxqpwbf.us-east-1.elasticbeanstalk.com";
const fintrackClientID = "CPih2sVVZDFBdQIbnxrPFmWvILHanGDJX7XU2gGG";
const fintrackCodeChallenge = "-wxSlA-gYqGqqCQ_EIOhb-UdH4gKpZzB__DMz6Yu7ms";
const fintrackRedirectURI = "http://localhost:3000/oauth/track";
const fintrackScope = "add-transaction";

export { baseURL, PATHS, clientID, bookHubClientID, bookHubCodeChallange, 
            bookHubURL, redirectURI, fintrackClientID, fintrackCodeChallenge,
            fintrackRedirectURI, fintrackScope, fintrackURL };