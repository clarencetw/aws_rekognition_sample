const AWS = require('aws-sdk');
const fs = require('fs');

var rekognition = new AWS.Rekognition({
    accessKeyId: "your-access-key",
    secretAccessKey: "your-secret-access-key",
    region: "us-west-2"
});

var params = {
    Image: {
        Bytes: fs.readFileSync("drive_resized.jpg")
    }
};

rekognition.detectFaces(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else     console.log(JSON.stringify(data));
});
