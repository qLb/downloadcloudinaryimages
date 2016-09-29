// Copyright 2015 qL.b
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
    request = require('request'),
    n = 0,
    totalObj = 0;

var download = function(){
  // stop the download if reached the total number of files
  if (n >= totalObj) return;

  var url = obj.resources[n].url;
  var secure_url = obj.resources[n].secure_url;
  var filename = obj.resources[n].public_id.replace(/\//g, '_')+'.'+obj.resources[n].format;

  request.head(url, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    // increase the n to download the next file on the next iteration
    n++;
    request(url).pipe(fs.createWriteStream('./images/'+filename)).on('close', download);
  });
};

fs.readFile('data.json', 'utf8', function (err, data) {

  if (err) throw err;
  obj = JSON.parse(data);
  totalObj = obj.resources.length;

  download();
});
