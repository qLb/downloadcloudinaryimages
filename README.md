# Download Cloudinary Images
Simple NodeJS script to download all images from cloudinary image hosting platform.
# Step 0 - First Things First: Prerequisites
To get started ```git clone``` this repo and ```npm i```
# Step 1 - Cloudinary Account Details
First we need to get our cloudinary's ```CLOUD_NAME```, ```API_KEY``` and ```API_SECRET```
To do so we visit: [the console](https://cloudinary.com/console) - and under "Account Details" we have everything we need.
# Step 2 - Edit Shell Script File
To download all images from our cloudinary image hosting platform we need to provide a sufficent ```data.json``` file containing all images meta-data. It's fairy simple really, let's just edit ```get500images.sh``` with our cloudinary account details we found in Step 1.
# Step 3 - Download 500 Cloudinary Images
Just run: ```node app.js``` :)

cheers,
qL.b
