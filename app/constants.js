/*jshint esversion: 6 */
const Constants = {

  // Internal Settings
  settings: {
    appName: 'TimGreen',
    appUrl: 'https://www.timgreen.ws',
    appUrlLogin: 'https://www.timgreen.ws',
    appUrlAccount: 'https://www.timgreen.ws',
    nodeIntegrationEnabled: false,
    enableDevMenu: false,
    userAgentPostfixWindows: 'WindowsApp',
    userAgentPostfixOSX: 'MacOSXApp',
    userAgentPostfixLinux: 'LinuxApp',
    windowBackgroundColor: '#101010',
    themeColor: '#1d1d1d',
    titleBarStyle: 'hidden',
    showLoader: false,
    frame: true,
    usePhotonKitShell: false,
    useWindowsShell: false,
    useLinuxShell: false,
    useTouchBar: false,
  },

  // mainWindow Settings
  mainWindow: {
    width: 1200,
    height: 800,
    largeWidth: 1220,
    largeHeight: 860,
  },

  // Menu Labels
  menu: {
    app: {
      about: 'About',
      quit: 'Exit',
      hide: 'Hide',
      hideothers: 'Hide Alt',
      unhide: 'Unhide',
    },
    file: {
      label: 'File',
    },
    edit: {
      label: 'Edit',
      undo: 'Undo',
      redo: 'Redo',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      selectall: 'Select All'
    },
    view: {
      label: 'View',
      fullscreen: 'Fullscreen'
    },
    window: {
      label: 'Window',
      minimize: 'Minimize',
      close: 'Close',
      front: 'Move to Foreground',
    },
    help: {
      label: 'Help',
      contact: 'Contact'
    },
  },
  /* touchBar: {
    label: 'TimGreen',
    car: 'Car',
    movables: 'Mobile',
    inquiry: 'Quote',
  } */
};

module.exports = Constants;
