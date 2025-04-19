docker build -t api-eventos .

docker run -it -p 4242:4242 --network minha-rede api-eventos:latest
