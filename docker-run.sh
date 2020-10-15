echo "Building and running $1 on port $2"

if [ "$(docker ps -aq -f name=$1)" ]; then
    docker rm --force $1
fi

docker image build -f $3 -t $1:local .
docker run -p $2:80 -detach --env-file .env --name $1 $1:local