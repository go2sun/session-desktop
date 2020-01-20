interface Window {
  Events: any;
  deleteAllData: any;
  getAccountManager: any;
  mnemonic: any;
  clipboard: any;

  passwordUtil: any;
  userConfig: any;

  dcodeIO: any;
  libsignal: any;
  libloki: any;
  displayNameRegex: any;

  Signal: any;
  Whisper: any;
  ConversationController: any;
  
  setPassword: any;
  textsecure: any;
  Session: any;
  log: any;
  i18n: any;
  friends: any;
  generateID: any;
  storage: any;
  pushToast: any;

  confirmationDialog: any;
  showSeedDialog: any;
  showPasswordDialog: any;

  deleteAccount: any;

  toggleTheme: any;
  toggleMenuBar: any;
  toggleSpellCheck: any;
  toggleLinkPreview: any;
  toggleMediaPermissions: any;

  getSettingValue: any;
  setSettingValue: any;
}

interface Promise<T> {
  ignore(): void;
}
