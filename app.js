function msg(message) {
    console.log(message);
  }

  
  function getWords(word) {
    console.log(word);
  }
  
  function done() {
    console.log(`Done!`);
  }
  
  function countdown(num, callback) {
    let number = num
    if (number > 0) {
      console.log(number)
      number--;
      setTimeout(function () { countdown(number, callback) }, 1000);
    } else callback();
  }
  
  // countdown(5, done);
  
  let lunchTime = true;
  
  const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
      let random = Math.floor(Math.random() * 20);
      if (lunchTime == true && random % 2 === 0) {
        let favLunch = {
          lunch: 'Sandwich',
          drink: 'Sunkist'
        }
        resolve(favLunch);
      } else {
        lunchTime = false;
        let err = new Error('An error has occurred.');
        reject(err);
      }
    });
  };
  
  orderMeSomeFood().then((a) => {
    console.log(a);
  }).catch((e) => {
    console.log(e);
  });