# selenium-practice-platform

> This is a platform for UI test practice.

## Front-End:

##### Project Directory

```
└── client
	├── build
	├── config
	├── src
	│   ├── main.js	 # entry
	│   ├── App.vue
	│   ├── assets   # Static resources
	│   ├── components 	 # common components
	│   │   └── *.vue
	│   ├── filters 	 # some custom filters
	│   ├── models		 # mock.js data template
	│   ├── router
	│   │   └── index.js # router config
	│   ├── utils        # some common module
	│   └── views		 # page views
	│       ├── Home.vue
	│       ├── TimeLine.vue
	│       ├── Images.vue
	│       ├── Article.vue
	│       └── About.vue
	├── static		# build assets files
	│   ├── images
	│   └── styles
	├── test		# test files
	│
	└── index.html 	# entry template
```

#####  Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run cl:dev

# build for production with minification
npm run cl:build

# build for production and view the bundle analyzer report
npm run cl:build --report

# run unit tests
npm run cl:unit

# run e2e tests
npm run cl:e2e

# run all tests
npm run cl:test
```

##### Browser Support

Modern browsers and Internet Explorer 9+.(As with vue.js)

## Back-End:



## LICENSE

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Joris Cai and CXM