// Copyright 2010-2012 Mikeal Rogers
//
//    Licensed under MIT License
//    Check LICENSE file for more info
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License file for the specific language governing permissions and
//    limitations under the License.

'use strict'

var fs = require('fs'),
    obj,
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

fs.readFile('data.json', 'utf8', function (err, data) {
  
  if (err) throw err;
  obj = JSON.parse(data);

  for (var i = obj.resources.length - 1; i >= 0; i--) {
    var url = obj.resources[i].url;
    var secure_url = obj.resources[i].secure_url;
    var filename = obj.resources[i].public_id.replace(/\//g, '_')+'.'+obj.resources[i].format;
  
    download(url, filename, function(){
      console.log('done!')
    });
  };

});
