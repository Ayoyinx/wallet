/** BASE URL FOR BACKEND API */
const baseURL = "http://wallet-env.eba-gr5bgv3s.eu-north-1.elasticbeanstalk.com";

/** PERSON SELF HOSTED URL FOR WEBSITE */
const webURL = "http://fastwallet-webapp.s3-website.eu-north-1.amazonaws.com";

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

// Google client ID for wallet application
const clientID = "458994227890-q4tlb0ksvrhkt95lm22m6ccb71krkm3d.apps.googleusercontent.com";

// BOOKSTORE DETAILS
const bookHubURL = "http://booksoreapi-env.eba-3igtf73b.us-east-1.elasticbeanstalk.com";
const bookHubClientID = "1TgJA1eyA3xKG5pj5LdJS8dBzYeYeCKNXB47CcQL";
const bookHubCodeChallange = "JW0N0MFkRCoHvIqnA1QJiJQ1lQTUH1PJy1BcFgb-Uhk";
const redirectURI = `${webURL}/oauth`;

// FINANCE TRACKER URLS
const fintrackURL = "http://fianancetracker-env.eba-zzxqpwbf.us-east-1.elasticbeanstalk.com";
const fintrackClientID = "CPih2sVVZDFBdQIbnxrPFmWvILHanGDJX7XU2gGG";
const fintrackCodeChallenge = "-wxSlA-gYqGqqCQ_EIOhb-UdH4gKpZzB__DMz6Yu7ms";
const fintrackRedirectURI = `${webURL}/`;
const fintrackScope = "add-transaction";

export { baseURL, PATHS, clientID, bookHubClientID, bookHubCodeChallange, 
            bookHubURL, redirectURI, fintrackClientID, fintrackCodeChallenge,
            fintrackRedirectURI, fintrackScope, fintrackURL };