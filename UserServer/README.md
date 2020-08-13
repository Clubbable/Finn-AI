## Install ##
* Install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>

`npm install`

## Run ##
Run project with following command

`npm start`

## Test ##
Test project with following command

`npm test`


### User ###

GET endpoints are: http://localhost:3000/user/id, http://localhost:3000/user/user/{id}. POST endpoint is: http://localhost:3000/user/save.

### Docker ###
docker build . -t nodejs-rest

docker run -p 9000:3000 nodejs-rest
