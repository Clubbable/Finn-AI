const superagent = require('superagent');

const requestTone = (callback) => {
    return superagent
    .get(
      `http://apiserver:3003/tone`
    )
    .end((err, res)=>{
      if (err) {
          return callback({error:err},null);
      }

      return callback(null,{data:res});
  });
}

module.exports = requestTone;