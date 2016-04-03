# DDWS - Data-driven Web Service
Rapidly build prototype concepts, and seamlessly request your data with this intelligent web service.  

## Installation

1) Open a terminal/cmd window, navigate to the application root and run: `npm install`  
2) Run the server: `node server.js`

## Usage

Simply add your JSON data to the `data` directory within the application and navigate to `http://localhost:8080/api/<JSONFileName>`

> Note the JSON file name does not need the .json extension.

## Examples
Given the following JSON data file "exampledata.json" in the data directory:
```JSON
[{
      "id": 1,
      "gender": "Male",
      "first_name": "George",
      "last_name": "Murray",
      "email": "gmurray0@symantec.com",
      "ip_address": "200.50.2.50"
    }, {
      "id": 2,
      "gender": "Female",
      "first_name": "Dorothy",
      "last_name": "Greene",
      "email": "dgreene1@addtoany.com",
      "ip_address": "97.68.210.247"
    }, {
      "id": 3,
      "gender": "Female",
      "first_name": "Lisa",
      "last_name": "Johnson",
      "email": "ljohnson2@mit.edu",
      "ip_address": "196.53.51.225"
}]
```
I'm able to tell the service how I want to filter this data via RESTFUL calls to the service. For example, if I wanted to select an object, whose key is `id` and value is `2`:

`http://localhost:8080/api/exampledata/id/2`

This would return the single object, who's id is 2:
```JSON
{
  "id": 2,
  "gender": "Female",
  "first_name": "Dorothy",
  "last_name": "Greene",
  "email": "dgreene1@addtoany.com",
  "ip_address": "97.68.210.247"
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT)

Copyright (c) 2016 Brandon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.