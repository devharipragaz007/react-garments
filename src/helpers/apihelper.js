import axios from 'axios';
import Api from '../api';
import store from '../store'
import {
    message
} from 'antd'
import {
    onLogOut
} from "../actions/login";

axios.defaults.withCredentials = true;

let state = store.getState();
var auth = state.login.userData.token;


async function showAlert(status, msg) {
    if (status === "success") {
        message.success(msg)
    } else if (status === "info") {
        message.info(msg)
    } else if (status === "warning") {
        message.warning(msg)
    } else if (status === "error") {
        message.error(msg)
    }
}

export function getRequestWithoutAuth(url) {
    var getPromise = new Promise(async (resolve, reject) => {
        await axios.get(Api + url)
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                // showAlert(res.status, msg)
                showAlert(res.status, message)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(msg)
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return getPromise;

}


export function postRequestWithoutAuth(url, data) {
    var postPromise = new Promise(async (resolve, reject) => {
        await axios.post(Api + url, data)
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return postPromise;

}


export function postRequest(url, data) {
    axios.defaults.withCredentials = true;
    var postPromise = new Promise(async (resolve, reject) => {
        let state1 = store.getState();
        var auth1 = state1.login.userData.token;
        await axios.post(Api + url, data, {
                headers: {
                    'Authorization': "Bearer " + auth1
                }
            })
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }

                if (res.type === "unauthorized") {
                    store.dispatch(onLogOut());
                }

                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return postPromise;

}


export function getRequest(url) {
    var getPromise = new Promise(async (resolve, reject) => {
        let state1 = store.getState();
        var auth1 = state1.login.userData.token;
        // console.log(auth1, "Auth")
        await axios.get(Api + url, {
                headers: {
                    'Authorization': "Bearer " + auth1
                }
            })
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(msg)
                }

                if (res.type === "unauthorized") {
                    store.dispatch(onLogOut());
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return getPromise;

}


export function postRequestWithProvidedHeader(url, data, headers) {
    axios.defaults.withCredentials = true;
    var postPromise = new Promise(async (resolve, reject) => {
        await axios.post(Api + url, data, {
                headers: headers
            })
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }

                if (res.type === "unauthorized") {
                    store.dispatch(onLogOut());
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return postPromise;

}


export function getRequestWithProvidedHeader(url, headers) {
    axios.defaults.withCredentials = true;
    var getPromise = new Promise(async (resolve, reject) => {
        await axios.get(Api + url, {
                headers: headers
            })
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }

                if (res.type === "unauthorized") {
                    store.dispatch(onLogOut());
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return getPromise;

}



export function putRequestWithoutAuth(url, data) {
    var putPromise = new Promise(async (resolve, reject) => {
        await axios.put(Api + url, data)
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return putPromise;

}


export function putRequest(url, data) {
    axios.defaults.withCredentials = true;
    var putPromise = new Promise(async (resolve, reject) => {
        let state1 = store.getState();
        var auth1 = state1.login.userData.token;
        await axios.put(Api + url, data, {
                headers: {
                    'Authorization': "Bearer " + auth1
                }
            })
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }

                if (res.type === "unauthorized") {
                    store.dispatch(onLogOut());
                }

                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return putPromise;

}



export function deleteRequestWithoutAuth(url) {
    var deletePromise = new Promise(async (resolve, reject) => {
        await axios.delete(Api + url)
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return deletePromise;

}


export function deleteRequest(url) {
    axios.defaults.withCredentials = true;
    var deletePromise = new Promise(async (resolve, reject) => {
        let state1 = store.getState();
        var auth1 = state1.login.userData.token;
        await axios.delete(Api + url, {
                headers: {
                    'Authorization': "Bearer " + auth1
                }
            })
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }

                if (res.type === "unauthorized") {
                    store.dispatch(onLogOut());
                }

                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return deletePromise;

}



export function deleteRequestWithProvidedHeader(url, headers) {
    axios.defaults.withCredentials = true;
    var deletePromise = new Promise(async (resolve, reject) => {
        await axios.delete(Api + url, {
                headers: headers
            })
            .then(response => {
                var res = response.data
                var result = {};

                var msg = typeof res.message === "object" ? res.message.message ? res.message.message : 'Problem With Connecting Data Server' : res.message;
                showAlert(res.status, msg)
                if (res.status === "success" || res.status === "info") {
                    result = res
                } else {
                    reject(res.message)
                }

                if (res.type === "unauthorized") {
                    store.dispatch(onLogOut());
                }
                resolve(result);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return deletePromise;

}

