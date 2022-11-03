const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message === 'wassup?') {
                return reject('Something went wrong');
            }
            resolve(message);
        }, 3000);
    });
};

displayMessage('hello').then(result => {
    console.log('result', result);
}).catch(e => console.log('error: ', e));

const myFunc = async () => {
    try {
        let result = '';
        result = await displayMessage('hello');
        console.log('result: ', result);
        result = await displayMessage('there?');
        console.log('result: ', result);
        result = await displayMessage('wassup?');
        console.log('result: ', result);
    } catch (error) {
        console.log('error: ', error);
    }
}
