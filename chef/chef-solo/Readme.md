## Running Chef Solo

To run Chef Solo using Docker, use the following command:

```sh
docker run -it --rm -v "${PWD}":/chef docker.io/library/chef-solo:latest
```
