// storage存储加密
import CryptoJS from "crypto-js";
const { AES, enc } = CryptoJS;
const securityKey = "NCAFUASFASDGMKLT";

export class SecurityStorage {
  constructor(storage) {
    this.storage = storage ?? sessionStorage;
  }
  getItem(key) {
    try {
      const value = this.storage.getItem(key);
      return (value ?? "") === ""
        ? ""
        : JSON.parse(
            AES.decrypt(this.storage.getItem(key) ?? "", securityKey).toString(
              enc.Utf8
            )
          );
    } catch (err) {
      //解密失败，storage信息被修改,清除storage
      this.clear();
    }
  }
  setItem(key, value) {
    this.storage.setItem(
      key,
      AES.encrypt(JSON.stringify(value), securityKey).toString()
    );
  }
  removeItem(key) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}
