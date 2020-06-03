const doworkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,4,5])
        reject([10,10])
    }, 2000)
})

doworkPromise.then((result) => {
    console.log('Success', result)   
}).catch((error) => {
    console.log("Error",error)
})