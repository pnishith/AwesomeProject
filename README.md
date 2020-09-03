# react-native-boilerplate

Clone repo

```
git clone https://github.com/pnishith/react-native-boilerplate.git
```

### Run The Basic App

```
$ npm install
$ pod repo update (MAC only if pod is old)
$ npx pod-install (Mac Only) [if error, run this in terminal `sudo xcode-select --switch /Applications/Xcode.app`]
$ npx react-native run-android
```

### Start Server (In Case Not Started)

```
$ npm react-native start
```

## Generating Signed APK

Follow link

```
https://reactnative.dev/docs/signed-apk-android
```

## Generating the release APK

Simply run the following in a terminal:

```
$ cd android
$ ./gradlew assembleRelease
```

## Clean the Build

Simply run the following in a terminal:

```
$ cd android
$ ./gradlew clean
```
