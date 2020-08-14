### Docker run ApiServer ###
cd ApiServer

docker build . -t fastapi

docker run --name ApiServer -p 3003:3003 fastapi

### Docker run UserServer ###
cd ../UserServer

docker build . -t nodejs-rest

docker run --name UserServer --link ApiServer:apiserver -p 3001:3001 nodejs-rest


### Test UserServer user (GET)###
http://localhost:3001/user/user/1

### Test UserServer id (GET)###
http://localhost:3001/user/id


### Test APiServer tone (GET)###
http://localhost:3003/tone


### Test UserClient###
cd ../UserClient

yarn install