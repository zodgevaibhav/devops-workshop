# Docker Build Commands for Chef Solo
## Build image
```sh
docker build -t chef-solo:latest -f dockerfiles/chef-solo .
```
## Run Image
```sh
docker run -it --rm docker.io/library/chef-solo:latest
```

## Run Cookbook
```sh
export CHEF_LICENSE=accept
chef-solo -c /chef/solo/solo.rb -o recipe[my_cookbook]
```

# Docker Build Commands for Chef Servers, Chef Client, and Chef Workstation

## Chef Server
To build a Docker image for the Chef Server, use the following command:
```sh
docker build -t chef-server:latest -f dockerfiles/chef-server .
```

## Chef Client
To build a Docker image for the Chef Client, use the following command:
```sh
docker build -t chef-client:latest -f dockerfiles/chef-node .
```

## Chef Workstation
To build a Docker image for the Chef Workstation, use the following command:
```sh
docker build -t chef-workstation:latest -f dockerfiles/chef-workstation .
```
