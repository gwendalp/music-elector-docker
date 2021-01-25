# Music Elector 

``` 
git clone ...
docker-compose build
docker-compose up
```

Then, open a new bash with nodejs installed :

```
node bin/seed.js 
```

Open the URL : localhost:8080 or public_adress:8080 (found with EC2 instance)

Notes : EC2 keep the private key !

## Recipe to launch the website : 

```
sudo ssh -i "*.pem" ec2-user@public_adress
cd music-elector-docker
git pull
docker-compose up --build --rm
```

Then go to the Domain Name Website : https://my.freenom.com/, change the URL Forwarding given by AWS : public_adress:8080. 


## ToDo list

 * Log the number of client logged on the WebSite
 * Make a responsive design of the WebSite


