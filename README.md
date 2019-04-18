# ReactNativeEx

# React Native Issue

### Clear cache
> npm start -- --reset-cache

### Unable to load script from assets index.android.bundle on windows

1. (in project directory) mkdir android/app/src/main/assets
2. react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3. react-native run-android

### 解决mac中adb: command not found

#### solution 1 : 
> sudo cp ~/Library/Android/sdk/platform-tools/adb /usr/bin/adb

#### solution 2 :

1. Jump home path
> echo $HOME

2. Create .bash_profile
> touch .bash_profile

3. Open file
> open -e .bash_profile

4. Input export
> 输入export PATH=/Users/您的用户名/文件路径/platform-tools/:$PATH

or
> export PATH=${HOME}/android-sdk-linux_x86/platform-tools/:$PATH


### Add react-native-vector-icons

1. npm install --save react-native-vector-icons
2. react-native link react-native-vector-icons

### APP Rename

1. Copy your icons from iOS and Android
2. Update **displayName** in **app.json** to the new name
3. Delete **ios/** and **android/** directories
4. Run **react-native eject**
5. Replace the icons you copied earlier
6. Run **react-native link**
7. Start your app and hope it worked! Or read the rest of this tutorial.


### Sence Type List

| Property | Type | Value | Shorthand |
|----|---|---|---|
| ActionConst.JUMP | string | 'REACT_NATIVE_ROUTER_FLUX_JUMP' | 'jump'|
| ActionConst.PUSH | string | 'REACT_NATIVE_ROUTER_FLUX_PUSH' | 'push' |
| ActionConst.REPLACE | string | 'REACT_NATIVE_ROUTER_FLUX_REPLACE' | 'replace' |
| ActionConst.BACK | string | 'REACT_NATIVE_ROUTER_FLUX_BACK' | 'back' |
| ActionConst.BACK_ACTION | string | 'REACT_NATIVE_ROUTER_FLUX_BACK_ACTION' | 'BackAction' |
| ActionConst.POP_TO | string | 'REACT_NATIVE_ROUTER_FLUX_POP_TO' | 'popTo' |
| ActionConst.REFRESH | string | 'REACT_NATIVE_ROUTER_FLUX_REFRESH' | 'refresh' |
| ActionConst.RESET | string | 'REACT_NATIVE_ROUTER_FLUX_RESET' | 'reset' |
| ActionConst.FOCUS | string | 'REACT_NATIVE_ROUTER_FLUX_FOCUS' | 'focus' |


### Search DUNS Number
1. http://www.dandb.com/duns-file/
2. Click "Search for your company"

# Android Building
### Execution failed for task ':app:processReleaseResources'

node_modules/react-native/local-cli/bundle/assetPathUtils.js is need to update
```javascript=
function getAndroidAssetSuffix(scale) {
  switch (scale) {
    case 0.75: return 'ldpi-v4';
    case 1: return 'mdpi-v4';
    case 1.5: return 'hdpi-v4';
    case 2: return 'xhdpi-v4';
    case 3: return 'xxhdpi-v4';
    case 4: return 'xxxhdpi-v4';
  }
}
```

### Duplicate file error perfectly

node_modules/react-native/react.gradle to add following code to currentBundleTask's creation block
```javascript=
doLast {
    def moveFunc = { resSuffix ->
        File originalDir = file("${resourcesDir}/drawable-${resSuffix}")
        if (originalDir.exists()) {
            File destDir = file("${resourcesDir}/drawable-${resSuffix}-v4")
            ant.move(file: originalDir, tofile: destDir)
        }
    }
    moveFunc.curry("ldpi").call()
    moveFunc.curry("mdpi").call()
    moveFunc.curry("hdpi").call()
    moveFunc.curry("xhdpi").call()
    moveFunc.curry("xxhdpi").call()
    moveFunc.curry("xxxhdpi").call()
}
```

# Building Android APK

### Step 1 : Create Key

> keytool -genkey -v -keystore ${名稱}.keystore -alias ${別名} -keyalg RSA -keysize 2048 -validity 10000

### Step 2 : Move Keystore

> 把 HelloRN.keystore 放到 /adnroid/app 目錄下

### Step 3 : Vi File

vi ~/.gradle/gradle.properties
> HELLORN_STORE_FILE=HelloRN.keystore
> HELLORN_KEY_ALIAS=HelloRN
> HELLORN_STORE_PASSWORD=這裡輸入儲存庫密碼
> HELLORN_KEY_PASSWORD=這裡輸入金鑰密碼

### Step 4 : Set gradle

> File Path : android/app/build.gradle

```javascript=
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

### Step 5 : Test

> react-native run-android --variant=release

### Step 6 : Build APK

> cd android && ./gradlew assembleRelease
> Output File Path : android/app/build/outputs/apk/app-release.apk

Ref : https://reactnative.cn/docs/signed-apk-android/

# iOS Building
### Signing  requires a development team. Select a development team in the project editor.

http://www.jianshu.com/p/cbe59138fca6
