### Docker ###
docker build . -t fastapi

docker run --name ApiServer -p 3003:3003 fastapi