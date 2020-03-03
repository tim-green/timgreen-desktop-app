# Tim Green Desktop App
<p align="center">
 <img width="256" height="256" src="http://cdn.timgreen.xyz/tg-desktop-app/256x256.png">
</p> 


![](http://cdn.timgreen.xyz/tg-desktop-app/desktop-screenshot.png)

---

### Install Dependencies

[Node.js/npm](https://nodejs.org/) is required.
Install the dependencies:

```sh
$ cd timgreen-desktop-app
$ npm install -d
```

###### Linux Users:
For proper icon support in the system tray, install [appindicator](https://github.com/ubuntu/gnome-shell-extension-appindicator)

#### Testing
```sh
$ npm start
```

#### Compile
```sh
$ npm run build
```
Compiled builds will default to the directory /dist/

*Please note: I know that some times the build will fail, it's due to code signing I'm in two minds about the code signing should or shouldn't I situation*

###### Keyboard Shortcuts
- Close to Tray    - (Cmd or Ctrl) + W
- Quit Application - (Cmd or Ctrl) + Q
