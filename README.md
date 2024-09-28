## Setup with Docker compose :

1. git clone

``` bash
git clone https://github.com/Tomba-Hopkins/my-ctf-lab1.git
```
<br>
<br>


2. cd dir

``` bash
cd my-ctf-lab1
```
<br>
<br>


3. docker-compose up

``` bash
docker compose up
```
or
``` bash
docker-compose up
```

<br>
<br>

5. open browser

``` bash
http://localhost:5000
```
<br>
<br>

6. enjoy 🦖

<br>
<br>
<br>
<br>

## Setup with docker hub
1. docker pull app
``` bash
docker pull hopkinserstomba/mylab-nasgor-edition
```
<br>
<br>

2. docker pull mongo

``` bash
docker pull mongo:5.0
```
or
``` bash
docker pull mongo:4.4
```
<br>
<br>

3. docker run mongo 
``` bash
docker run -d --name mongo -p 27017:27017 -v mongodata:/data/db mongo:5.0
```
or 
``` bash
docker run -d --name mongo -p 27017:27017 -v mongodata:/data/db mongo:4.4
```
<br>
<br>

4. docker run app
``` bash
docker run -p 5000:5000 --env MONGO_URL="mongodb://mongo:27017/belanja-app" --link mongo:mongo hopkinserstomba/mylab-nasgor-edition

```
<br>
<br>

### note
- i think there is a lot of bug in my app, sorry about that.

- i tried my best.

- i was doin it all in my linux, but its not workin.

## i will fix this app soon 
dont worry see u next time