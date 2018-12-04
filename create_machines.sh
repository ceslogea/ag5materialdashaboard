#!/bin/sh

for i in 1 2 3; do
  docker-machine create -d hyperv --hyperv-virtual-switch "Default Switch" myvm$i
done

MANAGER_IP=$(docker-machine ip myvm1)

eval $(docker-machine env myvm1)

docker swarm init --advertise-addr $MANAGER_IP

TOKEN=$(docker swarm join-token -q worker)

for i in 2 3; do
  docker-machine ssh myvm$i "docker swarm join --token $TOKEN $MANAGER_IP:2377"
done

echo "Swarm cluster has been successfuly created !"

docker node ls
