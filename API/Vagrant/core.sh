#!/usr/bin/env bash

echo "Provisioning in progress..."

echo "Installing docker"
sudo curl -fsSL https://get.docker.com/ | sh
sudo usermod -aG docker vagrant

echo "Installing docker compose"
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose && \
chmod +x /usr/local/bin/docker-compose

#http://dmtn-004.lsst.io/en/latest/
echo "Configuring debug options for Docker containers"
echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope
echo 'core.%e.%p' | sudo tee /proc/sys/kernel/core_pattern
ulimit -c unlimited