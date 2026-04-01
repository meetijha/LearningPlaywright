let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User Data" });
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
})

// .then() runs ONLY when the promise resolves successfully. It takes a callback function as an argument, which receives the resolved value (response) when the promise is fulfilled.