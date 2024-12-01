#!/bin/bash

docker network create example-api-network

docker container run --rm -v $(pwd):/app -w /app node npm install
docker-compose up --build

KEY="RUN_MIGRATIONS"

if [ ! -f "./.env.local" ]; then
    echo "Erro: .env arquivo não existe."
    exit 1
fi

grep -q "^$KEY=false$" "./.env.local"
if [ $? -ne 0 ]; then
    echo "Erro: a chave não está definida como false no arquivo .env."
    exit 1
fi

# Subsitui o valor da chave para false
#sed -i "/^$KEY=false$/s/false/true/" ".env.local" # No Linux
sed -i '' "/^$KEY=false$/s/false/true/" ".env.local" # No Mac


echo "Chave $KEY atualizada para true."
