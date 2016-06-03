# utility-js

JavaScript utility functions.

## Install

```
npm install utility-js
```

## API


### forEach

```
function forEach(
		array: (Array | ArrayLikeObject),
		callback: Function
	): Array;

callback = function (
		value: Object,
		index: Number,
		array: (Array | ArrayLikeObject)
	): (boolean | undefined);
```