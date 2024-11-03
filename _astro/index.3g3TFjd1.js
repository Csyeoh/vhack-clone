import {
  c as Nt,
  g as my
} from "./_commonjsHelpers.Cpj98o6Y.js";
import {
  f as Lh,
  p as Mh
} from "./final-judges.iqngaDGA.js";
const Xe = async (t, e) => {
  const n = new URLSearchParams({
          task: t,
          ...Object.fromEntries(Object.entries(e).map(([s, o]) => [s, String(o)]))
      }),
      i = await (await fetch("https://script.google.com/macros/s/AKfycbyvSA9qI9gW6HBIMJMsmkC8Wixu0DNVTfaZYXpPthZLySwrlnYJ6-u3cr8x-f-HQpHXWA/exec", {
          method: "POST",
          body: n
      })).json();
  if (i.result === "error") {
      const s = new Error(i.error);
      throw s.stack = i.stack, s
  }
  return i.success
};

function Fh(t, e) {
  try {
      sessionStorage.setItem(t, JSON.stringify(e))
  } catch (n) {
      A.error("Something went wrong while setting the data", n)
  }
}

function Uh(t) {
  if (sessionStorage.getItem(t)) try {
      return JSON.parse(sessionStorage.getItem(t))
  } catch (e) {
      A.error("Something went wrong while getting the data", e)
  } else return null
}
var tu = {};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Bh = function(t) {
      const e = [];
      let n = 0;
      for (let r = 0; r < t.length; r++) {
          let i = t.charCodeAt(r);
          i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128)
      }
      return e
  },
  gy = function(t) {
      const e = [];
      let n = 0,
          r = 0;
      for (; n < t.length;) {
          const i = t[n++];
          if (i < 128) e[r++] = String.fromCharCode(i);
          else if (i > 191 && i < 224) {
              const s = t[n++];
              e[r++] = String.fromCharCode((i & 31) << 6 | s & 63)
          } else if (i > 239 && i < 365) {
              const s = t[n++],
                  o = t[n++],
                  l = t[n++],
                  u = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | l & 63) - 65536;
              e[r++] = String.fromCharCode(55296 + (u >> 10)), e[r++] = String.fromCharCode(56320 + (u & 1023))
          } else {
              const s = t[n++],
                  o = t[n++];
              e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63)
          }
      }
      return e.join("")
  },
  jh = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/="
      },
      get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_."
      },
      HAS_NATIVE_SUPPORT: typeof atob == "function",
      encodeByteArray(t, e) {
          if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              r = [];
          for (let i = 0; i < t.length; i += 3) {
              const s = t[i],
                  o = i + 1 < t.length,
                  l = o ? t[i + 1] : 0,
                  u = i + 2 < t.length,
                  f = u ? t[i + 2] : 0,
                  p = s >> 2,
                  g = (s & 3) << 4 | l >> 4;
              let w = (l & 15) << 2 | f >> 6,
                  v = f & 63;
              u || (v = 64, o || (w = 64)), r.push(n[p], n[g], n[w], n[v])
          }
          return r.join("")
      },
      encodeString(t, e) {
          return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(Bh(t), e)
      },
      decodeString(t, e) {
          return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : gy(this.decodeStringToByteArray(t, e))
      },
      decodeStringToByteArray(t, e) {
          this.init_();
          const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              r = [];
          for (let i = 0; i < t.length;) {
              const s = n[t.charAt(i++)],
                  l = i < t.length ? n[t.charAt(i)] : 0;
              ++i;
              const f = i < t.length ? n[t.charAt(i)] : 64;
              ++i;
              const g = i < t.length ? n[t.charAt(i)] : 64;
              if (++i, s == null || l == null || f == null || g == null) throw new wy;
              const w = s << 2 | l >> 4;
              if (r.push(w), f !== 64) {
                  const v = l << 4 & 240 | f >> 2;
                  if (r.push(v), g !== 64) {
                      const R = f << 6 & 192 | g;
                      r.push(R)
                  }
              }
          }
          return r
      },
      init_() {
          if (!this.byteToCharMap_) {
              this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
              for (let t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
          }
      }
  };
class wy extends Error {
  constructor() {
      super(...arguments), this.name = "DecodeBase64StringError"
  }
}
const yy = function(t) {
      const e = Bh(t);
      return jh.encodeByteArray(e, !0)
  },
  Yi = function(t) {
      return yy(t).replace(/\./g, "")
  },
  qh = function(t) {
      try {
          return jh.decodeString(t, !0)
      } catch (e) {
          console.error("base64Decode failed: ", e)
      }
      return null
  };
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function _y() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.")
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const vy = () => _y().__FIREBASE_DEFAULTS__,
  Ey = () => {
      if (typeof process > "u" || typeof tu > "u") return;
      const t = tu.__FIREBASE_DEFAULTS__;
      if (t) return JSON.parse(t)
  },
  Iy = () => {
      if (typeof document > "u") return;
      let t;
      try {
          t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
      } catch {
          return
      }
      const e = t && qh(t[1]);
      return e && JSON.parse(e)
  },
  Is = () => {
      try {
          return vy() || Ey() || Iy()
      } catch (t) {
          console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
          return
      }
  },
  $h = t => {
      var e, n;
      return (n = (e = Is()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || n === void 0 ? void 0 : n[t]
  },
  Ty = t => {
      const e = $h(t);
      if (!e) return;
      const n = e.lastIndexOf(":");
      if (n <= 0 || n + 1 === e.length) throw new Error(`Invalid host ${e} with no separate hostname and port!`);
      const r = parseInt(e.substring(n + 1), 10);
      return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r]
  },
  zh = () => {
      var t;
      return (t = Is()) === null || t === void 0 ? void 0 : t.config
  },
  Hh = t => {
      var e;
      return (e = Is()) === null || e === void 0 ? void 0 : e[`_${t}`]
  };
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class by {
  constructor() {
      this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, n) => {
          this.resolve = e, this.reject = n
      })
  }
  wrapCallback(e) {
      return (n, r) => {
          n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r))
      }
  }
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ay(t, e) {
  if (t.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const n = {
          alg: "none",
          type: "JWT"
      },
      r = e || "demo-project",
      i = t.iat || 0,
      s = t.sub || t.user_id;
  if (!s) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign({
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: {
          sign_in_provider: "custom",
          identities: {}
      }
  }, t);
  return [Yi(JSON.stringify(n)), Yi(JSON.stringify(o)), ""].join(".")
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ue() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}

function Sy() {
  return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())
}

function Py() {
  var t;
  const e = (t = Is()) === null || t === void 0 ? void 0 : t.forceEnvironment;
  if (e === "node") return !0;
  if (e === "browser") return !1;
  try {
      return Object.prototype.toString.call(global.process) === "[object process]"
  } catch {
      return !1
  }
}

function Wh() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0
}

function Cy() {
  return typeof navigator == "object" && navigator.product === "ReactNative"
}

function Ry() {
  const t = ue();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
}

function ky() {
  return !Py() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
}

function ka() {
  try {
      return typeof indexedDB == "object"
  } catch {
      return !1
  }
}

function Kh() {
  return new Promise((t, e) => {
      try {
          let n = !0;
          const r = "validate-browser-context-for-indexeddb-analytics-module",
              i = self.indexedDB.open(r);
          i.onsuccess = () => {
              i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0)
          }, i.onupgradeneeded = () => {
              n = !1
          }, i.onerror = () => {
              var s;
              e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "")
          }
      } catch (n) {
          e(n)
      }
  })
}

function Dy() {
  return !(typeof navigator > "u" || !navigator.cookieEnabled)
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Vy = "FirebaseError";
class rt extends Error {
  constructor(e, n, r) {
      super(n), this.code = e, this.customData = r, this.name = Vy, Object.setPrototypeOf(this, rt.prototype), Error.captureStackTrace && Error.captureStackTrace(this, En.prototype.create)
  }
}
class En {
  constructor(e, n, r) {
      this.service = e, this.serviceName = n, this.errors = r
  }
  create(e, ...n) {
      const r = n[0] || {},
          i = `${this.service}/${e}`,
          s = this.errors[e],
          o = s ? Oy(s, r) : "Error",
          l = `${this.serviceName}: ${o} (${i}).`;
      return new rt(i, l, r)
  }
}

function Oy(t, e) {
  return t.replace(Ny, (n, r) => {
      const i = e[r];
      return i != null ? String(i) : `<${r}?>`
  })
}
const Ny = /\{\$([^}]+)}/g;

function xy(t) {
  for (const e in t)
      if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0
}

function Hn(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
      r = Object.keys(e);
  for (const i of n) {
      if (!r.includes(i)) return !1;
      const s = t[i],
          o = e[i];
      if (nu(s) && nu(o)) {
          if (!Hn(s, o)) return !1
      } else if (s !== o) return !1
  }
  for (const i of r)
      if (!n.includes(i)) return !1;
  return !0
}

function nu(t) {
  return t !== null && typeof t == "object"
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ti(t) {
  const e = [];
  for (const [n, r] of Object.entries(t)) Array.isArray(r) ? r.forEach(i => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i))
  }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : ""
}

function Tr(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach(r => {
      if (r) {
          const [i, s] = r.split("=");
          e[decodeURIComponent(i)] = decodeURIComponent(s)
      }
  }), e
}

function br(t) {
  const e = t.indexOf("?");
  if (!e) return "";
  const n = t.indexOf("#", e);
  return t.substring(e, n > 0 ? n : void 0)
}

function Ly(t, e) {
  const n = new My(t, e);
  return n.subscribe.bind(n)
}
class My {
  constructor(e, n) {
      this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => {
          e(this)
      }).catch(r => {
          this.error(r)
      })
  }
  next(e) {
      this.forEachObserver(n => {
          n.next(e)
      })
  }
  error(e) {
      this.forEachObserver(n => {
          n.error(e)
      }), this.close(e)
  }
  complete() {
      this.forEachObserver(e => {
          e.complete()
      }), this.close()
  }
  subscribe(e, n, r) {
      let i;
      if (e === void 0 && n === void 0 && r === void 0) throw new Error("Missing Observer.");
      Fy(e, ["next", "error", "complete"]) ? i = e : i = {
          next: e,
          error: n,
          complete: r
      }, i.next === void 0 && (i.next = Co), i.error === void 0 && (i.error = Co), i.complete === void 0 && (i.complete = Co);
      const s = this.unsubscribeOne.bind(this, this.observers.length);
      return this.finalized && this.task.then(() => {
          try {
              this.finalError ? i.error(this.finalError) : i.complete()
          } catch {}
      }), this.observers.push(i), s
  }
  unsubscribeOne(e) {
      this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
  }
  forEachObserver(e) {
      if (!this.finalized)
          for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e)
  }
  sendOne(e, n) {
      this.task.then(() => {
          if (this.observers !== void 0 && this.observers[e] !== void 0) try {
              n(this.observers[e])
          } catch (r) {
              typeof console < "u" && console.error && console.error(r)
          }
      })
  }
  close(e) {
      this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
          this.observers = void 0, this.onNoObservers = void 0
      }))
  }
}

function Fy(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e)
      if (n in t && typeof t[n] == "function") return !0;
  return !1
}

function Co() {}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Uy = 1e3,
  By = 2,
  jy = 4 * 60 * 60 * 1e3,
  qy = .5;

function ru(t, e = Uy, n = By) {
  const r = e * Math.pow(n, t),
      i = Math.round(qy * r * (Math.random() - .5) * 2);
  return Math.min(jy, r + i)
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function he(t) {
  return t && t._delegate ? t._delegate : t
}
class Ze {
  constructor(e, n, r) {
      this.name = e, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
  }
  setInstantiationMode(e) {
      return this.instantiationMode = e, this
  }
  setMultipleInstances(e) {
      return this.multipleInstances = e, this
  }
  setServiceProps(e) {
      return this.serviceProps = e, this
  }
  setInstanceCreatedCallback(e) {
      return this.onInstanceCreated = e, this
  }
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const nn = "[DEFAULT]";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class $y {
  constructor(e, n) {
      this.name = e, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
  }
  get(e) {
      const n = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(n)) {
          const r = new by;
          if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize()) try {
              const i = this.getOrInitializeService({
                  instanceIdentifier: n
              });
              i && r.resolve(i)
          } catch {}
      }
      return this.instancesDeferred.get(n).promise
  }
  getImmediate(e) {
      var n;
      const r = this.normalizeInstanceIdentifier(e?.identifier),
          i = (n = e?.optional) !== null && n !== void 0 ? n : !1;
      if (this.isInitialized(r) || this.shouldAutoInitialize()) try {
          return this.getOrInitializeService({
              instanceIdentifier: r
          })
      } catch (s) {
          if (i) return null;
          throw s
      } else {
          if (i) return null;
          throw Error(`Service ${this.name} is not available`)
      }
  }
  getComponent() {
      return this.component
  }
  setComponent(e) {
      if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
      if (this.component) throw Error(`Component for ${this.name} has already been provided`);
      if (this.component = e, !!this.shouldAutoInitialize()) {
          if (Hy(e)) try {
              this.getOrInitializeService({
                  instanceIdentifier: nn
              })
          } catch {}
          for (const [n, r] of this.instancesDeferred.entries()) {
              const i = this.normalizeInstanceIdentifier(n);
              try {
                  const s = this.getOrInitializeService({
                      instanceIdentifier: i
                  });
                  r.resolve(s)
              } catch {}
          }
      }
  }
  clearInstance(e = nn) {
      this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
  }
  async delete() {
      const e = Array.from(this.instances.values());
      await Promise.all([...e.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...e.filter(n => "_delete" in n).map(n => n._delete())])
  }
  isComponentSet() {
      return this.component != null
  }
  isInitialized(e = nn) {
      return this.instances.has(e)
  }
  getOptions(e = nn) {
      return this.instancesOptions.get(e) || {}
  }
  initialize(e = {}) {
      const {
          options: n = {}
      } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
      if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
      const i = this.getOrInitializeService({
          instanceIdentifier: r,
          options: n
      });
      for (const [s, o] of this.instancesDeferred.entries()) {
          const l = this.normalizeInstanceIdentifier(s);
          r === l && o.resolve(i)
      }
      return i
  }
  onInit(e, n) {
      var r;
      const i = this.normalizeInstanceIdentifier(n),
          s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
      s.add(e), this.onInitCallbacks.set(i, s);
      const o = this.instances.get(i);
      return o && e(o, i), () => {
          s.delete(e)
      }
  }
  invokeOnInitCallbacks(e, n) {
      const r = this.onInitCallbacks.get(n);
      if (r)
          for (const i of r) try {
              i(e, n)
          } catch {}
  }
  getOrInitializeService({
      instanceIdentifier: e,
      options: n = {}
  }) {
      let r = this.instances.get(e);
      if (!r && this.component && (r = this.component.instanceFactory(this.container, {
              instanceIdentifier: zy(e),
              options: n
          }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, e, r)
      } catch {}
      return r || null
  }
  normalizeInstanceIdentifier(e = nn) {
      return this.component ? this.component.multipleInstances ? e : nn : e
  }
  shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT"
  }
}

function zy(t) {
  return t === nn ? void 0 : t
}

function Hy(t) {
  return t.instantiationMode === "EAGER"
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Wy {
  constructor(e) {
      this.name = e, this.providers = new Map
  }
  addComponent(e) {
      const n = this.getProvider(e.name);
      if (n.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
      n.setComponent(e)
  }
  addOrOverwriteComponent(e) {
      this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
  }
  getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      const n = new $y(e, this);
      return this.providers.set(e, n), n
  }
  getProviders() {
      return Array.from(this.providers.values())
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var j;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
})(j || (j = {}));
const Ky = {
      debug: j.DEBUG,
      verbose: j.VERBOSE,
      info: j.INFO,
      warn: j.WARN,
      error: j.ERROR,
      silent: j.SILENT
  },
  Gy = j.INFO,
  Qy = {
      [j.DEBUG]: "log",
      [j.VERBOSE]: "log",
      [j.INFO]: "info",
      [j.WARN]: "warn",
      [j.ERROR]: "error"
  },
  Jy = (t, e, ...n) => {
      if (e < t.logLevel) return;
      const r = new Date().toISOString(),
          i = Qy[e];
      if (i) console[i](`[${r}]  ${t.name}:`, ...n);
      else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
  };
class Ts {
  constructor(e) {
      this.name = e, this._logLevel = Gy, this._logHandler = Jy, this._userLogHandler = null
  }
  get logLevel() {
      return this._logLevel
  }
  set logLevel(e) {
      if (!(e in j)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
      this._logLevel = e
  }
  setLogLevel(e) {
      this._logLevel = typeof e == "string" ? Ky[e] : e
  }
  get logHandler() {
      return this._logHandler
  }
  set logHandler(e) {
      if (typeof e != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
      this._logHandler = e
  }
  get userLogHandler() {
      return this._userLogHandler
  }
  set userLogHandler(e) {
      this._userLogHandler = e
  }
  debug(...e) {
      this._userLogHandler && this._userLogHandler(this, j.DEBUG, ...e), this._logHandler(this, j.DEBUG, ...e)
  }
  log(...e) {
      this._userLogHandler && this._userLogHandler(this, j.VERBOSE, ...e), this._logHandler(this, j.VERBOSE, ...e)
  }
  info(...e) {
      this._userLogHandler && this._userLogHandler(this, j.INFO, ...e), this._logHandler(this, j.INFO, ...e)
  }
  warn(...e) {
      this._userLogHandler && this._userLogHandler(this, j.WARN, ...e), this._logHandler(this, j.WARN, ...e)
  }
  error(...e) {
      this._userLogHandler && this._userLogHandler(this, j.ERROR, ...e), this._logHandler(this, j.ERROR, ...e)
  }
}
const Yy = (t, e) => e.some(n => t instanceof n);
let iu, su;

function Xy() {
  return iu || (iu = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function Zy() {
  return su || (su = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Gh = new WeakMap,
  Yo = new WeakMap,
  Qh = new WeakMap,
  Ro = new WeakMap,
  Da = new WeakMap;

function e_(t) {
  const e = new Promise((n, r) => {
      const i = () => {
              t.removeEventListener("success", s), t.removeEventListener("error", o)
          },
          s = () => {
              n(Bt(t.result)), i()
          },
          o = () => {
              r(t.error), i()
          };
      t.addEventListener("success", s), t.addEventListener("error", o)
  });
  return e.then(n => {
      n instanceof IDBCursor && Gh.set(n, t)
  }).catch(() => {}), Da.set(e, t), e
}

function t_(t) {
  if (Yo.has(t)) return;
  const e = new Promise((n, r) => {
      const i = () => {
              t.removeEventListener("complete", s), t.removeEventListener("error", o), t.removeEventListener("abort", o)
          },
          s = () => {
              n(), i()
          },
          o = () => {
              r(t.error || new DOMException("AbortError", "AbortError")), i()
          };
      t.addEventListener("complete", s), t.addEventListener("error", o), t.addEventListener("abort", o)
  });
  Yo.set(t, e)
}
let Xo = {
  get(t, e, n) {
      if (t instanceof IDBTransaction) {
          if (e === "done") return Yo.get(t);
          if (e === "objectStoreNames") return t.objectStoreNames || Qh.get(t);
          if (e === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
      }
      return Bt(t[e])
  },
  set(t, e, n) {
      return t[e] = n, !0
  },
  has(t, e) {
      return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t
  }
};

function n_(t) {
  Xo = t(Xo)
}

function r_(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
      const r = t.call(ko(this), e, ...n);
      return Qh.set(r, e.sort ? e.sort() : [e]), Bt(r)
  } : Zy().includes(t) ? function(...e) {
      return t.apply(ko(this), e), Bt(Gh.get(this))
  } : function(...e) {
      return Bt(t.apply(ko(this), e))
  }
}

function i_(t) {
  return typeof t == "function" ? r_(t) : (t instanceof IDBTransaction && t_(t), Yy(t, Xy()) ? new Proxy(t, Xo) : t)
}

function Bt(t) {
  if (t instanceof IDBRequest) return e_(t);
  if (Ro.has(t)) return Ro.get(t);
  const e = i_(t);
  return e !== t && (Ro.set(t, e), Da.set(e, t)), e
}
const ko = t => Da.get(t);

function Jh(t, e, {
  blocked: n,
  upgrade: r,
  blocking: i,
  terminated: s
} = {}) {
  const o = indexedDB.open(t, e),
      l = Bt(o);
  return r && o.addEventListener("upgradeneeded", u => {
      r(Bt(o.result), u.oldVersion, u.newVersion, Bt(o.transaction), u)
  }), n && o.addEventListener("blocked", u => n(u.oldVersion, u.newVersion, u)), l.then(u => {
      s && u.addEventListener("close", () => s()), i && u.addEventListener("versionchange", f => i(f.oldVersion, f.newVersion, f))
  }).catch(() => {}), l
}
const s_ = ["get", "getKey", "getAll", "getAllKeys", "count"],
  o_ = ["put", "add", "delete", "clear"],
  Do = new Map;

function ou(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Do.get(e)) return Do.get(e);
  const n = e.replace(/FromIndex$/, ""),
      r = e !== n,
      i = o_.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || s_.includes(n))) return;
  const s = async function(o, ...l) {
      const u = this.transaction(o, i ? "readwrite" : "readonly");
      let f = u.store;
      return r && (f = f.index(l.shift())), (await Promise.all([f[n](...l), i && u.done]))[0]
  };
  return Do.set(e, s), s
}
n_(t => ({
  ...t,
  get: (e, n, r) => ou(e, n) || t.get(e, n, r),
  has: (e, n) => !!ou(e, n) || t.has(e, n)
}));
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class a_ {
  constructor(e) {
      this.container = e
  }
  getPlatformInfoString() {
      return this.container.getProviders().map(n => {
          if (c_(n)) {
              const r = n.getImmediate();
              return `${r.library}/${r.version}`
          } else return null
      }).filter(n => n).join(" ")
  }
}

function c_(t) {
  const e = t.getComponent();
  return e?.type === "VERSION"
}
const Zo = "@firebase/app",
  au = "0.9.28";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const fn = new Ts("@firebase/app"),
  l_ = "@firebase/app-compat",
  u_ = "@firebase/analytics-compat",
  h_ = "@firebase/analytics",
  d_ = "@firebase/app-check-compat",
  f_ = "@firebase/app-check",
  p_ = "@firebase/auth",
  m_ = "@firebase/auth-compat",
  g_ = "@firebase/database",
  w_ = "@firebase/database-compat",
  y_ = "@firebase/functions",
  __ = "@firebase/functions-compat",
  v_ = "@firebase/installations",
  E_ = "@firebase/installations-compat",
  I_ = "@firebase/messaging",
  T_ = "@firebase/messaging-compat",
  b_ = "@firebase/performance",
  A_ = "@firebase/performance-compat",
  S_ = "@firebase/remote-config",
  P_ = "@firebase/remote-config-compat",
  C_ = "@firebase/storage",
  R_ = "@firebase/storage-compat",
  k_ = "@firebase/firestore",
  D_ = "@firebase/firestore-compat",
  V_ = "firebase",
  O_ = "10.8.1";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const ea = "[DEFAULT]",
  N_ = {
      [Zo]: "fire-core",
      [l_]: "fire-core-compat",
      [h_]: "fire-analytics",
      [u_]: "fire-analytics-compat",
      [f_]: "fire-app-check",
      [d_]: "fire-app-check-compat",
      [p_]: "fire-auth",
      [m_]: "fire-auth-compat",
      [g_]: "fire-rtdb",
      [w_]: "fire-rtdb-compat",
      [y_]: "fire-fn",
      [__]: "fire-fn-compat",
      [v_]: "fire-iid",
      [E_]: "fire-iid-compat",
      [I_]: "fire-fcm",
      [T_]: "fire-fcm-compat",
      [b_]: "fire-perf",
      [A_]: "fire-perf-compat",
      [S_]: "fire-rc",
      [P_]: "fire-rc-compat",
      [C_]: "fire-gcs",
      [R_]: "fire-gcs-compat",
      [k_]: "fire-fst",
      [D_]: "fire-fst-compat",
      "fire-js": "fire-js",
      [V_]: "fire-js-all"
  };
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Xi = new Map,
  ta = new Map;

function x_(t, e) {
  try {
      t.container.addComponent(e)
  } catch (n) {
      fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n)
  }
}

function pt(t) {
  const e = t.name;
  if (ta.has(e)) return fn.debug(`There were multiple attempts to register component ${e}.`), !1;
  ta.set(e, t);
  for (const n of Xi.values()) x_(n, t);
  return !0
}

function In(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({
      optional: !0
  });
  return n && n.triggerHeartbeat(), t.container.getProvider(e)
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const L_ = {
      "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
      "bad-app-name": "Illegal App name: '{$appName}",
      "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "no-options": "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument": "First argument to `onLog` must be null or a function.",
      "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
  },
  jt = new En("app", "Firebase", L_);
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class M_ {
  constructor(e, n, r) {
      this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new Ze("app", () => this, "PUBLIC"))
  }
  get automaticDataCollectionEnabled() {
      return this.checkDestroyed(), this._automaticDataCollectionEnabled
  }
  set automaticDataCollectionEnabled(e) {
      this.checkDestroyed(), this._automaticDataCollectionEnabled = e
  }
  get name() {
      return this.checkDestroyed(), this._name
  }
  get options() {
      return this.checkDestroyed(), this._options
  }
  get config() {
      return this.checkDestroyed(), this._config
  }
  get container() {
      return this._container
  }
  get isDeleted() {
      return this._isDeleted
  }
  set isDeleted(e) {
      this._isDeleted = e
  }
  checkDestroyed() {
      if (this.isDeleted) throw jt.create("app-deleted", {
          appName: this._name
      })
  }
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const nr = O_;

function Yh(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = {
      name: e
  });
  const r = Object.assign({
          name: ea,
          automaticDataCollectionEnabled: !1
      }, e),
      i = r.name;
  if (typeof i != "string" || !i) throw jt.create("bad-app-name", {
      appName: String(i)
  });
  if (n || (n = zh()), !n) throw jt.create("no-options");
  const s = Xi.get(i);
  if (s) {
      if (Hn(n, s.options) && Hn(r, s.config)) return s;
      throw jt.create("duplicate-app", {
          appName: i
      })
  }
  const o = new Wy(i);
  for (const u of ta.values()) o.addComponent(u);
  const l = new M_(n, r, o);
  return Xi.set(i, l), l
}

function Va(t = ea) {
  const e = Xi.get(t);
  if (!e && t === ea && zh()) return Yh();
  if (!e) throw jt.create("no-app", {
      appName: t
  });
  return e
}

function Ke(t, e, n) {
  var r;
  let i = (r = N_[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
      o = e.match(/\s|\//);
  if (s || o) {
      const l = [`Unable to register library "${i}" with version "${e}":`];
      s && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && l.push("and"), o && l.push(`version name "${e}" contains illegal characters (whitespace or "/")`), fn.warn(l.join(" "));
      return
  }
  pt(new Ze(`${i}-version`, () => ({
      library: i,
      version: e
  }), "VERSION"))
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const F_ = "firebase-heartbeat-database",
  U_ = 1,
  Fr = "firebase-heartbeat-store";
let Vo = null;

function Xh() {
  return Vo || (Vo = Jh(F_, U_, {
      upgrade: (t, e) => {
          switch (e) {
              case 0:
                  try {
                      t.createObjectStore(Fr)
                  } catch (n) {
                      console.warn(n)
                  }
          }
      }
  }).catch(t => {
      throw jt.create("idb-open", {
          originalErrorMessage: t.message
      })
  })), Vo
}
async function B_(t) {
  try {
      const n = (await Xh()).transaction(Fr),
          r = await n.objectStore(Fr).get(Zh(t));
      return await n.done, r
  } catch (e) {
      if (e instanceof rt) fn.warn(e.message);
      else {
          const n = jt.create("idb-get", {
              originalErrorMessage: e?.message
          });
          fn.warn(n.message)
      }
  }
}
async function cu(t, e) {
  try {
      const r = (await Xh()).transaction(Fr, "readwrite");
      await r.objectStore(Fr).put(e, Zh(t)), await r.done
  } catch (n) {
      if (n instanceof rt) fn.warn(n.message);
      else {
          const r = jt.create("idb-set", {
              originalErrorMessage: n?.message
          });
          fn.warn(r.message)
      }
  }
}

function Zh(t) {
  return `${t.name}!${t.options.appId}`
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const j_ = 1024,
  q_ = 30 * 24 * 60 * 60 * 1e3;
class $_ {
  constructor(e) {
      this.container = e, this._heartbeatsCache = null;
      const n = this.container.getProvider("app").getImmediate();
      this._storage = new H_(n), this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r))
  }
  async triggerHeartbeat() {
      var e, n;
      const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          s = lu();
      if (!(((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(o => o.date === s))) return this._heartbeatsCache.heartbeats.push({
          date: s,
          agent: i
      }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(o => {
          const l = new Date(o.date).valueOf();
          return Date.now() - l <= q_
      }), this._storage.overwrite(this._heartbeatsCache)
  }
  async getHeartbeatsHeader() {
      var e;
      if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) return "";
      const n = lu(),
          {
              heartbeatsToSend: r,
              unsentEntries: i
          } = z_(this._heartbeatsCache.heartbeats),
          s = Yi(JSON.stringify({
              version: 2,
              heartbeats: r
          }));
      return this._heartbeatsCache.lastSentHeartbeatDate = n, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s
  }
}

function lu() {
  return new Date().toISOString().substring(0, 10)
}

function z_(t, e = j_) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
      const s = n.find(o => o.agent === i.agent);
      if (s) {
          if (s.dates.push(i.date), uu(n) > e) {
              s.dates.pop();
              break
          }
      } else if (n.push({
              agent: i.agent,
              dates: [i.date]
          }), uu(n) > e) {
          n.pop();
          break
      }
      r = r.slice(1)
  }
  return {
      heartbeatsToSend: n,
      unsentEntries: r
  }
}
class H_ {
  constructor(e) {
      this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
  }
  async runIndexedDBEnvironmentCheck() {
      return ka() ? Kh().then(() => !0).catch(() => !1) : !1
  }
  async read() {
      if (await this._canUseIndexedDBPromise) {
          const n = await B_(this.app);
          return n?.heartbeats ? n : {
              heartbeats: []
          }
      } else return {
          heartbeats: []
      }
  }
  async overwrite(e) {
      var n;
      if (await this._canUseIndexedDBPromise) {
          const i = await this.read();
          return cu(this.app, {
              lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
              heartbeats: e.heartbeats
          })
      } else return
  }
  async add(e) {
      var n;
      if (await this._canUseIndexedDBPromise) {
          const i = await this.read();
          return cu(this.app, {
              lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
              heartbeats: [...i.heartbeats, ...e.heartbeats]
          })
      } else return
  }
}

function uu(t) {
  return Yi(JSON.stringify({
      version: 2,
      heartbeats: t
  })).length
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function W_(t) {
  pt(new Ze("platform-logger", e => new a_(e), "PRIVATE")), pt(new Ze("heartbeat", e => new $_(e), "PRIVATE")), Ke(Zo, au, t), Ke(Zo, au, "esm2017"), Ke("fire-js", "")
}
W_("");
var K_ = "firebase",
  G_ = "10.8.1";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
Ke(K_, G_, "app");

function Oa(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n
}

function ed() {
  return {
      "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  }
}
const Q_ = ed,
  td = new En("auth", "Firebase", ed());
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Zi = new Ts("@firebase/auth");

function J_(t, ...e) {
  Zi.logLevel <= j.WARN && Zi.warn(`Auth (${nr}): ${t}`, ...e)
}

function $i(t, ...e) {
  Zi.logLevel <= j.ERROR && Zi.error(`Auth (${nr}): ${t}`, ...e)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ge(t, ...e) {
  throw Na(t, ...e)
}

function ut(t, ...e) {
  return Na(t, ...e)
}

function nd(t, e, n) {
  const r = Object.assign(Object.assign({}, Q_()), {
      [e]: n
  });
  return new En("auth", "Firebase", r).create(e, {
      appName: t.name
  })
}

function Y_(t, e, n) {
  const r = n;
  if (!(e instanceof r)) throw r.name !== e.constructor.name && Ge(t, "argument-error"), nd(t, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}

function Na(t, ...e) {
  if (typeof t != "string") {
      const n = e[0],
          r = [...e.slice(1)];
      return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r)
  }
  return td.create(t, ...e)
}

function D(t, e, ...n) {
  if (!t) throw Na(e, ...n)
}

function Tt(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw $i(e), new Error(e)
}

function St(t, e) {
  t || Tt(e)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function na() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || ""
}

function X_() {
  return hu() === "http:" || hu() === "https:"
}

function hu() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.protocol) || null
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Z_() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (X_() || Wh() || "connection" in navigator) ? navigator.onLine : !0
}

function ev() {
  if (typeof navigator > "u") return null;
  const t = navigator;
  return t.languages && t.languages[0] || t.language || null
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ni {
  constructor(e, n) {
      this.shortDelay = e, this.longDelay = n, St(n > e, "Short delay should be less than long delay!"), this.isMobile = Sy() || Cy()
  }
  get() {
      return Z_() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function xa(t, e) {
  St(t.emulator, "Emulator should always be set here");
  const {
      url: n
  } = t.emulator;
  return e ? `${n}${e.startsWith("/")?e.slice(1):e}` : n
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class rd {
  static initialize(e, n, r) {
      this.fetchImpl = e, n && (this.headersImpl = n), r && (this.responseImpl = r)
  }
  static fetch() {
      if (this.fetchImpl) return this.fetchImpl;
      if (typeof self < "u" && "fetch" in self) return self.fetch;
      if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
      if (typeof fetch < "u") return fetch;
      Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
  }
  static headers() {
      if (this.headersImpl) return this.headersImpl;
      if (typeof self < "u" && "Headers" in self) return self.Headers;
      if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
      if (typeof Headers < "u") return Headers;
      Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
  }
  static response() {
      if (this.responseImpl) return this.responseImpl;
      if (typeof self < "u" && "Response" in self) return self.Response;
      if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
      if (typeof Response < "u") return Response;
      Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const tv = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const nv = new ni(3e4, 6e4);

function Rt(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), {
      tenantId: t.tenantId
  }) : e
}
async function kt(t, e, n, r, i = {}) {
  return id(t, i, async () => {
      let s = {},
          o = {};
      r && (e === "GET" ? o = r : s = {
          body: JSON.stringify(r)
      });
      const l = ti(Object.assign({
              key: t.config.apiKey
          }, o)).slice(1),
          u = await t._getAdditionalHeaders();
      return u["Content-Type"] = "application/json", t.languageCode && (u["X-Firebase-Locale"] = t.languageCode), rd.fetch()(sd(t, t.config.apiHost, n, l), Object.assign({
          method: e,
          headers: u,
          referrerPolicy: "no-referrer"
      }, s))
  })
}
async function id(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, tv), e);
  try {
      const i = new iv(t),
          s = await Promise.race([n(), i.promise]);
      i.clearNetworkTimeout();
      const o = await s.json();
      if ("needConfirmation" in o) throw Ni(t, "account-exists-with-different-credential", o);
      if (s.ok && !("errorMessage" in o)) return o;
      {
          const l = s.ok ? o.errorMessage : o.error.message,
              [u, f] = l.split(" : ");
          if (u === "FEDERATED_USER_ID_ALREADY_LINKED") throw Ni(t, "credential-already-in-use", o);
          if (u === "EMAIL_EXISTS") throw Ni(t, "email-already-in-use", o);
          if (u === "USER_DISABLED") throw Ni(t, "user-disabled", o);
          const p = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
          if (f) throw nd(t, p, f);
          Ge(t, p)
      }
  } catch (i) {
      if (i instanceof rt) throw i;
      Ge(t, "network-request-failed", {
          message: String(i)
      })
  }
}
async function ri(t, e, n, r, i = {}) {
  const s = await kt(t, e, n, r, i);
  return "mfaPendingCredential" in s && Ge(t, "multi-factor-auth-required", {
      _serverResponse: s
  }), s
}

function sd(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? xa(t.config, i) : `${t.config.apiScheme}://${i}`
}

function rv(t) {
  switch (t) {
      case "ENFORCE":
          return "ENFORCE";
      case "AUDIT":
          return "AUDIT";
      case "OFF":
          return "OFF";
      default:
          return "ENFORCEMENT_STATE_UNSPECIFIED"
  }
}
class iv {
  constructor(e) {
      this.auth = e, this.timer = null, this.promise = new Promise((n, r) => {
          this.timer = setTimeout(() => r(ut(this.auth, "network-request-failed")), nv.get())
      })
  }
  clearNetworkTimeout() {
      clearTimeout(this.timer)
  }
}

function Ni(t, e, n) {
  const r = {
      appName: t.name
  };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = ut(t, e, r);
  return i.customData._tokenResponse = n, i
}

function du(t) {
  return t !== void 0 && t.enterprise !== void 0
}
class sv {
  constructor(e) {
      if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0) throw new Error("recaptchaKey undefined");
      this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState
  }
  getProviderEnforcementState(e) {
      if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
      for (const n of this.recaptchaEnforcementState)
          if (n.provider && n.provider === e) return rv(n.enforcementState);
      return null
  }
  isProviderEnabled(e) {
      return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT"
  }
}
async function ov(t, e) {
  return kt(t, "GET", "/v2/recaptchaConfig", Rt(t, e))
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function av(t, e) {
  return kt(t, "POST", "/v1/accounts:delete", e)
}
async function cv(t, e) {
  return kt(t, "POST", "/v1/accounts:lookup", e)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function kr(t) {
  if (t) try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString()
  } catch {}
}
async function lv(t, e = !1) {
  const n = he(t),
      r = await n.getIdToken(e),
      i = La(r);
  D(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
      o = s?.sign_in_provider;
  return {
      claims: i,
      token: r,
      authTime: kr(Oo(i.auth_time)),
      issuedAtTime: kr(Oo(i.iat)),
      expirationTime: kr(Oo(i.exp)),
      signInProvider: o || null,
      signInSecondFactor: s?.sign_in_second_factor || null
  }
}

function Oo(t) {
  return Number(t) * 1e3
}

function La(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0) return $i("JWT malformed, contained fewer than 3 sections"), null;
  try {
      const i = qh(n);
      return i ? JSON.parse(i) : ($i("Failed to decode base64 JWT payload"), null)
  } catch (i) {
      return $i("Caught error parsing JWT payload as JSON", i?.toString()), null
  }
}

function uv(t) {
  const e = La(t);
  return D(e, "internal-error"), D(typeof e.exp < "u", "internal-error"), D(typeof e.iat < "u", "internal-error"), Number(e.exp) - Number(e.iat)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Ur(t, e, n = !1) {
  if (n) return e;
  try {
      return await e
  } catch (r) {
      throw r instanceof rt && hv(r) && t.auth.currentUser === t && await t.auth.signOut(), r
  }
}

function hv({
  code: t
}) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired"
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class dv {
  constructor(e) {
      this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
  }
  _start() {
      this.isRunning || (this.isRunning = !0, this.schedule())
  }
  _stop() {
      this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId))
  }
  getInterval(e) {
      var n;
      if (e) {
          const r = this.errorBackoff;
          return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4), r
      } else {
          this.errorBackoff = 3e4;
          const i = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
          return Math.max(0, i)
      }
  }
  schedule(e = !1) {
      if (!this.isRunning) return;
      const n = this.getInterval(e);
      this.timerId = setTimeout(async () => {
          await this.iteration()
      }, n)
  }
  async iteration() {
      try {
          await this.user.getIdToken(!0)
      } catch (e) {
          e?.code === "auth/network-request-failed" && this.schedule(!0);
          return
      }
      this.schedule()
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class od {
  constructor(e, n) {
      this.createdAt = e, this.lastLoginAt = n, this._initializeTime()
  }
  _initializeTime() {
      this.lastSignInTime = kr(this.lastLoginAt), this.creationTime = kr(this.createdAt)
  }
  _copy(e) {
      this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
  }
  toJSON() {
      return {
          createdAt: this.createdAt,
          lastLoginAt: this.lastLoginAt
      }
  }
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function es(t) {
  var e;
  const n = t.auth,
      r = await t.getIdToken(),
      i = await Ur(t, cv(n, {
          idToken: r
      }));
  D(i?.users.length, n, "internal-error");
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? mv(s.providerUserInfo) : [],
      l = pv(t.providerData, o),
      u = t.isAnonymous,
      f = !(t.email && s.passwordHash) && !l?.length,
      p = u ? f : !1,
      g = {
          uid: s.localId,
          displayName: s.displayName || null,
          photoURL: s.photoUrl || null,
          email: s.email || null,
          emailVerified: s.emailVerified || !1,
          phoneNumber: s.phoneNumber || null,
          tenantId: s.tenantId || null,
          providerData: l,
          metadata: new od(s.createdAt, s.lastLoginAt),
          isAnonymous: p
      };
  Object.assign(t, g)
}
async function fv(t) {
  const e = he(t);
  await es(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e)
}

function pv(t, e) {
  return [...t.filter(r => !e.some(i => i.providerId === r.providerId)), ...e]
}

function mv(t) {
  return t.map(e => {
      var {
          providerId: n
      } = e, r = Oa(e, ["providerId"]);
      return {
          providerId: n,
          uid: r.rawId || "",
          displayName: r.displayName || null,
          email: r.email || null,
          phoneNumber: r.phoneNumber || null,
          photoURL: r.photoUrl || null
      }
  })
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function gv(t, e) {
  const n = await id(t, {}, async () => {
      const r = ti({
              grant_type: "refresh_token",
              refresh_token: e
          }).slice(1),
          {
              tokenApiHost: i,
              apiKey: s
          } = t.config,
          o = sd(t, i, "/v1/token", `key=${s}`),
          l = await t._getAdditionalHeaders();
      return l["Content-Type"] = "application/x-www-form-urlencoded", rd.fetch()(o, {
          method: "POST",
          headers: l,
          body: r
      })
  });
  return {
      accessToken: n.access_token,
      expiresIn: n.expires_in,
      refreshToken: n.refresh_token
  }
}
async function wv(t, e) {
  return kt(t, "POST", "/v2/accounts:revokeToken", Rt(t, e))
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Br {
  constructor() {
      this.refreshToken = null, this.accessToken = null, this.expirationTime = null
  }
  get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4
  }
  updateFromServerResponse(e) {
      D(e.idToken, "internal-error"), D(typeof e.idToken < "u", "internal-error"), D(typeof e.refreshToken < "u", "internal-error");
      const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : uv(e.idToken);
      this.updateTokensAndExpiration(e.idToken, e.refreshToken, n)
  }
  async getToken(e, n = !1) {
      return D(!this.accessToken || this.refreshToken, e, "user-token-expired"), !n && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null
  }
  clearRefreshToken() {
      this.refreshToken = null
  }
  async refresh(e, n) {
      const {
          accessToken: r,
          refreshToken: i,
          expiresIn: s
      } = await gv(e, n);
      this.updateTokensAndExpiration(r, i, Number(s))
  }
  updateTokensAndExpiration(e, n, r) {
      this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3
  }
  static fromJSON(e, n) {
      const {
          refreshToken: r,
          accessToken: i,
          expirationTime: s
      } = n, o = new Br;
      return r && (D(typeof r == "string", "internal-error", {
          appName: e
      }), o.refreshToken = r), i && (D(typeof i == "string", "internal-error", {
          appName: e
      }), o.accessToken = i), s && (D(typeof s == "number", "internal-error", {
          appName: e
      }), o.expirationTime = s), o
  }
  toJSON() {
      return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime
      }
  }
  _assign(e) {
      this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
  }
  _clone() {
      return Object.assign(new Br, this.toJSON())
  }
  _performRefresh() {
      return Tt("not implemented")
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function xt(t, e) {
  D(typeof t == "string" || typeof t > "u", "internal-error", {
      appName: e
  })
}
class hn {
  constructor(e) {
      var {
          uid: n,
          auth: r,
          stsTokenManager: i
      } = e, s = Oa(e, ["uid", "auth", "stsTokenManager"]);
      this.providerId = "firebase", this.proactiveRefresh = new dv(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = n, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new od(s.createdAt || void 0, s.lastLoginAt || void 0)
  }
  async getIdToken(e) {
      const n = await Ur(this, this.stsTokenManager.getToken(this.auth, e));
      return D(n, this.auth, "internal-error"), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n
  }
  getIdTokenResult(e) {
      return lv(this, e)
  }
  reload() {
      return fv(this)
  }
  _assign(e) {
      this !== e && (D(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(n => Object.assign({}, n)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
  }
  _clone(e) {
      const n = new hn(Object.assign(Object.assign({}, this), {
          auth: e,
          stsTokenManager: this.stsTokenManager._clone()
      }));
      return n.metadata._copy(this.metadata), n
  }
  _onReload(e) {
      D(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
  }
  _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
  }
  _startProactiveRefresh() {
      this.proactiveRefresh._start()
  }
  _stopProactiveRefresh() {
      this.proactiveRefresh._stop()
  }
  async _updateTokensIfNecessary(e, n = !1) {
      let r = !1;
      e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), n && await es(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this)
  }
  async delete() {
      const e = await this.getIdToken();
      return await Ur(this, av(this.auth, {
          idToken: e
      })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
  }
  toJSON() {
      return Object.assign(Object.assign({
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map(e => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId
      }, this.metadata.toJSON()), {
          apiKey: this.auth.config.apiKey,
          appName: this.auth.name
      })
  }
  get refreshToken() {
      return this.stsTokenManager.refreshToken || ""
  }
  static _fromJSON(e, n) {
      var r, i, s, o, l, u, f, p;
      const g = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
          w = (i = n.email) !== null && i !== void 0 ? i : void 0,
          v = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
          R = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
          O = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
          C = (u = n._redirectEventId) !== null && u !== void 0 ? u : void 0,
          z = (f = n.createdAt) !== null && f !== void 0 ? f : void 0,
          G = (p = n.lastLoginAt) !== null && p !== void 0 ? p : void 0,
          {
              uid: J,
              emailVerified: de,
              isAnonymous: wt,
              providerData: ze,
              stsTokenManager: yt
          } = n;
      D(J && yt, e, "internal-error");
      const hr = Br.fromJSON(this.name, yt);
      D(typeof J == "string", e, "internal-error"), xt(g, e.name), xt(w, e.name), D(typeof de == "boolean", e, "internal-error"), D(typeof wt == "boolean", e, "internal-error"), xt(v, e.name), xt(R, e.name), xt(O, e.name), xt(C, e.name), xt(z, e.name), xt(G, e.name);
      const _t = new hn({
          uid: J,
          auth: e,
          email: w,
          emailVerified: de,
          displayName: g,
          isAnonymous: wt,
          photoURL: R,
          phoneNumber: v,
          tenantId: O,
          stsTokenManager: hr,
          createdAt: z,
          lastLoginAt: G
      });
      return ze && Array.isArray(ze) && (_t.providerData = ze.map(Cn => Object.assign({}, Cn))), C && (_t._redirectEventId = C), _t
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
      const i = new Br;
      i.updateFromServerResponse(n);
      const s = new hn({
          uid: n.localId,
          auth: e,
          stsTokenManager: i,
          isAnonymous: r
      });
      return await es(s), s
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const fu = new Map;

function bt(t) {
  St(t instanceof Function, "Expected a class definition");
  let e = fu.get(t);
  return e ? (St(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t, fu.set(t, e), e)
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ad {
  constructor() {
      this.type = "NONE", this.storage = {}
  }
  async _isAvailable() {
      return !0
  }
  async _set(e, n) {
      this.storage[e] = n
  }
  async _get(e) {
      const n = this.storage[e];
      return n === void 0 ? null : n
  }
  async _remove(e) {
      delete this.storage[e]
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
ad.type = "NONE";
const pu = ad;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function zi(t, e, n) {
  return `firebase:${t}:${e}:${n}`
}
class Bn {
  constructor(e, n, r) {
      this.persistence = e, this.auth = n, this.userKey = r;
      const {
          config: i,
          name: s
      } = this.auth;
      this.fullUserKey = zi(this.userKey, i.apiKey, s), this.fullPersistenceKey = zi("persistence", i.apiKey, s), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
  }
  setCurrentUser(e) {
      return this.persistence._set(this.fullUserKey, e.toJSON())
  }
  async getCurrentUser() {
      const e = await this.persistence._get(this.fullUserKey);
      return e ? hn._fromJSON(this.auth, e) : null
  }
  removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey)
  }
  savePersistenceForRedirect() {
      return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
  }
  async setPersistence(e) {
      if (this.persistence === e) return;
      const n = await this.getCurrentUser();
      if (await this.removeCurrentUser(), this.persistence = e, n) return this.setCurrentUser(n)
  }
  delete() {
      this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
  }
  static async create(e, n, r = "authUser") {
      if (!n.length) return new Bn(bt(pu), e, r);
      const i = (await Promise.all(n.map(async f => {
          if (await f._isAvailable()) return f
      }))).filter(f => f);
      let s = i[0] || bt(pu);
      const o = zi(r, e.config.apiKey, e.name);
      let l = null;
      for (const f of n) try {
          const p = await f._get(o);
          if (p) {
              const g = hn._fromJSON(e, p);
              f !== s && (l = g), s = f;
              break
          }
      } catch {}
      const u = i.filter(f => f._shouldAllowMigration);
      return !s._shouldAllowMigration || !u.length ? new Bn(s, e, r) : (s = u[0], l && await s._set(o, l.toJSON()), await Promise.all(n.map(async f => {
          if (f !== s) try {
              await f._remove(o)
          } catch {}
      })), new Bn(s, e, r))
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function mu(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/")) return "Opera";
  if (ud(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (cd(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (dd(e)) return "Blackberry";
  if (fd(e)) return "Webos";
  if (Ma(e)) return "Safari";
  if ((e.includes("chrome/") || ld(e)) && !e.includes("edge/")) return "Chrome";
  if (hd(e)) return "Android";
  {
      const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
          r = t.match(n);
      if (r?.length === 2) return r[1]
  }
  return "Other"
}

function cd(t = ue()) {
  return /firefox\//i.test(t)
}

function Ma(t = ue()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
}

function ld(t = ue()) {
  return /crios\//i.test(t)
}

function ud(t = ue()) {
  return /iemobile/i.test(t)
}

function hd(t = ue()) {
  return /android/i.test(t)
}

function dd(t = ue()) {
  return /blackberry/i.test(t)
}

function fd(t = ue()) {
  return /webos/i.test(t)
}

function bs(t = ue()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t)
}

function yv(t = ue()) {
  var e;
  return bs(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
}

function _v() {
  return Ry() && document.documentMode === 10
}

function pd(t = ue()) {
  return bs(t) || hd(t) || fd(t) || dd(t) || /windows phone/i.test(t) || ud(t)
}

function vv() {
  try {
      return !!(window && window !== window.top)
  } catch {
      return !1
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function md(t, e = []) {
  let n;
  switch (t) {
      case "Browser":
          n = mu(ue());
          break;
      case "Worker":
          n = `${mu(ue())}-${t}`;
          break;
      default:
          n = t
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${nr}/${r}`
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ev {
  constructor(e) {
      this.auth = e, this.queue = []
  }
  pushCallback(e, n) {
      const r = s => new Promise((o, l) => {
          try {
              const u = e(s);
              o(u)
          } catch (u) {
              l(u)
          }
      });
      r.onAbort = n, this.queue.push(r);
      const i = this.queue.length - 1;
      return () => {
          this.queue[i] = () => Promise.resolve()
      }
  }
  async runMiddleware(e) {
      if (this.auth.currentUser === e) return;
      const n = [];
      try {
          for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort)
      } catch (r) {
          n.reverse();
          for (const i of n) try {
              i()
          } catch {}
          throw this.auth._errorFactory.create("login-blocked", {
              originalMessage: r?.message
          })
      }
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Iv(t, e = {}) {
  return kt(t, "GET", "/v2/passwordPolicy", Rt(t, e))
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Tv = 6;
class bv {
  constructor(e) {
      var n, r, i, s;
      const o = e.customStrengthOptions;
      this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (n = o.minPasswordLength) !== null && n !== void 0 ? n : Tv, o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength), o.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter), o.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter), o.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter), o.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (r = e.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1, this.schemaVersion = e.schemaVersion
  }
  validatePassword(e) {
      var n, r, i, s, o, l;
      const u = {
          isValid: !0,
          passwordPolicy: this
      };
      return this.validatePasswordLengthOptions(e, u), this.validatePasswordCharacterOptions(e, u), u.isValid && (u.isValid = (n = u.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0), u.isValid && (u.isValid = (r = u.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0), u.isValid && (u.isValid = (i = u.containsLowercaseLetter) !== null && i !== void 0 ? i : !0), u.isValid && (u.isValid = (s = u.containsUppercaseLetter) !== null && s !== void 0 ? s : !0), u.isValid && (u.isValid = (o = u.containsNumericCharacter) !== null && o !== void 0 ? o : !0), u.isValid && (u.isValid = (l = u.containsNonAlphanumericCharacter) !== null && l !== void 0 ? l : !0), u
  }
  validatePasswordLengthOptions(e, n) {
      const r = this.customStrengthOptions.minPasswordLength,
          i = this.customStrengthOptions.maxPasswordLength;
      r && (n.meetsMinPasswordLength = e.length >= r), i && (n.meetsMaxPasswordLength = e.length <= i)
  }
  validatePasswordCharacterOptions(e, n) {
      this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
      let r;
      for (let i = 0; i < e.length; i++) r = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(n, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r))
  }
  updatePasswordCharacterOptionsStatuses(e, n, r, i, s) {
      this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s))
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Av {
  constructor(e, n, r, i) {
      this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new gu(this), this.idTokenSubscription = new gu(this), this.beforeStateQueue = new Ev(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = td, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
          appVerificationDisabledForTesting: !1
      }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion
  }
  _initializeWithPersistence(e, n) {
      return n && (this._popupRedirectResolver = bt(n)), this._initializationPromise = this.queue(async () => {
          var r, i;
          if (!this._deleted && (this.persistenceManager = await Bn.create(this, e), !this._deleted)) {
              if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
              } catch {}
              await this.initializeCurrentUser(n), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0)
          }
      }), this._initializationPromise
  }
  async _onStorageEvent() {
      if (this._deleted) return;
      const e = await this.assertedPersistence.getCurrentUser();
      if (!(!this.currentUser && !e)) {
          if (this.currentUser && e && this.currentUser.uid === e.uid) {
              this._currentUser._assign(e), await this.currentUser.getIdToken();
              return
          }
          await this._updateCurrentUser(e, !0)
      }
  }
  async initializeCurrentUser(e) {
      var n;
      const r = await this.assertedPersistence.getCurrentUser();
      let i = r,
          s = !1;
      if (e && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const o = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId,
              l = i?._redirectEventId,
              u = await this.tryRedirectSignIn(e);
          (!o || o === l) && u?.user && (i = u.user, s = !0)
      }
      if (!i) return this.directlySetCurrentUser(null);
      if (!i._redirectEventId) {
          if (s) try {
              await this.beforeStateQueue.runMiddleware(i)
          } catch (o) {
              i = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o))
          }
          return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
      }
      return D(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
  }
  async tryRedirectSignIn(e) {
      let n = null;
      try {
          n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
      } catch {
          await this._setRedirectUser(null)
      }
      return n
  }
  async reloadAndSetCurrentUserOrClear(e) {
      try {
          await es(e)
      } catch (n) {
          if (n?.code !== "auth/network-request-failed") return this.directlySetCurrentUser(null)
      }
      return this.directlySetCurrentUser(e)
  }
  useDeviceLanguage() {
      this.languageCode = ev()
  }
  async _delete() {
      this._deleted = !0
  }
  async updateCurrentUser(e) {
      const n = e ? he(e) : null;
      return n && D(n.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(n && n._clone(this))
  }
  async _updateCurrentUser(e, n = !1) {
      if (!this._deleted) return e && D(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), n || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners()
      })
  }
  async signOut() {
      return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
  }
  setPersistence(e) {
      return this.queue(async () => {
          await this.assertedPersistence.setPersistence(bt(e))
      })
  }
  _getRecaptchaConfig() {
      return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
  }
  async validatePassword(e) {
      this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
      const n = this._getPasswordPolicyInternal();
      return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : n.validatePassword(e)
  }
  _getPasswordPolicyInternal() {
      return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
  }
  async _updatePasswordPolicy() {
      const e = await Iv(this),
          n = new bv(e);
      this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n
  }
  _getPersistence() {
      return this.assertedPersistence.persistence.type
  }
  _updateErrorMap(e) {
      this._errorFactory = new En("auth", "Firebase", e())
  }
  onAuthStateChanged(e, n, r) {
      return this.registerStateListener(this.authStateSubscription, e, n, r)
  }
  beforeAuthStateChanged(e, n) {
      return this.beforeStateQueue.pushCallback(e, n)
  }
  onIdTokenChanged(e, n, r) {
      return this.registerStateListener(this.idTokenSubscription, e, n, r)
  }
  authStateReady() {
      return new Promise((e, n) => {
          if (this.currentUser) e();
          else {
              const r = this.onAuthStateChanged(() => {
                  r(), e()
              }, n)
          }
      })
  }
  async revokeAccessToken(e) {
      if (this.currentUser) {
          const n = await this.currentUser.getIdToken(),
              r = {
                  providerId: "apple.com",
                  tokenType: "ACCESS_TOKEN",
                  token: e,
                  idToken: n
              };
          this.tenantId != null && (r.tenantId = this.tenantId), await wv(this, r)
      }
  }
  toJSON() {
      var e;
      return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
      }
  }
  async _setRedirectUser(e, n) {
      const r = await this.getOrInitRedirectPersistenceManager(n);
      return e === null ? r.removeCurrentUser() : r.setCurrentUser(e)
  }
  async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
          const n = e && bt(e) || this._popupRedirectResolver;
          D(n, this, "argument-error"), this.redirectPersistenceManager = await Bn.create(this, [bt(n._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
      }
      return this.redirectPersistenceManager
  }
  async _redirectUserForId(e) {
      var n, r;
      return this._isInitialized && await this.queue(async () => {}), ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null
  }
  async _persistUserIfCurrent(e) {
      if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
  }
  _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners()
  }
  _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
  }
  _startProactiveRefresh() {
      this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
  }
  _stopProactiveRefresh() {
      this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
  }
  get _currentUser() {
      return this.currentUser
  }
  notifyAuthListeners() {
      var e, n;
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      const r = (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && n !== void 0 ? n : null;
      this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser))
  }
  registerStateListener(e, n, r, i) {
      if (this._deleted) return () => {};
      const s = typeof n == "function" ? n : n.next.bind(n);
      let o = !1;
      const l = this._isInitialized ? Promise.resolve() : this._initializationPromise;
      if (D(l, this, "internal-error"), l.then(() => {
              o || s(this.currentUser)
          }), typeof n == "function") {
          const u = e.addObserver(n, r, i);
          return () => {
              o = !0, u()
          }
      } else {
          const u = e.addObserver(n);
          return () => {
              o = !0, u()
          }
      }
  }
  async directlySetCurrentUser(e) {
      this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
  }
  queue(e) {
      return this.operations = this.operations.then(e, e), this.operations
  }
  get assertedPersistence() {
      return D(this.persistenceManager, this, "internal-error"), this.persistenceManager
  }
  _logFramework(e) {
      !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = md(this.config.clientPlatform, this._getFrameworks()))
  }
  _getFrameworks() {
      return this.frameworks
  }
  async _getAdditionalHeaders() {
      var e;
      const n = {
          "X-Client-Version": this.clientVersion
      };
      this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
      const r = await ((e = this.heartbeatServiceProvider.getImmediate({
          optional: !0
      })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
      r && (n["X-Firebase-Client"] = r);
      const i = await this._getAppCheckToken();
      return i && (n["X-Firebase-AppCheck"] = i), n
  }
  async _getAppCheckToken() {
      var e;
      const n = await ((e = this.appCheckServiceProvider.getImmediate({
          optional: !0
      })) === null || e === void 0 ? void 0 : e.getToken());
      return n?.error && J_(`Error while retrieving App Check token: ${n.error}`), n?.token
  }
}

function Dt(t) {
  return he(t)
}
class gu {
  constructor(e) {
      this.auth = e, this.observer = null, this.addObserver = Ly(n => this.observer = n)
  }
  get next() {
      return D(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let As = {
  async loadJS() {
      throw new Error("Unable to load external scripts")
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};

function Sv(t) {
  As = t
}

function gd(t) {
  return As.loadJS(t)
}

function Pv() {
  return As.recaptchaEnterpriseScript
}

function Cv() {
  return As.gapiScript
}

function Rv(t) {
  return `__${t}${Math.floor(Math.random()*1e6)}`
}
const kv = "recaptcha-enterprise",
  Dv = "NO_RECAPTCHA";
class Vv {
  constructor(e) {
      this.type = kv, this.auth = Dt(e)
  }
  async verify(e = "verify", n = !1) {
      async function r(s) {
          if (!n) {
              if (s.tenantId == null && s._agentRecaptchaConfig != null) return s._agentRecaptchaConfig.siteKey;
              if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0) return s._tenantRecaptchaConfigs[s.tenantId].siteKey
          }
          return new Promise(async (o, l) => {
              ov(s, {
                  clientType: "CLIENT_TYPE_WEB",
                  version: "RECAPTCHA_ENTERPRISE"
              }).then(u => {
                  if (u.recaptchaKey === void 0) l(new Error("recaptcha Enterprise site key undefined"));
                  else {
                      const f = new sv(u);
                      return s.tenantId == null ? s._agentRecaptchaConfig = f : s._tenantRecaptchaConfigs[s.tenantId] = f, o(f.siteKey)
                  }
              }).catch(u => {
                  l(u)
              })
          })
      }

      function i(s, o, l) {
          const u = window.grecaptcha;
          du(u) ? u.enterprise.ready(() => {
              u.enterprise.execute(s, {
                  action: e
              }).then(f => {
                  o(f)
              }).catch(() => {
                  o(Dv)
              })
          }) : l(Error("No reCAPTCHA enterprise script loaded."))
      }
      return new Promise((s, o) => {
          r(this.auth).then(l => {
              if (!n && du(window.grecaptcha)) i(l, s, o);
              else {
                  if (typeof window > "u") {
                      o(new Error("RecaptchaVerifier is only supported in browser"));
                      return
                  }
                  let u = Pv();
                  u.length !== 0 && (u += l), gd(u).then(() => {
                      i(l, s, o)
                  }).catch(f => {
                      o(f)
                  })
              }
          }).catch(l => {
              o(l)
          })
      })
  }
}
async function wu(t, e, n, r = !1) {
  const i = new Vv(t);
  let s;
  try {
      s = await i.verify(n)
  } catch {
      s = await i.verify(n, !0)
  }
  const o = Object.assign({}, e);
  return r ? Object.assign(o, {
      captchaResp: s
  }) : Object.assign(o, {
      captchaResponse: s
  }), Object.assign(o, {
      clientType: "CLIENT_TYPE_WEB"
  }), Object.assign(o, {
      recaptchaVersion: "RECAPTCHA_ENTERPRISE"
  }), o
}
async function ts(t, e, n, r) {
  var i;
  if (!((i = t._getRecaptchaConfig()) === null || i === void 0) && i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
      const s = await wu(t, e, n, n === "getOobCode");
      return r(t, s)
  } else return r(t, e).catch(async s => {
      if (s.code === "auth/missing-recaptcha-token") {
          console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const o = await wu(t, e, n, n === "getOobCode");
          return r(t, o)
      } else return Promise.reject(s)
  })
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ov(t, e) {
  const n = In(t, "auth");
  if (n.isInitialized()) {
      const i = n.getImmediate(),
          s = n.getOptions();
      if (Hn(s, e ?? {})) return i;
      Ge(i, "already-initialized")
  }
  return n.initialize({
      options: e
  })
}

function Nv(t, e) {
  const n = e?.persistence || [],
      r = (Array.isArray(n) ? n : [n]).map(bt);
  e?.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(r, e?.popupRedirectResolver)
}

function xv(t, e, n) {
  const r = Dt(t);
  D(r._canInitEmulator, r, "emulator-config-failed"), D(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
  const i = !!n?.disableWarnings,
      s = wd(e),
      {
          host: o,
          port: l
      } = Lv(e),
      u = l === null ? "" : `:${l}`;
  r.config.emulator = {
      url: `${s}//${o}${u}/`
  }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(":", ""),
      options: Object.freeze({
          disableWarnings: i
      })
  }), i || Mv()
}

function wd(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1)
}

function Lv(t) {
  const e = wd(t),
      n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return {
      host: "",
      port: null
  };
  const r = n[2].split("@").pop() || "",
      i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
      const s = i[1];
      return {
          host: s,
          port: yu(r.substr(s.length + 1))
      }
  } else {
      const [s, o] = r.split(":");
      return {
          host: s,
          port: yu(o)
      }
  }
}

function yu(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e
}

function Mv() {
  function t() {
      const e = document.createElement("p"),
          n = e.style;
      e.innerText = "Running in emulator mode. Do not use with production credentials.", n.position = "fixed", n.width = "100%", n.backgroundColor = "#ffffff", n.border = ".1em solid #000000", n.color = "#b50000", n.bottom = "0px", n.left = "0px", n.margin = "0px", n.zIndex = "10000", n.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", t) : t())
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Fa {
  constructor(e, n) {
      this.providerId = e, this.signInMethod = n
  }
  toJSON() {
      return Tt("not implemented")
  }
  _getIdTokenResponse(e) {
      return Tt("not implemented")
  }
  _linkToIdToken(e, n) {
      return Tt("not implemented")
  }
  _getReauthenticationResolver(e) {
      return Tt("not implemented")
  }
}
async function Fv(t, e) {
  return kt(t, "POST", "/v1/accounts:signUp", e)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Uv(t, e) {
  return ri(t, "POST", "/v1/accounts:signInWithPassword", Rt(t, e))
}
async function yd(t, e) {
  return kt(t, "POST", "/v1/accounts:sendOobCode", Rt(t, e))
}
async function Bv(t, e) {
  return yd(t, e)
}
async function jv(t, e) {
  return yd(t, e)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function qv(t, e) {
  return ri(t, "POST", "/v1/accounts:signInWithEmailLink", Rt(t, e))
}
async function $v(t, e) {
  return ri(t, "POST", "/v1/accounts:signInWithEmailLink", Rt(t, e))
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class jr extends Fa {
  constructor(e, n, r, i = null) {
      super("password", r), this._email = e, this._password = n, this._tenantId = i
  }
  static _fromEmailAndPassword(e, n) {
      return new jr(e, n, "password")
  }
  static _fromEmailAndCode(e, n, r = null) {
      return new jr(e, n, "emailLink", r)
  }
  toJSON() {
      return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId
      }
  }
  static fromJSON(e) {
      const n = typeof e == "string" ? JSON.parse(e) : e;
      if (n?.email && n?.password) {
          if (n.signInMethod === "password") return this._fromEmailAndPassword(n.email, n.password);
          if (n.signInMethod === "emailLink") return this._fromEmailAndCode(n.email, n.password, n.tenantId)
      }
      return null
  }
  async _getIdTokenResponse(e) {
      switch (this.signInMethod) {
          case "password":
              const n = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
              };
              return ts(e, n, "signInWithPassword", Uv);
          case "emailLink":
              return qv(e, {
                  email: this._email,
                  oobCode: this._password
              });
          default:
              Ge(e, "internal-error")
      }
  }
  async _linkToIdToken(e, n) {
      switch (this.signInMethod) {
          case "password":
              const r = {
                  idToken: n,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
              };
              return ts(e, r, "signUpPassword", Fv);
          case "emailLink":
              return $v(e, {
                  idToken: n,
                  email: this._email,
                  oobCode: this._password
              });
          default:
              Ge(e, "internal-error")
      }
  }
  _getReauthenticationResolver(e) {
      return this._getIdTokenResponse(e)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function jn(t, e) {
  return ri(t, "POST", "/v1/accounts:signInWithIdp", Rt(t, e))
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const zv = "http://localhost";
class pn extends Fa {
  constructor() {
      super(...arguments), this.pendingToken = null
  }
  static _fromParams(e) {
      const n = new pn(e.providerId, e.signInMethod);
      return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : Ge("argument-error"), n
  }
  toJSON() {
      return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod
      }
  }
  static fromJSON(e) {
      const n = typeof e == "string" ? JSON.parse(e) : e,
          {
              providerId: r,
              signInMethod: i
          } = n,
          s = Oa(n, ["providerId", "signInMethod"]);
      if (!r || !i) return null;
      const o = new pn(r, i);
      return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o
  }
  _getIdTokenResponse(e) {
      const n = this.buildRequest();
      return jn(e, n)
  }
  _linkToIdToken(e, n) {
      const r = this.buildRequest();
      return r.idToken = n, jn(e, r)
  }
  _getReauthenticationResolver(e) {
      const n = this.buildRequest();
      return n.autoCreate = !1, jn(e, n)
  }
  buildRequest() {
      const e = {
          requestUri: zv,
          returnSecureToken: !0
      };
      if (this.pendingToken) e.pendingToken = this.pendingToken;
      else {
          const n = {};
          this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = ti(n)
      }
      return e
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Hv(t) {
  switch (t) {
      case "recoverEmail":
          return "RECOVER_EMAIL";
      case "resetPassword":
          return "PASSWORD_RESET";
      case "signIn":
          return "EMAIL_SIGNIN";
      case "verifyEmail":
          return "VERIFY_EMAIL";
      case "verifyAndChangeEmail":
          return "VERIFY_AND_CHANGE_EMAIL";
      case "revertSecondFactorAddition":
          return "REVERT_SECOND_FACTOR_ADDITION";
      default:
          return null
  }
}

function Wv(t) {
  const e = Tr(br(t)).link,
      n = e ? Tr(br(e)).deep_link_id : null,
      r = Tr(br(t)).deep_link_id;
  return (r ? Tr(br(r)).link : null) || r || n || e || t
}
class Ua {
  constructor(e) {
      var n, r, i, s, o, l;
      const u = Tr(br(e)),
          f = (n = u.apiKey) !== null && n !== void 0 ? n : null,
          p = (r = u.oobCode) !== null && r !== void 0 ? r : null,
          g = Hv((i = u.mode) !== null && i !== void 0 ? i : null);
      D(f && p && g, "argument-error"), this.apiKey = f, this.operation = g, this.code = p, this.continueUrl = (s = u.continueUrl) !== null && s !== void 0 ? s : null, this.languageCode = (o = u.languageCode) !== null && o !== void 0 ? o : null, this.tenantId = (l = u.tenantId) !== null && l !== void 0 ? l : null
  }
  static parseLink(e) {
      const n = Wv(e);
      try {
          return new Ua(n)
      } catch {
          return null
      }
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class rr {
  constructor() {
      this.providerId = rr.PROVIDER_ID
  }
  static credential(e, n) {
      return jr._fromEmailAndPassword(e, n)
  }
  static credentialWithLink(e, n) {
      const r = Ua.parseLink(n);
      return D(r, "argument-error"), jr._fromEmailAndCode(e, r.code, r.tenantId)
  }
}
rr.PROVIDER_ID = "password";
rr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
rr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ba {
  constructor(e) {
      this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
  }
  setDefaultLanguage(e) {
      this.defaultLanguageCode = e
  }
  setCustomParameters(e) {
      return this.customParameters = e, this
  }
  getCustomParameters() {
      return this.customParameters
  }
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ii extends Ba {
  constructor() {
      super(...arguments), this.scopes = []
  }
  addScope(e) {
      return this.scopes.includes(e) || this.scopes.push(e), this
  }
  getScopes() {
      return [...this.scopes]
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Et extends ii {
  constructor() {
      super("facebook.com")
  }
  static credential(e) {
      return pn._fromParams({
          providerId: Et.PROVIDER_ID,
          signInMethod: Et.FACEBOOK_SIGN_IN_METHOD,
          accessToken: e
      })
  }
  static credentialFromResult(e) {
      return Et.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
      return Et.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({
      _tokenResponse: e
  }) {
      if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
      try {
          return Et.credential(e.oauthAccessToken)
      } catch {
          return null
      }
  }
}
Et.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Et.PROVIDER_ID = "facebook.com";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class It extends ii {
  constructor() {
      super("google.com"), this.addScope("profile")
  }
  static credential(e, n) {
      return pn._fromParams({
          providerId: It.PROVIDER_ID,
          signInMethod: It.GOOGLE_SIGN_IN_METHOD,
          idToken: e,
          accessToken: n
      })
  }
  static credentialFromResult(e) {
      return It.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
      return It.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({
      _tokenResponse: e
  }) {
      if (!e) return null;
      const {
          oauthIdToken: n,
          oauthAccessToken: r
      } = e;
      if (!n && !r) return null;
      try {
          return It.credential(n, r)
      } catch {
          return null
      }
  }
}
It.GOOGLE_SIGN_IN_METHOD = "google.com";
It.PROVIDER_ID = "google.com";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Lt extends ii {
  constructor() {
      super("github.com")
  }
  static credential(e) {
      return pn._fromParams({
          providerId: Lt.PROVIDER_ID,
          signInMethod: Lt.GITHUB_SIGN_IN_METHOD,
          accessToken: e
      })
  }
  static credentialFromResult(e) {
      return Lt.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
      return Lt.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({
      _tokenResponse: e
  }) {
      if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
      try {
          return Lt.credential(e.oauthAccessToken)
      } catch {
          return null
      }
  }
}
Lt.GITHUB_SIGN_IN_METHOD = "github.com";
Lt.PROVIDER_ID = "github.com";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Mt extends ii {
  constructor() {
      super("twitter.com")
  }
  static credential(e, n) {
      return pn._fromParams({
          providerId: Mt.PROVIDER_ID,
          signInMethod: Mt.TWITTER_SIGN_IN_METHOD,
          oauthToken: e,
          oauthTokenSecret: n
      })
  }
  static credentialFromResult(e) {
      return Mt.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
      return Mt.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({
      _tokenResponse: e
  }) {
      if (!e) return null;
      const {
          oauthAccessToken: n,
          oauthTokenSecret: r
      } = e;
      if (!n || !r) return null;
      try {
          return Mt.credential(n, r)
      } catch {
          return null
      }
  }
}
Mt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Mt.PROVIDER_ID = "twitter.com";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Kv(t, e) {
  return ri(t, "POST", "/v1/accounts:signUp", Rt(t, e))
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class mn {
  constructor(e) {
      this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
      const s = await hn._fromIdTokenResponse(e, r, i),
          o = _u(r);
      return new mn({
          user: s,
          providerId: o,
          _tokenResponse: r,
          operationType: n
      })
  }
  static async _forOperation(e, n, r) {
      await e._updateTokensIfNecessary(r, !0);
      const i = _u(r);
      return new mn({
          user: e,
          providerId: i,
          _tokenResponse: r,
          operationType: n
      })
  }
}

function _u(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ns extends rt {
  constructor(e, n, r, i) {
      var s;
      super(n.code, n.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, ns.prototype), this.customData = {
          appName: e.name,
          tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
          _serverResponse: n.customData._serverResponse,
          operationType: r
      }
  }
  static _fromErrorAndOperation(e, n, r, i) {
      return new ns(e, n, r, i)
  }
}

function _d(t, e, n, r) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch(s => {
      throw s.code === "auth/multi-factor-auth-required" ? ns._fromErrorAndOperation(t, s, e, r) : s
  })
}
async function Gv(t, e, n = !1) {
  const r = await Ur(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return mn._forOperation(t, "link", r)
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Qv(t, e, n = !1) {
  const {
      auth: r
  } = t, i = "reauthenticate";
  try {
      const s = await Ur(t, _d(r, i, e, t), n);
      D(s.idToken, r, "internal-error");
      const o = La(s.idToken);
      D(o, r, "internal-error");
      const {
          sub: l
      } = o;
      return D(t.uid === l, r, "user-mismatch"), mn._forOperation(t, i, s)
  } catch (s) {
      throw s?.code === "auth/user-not-found" && Ge(r, "user-mismatch"), s
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function vd(t, e, n = !1) {
  const r = "signIn",
      i = await _d(t, r, e),
      s = await mn._fromIdTokenResponse(t, r, i);
  return n || await t._updateCurrentUser(s.user), s
}
async function Jv(t, e) {
  return vd(Dt(t), e)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ed(t, e, n) {
  var r;
  D(((r = n.url) === null || r === void 0 ? void 0 : r.length) > 0, t, "invalid-continue-uri"), D(typeof n.dynamicLinkDomain > "u" || n.dynamicLinkDomain.length > 0, t, "invalid-dynamic-link-domain"), e.continueUrl = n.url, e.dynamicLinkDomain = n.dynamicLinkDomain, e.canHandleCodeInApp = n.handleCodeInApp, n.iOS && (D(n.iOS.bundleId.length > 0, t, "missing-ios-bundle-id"), e.iOSBundleId = n.iOS.bundleId), n.android && (D(n.android.packageName.length > 0, t, "missing-android-pkg-name"), e.androidInstallApp = n.android.installApp, e.androidMinimumVersionCode = n.android.minimumVersion, e.androidPackageName = n.android.packageName)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Id(t) {
  const e = Dt(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy()
}
async function Yv(t, e, n) {
  const r = Dt(t),
      i = {
          requestType: "PASSWORD_RESET",
          email: e,
          clientType: "CLIENT_TYPE_WEB"
      };
  n && Ed(r, i, n), await ts(r, i, "getOobCode", jv)
}
async function Xv(t, e, n) {
  const r = Dt(t),
      o = await ts(r, {
          returnSecureToken: !0,
          email: e,
          password: n,
          clientType: "CLIENT_TYPE_WEB"
      }, "signUpPassword", Kv).catch(u => {
          throw u.code === "auth/password-does-not-meet-requirements" && Id(t), u
      }),
      l = await mn._fromIdTokenResponse(r, "signIn", o);
  return await r._updateCurrentUser(l.user), l
}

function Zv(t, e, n) {
  return Jv(he(t), rr.credential(e, n)).catch(async r => {
      throw r.code === "auth/password-does-not-meet-requirements" && Id(t), r
  })
}
async function eE(t, e) {
  const n = he(t),
      i = {
          requestType: "VERIFY_EMAIL",
          idToken: await t.getIdToken()
      };
  e && Ed(n.auth, i, e);
  const {
      email: s
  } = await Bv(n.auth, i);
  s !== t.email && await t.reload()
}

function tE(t, e, n, r) {
  return he(t).onIdTokenChanged(e, n, r)
}

function nE(t, e, n) {
  return he(t).beforeAuthStateChanged(e, n)
}

function rE(t) {
  return he(t).signOut()
}
const rs = "__sak";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Td {
  constructor(e, n) {
      this.storageRetriever = e, this.type = n
  }
  _isAvailable() {
      try {
          return this.storage ? (this.storage.setItem(rs, "1"), this.storage.removeItem(rs), Promise.resolve(!0)) : Promise.resolve(!1)
      } catch {
          return Promise.resolve(!1)
      }
  }
  _set(e, n) {
      return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve()
  }
  _get(e) {
      const n = this.storage.getItem(e);
      return Promise.resolve(n ? JSON.parse(n) : null)
  }
  _remove(e) {
      return this.storage.removeItem(e), Promise.resolve()
  }
  get storage() {
      return this.storageRetriever()
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function iE() {
  const t = ue();
  return Ma(t) || bs(t)
}
const sE = 1e3,
  oE = 10;
class bd extends Td {
  constructor() {
      super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = iE() && vv(), this.fallbackToPolling = pd(), this._shouldAllowMigration = !0
  }
  forAllChangedKeys(e) {
      for (const n of Object.keys(this.listeners)) {
          const r = this.storage.getItem(n),
              i = this.localCache[n];
          r !== i && e(n, i, r)
      }
  }
  onStorageEvent(e, n = !1) {
      if (!e.key) {
          this.forAllChangedKeys((o, l, u) => {
              this.notifyListeners(o, u)
          });
          return
      }
      const r = e.key;
      if (n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
          const o = this.storage.getItem(r);
          if (e.newValue !== o) e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
          else if (this.localCache[r] === e.newValue && !n) return
      }
      const i = () => {
              const o = this.storage.getItem(r);
              !n && this.localCache[r] === o || this.notifyListeners(r, o)
          },
          s = this.storage.getItem(r);
      _v() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, oE) : i()
  }
  notifyListeners(e, n) {
      this.localCache[e] = n;
      const r = this.listeners[e];
      if (r)
          for (const i of Array.from(r)) i(n && JSON.parse(n))
  }
  startPolling() {
      this.stopPolling(), this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, n, r) => {
              this.onStorageEvent(new StorageEvent("storage", {
                  key: e,
                  oldValue: n,
                  newValue: r
              }), !0)
          })
      }, sE)
  }
  stopPolling() {
      this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
  }
  attachListener() {
      window.addEventListener("storage", this.boundEventHandler)
  }
  detachListener() {
      window.removeEventListener("storage", this.boundEventHandler)
  }
  _addListener(e, n) {
      Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(n)
  }
  _removeListener(e, n) {
      this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling())
  }
  async _set(e, n) {
      await super._set(e, n), this.localCache[e] = JSON.stringify(n)
  }
  async _get(e) {
      const n = await super._get(e);
      return this.localCache[e] = JSON.stringify(n), n
  }
  async _remove(e) {
      await super._remove(e), delete this.localCache[e]
  }
}
bd.type = "LOCAL";
const aE = bd;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ad extends Td {
  constructor() {
      super(() => window.sessionStorage, "SESSION")
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Ad.type = "SESSION";
const Sd = Ad;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function cE(t) {
  return Promise.all(t.map(async e => {
      try {
          return {
              fulfilled: !0,
              value: await e
          }
      } catch (n) {
          return {
              fulfilled: !1,
              reason: n
          }
      }
  }))
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ss {
  constructor(e) {
      this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
  }
  static _getInstance(e) {
      const n = this.receivers.find(i => i.isListeningto(e));
      if (n) return n;
      const r = new Ss(e);
      return this.receivers.push(r), r
  }
  isListeningto(e) {
      return this.eventTarget === e
  }
  async handleEvent(e) {
      const n = e,
          {
              eventId: r,
              eventType: i,
              data: s
          } = n.data,
          o = this.handlersMap[i];
      if (!o?.size) return;
      n.ports[0].postMessage({
          status: "ack",
          eventId: r,
          eventType: i
      });
      const l = Array.from(o).map(async f => f(n.origin, s)),
          u = await cE(l);
      n.ports[0].postMessage({
          status: "done",
          eventId: r,
          eventType: i,
          response: u
      })
  }
  _subscribe(e, n) {
      Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(n)
  }
  _unsubscribe(e, n) {
      this.handlersMap[e] && n && this.handlersMap[e].delete(n), (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
  }
}
Ss.receivers = [];
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ja(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return t + n
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class lE {
  constructor(e) {
      this.target = e, this.handlers = new Set
  }
  removeMessageHandler(e) {
      e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
  }
  async _send(e, n, r = 50) {
      const i = typeof MessageChannel < "u" ? new MessageChannel : null;
      if (!i) throw new Error("connection_unavailable");
      let s, o;
      return new Promise((l, u) => {
          const f = ja("", 20);
          i.port1.start();
          const p = setTimeout(() => {
              u(new Error("unsupported_event"))
          }, r);
          o = {
              messageChannel: i,
              onMessage(g) {
                  const w = g;
                  if (w.data.eventId === f) switch (w.data.status) {
                      case "ack":
                          clearTimeout(p), s = setTimeout(() => {
                              u(new Error("timeout"))
                          }, 3e3);
                          break;
                      case "done":
                          clearTimeout(s), l(w.data.response);
                          break;
                      default:
                          clearTimeout(p), clearTimeout(s), u(new Error("invalid_response"));
                          break
                  }
              }
          }, this.handlers.add(o), i.port1.addEventListener("message", o.onMessage), this.target.postMessage({
              eventType: e,
              eventId: f,
              data: n
          }, [i.port2])
      }).finally(() => {
          o && this.removeMessageHandler(o)
      })
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ht() {
  return window
}

function uE(t) {
  ht().location.href = t
}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Pd() {
  return typeof ht().WorkerGlobalScope < "u" && typeof ht().importScripts == "function"
}
async function hE() {
  if (!navigator?.serviceWorker) return null;
  try {
      return (await navigator.serviceWorker.ready).active
  } catch {
      return null
  }
}

function dE() {
  var t;
  return ((t = navigator?.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null
}

function fE() {
  return Pd() ? self : null
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Cd = "firebaseLocalStorageDb",
  pE = 1,
  is = "firebaseLocalStorage",
  Rd = "fbase_key";
class si {
  constructor(e) {
      this.request = e
  }
  toPromise() {
      return new Promise((e, n) => {
          this.request.addEventListener("success", () => {
              e(this.request.result)
          }), this.request.addEventListener("error", () => {
              n(this.request.error)
          })
      })
  }
}

function Ps(t, e) {
  return t.transaction([is], e ? "readwrite" : "readonly").objectStore(is)
}

function mE() {
  const t = indexedDB.deleteDatabase(Cd);
  return new si(t).toPromise()
}

function ra() {
  const t = indexedDB.open(Cd, pE);
  return new Promise((e, n) => {
      t.addEventListener("error", () => {
          n(t.error)
      }), t.addEventListener("upgradeneeded", () => {
          const r = t.result;
          try {
              r.createObjectStore(is, {
                  keyPath: Rd
              })
          } catch (i) {
              n(i)
          }
      }), t.addEventListener("success", async () => {
          const r = t.result;
          r.objectStoreNames.contains(is) ? e(r) : (r.close(), await mE(), e(await ra()))
      })
  })
}
async function vu(t, e, n) {
  const r = Ps(t, !0).put({
      [Rd]: e,
      value: n
  });
  return new si(r).toPromise()
}
async function gE(t, e) {
  const n = Ps(t, !1).get(e),
      r = await new si(n).toPromise();
  return r === void 0 ? null : r.value
}

function Eu(t, e) {
  const n = Ps(t, !0).delete(e);
  return new si(n).toPromise()
}
const wE = 800,
  yE = 3;
class kd {
  constructor() {
      this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
  }
  async _openDb() {
      return this.db ? this.db : (this.db = await ra(), this.db)
  }
  async _withRetries(e) {
      let n = 0;
      for (;;) try {
          const r = await this._openDb();
          return await e(r)
      } catch (r) {
          if (n++ > yE) throw r;
          this.db && (this.db.close(), this.db = void 0)
      }
  }
  async initializeServiceWorkerMessaging() {
      return Pd() ? this.initializeReceiver() : this.initializeSender()
  }
  async initializeReceiver() {
      this.receiver = Ss._getInstance(fE()), this.receiver._subscribe("keyChanged", async (e, n) => ({
          keyProcessed: (await this._poll()).includes(n.key)
      })), this.receiver._subscribe("ping", async (e, n) => ["keyChanged"])
  }
  async initializeSender() {
      var e, n;
      if (this.activeServiceWorker = await hE(), !this.activeServiceWorker) return;
      this.sender = new lE(this.activeServiceWorker);
      const r = await this.sender._send("ping", {}, 800);
      r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((n = r[0]) === null || n === void 0) && n.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
  }
  async notifyServiceWorker(e) {
      if (!(!this.sender || !this.activeServiceWorker || dE() !== this.activeServiceWorker)) try {
          await this.sender._send("keyChanged", {
              key: e
          }, this.serviceWorkerReceiverAvailable ? 800 : 50)
      } catch {}
  }
  async _isAvailable() {
      try {
          if (!indexedDB) return !1;
          const e = await ra();
          return await vu(e, rs, "1"), await Eu(e, rs), !0
      } catch {}
      return !1
  }
  async _withPendingWrite(e) {
      this.pendingWrites++;
      try {
          await e()
      } finally {
          this.pendingWrites--
      }
  }
  async _set(e, n) {
      return this._withPendingWrite(async () => (await this._withRetries(r => vu(r, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)))
  }
  async _get(e) {
      const n = await this._withRetries(r => gE(r, e));
      return this.localCache[e] = n, n
  }
  async _remove(e) {
      return this._withPendingWrite(async () => (await this._withRetries(n => Eu(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
  }
  async _poll() {
      const e = await this._withRetries(i => {
          const s = Ps(i, !1).getAll();
          return new si(s).toPromise()
      });
      if (!e) return [];
      if (this.pendingWrites !== 0) return [];
      const n = [],
          r = new Set;
      if (e.length !== 0)
          for (const {
                  fbase_key: i,
                  value: s
              }
              of e) r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), n.push(i));
      for (const i of Object.keys(this.localCache)) this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), n.push(i));
      return n
  }
  notifyListeners(e, n) {
      this.localCache[e] = n;
      const r = this.listeners[e];
      if (r)
          for (const i of Array.from(r)) i(n)
  }
  startPolling() {
      this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), wE)
  }
  stopPolling() {
      this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
  }
  _addListener(e, n) {
      Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(n)
  }
  _removeListener(e, n) {
      this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling()
  }
}
kd.type = "LOCAL";
const _E = kd;
new ni(3e4, 6e4);
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Dd(t, e) {
  return e ? bt(e) : (D(t._popupRedirectResolver, t, "argument-error"), t._popupRedirectResolver)
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class qa extends Fa {
  constructor(e) {
      super("custom", "custom"), this.params = e
  }
  _getIdTokenResponse(e) {
      return jn(e, this._buildIdpRequest())
  }
  _linkToIdToken(e, n) {
      return jn(e, this._buildIdpRequest(n))
  }
  _getReauthenticationResolver(e) {
      return jn(e, this._buildIdpRequest())
  }
  _buildIdpRequest(e) {
      const n = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: !0,
          returnIdpCredential: !0
      };
      return e && (n.idToken = e), n
  }
}

function vE(t) {
  return vd(t.auth, new qa(t), t.bypassAuthState)
}

function EE(t) {
  const {
      auth: e,
      user: n
  } = t;
  return D(n, e, "internal-error"), Qv(n, new qa(t), t.bypassAuthState)
}
async function IE(t) {
  const {
      auth: e,
      user: n
  } = t;
  return D(n, e, "internal-error"), Gv(n, new qa(t), t.bypassAuthState)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Vd {
  constructor(e, n, r, i, s = !1) {
      this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(n) ? n : [n]
  }
  execute() {
      return new Promise(async (e, n) => {
          this.pendingPromise = {
              resolve: e,
              reject: n
          };
          try {
              this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
          } catch (r) {
              this.reject(r)
          }
      })
  }
  async onAuthEvent(e) {
      const {
          urlResponse: n,
          sessionId: r,
          postBody: i,
          tenantId: s,
          error: o,
          type: l
      } = e;
      if (o) {
          this.reject(o);
          return
      }
      const u = {
          auth: this.auth,
          requestUri: n,
          sessionId: r,
          tenantId: s || void 0,
          postBody: i || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState
      };
      try {
          this.resolve(await this.getIdpTask(l)(u))
      } catch (f) {
          this.reject(f)
      }
  }
  onError(e) {
      this.reject(e)
  }
  getIdpTask(e) {
      switch (e) {
          case "signInViaPopup":
          case "signInViaRedirect":
              return vE;
          case "linkViaPopup":
          case "linkViaRedirect":
              return IE;
          case "reauthViaPopup":
          case "reauthViaRedirect":
              return EE;
          default:
              Ge(this.auth, "internal-error")
      }
  }
  resolve(e) {
      St(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
  }
  reject(e) {
      St(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
  }
  unregisterAndCleanUp() {
      this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const TE = new ni(2e3, 1e4);
async function bE(t, e, n) {
  const r = Dt(t);
  Y_(t, e, Ba);
  const i = Dd(r, n);
  return new sn(r, "signInViaPopup", e, i).executeNotNull()
}
class sn extends Vd {
  constructor(e, n, r, i, s) {
      super(e, n, i, s), this.provider = r, this.authWindow = null, this.pollId = null, sn.currentPopupAction && sn.currentPopupAction.cancel(), sn.currentPopupAction = this
  }
  async executeNotNull() {
      const e = await this.execute();
      return D(e, this.auth, "internal-error"), e
  }
  async onExecution() {
      St(this.filter.length === 1, "Popup operations only handle one event");
      const e = ja();
      this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch(n => {
          this.reject(n)
      }), this.resolver._isIframeWebStorageSupported(this.auth, n => {
          n || this.reject(ut(this.auth, "web-storage-unsupported"))
      }), this.pollUserCancellation()
  }
  get eventId() {
      var e;
      return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null
  }
  cancel() {
      this.reject(ut(this.auth, "cancelled-popup-request"))
  }
  cleanUp() {
      this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, sn.currentPopupAction = null
  }
  pollUserCancellation() {
      const e = () => {
          var n, r;
          if (!((r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || r === void 0) && r.closed) {
              this.pollId = window.setTimeout(() => {
                  this.pollId = null, this.reject(ut(this.auth, "popup-closed-by-user"))
              }, 8e3);
              return
          }
          this.pollId = window.setTimeout(e, TE.get())
      };
      e()
  }
}
sn.currentPopupAction = null;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const AE = "pendingRedirect",
  Hi = new Map;
class SE extends Vd {
  constructor(e, n, r = !1) {
      super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], n, void 0, r), this.eventId = null
  }
  async execute() {
      let e = Hi.get(this.auth._key());
      if (!e) {
          try {
              const r = await PE(this.resolver, this.auth) ? await super.execute() : null;
              e = () => Promise.resolve(r)
          } catch (n) {
              e = () => Promise.reject(n)
          }
          Hi.set(this.auth._key(), e)
      }
      return this.bypassAuthState || Hi.set(this.auth._key(), () => Promise.resolve(null)), e()
  }
  async onAuthEvent(e) {
      if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
      if (e.type === "unknown") {
          this.resolve(null);
          return
      }
      if (e.eventId) {
          const n = await this.auth._redirectUserForId(e.eventId);
          if (n) return this.user = n, super.onAuthEvent(e);
          this.resolve(null)
      }
  }
  async onExecution() {}
  cleanUp() {}
}
async function PE(t, e) {
  const n = kE(e),
      r = RE(t);
  if (!await r._isAvailable()) return !1;
  const i = await r._get(n) === "true";
  return await r._remove(n), i
}

function CE(t, e) {
  Hi.set(t._key(), e)
}

function RE(t) {
  return bt(t._redirectPersistence)
}

function kE(t) {
  return zi(AE, t.config.apiKey, t.name)
}
async function DE(t, e, n = !1) {
  const r = Dt(t),
      i = Dd(r, e),
      o = await new SE(r, i, n).execute();
  return o && !n && (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, e)), o
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const VE = 10 * 60 * 1e3;
class OE {
  constructor(e) {
      this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
  }
  registerConsumer(e) {
      this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
  }
  unregisterConsumer(e) {
      this.consumers.delete(e)
  }
  onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1;
      let n = !1;
      return this.consumers.forEach(r => {
          this.isEventForConsumer(e, r) && (n = !0, this.sendToConsumer(e, r), this.saveEventToCache(e))
      }), this.hasHandledPotentialRedirect || !NE(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n
  }
  sendToConsumer(e, n) {
      var r;
      if (e.error && !Od(e)) {
          const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
          n.onError(ut(this.auth, i))
      } else n.onAuthEvent(e)
  }
  isEventForConsumer(e, n) {
      const r = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
      return n.filter.includes(e.type) && r
  }
  hasEventBeenHandled(e) {
      return Date.now() - this.lastProcessedEventTime >= VE && this.cachedEventUids.clear(), this.cachedEventUids.has(Iu(e))
  }
  saveEventToCache(e) {
      this.cachedEventUids.add(Iu(e)), this.lastProcessedEventTime = Date.now()
  }
}

function Iu(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter(e => e).join("-")
}

function Od({
  type: t,
  error: e
}) {
  return t === "unknown" && e?.code === "auth/no-auth-event"
}

function NE(t) {
  switch (t.type) {
      case "signInViaRedirect":
      case "linkViaRedirect":
      case "reauthViaRedirect":
          return !0;
      case "unknown":
          return Od(t);
      default:
          return !1
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function xE(t, e = {}) {
  return kt(t, "GET", "/v1/projects", e)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const LE = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  ME = /^https?/;
async function FE(t) {
  if (t.config.emulator) return;
  const {
      authorizedDomains: e
  } = await xE(t);
  for (const n of e) try {
      if (UE(n)) return
  } catch {}
  Ge(t, "unauthorized-domain")
}

function UE(t) {
  const e = na(),
      {
          protocol: n,
          hostname: r
      } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
      const o = new URL(t);
      return o.hostname === "" && r === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === r
  }
  if (!ME.test(n)) return !1;
  if (LE.test(t)) return r === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const BE = new ni(3e4, 6e4);

function Tu() {
  const t = ht().___jsl;
  if (t?.H) {
      for (const e of Object.keys(t.H))
          if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
              for (let n = 0; n < t.CP.length; n++) t.CP[n] = null
  }
}

function jE(t) {
  return new Promise((e, n) => {
      var r, i, s;

      function o() {
          Tu(), gapi.load("gapi.iframes", {
              callback: () => {
                  e(gapi.iframes.getContext())
              },
              ontimeout: () => {
                  Tu(), n(ut(t, "network-request-failed"))
              },
              timeout: BE.get()
          })
      }
      if (!((i = (r = ht().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe) e(gapi.iframes.getContext());
      else if (!((s = ht().gapi) === null || s === void 0) && s.load) o();
      else {
          const l = Rv("iframefcb");
          return ht()[l] = () => {
              gapi.load ? o() : n(ut(t, "network-request-failed"))
          }, gd(`${Cv()}?onload=${l}`).catch(u => n(u))
      }
  }).catch(e => {
      throw Wi = null, e
  })
}
let Wi = null;

function qE(t) {
  return Wi = Wi || jE(t), Wi
}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const $E = new ni(5e3, 15e3),
  zE = "__/auth/iframe",
  HE = "emulator/auth/iframe",
  WE = {
      style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px"
      },
      "aria-hidden": "true",
      tabindex: "-1"
  },
  KE = new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  ]);

function GE(t) {
  const e = t.config;
  D(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? xa(e, HE) : `https://${t.config.authDomain}/${zE}`,
      r = {
          apiKey: e.apiKey,
          appName: t.name,
          v: nr
      },
      i = KE.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${ti(r).slice(1)}`
}
async function QE(t) {
  const e = await qE(t),
      n = ht().gapi;
  return D(n, t, "internal-error"), e.open({
      where: document.body,
      url: GE(t),
      messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      attributes: WE,
      dontclear: !0
  }, r => new Promise(async (i, s) => {
      await r.restyle({
          setHideOnLeave: !1
      });
      const o = ut(t, "network-request-failed"),
          l = ht().setTimeout(() => {
              s(o)
          }, $E.get());

      function u() {
          ht().clearTimeout(l), i(r)
      }
      r.ping(u).then(u, () => {
          s(o)
      })
  }))
}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const JE = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no"
  },
  YE = 500,
  XE = 600,
  ZE = "_blank",
  eI = "http://localhost";
class bu {
  constructor(e) {
      this.window = e, this.associatedEvent = null
  }
  close() {
      if (this.window) try {
          this.window.close()
      } catch {}
  }
}

function tI(t, e, n, r = YE, i = XE) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
      o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const u = Object.assign(Object.assign({}, JE), {
          width: r.toString(),
          height: i.toString(),
          top: s,
          left: o
      }),
      f = ue().toLowerCase();
  n && (l = ld(f) ? ZE : n), cd(f) && (e = e || eI, u.scrollbars = "yes");
  const p = Object.entries(u).reduce((w, [v, R]) => `${w}${v}=${R},`, "");
  if (yv(f) && l !== "_self") return nI(e || "", l), new bu(null);
  const g = window.open(e || "", l, p);
  D(g, t, "popup-blocked");
  try {
      g.focus()
  } catch {}
  return new bu(g)
}

function nI(t, e) {
  const n = document.createElement("a");
  n.href = t, n.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r)
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const rI = "__/auth/handler",
  iI = "emulator/auth/handler",
  sI = encodeURIComponent("fac");
async function Au(t, e, n, r, i, s) {
  D(t.config.authDomain, t, "auth-domain-config-required"), D(t.config.apiKey, t, "invalid-api-key");
  const o = {
      apiKey: t.config.apiKey,
      appName: t.name,
      authType: n,
      redirectUrl: r,
      v: nr,
      eventId: i
  };
  if (e instanceof Ba) {
      e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", xy(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
      for (const [p, g] of Object.entries(s || {})) o[p] = g
  }
  if (e instanceof ii) {
      const p = e.getScopes().filter(g => g !== "");
      p.length > 0 && (o.scopes = p.join(","))
  }
  t.tenantId && (o.tid = t.tenantId);
  const l = o;
  for (const p of Object.keys(l)) l[p] === void 0 && delete l[p];
  const u = await t._getAppCheckToken(),
      f = u ? `#${sI}=${encodeURIComponent(u)}` : "";
  return `${oI(t)}?${ti(l).slice(1)}${f}`
}

function oI({
  config: t
}) {
  return t.emulator ? xa(t, iI) : `https://${t.authDomain}/${rI}`
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const No = "webStorageSupport";
class aI {
  constructor() {
      this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Sd, this._completeRedirectFn = DE, this._overrideRedirectResult = CE
  }
  async _openPopup(e, n, r, i) {
      var s;
      St((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
      const o = await Au(e, n, r, na(), i);
      return tI(e, o, ja())
  }
  async _openRedirect(e, n, r, i) {
      await this._originValidation(e);
      const s = await Au(e, n, r, na(), i);
      return uE(s), new Promise(() => {})
  }
  _initialize(e) {
      const n = e._key();
      if (this.eventManagers[n]) {
          const {
              manager: i,
              promise: s
          } = this.eventManagers[n];
          return i ? Promise.resolve(i) : (St(s, "If manager is not set, promise should be"), s)
      }
      const r = this.initAndGetManager(e);
      return this.eventManagers[n] = {
          promise: r
      }, r.catch(() => {
          delete this.eventManagers[n]
      }), r
  }
  async initAndGetManager(e) {
      const n = await QE(e),
          r = new OE(e);
      return n.register("authEvent", i => (D(i?.authEvent, e, "invalid-auth-event"), {
          status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
      }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {
          manager: r
      }, this.iframes[e._key()] = n, r
  }
  _isIframeWebStorageSupported(e, n) {
      this.iframes[e._key()].send(No, {
          type: No
      }, i => {
          var s;
          const o = (s = i?.[0]) === null || s === void 0 ? void 0 : s[No];
          o !== void 0 && n(!!o), Ge(e, "internal-error")
      }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
  }
  _originValidation(e) {
      const n = e._key();
      return this.originValidationPromises[n] || (this.originValidationPromises[n] = FE(e)), this.originValidationPromises[n]
  }
  get _shouldInitProactively() {
      return pd() || Ma() || bs()
  }
}
const cI = aI;
var Su = "@firebase/auth",
  Pu = "1.6.1";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class lI {
  constructor(e) {
      this.auth = e, this.internalListeners = new Map
  }
  getUid() {
      var e;
      return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
  }
  async getToken(e) {
      return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? {
          accessToken: await this.auth.currentUser.getIdToken(e)
      } : null
  }
  addAuthTokenListener(e) {
      if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
      const n = this.auth.onIdTokenChanged(r => {
          e(r?.stsTokenManager.accessToken || null)
      });
      this.internalListeners.set(e, n), this.updateProactiveRefresh()
  }
  removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      const n = this.internalListeners.get(e);
      n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh())
  }
  assertAuthConfigured() {
      D(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
  }
  updateProactiveRefresh() {
      this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function uI(t) {
  switch (t) {
      case "Node":
          return "node";
      case "ReactNative":
          return "rn";
      case "Worker":
          return "webworker";
      case "Cordova":
          return "cordova";
      case "WebExtension":
          return "web-extension";
      default:
          return
  }
}

function hI(t) {
  pt(new Ze("auth", (e, {
      options: n
  }) => {
      const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("heartbeat"),
          s = e.getProvider("app-check-internal"),
          {
              apiKey: o,
              authDomain: l
          } = r.options;
      D(o && !o.includes(":"), "invalid-api-key", {
          appName: r.name
      });
      const u = {
              apiKey: o,
              authDomain: l,
              clientPlatform: t,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: md(t)
          },
          f = new Av(r, i, s, u);
      return Nv(f, n), f
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, n, r) => {
      e.getProvider("auth-internal").initialize()
  })), pt(new Ze("auth-internal", e => {
      const n = Dt(e.getProvider("auth").getImmediate());
      return (r => new lI(r))(n)
  }, "PRIVATE").setInstantiationMode("EXPLICIT")), Ke(Su, Pu, uI(t)), Ke(Su, Pu, "esm2017")
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const dI = 5 * 60,
  fI = Hh("authIdTokenMaxAge") || dI;
let Cu = null;
const pI = t => async e => {
  const n = e && await e.getIdTokenResult(),
      r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > fI) return;
  const i = n?.token;
  Cu !== i && (Cu = i, await fetch(t, {
      method: i ? "POST" : "DELETE",
      headers: i ? {
          Authorization: `Bearer ${i}`
      } : {}
  }))
};

function mI(t = Va()) {
  const e = In(t, "auth");
  if (e.isInitialized()) return e.getImmediate();
  const n = Ov(t, {
          popupRedirectResolver: cI,
          persistence: [_E, aE, Sd]
      }),
      r = Hh("authTokenSyncURL");
  if (r) {
      const s = pI(r);
      nE(n, s, () => s(n.currentUser)), tE(n, o => s(o))
  }
  const i = $h("auth");
  return i && xv(n, `http://${i}`), n
}

function gI() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document
}
Sv({
  loadJS(t) {
      return new Promise((e, n) => {
          const r = document.createElement("script");
          r.setAttribute("src", t), r.onload = e, r.onerror = i => {
              const s = ut("internal-error");
              s.customData = i, n(s)
          }, r.type = "text/javascript", r.charset = "UTF-8", gI().appendChild(r)
      })
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
hI("Browser");
var wI = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
  b, $a = $a || {},
  N = wI || self;

function Cs(t) {
  var e = typeof t;
  return e = e != "object" ? e : t ? Array.isArray(t) ? "array" : e : "null", e == "array" || e == "object" && typeof t.length == "number"
}

function oi(t) {
  var e = typeof t;
  return e == "object" && t != null || e == "function"
}

function yI(t) {
  return Object.prototype.hasOwnProperty.call(t, xo) && t[xo] || (t[xo] = ++_I)
}
var xo = "closure_uid_" + (1e9 * Math.random() >>> 0),
  _I = 0;

function vI(t, e, n) {
  return t.call.apply(t.bind, arguments)
}

function EI(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
      var r = Array.prototype.slice.call(arguments, 2);
      return function() {
          var i = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(i, r), t.apply(e, i)
      }
  }
  return function() {
      return t.apply(e, arguments)
  }
}

function Pe(t, e, n) {
  return Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Pe = vI : Pe = EI, Pe.apply(null, arguments)
}

function xi(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function() {
      var r = n.slice();
      return r.push.apply(r, arguments), t.apply(this, r)
  }
}

function we(t, e) {
  function n() {}
  n.prototype = e.prototype, t.$ = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.ac = function(r, i, s) {
      for (var o = Array(arguments.length - 2), l = 2; l < arguments.length; l++) o[l - 2] = arguments[l];
      return e.prototype[i].apply(r, o)
  }
}

function Wt() {
  this.s = this.s, this.o = this.o
}
var II = 0;
Wt.prototype.s = !1;
Wt.prototype.sa = function() {
  !this.s && (this.s = !0, this.N(), II != 0) && yI(this)
};
Wt.prototype.N = function() {
  if (this.o)
      for (; this.o.length;) this.o.shift()()
};
const Nd = Array.prototype.indexOf ? function(t, e) {
  return Array.prototype.indexOf.call(t, e, void 0)
} : function(t, e) {
  if (typeof t == "string") return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
  for (let n = 0; n < t.length; n++)
      if (n in t && t[n] === e) return n;
  return -1
};

function za(t) {
  const e = t.length;
  if (0 < e) {
      const n = Array(e);
      for (let r = 0; r < e; r++) n[r] = t[r];
      return n
  }
  return []
}

function Ru(t, e) {
  for (let n = 1; n < arguments.length; n++) {
      const r = arguments[n];
      if (Cs(r)) {
          const i = t.length || 0,
              s = r.length || 0;
          t.length = i + s;
          for (let o = 0; o < s; o++) t[i + o] = r[o]
      } else t.push(r)
  }
}

function Ce(t, e) {
  this.type = t, this.g = this.target = e, this.defaultPrevented = !1
}
Ce.prototype.h = function() {
  this.defaultPrevented = !0
};
var TI = function() {
  if (!N.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
      e = Object.defineProperty({}, "passive", {
          get: function() {
              t = !0
          }
      });
  try {
      const n = () => {};
      N.addEventListener("test", n, e), N.removeEventListener("test", n, e)
  } catch {}
  return t
}();

function qr(t) {
  return /^[\s\xa0]*$/.test(t)
}

function Rs() {
  var t = N.navigator;
  return t && (t = t.userAgent) ? t : ""
}

function at(t) {
  return Rs().indexOf(t) != -1
}

function Ha(t) {
  return Ha[" "](t), t
}
Ha[" "] = function() {};

function bI(t, e) {
  var n = gT;
  return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
}
var AI = at("Opera"),
  Wn = at("Trident") || at("MSIE"),
  xd = at("Edge"),
  ia = xd || Wn,
  Ld = at("Gecko") && !(Rs().toLowerCase().indexOf("webkit") != -1 && !at("Edge")) && !(at("Trident") || at("MSIE")) && !at("Edge"),
  SI = Rs().toLowerCase().indexOf("webkit") != -1 && !at("Edge");

function Md() {
  var t = N.document;
  return t ? t.documentMode : void 0
}
var sa;
e: {
  var Lo = "",
      Mo = function() {
          var t = Rs();
          if (Ld) return /rv:([^\);]+)(\)|;)/.exec(t);
          if (xd) return /Edge\/([\d\.]+)/.exec(t);
          if (Wn) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
          if (SI) return /WebKit\/(\S+)/.exec(t);
          if (AI) return /(?:Version)[ \/]?(\S+)/.exec(t)
      }();
  if (Mo && (Lo = Mo ? Mo[1] : ""), Wn) {
      var Fo = Md();
      if (Fo != null && Fo > parseFloat(Lo)) {
          sa = String(Fo);
          break e
      }
  }
  sa = Lo
}
var oa;
if (N.document && Wn) {
  var ku = Md();
  oa = ku || parseInt(sa, 10) || void 0
} else oa = void 0;
var PI = oa;

function $r(t, e) {
  if (Ce.call(this, t ? t.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, t) {
      var n = this.type = t.type,
          r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
      if (this.target = t.target || t.srcElement, this.g = e, e = t.relatedTarget) {
          if (Ld) {
              e: {
                  try {
                      Ha(e.nodeName);
                      var i = !0;
                      break e
                  } catch {}
                  i = !1
              }
              i || (e = null)
          }
      } else n == "mouseover" ? e = t.fromElement : n == "mouseout" && (e = t.toElement);
      this.relatedTarget = e, r ? (this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX, this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX, this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = typeof t.pointerType == "string" ? t.pointerType : CI[t.pointerType] || "", this.state = t.state, this.i = t, t.defaultPrevented && $r.$.h.call(this)
  }
}
we($r, Ce);
var CI = {
  2: "touch",
  3: "pen",
  4: "mouse"
};
$r.prototype.h = function() {
  $r.$.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : t.returnValue = !1
};
var ai = "closure_listenable_" + (1e6 * Math.random() | 0),
  RI = 0;

function kI(t, e, n, r, i) {
  this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.la = i, this.key = ++RI, this.fa = this.ia = !1
}

function ks(t) {
  t.fa = !0, t.listener = null, t.proxy = null, t.src = null, t.la = null
}

function Wa(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t)
}

function DI(t, e) {
  for (const n in t) e.call(void 0, t[n], n, t)
}

function Fd(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e
}
const Du = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ud(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
      r = arguments[i];
      for (n in r) t[n] = r[n];
      for (let s = 0; s < Du.length; s++) n = Du[s], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
  }
}

function Ds(t) {
  this.src = t, this.g = {}, this.h = 0
}
Ds.prototype.add = function(t, e, n, r, i) {
  var s = t.toString();
  t = this.g[s], t || (t = this.g[s] = [], this.h++);
  var o = ca(t, e, r, i);
  return -1 < o ? (e = t[o], n || (e.ia = !1)) : (e = new kI(e, this.src, s, !!r, i), e.ia = n, t.push(e)), e
};

function aa(t, e) {
  var n = e.type;
  if (n in t.g) {
      var r = t.g[n],
          i = Nd(r, e),
          s;
      (s = 0 <= i) && Array.prototype.splice.call(r, i, 1), s && (ks(e), t.g[n].length == 0 && (delete t.g[n], t.h--))
  }
}

function ca(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
      var s = t[i];
      if (!s.fa && s.listener == e && s.capture == !!n && s.la == r) return i
  }
  return -1
}
var Ka = "closure_lm_" + (1e6 * Math.random() | 0),
  Uo = {};

function Bd(t, e, n, r, i) {
  if (r && r.once) return qd(t, e, n, r, i);
  if (Array.isArray(e)) {
      for (var s = 0; s < e.length; s++) Bd(t, e[s], n, r, i);
      return null
  }
  return n = Ja(n), t && t[ai] ? t.O(e, n, oi(r) ? !!r.capture : !!r, i) : jd(t, e, n, !1, r, i)
}

function jd(t, e, n, r, i, s) {
  if (!e) throw Error("Invalid event type");
  var o = oi(i) ? !!i.capture : !!i,
      l = Qa(t);
  if (l || (t[Ka] = l = new Ds(t)), n = l.add(e, n, r, o, s), n.proxy) return n;
  if (r = VI(), n.proxy = r, r.src = t, r.listener = n, t.addEventListener) TI || (i = o), i === void 0 && (i = !1), t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(zd(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n
}

function VI() {
  function t(n) {
      return e.call(t.src, t.listener, n)
  }
  const e = OI;
  return t
}

function qd(t, e, n, r, i) {
  if (Array.isArray(e)) {
      for (var s = 0; s < e.length; s++) qd(t, e[s], n, r, i);
      return null
  }
  return n = Ja(n), t && t[ai] ? t.P(e, n, oi(r) ? !!r.capture : !!r, i) : jd(t, e, n, !0, r, i)
}

function $d(t, e, n, r, i) {
  if (Array.isArray(e))
      for (var s = 0; s < e.length; s++) $d(t, e[s], n, r, i);
  else r = oi(r) ? !!r.capture : !!r, n = Ja(n), t && t[ai] ? (t = t.i, e = String(e).toString(), e in t.g && (s = t.g[e], n = ca(s, n, r, i), -1 < n && (ks(s[n]), Array.prototype.splice.call(s, n, 1), s.length == 0 && (delete t.g[e], t.h--)))) : t && (t = Qa(t)) && (e = t.g[e.toString()], t = -1, e && (t = ca(e, n, r, i)), (n = -1 < t ? e[t] : null) && Ga(n))
}

function Ga(t) {
  if (typeof t != "number" && t && !t.fa) {
      var e = t.src;
      if (e && e[ai]) aa(e.i, t);
      else {
          var n = t.type,
              r = t.proxy;
          e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(zd(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Qa(e)) ? (aa(n, t), n.h == 0 && (n.src = null, e[Ka] = null)) : ks(t)
      }
  }
}

function zd(t) {
  return t in Uo ? Uo[t] : Uo[t] = "on" + t
}

function OI(t, e) {
  if (t.fa) t = !0;
  else {
      e = new $r(e, this);
      var n = t.listener,
          r = t.la || t.src;
      t.ia && Ga(t), t = n.call(r, e)
  }
  return t
}

function Qa(t) {
  return t = t[Ka], t instanceof Ds ? t : null
}
var Bo = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

function Ja(t) {
  return typeof t == "function" ? t : (t[Bo] || (t[Bo] = function(e) {
      return t.handleEvent(e)
  }), t[Bo])
}

function ge() {
  Wt.call(this), this.i = new Ds(this), this.S = this, this.J = null
}
we(ge, Wt);
ge.prototype[ai] = !0;
ge.prototype.removeEventListener = function(t, e, n, r) {
  $d(this, t, e, n, r)
};

function Ee(t, e) {
  var n, r = t.J;
  if (r)
      for (n = []; r; r = r.J) n.push(r);
  if (t = t.S, r = e.type || e, typeof e == "string") e = new Ce(e, t);
  else if (e instanceof Ce) e.target = e.target || t;
  else {
      var i = e;
      e = new Ce(r, t), Ud(e, i)
  }
  if (i = !0, n)
      for (var s = n.length - 1; 0 <= s; s--) {
          var o = e.g = n[s];
          i = Li(o, r, !0, e) && i
      }
  if (o = e.g = t, i = Li(o, r, !0, e) && i, i = Li(o, r, !1, e) && i, n)
      for (s = 0; s < n.length; s++) o = e.g = n[s], i = Li(o, r, !1, e) && i
}
ge.prototype.N = function() {
  if (ge.$.N.call(this), this.i) {
      var t = this.i,
          e;
      for (e in t.g) {
          for (var n = t.g[e], r = 0; r < n.length; r++) ks(n[r]);
          delete t.g[e], t.h--
      }
  }
  this.J = null
};
ge.prototype.O = function(t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r)
};
ge.prototype.P = function(t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r)
};

function Li(t, e, n, r) {
  if (e = t.i.g[String(e)], !e) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
      var o = e[s];
      if (o && !o.fa && o.capture == n) {
          var l = o.listener,
              u = o.la || o.src;
          o.ia && aa(t.i, o), i = l.call(u, r) !== !1 && i
      }
  }
  return i && !r.defaultPrevented
}
var Ya = N.JSON.stringify;
class NI {
  constructor(e, n) {
      this.i = e, this.j = n, this.h = 0, this.g = null
  }
  get() {
      let e;
      return 0 < this.h ? (this.h--, e = this.g, this.g = e.next, e.next = null) : e = this.i(), e
  }
}

function xI() {
  var t = Xa;
  let e = null;
  return t.g && (e = t.g, t.g = t.g.next, t.g || (t.h = null), e.next = null), e
}
class LI {
  constructor() {
      this.h = this.g = null
  }
  add(e, n) {
      const r = Hd.get();
      r.set(e, n), this.h ? this.h.next = r : this.g = r, this.h = r
  }
}
var Hd = new NI(() => new MI, t => t.reset());
class MI {
  constructor() {
      this.next = this.g = this.h = null
  }
  set(e, n) {
      this.h = e, this.g = n, this.next = null
  }
  reset() {
      this.next = this.g = this.h = null
  }
}

function FI(t) {
  var e = 1;
  t = t.split(":");
  const n = [];
  for (; 0 < e && t.length;) n.push(t.shift()), e--;
  return t.length && n.push(t.join(":")), n
}

function UI(t) {
  N.setTimeout(() => {
      throw t
  }, 0)
}
let zr, Hr = !1,
  Xa = new LI,
  Wd = () => {
      const t = N.Promise.resolve(void 0);
      zr = () => {
          t.then(BI)
      }
  };
var BI = () => {
  for (var t; t = xI();) {
      try {
          t.h.call(t.g)
      } catch (n) {
          UI(n)
      }
      var e = Hd;
      e.j(t), 100 > e.h && (e.h++, t.next = e.g, e.g = t)
  }
  Hr = !1
};

function Vs(t, e) {
  ge.call(this), this.h = t || 1, this.g = e || N, this.j = Pe(this.qb, this), this.l = Date.now()
}
we(Vs, ge);
b = Vs.prototype;
b.ga = !1;
b.T = null;
b.qb = function() {
  if (this.ga) {
      var t = Date.now() - this.l;
      0 < t && t < .8 * this.h ? this.T = this.g.setTimeout(this.j, this.h - t) : (this.T && (this.g.clearTimeout(this.T), this.T = null), Ee(this, "tick"), this.ga && (Za(this), this.start()))
  }
};
b.start = function() {
  this.ga = !0, this.T || (this.T = this.g.setTimeout(this.j, this.h), this.l = Date.now())
};

function Za(t) {
  t.ga = !1, t.T && (t.g.clearTimeout(t.T), t.T = null)
}
b.N = function() {
  Vs.$.N.call(this), Za(this), delete this.g
};

function ec(t, e, n) {
  if (typeof t == "function") n && (t = Pe(t, n));
  else if (t && typeof t.handleEvent == "function") t = Pe(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : N.setTimeout(t, e || 0)
}

function Kd(t) {
  t.g = ec(() => {
      t.g = null, t.i && (t.i = !1, Kd(t))
  }, t.j);
  const e = t.h;
  t.h = null, t.m.apply(null, e)
}
class jI extends Wt {
  constructor(e, n) {
      super(), this.m = e, this.j = n, this.h = null, this.i = !1, this.g = null
  }
  l(e) {
      this.h = arguments, this.g ? this.i = !0 : Kd(this)
  }
  N() {
      super.N(), this.g && (N.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null)
  }
}

function Wr(t) {
  Wt.call(this), this.h = t, this.g = {}
}
we(Wr, Wt);
var Vu = [];

function Gd(t, e, n, r) {
  Array.isArray(n) || (n && (Vu[0] = n.toString()), n = Vu);
  for (var i = 0; i < n.length; i++) {
      var s = Bd(e, n[i], r || t.handleEvent, !1, t.h || t);
      if (!s) break;
      t.g[s.key] = s
  }
}

function Qd(t) {
  Wa(t.g, function(e, n) {
      this.g.hasOwnProperty(n) && Ga(e)
  }, t), t.g = {}
}
Wr.prototype.N = function() {
  Wr.$.N.call(this), Qd(this)
};
Wr.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented")
};

function Os() {
  this.g = !0
}
Os.prototype.Ea = function() {
  this.g = !1
};

function qI(t, e, n, r, i, s) {
  t.info(function() {
      if (t.g)
          if (s)
              for (var o = "", l = s.split("&"), u = 0; u < l.length; u++) {
                  var f = l[u].split("=");
                  if (1 < f.length) {
                      var p = f[0];
                      f = f[1];
                      var g = p.split("_");
                      o = 2 <= g.length && g[1] == "type" ? o + (p + "=" + f + "&") : o + (p + "=redacted&")
                  }
              } else o = null;
          else o = s;
      return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + e + `
` + n + `
` + o
  })
}

function $I(t, e, n, r, i, s, o) {
  t.info(function() {
      return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + e + `
` + n + `
` + s + " " + o
  })
}

function Un(t, e, n, r) {
  t.info(function() {
      return "XMLHTTP TEXT (" + e + "): " + HI(t, n) + (r ? " " + r : "")
  })
}

function zI(t, e) {
  t.info(function() {
      return "TIMEOUT: " + e
  })
}
Os.prototype.info = function() {};

function HI(t, e) {
  if (!t.g) return e;
  if (!e) return null;
  try {
      var n = JSON.parse(e);
      if (n) {
          for (t = 0; t < n.length; t++)
              if (Array.isArray(n[t])) {
                  var r = n[t];
                  if (!(2 > r.length)) {
                      var i = r[1];
                      if (Array.isArray(i) && !(1 > i.length)) {
                          var s = i[0];
                          if (s != "noop" && s != "stop" && s != "close")
                              for (var o = 1; o < i.length; o++) i[o] = ""
                      }
                  }
              }
      }
      return Ya(n)
  } catch {
      return e
  }
}
var Tn = {},
  Ou = null;

function Ns() {
  return Ou = Ou || new ge
}
Tn.Ta = "serverreachability";

function Jd(t) {
  Ce.call(this, Tn.Ta, t)
}
we(Jd, Ce);

function Kr(t) {
  const e = Ns();
  Ee(e, new Jd(e))
}
Tn.STAT_EVENT = "statevent";

function Yd(t, e) {
  Ce.call(this, Tn.STAT_EVENT, t), this.stat = e
}
we(Yd, Ce);

function Ve(t) {
  const e = Ns();
  Ee(e, new Yd(e, t))
}
Tn.Ua = "timingevent";

function Xd(t, e) {
  Ce.call(this, Tn.Ua, t), this.size = e
}
we(Xd, Ce);

function ci(t, e) {
  if (typeof t != "function") throw Error("Fn must not be null and must be a function");
  return N.setTimeout(function() {
      t()
  }, e)
}
var xs = {
      NO_ERROR: 0,
      rb: 1,
      Eb: 2,
      Db: 3,
      yb: 4,
      Cb: 5,
      Fb: 6,
      Qa: 7,
      TIMEOUT: 8,
      Ib: 9
  },
  Zd = {
      wb: "complete",
      Sb: "success",
      Ra: "error",
      Qa: "abort",
      Kb: "ready",
      Lb: "readystatechange",
      TIMEOUT: "timeout",
      Gb: "incrementaldata",
      Jb: "progress",
      zb: "downloadprogress",
      $b: "uploadprogress"
  };

function tc() {}
tc.prototype.h = null;

function Nu(t) {
  return t.h || (t.h = t.i())
}

function ef() {}
var li = {
  OPEN: "a",
  vb: "b",
  Ra: "c",
  Hb: "d"
};

function nc() {
  Ce.call(this, "d")
}
we(nc, Ce);

function rc() {
  Ce.call(this, "c")
}
we(rc, Ce);
var la;

function Ls() {}
we(Ls, tc);
Ls.prototype.g = function() {
  return new XMLHttpRequest
};
Ls.prototype.i = function() {
  return {}
};
la = new Ls;

function ui(t, e, n, r) {
  this.l = t, this.j = e, this.m = n, this.W = r || 1, this.U = new Wr(this), this.P = WI, t = ia ? 125 : void 0, this.V = new Vs(t), this.I = null, this.i = !1, this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null, this.F = [], this.g = null, this.o = 0, this.s = this.v = null, this.ca = -1, this.J = !1, this.O = 0, this.M = null, this.ba = this.K = this.aa = this.S = !1, this.h = new tf
}

function tf() {
  this.i = null, this.g = "", this.h = !1
}
var WI = 45e3,
  nf = {},
  ua = {};
b = ui.prototype;
b.setTimeout = function(t) {
  this.P = t
};

function ha(t, e, n) {
  t.L = 1, t.A = Fs(Pt(e)), t.u = n, t.S = !0, rf(t, null)
}

function rf(t, e) {
  t.G = Date.now(), hi(t), t.B = Pt(t.A);
  var n = t.B,
      r = t.W;
  Array.isArray(r) || (r = [String(r)]), df(n.i, "t", r), t.o = 0, n = t.l.J, t.h = new tf, t.g = Of(t.l, n ? e : null, !t.u), 0 < t.O && (t.M = new jI(Pe(t.Pa, t, t.g), t.O)), Gd(t.U, t.g, "readystatechange", t.nb), e = t.I ? Fd(t.I) : {}, t.u ? (t.v || (t.v = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.g.ha(t.B, t.v, t.u, e)) : (t.v = "GET", t.g.ha(t.B, t.v, null, e)), Kr(), qI(t.j, t.v, t.B, t.m, t.W, t.u)
}
b.nb = function(t) {
  t = t.target;
  const e = this.M;
  e && ct(t) == 3 ? e.l() : this.Pa(t)
};
b.Pa = function(t) {
  try {
      if (t == this.g) e: {
          const p = ct(this.g);
          var e = this.g.Ia();
          const g = this.g.da();
          if (!(3 > p) && (p != 3 || ia || this.g && (this.h.h || this.g.ja() || Fu(this.g)))) {
              this.J || p != 4 || e == 7 || (e == 8 || 0 >= g ? Kr(3) : Kr(2)), Ms(this);
              var n = this.g.da();
              this.ca = n;
              t: if (sf(this)) {
                  var r = Fu(this.g);
                  t = "";
                  var i = r.length,
                      s = ct(this.g) == 4;
                  if (!this.h.i) {
                      if (typeof TextDecoder > "u") {
                          on(this), Dr(this);
                          var o = "";
                          break t
                      }
                      this.h.i = new N.TextDecoder
                  }
                  for (e = 0; e < i; e++) this.h.h = !0, t += this.h.i.decode(r[e], {
                      stream: s && e == i - 1
                  });
                  r.length = 0, this.h.g += t, this.o = 0, o = this.h.g
              } else o = this.g.ja();
              if (this.i = n == 200, $I(this.j, this.v, this.B, this.m, this.W, p, n), this.i) {
                  if (this.aa && !this.K) {
                      t: {
                          if (this.g) {
                              var l, u = this.g;
                              if ((l = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !qr(l)) {
                                  var f = l;
                                  break t
                              }
                          }
                          f = null
                      }
                      if (n = f) Un(this.j, this.m, n, "Initial handshake response via X-HTTP-Initial-Response"),
                      this.K = !0,
                      da(this, n);
                      else {
                          this.i = !1, this.s = 3, Ve(12), on(this), Dr(this);
                          break e
                      }
                  }
                  this.S ? (of(this, p, o), ia && this.i && p == 3 && (Gd(this.U, this.V, "tick", this.mb), this.V.start())) : (Un(this.j, this.m, o, null), da(this, o)), p == 4 && on(this), this.i && !this.J && (p == 4 ? Rf(this.l, this) : (this.i = !1, hi(this)))
              } else fT(this.g), n == 400 && 0 < o.indexOf("Unknown SID") ? (this.s = 3, Ve(12)) : (this.s = 0, Ve(13)), on(this), Dr(this)
          }
      }
  } catch {} finally {}
};

function sf(t) {
  return t.g ? t.v == "GET" && t.L != 2 && t.l.Ha : !1
}

function of(t, e, n) {
  let r = !0,
      i;
  for (; !t.J && t.o < n.length;)
      if (i = KI(t, n), i == ua) {
          e == 4 && (t.s = 4, Ve(14), r = !1), Un(t.j, t.m, null, "[Incomplete Response]");
          break
      } else if (i == nf) {
      t.s = 4, Ve(15), Un(t.j, t.m, n, "[Invalid Chunk]"), r = !1;
      break
  } else Un(t.j, t.m, i, null), da(t, i);
  sf(t) && t.o != 0 && (t.h.g = t.h.g.slice(t.o), t.o = 0), e != 4 || n.length != 0 || t.h.h || (t.s = 1, Ve(16), r = !1), t.i = t.i && r, r ? 0 < n.length && !t.ba && (t.ba = !0, e = t.l, e.g == t && e.ca && !e.M && (e.l.info("Great, no buffering proxy detected. Bytes received: " + n.length), lc(e), e.M = !0, Ve(11))) : (Un(t.j, t.m, n, "[Invalid Chunked Response]"), on(t), Dr(t))
}
b.mb = function() {
  if (this.g) {
      var t = ct(this.g),
          e = this.g.ja();
      this.o < e.length && (Ms(this), of(this, t, e), this.i && t != 4 && hi(this))
  }
};

function KI(t, e) {
  var n = t.o,
      r = e.indexOf(`
`, n);
  return r == -1 ? ua : (n = Number(e.substring(n, r)), isNaN(n) ? nf : (r += 1, r + n > e.length ? ua : (e = e.slice(r, r + n), t.o = r + n, e)))
}
b.cancel = function() {
  this.J = !0, on(this)
};

function hi(t) {
  t.Y = Date.now() + t.P, af(t, t.P)
}

function af(t, e) {
  if (t.C != null) throw Error("WatchDog timer not null");
  t.C = ci(Pe(t.lb, t), e)
}

function Ms(t) {
  t.C && (N.clearTimeout(t.C), t.C = null)
}
b.lb = function() {
  this.C = null;
  const t = Date.now();
  0 <= t - this.Y ? (zI(this.j, this.B), this.L != 2 && (Kr(), Ve(17)), on(this), this.s = 2, Dr(this)) : af(this, this.Y - t)
};

function Dr(t) {
  t.l.H == 0 || t.J || Rf(t.l, t)
}

function on(t) {
  Ms(t);
  var e = t.M;
  e && typeof e.sa == "function" && e.sa(), t.M = null, Za(t.V), Qd(t.U), t.g && (e = t.g, t.g = null, e.abort(), e.sa())
}

function da(t, e) {
  try {
      var n = t.l;
      if (n.H != 0 && (n.g == t || fa(n.i, t))) {
          if (!t.K && fa(n.i, t) && n.H == 3) {
              try {
                  var r = n.Ja.g.parse(e)
              } catch {
                  r = null
              }
              if (Array.isArray(r) && r.length == 3) {
                  var i = r;
                  if (i[0] == 0) {
                      e: if (!n.u) {
                          if (n.g)
                              if (n.g.G + 3e3 < t.G) as(n), qs(n);
                              else break e;
                          cc(n), Ve(18)
                      }
                  }
                  else n.Fa = i[1], 0 < n.Fa - n.V && 37500 > i[2] && n.G && n.A == 0 && !n.v && (n.v = ci(Pe(n.ib, n), 6e3));
                  if (1 >= mf(n.i) && n.oa) {
                      try {
                          n.oa()
                      } catch {}
                      n.oa = void 0
                  }
              } else an(n, 11)
          } else if ((t.K || n.g == t) && as(n), !qr(e))
              for (i = n.Ja.g.parse(e), e = 0; e < i.length; e++) {
                  let f = i[e];
                  if (n.V = f[0], f = f[1], n.H == 2)
                      if (f[0] == "c") {
                          n.K = f[1], n.pa = f[2];
                          const p = f[3];
                          p != null && (n.ra = p, n.l.info("VER=" + n.ra));
                          const g = f[4];
                          g != null && (n.Ga = g, n.l.info("SVER=" + n.Ga));
                          const w = f[5];
                          w != null && typeof w == "number" && 0 < w && (r = 1.5 * w, n.L = r, n.l.info("backChannelRequestTimeoutMs_=" + r)), r = n;
                          const v = t.g;
                          if (v) {
                              const R = v.g ? v.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                              if (R) {
                                  var s = r.i;
                                  s.g || R.indexOf("spdy") == -1 && R.indexOf("quic") == -1 && R.indexOf("h2") == -1 || (s.j = s.l, s.g = new Set, s.h && (ic(s, s.h), s.h = null))
                              }
                              if (r.F) {
                                  const O = v.g ? v.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                  O && (r.Da = O, X(r.I, r.F, O))
                              }
                          }
                          n.H = 3, n.h && n.h.Ba(), n.ca && (n.S = Date.now() - t.G, n.l.info("Handshake RTT: " + n.S + "ms")), r = n;
                          var o = t;
                          if (r.wa = Vf(r, r.J ? r.pa : null, r.Y), o.K) {
                              gf(r.i, o);
                              var l = o,
                                  u = r.L;
                              u && l.setTimeout(u), l.C && (Ms(l), hi(l)), r.g = o
                          } else Pf(r);
                          0 < n.j.length && $s(n)
                      } else f[0] != "stop" && f[0] != "close" || an(n, 7);
                  else n.H == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? an(n, 7) : ac(n) : f[0] != "noop" && n.h && n.h.Aa(f), n.A = 0)
              }
      }
      Kr(4)
  } catch {}
}

function GI(t) {
  if (t.Z && typeof t.Z == "function") return t.Z();
  if (typeof Map < "u" && t instanceof Map || typeof Set < "u" && t instanceof Set) return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (Cs(t)) {
      for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
      return e
  }
  e = [], n = 0;
  for (r in t) e[n++] = t[r];
  return e
}

function QI(t) {
  if (t.ta && typeof t.ta == "function") return t.ta();
  if (!t.Z || typeof t.Z != "function") {
      if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
      if (!(typeof Set < "u" && t instanceof Set)) {
          if (Cs(t) || typeof t == "string") {
              var e = [];
              t = t.length;
              for (var n = 0; n < t; n++) e.push(n);
              return e
          }
          e = [], n = 0;
          for (const r in t) e[n++] = r;
          return e
      }
  }
}

function cf(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (Cs(t) || typeof t == "string") Array.prototype.forEach.call(t, e, void 0);
  else
      for (var n = QI(t), r = GI(t), i = r.length, s = 0; s < i; s++) e.call(void 0, r[s], n && n[s], t)
}
var lf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function JI(t, e) {
  if (t) {
      t = t.split("&");
      for (var n = 0; n < t.length; n++) {
          var r = t[n].indexOf("="),
              i = null;
          if (0 <= r) {
              var s = t[n].substring(0, r);
              i = t[n].substring(r + 1)
          } else s = t[n];
          e(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
      }
  }
}

function dn(t) {
  if (this.g = this.s = this.j = "", this.m = null, this.o = this.l = "", this.h = !1, t instanceof dn) {
      this.h = t.h, ss(this, t.j), this.s = t.s, this.g = t.g, os(this, t.m), this.l = t.l;
      var e = t.i,
          n = new Gr;
      n.i = e.i, e.g && (n.g = new Map(e.g), n.h = e.h), xu(this, n), this.o = t.o
  } else t && (e = String(t).match(lf)) ? (this.h = !1, ss(this, e[1] || "", !0), this.s = Ar(e[2] || ""), this.g = Ar(e[3] || "", !0), os(this, e[4]), this.l = Ar(e[5] || "", !0), xu(this, e[6] || "", !0), this.o = Ar(e[7] || "")) : (this.h = !1, this.i = new Gr(null, this.h))
}
dn.prototype.toString = function() {
  var t = [],
      e = this.j;
  e && t.push(Sr(e, Lu, !0), ":");
  var n = this.g;
  return (n || e == "file") && (t.push("//"), (e = this.s) && t.push(Sr(e, Lu, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), n = this.m, n != null && t.push(":", String(n))), (n = this.l) && (this.g && n.charAt(0) != "/" && t.push("/"), t.push(Sr(n, n.charAt(0) == "/" ? ZI : XI, !0))), (n = this.i.toString()) && t.push("?", n), (n = this.o) && t.push("#", Sr(n, tT)), t.join("")
};

function Pt(t) {
  return new dn(t)
}

function ss(t, e, n) {
  t.j = n ? Ar(e, !0) : e, t.j && (t.j = t.j.replace(/:$/, ""))
}

function os(t, e) {
  if (e) {
      if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
      t.m = e
  } else t.m = null
}

function xu(t, e, n) {
  e instanceof Gr ? (t.i = e, nT(t.i, t.h)) : (n || (e = Sr(e, eT)), t.i = new Gr(e, t.h))
}

function X(t, e, n) {
  t.i.set(e, n)
}

function Fs(t) {
  return X(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), t
}

function Ar(t, e) {
  return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
}

function Sr(t, e, n) {
  return typeof t == "string" ? (t = encodeURI(t).replace(e, YI), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
}

function YI(t) {
  return t = t.charCodeAt(0), "%" + (t >> 4 & 15).toString(16) + (t & 15).toString(16)
}
var Lu = /[#\/\?@]/g,
  XI = /[#\?:]/g,
  ZI = /[#\?]/g,
  eT = /[#\?@]/g,
  tT = /#/g;

function Gr(t, e) {
  this.h = this.g = null, this.i = t || null, this.j = !!e
}

function Kt(t) {
  t.g || (t.g = new Map, t.h = 0, t.i && JI(t.i, function(e, n) {
      t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
  }))
}
b = Gr.prototype;
b.add = function(t, e) {
  Kt(this), this.i = null, t = ir(this, t);
  var n = this.g.get(t);
  return n || this.g.set(t, n = []), n.push(e), this.h += 1, this
};

function uf(t, e) {
  Kt(t), e = ir(t, e), t.g.has(e) && (t.i = null, t.h -= t.g.get(e).length, t.g.delete(e))
}

function hf(t, e) {
  return Kt(t), e = ir(t, e), t.g.has(e)
}
b.forEach = function(t, e) {
  Kt(this), this.g.forEach(function(n, r) {
      n.forEach(function(i) {
          t.call(e, i, r, this)
      }, this)
  }, this)
};
b.ta = function() {
  Kt(this);
  const t = Array.from(this.g.values()),
      e = Array.from(this.g.keys()),
      n = [];
  for (let r = 0; r < e.length; r++) {
      const i = t[r];
      for (let s = 0; s < i.length; s++) n.push(e[r])
  }
  return n
};
b.Z = function(t) {
  Kt(this);
  let e = [];
  if (typeof t == "string") hf(this, t) && (e = e.concat(this.g.get(ir(this, t))));
  else {
      t = Array.from(this.g.values());
      for (let n = 0; n < t.length; n++) e = e.concat(t[n])
  }
  return e
};
b.set = function(t, e) {
  return Kt(this), this.i = null, t = ir(this, t), hf(this, t) && (this.h -= this.g.get(t).length), this.g.set(t, [e]), this.h += 1, this
};
b.get = function(t, e) {
  return t ? (t = this.Z(t), 0 < t.length ? String(t[0]) : e) : e
};

function df(t, e, n) {
  uf(t, e), 0 < n.length && (t.i = null, t.g.set(ir(t, e), za(n)), t.h += n.length)
}
b.toString = function() {
  if (this.i) return this.i;
  if (!this.g) return "";
  const t = [],
      e = Array.from(this.g.keys());
  for (var n = 0; n < e.length; n++) {
      var r = e[n];
      const s = encodeURIComponent(String(r)),
          o = this.Z(r);
      for (r = 0; r < o.length; r++) {
          var i = s;
          o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), t.push(i)
      }
  }
  return this.i = t.join("&")
};

function ir(t, e) {
  return e = String(e), t.j && (e = e.toLowerCase()), e
}

function nT(t, e) {
  e && !t.j && (Kt(t), t.i = null, t.g.forEach(function(n, r) {
      var i = r.toLowerCase();
      r != i && (uf(this, r), df(this, i, n))
  }, t)), t.j = e
}
var rT = class {
  constructor(t, e) {
      this.g = t, this.map = e
  }
};

function ff(t) {
  this.l = t || iT, N.PerformanceNavigationTiming ? (t = N.performance.getEntriesByType("navigation"), t = 0 < t.length && (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")) : t = !!(N.g && N.g.Ka && N.g.Ka() && N.g.Ka().dc), this.j = t ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []
}
var iT = 10;

function pf(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1
}

function mf(t) {
  return t.h ? 1 : t.g ? t.g.size : 0
}

function fa(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1
}

function ic(t, e) {
  t.g ? t.g.add(e) : t.h = e
}

function gf(t, e) {
  t.h && t.h == e ? t.h = null : t.g && t.g.has(e) && t.g.delete(e)
}
ff.prototype.cancel = function() {
  if (this.i = wf(this), this.h) this.h.cancel(), this.h = null;
  else if (this.g && this.g.size !== 0) {
      for (const t of this.g.values()) t.cancel();
      this.g.clear()
  }
};

function wf(t) {
  if (t.h != null) return t.i.concat(t.h.F);
  if (t.g != null && t.g.size !== 0) {
      let e = t.i;
      for (const n of t.g.values()) e = e.concat(n.F);
      return e
  }
  return za(t.i)
}
var sT = class {
  stringify(t) {
      return N.JSON.stringify(t, void 0)
  }
  parse(t) {
      return N.JSON.parse(t, void 0)
  }
};

function oT() {
  this.g = new sT
}

function aT(t, e, n) {
  const r = n || "";
  try {
      cf(t, function(i, s) {
          let o = i;
          oi(i) && (o = Ya(i)), e.push(r + s + "=" + encodeURIComponent(o))
      })
  } catch (i) {
      throw e.push(r + "type=" + encodeURIComponent("_badmap")), i
  }
}

function cT(t, e) {
  const n = new Os;
  if (N.Image) {
      const r = new Image;
      r.onload = xi(Mi, n, r, "TestLoadImage: loaded", !0, e), r.onerror = xi(Mi, n, r, "TestLoadImage: error", !1, e), r.onabort = xi(Mi, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = xi(Mi, n, r, "TestLoadImage: timeout", !1, e), N.setTimeout(function() {
          r.ontimeout && r.ontimeout()
      }, 1e4), r.src = t
  } else e(!1)
}

function Mi(t, e, n, r, i) {
  try {
      e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
  } catch {}
}

function Us(t) {
  this.l = t.ec || null, this.j = t.ob || !1
}
we(Us, tc);
Us.prototype.g = function() {
  return new Bs(this.l, this.j)
};
Us.prototype.i = function(t) {
  return function() {
      return t
  }
}({});

function Bs(t, e) {
  ge.call(this), this.F = t, this.u = e, this.m = void 0, this.readyState = sc, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.v = new Headers, this.h = null, this.C = "GET", this.B = "", this.g = !1, this.A = this.j = this.l = null
}
we(Bs, ge);
var sc = 0;
b = Bs.prototype;
b.open = function(t, e) {
  if (this.readyState != sc) throw this.abort(), Error("Error reopening a connection");
  this.C = t, this.B = e, this.readyState = 1, Qr(this)
};
b.send = function(t) {
  if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
  this.g = !0;
  const e = {
      headers: this.v,
      method: this.C,
      credentials: this.m,
      cache: void 0
  };
  t && (e.body = t), (this.F || N).fetch(new Request(this.B, e)).then(this.$a.bind(this), this.ka.bind(this))
};
b.abort = function() {
  this.response = this.responseText = "", this.v = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {}), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, di(this)), this.readyState = sc
};
b.$a = function(t) {
  if (this.g && (this.l = t, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = t.headers, this.readyState = 2, Qr(this)), this.g && (this.readyState = 3, Qr(this), this.g)))
      if (this.responseType === "arraybuffer") t.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
      else if (typeof N.ReadableStream < "u" && "body" in t) {
      if (this.j = t.body.getReader(), this.u) {
          if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
          this.response = []
      } else this.response = this.responseText = "", this.A = new TextDecoder;
      yf(this)
  } else t.text().then(this.Za.bind(this), this.ka.bind(this))
};

function yf(t) {
  t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))
}
b.Xa = function(t) {
  if (this.g) {
      if (this.u && t.value) this.response.push(t.value);
      else if (!this.u) {
          var e = t.value ? t.value : new Uint8Array(0);
          (e = this.A.decode(e, {
              stream: !t.done
          })) && (this.response = this.responseText += e)
      }
      t.done ? di(this) : Qr(this), this.readyState == 3 && yf(this)
  }
};
b.Za = function(t) {
  this.g && (this.response = this.responseText = t, di(this))
};
b.Ya = function(t) {
  this.g && (this.response = t, di(this))
};
b.ka = function() {
  this.g && di(this)
};

function di(t) {
  t.readyState = 4, t.l = null, t.j = null, t.A = null, Qr(t)
}
b.setRequestHeader = function(t, e) {
  this.v.append(t, e)
};
b.getResponseHeader = function(t) {
  return this.h && this.h.get(t.toLowerCase()) || ""
};
b.getAllResponseHeaders = function() {
  if (!this.h) return "";
  const t = [],
      e = this.h.entries();
  for (var n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
  return t.join(`\r
`)
};

function Qr(t) {
  t.onreadystatechange && t.onreadystatechange.call(t)
}
Object.defineProperty(Bs.prototype, "withCredentials", {
  get: function() {
      return this.m === "include"
  },
  set: function(t) {
      this.m = t ? "include" : "same-origin"
  }
});
var lT = N.JSON.parse;

function re(t) {
  ge.call(this), this.headers = new Map, this.u = t || null, this.h = !1, this.C = this.g = null, this.I = "", this.m = 0, this.j = "", this.l = this.G = this.v = this.F = !1, this.B = 0, this.A = null, this.K = _f, this.L = this.M = !1
}
we(re, ge);
var _f = "",
  uT = /^https?$/i,
  hT = ["POST", "PUT"];
b = re.prototype;
b.Oa = function(t) {
  this.M = t
};
b.ha = function(t, e, n, r) {
  if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + t);
  e = e ? e.toUpperCase() : "GET", this.I = t, this.j = "", this.m = 0, this.F = !1, this.h = !0, this.g = this.u ? this.u.g() : la.g(), this.C = this.u ? Nu(this.u) : Nu(la), this.g.onreadystatechange = Pe(this.La, this);
  try {
      this.G = !0, this.g.open(e, String(t), !0), this.G = !1
  } catch (s) {
      Mu(this, s);
      return
  }
  if (t = n || "", n = new Map(this.headers), r)
      if (Object.getPrototypeOf(r) === Object.prototype)
          for (var i in r) n.set(i, r[i]);
      else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys()) n.set(s, r.get(s));
  else throw Error("Unknown input type for opt_headers: " + String(r));
  r = Array.from(n.keys()).find(s => s.toLowerCase() == "content-type"), i = N.FormData && t instanceof N.FormData, !(0 <= Nd(hT, e)) || r || i || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.K && (this.g.responseType = this.K), "withCredentials" in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
  try {
      If(this), 0 < this.B && ((this.L = dT(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = Pe(this.ua, this)) : this.A = ec(this.ua, this.B, this)), this.v = !0, this.g.send(t), this.v = !1
  } catch (s) {
      Mu(this, s)
  }
};

function dT(t) {
  return Wn && typeof t.timeout == "number" && t.ontimeout !== void 0
}
b.ua = function() {
  typeof $a < "u" && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, Ee(this, "timeout"), this.abort(8))
};

function Mu(t, e) {
  t.h = !1, t.g && (t.l = !0, t.g.abort(), t.l = !1), t.j = e, t.m = 5, vf(t), js(t)
}

function vf(t) {
  t.F || (t.F = !0, Ee(t, "complete"), Ee(t, "error"))
}
b.abort = function(t) {
  this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.m = t || 7, Ee(this, "complete"), Ee(this, "abort"), js(this))
};
b.N = function() {
  this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), js(this, !0)), re.$.N.call(this)
};
b.La = function() {
  this.s || (this.G || this.v || this.l ? Ef(this) : this.kb())
};
b.kb = function() {
  Ef(this)
};

function Ef(t) {
  if (t.h && typeof $a < "u" && (!t.C[1] || ct(t) != 4 || t.da() != 2)) {
      if (t.v && ct(t) == 4) ec(t.La, 0, t);
      else if (Ee(t, "readystatechange"), ct(t) == 4) {
          t.h = !1;
          try {
              const o = t.da();
              e: switch (o) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                      var e = !0;
                      break e;
                  default:
                      e = !1
              }
              var n;
              if (!(n = e)) {
                  var r;
                  if (r = o === 0) {
                      var i = String(t.I).match(lf)[1] || null;
                      !i && N.self && N.self.location && (i = N.self.location.protocol.slice(0, -1)), r = !uT.test(i ? i.toLowerCase() : "")
                  }
                  n = r
              }
              if (n) Ee(t, "complete"), Ee(t, "success");
              else {
                  t.m = 6;
                  try {
                      var s = 2 < ct(t) ? t.g.statusText : ""
                  } catch {
                      s = ""
                  }
                  t.j = s + " [" + t.da() + "]", vf(t)
              }
          } finally {
              js(t)
          }
      }
  }
}

function js(t, e) {
  if (t.g) {
      If(t);
      const n = t.g,
          r = t.C[0] ? () => {} : null;
      t.g = null, t.C = null, e || Ee(t, "ready");
      try {
          n.onreadystatechange = r
      } catch {}
  }
}

function If(t) {
  t.g && t.L && (t.g.ontimeout = null), t.A && (N.clearTimeout(t.A), t.A = null)
}
b.isActive = function() {
  return !!this.g
};

function ct(t) {
  return t.g ? t.g.readyState : 0
}
b.da = function() {
  try {
      return 2 < ct(this) ? this.g.status : -1
  } catch {
      return -1
  }
};
b.ja = function() {
  try {
      return this.g ? this.g.responseText : ""
  } catch {
      return ""
  }
};
b.Wa = function(t) {
  if (this.g) {
      var e = this.g.responseText;
      return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), lT(e)
  }
};

function Fu(t) {
  try {
      if (!t.g) return null;
      if ("response" in t.g) return t.g.response;
      switch (t.K) {
          case _f:
          case "text":
              return t.g.responseText;
          case "arraybuffer":
              if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer
      }
      return null
  } catch {
      return null
  }
}

function fT(t) {
  const e = {};
  t = (t.g && 2 <= ct(t) && t.g.getAllResponseHeaders() || "").split(`\r
`);
  for (let r = 0; r < t.length; r++) {
      if (qr(t[r])) continue;
      var n = FI(t[r]);
      const i = n[0];
      if (n = n[1], typeof n != "string") continue;
      n = n.trim();
      const s = e[i] || [];
      e[i] = s, s.push(n)
  }
  DI(e, function(r) {
      return r.join(", ")
  })
}
b.Ia = function() {
  return this.m
};
b.Sa = function() {
  return typeof this.j == "string" ? this.j : String(this.j)
};

function Tf(t) {
  let e = "";
  return Wa(t, function(n, r) {
      e += r, e += ":", e += n, e += `\r
`
  }), e
}

function oc(t, e, n) {
  e: {
      for (r in n) {
          var r = !1;
          break e
      }
      r = !0
  }
  r || (n = Tf(n), typeof t == "string" ? n != null && encodeURIComponent(String(n)) : X(t, e, n))
}

function vr(t, e, n) {
  return n && n.internalChannelParams && n.internalChannelParams[t] || e
}

function bf(t) {
  this.Ga = 0, this.j = [], this.l = new Os, this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null, this.fb = this.W = 0, this.cb = vr("failFast", !1, t), this.G = this.v = this.u = this.m = this.h = null, this.aa = !0, this.Fa = this.V = -1, this.ba = this.A = this.C = 0, this.ab = vr("baseRetryDelayMs", 5e3, t), this.hb = vr("retryDelaySeedMs", 1e4, t), this.eb = vr("forwardChannelMaxRetries", 2, t), this.xa = vr("forwardChannelRequestTimeoutMs", 2e4, t), this.va = t && t.xmlHttpFactory || void 0, this.Ha = t && t.useFetchStreams || !1, this.L = void 0, this.J = t && t.supportsCrossDomainXhr || !1, this.K = "", this.i = new ff(t && t.concurrentRequestLimit), this.Ja = new oT, this.P = t && t.fastHandshake || !1, this.O = t && t.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.bb = t && t.bc || !1, t && t.Ea && this.l.Ea(), t && t.forceLongPolling && (this.aa = !1), this.ca = !this.P && this.aa && t && t.detectBufferingProxy || !1, this.qa = void 0, t && t.longPollingTimeout && 0 < t.longPollingTimeout && (this.qa = t.longPollingTimeout), this.oa = void 0, this.S = 0, this.M = !1, this.ma = this.B = null
}
b = bf.prototype;
b.ra = 8;
b.H = 1;

function ac(t) {
  if (Af(t), t.H == 3) {
      var e = t.W++,
          n = Pt(t.I);
      if (X(n, "SID", t.K), X(n, "RID", e), X(n, "TYPE", "terminate"), fi(t, n), e = new ui(t, t.l, e), e.L = 2, e.A = Fs(Pt(n)), n = !1, N.navigator && N.navigator.sendBeacon) try {
          n = N.navigator.sendBeacon(e.A.toString(), "")
      } catch {}!n && N.Image && (new Image().src = e.A, n = !0), n || (e.g = Of(e.l, null), e.g.ha(e.A)), e.G = Date.now(), hi(e)
  }
  Df(t)
}

function qs(t) {
  t.g && (lc(t), t.g.cancel(), t.g = null)
}

function Af(t) {
  qs(t), t.u && (N.clearTimeout(t.u), t.u = null), as(t), t.i.cancel(), t.m && (typeof t.m == "number" && N.clearTimeout(t.m), t.m = null)
}

function $s(t) {
  if (!pf(t.i) && !t.m) {
      t.m = !0;
      var e = t.Na;
      zr || Wd(), Hr || (zr(), Hr = !0), Xa.add(e, t), t.C = 0
  }
}

function pT(t, e) {
  return mf(t.i) >= t.i.j - (t.m ? 1 : 0) ? !1 : t.m ? (t.j = e.F.concat(t.j), !0) : t.H == 1 || t.H == 2 || t.C >= (t.cb ? 0 : t.eb) ? !1 : (t.m = ci(Pe(t.Na, t, e), kf(t, t.C)), t.C++, !0)
}
b.Na = function(t) {
  if (this.m)
      if (this.m = null, this.H == 1) {
          if (!t) {
              this.W = Math.floor(1e5 * Math.random()), t = this.W++;
              const i = new ui(this, this.l, t);
              let s = this.s;
              if (this.U && (s ? (s = Fd(s), Ud(s, this.U)) : s = this.U), this.o !== null || this.O || (i.I = s, s = null), this.P) e: {
                  for (var e = 0, n = 0; n < this.j.length; n++) {
                      t: {
                          var r = this.j[n];
                          if ("__data__" in r.map && (r = r.map.__data__, typeof r == "string")) {
                              r = r.length;
                              break t
                          }
                          r = void 0
                      }
                      if (r === void 0) break;
                      if (e += r, 4096 < e) {
                          e = n;
                          break e
                      }
                      if (e === 4096 || n === this.j.length - 1) {
                          e = n + 1;
                          break e
                      }
                  }
                  e = 1e3
              }
              else e = 1e3;
              e = Sf(this, i, e), n = Pt(this.I), X(n, "RID", t), X(n, "CVER", 22), this.F && X(n, "X-HTTP-Session-Id", this.F), fi(this, n), s && (this.O ? e = "headers=" + encodeURIComponent(String(Tf(s))) + "&" + e : this.o && oc(n, this.o, s)), ic(this.i, i), this.bb && X(n, "TYPE", "init"), this.P ? (X(n, "$req", e), X(n, "SID", "null"), i.aa = !0, ha(i, n, null)) : ha(i, n, e), this.H = 2
          }
      } else this.H == 3 && (t ? Uu(this, t) : this.j.length == 0 || pf(this.i) || Uu(this))
};

function Uu(t, e) {
  var n;
  e ? n = e.m : n = t.W++;
  const r = Pt(t.I);
  X(r, "SID", t.K), X(r, "RID", n), X(r, "AID", t.V), fi(t, r), t.o && t.s && oc(r, t.o, t.s), n = new ui(t, t.l, n, t.C + 1), t.o === null && (n.I = t.s), e && (t.j = e.F.concat(t.j)), e = Sf(t, n, 1e3), n.setTimeout(Math.round(.5 * t.xa) + Math.round(.5 * t.xa * Math.random())), ic(t.i, n), ha(n, r, e)
}

function fi(t, e) {
  t.na && Wa(t.na, function(n, r) {
      X(e, r, n)
  }), t.h && cf({}, function(n, r) {
      X(e, r, n)
  })
}

function Sf(t, e, n) {
  n = Math.min(t.j.length, n);
  var r = t.h ? Pe(t.h.Va, t.h, t) : null;
  e: {
      var i = t.j;
      let s = -1;
      for (;;) {
          const o = ["count=" + n];
          s == -1 ? 0 < n ? (s = i[0].g, o.push("ofs=" + s)) : s = 0 : o.push("ofs=" + s);
          let l = !0;
          for (let u = 0; u < n; u++) {
              let f = i[u].g;
              const p = i[u].map;
              if (f -= s, 0 > f) s = Math.max(0, i[u].g - 100), l = !1;
              else try {
                  aT(p, o, "req" + f + "_")
              } catch {
                  r && r(p)
              }
          }
          if (l) {
              r = o.join("&");
              break e
          }
      }
  }
  return t = t.j.splice(0, n), e.F = t, r
}

function Pf(t) {
  if (!t.g && !t.u) {
      t.ba = 1;
      var e = t.Ma;
      zr || Wd(), Hr || (zr(), Hr = !0), Xa.add(e, t), t.A = 0
  }
}

function cc(t) {
  return t.g || t.u || 3 <= t.A ? !1 : (t.ba++, t.u = ci(Pe(t.Ma, t), kf(t, t.A)), t.A++, !0)
}
b.Ma = function() {
  if (this.u = null, Cf(this), this.ca && !(this.M || this.g == null || 0 >= this.S)) {
      var t = 2 * this.S;
      this.l.info("BP detection timer enabled: " + t), this.B = ci(Pe(this.jb, this), t)
  }
};
b.jb = function() {
  this.B && (this.B = null, this.l.info("BP detection timeout reached."), this.l.info("Buffering proxy detected and switch to long-polling!"), this.G = !1, this.M = !0, Ve(10), qs(this), Cf(this))
};

function lc(t) {
  t.B != null && (N.clearTimeout(t.B), t.B = null)
}

function Cf(t) {
  t.g = new ui(t, t.l, "rpc", t.ba), t.o === null && (t.g.I = t.s), t.g.O = 0;
  var e = Pt(t.wa);
  X(e, "RID", "rpc"), X(e, "SID", t.K), X(e, "AID", t.V), X(e, "CI", t.G ? "0" : "1"), !t.G && t.qa && X(e, "TO", t.qa), X(e, "TYPE", "xmlhttp"), fi(t, e), t.o && t.s && oc(e, t.o, t.s), t.L && t.g.setTimeout(t.L);
  var n = t.g;
  t = t.pa, n.L = 1, n.A = Fs(Pt(e)), n.u = null, n.S = !0, rf(n, t)
}
b.ib = function() {
  this.v != null && (this.v = null, qs(this), cc(this), Ve(19))
};

function as(t) {
  t.v != null && (N.clearTimeout(t.v), t.v = null)
}

function Rf(t, e) {
  var n = null;
  if (t.g == e) {
      as(t), lc(t), t.g = null;
      var r = 2
  } else if (fa(t.i, e)) n = e.F, gf(t.i, e), r = 1;
  else return;
  if (t.H != 0) {
      if (e.i)
          if (r == 1) {
              n = e.u ? e.u.length : 0, e = Date.now() - e.G;
              var i = t.C;
              r = Ns(), Ee(r, new Xd(r, n)), $s(t)
          } else Pf(t);
      else if (i = e.s, i == 3 || i == 0 && 0 < e.ca || !(r == 1 && pT(t, e) || r == 2 && cc(t))) switch (n && 0 < n.length && (e = t.i, e.i = e.i.concat(n)), i) {
          case 1:
              an(t, 5);
              break;
          case 4:
              an(t, 10);
              break;
          case 3:
              an(t, 6);
              break;
          default:
              an(t, 2)
      }
  }
}

function kf(t, e) {
  let n = t.ab + Math.floor(Math.random() * t.hb);
  return t.isActive() || (n *= 2), n * e
}

function an(t, e) {
  if (t.l.info("Error code " + e), e == 2) {
      var n = null;
      t.h && (n = null);
      var r = Pe(t.pb, t);
      n || (n = new dn("//www.google.com/images/cleardot.gif"), N.location && N.location.protocol == "http" || ss(n, "https"), Fs(n)), cT(n.toString(), r)
  } else Ve(2);
  t.H = 0, t.h && t.h.za(e), Df(t), Af(t)
}
b.pb = function(t) {
  t ? (this.l.info("Successfully pinged google.com"), Ve(2)) : (this.l.info("Failed to ping google.com"), Ve(1))
};

function Df(t) {
  if (t.H = 0, t.ma = [], t.h) {
      const e = wf(t.i);
      (e.length != 0 || t.j.length != 0) && (Ru(t.ma, e), Ru(t.ma, t.j), t.i.i.length = 0, za(t.j), t.j.length = 0), t.h.ya()
  }
}

function Vf(t, e, n) {
  var r = n instanceof dn ? Pt(n) : new dn(n);
  if (r.g != "") e && (r.g = e + "." + r.g), os(r, r.m);
  else {
      var i = N.location;
      r = i.protocol, e = e ? e + "." + i.hostname : i.hostname, i = +i.port;
      var s = new dn(null);
      r && ss(s, r), e && (s.g = e), i && os(s, i), n && (s.l = n), r = s
  }
  return n = t.F, e = t.Da, n && e && X(r, n, e), X(r, "VER", t.ra), fi(t, r), r
}

function Of(t, e, n) {
  if (e && !t.J) throw Error("Can't create secondary domain capable XhrIo object.");
  return e = t.Ha && !t.va ? new re(new Us({
      ob: n
  })) : new re(t.va), e.Oa(t.J), e
}
b.isActive = function() {
  return !!this.h && this.h.isActive(this)
};

function Nf() {}
b = Nf.prototype;
b.Ba = function() {};
b.Aa = function() {};
b.za = function() {};
b.ya = function() {};
b.isActive = function() {
  return !0
};
b.Va = function() {};

function cs() {
  if (Wn && !(10 <= Number(PI))) throw Error("Environmental error: no available transport.")
}
cs.prototype.g = function(t, e) {
  return new $e(t, e)
};

function $e(t, e) {
  ge.call(this), this.g = new bf(e), this.l = t, this.h = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
      "X-Client-Protocol": "webchannel"
  }), this.g.s = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
      "X-WebChannel-Content-Type": e.messageContentType
  }), e && e.Ca && (t ? t["X-WebChannel-Client-Profile"] = e.Ca : t = {
      "X-WebChannel-Client-Profile": e.Ca
  }), this.g.U = t, (t = e && e.cc) && !qr(t) && (this.g.o = t), this.A = e && e.supportsCrossDomainXhr || !1, this.v = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !qr(e) && (this.g.F = e, t = this.h, t !== null && e in t && (t = this.h, e in t && delete t[e])), this.j = new sr(this)
}
we($e, ge);
$e.prototype.m = function() {
  this.g.h = this.j, this.A && (this.g.J = !0);
  var t = this.g,
      e = this.l,
      n = this.h || void 0;
  Ve(0), t.Y = e, t.na = n || {}, t.G = t.aa, t.I = Vf(t, null, t.Y), $s(t)
};
$e.prototype.close = function() {
  ac(this.g)
};
$e.prototype.u = function(t) {
  var e = this.g;
  if (typeof t == "string") {
      var n = {};
      n.__data__ = t, t = n
  } else this.v && (n = {}, n.__data__ = Ya(t), t = n);
  e.j.push(new rT(e.fb++, t)), e.H == 3 && $s(e)
};
$e.prototype.N = function() {
  this.g.h = null, delete this.j, ac(this.g), delete this.g, $e.$.N.call(this)
};

function xf(t) {
  nc.call(this), t.__headers__ && (this.headers = t.__headers__, this.statusCode = t.__status__, delete t.__headers__, delete t.__status__);
  var e = t.__sm__;
  if (e) {
      e: {
          for (const n in e) {
              t = n;
              break e
          }
          t = void 0
      }(this.i = t) && (t = this.i, e = e !== null && t in e ? e[t] : void 0),
      this.data = e
  }
  else this.data = t
}
we(xf, nc);

function Lf() {
  rc.call(this), this.status = 1
}
we(Lf, rc);

function sr(t) {
  this.g = t
}
we(sr, Nf);
sr.prototype.Ba = function() {
  Ee(this.g, "a")
};
sr.prototype.Aa = function(t) {
  Ee(this.g, new xf(t))
};
sr.prototype.za = function(t) {
  Ee(this.g, new Lf)
};
sr.prototype.ya = function() {
  Ee(this.g, "b")
};

function mT() {
  this.blockSize = -1
}

function et() {
  this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.m = Array(this.blockSize), this.i = this.h = 0, this.reset()
}
we(et, mT);
et.prototype.reset = function() {
  this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.i = this.h = 0
};

function jo(t, e, n) {
  n || (n = 0);
  var r = Array(16);
  if (typeof e == "string")
      for (var i = 0; 16 > i; ++i) r[i] = e.charCodeAt(n++) | e.charCodeAt(n++) << 8 | e.charCodeAt(n++) << 16 | e.charCodeAt(n++) << 24;
  else
      for (i = 0; 16 > i; ++i) r[i] = e[n++] | e[n++] << 8 | e[n++] << 16 | e[n++] << 24;
  e = t.g[0], n = t.g[1], i = t.g[2];
  var s = t.g[3],
      o = e + (s ^ n & (i ^ s)) + r[0] + 3614090360 & 4294967295;
  e = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ e & (n ^ i)) + r[1] + 3905402710 & 4294967295, s = e + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (e ^ n)) + r[2] + 606105819 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (e ^ i & (s ^ e)) + r[3] + 3250441966 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = e + (s ^ n & (i ^ s)) + r[4] + 4118548399 & 4294967295, e = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ e & (n ^ i)) + r[5] + 1200080426 & 4294967295, s = e + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (e ^ n)) + r[6] + 2821735955 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (e ^ i & (s ^ e)) + r[7] + 4249261313 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = e + (s ^ n & (i ^ s)) + r[8] + 1770035416 & 4294967295, e = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ e & (n ^ i)) + r[9] + 2336552879 & 4294967295, s = e + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (e ^ n)) + r[10] + 4294925233 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (e ^ i & (s ^ e)) + r[11] + 2304563134 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = e + (s ^ n & (i ^ s)) + r[12] + 1804603682 & 4294967295, e = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ e & (n ^ i)) + r[13] + 4254626195 & 4294967295, s = e + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (e ^ n)) + r[14] + 2792965006 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (e ^ i & (s ^ e)) + r[15] + 1236535329 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = e + (i ^ s & (n ^ i)) + r[1] + 4129170786 & 4294967295, e = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (e ^ n)) + r[6] + 3225465664 & 4294967295, s = e + (o << 9 & 4294967295 | o >>> 23), o = i + (e ^ n & (s ^ e)) + r[11] + 643717713 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ e & (i ^ s)) + r[0] + 3921069994 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = e + (i ^ s & (n ^ i)) + r[5] + 3593408605 & 4294967295, e = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (e ^ n)) + r[10] + 38016083 & 4294967295, s = e + (o << 9 & 4294967295 | o >>> 23), o = i + (e ^ n & (s ^ e)) + r[15] + 3634488961 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ e & (i ^ s)) + r[4] + 3889429448 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = e + (i ^ s & (n ^ i)) + r[9] + 568446438 & 4294967295, e = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (e ^ n)) + r[14] + 3275163606 & 4294967295, s = e + (o << 9 & 4294967295 | o >>> 23), o = i + (e ^ n & (s ^ e)) + r[3] + 4107603335 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ e & (i ^ s)) + r[8] + 1163531501 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = e + (i ^ s & (n ^ i)) + r[13] + 2850285829 & 4294967295, e = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (e ^ n)) + r[2] + 4243563512 & 4294967295, s = e + (o << 9 & 4294967295 | o >>> 23), o = i + (e ^ n & (s ^ e)) + r[7] + 1735328473 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ e & (i ^ s)) + r[12] + 2368359562 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = e + (n ^ i ^ s) + r[5] + 4294588738 & 4294967295, e = n + (o << 4 & 4294967295 | o >>> 28), o = s + (e ^ n ^ i) + r[8] + 2272392833 & 4294967295, s = e + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ e ^ n) + r[11] + 1839030562 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ e) + r[14] + 4259657740 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = e + (n ^ i ^ s) + r[1] + 2763975236 & 4294967295, e = n + (o << 4 & 4294967295 | o >>> 28), o = s + (e ^ n ^ i) + r[4] + 1272893353 & 4294967295, s = e + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ e ^ n) + r[7] + 4139469664 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ e) + r[10] + 3200236656 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = e + (n ^ i ^ s) + r[13] + 681279174 & 4294967295, e = n + (o << 4 & 4294967295 | o >>> 28), o = s + (e ^ n ^ i) + r[0] + 3936430074 & 4294967295, s = e + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ e ^ n) + r[3] + 3572445317 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ e) + r[6] + 76029189 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = e + (n ^ i ^ s) + r[9] + 3654602809 & 4294967295, e = n + (o << 4 & 4294967295 | o >>> 28), o = s + (e ^ n ^ i) + r[12] + 3873151461 & 4294967295, s = e + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ e ^ n) + r[15] + 530742520 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ e) + r[2] + 3299628645 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = e + (i ^ (n | ~s)) + r[0] + 4096336452 & 4294967295, e = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (e | ~i)) + r[7] + 1126891415 & 4294967295, s = e + (o << 10 & 4294967295 | o >>> 22), o = i + (e ^ (s | ~n)) + r[14] + 2878612391 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~e)) + r[5] + 4237533241 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = e + (i ^ (n | ~s)) + r[12] + 1700485571 & 4294967295, e = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (e | ~i)) + r[3] + 2399980690 & 4294967295, s = e + (o << 10 & 4294967295 | o >>> 22), o = i + (e ^ (s | ~n)) + r[10] + 4293915773 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~e)) + r[1] + 2240044497 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = e + (i ^ (n | ~s)) + r[8] + 1873313359 & 4294967295, e = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (e | ~i)) + r[15] + 4264355552 & 4294967295, s = e + (o << 10 & 4294967295 | o >>> 22), o = i + (e ^ (s | ~n)) + r[6] + 2734768916 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~e)) + r[13] + 1309151649 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = e + (i ^ (n | ~s)) + r[4] + 4149444226 & 4294967295, e = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (e | ~i)) + r[11] + 3174756917 & 4294967295, s = e + (o << 10 & 4294967295 | o >>> 22), o = i + (e ^ (s | ~n)) + r[2] + 718787259 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~e)) + r[9] + 3951481745 & 4294967295, t.g[0] = t.g[0] + e & 4294967295, t.g[1] = t.g[1] + (i + (o << 21 & 4294967295 | o >>> 11)) & 4294967295, t.g[2] = t.g[2] + i & 4294967295, t.g[3] = t.g[3] + s & 4294967295
}
et.prototype.j = function(t, e) {
  e === void 0 && (e = t.length);
  for (var n = e - this.blockSize, r = this.m, i = this.h, s = 0; s < e;) {
      if (i == 0)
          for (; s <= n;) jo(this, t, s), s += this.blockSize;
      if (typeof t == "string") {
          for (; s < e;)
              if (r[i++] = t.charCodeAt(s++), i == this.blockSize) {
                  jo(this, r), i = 0;
                  break
              }
      } else
          for (; s < e;)
              if (r[i++] = t[s++], i == this.blockSize) {
                  jo(this, r), i = 0;
                  break
              }
  }
  this.h = i, this.i += e
};
et.prototype.l = function() {
  var t = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  t[0] = 128;
  for (var e = 1; e < t.length - 8; ++e) t[e] = 0;
  var n = 8 * this.i;
  for (e = t.length - 8; e < t.length; ++e) t[e] = n & 255, n /= 256;
  for (this.j(t), t = Array(16), e = n = 0; 4 > e; ++e)
      for (var r = 0; 32 > r; r += 8) t[n++] = this.g[e] >>> r & 255;
  return t
};

function K(t, e) {
  this.h = e;
  for (var n = [], r = !0, i = t.length - 1; 0 <= i; i--) {
      var s = t[i] | 0;
      r && s == e || (n[i] = s, r = !1)
  }
  this.g = n
}
var gT = {};

function uc(t) {
  return -128 <= t && 128 > t ? bI(t, function(e) {
      return new K([e | 0], 0 > e ? -1 : 0)
  }) : new K([t | 0], 0 > t ? -1 : 0)
}

function lt(t) {
  if (isNaN(t) || !isFinite(t)) return qn;
  if (0 > t) return _e(lt(-t));
  for (var e = [], n = 1, r = 0; t >= n; r++) e[r] = t / n | 0, n *= pa;
  return new K(e, 0)
}

function Mf(t, e) {
  if (t.length == 0) throw Error("number format error: empty string");
  if (e = e || 10, 2 > e || 36 < e) throw Error("radix out of range: " + e);
  if (t.charAt(0) == "-") return _e(Mf(t.substring(1), e));
  if (0 <= t.indexOf("-")) throw Error('number format error: interior "-" character');
  for (var n = lt(Math.pow(e, 8)), r = qn, i = 0; i < t.length; i += 8) {
      var s = Math.min(8, t.length - i),
          o = parseInt(t.substring(i, i + s), e);
      8 > s ? (s = lt(Math.pow(e, s)), r = r.R(s).add(lt(o))) : (r = r.R(n), r = r.add(lt(o)))
  }
  return r
}
var pa = 4294967296,
  qn = uc(0),
  ma = uc(1),
  Bu = uc(16777216);
b = K.prototype;
b.ea = function() {
  if (We(this)) return -_e(this).ea();
  for (var t = 0, e = 1, n = 0; n < this.g.length; n++) {
      var r = this.D(n);
      t += (0 <= r ? r : pa + r) * e, e *= pa
  }
  return t
};
b.toString = function(t) {
  if (t = t || 10, 2 > t || 36 < t) throw Error("radix out of range: " + t);
  if (At(this)) return "0";
  if (We(this)) return "-" + _e(this).toString(t);
  for (var e = lt(Math.pow(t, 6)), n = this, r = "";;) {
      var i = us(n, e).g;
      n = ls(n, i.R(e));
      var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(t);
      if (n = i, At(n)) return s + r;
      for (; 6 > s.length;) s = "0" + s;
      r = s + r
  }
};
b.D = function(t) {
  return 0 > t ? 0 : t < this.g.length ? this.g[t] : this.h
};

function At(t) {
  if (t.h != 0) return !1;
  for (var e = 0; e < t.g.length; e++)
      if (t.g[e] != 0) return !1;
  return !0
}

function We(t) {
  return t.h == -1
}
b.X = function(t) {
  return t = ls(this, t), We(t) ? -1 : At(t) ? 0 : 1
};

function _e(t) {
  for (var e = t.g.length, n = [], r = 0; r < e; r++) n[r] = ~t.g[r];
  return new K(n, ~t.h).add(ma)
}
b.abs = function() {
  return We(this) ? _e(this) : this
};
b.add = function(t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0, i = 0; i <= e; i++) {
      var s = r + (this.D(i) & 65535) + (t.D(i) & 65535),
          o = (s >>> 16) + (this.D(i) >>> 16) + (t.D(i) >>> 16);
      r = o >>> 16, s &= 65535, o &= 65535, n[i] = o << 16 | s
  }
  return new K(n, n[n.length - 1] & -2147483648 ? -1 : 0)
};

function ls(t, e) {
  return t.add(_e(e))
}
b.R = function(t) {
  if (At(this) || At(t)) return qn;
  if (We(this)) return We(t) ? _e(this).R(_e(t)) : _e(_e(this).R(t));
  if (We(t)) return _e(this.R(_e(t)));
  if (0 > this.X(Bu) && 0 > t.X(Bu)) return lt(this.ea() * t.ea());
  for (var e = this.g.length + t.g.length, n = [], r = 0; r < 2 * e; r++) n[r] = 0;
  for (r = 0; r < this.g.length; r++)
      for (var i = 0; i < t.g.length; i++) {
          var s = this.D(r) >>> 16,
              o = this.D(r) & 65535,
              l = t.D(i) >>> 16,
              u = t.D(i) & 65535;
          n[2 * r + 2 * i] += o * u, Fi(n, 2 * r + 2 * i), n[2 * r + 2 * i + 1] += s * u, Fi(n, 2 * r + 2 * i + 1), n[2 * r + 2 * i + 1] += o * l, Fi(n, 2 * r + 2 * i + 1), n[2 * r + 2 * i + 2] += s * l, Fi(n, 2 * r + 2 * i + 2)
      }
  for (r = 0; r < e; r++) n[r] = n[2 * r + 1] << 16 | n[2 * r];
  for (r = e; r < 2 * e; r++) n[r] = 0;
  return new K(n, 0)
};

function Fi(t, e) {
  for (;
      (t[e] & 65535) != t[e];) t[e + 1] += t[e] >>> 16, t[e] &= 65535, e++
}

function Er(t, e) {
  this.g = t, this.h = e
}

function us(t, e) {
  if (At(e)) throw Error("division by zero");
  if (At(t)) return new Er(qn, qn);
  if (We(t)) return e = us(_e(t), e), new Er(_e(e.g), _e(e.h));
  if (We(e)) return e = us(t, _e(e)), new Er(_e(e.g), e.h);
  if (30 < t.g.length) {
      if (We(t) || We(e)) throw Error("slowDivide_ only works with positive integers.");
      for (var n = ma, r = e; 0 >= r.X(t);) n = ju(n), r = ju(r);
      var i = Ln(n, 1),
          s = Ln(r, 1);
      for (r = Ln(r, 2), n = Ln(n, 2); !At(r);) {
          var o = s.add(r);
          0 >= o.X(t) && (i = i.add(n), s = o), r = Ln(r, 1), n = Ln(n, 1)
      }
      return e = ls(t, i.R(e)), new Er(i, e)
  }
  for (i = qn; 0 <= t.X(e);) {
      for (n = Math.max(1, Math.floor(t.ea() / e.ea())), r = Math.ceil(Math.log(n) / Math.LN2), r = 48 >= r ? 1 : Math.pow(2, r - 48), s = lt(n), o = s.R(e); We(o) || 0 < o.X(t);) n -= r, s = lt(n), o = s.R(e);
      At(s) && (s = ma), i = i.add(s), t = ls(t, o)
  }
  return new Er(i, t)
}
b.gb = function(t) {
  return us(this, t).h
};
b.and = function(t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++) n[r] = this.D(r) & t.D(r);
  return new K(n, this.h & t.h)
};
b.or = function(t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++) n[r] = this.D(r) | t.D(r);
  return new K(n, this.h | t.h)
};
b.xor = function(t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++) n[r] = this.D(r) ^ t.D(r);
  return new K(n, this.h ^ t.h)
};

function ju(t) {
  for (var e = t.g.length + 1, n = [], r = 0; r < e; r++) n[r] = t.D(r) << 1 | t.D(r - 1) >>> 31;
  return new K(n, t.h)
}

function Ln(t, e) {
  var n = e >> 5;
  e %= 32;
  for (var r = t.g.length - n, i = [], s = 0; s < r; s++) i[s] = 0 < e ? t.D(s + n) >>> e | t.D(s + n + 1) << 32 - e : t.D(s + n);
  return new K(i, t.h)
}
cs.prototype.createWebChannel = cs.prototype.g;
$e.prototype.send = $e.prototype.u;
$e.prototype.open = $e.prototype.m;
$e.prototype.close = $e.prototype.close;
xs.NO_ERROR = 0;
xs.TIMEOUT = 8;
xs.HTTP_ERROR = 6;
Zd.COMPLETE = "complete";
ef.EventType = li;
li.OPEN = "a";
li.CLOSE = "b";
li.ERROR = "c";
li.MESSAGE = "d";
ge.prototype.listen = ge.prototype.O;
re.prototype.listenOnce = re.prototype.P;
re.prototype.getLastError = re.prototype.Sa;
re.prototype.getLastErrorCode = re.prototype.Ia;
re.prototype.getStatus = re.prototype.da;
re.prototype.getResponseJson = re.prototype.Wa;
re.prototype.getResponseText = re.prototype.ja;
re.prototype.send = re.prototype.ha;
re.prototype.setWithCredentials = re.prototype.Oa;
et.prototype.digest = et.prototype.l;
et.prototype.reset = et.prototype.reset;
et.prototype.update = et.prototype.j;
K.prototype.add = K.prototype.add;
K.prototype.multiply = K.prototype.R;
K.prototype.modulo = K.prototype.gb;
K.prototype.compare = K.prototype.X;
K.prototype.toNumber = K.prototype.ea;
K.prototype.toString = K.prototype.toString;
K.prototype.getBits = K.prototype.D;
K.fromNumber = lt;
K.fromString = Mf;
var wT = function() {
      return new cs
  },
  yT = function() {
      return Ns()
  },
  qo = xs,
  _T = Zd,
  vT = Tn,
  qu = {
      xb: 0,
      Ab: 1,
      Bb: 2,
      Ub: 3,
      Zb: 4,
      Wb: 5,
      Xb: 6,
      Vb: 7,
      Tb: 8,
      Yb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Rb: 12,
      Nb: 13,
      Ob: 14,
      Mb: 15,
      Pb: 16,
      Qb: 17,
      tb: 18,
      sb: 19,
      ub: 20
  },
  Ui = ef,
  ET = re,
  IT = et,
  $n = K;
const $u = "@firebase/firestore";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ae {
  constructor(e) {
      this.uid = e
  }
  isAuthenticated() {
      return this.uid != null
  }
  toKey() {
      return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
  }
  isEqual(e) {
      return e.uid === this.uid
  }
}
Ae.UNAUTHENTICATED = new Ae(null), Ae.GOOGLE_CREDENTIALS = new Ae("google-credentials-uid"), Ae.FIRST_PARTY = new Ae("first-party-uid"), Ae.MOCK_USER = new Ae("mock-user");
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let or = "10.8.1";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const gn = new Ts("@firebase/firestore");

function Ir() {
  return gn.logLevel
}

function T(t, ...e) {
  if (gn.logLevel <= j.DEBUG) {
      const n = e.map(hc);
      gn.debug(`Firestore (${or}): ${t}`, ...n)
  }
}

function mt(t, ...e) {
  if (gn.logLevel <= j.ERROR) {
      const n = e.map(hc);
      gn.error(`Firestore (${or}): ${t}`, ...n)
  }
}

function Kn(t, ...e) {
  if (gn.logLevel <= j.WARN) {
      const n = e.map(hc);
      gn.warn(`Firestore (${or}): ${t}`, ...n)
  }
}

function hc(t) {
  if (typeof t == "string") return t;
  try {
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      return function(n) {
          return JSON.stringify(n)
      }(t)
  } catch {
      return t
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function V(t = "Unexpected state") {
  const e = `FIRESTORE (${or}) INTERNAL ASSERTION FAILED: ` + t;
  throw mt(e), new Error(e)
}

function Q(t, e) {
  t || V()
}

function L(t, e) {
  return t
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const E = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
class P extends rt {
  constructor(e, n) {
      super(e, n), this.code = e, this.message = n, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Je {
  constructor() {
      this.promise = new Promise((e, n) => {
          this.resolve = e, this.reject = n
      })
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ff {
  constructor(e, n) {
      this.user = n, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${e}`)
  }
}
class TT {
  getToken() {
      return Promise.resolve(null)
  }
  invalidateToken() {}
  start(e, n) {
      e.enqueueRetryable(() => n(Ae.UNAUTHENTICATED))
  }
  shutdown() {}
}
class bT {
  constructor(e) {
      this.token = e, this.changeListener = null
  }
  getToken() {
      return Promise.resolve(this.token)
  }
  invalidateToken() {}
  start(e, n) {
      this.changeListener = n, e.enqueueRetryable(() => n(this.token.user))
  }
  shutdown() {
      this.changeListener = null
  }
}
class AT {
  constructor(e) {
      this.t = e, this.currentUser = Ae.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null
  }
  start(e, n) {
      let r = this.i;
      const i = u => this.i !== r ? (r = this.i, n(u)) : Promise.resolve();
      let s = new Je;
      this.o = () => {
          this.i++, this.currentUser = this.u(), s.resolve(), s = new Je, e.enqueueRetryable(() => i(this.currentUser))
      };
      const o = () => {
              const u = s;
              e.enqueueRetryable(async () => {
                  await u.promise, await i(this.currentUser)
              })
          },
          l = u => {
              T("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = u, this.auth.addAuthTokenListener(this.o), o()
          };
      this.t.onInit(u => l(u)), setTimeout(() => {
          if (!this.auth) {
              const u = this.t.getImmediate({
                  optional: !0
              });
              u ? l(u) : (T("FirebaseAuthCredentialsProvider", "Auth not yet detected"), s.resolve(), s = new Je)
          }
      }, 0), o()
  }
  getToken() {
      const e = this.i,
          n = this.forceRefresh;
      return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(r => this.i !== e ? (T("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : r ? (Q(typeof r.accessToken == "string"), new Ff(r.accessToken, this.currentUser)) : null) : Promise.resolve(null)
  }
  invalidateToken() {
      this.forceRefresh = !0
  }
  shutdown() {
      this.auth && this.auth.removeAuthTokenListener(this.o)
  }
  u() {
      const e = this.auth && this.auth.getUid();
      return Q(e === null || typeof e == "string"), new Ae(e)
  }
}
class ST {
  constructor(e, n, r) {
      this.l = e, this.h = n, this.P = r, this.type = "FirstParty", this.user = Ae.FIRST_PARTY, this.I = new Map
  }
  T() {
      return this.P ? this.P() : null
  }
  get headers() {
      this.I.set("X-Goog-AuthUser", this.l);
      const e = this.T();
      return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I
  }
}
class PT {
  constructor(e, n, r) {
      this.l = e, this.h = n, this.P = r
  }
  getToken() {
      return Promise.resolve(new ST(this.l, this.h, this.P))
  }
  start(e, n) {
      e.enqueueRetryable(() => n(Ae.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class CT {
  constructor(e) {
      this.value = e, this.type = "AppCheck", this.headers = new Map, e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
  }
}
class RT {
  constructor(e) {
      this.A = e, this.forceRefresh = !1, this.appCheck = null, this.R = null
  }
  start(e, n) {
      const r = s => {
          s.error != null && T("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);
          const o = s.token !== this.R;
          return this.R = s.token, T("FirebaseAppCheckTokenProvider", `Received ${o?"new":"existing"} token.`), o ? n(s.token) : Promise.resolve()
      };
      this.o = s => {
          e.enqueueRetryable(() => r(s))
      };
      const i = s => {
          T("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = s, this.appCheck.addTokenListener(this.o)
      };
      this.A.onInit(s => i(s)), setTimeout(() => {
          if (!this.appCheck) {
              const s = this.A.getImmediate({
                  optional: !0
              });
              s ? i(s) : T("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
          }
      }, 0)
  }
  getToken() {
      const e = this.forceRefresh;
      return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then(n => n ? (Q(typeof n.token == "string"), this.R = n.token, new CT(n.token)) : null) : Promise.resolve(null)
  }
  invalidateToken() {
      this.forceRefresh = !0
  }
  shutdown() {
      this.appCheck && this.appCheck.removeTokenListener(this.o)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function kT(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
      n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else
      for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Uf {
  static newId() {
      const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          n = Math.floor(256 / e.length) * e.length;
      let r = "";
      for (; r.length < 20;) {
          const i = kT(40);
          for (let s = 0; s < i.length; ++s) r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length))
      }
      return r
  }
}

function H(t, e) {
  return t < e ? -1 : t > e ? 1 : 0
}

function Gn(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]))
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class fe {
  constructor(e, n) {
      if (this.seconds = e, this.nanoseconds = n, n < 0) throw new P(E.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
      if (n >= 1e9) throw new P(E.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
      if (e < -62135596800) throw new P(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
      if (e >= 253402300800) throw new P(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e)
  }
  static now() {
      return fe.fromMillis(Date.now())
  }
  static fromDate(e) {
      return fe.fromMillis(e.getTime())
  }
  static fromMillis(e) {
      const n = Math.floor(e / 1e3),
          r = Math.floor(1e6 * (e - 1e3 * n));
      return new fe(n, r)
  }
  toDate() {
      return new Date(this.toMillis())
  }
  toMillis() {
      return 1e3 * this.seconds + this.nanoseconds / 1e6
  }
  _compareTo(e) {
      return this.seconds === e.seconds ? H(this.nanoseconds, e.nanoseconds) : H(this.seconds, e.seconds)
  }
  isEqual(e) {
      return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
  }
  toString() {
      return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
  }
  toJSON() {
      return {
          seconds: this.seconds,
          nanoseconds: this.nanoseconds
      }
  }
  valueOf() {
      const e = this.seconds - -62135596800;
      return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class x {
  constructor(e) {
      this.timestamp = e
  }
  static fromTimestamp(e) {
      return new x(e)
  }
  static min() {
      return new x(new fe(0, 0))
  }
  static max() {
      return new x(new fe(253402300799, 999999999))
  }
  compareTo(e) {
      return this.timestamp._compareTo(e.timestamp)
  }
  isEqual(e) {
      return this.timestamp.isEqual(e.timestamp)
  }
  toMicroseconds() {
      return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
  }
  toString() {
      return "SnapshotVersion(" + this.timestamp.toString() + ")"
  }
  toTimestamp() {
      return this.timestamp
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Jr {
  constructor(e, n, r) {
      n === void 0 ? n = 0 : n > e.length && V(), r === void 0 ? r = e.length - n : r > e.length - n && V(), this.segments = e, this.offset = n, this.len = r
  }
  get length() {
      return this.len
  }
  isEqual(e) {
      return Jr.comparator(this, e) === 0
  }
  child(e) {
      const n = this.segments.slice(this.offset, this.limit());
      return e instanceof Jr ? e.forEach(r => {
          n.push(r)
      }) : n.push(e), this.construct(n)
  }
  limit() {
      return this.offset + this.length
  }
  popFirst(e) {
      return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e)
  }
  popLast() {
      return this.construct(this.segments, this.offset, this.length - 1)
  }
  firstSegment() {
      return this.segments[this.offset]
  }
  lastSegment() {
      return this.get(this.length - 1)
  }
  get(e) {
      return this.segments[this.offset + e]
  }
  isEmpty() {
      return this.length === 0
  }
  isPrefixOf(e) {
      if (e.length < this.length) return !1;
      for (let n = 0; n < this.length; n++)
          if (this.get(n) !== e.get(n)) return !1;
      return !0
  }
  isImmediateParentOf(e) {
      if (this.length + 1 !== e.length) return !1;
      for (let n = 0; n < this.length; n++)
          if (this.get(n) !== e.get(n)) return !1;
      return !0
  }
  forEach(e) {
      for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n])
  }
  toArray() {
      return this.segments.slice(this.offset, this.limit())
  }
  static comparator(e, n) {
      const r = Math.min(e.length, n.length);
      for (let i = 0; i < r; i++) {
          const s = e.get(i),
              o = n.get(i);
          if (s < o) return -1;
          if (s > o) return 1
      }
      return e.length < n.length ? -1 : e.length > n.length ? 1 : 0
  }
}
class Z extends Jr {
  construct(e, n, r) {
      return new Z(e, n, r)
  }
  canonicalString() {
      return this.toArray().join("/")
  }
  toString() {
      return this.canonicalString()
  }
  toUriEncodedString() {
      return this.toArray().map(encodeURIComponent).join("/")
  }
  static fromString(...e) {
      const n = [];
      for (const r of e) {
          if (r.indexOf("//") >= 0) throw new P(E.INVALID_ARGUMENT, `Invalid segment (${r}). Paths must not contain // in them.`);
          n.push(...r.split("/").filter(i => i.length > 0))
      }
      return new Z(n)
  }
  static emptyPath() {
      return new Z([])
  }
}
const DT = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ve extends Jr {
  construct(e, n, r) {
      return new ve(e, n, r)
  }
  static isValidIdentifier(e) {
      return DT.test(e)
  }
  canonicalString() {
      return this.toArray().map(e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ve.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".")
  }
  toString() {
      return this.canonicalString()
  }
  isKeyField() {
      return this.length === 1 && this.get(0) === "__name__"
  }
  static keyField() {
      return new ve(["__name__"])
  }
  static fromServerFormat(e) {
      const n = [];
      let r = "",
          i = 0;
      const s = () => {
          if (r.length === 0) throw new P(E.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
          n.push(r), r = ""
      };
      let o = !1;
      for (; i < e.length;) {
          const l = e[i];
          if (l === "\\") {
              if (i + 1 === e.length) throw new P(E.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
              const u = e[i + 1];
              if (u !== "\\" && u !== "." && u !== "`") throw new P(E.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
              r += u, i += 2
          } else l === "`" ? (o = !o, i++) : l !== "." || o ? (r += l, i++) : (s(), i++)
      }
      if (s(), o) throw new P(E.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
      return new ve(n)
  }
  static emptyPath() {
      return new ve([])
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class k {
  constructor(e) {
      this.path = e
  }
  static fromPath(e) {
      return new k(Z.fromString(e))
  }
  static fromName(e) {
      return new k(Z.fromString(e).popFirst(5))
  }
  static empty() {
      return new k(Z.emptyPath())
  }
  get collectionGroup() {
      return this.path.popLast().lastSegment()
  }
  hasCollectionId(e) {
      return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
  }
  getCollectionGroup() {
      return this.path.get(this.path.length - 2)
  }
  getCollectionPath() {
      return this.path.popLast()
  }
  isEqual(e) {
      return e !== null && Z.comparator(this.path, e.path) === 0
  }
  toString() {
      return this.path.toString()
  }
  static comparator(e, n) {
      return Z.comparator(e.path, n.path)
  }
  static isDocumentKey(e) {
      return e.length % 2 == 0
  }
  static fromSegments(e) {
      return new k(new Z(e.slice()))
  }
}

function VT(t, e) {
  const n = t.toTimestamp().seconds,
      r = t.toTimestamp().nanoseconds + 1,
      i = x.fromTimestamp(r === 1e9 ? new fe(n + 1, 0) : new fe(n, r));
  return new $t(i, k.empty(), e)
}

function OT(t) {
  return new $t(t.readTime, t.key, -1)
}
class $t {
  constructor(e, n, r) {
      this.readTime = e, this.documentKey = n, this.largestBatchId = r
  }
  static min() {
      return new $t(x.min(), k.empty(), -1)
  }
  static max() {
      return new $t(x.max(), k.empty(), -1)
  }
}

function NT(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0 ? n : (n = k.comparator(t.documentKey, e.documentKey), n !== 0 ? n : H(t.largestBatchId, e.largestBatchId))
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const xT = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class LT {
  constructor() {
      this.onCommittedListeners = []
  }
  addOnCommittedListener(e) {
      this.onCommittedListeners.push(e)
  }
  raiseOnCommittedEvent() {
      this.onCommittedListeners.forEach(e => e())
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function pi(t) {
  if (t.code !== E.FAILED_PRECONDITION || t.message !== xT) throw t;
  T("LocalStore", "Unexpectedly lost primary lease")
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class I {
  constructor(e) {
      this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e(n => {
          this.isDone = !0, this.result = n, this.nextCallback && this.nextCallback(n)
      }, n => {
          this.isDone = !0, this.error = n, this.catchCallback && this.catchCallback(n)
      })
  } catch (e) {
      return this.next(void 0, e)
  }
  next(e, n) {
      return this.callbackAttached && V(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new I((r, i) => {
          this.nextCallback = s => {
              this.wrapSuccess(e, s).next(r, i)
          }, this.catchCallback = s => {
              this.wrapFailure(n, s).next(r, i)
          }
      })
  }
  toPromise() {
      return new Promise((e, n) => {
          this.next(e, n)
      })
  }
  wrapUserFunction(e) {
      try {
          const n = e();
          return n instanceof I ? n : I.resolve(n)
      } catch (n) {
          return I.reject(n)
      }
  }
  wrapSuccess(e, n) {
      return e ? this.wrapUserFunction(() => e(n)) : I.resolve(n)
  }
  wrapFailure(e, n) {
      return e ? this.wrapUserFunction(() => e(n)) : I.reject(n)
  }
  static resolve(e) {
      return new I((n, r) => {
          n(e)
      })
  }
  static reject(e) {
      return new I((n, r) => {
          r(e)
      })
  }
  static waitFor(e) {
      return new I((n, r) => {
          let i = 0,
              s = 0,
              o = !1;
          e.forEach(l => {
              ++i, l.next(() => {
                  ++s, o && s === i && n()
              }, u => r(u))
          }), o = !0, s === i && n()
      })
  }
  static or(e) {
      let n = I.resolve(!1);
      for (const r of e) n = n.next(i => i ? I.resolve(i) : r());
      return n
  }
  static forEach(e, n) {
      const r = [];
      return e.forEach((i, s) => {
          r.push(n.call(this, i, s))
      }), this.waitFor(r)
  }
  static mapArray(e, n) {
      return new I((r, i) => {
          const s = e.length,
              o = new Array(s);
          let l = 0;
          for (let u = 0; u < s; u++) {
              const f = u;
              n(e[f]).next(p => {
                  o[f] = p, ++l, l === s && r(o)
              }, p => i(p))
          }
      })
  }
  static doWhile(e, n) {
      return new I((r, i) => {
          const s = () => {
              e() === !0 ? n().next(() => {
                  s()
              }, i) : r()
          };
          s()
      })
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class dc {
  constructor(e, n) {
      this.action = e, this.transaction = n, this.aborted = !1, this.V = new Je, this.transaction.oncomplete = () => {
          this.V.resolve()
      }, this.transaction.onabort = () => {
          n.error ? this.V.reject(new Vr(e, n.error)) : this.V.resolve()
      }, this.transaction.onerror = r => {
          const i = fc(r.target.error);
          this.V.reject(new Vr(e, i))
      }
  }
  static open(e, n, r, i) {
      try {
          return new dc(n, e.transaction(i, r))
      } catch (s) {
          throw new Vr(n, s)
      }
  }
  get m() {
      return this.V.promise
  }
  abort(e) {
      e && this.V.reject(e), this.aborted || (T("SimpleDb", "Aborting transaction:", e ? e.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
  }
  g() {
      const e = this.transaction;
      this.aborted || typeof e.commit != "function" || e.commit()
  }
  store(e) {
      const n = this.transaction.objectStore(e);
      return new FT(n)
  }
}
class cn {
  constructor(e, n, r) {
      this.name = e, this.version = n, this.p = r, cn.S(ue()) === 12.2 && mt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
  }
  static delete(e) {
      return T("SimpleDb", "Removing database:", e), rn(window.indexedDB.deleteDatabase(e)).toPromise()
  }
  static D() {
      if (!ka()) return !1;
      if (cn.C()) return !0;
      const e = ue(),
          n = cn.S(e),
          r = 0 < n && n < 10,
          i = cn.v(e),
          s = 0 < i && i < 4.5;
      return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || s)
  }
  static C() {
      var e;
      return typeof process < "u" && ((e = process.__PRIVATE_env) === null || e === void 0 ? void 0 : e.F) === "YES"
  }
  static M(e, n) {
      return e.store(n)
  }
  static S(e) {
      const n = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
          r = n ? n[1].split("_").slice(0, 2).join(".") : "-1";
      return Number(r)
  }
  static v(e) {
      const n = e.match(/Android ([\d.]+)/i),
          r = n ? n[1].split(".").slice(0, 2).join(".") : "-1";
      return Number(r)
  }
  async O(e) {
      return this.db || (T("SimpleDb", "Opening database:", this.name), this.db = await new Promise((n, r) => {
          const i = indexedDB.open(this.name, this.version);
          i.onsuccess = s => {
              const o = s.target.result;
              n(o)
          }, i.onblocked = () => {
              r(new Vr(e, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
          }, i.onerror = s => {
              const o = s.target.error;
              o.name === "VersionError" ? r(new P(E.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o.name === "InvalidStateError" ? r(new P(E.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + o)) : r(new Vr(e, o))
          }, i.onupgradeneeded = s => {
              T("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', s.oldVersion);
              const o = s.target.result;
              this.p.N(o, i.transaction, s.oldVersion, this.version).next(() => {
                  T("SimpleDb", "Database upgrade to version " + this.version + " complete")
              })
          }
      })), this.B && (this.db.onversionchange = n => this.B(n)), this.db
  }
  L(e) {
      this.B = e, this.db && (this.db.onversionchange = n => e(n))
  }
  async runTransaction(e, n, r, i) {
      const s = n === "readonly";
      let o = 0;
      for (;;) {
          ++o;
          try {
              this.db = await this.O(e);
              const l = dc.open(this.db, e, s ? "readonly" : "readwrite", r),
                  u = i(l).next(f => (l.g(), f)).catch(f => (l.abort(f), I.reject(f))).toPromise();
              return u.catch(() => {}), await l.m, u
          } catch (l) {
              const u = l,
                  f = u.name !== "FirebaseError" && o < 3;
              if (T("SimpleDb", "Transaction failed with error:", u.message, "Retrying:", f), this.close(), !f) return Promise.reject(u)
          }
      }
  }
  close() {
      this.db && this.db.close(), this.db = void 0
  }
}
class MT {
  constructor(e) {
      this.k = e, this.q = !1, this.K = null
  }
  get isDone() {
      return this.q
  }
  get $() {
      return this.K
  }
  set cursor(e) {
      this.k = e
  }
  done() {
      this.q = !0
  }
  U(e) {
      this.K = e
  }
  delete() {
      return rn(this.k.delete())
  }
}
class Vr extends P {
  constructor(e, n) {
      super(E.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${n}`), this.name = "IndexedDbTransactionError"
  }
}

function mi(t) {
  return t.name === "IndexedDbTransactionError"
}
class FT {
  constructor(e) {
      this.store = e
  }
  put(e, n) {
      let r;
      return n !== void 0 ? (T("SimpleDb", "PUT", this.store.name, e, n), r = this.store.put(n, e)) : (T("SimpleDb", "PUT", this.store.name, "<auto-key>", e), r = this.store.put(e)), rn(r)
  }
  add(e) {
      return T("SimpleDb", "ADD", this.store.name, e, e), rn(this.store.add(e))
  }
  get(e) {
      return rn(this.store.get(e)).next(n => (n === void 0 && (n = null), T("SimpleDb", "GET", this.store.name, e, n), n))
  }
  delete(e) {
      return T("SimpleDb", "DELETE", this.store.name, e), rn(this.store.delete(e))
  }
  count() {
      return T("SimpleDb", "COUNT", this.store.name), rn(this.store.count())
  }
  W(e, n) {
      const r = this.options(e, n),
          i = r.index ? this.store.index(r.index) : this.store;
      if (typeof i.getAll == "function") {
          const s = i.getAll(r.range);
          return new I((o, l) => {
              s.onerror = u => {
                  l(u.target.error)
              }, s.onsuccess = u => {
                  o(u.target.result)
              }
          })
      } {
          const s = this.cursor(r),
              o = [];
          return this.G(s, (l, u) => {
              o.push(u)
          }).next(() => o)
      }
  }
  j(e, n) {
      const r = this.store.getAll(e, n === null ? void 0 : n);
      return new I((i, s) => {
          r.onerror = o => {
              s(o.target.error)
          }, r.onsuccess = o => {
              i(o.target.result)
          }
      })
  }
  H(e, n) {
      T("SimpleDb", "DELETE ALL", this.store.name);
      const r = this.options(e, n);
      r.J = !1;
      const i = this.cursor(r);
      return this.G(i, (s, o, l) => l.delete())
  }
  Y(e, n) {
      let r;
      n ? r = e : (r = {}, n = e);
      const i = this.cursor(r);
      return this.G(i, n)
  }
  Z(e) {
      const n = this.cursor({});
      return new I((r, i) => {
          n.onerror = s => {
              const o = fc(s.target.error);
              i(o)
          }, n.onsuccess = s => {
              const o = s.target.result;
              o ? e(o.primaryKey, o.value).next(l => {
                  l ? o.continue() : r()
              }) : r()
          }
      })
  }
  G(e, n) {
      const r = [];
      return new I((i, s) => {
          e.onerror = o => {
              s(o.target.error)
          }, e.onsuccess = o => {
              const l = o.target.result;
              if (!l) return void i();
              const u = new MT(l),
                  f = n(l.primaryKey, l.value, u);
              if (f instanceof I) {
                  const p = f.catch(g => (u.done(), I.reject(g)));
                  r.push(p)
              }
              u.isDone ? i() : u.$ === null ? l.continue() : l.continue(u.$)
          }
      }).next(() => I.waitFor(r))
  }
  options(e, n) {
      let r;
      return e !== void 0 && (typeof e == "string" ? r = e : n = e), {
          index: r,
          range: n
      }
  }
  cursor(e) {
      let n = "next";
      if (e.reverse && (n = "prev"), e.index) {
          const r = this.store.index(e.index);
          return e.J ? r.openKeyCursor(e.range, n) : r.openCursor(e.range, n)
      }
      return this.store.openCursor(e.range, n)
  }
}

function rn(t) {
  return new I((e, n) => {
      t.onsuccess = r => {
          const i = r.target.result;
          e(i)
      }, t.onerror = r => {
          const i = fc(r.target.error);
          n(i)
      }
  })
}
let zu = !1;

function fc(t) {
  const e = cn.S(ue());
  if (e >= 12.2 && e < 13) {
      const n = "An internal error was encountered in the Indexed Database server";
      if (t.message.indexOf(n) >= 0) {
          const r = new P("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
          return zu || (zu = !0, setTimeout(() => {
              throw r
          }, 0)), r
      }
  }
  return t
}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class pc {
  constructor(e, n) {
      this.previousValue = e, n && (n.sequenceNumberHandler = r => this.se(r), this.oe = r => n.writeSequenceNumber(r))
  }
  se(e) {
      return this.previousValue = Math.max(e, this.previousValue), this.previousValue
  }
  next() {
      const e = ++this.previousValue;
      return this.oe && this.oe(e), e
  }
}
pc._e = -1;

function zs(t) {
  return t == null
}

function hs(t) {
  return t === 0 && 1 / t == -1 / 0
}

function UT(t) {
  return typeof t == "number" && Number.isInteger(t) && !hs(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Hu(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e
}

function bn(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
}

function Bf(t) {
  for (const e in t)
      if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class te {
  constructor(e, n) {
      this.comparator = e, this.root = n || ye.EMPTY
  }
  insert(e, n) {
      return new te(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, ye.BLACK, null, null))
  }
  remove(e) {
      return new te(this.comparator, this.root.remove(e, this.comparator).copy(null, null, ye.BLACK, null, null))
  }
  get(e) {
      let n = this.root;
      for (; !n.isEmpty();) {
          const r = this.comparator(e, n.key);
          if (r === 0) return n.value;
          r < 0 ? n = n.left : r > 0 && (n = n.right)
      }
      return null
  }
  indexOf(e) {
      let n = 0,
          r = this.root;
      for (; !r.isEmpty();) {
          const i = this.comparator(e, r.key);
          if (i === 0) return n + r.left.size;
          i < 0 ? r = r.left : (n += r.left.size + 1, r = r.right)
      }
      return -1
  }
  isEmpty() {
      return this.root.isEmpty()
  }
  get size() {
      return this.root.size
  }
  minKey() {
      return this.root.minKey()
  }
  maxKey() {
      return this.root.maxKey()
  }
  inorderTraversal(e) {
      return this.root.inorderTraversal(e)
  }
  forEach(e) {
      this.inorderTraversal((n, r) => (e(n, r), !1))
  }
  toString() {
      const e = [];
      return this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)), `{${e.join(", ")}}`
  }
  reverseTraversal(e) {
      return this.root.reverseTraversal(e)
  }
  getIterator() {
      return new Bi(this.root, null, this.comparator, !1)
  }
  getIteratorFrom(e) {
      return new Bi(this.root, e, this.comparator, !1)
  }
  getReverseIterator() {
      return new Bi(this.root, null, this.comparator, !0)
  }
  getReverseIteratorFrom(e) {
      return new Bi(this.root, e, this.comparator, !0)
  }
}
class Bi {
  constructor(e, n, r, i) {
      this.isReverse = i, this.nodeStack = [];
      let s = 1;
      for (; !e.isEmpty();)
          if (s = n ? r(e.key, n) : 1, n && i && (s *= -1), s < 0) e = this.isReverse ? e.left : e.right;
          else {
              if (s === 0) {
                  this.nodeStack.push(e);
                  break
              }
              this.nodeStack.push(e), e = this.isReverse ? e.right : e.left
          }
  }
  getNext() {
      let e = this.nodeStack.pop();
      const n = {
          key: e.key,
          value: e.value
      };
      if (this.isReverse)
          for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
      else
          for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
      return n
  }
  hasNext() {
      return this.nodeStack.length > 0
  }
  peek() {
      if (this.nodeStack.length === 0) return null;
      const e = this.nodeStack[this.nodeStack.length - 1];
      return {
          key: e.key,
          value: e.value
      }
  }
}
class ye {
  constructor(e, n, r, i, s) {
      this.key = e, this.value = n, this.color = r ?? ye.RED, this.left = i ?? ye.EMPTY, this.right = s ?? ye.EMPTY, this.size = this.left.size + 1 + this.right.size
  }
  copy(e, n, r, i, s) {
      return new ye(e ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right)
  }
  isEmpty() {
      return !1
  }
  inorderTraversal(e) {
      return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
  }
  reverseTraversal(e) {
      return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
  }
  min() {
      return this.left.isEmpty() ? this : this.left.min()
  }
  minKey() {
      return this.min().key
  }
  maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey()
  }
  insert(e, n, r) {
      let i = this;
      const s = r(e, i.key);
      return i = s < 0 ? i.copy(null, null, null, i.left.insert(e, n, r), null) : s === 0 ? i.copy(null, n, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, n, r)), i.fixUp()
  }
  removeMin() {
      if (this.left.isEmpty()) return ye.EMPTY;
      let e = this;
      return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp()
  }
  remove(e, n) {
      let r, i = this;
      if (n(e, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(e, n), null);
      else {
          if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), n(e, i.key) === 0) {
              if (i.right.isEmpty()) return ye.EMPTY;
              r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin())
          }
          i = i.copy(null, null, null, null, i.right.remove(e, n))
      }
      return i.fixUp()
  }
  isRed() {
      return this.color
  }
  fixUp() {
      let e = this;
      return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
  }
  moveRedLeft() {
      let e = this.colorFlip();
      return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e
  }
  moveRedRight() {
      let e = this.colorFlip();
      return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e
  }
  rotateLeft() {
      const e = this.copy(null, null, ye.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, e, null)
  }
  rotateRight() {
      const e = this.copy(null, null, ye.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, e)
  }
  colorFlip() {
      const e = this.left.copy(null, null, !this.left.color, null, null),
          n = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, e, n)
  }
  checkMaxDepth() {
      const e = this.check();
      return Math.pow(2, e) <= this.size + 1
  }
  check() {
      if (this.isRed() && this.left.isRed() || this.right.isRed()) throw V();
      const e = this.left.check();
      if (e !== this.right.check()) throw V();
      return e + (this.isRed() ? 0 : 1)
  }
}
ye.EMPTY = null, ye.RED = !0, ye.BLACK = !1;
ye.EMPTY = new class {
  constructor() {
      this.size = 0
  }
  get key() {
      throw V()
  }
  get value() {
      throw V()
  }
  get color() {
      throw V()
  }
  get left() {
      throw V()
  }
  get right() {
      throw V()
  }
  copy(e, n, r, i, s) {
      return this
  }
  insert(e, n, r) {
      return new ye(e, n)
  }
  remove(e, n) {
      return this
  }
  isEmpty() {
      return !0
  }
  inorderTraversal(e) {
      return !1
  }
  reverseTraversal(e) {
      return !1
  }
  minKey() {
      return null
  }
  maxKey() {
      return null
  }
  isRed() {
      return !1
  }
  checkMaxDepth() {
      return !0
  }
  check() {
      return 0
  }
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ie {
  constructor(e) {
      this.comparator = e, this.data = new te(this.comparator)
  }
  has(e) {
      return this.data.get(e) !== null
  }
  first() {
      return this.data.minKey()
  }
  last() {
      return this.data.maxKey()
  }
  get size() {
      return this.data.size
  }
  indexOf(e) {
      return this.data.indexOf(e)
  }
  forEach(e) {
      this.data.inorderTraversal((n, r) => (e(n), !1))
  }
  forEachInRange(e, n) {
      const r = this.data.getIteratorFrom(e[0]);
      for (; r.hasNext();) {
          const i = r.getNext();
          if (this.comparator(i.key, e[1]) >= 0) return;
          n(i.key)
      }
  }
  forEachWhile(e, n) {
      let r;
      for (r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator(); r.hasNext();)
          if (!e(r.getNext().key)) return
  }
  firstAfterOrEqual(e) {
      const n = this.data.getIteratorFrom(e);
      return n.hasNext() ? n.getNext().key : null
  }
  getIterator() {
      return new Wu(this.data.getIterator())
  }
  getIteratorFrom(e) {
      return new Wu(this.data.getIteratorFrom(e))
  }
  add(e) {
      return this.copy(this.data.remove(e).insert(e, !0))
  }
  delete(e) {
      return this.has(e) ? this.copy(this.data.remove(e)) : this
  }
  isEmpty() {
      return this.data.isEmpty()
  }
  unionWith(e) {
      let n = this;
      return n.size < e.size && (n = e, e = this), e.forEach(r => {
          n = n.add(r)
      }), n
  }
  isEqual(e) {
      if (!(e instanceof Ie) || this.size !== e.size) return !1;
      const n = this.data.getIterator(),
          r = e.data.getIterator();
      for (; n.hasNext();) {
          const i = n.getNext().key,
              s = r.getNext().key;
          if (this.comparator(i, s) !== 0) return !1
      }
      return !0
  }
  toArray() {
      const e = [];
      return this.forEach(n => {
          e.push(n)
      }), e
  }
  toString() {
      const e = [];
      return this.forEach(n => e.push(n)), "SortedSet(" + e.toString() + ")"
  }
  copy(e) {
      const n = new Ie(this.comparator);
      return n.data = e, n
  }
}
class Wu {
  constructor(e) {
      this.iter = e
  }
  getNext() {
      return this.iter.getNext().key
  }
  hasNext() {
      return this.iter.hasNext()
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Be {
  constructor(e) {
      this.fields = e, e.sort(ve.comparator)
  }
  static empty() {
      return new Be([])
  }
  unionWith(e) {
      let n = new Ie(ve.comparator);
      for (const r of this.fields) n = n.add(r);
      for (const r of e) n = n.add(r);
      return new Be(n.toArray())
  }
  covers(e) {
      for (const n of this.fields)
          if (n.isPrefixOf(e)) return !0;
      return !1
  }
  isEqual(e) {
      return Gn(this.fields, e.fields, (n, r) => n.isEqual(r))
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class jf extends Error {
  constructor() {
      super(...arguments), this.name = "Base64DecodeError"
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Re {
  constructor(e) {
      this.binaryString = e
  }
  static fromBase64String(e) {
      const n = function(i) {
          try {
              return atob(i)
          } catch (s) {
              throw typeof DOMException < "u" && s instanceof DOMException ? new jf("Invalid base64 string: " + s) : s
          }
      }(e);
      return new Re(n)
  }
  static fromUint8Array(e) {
      const n = function(i) {
          let s = "";
          for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o]);
          return s
      }(e);
      return new Re(n)
  } [Symbol.iterator]() {
      let e = 0;
      return {
          next: () => e < this.binaryString.length ? {
              value: this.binaryString.charCodeAt(e++),
              done: !1
          } : {
              value: void 0,
              done: !0
          }
      }
  }
  toBase64() {
      return function(n) {
          return btoa(n)
      }(this.binaryString)
  }
  toUint8Array() {
      return function(n) {
          const r = new Uint8Array(n.length);
          for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
          return r
      }(this.binaryString)
  }
  approximateByteSize() {
      return 2 * this.binaryString.length
  }
  compareTo(e) {
      return H(this.binaryString, e.binaryString)
  }
  isEqual(e) {
      return this.binaryString === e.binaryString
  }
}
Re.EMPTY_BYTE_STRING = new Re("");
const BT = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

function zt(t) {
  if (Q(!!t), typeof t == "string") {
      let e = 0;
      const n = BT.exec(t);
      if (Q(!!n), n[1]) {
          let i = n[1];
          i = (i + "000000000").substr(0, 9), e = Number(i)
      }
      const r = new Date(t);
      return {
          seconds: Math.floor(r.getTime() / 1e3),
          nanos: e
      }
  }
  return {
      seconds: ce(t.seconds),
      nanos: ce(t.nanos)
  }
}

function ce(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0
}

function wn(t) {
  return typeof t == "string" ? Re.fromBase64String(t) : Re.fromUint8Array(t)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function mc(t) {
  var e, n;
  return ((n = (((e = t?.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || n === void 0 ? void 0 : n.stringValue) === "server_timestamp"
}

function gc(t) {
  const e = t.mapValue.fields.__previous_value__;
  return mc(e) ? gc(e) : e
}

function Yr(t) {
  const e = zt(t.mapValue.fields.__local_write_time__.timestampValue);
  return new fe(e.seconds, e.nanos)
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class jT {
  constructor(e, n, r, i, s, o, l, u, f) {
      this.databaseId = e, this.appId = n, this.persistenceKey = r, this.host = i, this.ssl = s, this.forceLongPolling = o, this.autoDetectLongPolling = l, this.longPollingOptions = u, this.useFetchStreams = f
  }
}
class Xr {
  constructor(e, n) {
      this.projectId = e, this.database = n || "(default)"
  }
  static empty() {
      return new Xr("", "")
  }
  get isDefaultDatabase() {
      return this.database === "(default)"
  }
  isEqual(e) {
      return e instanceof Xr && e.projectId === this.projectId && e.database === this.database
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const ji = {
  mapValue: {
      fields: {
          __type__: {
              stringValue: "__max__"
          }
      }
  }
};

function yn(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? mc(t) ? 4 : qT(t) ? 9007199254740991 : 10 : V()
}

function gt(t, e) {
  if (t === e) return !0;
  const n = yn(t);
  if (n !== yn(e)) return !1;
  switch (n) {
      case 0:
      case 9007199254740991:
          return !0;
      case 1:
          return t.booleanValue === e.booleanValue;
      case 4:
          return Yr(t).isEqual(Yr(e));
      case 3:
          return function(i, s) {
              if (typeof i.timestampValue == "string" && typeof s.timestampValue == "string" && i.timestampValue.length === s.timestampValue.length) return i.timestampValue === s.timestampValue;
              const o = zt(i.timestampValue),
                  l = zt(s.timestampValue);
              return o.seconds === l.seconds && o.nanos === l.nanos
          }(t, e);
      case 5:
          return t.stringValue === e.stringValue;
      case 6:
          return function(i, s) {
              return wn(i.bytesValue).isEqual(wn(s.bytesValue))
          }(t, e);
      case 7:
          return t.referenceValue === e.referenceValue;
      case 8:
          return function(i, s) {
              return ce(i.geoPointValue.latitude) === ce(s.geoPointValue.latitude) && ce(i.geoPointValue.longitude) === ce(s.geoPointValue.longitude)
          }(t, e);
      case 2:
          return function(i, s) {
              if ("integerValue" in i && "integerValue" in s) return ce(i.integerValue) === ce(s.integerValue);
              if ("doubleValue" in i && "doubleValue" in s) {
                  const o = ce(i.doubleValue),
                      l = ce(s.doubleValue);
                  return o === l ? hs(o) === hs(l) : isNaN(o) && isNaN(l)
              }
              return !1
          }(t, e);
      case 9:
          return Gn(t.arrayValue.values || [], e.arrayValue.values || [], gt);
      case 10:
          return function(i, s) {
              const o = i.mapValue.fields || {},
                  l = s.mapValue.fields || {};
              if (Hu(o) !== Hu(l)) return !1;
              for (const u in o)
                  if (o.hasOwnProperty(u) && (l[u] === void 0 || !gt(o[u], l[u]))) return !1;
              return !0
          }(t, e);
      default:
          return V()
  }
}

function Zr(t, e) {
  return (t.values || []).find(n => gt(n, e)) !== void 0
}

function Qn(t, e) {
  if (t === e) return 0;
  const n = yn(t),
      r = yn(e);
  if (n !== r) return H(n, r);
  switch (n) {
      case 0:
      case 9007199254740991:
          return 0;
      case 1:
          return H(t.booleanValue, e.booleanValue);
      case 2:
          return function(s, o) {
              const l = ce(s.integerValue || s.doubleValue),
                  u = ce(o.integerValue || o.doubleValue);
              return l < u ? -1 : l > u ? 1 : l === u ? 0 : isNaN(l) ? isNaN(u) ? 0 : -1 : 1
          }(t, e);
      case 3:
          return Ku(t.timestampValue, e.timestampValue);
      case 4:
          return Ku(Yr(t), Yr(e));
      case 5:
          return H(t.stringValue, e.stringValue);
      case 6:
          return function(s, o) {
              const l = wn(s),
                  u = wn(o);
              return l.compareTo(u)
          }(t.bytesValue, e.bytesValue);
      case 7:
          return function(s, o) {
              const l = s.split("/"),
                  u = o.split("/");
              for (let f = 0; f < l.length && f < u.length; f++) {
                  const p = H(l[f], u[f]);
                  if (p !== 0) return p
              }
              return H(l.length, u.length)
          }(t.referenceValue, e.referenceValue);
      case 8:
          return function(s, o) {
              const l = H(ce(s.latitude), ce(o.latitude));
              return l !== 0 ? l : H(ce(s.longitude), ce(o.longitude))
          }(t.geoPointValue, e.geoPointValue);
      case 9:
          return function(s, o) {
              const l = s.values || [],
                  u = o.values || [];
              for (let f = 0; f < l.length && f < u.length; ++f) {
                  const p = Qn(l[f], u[f]);
                  if (p) return p
              }
              return H(l.length, u.length)
          }(t.arrayValue, e.arrayValue);
      case 10:
          return function(s, o) {
              if (s === ji.mapValue && o === ji.mapValue) return 0;
              if (s === ji.mapValue) return 1;
              if (o === ji.mapValue) return -1;
              const l = s.fields || {},
                  u = Object.keys(l),
                  f = o.fields || {},
                  p = Object.keys(f);
              u.sort(), p.sort();
              for (let g = 0; g < u.length && g < p.length; ++g) {
                  const w = H(u[g], p[g]);
                  if (w !== 0) return w;
                  const v = Qn(l[u[g]], f[p[g]]);
                  if (v !== 0) return v
              }
              return H(u.length, p.length)
          }(t.mapValue, e.mapValue);
      default:
          throw V()
  }
}

function Ku(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length) return H(t, e);
  const n = zt(t),
      r = zt(e),
      i = H(n.seconds, r.seconds);
  return i !== 0 ? i : H(n.nanos, r.nanos)
}

function Jn(t) {
  return ga(t)
}

function ga(t) {
  return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(n) {
      const r = zt(n);
      return `time(${r.seconds},${r.nanos})`
  }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? function(n) {
      return wn(n).toBase64()
  }(t.bytesValue) : "referenceValue" in t ? function(n) {
      return k.fromName(n).toString()
  }(t.referenceValue) : "geoPointValue" in t ? function(n) {
      return `geo(${n.latitude},${n.longitude})`
  }(t.geoPointValue) : "arrayValue" in t ? function(n) {
      let r = "[",
          i = !0;
      for (const s of n.values || []) i ? i = !1 : r += ",", r += ga(s);
      return r + "]"
  }(t.arrayValue) : "mapValue" in t ? function(n) {
      const r = Object.keys(n.fields || {}).sort();
      let i = "{",
          s = !0;
      for (const o of r) s ? s = !1 : i += ",", i += `${o}:${ga(n.fields[o])}`;
      return i + "}"
  }(t.mapValue) : V()
}

function Gu(t, e) {
  return {
      referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
  }
}

function wa(t) {
  return !!t && "integerValue" in t
}

function wc(t) {
  return !!t && "arrayValue" in t
}

function Qu(t) {
  return !!t && "nullValue" in t
}

function Ju(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue))
}

function Ki(t) {
  return !!t && "mapValue" in t
}

function Or(t) {
  if (t.geoPointValue) return {
      geoPointValue: Object.assign({}, t.geoPointValue)
  };
  if (t.timestampValue && typeof t.timestampValue == "object") return {
      timestampValue: Object.assign({}, t.timestampValue)
  };
  if (t.mapValue) {
      const e = {
          mapValue: {
              fields: {}
          }
      };
      return bn(t.mapValue.fields, (n, r) => e.mapValue.fields[n] = Or(r)), e
  }
  if (t.arrayValue) {
      const e = {
          arrayValue: {
              values: []
          }
      };
      for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = Or(t.arrayValue.values[n]);
      return e
  }
  return Object.assign({}, t)
}

function qT(t) {
  return (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class xe {
  constructor(e) {
      this.value = e
  }
  static empty() {
      return new xe({
          mapValue: {}
      })
  }
  field(e) {
      if (e.isEmpty()) return this.value;
      {
          let n = this.value;
          for (let r = 0; r < e.length - 1; ++r)
              if (n = (n.mapValue.fields || {})[e.get(r)], !Ki(n)) return null;
          return n = (n.mapValue.fields || {})[e.lastSegment()], n || null
      }
  }
  set(e, n) {
      this.getFieldsMap(e.popLast())[e.lastSegment()] = Or(n)
  }
  setAll(e) {
      let n = ve.emptyPath(),
          r = {},
          i = [];
      e.forEach((o, l) => {
          if (!n.isImmediateParentOf(l)) {
              const u = this.getFieldsMap(n);
              this.applyChanges(u, r, i), r = {}, i = [], n = l.popLast()
          }
          o ? r[l.lastSegment()] = Or(o) : i.push(l.lastSegment())
      });
      const s = this.getFieldsMap(n);
      this.applyChanges(s, r, i)
  }
  delete(e) {
      const n = this.field(e.popLast());
      Ki(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()]
  }
  isEqual(e) {
      return gt(this.value, e.value)
  }
  getFieldsMap(e) {
      let n = this.value;
      n.mapValue.fields || (n.mapValue = {
          fields: {}
      });
      for (let r = 0; r < e.length; ++r) {
          let i = n.mapValue.fields[e.get(r)];
          Ki(i) && i.mapValue.fields || (i = {
              mapValue: {
                  fields: {}
              }
          }, n.mapValue.fields[e.get(r)] = i), n = i
      }
      return n.mapValue.fields
  }
  applyChanges(e, n, r) {
      bn(n, (i, s) => e[i] = s);
      for (const i of r) delete e[i]
  }
  clone() {
      return new xe(Or(this.value))
  }
}

function qf(t) {
  const e = [];
  return bn(t.fields, (n, r) => {
      const i = new ve([n]);
      if (Ki(r)) {
          const s = qf(r.mapValue).fields;
          if (s.length === 0) e.push(i);
          else
              for (const o of s) e.push(i.child(o))
      } else e.push(i)
  }), new Be(e)
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Se {
  constructor(e, n, r, i, s, o, l) {
      this.key = e, this.documentType = n, this.version = r, this.readTime = i, this.createTime = s, this.data = o, this.documentState = l
  }
  static newInvalidDocument(e) {
      return new Se(e, 0, x.min(), x.min(), x.min(), xe.empty(), 0)
  }
  static newFoundDocument(e, n, r, i) {
      return new Se(e, 1, n, x.min(), r, i, 0)
  }
  static newNoDocument(e, n) {
      return new Se(e, 2, n, x.min(), x.min(), xe.empty(), 0)
  }
  static newUnknownDocument(e, n) {
      return new Se(e, 3, n, x.min(), x.min(), xe.empty(), 2)
  }
  convertToFoundDocument(e, n) {
      return !this.createTime.isEqual(x.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = e), this.version = e, this.documentType = 1, this.data = n, this.documentState = 0, this
  }
  convertToNoDocument(e) {
      return this.version = e, this.documentType = 2, this.data = xe.empty(), this.documentState = 0, this
  }
  convertToUnknownDocument(e) {
      return this.version = e, this.documentType = 3, this.data = xe.empty(), this.documentState = 2, this
  }
  setHasCommittedMutations() {
      return this.documentState = 2, this
  }
  setHasLocalMutations() {
      return this.documentState = 1, this.version = x.min(), this
  }
  setReadTime(e) {
      return this.readTime = e, this
  }
  get hasLocalMutations() {
      return this.documentState === 1
  }
  get hasCommittedMutations() {
      return this.documentState === 2
  }
  get hasPendingWrites() {
      return this.hasLocalMutations || this.hasCommittedMutations
  }
  isValidDocument() {
      return this.documentType !== 0
  }
  isFoundDocument() {
      return this.documentType === 1
  }
  isNoDocument() {
      return this.documentType === 2
  }
  isUnknownDocument() {
      return this.documentType === 3
  }
  isEqual(e) {
      return e instanceof Se && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data)
  }
  mutableCopy() {
      return new Se(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState)
  }
  toString() {
      return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
  }
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ds {
  constructor(e, n) {
      this.position = e, this.inclusive = n
  }
}

function Yu(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
      const s = e[i],
          o = t.position[i];
      if (s.field.isKeyField() ? r = k.comparator(k.fromName(o.referenceValue), n.key) : r = Qn(o, n.data.field(s.field)), s.dir === "desc" && (r *= -1), r !== 0) break
  }
  return r
}

function Xu(t, e) {
  if (t === null) return e === null;
  if (e === null || t.inclusive !== e.inclusive || t.position.length !== e.position.length) return !1;
  for (let n = 0; n < t.position.length; n++)
      if (!gt(t.position[n], e.position[n])) return !1;
  return !0
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class fs {
  constructor(e, n = "asc") {
      this.field = e, this.dir = n
  }
}

function $T(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field)
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class $f {}
class le extends $f {
  constructor(e, n, r) {
      super(), this.field = e, this.op = n, this.value = r
  }
  static create(e, n, r) {
      return e.isKeyField() ? n === "in" || n === "not-in" ? this.createKeyFieldInFilter(e, n, r) : new HT(e, n, r) : n === "array-contains" ? new GT(e, r) : n === "in" ? new QT(e, r) : n === "not-in" ? new JT(e, r) : n === "array-contains-any" ? new YT(e, r) : new le(e, n, r)
  }
  static createKeyFieldInFilter(e, n, r) {
      return n === "in" ? new WT(e, r) : new KT(e, r)
  }
  matches(e) {
      const n = e.data.field(this.field);
      return this.op === "!=" ? n !== null && this.matchesComparison(Qn(n, this.value)) : n !== null && yn(this.value) === yn(n) && this.matchesComparison(Qn(n, this.value))
  }
  matchesComparison(e) {
      switch (this.op) {
          case "<":
              return e < 0;
          case "<=":
              return e <= 0;
          case "==":
              return e === 0;
          case "!=":
              return e !== 0;
          case ">":
              return e > 0;
          case ">=":
              return e >= 0;
          default:
              return V()
      }
  }
  isInequality() {
      return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
  }
  getFlattenedFilters() {
      return [this]
  }
  getFilters() {
      return [this]
  }
}
class tt extends $f {
  constructor(e, n) {
      super(), this.filters = e, this.op = n, this.ue = null
  }
  static create(e, n) {
      return new tt(e, n)
  }
  matches(e) {
      return zf(this) ? this.filters.find(n => !n.matches(e)) === void 0 : this.filters.find(n => n.matches(e)) !== void 0
  }
  getFlattenedFilters() {
      return this.ue !== null || (this.ue = this.filters.reduce((e, n) => e.concat(n.getFlattenedFilters()), [])), this.ue
  }
  getFilters() {
      return Object.assign([], this.filters)
  }
}

function zf(t) {
  return t.op === "and"
}

function Hf(t) {
  return zT(t) && zf(t)
}

function zT(t) {
  for (const e of t.filters)
      if (e instanceof tt) return !1;
  return !0
}

function ya(t) {
  if (t instanceof le) return t.field.canonicalString() + t.op.toString() + Jn(t.value);
  if (Hf(t)) return t.filters.map(e => ya(e)).join(",");
  {
      const e = t.filters.map(n => ya(n)).join(",");
      return `${t.op}(${e})`
  }
}

function Wf(t, e) {
  return t instanceof le ? function(r, i) {
      return i instanceof le && r.op === i.op && r.field.isEqual(i.field) && gt(r.value, i.value)
  }(t, e) : t instanceof tt ? function(r, i) {
      return i instanceof tt && r.op === i.op && r.filters.length === i.filters.length ? r.filters.reduce((s, o, l) => s && Wf(o, i.filters[l]), !0) : !1
  }(t, e) : void V()
}

function Kf(t) {
  return t instanceof le ? function(n) {
      return `${n.field.canonicalString()} ${n.op} ${Jn(n.value)}`
  }(t) : t instanceof tt ? function(n) {
      return n.op.toString() + " {" + n.getFilters().map(Kf).join(" ,") + "}"
  }(t) : "Filter"
}
class HT extends le {
  constructor(e, n, r) {
      super(e, n, r), this.key = k.fromName(r.referenceValue)
  }
  matches(e) {
      const n = k.comparator(e.key, this.key);
      return this.matchesComparison(n)
  }
}
class WT extends le {
  constructor(e, n) {
      super(e, "in", n), this.keys = Gf("in", n)
  }
  matches(e) {
      return this.keys.some(n => n.isEqual(e.key))
  }
}
class KT extends le {
  constructor(e, n) {
      super(e, "not-in", n), this.keys = Gf("not-in", n)
  }
  matches(e) {
      return !this.keys.some(n => n.isEqual(e.key))
  }
}

function Gf(t, e) {
  var n;
  return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map(r => k.fromName(r.referenceValue))
}
class GT extends le {
  constructor(e, n) {
      super(e, "array-contains", n)
  }
  matches(e) {
      const n = e.data.field(this.field);
      return wc(n) && Zr(n.arrayValue, this.value)
  }
}
class QT extends le {
  constructor(e, n) {
      super(e, "in", n)
  }
  matches(e) {
      const n = e.data.field(this.field);
      return n !== null && Zr(this.value.arrayValue, n)
  }
}
class JT extends le {
  constructor(e, n) {
      super(e, "not-in", n)
  }
  matches(e) {
      if (Zr(this.value.arrayValue, {
              nullValue: "NULL_VALUE"
          })) return !1;
      const n = e.data.field(this.field);
      return n !== null && !Zr(this.value.arrayValue, n)
  }
}
class YT extends le {
  constructor(e, n) {
      super(e, "array-contains-any", n)
  }
  matches(e) {
      const n = e.data.field(this.field);
      return !(!wc(n) || !n.arrayValue.values) && n.arrayValue.values.some(r => Zr(this.value.arrayValue, r))
  }
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class XT {
  constructor(e, n = null, r = [], i = [], s = null, o = null, l = null) {
      this.path = e, this.collectionGroup = n, this.orderBy = r, this.filters = i, this.limit = s, this.startAt = o, this.endAt = l, this.ce = null
  }
}

function Zu(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new XT(t, e, n, r, i, s, o)
}

function yc(t) {
  const e = L(t);
  if (e.ce === null) {
      let n = e.path.canonicalString();
      e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(r => ya(r)).join(","), n += "|ob:", n += e.orderBy.map(r => function(s) {
          return s.field.canonicalString() + s.dir
      }(r)).join(","), zs(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += e.startAt.inclusive ? "b:" : "a:", n += e.startAt.position.map(r => Jn(r)).join(",")), e.endAt && (n += "|ub:", n += e.endAt.inclusive ? "a:" : "b:", n += e.endAt.position.map(r => Jn(r)).join(",")), e.ce = n
  }
  return e.ce
}

function _c(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
      if (!$T(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
      if (!Wf(t.filters[n], e.filters[n])) return !1;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Xu(t.startAt, e.startAt) && Xu(t.endAt, e.endAt)
}

function _a(t) {
  return k.isDocumentKey(t.path) && t.collectionGroup === null && t.filters.length === 0
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class gi {
  constructor(e, n = null, r = [], i = [], s = null, o = "F", l = null, u = null) {
      this.path = e, this.collectionGroup = n, this.explicitOrderBy = r, this.filters = i, this.limit = s, this.limitType = o, this.startAt = l, this.endAt = u, this.le = null, this.he = null, this.Pe = null, this.startAt, this.endAt
  }
}

function ZT(t, e, n, r, i, s, o, l) {
  return new gi(t, e, n, r, i, s, o, l)
}

function vc(t) {
  return new gi(t)
}

function eh(t) {
  return t.filters.length === 0 && t.limit === null && t.startAt == null && t.endAt == null && (t.explicitOrderBy.length === 0 || t.explicitOrderBy.length === 1 && t.explicitOrderBy[0].field.isKeyField())
}

function Qf(t) {
  return t.collectionGroup !== null
}

function Nr(t) {
  const e = L(t);
  if (e.le === null) {
      e.le = [];
      const n = new Set;
      for (const s of e.explicitOrderBy) e.le.push(s), n.add(s.field.canonicalString());
      const r = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
      (function(o) {
          let l = new Ie(ve.comparator);
          return o.filters.forEach(u => {
              u.getFlattenedFilters().forEach(f => {
                  f.isInequality() && (l = l.add(f.field))
              })
          }), l
      })(e).forEach(s => {
          n.has(s.canonicalString()) || s.isKeyField() || e.le.push(new fs(s, r))
      }), n.has(ve.keyField().canonicalString()) || e.le.push(new fs(ve.keyField(), r))
  }
  return e.le
}

function dt(t) {
  const e = L(t);
  return e.he || (e.he = Jf(e, Nr(t))), e.he
}

function Jf(t, e) {
  if (t.limitType === "F") return Zu(t.path, t.collectionGroup, e, t.filters, t.limit, t.startAt, t.endAt);
  {
      e = e.map(i => {
          const s = i.dir === "desc" ? "asc" : "desc";
          return new fs(i.field, s)
      });
      const n = t.endAt ? new ds(t.endAt.position, t.endAt.inclusive) : null,
          r = t.startAt ? new ds(t.startAt.position, t.startAt.inclusive) : null;
      return Zu(t.path, t.collectionGroup, e, t.filters, t.limit, n, r)
  }
}

function va(t, e) {
  const n = t.filters.concat([e]);
  return new gi(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt)
}

function Ea(t, e, n) {
  return new gi(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt)
}

function Hs(t, e) {
  return _c(dt(t), dt(e)) && t.limitType === e.limitType
}

function Yf(t) {
  return `${yc(dt(t))}|lt:${t.limitType}`
}

function Mn(t) {
  return `Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Kf(i)).join(", ")}]`),zs(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Jn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Jn(i)).join(",")),`Target(${r})`}(dt(t))}; limitType=${t.limitType})`
}

function Ws(t, e) {
  return e.isFoundDocument() && function(r, i) {
      const s = i.key.path;
      return r.collectionGroup !== null ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s) : k.isDocumentKey(r.path) ? r.path.isEqual(s) : r.path.isImmediateParentOf(s)
  }(t, e) && function(r, i) {
      for (const s of Nr(r))
          if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1;
      return !0
  }(t, e) && function(r, i) {
      for (const s of r.filters)
          if (!s.matches(i)) return !1;
      return !0
  }(t, e) && function(r, i) {
      return !(r.startAt && ! function(o, l, u) {
          const f = Yu(o, l, u);
          return o.inclusive ? f <= 0 : f < 0
      }(r.startAt, Nr(r), i) || r.endAt && ! function(o, l, u) {
          const f = Yu(o, l, u);
          return o.inclusive ? f >= 0 : f > 0
      }(r.endAt, Nr(r), i))
  }(t, e)
}

function e0(t) {
  return t.collectionGroup || (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2))
}

function Xf(t) {
  return (e, n) => {
      let r = !1;
      for (const i of Nr(t)) {
          const s = t0(i, e, n);
          if (s !== 0) return s;
          r = r || i.field.isKeyField()
      }
      return 0
  }
}

function t0(t, e, n) {
  const r = t.field.isKeyField() ? k.comparator(e.key, n.key) : function(s, o, l) {
      const u = o.data.field(s),
          f = l.data.field(s);
      return u !== null && f !== null ? Qn(u, f) : V()
  }(t.field, e, n);
  switch (t.dir) {
      case "asc":
          return r;
      case "desc":
          return -1 * r;
      default:
          return V()
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ar {
  constructor(e, n) {
      this.mapKeyFn = e, this.equalsFn = n, this.inner = {}, this.innerSize = 0
  }
  get(e) {
      const n = this.mapKeyFn(e),
          r = this.inner[n];
      if (r !== void 0) {
          for (const [i, s] of r)
              if (this.equalsFn(i, e)) return s
      }
  }
  has(e) {
      return this.get(e) !== void 0
  }
  set(e, n) {
      const r = this.mapKeyFn(e),
          i = this.inner[r];
      if (i === void 0) return this.inner[r] = [
          [e, n]
      ], void this.innerSize++;
      for (let s = 0; s < i.length; s++)
          if (this.equalsFn(i[s][0], e)) return void(i[s] = [e, n]);
      i.push([e, n]), this.innerSize++
  }
  delete(e) {
      const n = this.mapKeyFn(e),
          r = this.inner[n];
      if (r === void 0) return !1;
      for (let i = 0; i < r.length; i++)
          if (this.equalsFn(r[i][0], e)) return r.length === 1 ? delete this.inner[n] : r.splice(i, 1), this.innerSize--, !0;
      return !1
  }
  forEach(e) {
      bn(this.inner, (n, r) => {
          for (const [i, s] of r) e(i, s)
      })
  }
  isEmpty() {
      return Bf(this.inner)
  }
  size() {
      return this.innerSize
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const n0 = new te(k.comparator);

function Ct() {
  return n0
}
const Zf = new te(k.comparator);

function Pr(...t) {
  let e = Zf;
  for (const n of t) e = e.insert(n.key, n);
  return e
}

function ep(t) {
  let e = Zf;
  return t.forEach((n, r) => e = e.insert(n, r.overlayedDocument)), e
}

function ln() {
  return xr()
}

function tp() {
  return xr()
}

function xr() {
  return new ar(t => t.toString(), (t, e) => t.isEqual(e))
}
const r0 = new te(k.comparator),
  i0 = new Ie(k.comparator);

function B(...t) {
  let e = i0;
  for (const n of t) e = e.add(n);
  return e
}
const s0 = new Ie(H);

function o0() {
  return s0
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function np(t, e) {
  if (t.useProto3Json) {
      if (isNaN(e)) return {
          doubleValue: "NaN"
      };
      if (e === 1 / 0) return {
          doubleValue: "Infinity"
      };
      if (e === -1 / 0) return {
          doubleValue: "-Infinity"
      }
  }
  return {
      doubleValue: hs(e) ? "-0" : e
  }
}

function rp(t) {
  return {
      integerValue: "" + t
  }
}

function a0(t, e) {
  return UT(e) ? rp(e) : np(t, e)
}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ks {
  constructor() {
      this._ = void 0
  }
}

function c0(t, e, n) {
  return t instanceof ps ? function(i, s) {
      const o = {
          fields: {
              __type__: {
                  stringValue: "server_timestamp"
              },
              __local_write_time__: {
                  timestampValue: {
                      seconds: i.seconds,
                      nanos: i.nanoseconds
                  }
              }
          }
      };
      return s && mc(s) && (s = gc(s)), s && (o.fields.__previous_value__ = s), {
          mapValue: o
      }
  }(n, e) : t instanceof Yn ? sp(t, e) : t instanceof ei ? op(t, e) : function(i, s) {
      const o = ip(i, s),
          l = th(o) + th(i.Ie);
      return wa(o) && wa(i.Ie) ? rp(l) : np(i.serializer, l)
  }(t, e)
}

function l0(t, e, n) {
  return t instanceof Yn ? sp(t, e) : t instanceof ei ? op(t, e) : n
}

function ip(t, e) {
  return t instanceof ms ? function(r) {
      return wa(r) || function(s) {
          return !!s && "doubleValue" in s
      }(r)
  }(e) ? e : {
      integerValue: 0
  } : null
}
class ps extends Ks {}
class Yn extends Ks {
  constructor(e) {
      super(), this.elements = e
  }
}

function sp(t, e) {
  const n = ap(e);
  for (const r of t.elements) n.some(i => gt(i, r)) || n.push(r);
  return {
      arrayValue: {
          values: n
      }
  }
}
class ei extends Ks {
  constructor(e) {
      super(), this.elements = e
  }
}

function op(t, e) {
  let n = ap(e);
  for (const r of t.elements) n = n.filter(i => !gt(i, r));
  return {
      arrayValue: {
          values: n
      }
  }
}
class ms extends Ks {
  constructor(e, n) {
      super(), this.serializer = e, this.Ie = n
  }
}

function th(t) {
  return ce(t.integerValue || t.doubleValue)
}

function ap(t) {
  return wc(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class u0 {
  constructor(e, n) {
      this.field = e, this.transform = n
  }
}

function h0(t, e) {
  return t.field.isEqual(e.field) && function(r, i) {
      return r instanceof Yn && i instanceof Yn || r instanceof ei && i instanceof ei ? Gn(r.elements, i.elements, gt) : r instanceof ms && i instanceof ms ? gt(r.Ie, i.Ie) : r instanceof ps && i instanceof ps
  }(t.transform, e.transform)
}
class d0 {
  constructor(e, n) {
      this.version = e, this.transformResults = n
  }
}
class Ye {
  constructor(e, n) {
      this.updateTime = e, this.exists = n
  }
  static none() {
      return new Ye
  }
  static exists(e) {
      return new Ye(void 0, e)
  }
  static updateTime(e) {
      return new Ye(e)
  }
  get isNone() {
      return this.updateTime === void 0 && this.exists === void 0
  }
  isEqual(e) {
      return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
  }
}

function Gi(t, e) {
  return t.updateTime !== void 0 ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : t.exists === void 0 || t.exists === e.isFoundDocument()
}
class Gs {}

function cp(t, e) {
  if (!t.hasLocalMutations || e && e.fields.length === 0) return null;
  if (e === null) return t.isNoDocument() ? new Ec(t.key, Ye.none()) : new wi(t.key, t.data, Ye.none());
  {
      const n = t.data,
          r = xe.empty();
      let i = new Ie(ve.comparator);
      for (let s of e.fields)
          if (!i.has(s)) {
              let o = n.field(s);
              o === null && s.length > 1 && (s = s.popLast(), o = n.field(s)), o === null ? r.delete(s) : r.set(s, o), i = i.add(s)
          } return new Gt(t.key, r, new Be(i.toArray()), Ye.none())
  }
}

function f0(t, e, n) {
  t instanceof wi ? function(i, s, o) {
      const l = i.value.clone(),
          u = rh(i.fieldTransforms, s, o.transformResults);
      l.setAll(u), s.convertToFoundDocument(o.version, l).setHasCommittedMutations()
  }(t, e, n) : t instanceof Gt ? function(i, s, o) {
      if (!Gi(i.precondition, s)) return void s.convertToUnknownDocument(o.version);
      const l = rh(i.fieldTransforms, s, o.transformResults),
          u = s.data;
      u.setAll(lp(i)), u.setAll(l), s.convertToFoundDocument(o.version, u).setHasCommittedMutations()
  }(t, e, n) : function(i, s, o) {
      s.convertToNoDocument(o.version).setHasCommittedMutations()
  }(0, e, n)
}

function Lr(t, e, n, r) {
  return t instanceof wi ? function(s, o, l, u) {
      if (!Gi(s.precondition, o)) return l;
      const f = s.value.clone(),
          p = ih(s.fieldTransforms, u, o);
      return f.setAll(p), o.convertToFoundDocument(o.version, f).setHasLocalMutations(), null
  }(t, e, n, r) : t instanceof Gt ? function(s, o, l, u) {
      if (!Gi(s.precondition, o)) return l;
      const f = ih(s.fieldTransforms, u, o),
          p = o.data;
      return p.setAll(lp(s)), p.setAll(f), o.convertToFoundDocument(o.version, p).setHasLocalMutations(), l === null ? null : l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g => g.field))
  }(t, e, n, r) : function(s, o, l) {
      return Gi(s.precondition, o) ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null) : l
  }(t, e, n)
}

function p0(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
      const i = e.data.field(r.field),
          s = ip(r.transform, i || null);
      s != null && (n === null && (n = xe.empty()), n.set(r.field, s))
  }
  return n || null
}

function nh(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !! function(r, i) {
      return r === void 0 && i === void 0 || !(!r || !i) && Gn(r, i, (s, o) => h0(s, o))
  }(t.fieldTransforms, e.fieldTransforms) && (t.type === 0 ? t.value.isEqual(e.value) : t.type !== 1 || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask))
}
class wi extends Gs {
  constructor(e, n, r, i = []) {
      super(), this.key = e, this.value = n, this.precondition = r, this.fieldTransforms = i, this.type = 0
  }
  getFieldMask() {
      return null
  }
}
class Gt extends Gs {
  constructor(e, n, r, i, s = []) {
      super(), this.key = e, this.data = n, this.fieldMask = r, this.precondition = i, this.fieldTransforms = s, this.type = 1
  }
  getFieldMask() {
      return this.fieldMask
  }
}

function lp(t) {
  const e = new Map;
  return t.fieldMask.fields.forEach(n => {
      if (!n.isEmpty()) {
          const r = t.data.field(n);
          e.set(n, r)
      }
  }), e
}

function rh(t, e, n) {
  const r = new Map;
  Q(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
      const s = t[i],
          o = s.transform,
          l = e.data.field(s.field);
      r.set(s.field, l0(o, l, n[i]))
  }
  return r
}

function ih(t, e, n) {
  const r = new Map;
  for (const i of t) {
      const s = i.transform,
          o = n.data.field(i.field);
      r.set(i.field, c0(s, o, e))
  }
  return r
}
class Ec extends Gs {
  constructor(e, n) {
      super(), this.key = e, this.precondition = n, this.type = 2, this.fieldTransforms = []
  }
  getFieldMask() {
      return null
  }
}
class m0 extends Gs {
  constructor(e, n) {
      super(), this.key = e, this.precondition = n, this.type = 3, this.fieldTransforms = []
  }
  getFieldMask() {
      return null
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class g0 {
  constructor(e, n, r, i) {
      this.batchId = e, this.localWriteTime = n, this.baseMutations = r, this.mutations = i
  }
  applyToRemoteDocument(e, n) {
      const r = n.mutationResults;
      for (let i = 0; i < this.mutations.length; i++) {
          const s = this.mutations[i];
          s.key.isEqual(e.key) && f0(s, e, r[i])
      }
  }
  applyToLocalView(e, n) {
      for (const r of this.baseMutations) r.key.isEqual(e.key) && (n = Lr(r, e, n, this.localWriteTime));
      for (const r of this.mutations) r.key.isEqual(e.key) && (n = Lr(r, e, n, this.localWriteTime));
      return n
  }
  applyToLocalDocumentSet(e, n) {
      const r = tp();
      return this.mutations.forEach(i => {
          const s = e.get(i.key),
              o = s.overlayedDocument;
          let l = this.applyToLocalView(o, s.mutatedFields);
          l = n.has(i.key) ? null : l;
          const u = cp(o, l);
          u !== null && r.set(i.key, u), o.isValidDocument() || o.convertToNoDocument(x.min())
      }), r
  }
  keys() {
      return this.mutations.reduce((e, n) => e.add(n.key), B())
  }
  isEqual(e) {
      return this.batchId === e.batchId && Gn(this.mutations, e.mutations, (n, r) => nh(n, r)) && Gn(this.baseMutations, e.baseMutations, (n, r) => nh(n, r))
  }
}
class Ic {
  constructor(e, n, r, i) {
      this.batch = e, this.commitVersion = n, this.mutationResults = r, this.docVersions = i
  }
  static from(e, n, r) {
      Q(e.mutations.length === r.length);
      let i = function() {
          return r0
      }();
      const s = e.mutations;
      for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
      return new Ic(e, n, r, i)
  }
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class w0 {
  constructor(e, n) {
      this.largestBatchId = e, this.mutation = n
  }
  getKey() {
      return this.mutation.key
  }
  isEqual(e) {
      return e !== null && this.mutation === e.mutation
  }
  toString() {
      return `Overlay{
    largestBatchId: ${this.largestBatchId},
    mutation: ${this.mutation.toString()}
  }`
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class y0 {
  constructor(e, n, r) {
      this.alias = e, this.aggregateType = n, this.fieldPath = r
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class _0 {
  constructor(e, n) {
      this.count = e, this.unchangedNames = n
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ae, q;

function v0(t) {
  switch (t) {
      default:
          return V();
      case E.CANCELLED:
      case E.UNKNOWN:
      case E.DEADLINE_EXCEEDED:
      case E.RESOURCE_EXHAUSTED:
      case E.INTERNAL:
      case E.UNAVAILABLE:
      case E.UNAUTHENTICATED:
          return !1;
      case E.INVALID_ARGUMENT:
      case E.NOT_FOUND:
      case E.ALREADY_EXISTS:
      case E.PERMISSION_DENIED:
      case E.FAILED_PRECONDITION:
      case E.ABORTED:
      case E.OUT_OF_RANGE:
      case E.UNIMPLEMENTED:
      case E.DATA_LOSS:
          return !0
  }
}

function up(t) {
  if (t === void 0) return mt("GRPC error has no .code"), E.UNKNOWN;
  switch (t) {
      case ae.OK:
          return E.OK;
      case ae.CANCELLED:
          return E.CANCELLED;
      case ae.UNKNOWN:
          return E.UNKNOWN;
      case ae.DEADLINE_EXCEEDED:
          return E.DEADLINE_EXCEEDED;
      case ae.RESOURCE_EXHAUSTED:
          return E.RESOURCE_EXHAUSTED;
      case ae.INTERNAL:
          return E.INTERNAL;
      case ae.UNAVAILABLE:
          return E.UNAVAILABLE;
      case ae.UNAUTHENTICATED:
          return E.UNAUTHENTICATED;
      case ae.INVALID_ARGUMENT:
          return E.INVALID_ARGUMENT;
      case ae.NOT_FOUND:
          return E.NOT_FOUND;
      case ae.ALREADY_EXISTS:
          return E.ALREADY_EXISTS;
      case ae.PERMISSION_DENIED:
          return E.PERMISSION_DENIED;
      case ae.FAILED_PRECONDITION:
          return E.FAILED_PRECONDITION;
      case ae.ABORTED:
          return E.ABORTED;
      case ae.OUT_OF_RANGE:
          return E.OUT_OF_RANGE;
      case ae.UNIMPLEMENTED:
          return E.UNIMPLEMENTED;
      case ae.DATA_LOSS:
          return E.DATA_LOSS;
      default:
          return V()
  }
}(q = ae || (ae = {}))[q.OK = 0] = "OK", q[q.CANCELLED = 1] = "CANCELLED", q[q.UNKNOWN = 2] = "UNKNOWN", q[q.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", q[q.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", q[q.NOT_FOUND = 5] = "NOT_FOUND", q[q.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", q[q.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", q[q.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", q[q.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", q[q.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", q[q.ABORTED = 10] = "ABORTED", q[q.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", q[q.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", q[q.INTERNAL = 13] = "INTERNAL", q[q.UNAVAILABLE = 14] = "UNAVAILABLE", q[q.DATA_LOSS = 15] = "DATA_LOSS";
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function E0() {
  return new TextEncoder
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const I0 = new $n([4294967295, 4294967295], 0);

function sh(t) {
  const e = E0().encode(t),
      n = new IT;
  return n.update(e), new Uint8Array(n.digest())
}

function oh(t) {
  const e = new DataView(t.buffer),
      n = e.getUint32(0, !0),
      r = e.getUint32(4, !0),
      i = e.getUint32(8, !0),
      s = e.getUint32(12, !0);
  return [new $n([n, r], 0), new $n([i, s], 0)]
}
class Tc {
  constructor(e, n, r) {
      if (this.bitmap = e, this.padding = n, this.hashCount = r, n < 0 || n >= 8) throw new Cr(`Invalid padding: ${n}`);
      if (r < 0) throw new Cr(`Invalid hash count: ${r}`);
      if (e.length > 0 && this.hashCount === 0) throw new Cr(`Invalid hash count: ${r}`);
      if (e.length === 0 && n !== 0) throw new Cr(`Invalid padding when bitmap length is 0: ${n}`);
      this.Te = 8 * e.length - n, this.Ee = $n.fromNumber(this.Te)
  }
  de(e, n, r) {
      let i = e.add(n.multiply($n.fromNumber(r)));
      return i.compare(I0) === 1 && (i = new $n([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.Ee).toNumber()
  }
  Ae(e) {
      return (this.bitmap[Math.floor(e / 8)] & 1 << e % 8) != 0
  }
  mightContain(e) {
      if (this.Te === 0) return !1;
      const n = sh(e),
          [r, i] = oh(n);
      for (let s = 0; s < this.hashCount; s++) {
          const o = this.de(r, i, s);
          if (!this.Ae(o)) return !1
      }
      return !0
  }
  static create(e, n, r) {
      const i = e % 8 == 0 ? 0 : 8 - e % 8,
          s = new Uint8Array(Math.ceil(e / 8)),
          o = new Tc(s, i, n);
      return r.forEach(l => o.insert(l)), o
  }
  insert(e) {
      if (this.Te === 0) return;
      const n = sh(e),
          [r, i] = oh(n);
      for (let s = 0; s < this.hashCount; s++) {
          const o = this.de(r, i, s);
          this.Re(o)
      }
  }
  Re(e) {
      const n = Math.floor(e / 8),
          r = e % 8;
      this.bitmap[n] |= 1 << r
  }
}
class Cr extends Error {
  constructor() {
      super(...arguments), this.name = "BloomFilterError"
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Qs {
  constructor(e, n, r, i, s) {
      this.snapshotVersion = e, this.targetChanges = n, this.targetMismatches = r, this.documentUpdates = i, this.resolvedLimboDocuments = s
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
      const i = new Map;
      return i.set(e, yi.createSynthesizedTargetChangeForCurrentChange(e, n, r)), new Qs(x.min(), i, new te(H), Ct(), B())
  }
}
class yi {
  constructor(e, n, r, i, s) {
      this.resumeToken = e, this.current = n, this.addedDocuments = r, this.modifiedDocuments = i, this.removedDocuments = s
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
      return new yi(r, n, B(), B(), B())
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Qi {
  constructor(e, n, r, i) {
      this.Ve = e, this.removedTargetIds = n, this.key = r, this.me = i
  }
}
class hp {
  constructor(e, n) {
      this.targetId = e, this.fe = n
  }
}
class dp {
  constructor(e, n, r = Re.EMPTY_BYTE_STRING, i = null) {
      this.state = e, this.targetIds = n, this.resumeToken = r, this.cause = i
  }
}
class ah {
  constructor() {
      this.ge = 0, this.pe = lh(), this.ye = Re.EMPTY_BYTE_STRING, this.we = !1, this.Se = !0
  }
  get current() {
      return this.we
  }
  get resumeToken() {
      return this.ye
  }
  get be() {
      return this.ge !== 0
  }
  get De() {
      return this.Se
  }
  Ce(e) {
      e.approximateByteSize() > 0 && (this.Se = !0, this.ye = e)
  }
  ve() {
      let e = B(),
          n = B(),
          r = B();
      return this.pe.forEach((i, s) => {
          switch (s) {
              case 0:
                  e = e.add(i);
                  break;
              case 2:
                  n = n.add(i);
                  break;
              case 1:
                  r = r.add(i);
                  break;
              default:
                  V()
          }
      }), new yi(this.ye, this.we, e, n, r)
  }
  Fe() {
      this.Se = !1, this.pe = lh()
  }
  Me(e, n) {
      this.Se = !0, this.pe = this.pe.insert(e, n)
  }
  xe(e) {
      this.Se = !0, this.pe = this.pe.remove(e)
  }
  Oe() {
      this.ge += 1
  }
  Ne() {
      this.ge -= 1, Q(this.ge >= 0)
  }
  Be() {
      this.Se = !0, this.we = !0
  }
}
class T0 {
  constructor(e) {
      this.Le = e, this.ke = new Map, this.qe = Ct(), this.Qe = ch(), this.Ke = new te(H)
  }
  $e(e) {
      for (const n of e.Ve) e.me && e.me.isFoundDocument() ? this.Ue(n, e.me) : this.We(n, e.key, e.me);
      for (const n of e.removedTargetIds) this.We(n, e.key, e.me)
  }
  Ge(e) {
      this.forEachTarget(e, n => {
          const r = this.ze(n);
          switch (e.state) {
              case 0:
                  this.je(n) && r.Ce(e.resumeToken);
                  break;
              case 1:
                  r.Ne(), r.be || r.Fe(), r.Ce(e.resumeToken);
                  break;
              case 2:
                  r.Ne(), r.be || this.removeTarget(n);
                  break;
              case 3:
                  this.je(n) && (r.Be(), r.Ce(e.resumeToken));
                  break;
              case 4:
                  this.je(n) && (this.He(n), r.Ce(e.resumeToken));
                  break;
              default:
                  V()
          }
      })
  }
  forEachTarget(e, n) {
      e.targetIds.length > 0 ? e.targetIds.forEach(n) : this.ke.forEach((r, i) => {
          this.je(i) && n(i)
      })
  }
  Je(e) {
      const n = e.targetId,
          r = e.fe.count,
          i = this.Ye(n);
      if (i) {
          const s = i.target;
          if (_a(s))
              if (r === 0) {
                  const o = new k(s.path);
                  this.We(n, o, Se.newNoDocument(o, x.min()))
              } else Q(r === 1);
          else {
              const o = this.Ze(n);
              if (o !== r) {
                  const l = this.Xe(e),
                      u = l ? this.et(l, e, o) : 1;
                  if (u !== 0) {
                      this.He(n);
                      const f = u === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
                      this.Ke = this.Ke.insert(n, f)
                  }
              }
          }
      }
  }
  Xe(e) {
      const n = e.fe.unchangedNames;
      if (!n || !n.bits) return null;
      const {
          bits: {
              bitmap: r = "",
              padding: i = 0
          },
          hashCount: s = 0
      } = n;
      let o, l;
      try {
          o = wn(r).toUint8Array()
      } catch (u) {
          if (u instanceof jf) return Kn("Decoding the base64 bloom filter in existence filter failed (" + u.message + "); ignoring the bloom filter and falling back to full re-query."), null;
          throw u
      }
      try {
          l = new Tc(o, i, s)
      } catch (u) {
          return Kn(u instanceof Cr ? "BloomFilter error: " : "Applying bloom filter failed: ", u), null
      }
      return l.Te === 0 ? null : l
  }
  et(e, n, r) {
      return n.fe.count === r - this.rt(e, n.targetId) ? 0 : 2
  }
  rt(e, n) {
      const r = this.Le.getRemoteKeysForTarget(n);
      let i = 0;
      return r.forEach(s => {
          const o = this.Le.nt(),
              l = `projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;
          e.mightContain(l) || (this.We(n, s, null), i++)
      }), i
  }
  it(e) {
      const n = new Map;
      this.ke.forEach((s, o) => {
          const l = this.Ye(o);
          if (l) {
              if (s.current && _a(l.target)) {
                  const u = new k(l.target.path);
                  this.qe.get(u) !== null || this.st(o, u) || this.We(o, u, Se.newNoDocument(u, e))
              }
              s.De && (n.set(o, s.ve()), s.Fe())
          }
      });
      let r = B();
      this.Qe.forEach((s, o) => {
          let l = !0;
          o.forEachWhile(u => {
              const f = this.Ye(u);
              return !f || f.purpose === "TargetPurposeLimboResolution" || (l = !1, !1)
          }), l && (r = r.add(s))
      }), this.qe.forEach((s, o) => o.setReadTime(e));
      const i = new Qs(e, n, this.Ke, this.qe, r);
      return this.qe = Ct(), this.Qe = ch(), this.Ke = new te(H), i
  }
  Ue(e, n) {
      if (!this.je(e)) return;
      const r = this.st(e, n.key) ? 2 : 0;
      this.ze(e).Me(n.key, r), this.qe = this.qe.insert(n.key, n), this.Qe = this.Qe.insert(n.key, this.ot(n.key).add(e))
  }
  We(e, n, r) {
      if (!this.je(e)) return;
      const i = this.ze(e);
      this.st(e, n) ? i.Me(n, 1) : i.xe(n), this.Qe = this.Qe.insert(n, this.ot(n).delete(e)), r && (this.qe = this.qe.insert(n, r))
  }
  removeTarget(e) {
      this.ke.delete(e)
  }
  Ze(e) {
      const n = this.ze(e).ve();
      return this.Le.getRemoteKeysForTarget(e).size + n.addedDocuments.size - n.removedDocuments.size
  }
  Oe(e) {
      this.ze(e).Oe()
  }
  ze(e) {
      let n = this.ke.get(e);
      return n || (n = new ah, this.ke.set(e, n)), n
  }
  ot(e) {
      let n = this.Qe.get(e);
      return n || (n = new Ie(H), this.Qe = this.Qe.insert(e, n)), n
  }
  je(e) {
      const n = this.Ye(e) !== null;
      return n || T("WatchChangeAggregator", "Detected inactive target", e), n
  }
  Ye(e) {
      const n = this.ke.get(e);
      return n && n.be ? null : this.Le._t(e)
  }
  He(e) {
      this.ke.set(e, new ah), this.Le.getRemoteKeysForTarget(e).forEach(n => {
          this.We(e, n, null)
      })
  }
  st(e, n) {
      return this.Le.getRemoteKeysForTarget(e).has(n)
  }
}

function ch() {
  return new te(k.comparator)
}

function lh() {
  return new te(k.comparator)
}
const b0 = {
      asc: "ASCENDING",
      desc: "DESCENDING"
  },
  A0 = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "!=": "NOT_EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      in: "IN",
      "not-in": "NOT_IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY"
  },
  S0 = {
      and: "AND",
      or: "OR"
  };
class P0 {
  constructor(e, n) {
      this.databaseId = e, this.useProto3Json = n
  }
}

function Ia(t, e) {
  return t.useProto3Json || zs(e) ? e : {
      value: e
  }
}

function gs(t, e) {
  return t.useProto3Json ? `${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z` : {
      seconds: "" + e.seconds,
      nanos: e.nanoseconds
  }
}

function fp(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array()
}

function C0(t, e) {
  return gs(t, e.toTimestamp())
}

function ft(t) {
  return Q(!!t), x.fromTimestamp(function(n) {
      const r = zt(n);
      return new fe(r.seconds, r.nanos)
  }(t))
}

function bc(t, e) {
  return Ta(t, e).canonicalString()
}

function Ta(t, e) {
  const n = function(i) {
      return new Z(["projects", i.projectId, "databases", i.database])
  }(t).child("documents");
  return e === void 0 ? n : n.child(e)
}

function pp(t) {
  const e = Z.fromString(t);
  return Q(vp(e)), e
}

function ba(t, e) {
  return bc(t.databaseId, e.path)
}

function $o(t, e) {
  const n = pp(e);
  if (n.get(1) !== t.databaseId.projectId) throw new P(E.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
  if (n.get(3) !== t.databaseId.database) throw new P(E.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
  return new k(gp(n))
}

function mp(t, e) {
  return bc(t.databaseId, e)
}

function R0(t) {
  const e = pp(t);
  return e.length === 4 ? Z.emptyPath() : gp(e)
}

function Aa(t) {
  return new Z(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString()
}

function gp(t) {
  return Q(t.length > 4 && t.get(4) === "documents"), t.popFirst(5)
}

function uh(t, e, n) {
  return {
      name: ba(t, e),
      fields: n.value.mapValue.fields
  }
}

function k0(t, e) {
  let n;
  if ("targetChange" in e) {
      e.targetChange;
      const r = function(f) {
              return f === "NO_CHANGE" ? 0 : f === "ADD" ? 1 : f === "REMOVE" ? 2 : f === "CURRENT" ? 3 : f === "RESET" ? 4 : V()
          }(e.targetChange.targetChangeType || "NO_CHANGE"),
          i = e.targetChange.targetIds || [],
          s = function(f, p) {
              return f.useProto3Json ? (Q(p === void 0 || typeof p == "string"), Re.fromBase64String(p || "")) : (Q(p === void 0 || p instanceof Uint8Array), Re.fromUint8Array(p || new Uint8Array))
          }(t, e.targetChange.resumeToken),
          o = e.targetChange.cause,
          l = o && function(f) {
              const p = f.code === void 0 ? E.UNKNOWN : up(f.code);
              return new P(p, f.message || "")
          }(o);
      n = new dp(r, i, s, l || null)
  } else if ("documentChange" in e) {
      e.documentChange;
      const r = e.documentChange;
      r.document, r.document.name, r.document.updateTime;
      const i = $o(t, r.document.name),
          s = ft(r.document.updateTime),
          o = r.document.createTime ? ft(r.document.createTime) : x.min(),
          l = new xe({
              mapValue: {
                  fields: r.document.fields
              }
          }),
          u = Se.newFoundDocument(i, s, o, l),
          f = r.targetIds || [],
          p = r.removedTargetIds || [];
      n = new Qi(f, p, u.key, u)
  } else if ("documentDelete" in e) {
      e.documentDelete;
      const r = e.documentDelete;
      r.document;
      const i = $o(t, r.document),
          s = r.readTime ? ft(r.readTime) : x.min(),
          o = Se.newNoDocument(i, s),
          l = r.removedTargetIds || [];
      n = new Qi([], l, o.key, o)
  } else if ("documentRemove" in e) {
      e.documentRemove;
      const r = e.documentRemove;
      r.document;
      const i = $o(t, r.document),
          s = r.removedTargetIds || [];
      n = new Qi([], s, i, null)
  } else {
      if (!("filter" in e)) return V();
      {
          e.filter;
          const r = e.filter;
          r.targetId;
          const {
              count: i = 0,
              unchangedNames: s
          } = r, o = new _0(i, s), l = r.targetId;
          n = new hp(l, o)
      }
  }
  return n
}

function D0(t, e) {
  let n;
  if (e instanceof wi) n = {
      update: uh(t, e.key, e.value)
  };
  else if (e instanceof Ec) n = {
      delete: ba(t, e.key)
  };
  else if (e instanceof Gt) n = {
      update: uh(t, e.key, e.data),
      updateMask: U0(e.fieldMask)
  };
  else {
      if (!(e instanceof m0)) return V();
      n = {
          verify: ba(t, e.key)
      }
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map(r => function(s, o) {
      const l = o.transform;
      if (l instanceof ps) return {
          fieldPath: o.field.canonicalString(),
          setToServerValue: "REQUEST_TIME"
      };
      if (l instanceof Yn) return {
          fieldPath: o.field.canonicalString(),
          appendMissingElements: {
              values: l.elements
          }
      };
      if (l instanceof ei) return {
          fieldPath: o.field.canonicalString(),
          removeAllFromArray: {
              values: l.elements
          }
      };
      if (l instanceof ms) return {
          fieldPath: o.field.canonicalString(),
          increment: l.Ie
      };
      throw V()
  }(0, r))), e.precondition.isNone || (n.currentDocument = function(i, s) {
      return s.updateTime !== void 0 ? {
          updateTime: C0(i, s.updateTime)
      } : s.exists !== void 0 ? {
          exists: s.exists
      } : V()
  }(t, e.precondition)), n
}

function V0(t, e) {
  return t && t.length > 0 ? (Q(e !== void 0), t.map(n => function(i, s) {
      let o = i.updateTime ? ft(i.updateTime) : ft(s);
      return o.isEqual(x.min()) && (o = ft(s)), new d0(o, i.transformResults || [])
  }(n, e))) : []
}

function O0(t, e) {
  return {
      documents: [mp(t, e.path)]
  }
}

function wp(t, e) {
  const n = {
          structuredQuery: {}
      },
      r = e.path;
  let i;
  e.collectionGroup !== null ? (i = r, n.structuredQuery.from = [{
      collectionId: e.collectionGroup,
      allDescendants: !0
  }]) : (i = r.popLast(), n.structuredQuery.from = [{
      collectionId: r.lastSegment()
  }]), n.parent = mp(t, i);
  const s = function(f) {
      if (f.length !== 0) return _p(tt.create(f, "and"))
  }(e.filters);
  s && (n.structuredQuery.where = s);
  const o = function(f) {
      if (f.length !== 0) return f.map(p => function(w) {
          return {
              field: Ft(w.field),
              direction: L0(w.dir)
          }
      }(p))
  }(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const l = Ia(t, e.limit);
  return l !== null && (n.structuredQuery.limit = l), e.startAt && (n.structuredQuery.startAt = function(f) {
      return {
          before: f.inclusive,
          values: f.position
      }
  }(e.startAt)), e.endAt && (n.structuredQuery.endAt = function(f) {
      return {
          before: !f.inclusive,
          values: f.position
      }
  }(e.endAt)), {
      ut: n,
      parent: i
  }
}

function N0(t) {
  let e = R0(t.parent);
  const n = t.structuredQuery,
      r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
      Q(r === 1);
      const p = n.from[0];
      p.allDescendants ? i = p.collectionId : e = e.child(p.collectionId)
  }
  let s = [];
  n.where && (s = function(g) {
      const w = yp(g);
      return w instanceof tt && Hf(w) ? w.getFilters() : [w]
  }(n.where));
  let o = [];
  n.orderBy && (o = function(g) {
      return g.map(w => function(R) {
          return new fs(Fn(R.field), function(C) {
              switch (C) {
                  case "ASCENDING":
                      return "asc";
                  case "DESCENDING":
                      return "desc";
                  default:
                      return
              }
          }(R.direction))
      }(w))
  }(n.orderBy));
  let l = null;
  n.limit && (l = function(g) {
      let w;
      return w = typeof g == "object" ? g.value : g, zs(w) ? null : w
  }(n.limit));
  let u = null;
  n.startAt && (u = function(g) {
      const w = !!g.before,
          v = g.values || [];
      return new ds(v, w)
  }(n.startAt));
  let f = null;
  return n.endAt && (f = function(g) {
      const w = !g.before,
          v = g.values || [];
      return new ds(v, w)
  }(n.endAt)), ZT(e, i, o, s, l, "F", u, f)
}

function x0(t, e) {
  const n = function(i) {
      switch (i) {
          case "TargetPurposeListen":
              return null;
          case "TargetPurposeExistenceFilterMismatch":
              return "existence-filter-mismatch";
          case "TargetPurposeExistenceFilterMismatchBloom":
              return "existence-filter-mismatch-bloom";
          case "TargetPurposeLimboResolution":
              return "limbo-document";
          default:
              return V()
      }
  }(e.purpose);
  return n == null ? null : {
      "goog-listen-tags": n
  }
}

function yp(t) {
  return t.unaryFilter !== void 0 ? function(n) {
      switch (n.unaryFilter.op) {
          case "IS_NAN":
              const r = Fn(n.unaryFilter.field);
              return le.create(r, "==", {
                  doubleValue: NaN
              });
          case "IS_NULL":
              const i = Fn(n.unaryFilter.field);
              return le.create(i, "==", {
                  nullValue: "NULL_VALUE"
              });
          case "IS_NOT_NAN":
              const s = Fn(n.unaryFilter.field);
              return le.create(s, "!=", {
                  doubleValue: NaN
              });
          case "IS_NOT_NULL":
              const o = Fn(n.unaryFilter.field);
              return le.create(o, "!=", {
                  nullValue: "NULL_VALUE"
              });
          default:
              return V()
      }
  }(t) : t.fieldFilter !== void 0 ? function(n) {
      return le.create(Fn(n.fieldFilter.field), function(i) {
          switch (i) {
              case "EQUAL":
                  return "==";
              case "NOT_EQUAL":
                  return "!=";
              case "GREATER_THAN":
                  return ">";
              case "GREATER_THAN_OR_EQUAL":
                  return ">=";
              case "LESS_THAN":
                  return "<";
              case "LESS_THAN_OR_EQUAL":
                  return "<=";
              case "ARRAY_CONTAINS":
                  return "array-contains";
              case "IN":
                  return "in";
              case "NOT_IN":
                  return "not-in";
              case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
              default:
                  return V()
          }
      }(n.fieldFilter.op), n.fieldFilter.value)
  }(t) : t.compositeFilter !== void 0 ? function(n) {
      return tt.create(n.compositeFilter.filters.map(r => yp(r)), function(i) {
          switch (i) {
              case "AND":
                  return "and";
              case "OR":
                  return "or";
              default:
                  return V()
          }
      }(n.compositeFilter.op))
  }(t) : V()
}

function L0(t) {
  return b0[t]
}

function M0(t) {
  return A0[t]
}

function F0(t) {
  return S0[t]
}

function Ft(t) {
  return {
      fieldPath: t.canonicalString()
  }
}

function Fn(t) {
  return ve.fromServerFormat(t.fieldPath)
}

function _p(t) {
  return t instanceof le ? function(n) {
      if (n.op === "==") {
          if (Ju(n.value)) return {
              unaryFilter: {
                  field: Ft(n.field),
                  op: "IS_NAN"
              }
          };
          if (Qu(n.value)) return {
              unaryFilter: {
                  field: Ft(n.field),
                  op: "IS_NULL"
              }
          }
      } else if (n.op === "!=") {
          if (Ju(n.value)) return {
              unaryFilter: {
                  field: Ft(n.field),
                  op: "IS_NOT_NAN"
              }
          };
          if (Qu(n.value)) return {
              unaryFilter: {
                  field: Ft(n.field),
                  op: "IS_NOT_NULL"
              }
          }
      }
      return {
          fieldFilter: {
              field: Ft(n.field),
              op: M0(n.op),
              value: n.value
          }
      }
  }(t) : t instanceof tt ? function(n) {
      const r = n.getFilters().map(i => _p(i));
      return r.length === 1 ? r[0] : {
          compositeFilter: {
              op: F0(n.op),
              filters: r
          }
      }
  }(t) : V()
}

function U0(t) {
  const e = [];
  return t.fields.forEach(n => e.push(n.canonicalString())), {
      fieldPaths: e
  }
}

function vp(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases"
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ut {
  constructor(e, n, r, i, s = x.min(), o = x.min(), l = Re.EMPTY_BYTE_STRING, u = null) {
      this.target = e, this.targetId = n, this.purpose = r, this.sequenceNumber = i, this.snapshotVersion = s, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = l, this.expectedCount = u
  }
  withSequenceNumber(e) {
      return new Ut(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount)
  }
  withResumeToken(e, n) {
      return new Ut(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e, null)
  }
  withExpectedCount(e) {
      return new Ut(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e)
  }
  withLastLimboFreeSnapshotVersion(e) {
      return new Ut(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class B0 {
  constructor(e) {
      this.ct = e
  }
}

function j0(t) {
  const e = N0({
      parent: t.parent,
      structuredQuery: t.structuredQuery
  });
  return t.limitType === "LAST" ? Ea(e, e.limit, "L") : e
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class q0 {
  constructor() {
      this._n = new $0
  }
  addToCollectionParentIndex(e, n) {
      return this._n.add(n), I.resolve()
  }
  getCollectionParents(e, n) {
      return I.resolve(this._n.getEntries(n))
  }
  addFieldIndex(e, n) {
      return I.resolve()
  }
  deleteFieldIndex(e, n) {
      return I.resolve()
  }
  deleteAllFieldIndexes(e) {
      return I.resolve()
  }
  createTargetIndexes(e, n) {
      return I.resolve()
  }
  getDocumentsMatchingTarget(e, n) {
      return I.resolve(null)
  }
  getIndexType(e, n) {
      return I.resolve(0)
  }
  getFieldIndexes(e, n) {
      return I.resolve([])
  }
  getNextCollectionGroupToUpdate(e) {
      return I.resolve(null)
  }
  getMinOffset(e, n) {
      return I.resolve($t.min())
  }
  getMinOffsetFromCollectionGroup(e, n) {
      return I.resolve($t.min())
  }
  updateCollectionGroup(e, n, r) {
      return I.resolve()
  }
  updateIndexEntries(e, n) {
      return I.resolve()
  }
}
class $0 {
  constructor() {
      this.index = {}
  }
  add(e) {
      const n = e.lastSegment(),
          r = e.popLast(),
          i = this.index[n] || new Ie(Z.comparator),
          s = !i.has(r);
      return this.index[n] = i.add(r), s
  }
  has(e) {
      const n = e.lastSegment(),
          r = e.popLast(),
          i = this.index[n];
      return i && i.has(r)
  }
  getEntries(e) {
      return (this.index[e] || new Ie(Z.comparator)).toArray()
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Xn {
  constructor(e) {
      this.On = e
  }
  next() {
      return this.On += 2, this.On
  }
  static Nn() {
      return new Xn(0)
  }
  static Bn() {
      return new Xn(-1)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class z0 {
  constructor() {
      this.changes = new ar(e => e.toString(), (e, n) => e.isEqual(n)), this.changesApplied = !1
  }
  addEntry(e) {
      this.assertNotApplied(), this.changes.set(e.key, e)
  }
  removeEntry(e, n) {
      this.assertNotApplied(), this.changes.set(e, Se.newInvalidDocument(e).setReadTime(n))
  }
  getEntry(e, n) {
      this.assertNotApplied();
      const r = this.changes.get(n);
      return r !== void 0 ? I.resolve(r) : this.getFromCache(e, n)
  }
  getEntries(e, n) {
      return this.getAllFromCache(e, n)
  }
  apply(e) {
      return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e)
  }
  assertNotApplied() {}
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class H0 {
  constructor(e, n) {
      this.overlayedDocument = e, this.mutatedFields = n
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class W0 {
  constructor(e, n, r, i) {
      this.remoteDocumentCache = e, this.mutationQueue = n, this.documentOverlayCache = r, this.indexManager = i
  }
  getDocument(e, n) {
      let r = null;
      return this.documentOverlayCache.getOverlay(e, n).next(i => (r = i, this.remoteDocumentCache.getEntry(e, n))).next(i => (r !== null && Lr(r.mutation, i, Be.empty(), fe.now()), i))
  }
  getDocuments(e, n) {
      return this.remoteDocumentCache.getEntries(e, n).next(r => this.getLocalViewOfDocuments(e, r, B()).next(() => r))
  }
  getLocalViewOfDocuments(e, n, r = B()) {
      const i = ln();
      return this.populateOverlays(e, i, n).next(() => this.computeViews(e, n, i, r).next(s => {
          let o = Pr();
          return s.forEach((l, u) => {
              o = o.insert(l, u.overlayedDocument)
          }), o
      }))
  }
  getOverlayedDocuments(e, n) {
      const r = ln();
      return this.populateOverlays(e, r, n).next(() => this.computeViews(e, n, r, B()))
  }
  populateOverlays(e, n, r) {
      const i = [];
      return r.forEach(s => {
          n.has(s) || i.push(s)
      }), this.documentOverlayCache.getOverlays(e, i).next(s => {
          s.forEach((o, l) => {
              n.set(o, l)
          })
      })
  }
  computeViews(e, n, r, i) {
      let s = Ct();
      const o = xr(),
          l = function() {
              return xr()
          }();
      return n.forEach((u, f) => {
          const p = r.get(f.key);
          i.has(f.key) && (p === void 0 || p.mutation instanceof Gt) ? s = s.insert(f.key, f) : p !== void 0 ? (o.set(f.key, p.mutation.getFieldMask()), Lr(p.mutation, f, p.mutation.getFieldMask(), fe.now())) : o.set(f.key, Be.empty())
      }), this.recalculateAndSaveOverlays(e, s).next(u => (u.forEach((f, p) => o.set(f, p)), n.forEach((f, p) => {
          var g;
          return l.set(f, new H0(p, (g = o.get(f)) !== null && g !== void 0 ? g : null))
      }), l))
  }
  recalculateAndSaveOverlays(e, n) {
      const r = xr();
      let i = new te((o, l) => o - l),
          s = B();
      return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, n).next(o => {
          for (const l of o) l.keys().forEach(u => {
              const f = n.get(u);
              if (f === null) return;
              let p = r.get(u) || Be.empty();
              p = l.applyToLocalView(f, p), r.set(u, p);
              const g = (i.get(l.batchId) || B()).add(u);
              i = i.insert(l.batchId, g)
          })
      }).next(() => {
          const o = [],
              l = i.getReverseIterator();
          for (; l.hasNext();) {
              const u = l.getNext(),
                  f = u.key,
                  p = u.value,
                  g = tp();
              p.forEach(w => {
                  if (!s.has(w)) {
                      const v = cp(n.get(w), r.get(w));
                      v !== null && g.set(w, v), s = s.add(w)
                  }
              }), o.push(this.documentOverlayCache.saveOverlays(e, f, g))
          }
          return I.waitFor(o)
      }).next(() => r)
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
      return this.remoteDocumentCache.getEntries(e, n).next(r => this.recalculateAndSaveOverlays(e, r))
  }
  getDocumentsMatchingQuery(e, n, r, i) {
      return function(o) {
          return k.isDocumentKey(o.path) && o.collectionGroup === null && o.filters.length === 0
      }(n) ? this.getDocumentsMatchingDocumentQuery(e, n.path) : Qf(n) ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i) : this.getDocumentsMatchingCollectionQuery(e, n, r, i)
  }
  getNextDocuments(e, n, r, i) {
      return this.remoteDocumentCache.getAllFromCollectionGroup(e, n, r, i).next(s => {
          const o = i - s.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, n, r.largestBatchId, i - s.size) : I.resolve(ln());
          let l = -1,
              u = s;
          return o.next(f => I.forEach(f, (p, g) => (l < g.largestBatchId && (l = g.largestBatchId), s.get(p) ? I.resolve() : this.remoteDocumentCache.getEntry(e, p).next(w => {
              u = u.insert(p, w)
          }))).next(() => this.populateOverlays(e, f, s)).next(() => this.computeViews(e, u, f, B())).next(p => ({
              batchId: l,
              changes: ep(p)
          })))
      })
  }
  getDocumentsMatchingDocumentQuery(e, n) {
      return this.getDocument(e, new k(n)).next(r => {
          let i = Pr();
          return r.isFoundDocument() && (i = i.insert(r.key, r)), i
      })
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
      const s = n.collectionGroup;
      let o = Pr();
      return this.indexManager.getCollectionParents(e, s).next(l => I.forEach(l, u => {
          const f = function(g, w) {
              return new gi(w, null, g.explicitOrderBy.slice(), g.filters.slice(), g.limit, g.limitType, g.startAt, g.endAt)
          }(n, u.child(s));
          return this.getDocumentsMatchingCollectionQuery(e, f, r, i).next(p => {
              p.forEach((g, w) => {
                  o = o.insert(g, w)
              })
          })
      }).next(() => o))
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
      let s;
      return this.documentOverlayCache.getOverlaysForCollection(e, n.path, r.largestBatchId).next(o => (s = o, this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, s, i))).next(o => {
          s.forEach((u, f) => {
              const p = f.getKey();
              o.get(p) === null && (o = o.insert(p, Se.newInvalidDocument(p)))
          });
          let l = Pr();
          return o.forEach((u, f) => {
              const p = s.get(u);
              p !== void 0 && Lr(p.mutation, f, Be.empty(), fe.now()), Ws(n, f) && (l = l.insert(u, f))
          }), l
      })
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class K0 {
  constructor(e) {
      this.serializer = e, this.cr = new Map, this.lr = new Map
  }
  getBundleMetadata(e, n) {
      return I.resolve(this.cr.get(n))
  }
  saveBundleMetadata(e, n) {
      return this.cr.set(n.id, function(i) {
          return {
              id: i.id,
              version: i.version,
              createTime: ft(i.createTime)
          }
      }(n)), I.resolve()
  }
  getNamedQuery(e, n) {
      return I.resolve(this.lr.get(n))
  }
  saveNamedQuery(e, n) {
      return this.lr.set(n.name, function(i) {
          return {
              name: i.name,
              query: j0(i.bundledQuery),
              readTime: ft(i.readTime)
          }
      }(n)), I.resolve()
  }
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class G0 {
  constructor() {
      this.overlays = new te(k.comparator), this.hr = new Map
  }
  getOverlay(e, n) {
      return I.resolve(this.overlays.get(n))
  }
  getOverlays(e, n) {
      const r = ln();
      return I.forEach(n, i => this.getOverlay(e, i).next(s => {
          s !== null && r.set(i, s)
      })).next(() => r)
  }
  saveOverlays(e, n, r) {
      return r.forEach((i, s) => {
          this.ht(e, n, s)
      }), I.resolve()
  }
  removeOverlaysForBatchId(e, n, r) {
      const i = this.hr.get(r);
      return i !== void 0 && (i.forEach(s => this.overlays = this.overlays.remove(s)), this.hr.delete(r)), I.resolve()
  }
  getOverlaysForCollection(e, n, r) {
      const i = ln(),
          s = n.length + 1,
          o = new k(n.child("")),
          l = this.overlays.getIteratorFrom(o);
      for (; l.hasNext();) {
          const u = l.getNext().value,
              f = u.getKey();
          if (!n.isPrefixOf(f.path)) break;
          f.path.length === s && u.largestBatchId > r && i.set(u.getKey(), u)
      }
      return I.resolve(i)
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
      let s = new te((f, p) => f - p);
      const o = this.overlays.getIterator();
      for (; o.hasNext();) {
          const f = o.getNext().value;
          if (f.getKey().getCollectionGroup() === n && f.largestBatchId > r) {
              let p = s.get(f.largestBatchId);
              p === null && (p = ln(), s = s.insert(f.largestBatchId, p)), p.set(f.getKey(), f)
          }
      }
      const l = ln(),
          u = s.getIterator();
      for (; u.hasNext() && (u.getNext().value.forEach((f, p) => l.set(f, p)), !(l.size() >= i)););
      return I.resolve(l)
  }
  ht(e, n, r) {
      const i = this.overlays.get(r.key);
      if (i !== null) {
          const o = this.hr.get(i.largestBatchId).delete(r.key);
          this.hr.set(i.largestBatchId, o)
      }
      this.overlays = this.overlays.insert(r.key, new w0(n, r));
      let s = this.hr.get(n);
      s === void 0 && (s = B(), this.hr.set(n, s)), this.hr.set(n, s.add(r.key))
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Ac {
  constructor() {
      this.Pr = new Ie(me.Ir), this.Tr = new Ie(me.Er)
  }
  isEmpty() {
      return this.Pr.isEmpty()
  }
  addReference(e, n) {
      const r = new me(e, n);
      this.Pr = this.Pr.add(r), this.Tr = this.Tr.add(r)
  }
  dr(e, n) {
      e.forEach(r => this.addReference(r, n))
  }
  removeReference(e, n) {
      this.Ar(new me(e, n))
  }
  Rr(e, n) {
      e.forEach(r => this.removeReference(r, n))
  }
  Vr(e) {
      const n = new k(new Z([])),
          r = new me(n, e),
          i = new me(n, e + 1),
          s = [];
      return this.Tr.forEachInRange([r, i], o => {
          this.Ar(o), s.push(o.key)
      }), s
  }
  mr() {
      this.Pr.forEach(e => this.Ar(e))
  }
  Ar(e) {
      this.Pr = this.Pr.delete(e), this.Tr = this.Tr.delete(e)
  }
  gr(e) {
      const n = new k(new Z([])),
          r = new me(n, e),
          i = new me(n, e + 1);
      let s = B();
      return this.Tr.forEachInRange([r, i], o => {
          s = s.add(o.key)
      }), s
  }
  containsKey(e) {
      const n = new me(e, 0),
          r = this.Pr.firstAfterOrEqual(n);
      return r !== null && e.isEqual(r.key)
  }
}
class me {
  constructor(e, n) {
      this.key = e, this.pr = n
  }
  static Ir(e, n) {
      return k.comparator(e.key, n.key) || H(e.pr, n.pr)
  }
  static Er(e, n) {
      return H(e.pr, n.pr) || k.comparator(e.key, n.key)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Q0 {
  constructor(e, n) {
      this.indexManager = e, this.referenceDelegate = n, this.mutationQueue = [], this.yr = 1, this.wr = new Ie(me.Ir)
  }
  checkEmpty(e) {
      return I.resolve(this.mutationQueue.length === 0)
  }
  addMutationBatch(e, n, r, i) {
      const s = this.yr;
      this.yr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
      const o = new g0(s, n, r, i);
      this.mutationQueue.push(o);
      for (const l of i) this.wr = this.wr.add(new me(l.key, s)), this.indexManager.addToCollectionParentIndex(e, l.key.path.popLast());
      return I.resolve(o)
  }
  lookupMutationBatch(e, n) {
      return I.resolve(this.Sr(n))
  }
  getNextMutationBatchAfterBatchId(e, n) {
      const r = n + 1,
          i = this.br(r),
          s = i < 0 ? 0 : i;
      return I.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null)
  }
  getHighestUnacknowledgedBatchId() {
      return I.resolve(this.mutationQueue.length === 0 ? -1 : this.yr - 1)
  }
  getAllMutationBatches(e) {
      return I.resolve(this.mutationQueue.slice())
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
      const r = new me(n, 0),
          i = new me(n, Number.POSITIVE_INFINITY),
          s = [];
      return this.wr.forEachInRange([r, i], o => {
          const l = this.Sr(o.pr);
          s.push(l)
      }), I.resolve(s)
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
      let r = new Ie(H);
      return n.forEach(i => {
          const s = new me(i, 0),
              o = new me(i, Number.POSITIVE_INFINITY);
          this.wr.forEachInRange([s, o], l => {
              r = r.add(l.pr)
          })
      }), I.resolve(this.Dr(r))
  }
  getAllMutationBatchesAffectingQuery(e, n) {
      const r = n.path,
          i = r.length + 1;
      let s = r;
      k.isDocumentKey(s) || (s = s.child(""));
      const o = new me(new k(s), 0);
      let l = new Ie(H);
      return this.wr.forEachWhile(u => {
          const f = u.key.path;
          return !!r.isPrefixOf(f) && (f.length === i && (l = l.add(u.pr)), !0)
      }, o), I.resolve(this.Dr(l))
  }
  Dr(e) {
      const n = [];
      return e.forEach(r => {
          const i = this.Sr(r);
          i !== null && n.push(i)
      }), n
  }
  removeMutationBatch(e, n) {
      Q(this.Cr(n.batchId, "removed") === 0), this.mutationQueue.shift();
      let r = this.wr;
      return I.forEach(n.mutations, i => {
          const s = new me(i.key, n.batchId);
          return r = r.delete(s), this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      }).next(() => {
          this.wr = r
      })
  }
  Mn(e) {}
  containsKey(e, n) {
      const r = new me(n, 0),
          i = this.wr.firstAfterOrEqual(r);
      return I.resolve(n.isEqual(i && i.key))
  }
  performConsistencyCheck(e) {
      return this.mutationQueue.length, I.resolve()
  }
  Cr(e, n) {
      return this.br(e)
  }
  br(e) {
      return this.mutationQueue.length === 0 ? 0 : e - this.mutationQueue[0].batchId
  }
  Sr(e) {
      const n = this.br(e);
      return n < 0 || n >= this.mutationQueue.length ? null : this.mutationQueue[n]
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class J0 {
  constructor(e) {
      this.vr = e, this.docs = function() {
          return new te(k.comparator)
      }(), this.size = 0
  }
  setIndexManager(e) {
      this.indexManager = e
  }
  addEntry(e, n) {
      const r = n.key,
          i = this.docs.get(r),
          s = i ? i.size : 0,
          o = this.vr(n);
      return this.docs = this.docs.insert(r, {
          document: n.mutableCopy(),
          size: o
      }), this.size += o - s, this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
  }
  removeEntry(e) {
      const n = this.docs.get(e);
      n && (this.docs = this.docs.remove(e), this.size -= n.size)
  }
  getEntry(e, n) {
      const r = this.docs.get(n);
      return I.resolve(r ? r.document.mutableCopy() : Se.newInvalidDocument(n))
  }
  getEntries(e, n) {
      let r = Ct();
      return n.forEach(i => {
          const s = this.docs.get(i);
          r = r.insert(i, s ? s.document.mutableCopy() : Se.newInvalidDocument(i))
      }), I.resolve(r)
  }
  getDocumentsMatchingQuery(e, n, r, i) {
      let s = Ct();
      const o = n.path,
          l = new k(o.child("")),
          u = this.docs.getIteratorFrom(l);
      for (; u.hasNext();) {
          const {
              key: f,
              value: {
                  document: p
              }
          } = u.getNext();
          if (!o.isPrefixOf(f.path)) break;
          f.path.length > o.length + 1 || NT(OT(p), r) <= 0 || (i.has(p.key) || Ws(n, p)) && (s = s.insert(p.key, p.mutableCopy()))
      }
      return I.resolve(s)
  }
  getAllFromCollectionGroup(e, n, r, i) {
      V()
  }
  Fr(e, n) {
      return I.forEach(this.docs, r => n(r))
  }
  newChangeBuffer(e) {
      return new Y0(this)
  }
  getSize(e) {
      return I.resolve(this.size)
  }
}
class Y0 extends z0 {
  constructor(e) {
      super(), this.ar = e
  }
  applyChanges(e) {
      const n = [];
      return this.changes.forEach((r, i) => {
          i.isValidDocument() ? n.push(this.ar.addEntry(e, i)) : this.ar.removeEntry(r)
      }), I.waitFor(n)
  }
  getFromCache(e, n) {
      return this.ar.getEntry(e, n)
  }
  getAllFromCache(e, n) {
      return this.ar.getEntries(e, n)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class X0 {
  constructor(e) {
      this.persistence = e, this.Mr = new ar(n => yc(n), _c), this.lastRemoteSnapshotVersion = x.min(), this.highestTargetId = 0, this.Or = 0, this.Nr = new Ac, this.targetCount = 0, this.Br = Xn.Nn()
  }
  forEachTarget(e, n) {
      return this.Mr.forEach((r, i) => n(i)), I.resolve()
  }
  getLastRemoteSnapshotVersion(e) {
      return I.resolve(this.lastRemoteSnapshotVersion)
  }
  getHighestSequenceNumber(e) {
      return I.resolve(this.Or)
  }
  allocateTargetId(e) {
      return this.highestTargetId = this.Br.next(), I.resolve(this.highestTargetId)
  }
  setTargetsMetadata(e, n, r) {
      return r && (this.lastRemoteSnapshotVersion = r), n > this.Or && (this.Or = n), I.resolve()
  }
  qn(e) {
      this.Mr.set(e.target, e);
      const n = e.targetId;
      n > this.highestTargetId && (this.Br = new Xn(n), this.highestTargetId = n), e.sequenceNumber > this.Or && (this.Or = e.sequenceNumber)
  }
  addTargetData(e, n) {
      return this.qn(n), this.targetCount += 1, I.resolve()
  }
  updateTargetData(e, n) {
      return this.qn(n), I.resolve()
  }
  removeTargetData(e, n) {
      return this.Mr.delete(n.target), this.Nr.Vr(n.targetId), this.targetCount -= 1, I.resolve()
  }
  removeTargets(e, n, r) {
      let i = 0;
      const s = [];
      return this.Mr.forEach((o, l) => {
          l.sequenceNumber <= n && r.get(l.targetId) === null && (this.Mr.delete(o), s.push(this.removeMatchingKeysForTargetId(e, l.targetId)), i++)
      }), I.waitFor(s).next(() => i)
  }
  getTargetCount(e) {
      return I.resolve(this.targetCount)
  }
  getTargetData(e, n) {
      const r = this.Mr.get(n) || null;
      return I.resolve(r)
  }
  addMatchingKeys(e, n, r) {
      return this.Nr.dr(n, r), I.resolve()
  }
  removeMatchingKeys(e, n, r) {
      this.Nr.Rr(n, r);
      const i = this.persistence.referenceDelegate,
          s = [];
      return i && n.forEach(o => {
          s.push(i.markPotentiallyOrphaned(e, o))
      }), I.waitFor(s)
  }
  removeMatchingKeysForTargetId(e, n) {
      return this.Nr.Vr(n), I.resolve()
  }
  getMatchingKeysForTargetId(e, n) {
      const r = this.Nr.gr(n);
      return I.resolve(r)
  }
  containsKey(e, n) {
      return I.resolve(this.Nr.containsKey(n))
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Z0 {
  constructor(e, n) {
      this.Lr = {}, this.overlays = {}, this.kr = new pc(0), this.qr = !1, this.qr = !0, this.referenceDelegate = e(this), this.Qr = new X0(this), this.indexManager = new q0, this.remoteDocumentCache = function(i) {
          return new J0(i)
      }(r => this.referenceDelegate.Kr(r)), this.serializer = new B0(n), this.$r = new K0(this.serializer)
  }
  start() {
      return Promise.resolve()
  }
  shutdown() {
      return this.qr = !1, Promise.resolve()
  }
  get started() {
      return this.qr
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
      return this.indexManager
  }
  getDocumentOverlayCache(e) {
      let n = this.overlays[e.toKey()];
      return n || (n = new G0, this.overlays[e.toKey()] = n), n
  }
  getMutationQueue(e, n) {
      let r = this.Lr[e.toKey()];
      return r || (r = new Q0(n, this.referenceDelegate), this.Lr[e.toKey()] = r), r
  }
  getTargetCache() {
      return this.Qr
  }
  getRemoteDocumentCache() {
      return this.remoteDocumentCache
  }
  getBundleCache() {
      return this.$r
  }
  runTransaction(e, n, r) {
      T("MemoryPersistence", "Starting transaction:", e);
      const i = new eb(this.kr.next());
      return this.referenceDelegate.Ur(), r(i).next(s => this.referenceDelegate.Wr(i).next(() => s)).toPromise().then(s => (i.raiseOnCommittedEvent(), s))
  }
  Gr(e, n) {
      return I.or(Object.values(this.Lr).map(r => () => r.containsKey(e, n)))
  }
}
class eb extends LT {
  constructor(e) {
      super(), this.currentSequenceNumber = e
  }
}
class Sc {
  constructor(e) {
      this.persistence = e, this.zr = new Ac, this.jr = null
  }
  static Hr(e) {
      return new Sc(e)
  }
  get Jr() {
      if (this.jr) return this.jr;
      throw V()
  }
  addReference(e, n, r) {
      return this.zr.addReference(r, n), this.Jr.delete(r.toString()), I.resolve()
  }
  removeReference(e, n, r) {
      return this.zr.removeReference(r, n), this.Jr.add(r.toString()), I.resolve()
  }
  markPotentiallyOrphaned(e, n) {
      return this.Jr.add(n.toString()), I.resolve()
  }
  removeTarget(e, n) {
      this.zr.Vr(n.targetId).forEach(i => this.Jr.add(i.toString()));
      const r = this.persistence.getTargetCache();
      return r.getMatchingKeysForTargetId(e, n.targetId).next(i => {
          i.forEach(s => this.Jr.add(s.toString()))
      }).next(() => r.removeTargetData(e, n))
  }
  Ur() {
      this.jr = new Set
  }
  Wr(e) {
      const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
      return I.forEach(this.Jr, r => {
          const i = k.fromPath(r);
          return this.Yr(e, i).next(s => {
              s || n.removeEntry(i, x.min())
          })
      }).next(() => (this.jr = null, n.apply(e)))
  }
  updateLimboDocument(e, n) {
      return this.Yr(e, n).next(r => {
          r ? this.Jr.delete(n.toString()) : this.Jr.add(n.toString())
      })
  }
  Kr(e) {
      return 0
  }
  Yr(e, n) {
      return I.or([() => I.resolve(this.zr.containsKey(n)), () => this.persistence.getTargetCache().containsKey(e, n), () => this.persistence.Gr(e, n)])
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Pc {
  constructor(e, n, r, i) {
      this.targetId = e, this.fromCache = n, this.qi = r, this.Qi = i
  }
  static Ki(e, n) {
      let r = B(),
          i = B();
      for (const s of n.docChanges) switch (s.type) {
          case 0:
              r = r.add(s.doc.key);
              break;
          case 1:
              i = i.add(s.doc.key)
      }
      return new Pc(e, n.fromCache, r, i)
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class tb {
  constructor() {
      this._documentReadCount = 0
  }
  get documentReadCount() {
      return this._documentReadCount
  }
  incrementDocumentReadCount(e) {
      this._documentReadCount += e
  }
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class nb {
  constructor() {
      this.$i = !1, this.Ui = !1, this.Wi = 100, this.Gi = function() {
          return ky() ? 8 : cn.v(ue()) > 0 ? 6 : 4
      }()
  }
  initialize(e, n) {
      this.zi = e, this.indexManager = n, this.$i = !0
  }
  getDocumentsMatchingQuery(e, n, r, i) {
      const s = {
          result: null
      };
      return this.ji(e, n).next(o => {
          s.result = o
      }).next(() => {
          if (!s.result) return this.Hi(e, n, i, r).next(o => {
              s.result = o
          })
      }).next(() => {
          if (s.result) return;
          const o = new tb;
          return this.Ji(e, n, o).next(l => {
              if (s.result = l, this.Ui) return this.Yi(e, n, o, l.size)
          })
      }).next(() => s.result)
  }
  Yi(e, n, r, i) {
      return r.documentReadCount < this.Wi ? (Ir() <= j.DEBUG && T("QueryEngine", "SDK will not create cache indexes for query:", Mn(n), "since it only creates cache indexes for collection contains", "more than or equal to", this.Wi, "documents"), I.resolve()) : (Ir() <= j.DEBUG && T("QueryEngine", "Query:", Mn(n), "scans", r.documentReadCount, "local documents and returns", i, "documents as results."), r.documentReadCount > this.Gi * i ? (Ir() <= j.DEBUG && T("QueryEngine", "The SDK decides to create cache indexes for query:", Mn(n), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, dt(n))) : I.resolve())
  }
  ji(e, n) {
      if (eh(n)) return I.resolve(null);
      let r = dt(n);
      return this.indexManager.getIndexType(e, r).next(i => i === 0 ? null : (n.limit !== null && i === 1 && (n = Ea(n, null, "F"), r = dt(n)), this.indexManager.getDocumentsMatchingTarget(e, r).next(s => {
          const o = B(...s);
          return this.zi.getDocuments(e, o).next(l => this.indexManager.getMinOffset(e, r).next(u => {
              const f = this.Zi(n, l);
              return this.Xi(n, f, o, u.readTime) ? this.ji(e, Ea(n, null, "F")) : this.es(e, f, n, u)
          }))
      })))
  }
  Hi(e, n, r, i) {
      return eh(n) || i.isEqual(x.min()) ? I.resolve(null) : this.zi.getDocuments(e, r).next(s => {
          const o = this.Zi(n, s);
          return this.Xi(n, o, r, i) ? I.resolve(null) : (Ir() <= j.DEBUG && T("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), Mn(n)), this.es(e, o, n, VT(i, -1)).next(l => l))
      })
  }
  Zi(e, n) {
      let r = new Ie(Xf(e));
      return n.forEach((i, s) => {
          Ws(e, s) && (r = r.add(s))
      }), r
  }
  Xi(e, n, r, i) {
      if (e.limit === null) return !1;
      if (r.size !== n.size) return !0;
      const s = e.limitType === "F" ? n.last() : n.first();
      return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0)
  }
  Ji(e, n, r) {
      return Ir() <= j.DEBUG && T("QueryEngine", "Using full collection scan to execute query:", Mn(n)), this.zi.getDocumentsMatchingQuery(e, n, $t.min(), r)
  }
  es(e, n, r, i) {
      return this.zi.getDocumentsMatchingQuery(e, r, i).next(s => (n.forEach(o => {
          s = s.insert(o.key, o)
      }), s))
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class rb {
  constructor(e, n, r, i) {
      this.persistence = e, this.ts = n, this.serializer = i, this.ns = new te(H), this.rs = new ar(s => yc(s), _c), this.ss = new Map, this.os = e.getRemoteDocumentCache(), this.Qr = e.getTargetCache(), this.$r = e.getBundleCache(), this._s(r)
  }
  _s(e) {
      this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new W0(this.os, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.os.setIndexManager(this.indexManager), this.ts.initialize(this.localDocuments, this.indexManager)
  }
  collectGarbage(e) {
      return this.persistence.runTransaction("Collect garbage", "readwrite-primary", n => e.collect(n, this.ns))
  }
}

function ib(t, e, n, r) {
  return new rb(t, e, n, r)
}
async function Ep(t, e) {
  const n = L(t);
  return await n.persistence.runTransaction("Handle user change", "readonly", r => {
      let i;
      return n.mutationQueue.getAllMutationBatches(r).next(s => (i = s, n._s(e), n.mutationQueue.getAllMutationBatches(r))).next(s => {
          const o = [],
              l = [];
          let u = B();
          for (const f of i) {
              o.push(f.batchId);
              for (const p of f.mutations) u = u.add(p.key)
          }
          for (const f of s) {
              l.push(f.batchId);
              for (const p of f.mutations) u = u.add(p.key)
          }
          return n.localDocuments.getDocuments(r, u).next(f => ({
              us: f,
              removedBatchIds: o,
              addedBatchIds: l
          }))
      })
  })
}

function sb(t, e) {
  const n = L(t);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", r => {
      const i = e.batch.keys(),
          s = n.os.newChangeBuffer({
              trackRemovals: !0
          });
      return function(l, u, f, p) {
          const g = f.batch,
              w = g.keys();
          let v = I.resolve();
          return w.forEach(R => {
              v = v.next(() => p.getEntry(u, R)).next(O => {
                  const C = f.docVersions.get(R);
                  Q(C !== null), O.version.compareTo(C) < 0 && (g.applyToRemoteDocument(O, f), O.isValidDocument() && (O.setReadTime(f.commitVersion), p.addEntry(O)))
              })
          }), v.next(() => l.mutationQueue.removeMutationBatch(u, g))
      }(n, r, e, s).next(() => s.apply(r)).next(() => n.mutationQueue.performConsistencyCheck(r)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r, function(l) {
          let u = B();
          for (let f = 0; f < l.mutationResults.length; ++f) l.mutationResults[f].transformResults.length > 0 && (u = u.add(l.batch.mutations[f].key));
          return u
      }(e))).next(() => n.localDocuments.getDocuments(r, i))
  })
}

function Ip(t) {
  const e = L(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", n => e.Qr.getLastRemoteSnapshotVersion(n))
}

function ob(t, e) {
  const n = L(t),
      r = e.snapshotVersion;
  let i = n.ns;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", s => {
      const o = n.os.newChangeBuffer({
          trackRemovals: !0
      });
      i = n.ns;
      const l = [];
      e.targetChanges.forEach((p, g) => {
          const w = i.get(g);
          if (!w) return;
          l.push(n.Qr.removeMatchingKeys(s, p.removedDocuments, g).next(() => n.Qr.addMatchingKeys(s, p.addedDocuments, g)));
          let v = w.withSequenceNumber(s.currentSequenceNumber);
          e.targetMismatches.get(g) !== null ? v = v.withResumeToken(Re.EMPTY_BYTE_STRING, x.min()).withLastLimboFreeSnapshotVersion(x.min()) : p.resumeToken.approximateByteSize() > 0 && (v = v.withResumeToken(p.resumeToken, r)), i = i.insert(g, v),
              function(O, C, z) {
                  return O.resumeToken.approximateByteSize() === 0 || C.snapshotVersion.toMicroseconds() - O.snapshotVersion.toMicroseconds() >= 3e8 ? !0 : z.addedDocuments.size + z.modifiedDocuments.size + z.removedDocuments.size > 0
              }(w, v, p) && l.push(n.Qr.updateTargetData(s, v))
      });
      let u = Ct(),
          f = B();
      if (e.documentUpdates.forEach(p => {
              e.resolvedLimboDocuments.has(p) && l.push(n.persistence.referenceDelegate.updateLimboDocument(s, p))
          }), l.push(ab(s, o, e.documentUpdates).next(p => {
              u = p.cs, f = p.ls
          })), !r.isEqual(x.min())) {
          const p = n.Qr.getLastRemoteSnapshotVersion(s).next(g => n.Qr.setTargetsMetadata(s, s.currentSequenceNumber, r));
          l.push(p)
      }
      return I.waitFor(l).next(() => o.apply(s)).next(() => n.localDocuments.getLocalViewOfDocuments(s, u, f)).next(() => u)
  }).then(s => (n.ns = i, s))
}

function ab(t, e, n) {
  let r = B(),
      i = B();
  return n.forEach(s => r = r.add(s)), e.getEntries(t, r).next(s => {
      let o = Ct();
      return n.forEach((l, u) => {
          const f = s.get(l);
          u.isFoundDocument() !== f.isFoundDocument() && (i = i.add(l)), u.isNoDocument() && u.version.isEqual(x.min()) ? (e.removeEntry(l, u.readTime), o = o.insert(l, u)) : !f.isValidDocument() || u.version.compareTo(f.version) > 0 || u.version.compareTo(f.version) === 0 && f.hasPendingWrites ? (e.addEntry(u), o = o.insert(l, u)) : T("LocalStore", "Ignoring outdated watch update for ", l, ". Current version:", f.version, " Watch version:", u.version)
      }), {
          cs: o,
          ls: i
      }
  })
}

function cb(t, e) {
  const n = L(t);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", r => (e === void 0 && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)))
}

function lb(t, e) {
  const n = L(t);
  return n.persistence.runTransaction("Allocate target", "readwrite", r => {
      let i;
      return n.Qr.getTargetData(r, e).next(s => s ? (i = s, I.resolve(i)) : n.Qr.allocateTargetId(r).next(o => (i = new Ut(e, o, "TargetPurposeListen", r.currentSequenceNumber), n.Qr.addTargetData(r, i).next(() => i))))
  }).then(r => {
      const i = n.ns.get(r.targetId);
      return (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) && (n.ns = n.ns.insert(r.targetId, r), n.rs.set(e, r.targetId)), r
  })
}
async function Sa(t, e, n) {
  const r = L(t),
      i = r.ns.get(e),
      s = n ? "readwrite" : "readwrite-primary";
  try {
      n || await r.persistence.runTransaction("Release target", s, o => r.persistence.referenceDelegate.removeTarget(o, i))
  } catch (o) {
      if (!mi(o)) throw o;
      T("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`)
  }
  r.ns = r.ns.remove(e), r.rs.delete(i.target)
}

function hh(t, e, n) {
  const r = L(t);
  let i = x.min(),
      s = B();
  return r.persistence.runTransaction("Execute query", "readwrite", o => function(u, f, p) {
      const g = L(u),
          w = g.rs.get(p);
      return w !== void 0 ? I.resolve(g.ns.get(w)) : g.Qr.getTargetData(f, p)
  }(r, o, dt(e)).next(l => {
      if (l) return i = l.lastLimboFreeSnapshotVersion, r.Qr.getMatchingKeysForTargetId(o, l.targetId).next(u => {
          s = u
      })
  }).next(() => r.ts.getDocumentsMatchingQuery(o, e, n ? i : x.min(), n ? s : B())).next(l => (ub(r, e0(e), l), {
      documents: l,
      hs: s
  })))
}

function ub(t, e, n) {
  let r = t.ss.get(e) || x.min();
  n.forEach((i, s) => {
      s.readTime.compareTo(r) > 0 && (r = s.readTime)
  }), t.ss.set(e, r)
}
class dh {
  constructor() {
      this.activeTargetIds = o0()
  }
  As(e) {
      this.activeTargetIds = this.activeTargetIds.add(e)
  }
  Rs(e) {
      this.activeTargetIds = this.activeTargetIds.delete(e)
  }
  ds() {
      const e = {
          activeTargetIds: this.activeTargetIds.toArray(),
          updateTimeMs: Date.now()
      };
      return JSON.stringify(e)
  }
}
class hb {
  constructor() {
      this.no = new dh, this.ro = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
      return this.no.As(e), this.ro[e] || "not-current"
  }
  updateQueryState(e, n, r) {
      this.ro[e] = n
  }
  removeLocalQueryTarget(e) {
      this.no.Rs(e)
  }
  isLocalQueryTarget(e) {
      return this.no.activeTargetIds.has(e)
  }
  clearQueryState(e) {
      delete this.ro[e]
  }
  getAllActiveQueryTargets() {
      return this.no.activeTargetIds
  }
  isActiveQueryTarget(e) {
      return this.no.activeTargetIds.has(e)
  }
  start() {
      return this.no = new dh, Promise.resolve()
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class db {
  io(e) {}
  shutdown() {}
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class fh {
  constructor() {
      this.so = () => this.oo(), this._o = () => this.ao(), this.uo = [], this.co()
  }
  io(e) {
      this.uo.push(e)
  }
  shutdown() {
      window.removeEventListener("online", this.so), window.removeEventListener("offline", this._o)
  }
  co() {
      window.addEventListener("online", this.so), window.addEventListener("offline", this._o)
  }
  oo() {
      T("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
      for (const e of this.uo) e(0)
  }
  ao() {
      T("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
      for (const e of this.uo) e(1)
  }
  static D() {
      return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let qi = null;

function zo() {
  return qi === null ? qi = function() {
      return 268435456 + Math.round(2147483648 * Math.random())
  }() : qi++, "0x" + qi.toString(16)
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const fb = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class pb {
  constructor(e) {
      this.lo = e.lo, this.ho = e.ho
  }
  Po(e) {
      this.Io = e
  }
  To(e) {
      this.Eo = e
  }
  onMessage(e) {
      this.Ao = e
  }
  close() {
      this.ho()
  }
  send(e) {
      this.lo(e)
  }
  Ro() {
      this.Io()
  }
  Vo(e) {
      this.Eo(e)
  }
  mo(e) {
      this.Ao(e)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const be = "WebChannelConnection";
class mb extends class {
  constructor(n) {
      this.databaseInfo = n, this.databaseId = n.databaseId;
      const r = n.ssl ? "https" : "http",
          i = encodeURIComponent(this.databaseId.projectId),
          s = encodeURIComponent(this.databaseId.database);
      this.fo = r + "://" + n.host, this.po = `projects/${i}/databases/${s}`, this.yo = this.databaseId.database === "(default)" ? `project_id=${i}` : `project_id=${i}&database_id=${s}`
  }
  get wo() {
      return !1
  }
  So(n, r, i, s, o) {
      const l = zo(),
          u = this.bo(n, r.toUriEncodedString());
      T("RestConnection", `Sending RPC '${n}' ${l}:`, u, i);
      const f = {
          "google-cloud-resource-prefix": this.po,
          "x-goog-request-params": this.yo
      };
      return this.Do(f, s, o), this.Co(n, u, f, i).then(p => (T("RestConnection", `Received RPC '${n}' ${l}: `, p), p), p => {
          throw Kn("RestConnection", `RPC '${n}' ${l} failed with error: `, p, "url: ", u, "request:", i), p
      })
  }
  vo(n, r, i, s, o, l) {
      return this.So(n, r, i, s, o)
  }
  Do(n, r, i) {
      n["X-Goog-Api-Client"] = function() {
          return "gl-js/ fire/" + or
      }(), n["Content-Type"] = "text/plain", this.databaseInfo.appId && (n["X-Firebase-GMPID"] = this.databaseInfo.appId), r && r.headers.forEach((s, o) => n[o] = s), i && i.headers.forEach((s, o) => n[o] = s)
  }
  bo(n, r) {
      const i = fb[n];
      return `${this.fo}/v1/${r}:${i}`
  }
  terminate() {}
} {
  constructor(e) {
      super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions
  }
  Co(e, n, r, i) {
      const s = zo();
      return new Promise((o, l) => {
          const u = new ET;
          u.setWithCredentials(!0), u.listenOnce(_T.COMPLETE, () => {
              try {
                  switch (u.getLastErrorCode()) {
                      case qo.NO_ERROR:
                          const p = u.getResponseJson();
                          T(be, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(p)), o(p);
                          break;
                      case qo.TIMEOUT:
                          T(be, `RPC '${e}' ${s} timed out`), l(new P(E.DEADLINE_EXCEEDED, "Request time out"));
                          break;
                      case qo.HTTP_ERROR:
                          const g = u.getStatus();
                          if (T(be, `RPC '${e}' ${s} failed with status:`, g, "response text:", u.getResponseText()), g > 0) {
                              let w = u.getResponseJson();
                              Array.isArray(w) && (w = w[0]);
                              const v = w?.error;
                              if (v && v.status && v.message) {
                                  const R = function(C) {
                                      const z = C.toLowerCase().replace(/_/g, "-");
                                      return Object.values(E).indexOf(z) >= 0 ? z : E.UNKNOWN
                                  }(v.status);
                                  l(new P(R, v.message))
                              } else l(new P(E.UNKNOWN, "Server responded with status " + u.getStatus()))
                          } else l(new P(E.UNAVAILABLE, "Connection failed."));
                          break;
                      default:
                          V()
                  }
              } finally {
                  T(be, `RPC '${e}' ${s} completed.`)
              }
          });
          const f = JSON.stringify(i);
          T(be, `RPC '${e}' ${s} sending request:`, i), u.send(n, "POST", f, r, 15)
      })
  }
  Fo(e, n, r) {
      const i = zo(),
          s = [this.fo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
          o = wT(),
          l = yT(),
          u = {
              httpSessionIdParam: "gsessionid",
              initMessageHeaders: {},
              messageUrlParams: {
                  database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
              },
              sendRawJson: !0,
              supportsCrossDomainXhr: !0,
              internalChannelParams: {
                  forwardChannelRequestTimeoutMs: 6e5
              },
              forceLongPolling: this.forceLongPolling,
              detectBufferingProxy: this.autoDetectLongPolling
          },
          f = this.longPollingOptions.timeoutSeconds;
      f !== void 0 && (u.longPollingTimeout = Math.round(1e3 * f)), this.useFetchStreams && (u.useFetchStreams = !0), this.Do(u.initMessageHeaders, n, r), u.encodeInitMessageHeaders = !0;
      const p = s.join("");
      T(be, `Creating RPC '${e}' stream ${i}: ${p}`, u);
      const g = o.createWebChannel(p, u);
      let w = !1,
          v = !1;
      const R = new pb({
              lo: C => {
                  v ? T(be, `Not sending because RPC '${e}' stream ${i} is closed:`, C) : (w || (T(be, `Opening RPC '${e}' stream ${i} transport.`), g.open(), w = !0), T(be, `RPC '${e}' stream ${i} sending:`, C), g.send(C))
              },
              ho: () => g.close()
          }),
          O = (C, z, G) => {
              C.listen(z, J => {
                  try {
                      G(J)
                  } catch (de) {
                      setTimeout(() => {
                          throw de
                      }, 0)
                  }
              })
          };
      return O(g, Ui.EventType.OPEN, () => {
          v || T(be, `RPC '${e}' stream ${i} transport opened.`)
      }), O(g, Ui.EventType.CLOSE, () => {
          v || (v = !0, T(be, `RPC '${e}' stream ${i} transport closed`), R.Vo())
      }), O(g, Ui.EventType.ERROR, C => {
          v || (v = !0, Kn(be, `RPC '${e}' stream ${i} transport errored:`, C), R.Vo(new P(E.UNAVAILABLE, "The operation could not be completed")))
      }), O(g, Ui.EventType.MESSAGE, C => {
          var z;
          if (!v) {
              const G = C.data[0];
              Q(!!G);
              const J = G,
                  de = J.error || ((z = J[0]) === null || z === void 0 ? void 0 : z.error);
              if (de) {
                  T(be, `RPC '${e}' stream ${i} received error:`, de);
                  const wt = de.status;
                  let ze = function(_t) {
                          const Cn = ae[_t];
                          if (Cn !== void 0) return up(Cn)
                      }(wt),
                      yt = de.message;
                  ze === void 0 && (ze = E.INTERNAL, yt = "Unknown error status: " + wt + " with message " + de.message), v = !0, R.Vo(new P(ze, yt)), g.close()
              } else T(be, `RPC '${e}' stream ${i} received:`, G), R.mo(G)
          }
      }), O(l, vT.STAT_EVENT, C => {
          C.stat === qu.PROXY ? T(be, `RPC '${e}' stream ${i} detected buffering proxy`) : C.stat === qu.NOPROXY && T(be, `RPC '${e}' stream ${i} detected no buffering proxy`)
      }), setTimeout(() => {
          R.Ro()
      }, 0), R
  }
}

function Ho() {
  return typeof document < "u" ? document : null
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Js(t) {
  return new P0(t, !0)
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Tp {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
      this.oi = e, this.timerId = n, this.Mo = r, this.xo = i, this.Oo = s, this.No = 0, this.Bo = null, this.Lo = Date.now(), this.reset()
  }
  reset() {
      this.No = 0
  }
  ko() {
      this.No = this.Oo
  }
  qo(e) {
      this.cancel();
      const n = Math.floor(this.No + this.Qo()),
          r = Math.max(0, Date.now() - this.Lo),
          i = Math.max(0, n - r);
      i > 0 && T("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`), this.Bo = this.oi.enqueueAfterDelay(this.timerId, i, () => (this.Lo = Date.now(), e())), this.No *= this.xo, this.No < this.Mo && (this.No = this.Mo), this.No > this.Oo && (this.No = this.Oo)
  }
  Ko() {
      this.Bo !== null && (this.Bo.skipDelay(), this.Bo = null)
  }
  cancel() {
      this.Bo !== null && (this.Bo.cancel(), this.Bo = null)
  }
  Qo() {
      return (Math.random() - .5) * this.No
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class bp {
  constructor(e, n, r, i, s, o, l, u) {
      this.oi = e, this.$o = r, this.Uo = i, this.connection = s, this.authCredentialsProvider = o, this.appCheckCredentialsProvider = l, this.listener = u, this.state = 0, this.Wo = 0, this.Go = null, this.zo = null, this.stream = null, this.jo = new Tp(e, n)
  }
  Ho() {
      return this.state === 1 || this.state === 5 || this.Jo()
  }
  Jo() {
      return this.state === 2 || this.state === 3
  }
  start() {
      this.state !== 4 ? this.auth() : this.Yo()
  }
  async stop() {
      this.Ho() && await this.close(0)
  }
  Zo() {
      this.state = 0, this.jo.reset()
  }
  Xo() {
      this.Jo() && this.Go === null && (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()))
  }
  t_(e) {
      this.n_(), this.stream.send(e)
  }
  async e_() {
      if (this.Jo()) return this.close(0)
  }
  n_() {
      this.Go && (this.Go.cancel(), this.Go = null)
  }
  r_() {
      this.zo && (this.zo.cancel(), this.zo = null)
  }
  async close(e, n) {
      this.n_(), this.r_(), this.jo.cancel(), this.Wo++, e !== 4 ? this.jo.reset() : n && n.code === E.RESOURCE_EXHAUSTED ? (mt(n.toString()), mt("Using maximum backoff delay to prevent overloading the backend."), this.jo.ko()) : n && n.code === E.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), this.stream !== null && (this.i_(), this.stream.close(), this.stream = null), this.state = e, await this.listener.To(n)
  }
  i_() {}
  auth() {
      this.state = 1;
      const e = this.s_(this.Wo),
          n = this.Wo;
      Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([r, i]) => {
          this.Wo === n && this.o_(r, i)
      }, r => {
          e(() => {
              const i = new P(E.UNKNOWN, "Fetching auth token failed: " + r.message);
              return this.__(i)
          })
      })
  }
  o_(e, n) {
      const r = this.s_(this.Wo);
      this.stream = this.a_(e, n), this.stream.Po(() => {
          r(() => (this.state = 2, this.zo = this.oi.enqueueAfterDelay(this.Uo, 1e4, () => (this.Jo() && (this.state = 3), Promise.resolve())), this.listener.Po()))
      }), this.stream.To(i => {
          r(() => this.__(i))
      }), this.stream.onMessage(i => {
          r(() => this.onMessage(i))
      })
  }
  Yo() {
      this.state = 5, this.jo.qo(async () => {
          this.state = 0, this.start()
      })
  }
  __(e) {
      return T("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e)
  }
  s_(e) {
      return n => {
          this.oi.enqueueAndForget(() => this.Wo === e ? n() : (T("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()))
      }
  }
}
class gb extends bp {
  constructor(e, n, r, i, s, o) {
      super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", n, r, i, o), this.serializer = s
  }
  a_(e, n) {
      return this.connection.Fo("Listen", e, n)
  }
  onMessage(e) {
      this.jo.reset();
      const n = k0(this.serializer, e),
          r = function(s) {
              if (!("targetChange" in s)) return x.min();
              const o = s.targetChange;
              return o.targetIds && o.targetIds.length ? x.min() : o.readTime ? ft(o.readTime) : x.min()
          }(e);
      return this.listener.u_(n, r)
  }
  c_(e) {
      const n = {};
      n.database = Aa(this.serializer), n.addTarget = function(s, o) {
          let l;
          const u = o.target;
          if (l = _a(u) ? {
                  documents: O0(s, u)
              } : {
                  query: wp(s, u).ut
              }, l.targetId = o.targetId, o.resumeToken.approximateByteSize() > 0) {
              l.resumeToken = fp(s, o.resumeToken);
              const f = Ia(s, o.expectedCount);
              f !== null && (l.expectedCount = f)
          } else if (o.snapshotVersion.compareTo(x.min()) > 0) {
              l.readTime = gs(s, o.snapshotVersion.toTimestamp());
              const f = Ia(s, o.expectedCount);
              f !== null && (l.expectedCount = f)
          }
          return l
      }(this.serializer, e);
      const r = x0(this.serializer, e);
      r && (n.labels = r), this.t_(n)
  }
  l_(e) {
      const n = {};
      n.database = Aa(this.serializer), n.removeTarget = e, this.t_(n)
  }
}
class wb extends bp {
  constructor(e, n, r, i, s, o) {
      super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", n, r, i, o), this.serializer = s, this.h_ = !1
  }
  get P_() {
      return this.h_
  }
  start() {
      this.h_ = !1, this.lastStreamToken = void 0, super.start()
  }
  i_() {
      this.h_ && this.I_([])
  }
  a_(e, n) {
      return this.connection.Fo("Write", e, n)
  }
  onMessage(e) {
      if (Q(!!e.streamToken), this.lastStreamToken = e.streamToken, this.h_) {
          this.jo.reset();
          const n = V0(e.writeResults, e.commitTime),
              r = ft(e.commitTime);
          return this.listener.T_(r, n)
      }
      return Q(!e.writeResults || e.writeResults.length === 0), this.h_ = !0, this.listener.E_()
  }
  d_() {
      const e = {};
      e.database = Aa(this.serializer), this.t_(e)
  }
  I_(e) {
      const n = {
          streamToken: this.lastStreamToken,
          writes: e.map(r => D0(this.serializer, r))
      };
      this.t_(n)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class yb extends class {} {
  constructor(e, n, r, i) {
      super(), this.authCredentials = e, this.appCheckCredentials = n, this.connection = r, this.serializer = i, this.A_ = !1
  }
  R_() {
      if (this.A_) throw new P(E.FAILED_PRECONDITION, "The client has already been terminated.")
  }
  So(e, n, r, i) {
      return this.R_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, o]) => this.connection.So(e, Ta(n, r), i, s, o)).catch(s => {
          throw s.name === "FirebaseError" ? (s.code === E.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), s) : new P(E.UNKNOWN, s.toString())
      })
  }
  vo(e, n, r, i, s) {
      return this.R_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([o, l]) => this.connection.vo(e, Ta(n, r), i, o, l, s)).catch(o => {
          throw o.name === "FirebaseError" ? (o.code === E.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), o) : new P(E.UNKNOWN, o.toString())
      })
  }
  terminate() {
      this.A_ = !0, this.connection.terminate()
  }
}
async function _b(t, e, n) {
  var r;
  const i = L(t),
      {
          request: s,
          V_: o,
          parent: l
      } = function(g, w, v) {
          const {
              ut: R,
              parent: O
          } = wp(g, w), C = {}, z = [];
          let G = 0;
          return v.forEach(J => {
              const de = "aggregate_" + G++;
              C[de] = J.alias, J.aggregateType === "count" ? z.push({
                  alias: de,
                  count: {}
              }) : J.aggregateType === "avg" ? z.push({
                  alias: de,
                  avg: {
                      field: Ft(J.fieldPath)
                  }
              }) : J.aggregateType === "sum" && z.push({
                  alias: de,
                  sum: {
                      field: Ft(J.fieldPath)
                  }
              })
          }), {
              request: {
                  structuredAggregationQuery: {
                      aggregations: z,
                      structuredQuery: R.structuredQuery
                  },
                  parent: R.parent
              },
              V_: C,
              parent: O
          }
      }(i.serializer, function(g) {
          const w = L(g);
          return w.Pe || (w.Pe = Jf(w, g.explicitOrderBy)), w.Pe
      }(e), n);
  i.connection.wo || delete s.parent;
  const u = (await i.vo("RunAggregationQuery", i.serializer.databaseId, l, s, 1)).filter(p => !!p.result);
  Q(u.length === 1);
  const f = (r = u[0].result) === null || r === void 0 ? void 0 : r.aggregateFields;
  return Object.keys(f).reduce((p, g) => (p[o[g]] = f[g], p), {})
}
class vb {
  constructor(e, n) {
      this.asyncQueue = e, this.onlineStateHandler = n, this.state = "Unknown", this.m_ = 0, this.f_ = null, this.g_ = !0
  }
  p_() {
      this.m_ === 0 && (this.y_("Unknown"), this.f_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.f_ = null, this.w_("Backend didn't respond within 10 seconds."), this.y_("Offline"), Promise.resolve())))
  }
  S_(e) {
      this.state === "Online" ? this.y_("Unknown") : (this.m_++, this.m_ >= 1 && (this.b_(), this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.y_("Offline")))
  }
  set(e) {
      this.b_(), this.m_ = 0, e === "Online" && (this.g_ = !1), this.y_(e)
  }
  y_(e) {
      e !== this.state && (this.state = e, this.onlineStateHandler(e))
  }
  w_(e) {
      const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
      this.g_ ? (mt(n), this.g_ = !1) : T("OnlineStateTracker", n)
  }
  b_() {
      this.f_ !== null && (this.f_.cancel(), this.f_ = null)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Eb {
  constructor(e, n, r, i, s) {
      this.localStore = e, this.datastore = n, this.asyncQueue = r, this.remoteSyncer = {}, this.D_ = [], this.C_ = new Map, this.v_ = new Set, this.F_ = [], this.M_ = s, this.M_.io(o => {
          r.enqueueAndForget(async () => {
              An(this) && (T("RemoteStore", "Restarting streams for network reachability change."), await async function(u) {
                  const f = L(u);
                  f.v_.add(4), await _i(f), f.x_.set("Unknown"), f.v_.delete(4), await Ys(f)
              }(this))
          })
      }), this.x_ = new vb(r, i)
  }
}
async function Ys(t) {
  if (An(t))
      for (const e of t.F_) await e(!0)
}
async function _i(t) {
  for (const e of t.F_) await e(!1)
}

function Ap(t, e) {
  const n = L(t);
  n.C_.has(e.targetId) || (n.C_.set(e.targetId, e), kc(n) ? Rc(n) : cr(n).Jo() && Cc(n, e))
}

function Sp(t, e) {
  const n = L(t),
      r = cr(n);
  n.C_.delete(e), r.Jo() && Pp(n, e), n.C_.size === 0 && (r.Jo() ? r.Xo() : An(n) && n.x_.set("Unknown"))
}

function Cc(t, e) {
  if (t.O_.Oe(e.targetId), e.resumeToken.approximateByteSize() > 0 || e.snapshotVersion.compareTo(x.min()) > 0) {
      const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
      e = e.withExpectedCount(n)
  }
  cr(t).c_(e)
}

function Pp(t, e) {
  t.O_.Oe(e), cr(t).l_(e)
}

function Rc(t) {
  t.O_ = new T0({
      getRemoteKeysForTarget: e => t.remoteSyncer.getRemoteKeysForTarget(e),
      _t: e => t.C_.get(e) || null,
      nt: () => t.datastore.serializer.databaseId
  }), cr(t).start(), t.x_.p_()
}

function kc(t) {
  return An(t) && !cr(t).Ho() && t.C_.size > 0
}

function An(t) {
  return L(t).v_.size === 0
}

function Cp(t) {
  t.O_ = void 0
}
async function Ib(t) {
  t.C_.forEach((e, n) => {
      Cc(t, e)
  })
}
async function Tb(t, e) {
  Cp(t), kc(t) ? (t.x_.S_(e), Rc(t)) : t.x_.set("Unknown")
}
async function bb(t, e, n) {
  if (t.x_.set("Online"), e instanceof dp && e.state === 2 && e.cause) try {
      await async function(i, s) {
          const o = s.cause;
          for (const l of s.targetIds) i.C_.has(l) && (await i.remoteSyncer.rejectListen(l, o), i.C_.delete(l), i.O_.removeTarget(l))
      }(t, e)
  } catch (r) {
      T("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), await ws(t, r)
  } else if (e instanceof Qi ? t.O_.$e(e) : e instanceof hp ? t.O_.Je(e) : t.O_.Ge(e), !n.isEqual(x.min())) try {
      const r = await Ip(t.localStore);
      n.compareTo(r) >= 0 && await
      function(s, o) {
          const l = s.O_.it(o);
          return l.targetChanges.forEach((u, f) => {
              if (u.resumeToken.approximateByteSize() > 0) {
                  const p = s.C_.get(f);
                  p && s.C_.set(f, p.withResumeToken(u.resumeToken, o))
              }
          }), l.targetMismatches.forEach((u, f) => {
              const p = s.C_.get(u);
              if (!p) return;
              s.C_.set(u, p.withResumeToken(Re.EMPTY_BYTE_STRING, p.snapshotVersion)), Pp(s, u);
              const g = new Ut(p.target, u, f, p.sequenceNumber);
              Cc(s, g)
          }), s.remoteSyncer.applyRemoteEvent(l)
      }(t, n)
  } catch (r) {
      T("RemoteStore", "Failed to raise snapshot:", r), await ws(t, r)
  }
}
async function ws(t, e, n) {
  if (!mi(e)) throw e;
  t.v_.add(1), await _i(t), t.x_.set("Offline"), n || (n = () => Ip(t.localStore)), t.asyncQueue.enqueueRetryable(async () => {
      T("RemoteStore", "Retrying IndexedDB access"), await n(), t.v_.delete(1), await Ys(t)
  })
}

function Rp(t, e) {
  return e().catch(n => ws(t, n, e))
}
async function Xs(t) {
  const e = L(t),
      n = Ht(e);
  let r = e.D_.length > 0 ? e.D_[e.D_.length - 1].batchId : -1;
  for (; Ab(e);) try {
      const i = await cb(e.localStore, r);
      if (i === null) {
          e.D_.length === 0 && n.Xo();
          break
      }
      r = i.batchId, Sb(e, i)
  } catch (i) {
      await ws(e, i)
  }
  kp(e) && Dp(e)
}

function Ab(t) {
  return An(t) && t.D_.length < 10
}

function Sb(t, e) {
  t.D_.push(e);
  const n = Ht(t);
  n.Jo() && n.P_ && n.I_(e.mutations)
}

function kp(t) {
  return An(t) && !Ht(t).Ho() && t.D_.length > 0
}

function Dp(t) {
  Ht(t).start()
}
async function Pb(t) {
  Ht(t).d_()
}
async function Cb(t) {
  const e = Ht(t);
  for (const n of t.D_) e.I_(n.mutations)
}
async function Rb(t, e, n) {
  const r = t.D_.shift(),
      i = Ic.from(r, e, n);
  await Rp(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Xs(t)
}
async function kb(t, e) {
  e && Ht(t).P_ && await async function(r, i) {
      if (function(o) {
              return v0(o) && o !== E.ABORTED
          }(i.code)) {
          const s = r.D_.shift();
          Ht(r).Zo(), await Rp(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)), await Xs(r)
      }
  }(t, e), kp(t) && Dp(t)
}
async function ph(t, e) {
  const n = L(t);
  n.asyncQueue.verifyOperationInProgress(), T("RemoteStore", "RemoteStore received new credentials");
  const r = An(n);
  n.v_.add(3), await _i(n), r && n.x_.set("Unknown"), await n.remoteSyncer.handleCredentialChange(e), n.v_.delete(3), await Ys(n)
}
async function Db(t, e) {
  const n = L(t);
  e ? (n.v_.delete(2), await Ys(n)) : e || (n.v_.add(2), await _i(n), n.x_.set("Unknown"))
}

function cr(t) {
  return t.N_ || (t.N_ = function(n, r, i) {
      const s = L(n);
      return s.R_(), new gb(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i)
  }(t.datastore, t.asyncQueue, {
      Po: Ib.bind(null, t),
      To: Tb.bind(null, t),
      u_: bb.bind(null, t)
  }), t.F_.push(async e => {
      e ? (t.N_.Zo(), kc(t) ? Rc(t) : t.x_.set("Unknown")) : (await t.N_.stop(), Cp(t))
  })), t.N_
}

function Ht(t) {
  return t.B_ || (t.B_ = function(n, r, i) {
      const s = L(n);
      return s.R_(), new wb(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i)
  }(t.datastore, t.asyncQueue, {
      Po: Pb.bind(null, t),
      To: kb.bind(null, t),
      E_: Cb.bind(null, t),
      T_: Rb.bind(null, t)
  }), t.F_.push(async e => {
      e ? (t.B_.Zo(), await Xs(t)) : (await t.B_.stop(), t.D_.length > 0 && (T("RemoteStore", `Stopping write stream with ${t.D_.length} pending writes`), t.D_ = []))
  })), t.B_
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Dc {
  constructor(e, n, r, i, s) {
      this.asyncQueue = e, this.timerId = n, this.targetTimeMs = r, this.op = i, this.removalCallback = s, this.deferred = new Je, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(o => {})
  }
  get promise() {
      return this.deferred.promise
  }
  static createAndSchedule(e, n, r, i, s) {
      const o = Date.now() + r,
          l = new Dc(e, n, o, i, s);
      return l.start(r), l
  }
  start(e) {
      this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e)
  }
  skipDelay() {
      return this.handleDelayElapsed()
  }
  cancel(e) {
      this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new P(E.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))))
  }
  handleDelayElapsed() {
      this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then(e => this.deferred.resolve(e))) : Promise.resolve())
  }
  clearTimeout() {
      this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
  }
}

function Vc(t, e) {
  if (mt("AsyncQueue", `${e}: ${t}`), mi(t)) return new P(E.UNAVAILABLE, `${e}: ${t}`);
  throw t
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class zn {
  constructor(e) {
      this.comparator = e ? (n, r) => e(n, r) || k.comparator(n.key, r.key) : (n, r) => k.comparator(n.key, r.key), this.keyedMap = Pr(), this.sortedSet = new te(this.comparator)
  }
  static emptySet(e) {
      return new zn(e.comparator)
  }
  has(e) {
      return this.keyedMap.get(e) != null
  }
  get(e) {
      return this.keyedMap.get(e)
  }
  first() {
      return this.sortedSet.minKey()
  }
  last() {
      return this.sortedSet.maxKey()
  }
  isEmpty() {
      return this.sortedSet.isEmpty()
  }
  indexOf(e) {
      const n = this.keyedMap.get(e);
      return n ? this.sortedSet.indexOf(n) : -1
  }
  get size() {
      return this.sortedSet.size
  }
  forEach(e) {
      this.sortedSet.inorderTraversal((n, r) => (e(n), !1))
  }
  add(e) {
      const n = this.delete(e.key);
      return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null))
  }
  delete(e) {
      const n = this.get(e);
      return n ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n)) : this
  }
  isEqual(e) {
      if (!(e instanceof zn) || this.size !== e.size) return !1;
      const n = this.sortedSet.getIterator(),
          r = e.sortedSet.getIterator();
      for (; n.hasNext();) {
          const i = n.getNext().key,
              s = r.getNext().key;
          if (!i.isEqual(s)) return !1
      }
      return !0
  }
  toString() {
      const e = [];
      return this.forEach(n => {
          e.push(n.toString())
      }), e.length === 0 ? "DocumentSet ()" : `DocumentSet (
` + e.join(`  
`) + `
)`
  }
  copy(e, n) {
      const r = new zn;
      return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class mh {
  constructor() {
      this.L_ = new te(k.comparator)
  }
  track(e) {
      const n = e.doc.key,
          r = this.L_.get(n);
      r ? e.type !== 0 && r.type === 3 ? this.L_ = this.L_.insert(n, e) : e.type === 3 && r.type !== 1 ? this.L_ = this.L_.insert(n, {
          type: r.type,
          doc: e.doc
      }) : e.type === 2 && r.type === 2 ? this.L_ = this.L_.insert(n, {
          type: 2,
          doc: e.doc
      }) : e.type === 2 && r.type === 0 ? this.L_ = this.L_.insert(n, {
          type: 0,
          doc: e.doc
      }) : e.type === 1 && r.type === 0 ? this.L_ = this.L_.remove(n) : e.type === 1 && r.type === 2 ? this.L_ = this.L_.insert(n, {
          type: 1,
          doc: r.doc
      }) : e.type === 0 && r.type === 1 ? this.L_ = this.L_.insert(n, {
          type: 2,
          doc: e.doc
      }) : V() : this.L_ = this.L_.insert(n, e)
  }
  k_() {
      const e = [];
      return this.L_.inorderTraversal((n, r) => {
          e.push(r)
      }), e
  }
}
class Zn {
  constructor(e, n, r, i, s, o, l, u, f) {
      this.query = e, this.docs = n, this.oldDocs = r, this.docChanges = i, this.mutatedKeys = s, this.fromCache = o, this.syncStateChanged = l, this.excludesMetadataChanges = u, this.hasCachedResults = f
  }
  static fromInitialDocuments(e, n, r, i, s) {
      const o = [];
      return n.forEach(l => {
          o.push({
              type: 0,
              doc: l
          })
      }), new Zn(e, n, zn.emptySet(n), o, r, i, !0, !1, s)
  }
  get hasPendingWrites() {
      return !this.mutatedKeys.isEmpty()
  }
  isEqual(e) {
      if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && Hs(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
      const n = this.docChanges,
          r = e.docChanges;
      if (n.length !== r.length) return !1;
      for (let i = 0; i < n.length; i++)
          if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
      return !0
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Vb {
  constructor() {
      this.q_ = void 0, this.Q_ = []
  }
}
class Ob {
  constructor() {
      this.queries = new ar(e => Yf(e), Hs), this.onlineState = "Unknown", this.K_ = new Set
  }
}
async function Vp(t, e) {
  const n = L(t),
      r = e.query;
  let i = !1,
      s = n.queries.get(r);
  if (s || (i = !0, s = new Vb), i) try {
      s.q_ = await n.onListen(r)
  } catch (o) {
      const l = Vc(o, `Initialization of query '${Mn(e.query)}' failed`);
      return void e.onError(l)
  }
  n.queries.set(r, s), s.Q_.push(e), e.U_(n.onlineState), s.q_ && e.W_(s.q_) && Oc(n)
}
async function Op(t, e) {
  const n = L(t),
      r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
      const o = s.Q_.indexOf(e);
      o >= 0 && (s.Q_.splice(o, 1), i = s.Q_.length === 0)
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r)
}

function Nb(t, e) {
  const n = L(t);
  let r = !1;
  for (const i of e) {
      const s = i.query,
          o = n.queries.get(s);
      if (o) {
          for (const l of o.Q_) l.W_(i) && (r = !0);
          o.q_ = i
      }
  }
  r && Oc(n)
}

function xb(t, e, n) {
  const r = L(t),
      i = r.queries.get(e);
  if (i)
      for (const s of i.Q_) s.onError(n);
  r.queries.delete(e)
}

function Oc(t) {
  t.K_.forEach(e => {
      e.next()
  })
}
class Np {
  constructor(e, n, r) {
      this.query = e, this.G_ = n, this.z_ = !1, this.j_ = null, this.onlineState = "Unknown", this.options = r || {}
  }
  W_(e) {
      if (!this.options.includeMetadataChanges) {
          const r = [];
          for (const i of e.docChanges) i.type !== 3 && r.push(i);
          e = new Zn(e.query, e.docs, e.oldDocs, r, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0, e.hasCachedResults)
      }
      let n = !1;
      return this.z_ ? this.H_(e) && (this.G_.next(e), n = !0) : this.J_(e, this.onlineState) && (this.Y_(e), n = !0), this.j_ = e, n
  }
  onError(e) {
      this.G_.error(e)
  }
  U_(e) {
      this.onlineState = e;
      let n = !1;
      return this.j_ && !this.z_ && this.J_(this.j_, e) && (this.Y_(this.j_), n = !0), n
  }
  J_(e, n) {
      if (!e.fromCache) return !0;
      const r = n !== "Offline";
      return (!this.options.Z_ || !r) && (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
  }
  H_(e) {
      if (e.docChanges.length > 0) return !0;
      const n = this.j_ && this.j_.hasPendingWrites !== e.hasPendingWrites;
      return !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
  }
  Y_(e) {
      e = Zn.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.z_ = !0, this.G_.next(e)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class xp {
  constructor(e) {
      this.key = e
  }
}
class Lp {
  constructor(e) {
      this.key = e
  }
}
class Lb {
  constructor(e, n) {
      this.query = e, this.oa = n, this._a = null, this.hasCachedResults = !1, this.current = !1, this.aa = B(), this.mutatedKeys = B(), this.ua = Xf(e), this.ca = new zn(this.ua)
  }
  get la() {
      return this.oa
  }
  ha(e, n) {
      const r = n ? n.Pa : new mh,
          i = n ? n.ca : this.ca;
      let s = n ? n.mutatedKeys : this.mutatedKeys,
          o = i,
          l = !1;
      const u = this.query.limitType === "F" && i.size === this.query.limit ? i.last() : null,
          f = this.query.limitType === "L" && i.size === this.query.limit ? i.first() : null;
      if (e.inorderTraversal((p, g) => {
              const w = i.get(p),
                  v = Ws(this.query, g) ? g : null,
                  R = !!w && this.mutatedKeys.has(w.key),
                  O = !!v && (v.hasLocalMutations || this.mutatedKeys.has(v.key) && v.hasCommittedMutations);
              let C = !1;
              w && v ? w.data.isEqual(v.data) ? R !== O && (r.track({
                  type: 3,
                  doc: v
              }), C = !0) : this.Ia(w, v) || (r.track({
                  type: 2,
                  doc: v
              }), C = !0, (u && this.ua(v, u) > 0 || f && this.ua(v, f) < 0) && (l = !0)) : !w && v ? (r.track({
                  type: 0,
                  doc: v
              }), C = !0) : w && !v && (r.track({
                  type: 1,
                  doc: w
              }), C = !0, (u || f) && (l = !0)), C && (v ? (o = o.add(v), s = O ? s.add(p) : s.delete(p)) : (o = o.delete(p), s = s.delete(p)))
          }), this.query.limit !== null)
          for (; o.size > this.query.limit;) {
              const p = this.query.limitType === "F" ? o.last() : o.first();
              o = o.delete(p.key), s = s.delete(p.key), r.track({
                  type: 1,
                  doc: p
              })
          }
      return {
          ca: o,
          Pa: r,
          Xi: l,
          mutatedKeys: s
      }
  }
  Ia(e, n) {
      return e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
  }
  applyChanges(e, n, r, i) {
      const s = this.ca;
      this.ca = e.ca, this.mutatedKeys = e.mutatedKeys;
      const o = e.Pa.k_();
      o.sort((p, g) => function(v, R) {
          const O = C => {
              switch (C) {
                  case 0:
                      return 1;
                  case 2:
                  case 3:
                      return 2;
                  case 1:
                      return 0;
                  default:
                      return V()
              }
          };
          return O(v) - O(R)
      }(p.type, g.type) || this.ua(p.doc, g.doc)), this.Ta(r), i = i != null && i;
      const l = n && !i ? this.Ea() : [],
          u = this.aa.size === 0 && this.current && !i ? 1 : 0,
          f = u !== this._a;
      return this._a = u, o.length !== 0 || f ? {
          snapshot: new Zn(this.query, e.ca, s, o, e.mutatedKeys, u === 0, f, !1, !!r && r.resumeToken.approximateByteSize() > 0),
          da: l
      } : {
          da: l
      }
  }
  U_(e) {
      return this.current && e === "Offline" ? (this.current = !1, this.applyChanges({
          ca: this.ca,
          Pa: new mh,
          mutatedKeys: this.mutatedKeys,
          Xi: !1
      }, !1)) : {
          da: []
      }
  }
  Aa(e) {
      return !this.oa.has(e) && !!this.ca.has(e) && !this.ca.get(e).hasLocalMutations
  }
  Ta(e) {
      e && (e.addedDocuments.forEach(n => this.oa = this.oa.add(n)), e.modifiedDocuments.forEach(n => {}), e.removedDocuments.forEach(n => this.oa = this.oa.delete(n)), this.current = e.current)
  }
  Ea() {
      if (!this.current) return [];
      const e = this.aa;
      this.aa = B(), this.ca.forEach(r => {
          this.Aa(r.key) && (this.aa = this.aa.add(r.key))
      });
      const n = [];
      return e.forEach(r => {
          this.aa.has(r) || n.push(new Lp(r))
      }), this.aa.forEach(r => {
          e.has(r) || n.push(new xp(r))
      }), n
  }
  Ra(e) {
      this.oa = e.hs, this.aa = B();
      const n = this.ha(e.documents);
      return this.applyChanges(n, !0)
  }
  Va() {
      return Zn.fromInitialDocuments(this.query, this.ca, this.mutatedKeys, this._a === 0, this.hasCachedResults)
  }
}
class Mb {
  constructor(e, n, r) {
      this.query = e, this.targetId = n, this.view = r
  }
}
class Fb {
  constructor(e) {
      this.key = e, this.ma = !1
  }
}
class Ub {
  constructor(e, n, r, i, s, o) {
      this.localStore = e, this.remoteStore = n, this.eventManager = r, this.sharedClientState = i, this.currentUser = s, this.maxConcurrentLimboResolutions = o, this.fa = {}, this.ga = new ar(l => Yf(l), Hs), this.pa = new Map, this.ya = new Set, this.wa = new te(k.comparator), this.Sa = new Map, this.ba = new Ac, this.Da = {}, this.Ca = new Map, this.va = Xn.Bn(), this.onlineState = "Unknown", this.Fa = void 0
  }
  get isPrimaryClient() {
      return this.Fa === !0
  }
}
async function Bb(t, e) {
  const n = Jb(t);
  let r, i;
  const s = n.ga.get(e);
  if (s) r = s.targetId, n.sharedClientState.addLocalQueryTarget(r), i = s.view.Va();
  else {
      const o = await lb(n.localStore, dt(e)),
          l = n.sharedClientState.addLocalQueryTarget(o.targetId);
      r = o.targetId, i = await jb(n, e, r, l === "current", o.resumeToken), n.isPrimaryClient && Ap(n.remoteStore, o)
  }
  return i
}
async function jb(t, e, n, r, i) {
  t.Ma = (g, w, v) => async function(O, C, z, G) {
      let J = C.view.ha(z);
      J.Xi && (J = await hh(O.localStore, C.query, !1).then(({
          documents: yt
      }) => C.view.ha(yt, J)));
      const de = G && G.targetChanges.get(C.targetId),
          wt = G && G.targetMismatches.get(C.targetId) != null,
          ze = C.view.applyChanges(J, O.isPrimaryClient, de, wt);
      return wh(O, C.targetId, ze.da), ze.snapshot
  }(t, g, w, v);
  const s = await hh(t.localStore, e, !0),
      o = new Lb(e, s.hs),
      l = o.ha(s.documents),
      u = yi.createSynthesizedTargetChangeForCurrentChange(n, r && t.onlineState !== "Offline", i),
      f = o.applyChanges(l, t.isPrimaryClient, u);
  wh(t, n, f.da);
  const p = new Mb(e, n, o);
  return t.ga.set(e, p), t.pa.has(n) ? t.pa.get(n).push(e) : t.pa.set(n, [e]), f.snapshot
}
async function qb(t, e) {
  const n = L(t),
      r = n.ga.get(e),
      i = n.pa.get(r.targetId);
  if (i.length > 1) return n.pa.set(r.targetId, i.filter(s => !Hs(s, e))), void n.ga.delete(e);
  n.isPrimaryClient ? (n.sharedClientState.removeLocalQueryTarget(r.targetId), n.sharedClientState.isActiveQueryTarget(r.targetId) || await Sa(n.localStore, r.targetId, !1).then(() => {
      n.sharedClientState.clearQueryState(r.targetId), Sp(n.remoteStore, r.targetId), Pa(n, r.targetId)
  }).catch(pi)) : (Pa(n, r.targetId), await Sa(n.localStore, r.targetId, !0))
}
async function $b(t, e, n) {
  const r = Yb(t);
  try {
      const i = await
      function(o, l) {
          const u = L(o),
              f = fe.now(),
              p = l.reduce((v, R) => v.add(R.key), B());
          let g, w;
          return u.persistence.runTransaction("Locally write mutations", "readwrite", v => {
              let R = Ct(),
                  O = B();
              return u.os.getEntries(v, p).next(C => {
                  R = C, R.forEach((z, G) => {
                      G.isValidDocument() || (O = O.add(z))
                  })
              }).next(() => u.localDocuments.getOverlayedDocuments(v, R)).next(C => {
                  g = C;
                  const z = [];
                  for (const G of l) {
                      const J = p0(G, g.get(G.key).overlayedDocument);
                      J != null && z.push(new Gt(G.key, J, qf(J.value.mapValue), Ye.exists(!0)))
                  }
                  return u.mutationQueue.addMutationBatch(v, f, z, l)
              }).next(C => {
                  w = C;
                  const z = C.applyToLocalDocumentSet(g, O);
                  return u.documentOverlayCache.saveOverlays(v, C.batchId, z)
              })
          }).then(() => ({
              batchId: w.batchId,
              changes: ep(g)
          }))
      }(r.localStore, e);
      r.sharedClientState.addPendingMutation(i.batchId),
          function(o, l, u) {
              let f = o.Da[o.currentUser.toKey()];
              f || (f = new te(H)), f = f.insert(l, u), o.Da[o.currentUser.toKey()] = f
          }(r, i.batchId, n), await vi(r, i.changes), await Xs(r.remoteStore)
  } catch (i) {
      const s = Vc(i, "Failed to persist write");
      n.reject(s)
  }
}
async function Mp(t, e) {
  const n = L(t);
  try {
      const r = await ob(n.localStore, e);
      e.targetChanges.forEach((i, s) => {
          const o = n.Sa.get(s);
          o && (Q(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1), i.addedDocuments.size > 0 ? o.ma = !0 : i.modifiedDocuments.size > 0 ? Q(o.ma) : i.removedDocuments.size > 0 && (Q(o.ma), o.ma = !1))
      }), await vi(n, r, e)
  } catch (r) {
      await pi(r)
  }
}

function gh(t, e, n) {
  const r = L(t);
  if (r.isPrimaryClient && n === 0 || !r.isPrimaryClient && n === 1) {
      const i = [];
      r.ga.forEach((s, o) => {
              const l = o.view.U_(e);
              l.snapshot && i.push(l.snapshot)
          }),
          function(o, l) {
              const u = L(o);
              u.onlineState = l;
              let f = !1;
              u.queries.forEach((p, g) => {
                  for (const w of g.Q_) w.U_(l) && (f = !0)
              }), f && Oc(u)
          }(r.eventManager, e), i.length && r.fa.u_(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e)
  }
}
async function zb(t, e, n) {
  const r = L(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.Sa.get(e),
      s = i && i.key;
  if (s) {
      let o = new te(k.comparator);
      o = o.insert(s, Se.newNoDocument(s, x.min()));
      const l = B().add(s),
          u = new Qs(x.min(), new Map, new te(H), o, l);
      await Mp(r, u), r.wa = r.wa.remove(s), r.Sa.delete(e), Nc(r)
  } else await Sa(r.localStore, e, !1).then(() => Pa(r, e, n)).catch(pi)
}
async function Hb(t, e) {
  const n = L(t),
      r = e.batch.batchId;
  try {
      const i = await sb(n.localStore, e);
      Up(n, r, null), Fp(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), await vi(n, i)
  } catch (i) {
      await pi(i)
  }
}
async function Wb(t, e, n) {
  const r = L(t);
  try {
      const i = await
      function(o, l) {
          const u = L(o);
          return u.persistence.runTransaction("Reject batch", "readwrite-primary", f => {
              let p;
              return u.mutationQueue.lookupMutationBatch(f, l).next(g => (Q(g !== null), p = g.keys(), u.mutationQueue.removeMutationBatch(f, g))).next(() => u.mutationQueue.performConsistencyCheck(f)).next(() => u.documentOverlayCache.removeOverlaysForBatchId(f, p, l)).next(() => u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f, p)).next(() => u.localDocuments.getDocuments(f, p))
          })
      }(r.localStore, e);
      Up(r, e, n), Fp(r, e), r.sharedClientState.updateMutationState(e, "rejected", n), await vi(r, i)
  } catch (i) {
      await pi(i)
  }
}

function Fp(t, e) {
  (t.Ca.get(e) || []).forEach(n => {
      n.resolve()
  }), t.Ca.delete(e)
}

function Up(t, e, n) {
  const r = L(t);
  let i = r.Da[r.currentUser.toKey()];
  if (i) {
      const s = i.get(e);
      s && (n ? s.reject(n) : s.resolve(), i = i.remove(e)), r.Da[r.currentUser.toKey()] = i
  }
}

function Pa(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.pa.get(e)) t.ga.delete(r), n && t.fa.xa(r, n);
  t.pa.delete(e), t.isPrimaryClient && t.ba.Vr(e).forEach(r => {
      t.ba.containsKey(r) || Bp(t, r)
  })
}

function Bp(t, e) {
  t.ya.delete(e.path.canonicalString());
  const n = t.wa.get(e);
  n !== null && (Sp(t.remoteStore, n), t.wa = t.wa.remove(e), t.Sa.delete(n), Nc(t))
}

function wh(t, e, n) {
  for (const r of n) r instanceof xp ? (t.ba.addReference(r.key, e), Kb(t, r)) : r instanceof Lp ? (T("SyncEngine", "Document no longer in limbo: " + r.key), t.ba.removeReference(r.key, e), t.ba.containsKey(r.key) || Bp(t, r.key)) : V()
}

function Kb(t, e) {
  const n = e.key,
      r = n.path.canonicalString();
  t.wa.get(n) || t.ya.has(r) || (T("SyncEngine", "New document in limbo: " + n), t.ya.add(r), Nc(t))
}

function Nc(t) {
  for (; t.ya.size > 0 && t.wa.size < t.maxConcurrentLimboResolutions;) {
      const e = t.ya.values().next().value;
      t.ya.delete(e);
      const n = new k(Z.fromString(e)),
          r = t.va.next();
      t.Sa.set(r, new Fb(n)), t.wa = t.wa.insert(n, r), Ap(t.remoteStore, new Ut(dt(vc(n.path)), r, "TargetPurposeLimboResolution", pc._e))
  }
}
async function vi(t, e, n) {
  const r = L(t),
      i = [],
      s = [],
      o = [];
  r.ga.isEmpty() || (r.ga.forEach((l, u) => {
      o.push(r.Ma(u, e, n).then(f => {
          if ((f || n) && r.isPrimaryClient && r.sharedClientState.updateQueryState(u.targetId, f?.fromCache ? "not-current" : "current"), f) {
              i.push(f);
              const p = Pc.Ki(u.targetId, f);
              s.push(p)
          }
      }))
  }), await Promise.all(o), r.fa.u_(i), await async function(u, f) {
      const p = L(u);
      try {
          await p.persistence.runTransaction("notifyLocalViewChanges", "readwrite", g => I.forEach(f, w => I.forEach(w.qi, v => p.persistence.referenceDelegate.addReference(g, w.targetId, v)).next(() => I.forEach(w.Qi, v => p.persistence.referenceDelegate.removeReference(g, w.targetId, v)))))
      } catch (g) {
          if (!mi(g)) throw g;
          T("LocalStore", "Failed to update sequence numbers: " + g)
      }
      for (const g of f) {
          const w = g.targetId;
          if (!g.fromCache) {
              const v = p.ns.get(w),
                  R = v.snapshotVersion,
                  O = v.withLastLimboFreeSnapshotVersion(R);
              p.ns = p.ns.insert(w, O)
          }
      }
  }(r.localStore, s))
}
async function Gb(t, e) {
  const n = L(t);
  if (!n.currentUser.isEqual(e)) {
      T("SyncEngine", "User change. New user:", e.toKey());
      const r = await Ep(n.localStore, e);
      n.currentUser = e,
          function(s, o) {
              s.Ca.forEach(l => {
                  l.forEach(u => {
                      u.reject(new P(E.CANCELLED, o))
                  })
              }), s.Ca.clear()
          }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds), await vi(n, r.us)
  }
}

function Qb(t, e) {
  const n = L(t),
      r = n.Sa.get(e);
  if (r && r.ma) return B().add(r.key);
  {
      let i = B();
      const s = n.pa.get(e);
      if (!s) return i;
      for (const o of s) {
          const l = n.ga.get(o);
          i = i.unionWith(l.view.la)
      }
      return i
  }
}

function Jb(t) {
  const e = L(t);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = Mp.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Qb.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = zb.bind(null, e), e.fa.u_ = Nb.bind(null, e.eventManager), e.fa.xa = xb.bind(null, e.eventManager), e
}

function Yb(t) {
  const e = L(t);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = Hb.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = Wb.bind(null, e), e
}
class yh {
  constructor() {
      this.synchronizeTabs = !1
  }
  async initialize(e) {
      this.serializer = Js(e.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(e), this.persistence = this.createPersistence(e), await this.persistence.start(), this.localStore = this.createLocalStore(e), this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore)
  }
  createGarbageCollectionScheduler(e, n) {
      return null
  }
  createIndexBackfillerScheduler(e, n) {
      return null
  }
  createLocalStore(e) {
      return ib(this.persistence, new nb, e.initialUser, this.serializer)
  }
  createPersistence(e) {
      return new Z0(Sc.Hr, this.serializer)
  }
  createSharedClientState(e) {
      return new hb
  }
  async terminate() {
      var e, n;
      (e = this.gcScheduler) === null || e === void 0 || e.stop(), (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown()
  }
}
class Xb {
  async initialize(e, n) {
      this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(n), this.remoteStore = this.createRemoteStore(n), this.eventManager = this.createEventManager(n), this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = r => gh(this.syncEngine, r, 1), this.remoteStore.remoteSyncer.handleCredentialChange = Gb.bind(null, this.syncEngine), await Db(this.remoteStore, this.syncEngine.isPrimaryClient))
  }
  createEventManager(e) {
      return function() {
          return new Ob
      }()
  }
  createDatastore(e) {
      const n = Js(e.databaseInfo.databaseId),
          r = function(s) {
              return new mb(s)
          }(e.databaseInfo);
      return function(s, o, l, u) {
          return new yb(s, o, l, u)
      }(e.authCredentials, e.appCheckCredentials, r, n)
  }
  createRemoteStore(e) {
      return function(r, i, s, o, l) {
          return new Eb(r, i, s, o, l)
      }(this.localStore, this.datastore, e.asyncQueue, n => gh(this.syncEngine, n, 0), function() {
          return fh.D() ? new fh : new db
      }())
  }
  createSyncEngine(e, n) {
      return function(i, s, o, l, u, f, p) {
          const g = new Ub(i, s, o, l, u, f);
          return p && (g.Fa = !0), g
      }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, n)
  }
  async terminate() {
      var e;
      await async function(r) {
          const i = L(r);
          T("RemoteStore", "RemoteStore shutting down."), i.v_.add(5), await _i(i), i.M_.shutdown(), i.x_.set("Unknown")
      }(this.remoteStore), (e = this.datastore) === null || e === void 0 || e.terminate()
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class jp {
  constructor(e) {
      this.observer = e, this.muted = !1
  }
  next(e) {
      this.observer.next && this.Ba(this.observer.next, e)
  }
  error(e) {
      this.observer.error ? this.Ba(this.observer.error, e) : mt("Uncaught Error in snapshot listener:", e.toString())
  }
  La() {
      this.muted = !0
  }
  Ba(e, n) {
      this.muted || setTimeout(() => {
          this.muted || e(n)
      }, 0)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Zb {
  constructor(e, n, r, i) {
      this.authCredentials = e, this.appCheckCredentials = n, this.asyncQueue = r, this.databaseInfo = i, this.user = Ae.UNAUTHENTICATED, this.clientId = Uf.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(r, async s => {
          T("FirestoreClient", "Received user=", s.uid), await this.authCredentialListener(s), this.user = s
      }), this.appCheckCredentials.start(r, s => (T("FirestoreClient", "Received new app check token=", s), this.appCheckCredentialListener(s, this.user)))
  }
  get configuration() {
      return {
          asyncQueue: this.asyncQueue,
          databaseInfo: this.databaseInfo,
          clientId: this.clientId,
          authCredentials: this.authCredentials,
          appCheckCredentials: this.appCheckCredentials,
          initialUser: this.user,
          maxConcurrentLimboResolutions: 100
      }
  }
  setCredentialChangeListener(e) {
      this.authCredentialListener = e
  }
  setAppCheckTokenChangeListener(e) {
      this.appCheckCredentialListener = e
  }
  verifyNotTerminated() {
      if (this.asyncQueue.isShuttingDown) throw new P(E.FAILED_PRECONDITION, "The client has already been terminated.")
  }
  terminate() {
      this.asyncQueue.enterRestrictedMode();
      const e = new Je;
      return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
          try {
              this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve()
          } catch (n) {
              const r = Vc(n, "Failed to shutdown persistence");
              e.reject(r)
          }
      }), e.promise
  }
}
async function Wo(t, e) {
  t.asyncQueue.verifyOperationInProgress(), T("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = t.configuration;
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async i => {
      r.isEqual(i) || (await Ep(e.localStore, i), r = i)
  }), e.persistence.setDatabaseDeletedListener(() => t.terminate()), t._offlineComponents = e
}
async function _h(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await tA(t);
  T("FirestoreClient", "Initializing OnlineComponentProvider"), await e.initialize(n, t.configuration), t.setCredentialChangeListener(r => ph(e.remoteStore, r)), t.setAppCheckTokenChangeListener((r, i) => ph(e.remoteStore, i)), t._onlineComponents = e
}

function eA(t) {
  return t.name === "FirebaseError" ? t.code === E.FAILED_PRECONDITION || t.code === E.UNIMPLEMENTED : !(typeof DOMException < "u" && t instanceof DOMException) || t.code === 22 || t.code === 20 || t.code === 11
}
async function tA(t) {
  if (!t._offlineComponents)
      if (t._uninitializedComponentsProvider) {
          T("FirestoreClient", "Using user provided OfflineComponentProvider");
          try {
              await Wo(t, t._uninitializedComponentsProvider._offline)
          } catch (e) {
              const n = e;
              if (!eA(n)) throw n;
              Kn("Error using user provided cache. Falling back to memory cache: " + n), await Wo(t, new yh)
          }
      } else T("FirestoreClient", "Using default OfflineComponentProvider"), await Wo(t, new yh);
  return t._offlineComponents
}
async function xc(t) {
  return t._onlineComponents || (t._uninitializedComponentsProvider ? (T("FirestoreClient", "Using user provided OnlineComponentProvider"), await _h(t, t._uninitializedComponentsProvider._online)) : (T("FirestoreClient", "Using default OnlineComponentProvider"), await _h(t, new Xb))), t._onlineComponents
}

function nA(t) {
  return xc(t).then(e => e.syncEngine)
}

function rA(t) {
  return xc(t).then(e => e.datastore)
}
async function qp(t) {
  const e = await xc(t),
      n = e.eventManager;
  return n.onListen = Bb.bind(null, e.syncEngine), n.onUnlisten = qb.bind(null, e.syncEngine), n
}

function iA(t, e, n = {}) {
  const r = new Je;
  return t.asyncQueue.enqueueAndForget(async () => function(s, o, l, u, f) {
      const p = new jp({
              next: w => {
                  o.enqueueAndForget(() => Op(s, g));
                  const v = w.docs.has(l);
                  !v && w.fromCache ? f.reject(new P(E.UNAVAILABLE, "Failed to get document because the client is offline.")) : v && w.fromCache && u && u.source === "server" ? f.reject(new P(E.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : f.resolve(w)
              },
              error: w => f.reject(w)
          }),
          g = new Np(vc(l.path), p, {
              includeMetadataChanges: !0,
              Z_: !0
          });
      return Vp(s, g)
  }(await qp(t), t.asyncQueue, e, n, r)), r.promise
}

function sA(t, e, n = {}) {
  const r = new Je;
  return t.asyncQueue.enqueueAndForget(async () => function(s, o, l, u, f) {
      const p = new jp({
              next: w => {
                  o.enqueueAndForget(() => Op(s, g)), w.fromCache && u.source === "server" ? f.reject(new P(E.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : f.resolve(w)
              },
              error: w => f.reject(w)
          }),
          g = new Np(l, p, {
              includeMetadataChanges: !0,
              Z_: !0
          });
      return Vp(s, g)
  }(await qp(t), t.asyncQueue, e, n, r)), r.promise
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function $p(t) {
  const e = {};
  return t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const vh = new Map;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function zp(t, e, n) {
  if (!n) throw new P(E.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`)
}

function oA(t, e, n, r) {
  if (e === !0 && r === !0) throw new P(E.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`)
}

function Eh(t) {
  if (!k.isDocumentKey(t)) throw new P(E.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)
}

function Ih(t) {
  if (k.isDocumentKey(t)) throw new P(E.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)
}

function Zs(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string") return t.length > 20 && (t = `${t.substring(0,20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
      if (t instanceof Array) return "an array";
      {
          const e = function(r) {
              return r.constructor ? r.constructor.name : null
          }(t);
          return e ? `a custom ${e} object` : "an object"
      }
  }
  return typeof t == "function" ? "a function" : V()
}

function nt(t, e) {
  if ("_delegate" in t && (t = t._delegate), !(t instanceof e)) {
      if (e.name === t.constructor.name) throw new P(E.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
      {
          const n = Zs(t);
          throw new P(E.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`)
      }
  }
  return t
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Th {
  constructor(e) {
      var n, r;
      if (e.host === void 0) {
          if (e.ssl !== void 0) throw new P(E.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
          this.host = "firestore.googleapis.com", this.ssl = !0
      } else this.host = e.host, this.ssl = (n = e.ssl) === null || n === void 0 || n;
      if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, e.cacheSizeBytes === void 0) this.cacheSizeBytes = 41943040;
      else {
          if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576) throw new P(E.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
          this.cacheSizeBytes = e.cacheSizeBytes
      }
      oA("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : e.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = $p((r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}),
          function(s) {
              if (s.timeoutSeconds !== void 0) {
                  if (isNaN(s.timeoutSeconds)) throw new P(E.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);
                  if (s.timeoutSeconds < 5) throw new P(E.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);
                  if (s.timeoutSeconds > 30) throw new P(E.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)
              }
          }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams
  }
  isEqual(e) {
      return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function(r, i) {
          return r.timeoutSeconds === i.timeoutSeconds
      }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
  }
}
class eo {
  constructor(e, n, r, i) {
      this._authCredentials = e, this._appCheckCredentials = n, this._databaseId = r, this._app = i, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Th({}), this._settingsFrozen = !1
  }
  get app() {
      if (!this._app) throw new P(E.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this._app
  }
  get _initialized() {
      return this._settingsFrozen
  }
  get _terminated() {
      return this._terminateTask !== void 0
  }
  _setSettings(e) {
      if (this._settingsFrozen) throw new P(E.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
      this._settings = new Th(e), e.credentials !== void 0 && (this._authCredentials = function(r) {
          if (!r) return new TT;
          switch (r.type) {
              case "firstParty":
                  return new PT(r.sessionIndex || "0", r.iamToken || null, r.authTokenFactory || null);
              case "provider":
                  return r.client;
              default:
                  throw new P(E.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
          }
      }(e.credentials))
  }
  _getSettings() {
      return this._settings
  }
  _freezeSettings() {
      return this._settingsFrozen = !0, this._settings
  }
  _delete() {
      return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
  }
  toJSON() {
      return {
          app: this._app,
          databaseId: this._databaseId,
          settings: this._settings
      }
  }
  _terminate() {
      return function(n) {
          const r = vh.get(n);
          r && (T("ComponentProvider", "Removing Datastore"), vh.delete(n), r.terminate())
      }(this), Promise.resolve()
  }
}

function aA(t, e, n, r = {}) {
  var i;
  const s = (t = nt(t, eo))._getSettings(),
      o = `${e}:${n}`;
  if (s.host !== "firestore.googleapis.com" && s.host !== o && Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), t._setSettings(Object.assign(Object.assign({}, s), {
          host: o,
          ssl: !1
      })), r.mockUserToken) {
      let l, u;
      if (typeof r.mockUserToken == "string") l = r.mockUserToken, u = Ae.MOCK_USER;
      else {
          l = Ay(r.mockUserToken, (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId);
          const f = r.mockUserToken.sub || r.mockUserToken.user_id;
          if (!f) throw new P(E.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
          u = new Ae(f)
      }
      t._authCredentials = new bT(new Ff(l, u))
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class lr {
  constructor(e, n, r) {
      this.converter = n, this._query = r, this.type = "query", this.firestore = e
  }
  withConverter(e) {
      return new lr(this.firestore, e, this._query)
  }
}
class Oe {
  constructor(e, n, r) {
      this.converter = n, this._key = r, this.type = "document", this.firestore = e
  }
  get _path() {
      return this._key.path
  }
  get id() {
      return this._key.path.lastSegment()
  }
  get path() {
      return this._key.path.canonicalString()
  }
  get parent() {
      return new qt(this.firestore, this.converter, this._key.path.popLast())
  }
  withConverter(e) {
      return new Oe(this.firestore, e, this._key)
  }
}
class qt extends lr {
  constructor(e, n, r) {
      super(e, n, vc(r)), this._path = r, this.type = "collection"
  }
  get id() {
      return this._query.path.lastSegment()
  }
  get path() {
      return this._query.path.canonicalString()
  }
  get parent() {
      const e = this._path.popLast();
      return e.isEmpty() ? null : new Oe(this.firestore, null, new k(e))
  }
  withConverter(e) {
      return new qt(this.firestore, e, this._path)
  }
}

function Hp(t, e, ...n) {
  if (t = he(t), zp("collection", "path", e), t instanceof eo) {
      const r = Z.fromString(e, ...n);
      return Ih(r), new qt(t, null, r)
  } {
      if (!(t instanceof Oe || t instanceof qt)) throw new P(E.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const r = t._path.child(Z.fromString(e, ...n));
      return Ih(r), new qt(t.firestore, null, r)
  }
}

function ie(t, e, ...n) {
  if (t = he(t), arguments.length === 1 && (e = Uf.newId()), zp("doc", "path", e), t instanceof eo) {
      const r = Z.fromString(e, ...n);
      return Eh(r), new Oe(t, null, new k(r))
  } {
      if (!(t instanceof Oe || t instanceof qt)) throw new P(E.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const r = t._path.child(Z.fromString(e, ...n));
      return Eh(r), new Oe(t.firestore, t instanceof qt ? t.converter : null, new k(r))
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class cA {
  constructor() {
      this.Xa = Promise.resolve(), this.eu = [], this.tu = !1, this.nu = [], this.ru = null, this.iu = !1, this.su = !1, this.ou = [], this.jo = new Tp(this, "async_queue_retry"), this._u = () => {
          const n = Ho();
          n && T("AsyncQueue", "Visibility state changed to " + n.visibilityState), this.jo.Ko()
      };
      const e = Ho();
      e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this._u)
  }
  get isShuttingDown() {
      return this.tu
  }
  enqueueAndForget(e) {
      this.enqueue(e)
  }
  enqueueAndForgetEvenWhileRestricted(e) {
      this.au(), this.uu(e)
  }
  enterRestrictedMode(e) {
      if (!this.tu) {
          this.tu = !0, this.su = e || !1;
          const n = Ho();
          n && typeof n.removeEventListener == "function" && n.removeEventListener("visibilitychange", this._u)
      }
  }
  enqueue(e) {
      if (this.au(), this.tu) return new Promise(() => {});
      const n = new Je;
      return this.uu(() => this.tu && this.su ? Promise.resolve() : (e().then(n.resolve, n.reject), n.promise)).then(() => n.promise)
  }
  enqueueRetryable(e) {
      this.enqueueAndForget(() => (this.eu.push(e), this.cu()))
  }
  async cu() {
      if (this.eu.length !== 0) {
          try {
              await this.eu[0](), this.eu.shift(), this.jo.reset()
          } catch (e) {
              if (!mi(e)) throw e;
              T("AsyncQueue", "Operation failed with retryable error: " + e)
          }
          this.eu.length > 0 && this.jo.qo(() => this.cu())
      }
  }
  uu(e) {
      const n = this.Xa.then(() => (this.iu = !0, e().catch(r => {
          this.ru = r, this.iu = !1;
          const i = function(o) {
              let l = o.message || "";
              return o.stack && (l = o.stack.includes(o.message) ? o.stack : o.message + `
` + o.stack), l
          }(r);
          throw mt("INTERNAL UNHANDLED ERROR: ", i), r
      }).then(r => (this.iu = !1, r))));
      return this.Xa = n, n
  }
  enqueueAfterDelay(e, n, r) {
      this.au(), this.ou.indexOf(e) > -1 && (n = 0);
      const i = Dc.createAndSchedule(this, e, n, r, s => this.lu(s));
      return this.nu.push(i), i
  }
  au() {
      this.ru && V()
  }
  verifyOperationInProgress() {}
  async hu() {
      let e;
      do e = this.Xa, await e; while (e !== this.Xa)
  }
  Pu(e) {
      for (const n of this.nu)
          if (n.timerId === e) return !0;
      return !1
  }
  Iu(e) {
      return this.hu().then(() => {
          this.nu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
          for (const n of this.nu)
              if (n.skipDelay(), e !== "all" && n.timerId === e) break;
          return this.hu()
      })
  }
  Tu(e) {
      this.ou.push(e)
  }
  lu(e) {
      const n = this.nu.indexOf(e);
      this.nu.splice(n, 1)
  }
}
class Sn extends eo {
  constructor(e, n, r, i) {
      super(e, n, r, i), this.type = "firestore", this._queue = function() {
          return new cA
      }(), this._persistenceKey = i?.name || "[DEFAULT]"
  }
  _terminate() {
      return this._firestoreClient || Wp(this), this._firestoreClient.terminate()
  }
}

function lA(t, e) {
  const n = typeof t == "object" ? t : Va(),
      r = typeof t == "string" ? t : e || "(default)",
      i = In(n, "firestore").getImmediate({
          identifier: r
      });
  if (!i._initialized) {
      const s = Ty("firestore");
      s && aA(i, ...s)
  }
  return i
}

function to(t) {
  return t._firestoreClient || Wp(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient
}

function Wp(t) {
  var e, n, r;
  const i = t._freezeSettings(),
      s = function(l, u, f, p) {
          return new jT(l, u, f, p.host, p.ssl, p.experimentalForceLongPolling, p.experimentalAutoDetectLongPolling, $p(p.experimentalLongPollingOptions), p.useFetchStreams)
      }(t._databaseId, ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "", t._persistenceKey, i);
  t._firestoreClient = new Zb(t._authCredentials, t._appCheckCredentials, t._queue, s), !((n = i.localCache) === null || n === void 0) && n._offlineComponentProvider && (!((r = i.localCache) === null || r === void 0) && r._onlineComponentProvider) && (t._firestoreClient._uninitializedComponentsProvider = {
      _offlineKind: i.localCache.kind,
      _offline: i.localCache._offlineComponentProvider,
      _online: i.localCache._onlineComponentProvider
  })
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class uA {
  constructor(e = "count", n) {
      this._internalFieldPath = n, this.type = "AggregateField", this.aggregateType = e
  }
}
class hA {
  constructor(e, n, r) {
      this._userDataWriter = n, this._data = r, this.type = "AggregateQuerySnapshot", this.query = e
  }
  data() {
      return this._userDataWriter.convertObjectMap(this._data)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class er {
  constructor(e) {
      this._byteString = e
  }
  static fromBase64String(e) {
      try {
          return new er(Re.fromBase64String(e))
      } catch (n) {
          throw new P(E.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + n)
      }
  }
  static fromUint8Array(e) {
      return new er(Re.fromUint8Array(e))
  }
  toBase64() {
      return this._byteString.toBase64()
  }
  toUint8Array() {
      return this._byteString.toUint8Array()
  }
  toString() {
      return "Bytes(base64: " + this.toBase64() + ")"
  }
  isEqual(e) {
      return this._byteString.isEqual(e._byteString)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class no {
  constructor(...e) {
      for (let n = 0; n < e.length; ++n)
          if (e[n].length === 0) throw new P(E.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
      this._internalPath = new ve(e)
  }
  isEqual(e) {
      return this._internalPath.isEqual(e._internalPath)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ro {
  constructor(e) {
      this._methodName = e
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Lc {
  constructor(e, n) {
      if (!isFinite(e) || e < -90 || e > 90) throw new P(E.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
      if (!isFinite(n) || n < -180 || n > 180) throw new P(E.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
      this._lat = e, this._long = n
  }
  get latitude() {
      return this._lat
  }
  get longitude() {
      return this._long
  }
  isEqual(e) {
      return this._lat === e._lat && this._long === e._long
  }
  toJSON() {
      return {
          latitude: this._lat,
          longitude: this._long
      }
  }
  _compareTo(e) {
      return H(this._lat, e._lat) || H(this._long, e._long)
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const dA = /^__.*__$/;
class fA {
  constructor(e, n, r) {
      this.data = e, this.fieldMask = n, this.fieldTransforms = r
  }
  toMutation(e, n) {
      return this.fieldMask !== null ? new Gt(e, this.data, this.fieldMask, n, this.fieldTransforms) : new wi(e, this.data, n, this.fieldTransforms)
  }
}
class Kp {
  constructor(e, n, r) {
      this.data = e, this.fieldMask = n, this.fieldTransforms = r
  }
  toMutation(e, n) {
      return new Gt(e, this.data, this.fieldMask, n, this.fieldTransforms)
  }
}

function Gp(t) {
  switch (t) {
      case 0:
      case 2:
      case 1:
          return !0;
      case 3:
      case 4:
          return !1;
      default:
          throw V()
  }
}
class io {
  constructor(e, n, r, i, s, o) {
      this.settings = e, this.databaseId = n, this.serializer = r, this.ignoreUndefinedProperties = i, s === void 0 && this.Eu(), this.fieldTransforms = s || [], this.fieldMask = o || []
  }
  get path() {
      return this.settings.path
  }
  get du() {
      return this.settings.du
  }
  Au(e) {
      return new io(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
  }
  Ru(e) {
      var n;
      const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
          i = this.Au({
              path: r,
              Vu: !1
          });
      return i.mu(e), i
  }
  fu(e) {
      var n;
      const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
          i = this.Au({
              path: r,
              Vu: !1
          });
      return i.Eu(), i
  }
  gu(e) {
      return this.Au({
          path: void 0,
          Vu: !0
      })
  }
  pu(e) {
      return ys(e, this.settings.methodName, this.settings.yu || !1, this.path, this.settings.wu)
  }
  contains(e) {
      return this.fieldMask.find(n => e.isPrefixOf(n)) !== void 0 || this.fieldTransforms.find(n => e.isPrefixOf(n.field)) !== void 0
  }
  Eu() {
      if (this.path)
          for (let e = 0; e < this.path.length; e++) this.mu(this.path.get(e))
  }
  mu(e) {
      if (e.length === 0) throw this.pu("Document fields must not be empty");
      if (Gp(this.du) && dA.test(e)) throw this.pu('Document fields cannot begin and end with "__"')
  }
}
class pA {
  constructor(e, n, r) {
      this.databaseId = e, this.ignoreUndefinedProperties = n, this.serializer = r || Js(e)
  }
  Su(e, n, r, i = !1) {
      return new io({
          du: e,
          methodName: n,
          wu: r,
          path: ve.emptyPath(),
          Vu: !1,
          yu: i
      }, this.databaseId, this.serializer, this.ignoreUndefinedProperties)
  }
}

function Mc(t) {
  const e = t._freezeSettings(),
      n = Js(t._databaseId);
  return new pA(t._databaseId, !!e.ignoreUndefinedProperties, n)
}

function mA(t, e, n, r, i, s = {}) {
  const o = t.Su(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  Uc("Data must be an object, but it was:", o, r);
  const l = Qp(r, o);
  let u, f;
  if (s.merge) u = new Be(o.fieldMask), f = o.fieldTransforms;
  else if (s.mergeFields) {
      const p = [];
      for (const g of s.mergeFields) {
          const w = Ca(e, g, n);
          if (!o.contains(w)) throw new P(E.INVALID_ARGUMENT, `Field '${w}' is specified in your field mask but missing from your input data.`);
          Yp(p, w) || p.push(w)
      }
      u = new Be(p), f = o.fieldTransforms.filter(g => u.covers(g.field))
  } else u = null, f = o.fieldTransforms;
  return new fA(new xe(l), u, f)
}
class so extends ro {
  _toFieldTransform(e) {
      if (e.du !== 2) throw e.du === 1 ? e.pu(`${this._methodName}() can only appear at the top level of your update data`) : e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
      return e.fieldMask.push(e.path), null
  }
  isEqual(e) {
      return e instanceof so
  }
}

function gA(t, e, n) {
  return new io({
      du: 3,
      wu: e.settings.wu,
      methodName: t._methodName,
      Vu: n
  }, e.databaseId, e.serializer, e.ignoreUndefinedProperties)
}
class Fc extends ro {
  constructor(e, n) {
      super(e), this.bu = n
  }
  _toFieldTransform(e) {
      const n = gA(this, e, !0),
          r = this.bu.map(s => ur(s, n)),
          i = new Yn(r);
      return new u0(e.path, i)
  }
  isEqual(e) {
      return e instanceof Fc && Hn(this.bu, e.bu)
  }
}

function wA(t, e, n, r) {
  const i = t.Su(1, e, n);
  Uc("Data must be an object, but it was:", i, r);
  const s = [],
      o = xe.empty();
  bn(r, (u, f) => {
      const p = Bc(e, u, n);
      f = he(f);
      const g = i.fu(p);
      if (f instanceof so) s.push(p);
      else {
          const w = ur(f, g);
          w != null && (s.push(p), o.set(p, w))
      }
  });
  const l = new Be(s);
  return new Kp(o, l, i.fieldTransforms)
}

function yA(t, e, n, r, i, s) {
  const o = t.Su(1, e, n),
      l = [Ca(e, r, n)],
      u = [i];
  if (s.length % 2 != 0) throw new P(E.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let w = 0; w < s.length; w += 2) l.push(Ca(e, s[w])), u.push(s[w + 1]);
  const f = [],
      p = xe.empty();
  for (let w = l.length - 1; w >= 0; --w)
      if (!Yp(f, l[w])) {
          const v = l[w];
          let R = u[w];
          R = he(R);
          const O = o.fu(v);
          if (R instanceof so) f.push(v);
          else {
              const C = ur(R, O);
              C != null && (f.push(v), p.set(v, C))
          }
      } const g = new Be(f);
  return new Kp(p, g, o.fieldTransforms)
}

function _A(t, e, n, r = !1) {
  return ur(n, t.Su(r ? 4 : 3, e))
}

function ur(t, e) {
  if (Jp(t = he(t))) return Uc("Unsupported field value:", e, t), Qp(t, e);
  if (t instanceof ro) return function(r, i) {
      if (!Gp(i.du)) throw i.pu(`${r._methodName}() can only be used with update() and set()`);
      if (!i.path) throw i.pu(`${r._methodName}() is not currently supported inside arrays`);
      const s = r._toFieldTransform(i);
      s && i.fieldTransforms.push(s)
  }(t, e), null;
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if (e.path && e.fieldMask.push(e.path), t instanceof Array) {
      if (e.settings.Vu && e.du !== 4) throw e.pu("Nested arrays are not supported");
      return function(r, i) {
          const s = [];
          let o = 0;
          for (const l of r) {
              let u = ur(l, i.gu(o));
              u == null && (u = {
                  nullValue: "NULL_VALUE"
              }), s.push(u), o++
          }
          return {
              arrayValue: {
                  values: s
              }
          }
      }(t, e)
  }
  return function(r, i) {
      if ((r = he(r)) === null) return {
          nullValue: "NULL_VALUE"
      };
      if (typeof r == "number") return a0(i.serializer, r);
      if (typeof r == "boolean") return {
          booleanValue: r
      };
      if (typeof r == "string") return {
          stringValue: r
      };
      if (r instanceof Date) {
          const s = fe.fromDate(r);
          return {
              timestampValue: gs(i.serializer, s)
          }
      }
      if (r instanceof fe) {
          const s = new fe(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
          return {
              timestampValue: gs(i.serializer, s)
          }
      }
      if (r instanceof Lc) return {
          geoPointValue: {
              latitude: r.latitude,
              longitude: r.longitude
          }
      };
      if (r instanceof er) return {
          bytesValue: fp(i.serializer, r._byteString)
      };
      if (r instanceof Oe) {
          const s = i.databaseId,
              o = r.firestore._databaseId;
          if (!o.isEqual(s)) throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);
          return {
              referenceValue: bc(r.firestore._databaseId || i.databaseId, r._key.path)
          }
      }
      throw i.pu(`Unsupported field value: ${Zs(r)}`)
  }(t, e)
}

function Qp(t, e) {
  const n = {};
  return Bf(t) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : bn(t, (r, i) => {
      const s = ur(i, e.Ru(r));
      s != null && (n[r] = s)
  }), {
      mapValue: {
          fields: n
      }
  }
}

function Jp(t) {
  return !(typeof t != "object" || t === null || t instanceof Array || t instanceof Date || t instanceof fe || t instanceof Lc || t instanceof er || t instanceof Oe || t instanceof ro)
}

function Uc(t, e, n) {
  if (!Jp(n) || ! function(i) {
          return typeof i == "object" && i !== null && (Object.getPrototypeOf(i) === Object.prototype || Object.getPrototypeOf(i) === null)
      }(n)) {
      const r = Zs(n);
      throw r === "an object" ? e.pu(t + " a custom object") : e.pu(t + " " + r)
  }
}

function Ca(t, e, n) {
  if ((e = he(e)) instanceof no) return e._internalPath;
  if (typeof e == "string") return Bc(t, e);
  throw ys("Field path arguments must be of type string or ", t, !1, void 0, n)
}
const vA = new RegExp("[~\\*/\\[\\]]");

function Bc(t, e, n) {
  if (e.search(vA) >= 0) throw ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, !1, void 0, n);
  try {
      return new no(...e.split("."))._internalPath
  } catch {
      throw ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, !1, void 0, n)
  }
}

function ys(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
      o = i !== void 0;
  let l = `Function ${e}() called with invalid data`;
  n && (l += " (via `toFirestore()`)"), l += ". ";
  let u = "";
  return (s || o) && (u += " (found", s && (u += ` in field ${r}`), o && (u += ` in document ${i}`), u += ")"), new P(E.INVALID_ARGUMENT, l + t + u)
}

function Yp(t, e) {
  return t.some(n => n.isEqual(e))
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Xp {
  constructor(e, n, r, i, s) {
      this._firestore = e, this._userDataWriter = n, this._key = r, this._document = i, this._converter = s
  }
  get id() {
      return this._key.path.lastSegment()
  }
  get ref() {
      return new Oe(this._firestore, this._converter, this._key)
  }
  exists() {
      return this._document !== null
  }
  data() {
      if (this._document) {
          if (this._converter) {
              const e = new EA(this._firestore, this._userDataWriter, this._key, this._document, null);
              return this._converter.fromFirestore(e)
          }
          return this._userDataWriter.convertValue(this._document.data.value)
      }
  }
  get(e) {
      if (this._document) {
          const n = this._document.data.field(jc("DocumentSnapshot.get", e));
          if (n !== null) return this._userDataWriter.convertValue(n)
      }
  }
}
class EA extends Xp {
  data() {
      return super.data()
  }
}

function jc(t, e) {
  return typeof e == "string" ? Bc(t, e) : e instanceof no ? e._internalPath : e._delegate._internalPath
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function IA(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0) throw new P(E.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
}
class qc {}
class TA extends qc {}

function bA(t, e, ...n) {
  let r = [];
  e instanceof qc && r.push(e), r = r.concat(n),
      function(s) {
          const o = s.filter(u => u instanceof $c).length,
              l = s.filter(u => u instanceof oo).length;
          if (o > 1 || o > 0 && l > 0) throw new P(E.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")
      }(r);
  for (const i of r) t = i._apply(t);
  return t
}
class oo extends TA {
  constructor(e, n, r) {
      super(), this._field = e, this._op = n, this._value = r, this.type = "where"
  }
  static _create(e, n, r) {
      return new oo(e, n, r)
  }
  _apply(e) {
      const n = this._parse(e);
      return Zp(e._query, n), new lr(e.firestore, e.converter, va(e._query, n))
  }
  _parse(e) {
      const n = Mc(e.firestore);
      return function(s, o, l, u, f, p, g) {
          let w;
          if (f.isKeyField()) {
              if (p === "array-contains" || p === "array-contains-any") throw new P(E.INVALID_ARGUMENT, `Invalid Query. You can't perform '${p}' queries on documentId().`);
              if (p === "in" || p === "not-in") {
                  Ah(g, p);
                  const v = [];
                  for (const R of g) v.push(bh(u, s, R));
                  w = {
                      arrayValue: {
                          values: v
                      }
                  }
              } else w = bh(u, s, g)
          } else p !== "in" && p !== "not-in" && p !== "array-contains-any" || Ah(g, p), w = _A(l, o, g, p === "in" || p === "not-in");
          return le.create(f, p, w)
      }(e._query, "where", n, e.firestore._databaseId, this._field, this._op, this._value)
  }
}

function AA(t, e, n) {
  const r = e,
      i = jc("where", t);
  return oo._create(i, r, n)
}
class $c extends qc {
  constructor(e, n) {
      super(), this.type = e, this._queryConstraints = n
  }
  static _create(e, n) {
      return new $c(e, n)
  }
  _parse(e) {
      const n = this._queryConstraints.map(r => r._parse(e)).filter(r => r.getFilters().length > 0);
      return n.length === 1 ? n[0] : tt.create(n, this._getOperator())
  }
  _apply(e) {
      const n = this._parse(e);
      return n.getFilters().length === 0 ? e : (function(i, s) {
          let o = i;
          const l = s.getFlattenedFilters();
          for (const u of l) Zp(o, u), o = va(o, u)
      }(e._query, n), new lr(e.firestore, e.converter, va(e._query, n)))
  }
  _getQueryConstraints() {
      return this._queryConstraints
  }
  _getOperator() {
      return this.type === "and" ? "and" : "or"
  }
}

function bh(t, e, n) {
  if (typeof(n = he(n)) == "string") {
      if (n === "") throw new P(E.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
      if (!Qf(e) && n.indexOf("/") !== -1) throw new P(E.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
      const r = e.path.child(Z.fromString(n));
      if (!k.isDocumentKey(r)) throw new P(E.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
      return Gu(t, new k(r))
  }
  if (n instanceof Oe) return Gu(t, n._key);
  throw new P(E.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zs(n)}.`)
}

function Ah(t, e) {
  if (!Array.isArray(t) || t.length === 0) throw new P(E.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)
}

function Zp(t, e) {
  const n = function(i, s) {
      for (const o of i)
          for (const l of o.getFlattenedFilters())
              if (s.indexOf(l.op) >= 0) return l.op;
      return null
  }(t.filters, function(i) {
      switch (i) {
          case "!=":
              return ["!=", "not-in"];
          case "array-contains-any":
          case "in":
              return ["not-in"];
          case "not-in":
              return ["array-contains-any", "in", "not-in", "!="];
          default:
              return []
      }
  }(e.op));
  if (n !== null) throw n === e.op ? new P(E.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new P(E.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)
}
class SA {
  convertValue(e, n = "none") {
      switch (yn(e)) {
          case 0:
              return null;
          case 1:
              return e.booleanValue;
          case 2:
              return ce(e.integerValue || e.doubleValue);
          case 3:
              return this.convertTimestamp(e.timestampValue);
          case 4:
              return this.convertServerTimestamp(e, n);
          case 5:
              return e.stringValue;
          case 6:
              return this.convertBytes(wn(e.bytesValue));
          case 7:
              return this.convertReference(e.referenceValue);
          case 8:
              return this.convertGeoPoint(e.geoPointValue);
          case 9:
              return this.convertArray(e.arrayValue, n);
          case 10:
              return this.convertObject(e.mapValue, n);
          default:
              throw V()
      }
  }
  convertObject(e, n) {
      return this.convertObjectMap(e.fields, n)
  }
  convertObjectMap(e, n = "none") {
      const r = {};
      return bn(e, (i, s) => {
          r[i] = this.convertValue(s, n)
      }), r
  }
  convertGeoPoint(e) {
      return new Lc(ce(e.latitude), ce(e.longitude))
  }
  convertArray(e, n) {
      return (e.values || []).map(r => this.convertValue(r, n))
  }
  convertServerTimestamp(e, n) {
      switch (n) {
          case "previous":
              const r = gc(e);
              return r == null ? null : this.convertValue(r, n);
          case "estimate":
              return this.convertTimestamp(Yr(e));
          default:
              return null
      }
  }
  convertTimestamp(e) {
      const n = zt(e);
      return new fe(n.seconds, n.nanos)
  }
  convertDocumentKey(e, n) {
      const r = Z.fromString(e);
      Q(vp(r));
      const i = new Xr(r.get(1), r.get(3)),
          s = new k(r.popFirst(5));
      return i.isEqual(n) || mt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), s
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function PA(t, e, n) {
  let r;
  return r = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, r
}

function CA() {
  return new uA("count")
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Rr {
  constructor(e, n) {
      this.hasPendingWrites = e, this.fromCache = n
  }
  isEqual(e) {
      return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
  }
}
class em extends Xp {
  constructor(e, n, r, i, s, o) {
      super(e, n, r, i, o), this._firestore = e, this._firestoreImpl = e, this.metadata = s
  }
  exists() {
      return super.exists()
  }
  data(e = {}) {
      if (this._document) {
          if (this._converter) {
              const n = new Ji(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
              return this._converter.fromFirestore(n, e)
          }
          return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps)
      }
  }
  get(e, n = {}) {
      if (this._document) {
          const r = this._document.data.field(jc("DocumentSnapshot.get", e));
          if (r !== null) return this._userDataWriter.convertValue(r, n.serverTimestamps)
      }
  }
}
class Ji extends em {
  data(e = {}) {
      return super.data(e)
  }
}
class RA {
  constructor(e, n, r, i) {
      this._firestore = e, this._userDataWriter = n, this._snapshot = i, this.metadata = new Rr(i.hasPendingWrites, i.fromCache), this.query = r
  }
  get docs() {
      const e = [];
      return this.forEach(n => e.push(n)), e
  }
  get size() {
      return this._snapshot.docs.size
  }
  get empty() {
      return this.size === 0
  }
  forEach(e, n) {
      this._snapshot.docs.forEach(r => {
          e.call(n, new Ji(this._firestore, this._userDataWriter, r.key, r, new Rr(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache), this.query.converter))
      })
  }
  docChanges(e = {}) {
      const n = !!e.includeMetadataChanges;
      if (n && this._snapshot.excludesMetadataChanges) throw new P(E.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
      return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === n || (this._cachedChanges = function(i, s) {
          if (i._snapshot.oldDocs.isEmpty()) {
              let o = 0;
              return i._snapshot.docChanges.map(l => {
                  const u = new Ji(i._firestore, i._userDataWriter, l.doc.key, l.doc, new Rr(i._snapshot.mutatedKeys.has(l.doc.key), i._snapshot.fromCache), i.query.converter);
                  return l.doc, {
                      type: "added",
                      doc: u,
                      oldIndex: -1,
                      newIndex: o++
                  }
              })
          } {
              let o = i._snapshot.oldDocs;
              return i._snapshot.docChanges.filter(l => s || l.type !== 3).map(l => {
                  const u = new Ji(i._firestore, i._userDataWriter, l.doc.key, l.doc, new Rr(i._snapshot.mutatedKeys.has(l.doc.key), i._snapshot.fromCache), i.query.converter);
                  let f = -1,
                      p = -1;
                  return l.type !== 0 && (f = o.indexOf(l.doc.key), o = o.delete(l.doc.key)), l.type !== 1 && (o = o.add(l.doc), p = o.indexOf(l.doc.key)), {
                      type: kA(l.type),
                      doc: u,
                      oldIndex: f,
                      newIndex: p
                  }
              })
          }
      }(this, n), this._cachedChangesIncludeMetadataChanges = n), this._cachedChanges
  }
}

function kA(t) {
  switch (t) {
      case 0:
          return "added";
      case 2:
      case 3:
          return "modified";
      case 1:
          return "removed";
      default:
          return V()
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Qt(t) {
  t = nt(t, Oe);
  const e = nt(t.firestore, Sn);
  return iA(to(e), t._key).then(n => OA(e, t, n))
}
class zc extends SA {
  constructor(e) {
      super(), this.firestore = e
  }
  convertBytes(e) {
      return new er(e)
  }
  convertReference(e) {
      const n = this.convertDocumentKey(e, this.firestore._databaseId);
      return new Oe(this.firestore, null, n)
  }
}

function DA(t) {
  t = nt(t, lr);
  const e = nt(t.firestore, Sn),
      n = to(e),
      r = new zc(e);
  return IA(t._query), sA(n, t._query).then(i => new RA(e, r, t, i))
}

function _s(t, e, n) {
  t = nt(t, Oe);
  const r = nt(t.firestore, Sn),
      i = PA(t.converter, e, n);
  return Hc(r, [mA(Mc(r), "setDoc", t._key, i, t.converter !== null, n).toMutation(t._key, Ye.none())])
}

function Qe(t, e, n, ...r) {
  t = nt(t, Oe);
  const i = nt(t.firestore, Sn),
      s = Mc(i);
  let o;
  return o = typeof(e = he(e)) == "string" || e instanceof no ? yA(s, "updateDoc", t._key, e, n, r) : wA(s, "updateDoc", t._key, e), Hc(i, [o.toMutation(t._key, Ye.exists(!0))])
}

function VA(t) {
  return Hc(nt(t.firestore, Sn), [new Ec(t._key, Ye.none())])
}

function Hc(t, e) {
  return function(r, i) {
      const s = new Je;
      return r.asyncQueue.enqueueAndForget(async () => $b(await nA(r), i, s)), s.promise
  }(to(t), e)
}

function OA(t, e, n) {
  const r = n.docs.get(e._key),
      i = new zc(t);
  return new em(t, i, e._key, r, new Rr(n.hasPendingWrites, n.fromCache), e.converter)
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function NA(t) {
  return xA(t, {
      count: CA()
  })
}

function xA(t, e) {
  const n = nt(t.firestore, Sn),
      r = to(n),
      i = function(o, l) {
          const u = [];
          for (const f in o) Object.prototype.hasOwnProperty.call(o, f) && u.push(l(o[f], f, o));
          return u
      }(e, (s, o) => new y0(o, s.aggregateType, s._internalFieldPath));
  return function(o, l, u) {
      const f = new Je;
      return o.asyncQueue.enqueueAndForget(async () => {
          try {
              const p = await rA(o);
              f.resolve(_b(p, l, u))
          } catch (p) {
              f.reject(p)
          }
      }), f.promise
  }(r, t._query, i).then(s => function(l, u, f) {
      const p = new zc(l);
      return new hA(u, p, f)
  }(n, t, s))
}

function LA(...t) {
  return new Fc("arrayUnion", t)
}(function(e, n = !0) {
  (function(i) {
      or = i
  })(nr), pt(new Ze("firestore", (r, {
      instanceIdentifier: i,
      options: s
  }) => {
      const o = r.getProvider("app").getImmediate(),
          l = new Sn(new AT(r.getProvider("auth-internal")), new RT(r.getProvider("app-check-internal")), function(f, p) {
              if (!Object.prototype.hasOwnProperty.apply(f.options, ["projectId"])) throw new P(E.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
              return new Xr(f.options.projectId, p)
          }(o, i), o);
      return s = Object.assign({
          useFetchStreams: n
      }, s), l._setSettings(s), l
  }, "PUBLIC").setMultipleInstances(!0)), Ke($u, "4.4.3", e), Ke($u, "4.4.3", "esm2017")
})();
const tm = "@firebase/installations",
  Wc = "0.6.5";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const nm = 1e4,
  rm = `w:${Wc}`,
  im = "FIS_v2",
  MA = "https://firebaseinstallations.googleapis.com/v1",
  FA = 60 * 60 * 1e3,
  UA = "installations",
  BA = "Installations";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const jA = {
      "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
      "not-registered": "Firebase Installation is not registered.",
      "installation-not-found": "Firebase Installation not found.",
      "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
      "app-offline": "Could not process request. Application offline.",
      "delete-pending-registration": "Can't delete installation while there is a pending registration request."
  },
  _n = new En(UA, BA, jA);

function sm(t) {
  return t instanceof rt && t.code.includes("request-failed")
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function om({
  projectId: t
}) {
  return `${MA}/projects/${t}/installations`
}

function am(t) {
  return {
      token: t.token,
      requestStatus: 2,
      expiresIn: $A(t.expiresIn),
      creationTime: Date.now()
  }
}
async function cm(t, e) {
  const r = (await e.json()).error;
  return _n.create("request-failed", {
      requestName: t,
      serverCode: r.code,
      serverMessage: r.message,
      serverStatus: r.status
  })
}

function lm({
  apiKey: t
}) {
  return new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-goog-api-key": t
  })
}

function qA(t, {
  refreshToken: e
}) {
  const n = lm(t);
  return n.append("Authorization", zA(e)), n
}
async function um(t) {
  const e = await t();
  return e.status >= 500 && e.status < 600 ? t() : e
}

function $A(t) {
  return Number(t.replace("s", "000"))
}

function zA(t) {
  return `${im} ${t}`
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function HA({
  appConfig: t,
  heartbeatServiceProvider: e
}, {
  fid: n
}) {
  const r = om(t),
      i = lm(t),
      s = e.getImmediate({
          optional: !0
      });
  if (s) {
      const f = await s.getHeartbeatsHeader();
      f && i.append("x-firebase-client", f)
  }
  const o = {
          fid: n,
          authVersion: im,
          appId: t.appId,
          sdkVersion: rm
      },
      l = {
          method: "POST",
          headers: i,
          body: JSON.stringify(o)
      },
      u = await um(() => fetch(r, l));
  if (u.ok) {
      const f = await u.json();
      return {
          fid: f.fid || n,
          registrationStatus: 2,
          refreshToken: f.refreshToken,
          authToken: am(f.authToken)
      }
  } else throw await cm("Create Installation", u)
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function hm(t) {
  return new Promise(e => {
      setTimeout(e, t)
  })
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function WA(t) {
  return btoa(String.fromCharCode(...t)).replace(/\+/g, "-").replace(/\//g, "_")
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const KA = /^[cdef][\w-]{21}$/,
  Ra = "";

function GA() {
  try {
      const t = new Uint8Array(17);
      (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
      const n = QA(t);
      return KA.test(n) ? n : Ra
  } catch {
      return Ra
  }
}

function QA(t) {
  return WA(t).substr(0, 22)
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ao(t) {
  return `${t.appName}!${t.appId}`
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const dm = new Map;

function fm(t, e) {
  const n = ao(t);
  pm(n, e), JA(n, e)
}

function pm(t, e) {
  const n = dm.get(t);
  if (n)
      for (const r of n) r(e)
}

function JA(t, e) {
  const n = YA();
  n && n.postMessage({
      key: t,
      fid: e
  }), XA()
}
let un = null;

function YA() {
  return !un && "BroadcastChannel" in self && (un = new BroadcastChannel("[Firebase] FID Change"), un.onmessage = t => {
      pm(t.data.key, t.data.fid)
  }), un
}

function XA() {
  dm.size === 0 && un && (un.close(), un = null)
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const ZA = "firebase-installations-database",
  eS = 1,
  vn = "firebase-installations-store";
let Ko = null;

function Kc() {
  return Ko || (Ko = Jh(ZA, eS, {
      upgrade: (t, e) => {
          switch (e) {
              case 0:
                  t.createObjectStore(vn)
          }
      }
  })), Ko
}
async function vs(t, e) {
  const n = ao(t),
      i = (await Kc()).transaction(vn, "readwrite"),
      s = i.objectStore(vn),
      o = await s.get(n);
  return await s.put(e, n), await i.done, (!o || o.fid !== e.fid) && fm(t, e.fid), e
}
async function mm(t) {
  const e = ao(t),
      r = (await Kc()).transaction(vn, "readwrite");
  await r.objectStore(vn).delete(e), await r.done
}
async function co(t, e) {
  const n = ao(t),
      i = (await Kc()).transaction(vn, "readwrite"),
      s = i.objectStore(vn),
      o = await s.get(n),
      l = e(o);
  return l === void 0 ? await s.delete(n) : await s.put(l, n), await i.done, l && (!o || o.fid !== l.fid) && fm(t, l.fid), l
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Gc(t) {
  let e;
  const n = await co(t.appConfig, r => {
      const i = tS(r),
          s = nS(t, i);
      return e = s.registrationPromise, s.installationEntry
  });
  return n.fid === Ra ? {
      installationEntry: await e
  } : {
      installationEntry: n,
      registrationPromise: e
  }
}

function tS(t) {
  const e = t || {
      fid: GA(),
      registrationStatus: 0
  };
  return gm(e)
}

function nS(t, e) {
  if (e.registrationStatus === 0) {
      if (!navigator.onLine) {
          const i = Promise.reject(_n.create("app-offline"));
          return {
              installationEntry: e,
              registrationPromise: i
          }
      }
      const n = {
              fid: e.fid,
              registrationStatus: 1,
              registrationTime: Date.now()
          },
          r = rS(t, n);
      return {
          installationEntry: n,
          registrationPromise: r
      }
  } else return e.registrationStatus === 1 ? {
      installationEntry: e,
      registrationPromise: iS(t)
  } : {
      installationEntry: e
  }
}
async function rS(t, e) {
  try {
      const n = await HA(t, e);
      return vs(t.appConfig, n)
  } catch (n) {
      throw sm(n) && n.customData.serverCode === 409 ? await mm(t.appConfig) : await vs(t.appConfig, {
          fid: e.fid,
          registrationStatus: 0
      }), n
  }
}
async function iS(t) {
  let e = await Sh(t.appConfig);
  for (; e.registrationStatus === 1;) await hm(100), e = await Sh(t.appConfig);
  if (e.registrationStatus === 0) {
      const {
          installationEntry: n,
          registrationPromise: r
      } = await Gc(t);
      return r || n
  }
  return e
}

function Sh(t) {
  return co(t, e => {
      if (!e) throw _n.create("installation-not-found");
      return gm(e)
  })
}

function gm(t) {
  return sS(t) ? {
      fid: t.fid,
      registrationStatus: 0
  } : t
}

function sS(t) {
  return t.registrationStatus === 1 && t.registrationTime + nm < Date.now()
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function oS({
  appConfig: t,
  heartbeatServiceProvider: e
}, n) {
  const r = aS(t, n),
      i = qA(t, n),
      s = e.getImmediate({
          optional: !0
      });
  if (s) {
      const f = await s.getHeartbeatsHeader();
      f && i.append("x-firebase-client", f)
  }
  const o = {
          installation: {
              sdkVersion: rm,
              appId: t.appId
          }
      },
      l = {
          method: "POST",
          headers: i,
          body: JSON.stringify(o)
      },
      u = await um(() => fetch(r, l));
  if (u.ok) {
      const f = await u.json();
      return am(f)
  } else throw await cm("Generate Auth Token", u)
}

function aS(t, {
  fid: e
}) {
  return `${om(t)}/${e}/authTokens:generate`
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Qc(t, e = !1) {
  let n;
  const r = await co(t.appConfig, s => {
      if (!wm(s)) throw _n.create("not-registered");
      const o = s.authToken;
      if (!e && uS(o)) return s;
      if (o.requestStatus === 1) return n = cS(t, e), s;
      {
          if (!navigator.onLine) throw _n.create("app-offline");
          const l = dS(s);
          return n = lS(t, l), l
      }
  });
  return n ? await n : r.authToken
}
async function cS(t, e) {
  let n = await Ph(t.appConfig);
  for (; n.authToken.requestStatus === 1;) await hm(100), n = await Ph(t.appConfig);
  const r = n.authToken;
  return r.requestStatus === 0 ? Qc(t, e) : r
}

function Ph(t) {
  return co(t, e => {
      if (!wm(e)) throw _n.create("not-registered");
      const n = e.authToken;
      return fS(n) ? Object.assign(Object.assign({}, e), {
          authToken: {
              requestStatus: 0
          }
      }) : e
  })
}
async function lS(t, e) {
  try {
      const n = await oS(t, e),
          r = Object.assign(Object.assign({}, e), {
              authToken: n
          });
      return await vs(t.appConfig, r), n
  } catch (n) {
      if (sm(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404)) await mm(t.appConfig);
      else {
          const r = Object.assign(Object.assign({}, e), {
              authToken: {
                  requestStatus: 0
              }
          });
          await vs(t.appConfig, r)
      }
      throw n
  }
}

function wm(t) {
  return t !== void 0 && t.registrationStatus === 2
}

function uS(t) {
  return t.requestStatus === 2 && !hS(t)
}

function hS(t) {
  const e = Date.now();
  return e < t.creationTime || t.creationTime + t.expiresIn < e + FA
}

function dS(t) {
  const e = {
      requestStatus: 1,
      requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, t), {
      authToken: e
  })
}

function fS(t) {
  return t.requestStatus === 1 && t.requestTime + nm < Date.now()
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function pS(t) {
  const e = t,
      {
          installationEntry: n,
          registrationPromise: r
      } = await Gc(e);
  return r ? r.catch(console.error) : Qc(e).catch(console.error), n.fid
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function mS(t, e = !1) {
  const n = t;
  return await gS(n), (await Qc(n, e)).token
}
async function gS(t) {
  const {
      registrationPromise: e
  } = await Gc(t);
  e && await e
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function wS(t) {
  if (!t || !t.options) throw Go("App Configuration");
  if (!t.name) throw Go("App Name");
  const e = ["projectId", "apiKey", "appId"];
  for (const n of e)
      if (!t.options[n]) throw Go(n);
  return {
      appName: t.name,
      projectId: t.options.projectId,
      apiKey: t.options.apiKey,
      appId: t.options.appId
  }
}

function Go(t) {
  return _n.create("missing-app-config-values", {
      valueName: t
  })
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const ym = "installations",
  yS = "installations-internal",
  _S = t => {
      const e = t.getProvider("app").getImmediate(),
          n = wS(e),
          r = In(e, "heartbeat");
      return {
          app: e,
          appConfig: n,
          heartbeatServiceProvider: r,
          _delete: () => Promise.resolve()
      }
  },
  vS = t => {
      const e = t.getProvider("app").getImmediate(),
          n = In(e, ym).getImmediate();
      return {
          getId: () => pS(n),
          getToken: i => mS(n, i)
      }
  };

function ES() {
  pt(new Ze(ym, _S, "PUBLIC")), pt(new Ze(yS, vS, "PRIVATE"))
}
ES();
Ke(tm, Wc);
Ke(tm, Wc, "esm2017");
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Es = "analytics",
  IS = "firebase_id",
  TS = "origin",
  bS = 60 * 1e3,
  AS = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
  Jc = "https://www.googletagmanager.com/gtag/js";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Le = new Ts("@firebase/analytics");
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const SS = {
      "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
      "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
      "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
      "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
      "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
      "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
      "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
      "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
      "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
      "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
      "no-client-id": 'The "client_id" field is empty.',
      "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
  },
  je = new En("analytics", "Analytics", SS);
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function PS(t) {
  if (!t.startsWith(Jc)) {
      const e = je.create("invalid-gtag-resource", {
          gtagURL: t
      });
      return Le.warn(e.message), ""
  }
  return t
}

function _m(t) {
  return Promise.all(t.map(e => e.catch(n => n)))
}

function CS(t, e) {
  let n;
  return window.trustedTypes && (n = window.trustedTypes.createPolicy(t, e)), n
}

function RS(t, e) {
  const n = CS("firebase-js-sdk-policy", {
          createScriptURL: PS
      }),
      r = document.createElement("script"),
      i = `${Jc}?l=${t}&id=${e}`;
  r.src = n ? n?.createScriptURL(i) : i, r.async = !0, document.head.appendChild(r)
}

function kS(t) {
  let e = [];
  return Array.isArray(window[t]) ? e = window[t] : window[t] = e, e
}
async function DS(t, e, n, r, i, s) {
  const o = r[i];
  try {
      if (o) await e[o];
      else {
          const u = (await _m(n)).find(f => f.measurementId === i);
          u && await e[u.appId]
      }
  } catch (l) {
      Le.error(l)
  }
  t("config", i, s)
}
async function VS(t, e, n, r, i) {
  try {
      let s = [];
      if (i && i.send_to) {
          let o = i.send_to;
          Array.isArray(o) || (o = [o]);
          const l = await _m(n);
          for (const u of o) {
              const f = l.find(g => g.measurementId === u),
                  p = f && e[f.appId];
              if (p) s.push(p);
              else {
                  s = [];
                  break
              }
          }
      }
      s.length === 0 && (s = Object.values(e)), await Promise.all(s), t("event", r, i || {})
  } catch (s) {
      Le.error(s)
  }
}

function OS(t, e, n, r) {
  async function i(s, ...o) {
      try {
          if (s === "event") {
              const [l, u] = o;
              await VS(t, e, n, l, u)
          } else if (s === "config") {
              const [l, u] = o;
              await DS(t, e, n, r, l, u)
          } else if (s === "consent") {
              const [l] = o;
              t("consent", "update", l)
          } else if (s === "get") {
              const [l, u, f] = o;
              t("get", l, u, f)
          } else if (s === "set") {
              const [l] = o;
              t("set", l)
          } else t(s, ...o)
      } catch (l) {
          Le.error(l)
      }
  }
  return i
}

function NS(t, e, n, r, i) {
  let s = function(...o) {
      window[r].push(arguments)
  };
  return window[i] && typeof window[i] == "function" && (s = window[i]), window[i] = OS(s, t, e, n), {
      gtagCore: s,
      wrappedGtag: window[i]
  }
}

function xS(t) {
  const e = window.document.getElementsByTagName("script");
  for (const n of Object.values(e))
      if (n.src && n.src.includes(Jc) && n.src.includes(t)) return n;
  return null
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const LS = 30,
  MS = 1e3;
class FS {
  constructor(e = {}, n = MS) {
      this.throttleMetadata = e, this.intervalMillis = n
  }
  getThrottleMetadata(e) {
      return this.throttleMetadata[e]
  }
  setThrottleMetadata(e, n) {
      this.throttleMetadata[e] = n
  }
  deleteThrottleMetadata(e) {
      delete this.throttleMetadata[e]
  }
}
const vm = new FS;

function US(t) {
  return new Headers({
      Accept: "application/json",
      "x-goog-api-key": t
  })
}
async function BS(t) {
  var e;
  const {
      appId: n,
      apiKey: r
  } = t, i = {
      method: "GET",
      headers: US(r)
  }, s = AS.replace("{app-id}", n), o = await fetch(s, i);
  if (o.status !== 200 && o.status !== 304) {
      let l = "";
      try {
          const u = await o.json();
          !((e = u.error) === null || e === void 0) && e.message && (l = u.error.message)
      } catch {}
      throw je.create("config-fetch-failed", {
          httpStatus: o.status,
          responseMessage: l
      })
  }
  return o.json()
}
async function jS(t, e = vm, n) {
  const {
      appId: r,
      apiKey: i,
      measurementId: s
  } = t.options;
  if (!r) throw je.create("no-app-id");
  if (!i) {
      if (s) return {
          measurementId: s,
          appId: r
      };
      throw je.create("no-api-key")
  }
  const o = e.getThrottleMetadata(r) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
      },
      l = new zS;
  return setTimeout(async () => {
      l.abort()
  }, n !== void 0 ? n : bS), Em({
      appId: r,
      apiKey: i,
      measurementId: s
  }, o, l, e)
}
async function Em(t, {
  throttleEndTimeMillis: e,
  backoffCount: n
}, r, i = vm) {
  var s;
  const {
      appId: o,
      measurementId: l
  } = t;
  try {
      await qS(r, e)
  } catch (u) {
      if (l) return Le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`), {
          appId: o,
          measurementId: l
      };
      throw u
  }
  try {
      const u = await BS(t);
      return i.deleteThrottleMetadata(o), u
  } catch (u) {
      const f = u;
      if (!$S(f)) {
          if (i.deleteThrottleMetadata(o), l) return Le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`), {
              appId: o,
              measurementId: l
          };
          throw u
      }
      const p = Number((s = f?.customData) === null || s === void 0 ? void 0 : s.httpStatus) === 503 ? ru(n, i.intervalMillis, LS) : ru(n, i.intervalMillis),
          g = {
              throttleEndTimeMillis: Date.now() + p,
              backoffCount: n + 1
          };
      return i.setThrottleMetadata(o, g), Le.debug(`Calling attemptFetch again in ${p} millis`), Em(t, g, r, i)
  }
}

function qS(t, e) {
  return new Promise((n, r) => {
      const i = Math.max(e - Date.now(), 0),
          s = setTimeout(n, i);
      t.addEventListener(() => {
          clearTimeout(s), r(je.create("fetch-throttle", {
              throttleEndTimeMillis: e
          }))
      })
  })
}

function $S(t) {
  if (!(t instanceof rt) || !t.customData) return !1;
  const e = Number(t.customData.httpStatus);
  return e === 429 || e === 500 || e === 503 || e === 504
}
class zS {
  constructor() {
      this.listeners = []
  }
  addEventListener(e) {
      this.listeners.push(e)
  }
  abort() {
      this.listeners.forEach(e => e())
  }
}
async function HS(t, e, n, r, i) {
  if (i && i.global) {
      t("event", n, r);
      return
  } else {
      const s = await e,
          o = Object.assign(Object.assign({}, r), {
              send_to: s
          });
      t("event", n, o)
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function WS() {
  if (ka()) try {
      await Kh()
  } catch (t) {
      return Le.warn(je.create("indexeddb-unavailable", {
          errorInfo: t?.toString()
      }).message), !1
  } else return Le.warn(je.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
  }).message), !1;
  return !0
}
async function KS(t, e, n, r, i, s, o) {
  var l;
  const u = jS(t);
  u.then(v => {
      n[v.measurementId] = v.appId, t.options.measurementId && v.measurementId !== t.options.measurementId && Le.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
  }).catch(v => Le.error(v)), e.push(u);
  const f = WS().then(v => {
          if (v) return r.getId()
      }),
      [p, g] = await Promise.all([u, f]);
  xS(s) || RS(s, p.measurementId), i("js", new Date);
  const w = (l = o?.config) !== null && l !== void 0 ? l : {};
  return w[TS] = "firebase", w.update = !0, g != null && (w[IS] = g), i("config", p.measurementId, w), p.measurementId
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class GS {
  constructor(e) {
      this.app = e
  }
  _delete() {
      return delete Mr[this.app.options.appId], Promise.resolve()
  }
}
let Mr = {},
  Ch = [];
const Rh = {};
let Qo = "dataLayer",
  QS = "gtag",
  kh, Im, Dh = !1;

function JS() {
  const t = [];
  if (Wh() && t.push("This is a browser extension environment."), Dy() || t.push("Cookies are not available."), t.length > 0) {
      const e = t.map((r, i) => `(${i+1}) ${r}`).join(" "),
          n = je.create("invalid-analytics-context", {
              errorInfo: e
          });
      Le.warn(n.message)
  }
}

function YS(t, e, n) {
  JS();
  const r = t.options.appId;
  if (!r) throw je.create("no-app-id");
  if (!t.options.apiKey)
      if (t.options.measurementId) Le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
      else throw je.create("no-api-key");
  if (Mr[r] != null) throw je.create("already-exists", {
      id: r
  });
  if (!Dh) {
      kS(Qo);
      const {
          wrappedGtag: s,
          gtagCore: o
      } = NS(Mr, Ch, Rh, Qo, QS);
      Im = s, kh = o, Dh = !0
  }
  return Mr[r] = KS(t, Ch, Rh, e, kh, Qo, n), new GS(t)
}

function XS(t = Va()) {
  t = he(t);
  const e = In(t, Es);
  return e.isInitialized() ? e.getImmediate() : ZS(t)
}

function ZS(t, e = {}) {
  const n = In(t, Es);
  if (n.isInitialized()) {
      const i = n.getImmediate();
      if (Hn(e, n.getOptions())) return i;
      throw je.create("already-initialized")
  }
  return n.initialize({
      options: e
  })
}

function eP(t, e, n, r) {
  t = he(t), HS(Im, Mr[t.app.options.appId], e, n, r).catch(i => Le.error(i))
}
const Vh = "@firebase/analytics",
  Oh = "0.10.1";

function tP() {
  pt(new Ze(Es, (e, {
      options: n
  }) => {
      const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("installations-internal").getImmediate();
      return YS(r, i, n)
  }, "PUBLIC")), pt(new Ze("analytics-internal", t, "PRIVATE")), Ke(Vh, Oh), Ke(Vh, Oh, "esm2017");

  function t(e) {
      try {
          const n = e.getProvider(Es).getImmediate();
          return {
              logEvent: (r, i, s) => eP(n, r, i, s)
          }
      } catch (n) {
          throw je.create("interop-component-reg-failed", {
              reason: n
          })
      }
  }
}
tP();
const nP = {
      apiKey: "AIzaSyBi4OCWEbeBXrVmmHOOPdKFtYihWyv1vOM",
      authDomain: "vhack-2024.firebaseapp.com",
      projectId: "vhack-2024",
      storageBucket: "vhack-2024.appspot.com",
      messagingSenderId: "964815587534",
      appId: "1:964815587534:web:85a873a7f4396e1627289f",
      measurementId: "G-J1FB3KWQ56"
  },
  Yc = Yh(nP),
  Ei = mI(Yc),
  ee = lA(Yc);
XS(Yc);
var Tm = {
  exports: {}
};
/*!
* sweetalert2 v11.10.6
* Released under the MIT License.
*/
(function(t, e) {
  (function(n, r) {
      t.exports = r()
  })(Nt, function() {
      function n(d, a, c) {
          return a = v(a), C(d, i() ? Reflect.construct(a, c || [], v(d).constructor) : a.apply(d, c))
      }

      function r(d, a, c) {
          if (i()) return Reflect.construct.apply(null, arguments);
          var h = [null];
          h.push.apply(h, a);
          var m = new(d.bind.apply(d, h));
          return c && R(m, c.prototype), m
      }

      function i() {
          try {
              var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
          } catch {}
          return (i = function() {
              return !!d
          })()
      }

      function s(d, a) {
          var c = d == null ? null : typeof Symbol < "u" && d[Symbol.iterator] || d["@@iterator"];
          if (c != null) {
              var h, m, _, S, F = [],
                  U = !0,
                  ne = !1;
              try {
                  if (_ = (c = c.call(d)).next, a === 0) {
                      if (Object(c) !== c) return;
                      U = !1
                  } else
                      for (; !(U = (h = _.call(c)).done) && (F.push(h.value), F.length !== a); U = !0);
              } catch (_r) {
                  ne = !0, m = _r
              } finally {
                  try {
                      if (!U && c.return != null && (S = c.return(), Object(S) !== S)) return
                  } finally {
                      if (ne) throw m
                  }
              }
              return F
          }
      }

      function o(d, a) {
          if (typeof d != "object" || !d) return d;
          var c = d[Symbol.toPrimitive];
          if (c !== void 0) {
              var h = c.call(d, a || "default");
              if (typeof h != "object") return h;
              throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return (a === "string" ? String : Number)(d)
      }

      function l(d) {
          var a = o(d, "string");
          return typeof a == "symbol" ? a : String(a)
      }

      function u(d) {
          "@babel/helpers - typeof";
          return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
              return typeof a
          } : function(a) {
              return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
          }, u(d)
      }

      function f(d, a) {
          if (!(d instanceof a)) throw new TypeError("Cannot call a class as a function")
      }

      function p(d, a) {
          for (var c = 0; c < a.length; c++) {
              var h = a[c];
              h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(d, l(h.key), h)
          }
      }

      function g(d, a, c) {
          return a && p(d.prototype, a), c && p(d, c), Object.defineProperty(d, "prototype", {
              writable: !1
          }), d
      }

      function w(d, a) {
          if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
          d.prototype = Object.create(a && a.prototype, {
              constructor: {
                  value: d,
                  writable: !0,
                  configurable: !0
              }
          }), Object.defineProperty(d, "prototype", {
              writable: !1
          }), a && R(d, a)
      }

      function v(d) {
          return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(c) {
              return c.__proto__ || Object.getPrototypeOf(c)
          }, v(d)
      }

      function R(d, a) {
          return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, m) {
              return h.__proto__ = m, h
          }, R(d, a)
      }

      function O(d) {
          if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return d
      }

      function C(d, a) {
          if (a && (typeof a == "object" || typeof a == "function")) return a;
          if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return O(d)
      }

      function z(d, a) {
          for (; !Object.prototype.hasOwnProperty.call(d, a) && (d = v(d), d !== null););
          return d
      }

      function G() {
          return typeof Reflect < "u" && Reflect.get ? G = Reflect.get.bind() : G = function(a, c, h) {
              var m = z(a, c);
              if (m) {
                  var _ = Object.getOwnPropertyDescriptor(m, c);
                  return _.get ? _.get.call(arguments.length < 3 ? a : h) : _.value
              }
          }, G.apply(this, arguments)
      }

      function J(d, a) {
          return ze(d) || s(d, a) || hr(d, a) || Cm()
      }

      function de(d) {
          return wt(d) || yt(d) || hr(d) || Cn()
      }

      function wt(d) {
          if (Array.isArray(d)) return _t(d)
      }

      function ze(d) {
          if (Array.isArray(d)) return d
      }

      function yt(d) {
          if (typeof Symbol < "u" && d[Symbol.iterator] != null || d["@@iterator"] != null) return Array.from(d)
      }

      function hr(d, a) {
          if (d) {
              if (typeof d == "string") return _t(d, a);
              var c = Object.prototype.toString.call(d).slice(8, -1);
              if (c === "Object" && d.constructor && (c = d.constructor.name), c === "Map" || c === "Set") return Array.from(d);
              if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return _t(d, a)
          }
      }

      function _t(d, a) {
          (a == null || a > d.length) && (a = d.length);
          for (var c = 0, h = new Array(a); c < a; c++) h[c] = d[c];
          return h
      }

      function Cn() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function Cm() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function Zc(d, a) {
          var c = el(d, a, "get");
          return km(d, c)
      }

      function Rm(d, a, c) {
          var h = el(d, a, "set");
          return Dm(d, h, c), c
      }

      function el(d, a, c) {
          if (!a.has(d)) throw new TypeError("attempted to " + c + " private field on non-instance");
          return a.get(d)
      }

      function km(d, a) {
          return a.get ? a.get.call(d) : a.value
      }

      function Dm(d, a, c) {
          if (a.set) a.set.call(d, c);
          else {
              if (!a.writable) throw new TypeError("attempted to set read only private field");
              a.value = c
          }
      }

      function Vm(d, a) {
          if (a.has(d)) throw new TypeError("Cannot initialize the same private elements twice on an object")
      }

      function Om(d, a, c) {
          Vm(d, a), a.set(d, c)
      }
      var Nm = 100,
          M = {},
          xm = function() {
              M.previousActiveElement instanceof HTMLElement ? (M.previousActiveElement.focus(), M.previousActiveElement = null) : document.body && document.body.focus()
          },
          Lm = function(a) {
              return new Promise(function(c) {
                  if (!a) return c();
                  var h = window.scrollX,
                      m = window.scrollY;
                  M.restoreFocusTimeout = setTimeout(function() {
                      xm(), c()
                  }, Nm), window.scrollTo(h, m)
              })
          },
          tl = "swal2-",
          Mm = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"],
          y = Mm.reduce(function(d, a) {
              return d[a] = tl + a, d
          }, {}),
          Fm = ["success", "warning", "info", "question", "error"],
          Ii = Fm.reduce(function(d, a) {
              return d[a] = tl + a, d
          }, {}),
          nl = "SweetAlert2:",
          lo = function(a) {
              return a.charAt(0).toUpperCase() + a.slice(1)
          },
          Ne = function(a) {
              console.warn("".concat(nl, " ").concat(u(a) === "object" ? a.join(" ") : a))
          },
          Jt = function(a) {
              console.error("".concat(nl, " ").concat(a))
          },
          rl = [],
          Um = function(a) {
              rl.includes(a) || (rl.push(a), Ne(a))
          },
          Bm = function(a, c) {
              Um('"'.concat(a, '" is deprecated and will be removed in the next major release. Please use "').concat(c, '" instead.'))
          },
          Ti = function(a) {
              return typeof a == "function" ? a() : a
          },
          uo = function(a) {
              return a && typeof a.toPromise == "function"
          },
          dr = function(a) {
              return uo(a) ? a.toPromise() : Promise.resolve(a)
          },
          ho = function(a) {
              return a && Promise.resolve(a) === a
          },
          De = function() {
              return document.body.querySelector(".".concat(y.container))
          },
          fr = function(a) {
              var c = De();
              return c ? c.querySelector(a) : null
          },
          Me = function(a) {
              return fr(".".concat(a))
          },
          W = function() {
              return Me(y.popup)
          },
          pr = function() {
              return Me(y.icon)
          },
          jm = function() {
              return Me(y["icon-content"])
          },
          il = function() {
              return Me(y.title)
          },
          fo = function() {
              return Me(y["html-container"])
          },
          sl = function() {
              return Me(y.image)
          },
          po = function() {
              return Me(y["progress-steps"])
          },
          bi = function() {
              return Me(y["validation-message"])
          },
          it = function() {
              return fr(".".concat(y.actions, " .").concat(y.confirm))
          },
          Rn = function() {
              return fr(".".concat(y.actions, " .").concat(y.cancel))
          },
          Yt = function() {
              return fr(".".concat(y.actions, " .").concat(y.deny))
          },
          qm = function() {
              return Me(y["input-label"])
          },
          kn = function() {
              return fr(".".concat(y.loader))
          },
          mr = function() {
              return Me(y.actions)
          },
          ol = function() {
              return Me(y.footer)
          },
          Ai = function() {
              return Me(y["timer-progress-bar"])
          },
          mo = function() {
              return Me(y.close)
          },
          $m = `
a[href],
area[href],
input:not([disabled]),
select:not([disabled]),
textarea:not([disabled]),
button:not([disabled]),
iframe,
object,
embed,
[tabindex="0"],
[contenteditable],
audio[controls],
video[controls],
summary
`,
          go = function() {
              var a = W();
              if (!a) return [];
              var c = a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
                  h = Array.from(c).sort(function(S, F) {
                      var U = parseInt(S.getAttribute("tabindex") || "0"),
                          ne = parseInt(F.getAttribute("tabindex") || "0");
                      return U > ne ? 1 : U < ne ? -1 : 0
                  }),
                  m = a.querySelectorAll($m),
                  _ = Array.from(m).filter(function(S) {
                      return S.getAttribute("tabindex") !== "-1"
                  });
              return de(new Set(h.concat(_))).filter(function(S) {
                  return Ue(S)
              })
          },
          wo = function() {
              return vt(document.body, y.shown) && !vt(document.body, y["toast-shown"]) && !vt(document.body, y["no-backdrop"])
          },
          Si = function() {
              var a = W();
              return a ? vt(a, y.toast) : !1
          },
          zm = function() {
              var a = W();
              return a ? a.hasAttribute("data-loading") : !1
          },
          Fe = function(a, c) {
              if (a.textContent = "", c) {
                  var h = new DOMParser,
                      m = h.parseFromString(c, "text/html"),
                      _ = m.querySelector("head");
                  _ && Array.from(_.childNodes).forEach(function(F) {
                      a.appendChild(F)
                  });
                  var S = m.querySelector("body");
                  S && Array.from(S.childNodes).forEach(function(F) {
                      F instanceof HTMLVideoElement || F instanceof HTMLAudioElement ? a.appendChild(F.cloneNode(!0)) : a.appendChild(F)
                  })
              }
          },
          vt = function(a, c) {
              if (!c) return !1;
              for (var h = c.split(/\s+/), m = 0; m < h.length; m++)
                  if (!a.classList.contains(h[m])) return !1;
              return !0
          },
          Hm = function(a, c) {
              Array.from(a.classList).forEach(function(h) {
                  !Object.values(y).includes(h) && !Object.values(Ii).includes(h) && !Object.values(c.showClass || {}).includes(h) && a.classList.remove(h)
              })
          },
          He = function(a, c, h) {
              if (Hm(a, c), c.customClass && c.customClass[h]) {
                  if (typeof c.customClass[h] != "string" && !c.customClass[h].forEach) {
                      Ne("Invalid type of customClass.".concat(h, '! Expected string or iterable object, got "').concat(u(c.customClass[h]), '"'));
                      return
                  }
                  $(a, c.customClass[h])
              }
          },
          Pi = function(a, c) {
              if (!c) return null;
              switch (c) {
                  case "select":
                  case "textarea":
                  case "file":
                      return a.querySelector(".".concat(y.popup, " > .").concat(y[c]));
                  case "checkbox":
                      return a.querySelector(".".concat(y.popup, " > .").concat(y.checkbox, " input"));
                  case "radio":
                      return a.querySelector(".".concat(y.popup, " > .").concat(y.radio, " input:checked")) || a.querySelector(".".concat(y.popup, " > .").concat(y.radio, " input:first-child"));
                  case "range":
                      return a.querySelector(".".concat(y.popup, " > .").concat(y.range, " input"));
                  default:
                      return a.querySelector(".".concat(y.popup, " > .").concat(y.input))
              }
          },
          al = function(a) {
              if (a.focus(), a.type !== "file") {
                  var c = a.value;
                  a.value = "", a.value = c
              }
          },
          cl = function(a, c, h) {
              !a || !c || (typeof c == "string" && (c = c.split(/\s+/).filter(Boolean)), c.forEach(function(m) {
                  Array.isArray(a) ? a.forEach(function(_) {
                      h ? _.classList.add(m) : _.classList.remove(m)
                  }) : h ? a.classList.add(m) : a.classList.remove(m)
              }))
          },
          $ = function(a, c) {
              cl(a, c, !0)
          },
          st = function(a, c) {
              cl(a, c, !1)
          },
          Vt = function(a, c) {
              for (var h = Array.from(a.children), m = 0; m < h.length; m++) {
                  var _ = h[m];
                  if (_ instanceof HTMLElement && vt(_, c)) return _
              }
          },
          Xt = function(a, c, h) {
              h === "".concat(parseInt(h)) && (h = parseInt(h)), h || parseInt(h) === 0 ? a.style.setProperty(c, typeof h == "number" ? "".concat(h, "px") : h) : a.style.removeProperty(c)
          },
          pe = function(a) {
              var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
              a && (a.style.display = c)
          },
          Te = function(a) {
              a && (a.style.display = "none")
          },
          yo = function(a) {
              var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
              a && new MutationObserver(function() {
                  gr(a, a.innerHTML, c)
              }).observe(a, {
                  childList: !0,
                  subtree: !0
              })
          },
          ll = function(a, c, h, m) {
              var _ = a.querySelector(c);
              _ && _.style.setProperty(h, m)
          },
          gr = function(a, c) {
              var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
              c ? pe(a, h) : Te(a)
          },
          Ue = function(a) {
              return !!(a && (a.offsetWidth || a.offsetHeight || a.getClientRects().length))
          },
          Wm = function() {
              return !Ue(it()) && !Ue(Yt()) && !Ue(Rn())
          },
          ul = function(a) {
              return a.scrollHeight > a.clientHeight
          },
          hl = function(a) {
              var c = window.getComputedStyle(a),
                  h = parseFloat(c.getPropertyValue("animation-duration") || "0"),
                  m = parseFloat(c.getPropertyValue("transition-duration") || "0");
              return h > 0 || m > 0
          },
          _o = function(a) {
              var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                  h = Ai();
              h && Ue(h) && (c && (h.style.transition = "none", h.style.width = "100%"), setTimeout(function() {
                  h.style.transition = "width ".concat(a / 1e3, "s linear"), h.style.width = "0%"
              }, 10))
          },
          Km = function() {
              var a = Ai();
              if (a) {
                  var c = parseInt(window.getComputedStyle(a).width);
                  a.style.removeProperty("transition"), a.style.width = "100%";
                  var h = parseInt(window.getComputedStyle(a).width),
                      m = c / h * 100;
                  a.style.width = "".concat(m, "%")
              }
          },
          dl = function() {
              return typeof window > "u" || typeof document > "u"
          },
          Gm = `
<div aria-labelledby="`.concat(y.title, '" aria-describedby="').concat(y["html-container"], '" class="').concat(y.popup, `" tabindex="-1">
 <button type="button" class="`).concat(y.close, `"></button>
 <ul class="`).concat(y["progress-steps"], `"></ul>
 <div class="`).concat(y.icon, `"></div>
 <img class="`).concat(y.image, `" />
 <h2 class="`).concat(y.title, '" id="').concat(y.title, `"></h2>
 <div class="`).concat(y["html-container"], '" id="').concat(y["html-container"], `"></div>
 <input class="`).concat(y.input, '" id="').concat(y.input, `" />
 <input type="file" class="`).concat(y.file, `" />
 <div class="`).concat(y.range, `">
   <input type="range" />
   <output></output>
 </div>
 <select class="`).concat(y.select, '" id="').concat(y.select, `"></select>
 <div class="`).concat(y.radio, `"></div>
 <label class="`).concat(y.checkbox, `">
   <input type="checkbox" id="`).concat(y.checkbox, `" />
   <span class="`).concat(y.label, `"></span>
 </label>
 <textarea class="`).concat(y.textarea, '" id="').concat(y.textarea, `"></textarea>
 <div class="`).concat(y["validation-message"], '" id="').concat(y["validation-message"], `"></div>
 <div class="`).concat(y.actions, `">
   <div class="`).concat(y.loader, `"></div>
   <button type="button" class="`).concat(y.confirm, `"></button>
   <button type="button" class="`).concat(y.deny, `"></button>
   <button type="button" class="`).concat(y.cancel, `"></button>
 </div>
 <div class="`).concat(y.footer, `"></div>
 <div class="`).concat(y["timer-progress-bar-container"], `">
   <div class="`).concat(y["timer-progress-bar"], `"></div>
 </div>
</div>
`).replace(/(^|\n)\s*/g, ""),
          Qm = function() {
              var a = De();
              return a ? (a.remove(), st([document.documentElement, document.body], [y["no-backdrop"], y["toast-shown"], y["has-column"]]), !0) : !1
          },
          Zt = function() {
              M.currentInstance.resetValidationMessage()
          },
          Jm = function() {
              var a = W(),
                  c = Vt(a, y.input),
                  h = Vt(a, y.file),
                  m = a.querySelector(".".concat(y.range, " input")),
                  _ = a.querySelector(".".concat(y.range, " output")),
                  S = Vt(a, y.select),
                  F = a.querySelector(".".concat(y.checkbox, " input")),
                  U = Vt(a, y.textarea);
              c.oninput = Zt, h.onchange = Zt, S.onchange = Zt, F.onchange = Zt, U.oninput = Zt, m.oninput = function() {
                  Zt(), _.value = m.value
              }, m.onchange = function() {
                  Zt(), _.value = m.value
              }
          },
          Ym = function(a) {
              return typeof a == "string" ? document.querySelector(a) : a
          },
          Xm = function(a) {
              var c = W();
              c.setAttribute("role", a.toast ? "alert" : "dialog"), c.setAttribute("aria-live", a.toast ? "polite" : "assertive"), a.toast || c.setAttribute("aria-modal", "true")
          },
          Zm = function(a) {
              window.getComputedStyle(a).direction === "rtl" && $(De(), y.rtl)
          },
          eg = function(a) {
              var c = Qm();
              if (dl()) {
                  Jt("SweetAlert2 requires document to initialize");
                  return
              }
              var h = document.createElement("div");
              h.className = y.container, c && $(h, y["no-transition"]), Fe(h, Gm);
              var m = Ym(a.target);
              m.appendChild(h), Xm(a), Zm(m), Jm()
          },
          vo = function(a, c) {
              a instanceof HTMLElement ? c.appendChild(a) : u(a) === "object" ? tg(a, c) : a && Fe(c, a)
          },
          tg = function(a, c) {
              a.jquery ? ng(c, a) : Fe(c, a.toString())
          },
          ng = function(a, c) {
              if (a.textContent = "", 0 in c)
                  for (var h = 0; h in c; h++) a.appendChild(c[h].cloneNode(!0));
              else a.appendChild(c.cloneNode(!0))
          },
          en = function() {
              if (dl()) return !1;
              var d = document.createElement("div");
              return typeof d.style.webkitAnimation < "u" ? "webkitAnimationEnd" : typeof d.style.animation < "u" ? "animationend" : !1
          }(),
          rg = function(a, c) {
              var h = mr(),
                  m = kn();
              !h || !m || (!c.showConfirmButton && !c.showDenyButton && !c.showCancelButton ? Te(h) : pe(h), He(h, c, "actions"), ig(h, m, c), Fe(m, c.loaderHtml || ""), He(m, c, "loader"))
          };

      function ig(d, a, c) {
          var h = it(),
              m = Yt(),
              _ = Rn();
          !h || !m || !_ || (Eo(h, "confirm", c), Eo(m, "deny", c), Eo(_, "cancel", c), sg(h, m, _, c), c.reverseButtons && (c.toast ? (d.insertBefore(_, h), d.insertBefore(m, h)) : (d.insertBefore(_, a), d.insertBefore(m, a), d.insertBefore(h, a))))
      }

      function sg(d, a, c, h) {
          if (!h.buttonsStyling) {
              st([d, a, c], y.styled);
              return
          }
          $([d, a, c], y.styled), h.confirmButtonColor && (d.style.backgroundColor = h.confirmButtonColor, $(d, y["default-outline"])), h.denyButtonColor && (a.style.backgroundColor = h.denyButtonColor, $(a, y["default-outline"])), h.cancelButtonColor && (c.style.backgroundColor = h.cancelButtonColor, $(c, y["default-outline"]))
      }

      function Eo(d, a, c) {
          var h = lo(a);
          gr(d, c["show".concat(h, "Button")], "inline-block"), Fe(d, c["".concat(a, "ButtonText")] || ""), d.setAttribute("aria-label", c["".concat(a, "ButtonAriaLabel")] || ""), d.className = y[a], He(d, c, "".concat(a, "Button"))
      }
      var og = function(a, c) {
              var h = mo();
              h && (Fe(h, c.closeButtonHtml || ""), He(h, c, "closeButton"), gr(h, c.showCloseButton), h.setAttribute("aria-label", c.closeButtonAriaLabel || ""))
          },
          ag = function(a, c) {
              var h = De();
              h && (cg(h, c.backdrop), lg(h, c.position), ug(h, c.grow), He(h, c, "container"))
          };

      function cg(d, a) {
          typeof a == "string" ? d.style.background = a : a || $([document.documentElement, document.body], y["no-backdrop"])
      }

      function lg(d, a) {
          a && (a in y ? $(d, y[a]) : (Ne('The "position" parameter is not valid, defaulting to "center"'), $(d, y.center)))
      }

      function ug(d, a) {
          a && $(d, y["grow-".concat(a)])
      }
      var Y = {
              innerParams: new WeakMap,
              domCache: new WeakMap
          },
          hg = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
          dg = function(a, c) {
              var h = W();
              if (h) {
                  var m = Y.innerParams.get(a),
                      _ = !m || c.input !== m.input;
                  hg.forEach(function(S) {
                      var F = Vt(h, y[S]);
                      F && (mg(S, c.inputAttributes), F.className = y[S], _ && Te(F))
                  }), c.input && (_ && fg(c), gg(c))
              }
          },
          fg = function(a) {
              if (a.input) {
                  if (!se[a.input]) {
                      Jt("Unexpected type of input! Expected ".concat(Object.keys(se).join(" | "), ', got "').concat(a.input, '"'));
                      return
                  }
                  var c = fl(a.input),
                      h = se[a.input](c, a);
                  pe(c), a.inputAutoFocus && setTimeout(function() {
                      al(h)
                  })
              }
          },
          pg = function(a) {
              for (var c = 0; c < a.attributes.length; c++) {
                  var h = a.attributes[c].name;
                  ["id", "type", "value", "style"].includes(h) || a.removeAttribute(h)
              }
          },
          mg = function(a, c) {
              var h = Pi(W(), a);
              if (h) {
                  pg(h);
                  for (var m in c) h.setAttribute(m, c[m])
              }
          },
          gg = function(a) {
              var c = fl(a.input);
              u(a.customClass) === "object" && $(c, a.customClass.input)
          },
          Io = function(a, c) {
              (!a.placeholder || c.inputPlaceholder) && (a.placeholder = c.inputPlaceholder)
          },
          wr = function(a, c, h) {
              if (h.inputLabel) {
                  var m = document.createElement("label"),
                      _ = y["input-label"];
                  m.setAttribute("for", a.id), m.className = _, u(h.customClass) === "object" && $(m, h.customClass.inputLabel), m.innerText = h.inputLabel, c.insertAdjacentElement("beforebegin", m)
              }
          },
          fl = function(a) {
              return Vt(W(), y[a] || y.input)
          },
          Ci = function(a, c) {
              ["string", "number"].includes(u(c)) ? a.value = "".concat(c) : ho(c) || Ne('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(u(c), '"'))
          },
          se = {};
      se.text = se.email = se.password = se.number = se.tel = se.url = se.search = se.date = se["datetime-local"] = se.time = se.week = se.month = function(d, a) {
          return Ci(d, a.inputValue), wr(d, d, a), Io(d, a), d.type = a.input, d
      }, se.file = function(d, a) {
          return wr(d, d, a), Io(d, a), d
      }, se.range = function(d, a) {
          var c = d.querySelector("input"),
              h = d.querySelector("output");
          return Ci(c, a.inputValue), c.type = a.input, Ci(h, a.inputValue), wr(c, d, a), d
      }, se.select = function(d, a) {
          if (d.textContent = "", a.inputPlaceholder) {
              var c = document.createElement("option");
              Fe(c, a.inputPlaceholder), c.value = "", c.disabled = !0, c.selected = !0, d.appendChild(c)
          }
          return wr(d, d, a), d
      }, se.radio = function(d) {
          return d.textContent = "", d
      }, se.checkbox = function(d, a) {
          var c = Pi(W(), "checkbox");
          c.value = "1", c.checked = !!a.inputValue;
          var h = d.querySelector("span");
          return Fe(h, a.inputPlaceholder), c
      }, se.textarea = function(d, a) {
          Ci(d, a.inputValue), Io(d, a), wr(d, d, a);
          var c = function(m) {
              return parseInt(window.getComputedStyle(m).marginLeft) + parseInt(window.getComputedStyle(m).marginRight)
          };
          return setTimeout(function() {
              if ("MutationObserver" in window) {
                  var h = parseInt(window.getComputedStyle(W()).width),
                      m = function() {
                          if (document.body.contains(d)) {
                              var S = d.offsetWidth + c(d);
                              S > h ? W().style.width = "".concat(S, "px") : Xt(W(), "width", a.width)
                          }
                      };
                  new MutationObserver(m).observe(d, {
                      attributes: !0,
                      attributeFilter: ["style"]
                  })
              }
          }), d
      };
      var wg = function(a, c) {
              var h = fo();
              h && (yo(h), He(h, c, "htmlContainer"), c.html ? (vo(c.html, h), pe(h, "block")) : c.text ? (h.textContent = c.text, pe(h, "block")) : Te(h), dg(a, c))
          },
          yg = function(a, c) {
              var h = ol();
              h && (yo(h), gr(h, c.footer, "block"), c.footer && vo(c.footer, h), He(h, c, "footer"))
          },
          _g = function(a, c) {
              var h = Y.innerParams.get(a),
                  m = pr();
              if (m) {
                  if (h && c.icon === h.icon) {
                      ml(m, c), pl(m, c);
                      return
                  }
                  if (!c.icon && !c.iconHtml) {
                      Te(m);
                      return
                  }
                  if (c.icon && Object.keys(Ii).indexOf(c.icon) === -1) {
                      Jt('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(c.icon, '"')), Te(m);
                      return
                  }
                  pe(m), ml(m, c), pl(m, c), $(m, c.showClass && c.showClass.icon)
              }
          },
          pl = function(a, c) {
              for (var h = 0, m = Object.entries(Ii); h < m.length; h++) {
                  var _ = J(m[h], 2),
                      S = _[0],
                      F = _[1];
                  c.icon !== S && st(a, F)
              }
              $(a, c.icon && Ii[c.icon]), Tg(a, c), vg(), He(a, c, "icon")
          },
          vg = function() {
              var a = W();
              if (a)
                  for (var c = window.getComputedStyle(a).getPropertyValue("background-color"), h = a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), m = 0; m < h.length; m++) h[m].style.backgroundColor = c
          },
          Eg = `
<div class="swal2-success-circular-line-left"></div>
<span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
<div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
<div class="swal2-success-circular-line-right"></div>
`,
          Ig = `
<span class="swal2-x-mark">
  <span class="swal2-x-mark-line-left"></span>
  <span class="swal2-x-mark-line-right"></span>
</span>
`,
          ml = function(a, c) {
              if (!(!c.icon && !c.iconHtml)) {
                  var h = a.innerHTML,
                      m = "";
                  if (c.iconHtml) m = gl(c.iconHtml);
                  else if (c.icon === "success") m = Eg, h = h.replace(/ style=".*?"/g, "");
                  else if (c.icon === "error") m = Ig;
                  else if (c.icon) {
                      var _ = {
                          question: "?",
                          warning: "!",
                          info: "i"
                      };
                      m = gl(_[c.icon])
                  }
                  h.trim() !== m.trim() && Fe(a, m)
              }
          },
          Tg = function(a, c) {
              if (c.iconColor) {
                  a.style.color = c.iconColor, a.style.borderColor = c.iconColor;
                  for (var h = 0, m = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; h < m.length; h++) {
                      var _ = m[h];
                      ll(a, _, "background-color", c.iconColor)
                  }
                  ll(a, ".swal2-success-ring", "border-color", c.iconColor)
              }
          },
          gl = function(a) {
              return '<div class="'.concat(y["icon-content"], '">').concat(a, "</div>")
          },
          bg = function(a, c) {
              var h = sl();
              if (h) {
                  if (!c.imageUrl) {
                      Te(h);
                      return
                  }
                  pe(h, ""), h.setAttribute("src", c.imageUrl), h.setAttribute("alt", c.imageAlt || ""), Xt(h, "width", c.imageWidth), Xt(h, "height", c.imageHeight), h.className = y.image, He(h, c, "image")
              }
          },
          Ag = function(a, c) {
              var h = De(),
                  m = W();
              if (!(!h || !m)) {
                  if (c.toast) {
                      Xt(h, "width", c.width), m.style.width = "100%";
                      var _ = kn();
                      _ && m.insertBefore(_, pr())
                  } else Xt(m, "width", c.width);
                  Xt(m, "padding", c.padding), c.color && (m.style.color = c.color), c.background && (m.style.background = c.background), Te(bi()), Sg(m, c)
              }
          },
          Sg = function(a, c) {
              var h = c.showClass || {};
              a.className = "".concat(y.popup, " ").concat(Ue(a) ? h.popup : ""), c.toast ? ($([document.documentElement, document.body], y["toast-shown"]), $(a, y.toast)) : $(a, y.modal), He(a, c, "popup"), typeof c.customClass == "string" && $(a, c.customClass), c.icon && $(a, y["icon-".concat(c.icon)])
          },
          Pg = function(a, c) {
              var h = po();
              if (h) {
                  var m = c.progressSteps,
                      _ = c.currentProgressStep;
                  if (!m || m.length === 0 || _ === void 0) {
                      Te(h);
                      return
                  }
                  pe(h), h.textContent = "", _ >= m.length && Ne("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), m.forEach(function(S, F) {
                      var U = Cg(S);
                      if (h.appendChild(U), F === _ && $(U, y["active-progress-step"]), F !== m.length - 1) {
                          var ne = Rg(c);
                          h.appendChild(ne)
                      }
                  })
              }
          },
          Cg = function(a) {
              var c = document.createElement("li");
              return $(c, y["progress-step"]), Fe(c, a), c
          },
          Rg = function(a) {
              var c = document.createElement("li");
              return $(c, y["progress-step-line"]), a.progressStepsDistance && Xt(c, "width", a.progressStepsDistance), c
          },
          kg = function(a, c) {
              var h = il();
              h && (yo(h), gr(h, c.title || c.titleText, "block"), c.title && vo(c.title, h), c.titleText && (h.innerText = c.titleText), He(h, c, "title"))
          },
          wl = function(a, c) {
              Ag(a, c), ag(a, c), Pg(a, c), _g(a, c), bg(a, c), kg(a, c), og(a, c), wg(a, c), rg(a, c), yg(a, c);
              var h = W();
              typeof c.didRender == "function" && h && c.didRender(h)
          },
          Dg = function() {
              return Ue(W())
          },
          yl = function() {
              var a;
              return (a = it()) === null || a === void 0 ? void 0 : a.click()
          },
          Vg = function() {
              var a;
              return (a = Yt()) === null || a === void 0 ? void 0 : a.click()
          },
          Og = function() {
              var a;
              return (a = Rn()) === null || a === void 0 ? void 0 : a.click()
          },
          Dn = Object.freeze({
              cancel: "cancel",
              backdrop: "backdrop",
              close: "close",
              esc: "esc",
              timer: "timer"
          }),
          _l = function(a) {
              a.keydownTarget && a.keydownHandlerAdded && (a.keydownTarget.removeEventListener("keydown", a.keydownHandler, {
                  capture: a.keydownListenerCapture
              }), a.keydownHandlerAdded = !1)
          },
          Ng = function(a, c, h) {
              _l(a), c.toast || (a.keydownHandler = function(m) {
                  return Lg(c, m, h)
              }, a.keydownTarget = c.keydownListenerCapture ? window : W(), a.keydownListenerCapture = c.keydownListenerCapture, a.keydownTarget.addEventListener("keydown", a.keydownHandler, {
                  capture: a.keydownListenerCapture
              }), a.keydownHandlerAdded = !0)
          },
          To = function(a, c) {
              var h, m = go();
              if (m.length) {
                  a = a + c, a === m.length ? a = 0 : a === -1 && (a = m.length - 1), m[a].focus();
                  return
              }(h = W()) === null || h === void 0 || h.focus()
          },
          vl = ["ArrowRight", "ArrowDown"],
          xg = ["ArrowLeft", "ArrowUp"],
          Lg = function(a, c, h) {
              a && (c.isComposing || c.keyCode === 229 || (a.stopKeydownPropagation && c.stopPropagation(), c.key === "Enter" ? Mg(c, a) : c.key === "Tab" ? Fg(c) : [].concat(vl, xg).includes(c.key) ? Ug(c.key) : c.key === "Escape" && Bg(c, a, h)))
          },
          Mg = function(a, c) {
              if (Ti(c.allowEnterKey)) {
                  var h = Pi(W(), c.input);
                  if (a.target && h && a.target instanceof HTMLElement && a.target.outerHTML === h.outerHTML) {
                      if (["textarea", "file"].includes(c.input)) return;
                      yl(), a.preventDefault()
                  }
              }
          },
          Fg = function(a) {
              for (var c = a.target, h = go(), m = -1, _ = 0; _ < h.length; _++)
                  if (c === h[_]) {
                      m = _;
                      break
                  } a.shiftKey ? To(m, -1) : To(m, 1), a.stopPropagation(), a.preventDefault()
          },
          Ug = function(a) {
              var c = mr(),
                  h = it(),
                  m = Yt(),
                  _ = Rn();
              if (!(!c || !h || !m || !_)) {
                  var S = [h, m, _];
                  if (!(document.activeElement instanceof HTMLElement && !S.includes(document.activeElement))) {
                      var F = vl.includes(a) ? "nextElementSibling" : "previousElementSibling",
                          U = document.activeElement;
                      if (U) {
                          for (var ne = 0; ne < c.children.length; ne++) {
                              if (U = U[F], !U) return;
                              if (U instanceof HTMLButtonElement && Ue(U)) break
                          }
                          U instanceof HTMLButtonElement && U.focus()
                      }
                  }
              }
          },
          Bg = function(a, c, h) {
              Ti(c.allowEscapeKey) && (a.preventDefault(), h(Dn.esc))
          },
          Vn = {
              swalPromiseResolve: new WeakMap,
              swalPromiseReject: new WeakMap
          },
          jg = function() {
              var a = Array.from(document.body.children);
              a.forEach(function(c) {
                  c === De() || c.contains(De()) || (c.hasAttribute("aria-hidden") && c.setAttribute("data-previous-aria-hidden", c.getAttribute("aria-hidden") || ""), c.setAttribute("aria-hidden", "true"))
              })
          },
          El = function() {
              var a = Array.from(document.body.children);
              a.forEach(function(c) {
                  c.hasAttribute("data-previous-aria-hidden") ? (c.setAttribute("aria-hidden", c.getAttribute("data-previous-aria-hidden") || ""), c.removeAttribute("data-previous-aria-hidden")) : c.removeAttribute("aria-hidden")
              })
          },
          Il = typeof window < "u" && !!window.GestureEvent,
          qg = function() {
              if (Il && !vt(document.body, y.iosfix)) {
                  var a = document.body.scrollTop;
                  document.body.style.top = "".concat(a * -1, "px"), $(document.body, y.iosfix), $g()
              }
          },
          $g = function() {
              var a = De();
              if (a) {
                  var c;
                  a.ontouchstart = function(h) {
                      c = zg(h)
                  }, a.ontouchmove = function(h) {
                      c && (h.preventDefault(), h.stopPropagation())
                  }
              }
          },
          zg = function(a) {
              var c = a.target,
                  h = De(),
                  m = fo();
              return !h || !m || Hg(a) || Wg(a) ? !1 : c === h || !ul(h) && c instanceof HTMLElement && c.tagName !== "INPUT" && c.tagName !== "TEXTAREA" && !(ul(m) && m.contains(c))
          },
          Hg = function(a) {
              return a.touches && a.touches.length && a.touches[0].touchType === "stylus"
          },
          Wg = function(a) {
              return a.touches && a.touches.length > 1
          },
          Kg = function() {
              if (vt(document.body, y.iosfix)) {
                  var a = parseInt(document.body.style.top, 10);
                  st(document.body, y.iosfix), document.body.style.top = "", document.body.scrollTop = a * -1
              }
          },
          Gg = function() {
              var a = document.createElement("div");
              a.className = y["scrollbar-measure"], document.body.appendChild(a);
              var c = a.getBoundingClientRect().width - a.clientWidth;
              return document.body.removeChild(a), c
          },
          On = null,
          Qg = function(a) {
              On === null && (document.body.scrollHeight > window.innerHeight || a === "scroll") && (On = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(On + Gg(), "px"))
          },
          Jg = function() {
              On !== null && (document.body.style.paddingRight = "".concat(On, "px"), On = null)
          };

      function Tl(d, a, c, h) {
          Si() ? Al(d, h) : (Lm(c).then(function() {
              return Al(d, h)
          }), _l(M)), Il ? (a.setAttribute("style", "display:none !important"), a.removeAttribute("class"), a.innerHTML = "") : a.remove(), wo() && (Jg(), Kg(), El()), Yg()
      }

      function Yg() {
          st([document.documentElement, document.body], [y.shown, y["height-auto"], y["no-backdrop"], y["toast-shown"]])
      }

      function Ot(d) {
          d = Zg(d);
          var a = Vn.swalPromiseResolve.get(this),
              c = Xg(this);
          this.isAwaitingPromise ? d.isDismissed || (yr(this), a(d)) : c && a(d)
      }
      var Xg = function(a) {
          var c = W();
          if (!c) return !1;
          var h = Y.innerParams.get(a);
          if (!h || vt(c, h.hideClass.popup)) return !1;
          st(c, h.showClass.popup), $(c, h.hideClass.popup);
          var m = De();
          return st(m, h.showClass.backdrop), $(m, h.hideClass.backdrop), ew(a, c, h), !0
      };

      function bl(d) {
          var a = Vn.swalPromiseReject.get(this);
          yr(this), a && a(d)
      }
      var yr = function(a) {
              a.isAwaitingPromise && (delete a.isAwaitingPromise, Y.innerParams.get(a) || a._destroy())
          },
          Zg = function(a) {
              return typeof a > "u" ? {
                  isConfirmed: !1,
                  isDenied: !1,
                  isDismissed: !0
              } : Object.assign({
                  isConfirmed: !1,
                  isDenied: !1,
                  isDismissed: !1
              }, a)
          },
          ew = function(a, c, h) {
              var m = De(),
                  _ = en && hl(c);
              typeof h.willClose == "function" && h.willClose(c), _ ? tw(a, c, m, h.returnFocus, h.didClose) : Tl(a, m, h.returnFocus, h.didClose)
          },
          tw = function(a, c, h, m, _) {
              en && (M.swalCloseEventFinishedCallback = Tl.bind(null, a, h, m, _), c.addEventListener(en, function(S) {
                  S.target === c && (M.swalCloseEventFinishedCallback(), delete M.swalCloseEventFinishedCallback)
              }))
          },
          Al = function(a, c) {
              setTimeout(function() {
                  typeof c == "function" && c.bind(a.params)(), a._destroy && a._destroy()
              })
          },
          Nn = function(a) {
              var c = W();
              if (c || new Oi, c = W(), !!c) {
                  var h = kn();
                  Si() ? Te(pr()) : nw(c, a), pe(h), c.setAttribute("data-loading", "true"), c.setAttribute("aria-busy", "true"), c.focus()
              }
          },
          nw = function(a, c) {
              var h = mr(),
                  m = kn();
              !h || !m || (!c && Ue(it()) && (c = it()), pe(h), c && (Te(c), m.setAttribute("data-button-to-replace", c.className), h.insertBefore(m, c)), $([a, h], y.loading))
          },
          rw = function(a, c) {
              c.input === "select" || c.input === "radio" ? cw(a, c) : ["text", "email", "number", "tel", "textarea"].some(function(h) {
                  return h === c.input
              }) && (uo(c.inputValue) || ho(c.inputValue)) && (Nn(it()), lw(a, c))
          },
          iw = function(a, c) {
              var h = a.getInput();
              if (!h) return null;
              switch (c.input) {
                  case "checkbox":
                      return sw(h);
                  case "radio":
                      return ow(h);
                  case "file":
                      return aw(h);
                  default:
                      return c.inputAutoTrim ? h.value.trim() : h.value
              }
          },
          sw = function(a) {
              return a.checked ? 1 : 0
          },
          ow = function(a) {
              return a.checked ? a.value : null
          },
          aw = function(a) {
              return a.files && a.files.length ? a.getAttribute("multiple") !== null ? a.files : a.files[0] : null
          },
          cw = function(a, c) {
              var h = W();
              if (h) {
                  var m = function(S) {
                      c.input === "select" ? uw(h, Sl(S), c) : c.input === "radio" && hw(h, Sl(S), c)
                  };
                  uo(c.inputOptions) || ho(c.inputOptions) ? (Nn(it()), dr(c.inputOptions).then(function(_) {
                      a.hideLoading(), m(_)
                  })) : u(c.inputOptions) === "object" ? m(c.inputOptions) : Jt("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(u(c.inputOptions)))
              }
          },
          lw = function(a, c) {
              var h = a.getInput();
              h && (Te(h), dr(c.inputValue).then(function(m) {
                  h.value = c.input === "number" ? "".concat(parseFloat(m) || 0) : "".concat(m), pe(h), h.focus(), a.hideLoading()
              }).catch(function(m) {
                  Jt("Error in inputValue promise: ".concat(m)), h.value = "", pe(h), h.focus(), a.hideLoading()
              }))
          };

      function uw(d, a, c) {
          var h = Vt(d, y.select);
          if (h) {
              var m = function(S, F, U) {
                  var ne = document.createElement("option");
                  ne.value = U, Fe(ne, F), ne.selected = Pl(U, c.inputValue), S.appendChild(ne)
              };
              a.forEach(function(_) {
                  var S = _[0],
                      F = _[1];
                  if (Array.isArray(F)) {
                      var U = document.createElement("optgroup");
                      U.label = S, U.disabled = !1, h.appendChild(U), F.forEach(function(ne) {
                          return m(U, ne[1], ne[0])
                      })
                  } else m(h, F, S)
              }), h.focus()
          }
      }

      function hw(d, a, c) {
          var h = Vt(d, y.radio);
          if (h) {
              a.forEach(function(_) {
                  var S = _[0],
                      F = _[1],
                      U = document.createElement("input"),
                      ne = document.createElement("label");
                  U.type = "radio", U.name = y.radio, U.value = S, Pl(S, c.inputValue) && (U.checked = !0);
                  var _r = document.createElement("span");
                  Fe(_r, F), _r.className = y.label, ne.appendChild(U), ne.appendChild(_r), h.appendChild(ne)
              });
              var m = h.querySelectorAll("input");
              m.length && m[0].focus()
          }
      }
      var Sl = function d(a) {
              var c = [];
              return a instanceof Map ? a.forEach(function(h, m) {
                  var _ = h;
                  u(_) === "object" && (_ = d(_)), c.push([m, _])
              }) : Object.keys(a).forEach(function(h) {
                  var m = a[h];
                  u(m) === "object" && (m = d(m)), c.push([h, m])
              }), c
          },
          Pl = function(a, c) {
              return !!c && c.toString() === a.toString()
          },
          Ri = void 0,
          dw = function(a) {
              var c = Y.innerParams.get(a);
              a.disableButtons(), c.input ? Cl(a, "confirm") : Ao(a, !0)
          },
          fw = function(a) {
              var c = Y.innerParams.get(a);
              a.disableButtons(), c.returnInputValueOnDeny ? Cl(a, "deny") : bo(a, !1)
          },
          pw = function(a, c) {
              a.disableButtons(), c(Dn.cancel)
          },
          Cl = function(a, c) {
              var h = Y.innerParams.get(a);
              if (!h.input) {
                  Jt('The "input" parameter is needed to be set when using returnInputValueOn'.concat(lo(c)));
                  return
              }
              var m = a.getInput(),
                  _ = iw(a, h);
              h.inputValidator ? mw(a, _, c) : m && !m.checkValidity() ? (a.enableButtons(), a.showValidationMessage(h.validationMessage || m.validationMessage)) : c === "deny" ? bo(a, _) : Ao(a, _)
          },
          mw = function(a, c, h) {
              var m = Y.innerParams.get(a);
              a.disableInput();
              var _ = Promise.resolve().then(function() {
                  return dr(m.inputValidator(c, m.validationMessage))
              });
              _.then(function(S) {
                  a.enableButtons(), a.enableInput(), S ? a.showValidationMessage(S) : h === "deny" ? bo(a, c) : Ao(a, c)
              })
          },
          bo = function(a, c) {
              var h = Y.innerParams.get(a || Ri);
              if (h.showLoaderOnDeny && Nn(Yt()), h.preDeny) {
                  a.isAwaitingPromise = !0;
                  var m = Promise.resolve().then(function() {
                      return dr(h.preDeny(c, h.validationMessage))
                  });
                  m.then(function(_) {
                      _ === !1 ? (a.hideLoading(), yr(a)) : a.close({
                          isDenied: !0,
                          value: typeof _ > "u" ? c : _
                      })
                  }).catch(function(_) {
                      return kl(a || Ri, _)
                  })
              } else a.close({
                  isDenied: !0,
                  value: c
              })
          },
          Rl = function(a, c) {
              a.close({
                  isConfirmed: !0,
                  value: c
              })
          },
          kl = function(a, c) {
              a.rejectPromise(c)
          },
          Ao = function(a, c) {
              var h = Y.innerParams.get(a || Ri);
              if (h.showLoaderOnConfirm && Nn(), h.preConfirm) {
                  a.resetValidationMessage(), a.isAwaitingPromise = !0;
                  var m = Promise.resolve().then(function() {
                      return dr(h.preConfirm(c, h.validationMessage))
                  });
                  m.then(function(_) {
                      Ue(bi()) || _ === !1 ? (a.hideLoading(), yr(a)) : Rl(a, typeof _ > "u" ? c : _)
                  }).catch(function(_) {
                      return kl(a || Ri, _)
                  })
              } else Rl(a, c)
          };

      function ki() {
          var d = Y.innerParams.get(this);
          if (d) {
              var a = Y.domCache.get(this);
              Te(a.loader), Si() ? d.icon && pe(pr()) : gw(a), st([a.popup, a.actions], y.loading), a.popup.removeAttribute("aria-busy"), a.popup.removeAttribute("data-loading"), a.confirmButton.disabled = !1, a.denyButton.disabled = !1, a.cancelButton.disabled = !1
          }
      }
      var gw = function(a) {
          var c = a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));
          c.length ? pe(c[0], "inline-block") : Wm() && Te(a.actions)
      };

      function Dl() {
          var d = Y.innerParams.get(this),
              a = Y.domCache.get(this);
          return a ? Pi(a.popup, d.input) : null
      }

      function Vl(d, a, c) {
          var h = Y.domCache.get(d);
          a.forEach(function(m) {
              h[m].disabled = c
          })
      }

      function Ol(d, a) {
          var c = W();
          if (!(!c || !d))
              if (d.type === "radio")
                  for (var h = c.querySelectorAll('[name="'.concat(y.radio, '"]')), m = 0; m < h.length; m++) h[m].disabled = a;
              else d.disabled = a
      }

      function Nl() {
          Vl(this, ["confirmButton", "denyButton", "cancelButton"], !1)
      }

      function xl() {
          Vl(this, ["confirmButton", "denyButton", "cancelButton"], !0)
      }

      function Ll() {
          Ol(this.getInput(), !1)
      }

      function Ml() {
          Ol(this.getInput(), !0)
      }

      function Fl(d) {
          var a = Y.domCache.get(this),
              c = Y.innerParams.get(this);
          Fe(a.validationMessage, d), a.validationMessage.className = y["validation-message"], c.customClass && c.customClass.validationMessage && $(a.validationMessage, c.customClass.validationMessage), pe(a.validationMessage);
          var h = this.getInput();
          h && (h.setAttribute("aria-invalid", "true"), h.setAttribute("aria-describedby", y["validation-message"]), al(h), $(h, y.inputerror))
      }

      function Ul() {
          var d = Y.domCache.get(this);
          d.validationMessage && Te(d.validationMessage);
          var a = this.getInput();
          a && (a.removeAttribute("aria-invalid"), a.removeAttribute("aria-describedby"), st(a, y.inputerror))
      }
      var xn = {
              title: "",
              titleText: "",
              text: "",
              html: "",
              footer: "",
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              animation: !0,
              showClass: {
                  popup: "swal2-show",
                  backdrop: "swal2-backdrop-show",
                  icon: "swal2-icon-show"
              },
              hideClass: {
                  popup: "swal2-hide",
                  backdrop: "swal2-backdrop-hide",
                  icon: "swal2-icon-hide"
              },
              customClass: {},
              target: "body",
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: "OK",
              confirmButtonAriaLabel: "",
              confirmButtonColor: void 0,
              denyButtonText: "No",
              denyButtonAriaLabel: "",
              denyButtonColor: void 0,
              cancelButtonText: "Cancel",
              cancelButtonAriaLabel: "",
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: "&times;",
              closeButtonAriaLabel: "Close this dialog",
              loaderHtml: "",
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: "",
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: "",
              inputLabel: "",
              inputValue: "",
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: "center",
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0
          },
          ww = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
          yw = {},
          _w = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
          Bl = function(a) {
              return Object.prototype.hasOwnProperty.call(xn, a)
          },
          jl = function(a) {
              return ww.indexOf(a) !== -1
          },
          ql = function(a) {
              return yw[a]
          },
          vw = function(a) {
              Bl(a) || Ne('Unknown parameter "'.concat(a, '"'))
          },
          Ew = function(a) {
              _w.includes(a) && Ne('The parameter "'.concat(a, '" is incompatible with toasts'))
          },
          Iw = function(a) {
              var c = ql(a);
              c && Bm(a, c)
          },
          Tw = function(a) {
              a.backdrop === !1 && a.allowOutsideClick && Ne('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
              for (var c in a) vw(c), a.toast && Ew(c), Iw(c)
          };

      function $l(d) {
          var a = W(),
              c = Y.innerParams.get(this);
          if (!a || vt(a, c.hideClass.popup)) {
              Ne("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
              return
          }
          var h = bw(d),
              m = Object.assign({}, c, h);
          wl(this, m), Y.innerParams.set(this, m), Object.defineProperties(this, {
              params: {
                  value: Object.assign({}, this.params, d),
                  writable: !1,
                  enumerable: !0
              }
          })
      }
      var bw = function(a) {
          var c = {};
          return Object.keys(a).forEach(function(h) {
              jl(h) ? c[h] = a[h] : Ne("Invalid parameter to update: ".concat(h))
          }), c
      };

      function zl() {
          var d = Y.domCache.get(this),
              a = Y.innerParams.get(this);
          if (!a) {
              Hl(this);
              return
          }
          d.popup && M.swalCloseEventFinishedCallback && (M.swalCloseEventFinishedCallback(), delete M.swalCloseEventFinishedCallback), typeof a.didDestroy == "function" && a.didDestroy(), Aw(this)
      }
      var Aw = function(a) {
              Hl(a), delete a.params, delete M.keydownHandler, delete M.keydownTarget, delete M.currentInstance
          },
          Hl = function(a) {
              a.isAwaitingPromise ? (So(Y, a), a.isAwaitingPromise = !0) : (So(Vn, a), So(Y, a), delete a.isAwaitingPromise, delete a.disableButtons, delete a.enableButtons, delete a.getInput, delete a.disableInput, delete a.enableInput, delete a.hideLoading, delete a.disableLoading, delete a.showValidationMessage, delete a.resetValidationMessage, delete a.close, delete a.closePopup, delete a.closeModal, delete a.closeToast, delete a.rejectPromise, delete a.update, delete a._destroy)
          },
          So = function(a, c) {
              for (var h in a) a[h].delete(c)
          },
          Sw = Object.freeze({
              __proto__: null,
              _destroy: zl,
              close: Ot,
              closeModal: Ot,
              closePopup: Ot,
              closeToast: Ot,
              disableButtons: xl,
              disableInput: Ml,
              disableLoading: ki,
              enableButtons: Nl,
              enableInput: Ll,
              getInput: Dl,
              handleAwaitingPromise: yr,
              hideLoading: ki,
              rejectPromise: bl,
              resetValidationMessage: Ul,
              showValidationMessage: Fl,
              update: $l
          }),
          Pw = function(a, c, h) {
              a.toast ? Cw(a, c, h) : (kw(c), Dw(c), Vw(a, c, h))
          },
          Cw = function(a, c, h) {
              c.popup.onclick = function() {
                  a && (Rw(a) || a.timer || a.input) || h(Dn.close)
              }
          },
          Rw = function(a) {
              return !!(a.showConfirmButton || a.showDenyButton || a.showCancelButton || a.showCloseButton)
          },
          Di = !1,
          kw = function(a) {
              a.popup.onmousedown = function() {
                  a.container.onmouseup = function(c) {
                      a.container.onmouseup = function() {}, c.target === a.container && (Di = !0)
                  }
              }
          },
          Dw = function(a) {
              a.container.onmousedown = function() {
                  a.popup.onmouseup = function(c) {
                      a.popup.onmouseup = function() {}, (c.target === a.popup || c.target instanceof HTMLElement && a.popup.contains(c.target)) && (Di = !0)
                  }
              }
          },
          Vw = function(a, c, h) {
              c.container.onclick = function(m) {
                  if (Di) {
                      Di = !1;
                      return
                  }
                  m.target === c.container && Ti(a.allowOutsideClick) && h(Dn.backdrop)
              }
          },
          Ow = function(a) {
              return u(a) === "object" && a.jquery
          },
          Wl = function(a) {
              return a instanceof Element || Ow(a)
          },
          Nw = function(a) {
              var c = {};
              return u(a[0]) === "object" && !Wl(a[0]) ? Object.assign(c, a[0]) : ["title", "html", "icon"].forEach(function(h, m) {
                  var _ = a[m];
                  typeof _ == "string" || Wl(_) ? c[h] = _ : _ !== void 0 && Jt("Unexpected type of ".concat(h, '! Expected "string" or "Element", got ').concat(u(_)))
              }), c
          };

      function xw() {
          for (var d = this, a = arguments.length, c = new Array(a), h = 0; h < a; h++) c[h] = arguments[h];
          return r(d, c)
      }

      function Lw(d) {
          var a = function(c) {
              w(h, c);

              function h() {
                  return f(this, h), n(this, h, arguments)
              }
              return g(h, [{
                  key: "_main",
                  value: function(_, S) {
                      return G(v(h.prototype), "_main", this).call(this, _, Object.assign({}, d, S))
                  }
              }]), h
          }(this);
          return a
      }
      var Mw = function() {
              return M.timeout && M.timeout.getTimerLeft()
          },
          Kl = function() {
              if (M.timeout) return Km(), M.timeout.stop()
          },
          Gl = function() {
              if (M.timeout) {
                  var a = M.timeout.start();
                  return _o(a), a
              }
          },
          Fw = function() {
              var a = M.timeout;
              return a && (a.running ? Kl() : Gl())
          },
          Uw = function(a) {
              if (M.timeout) {
                  var c = M.timeout.increase(a);
                  return _o(c, !0), c
              }
          },
          Bw = function() {
              return !!(M.timeout && M.timeout.isRunning())
          },
          Ql = !1,
          Po = {};

      function jw() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
          Po[d] = this, Ql || (document.body.addEventListener("click", qw), Ql = !0)
      }
      var qw = function(a) {
              for (var c = a.target; c && c !== document; c = c.parentNode)
                  for (var h in Po) {
                      var m = c.getAttribute(h);
                      if (m) {
                          Po[h].fire({
                              template: m
                          });
                          return
                      }
                  }
          },
          $w = Object.freeze({
              __proto__: null,
              argsToParams: Nw,
              bindClickHandler: jw,
              clickCancel: Og,
              clickConfirm: yl,
              clickDeny: Vg,
              enableLoading: Nn,
              fire: xw,
              getActions: mr,
              getCancelButton: Rn,
              getCloseButton: mo,
              getConfirmButton: it,
              getContainer: De,
              getDenyButton: Yt,
              getFocusableElements: go,
              getFooter: ol,
              getHtmlContainer: fo,
              getIcon: pr,
              getIconContent: jm,
              getImage: sl,
              getInputLabel: qm,
              getLoader: kn,
              getPopup: W,
              getProgressSteps: po,
              getTimerLeft: Mw,
              getTimerProgressBar: Ai,
              getTitle: il,
              getValidationMessage: bi,
              increaseTimer: Uw,
              isDeprecatedParameter: ql,
              isLoading: zm,
              isTimerRunning: Bw,
              isUpdatableParameter: jl,
              isValidParameter: Bl,
              isVisible: Dg,
              mixin: Lw,
              resumeTimer: Gl,
              showLoading: Nn,
              stopTimer: Kl,
              toggleTimer: Fw
          }),
          zw = function() {
              function d(a, c) {
                  f(this, d), this.callback = a, this.remaining = c, this.running = !1, this.start()
              }
              return g(d, [{
                  key: "start",
                  value: function() {
                      return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
                  }
              }, {
                  key: "stop",
                  value: function() {
                      return this.started && this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
                  }
              }, {
                  key: "increase",
                  value: function(c) {
                      var h = this.running;
                      return h && this.stop(), this.remaining += c, h && this.start(), this.remaining
                  }
              }, {
                  key: "getTimerLeft",
                  value: function() {
                      return this.running && (this.stop(), this.start()), this.remaining
                  }
              }, {
                  key: "isRunning",
                  value: function() {
                      return this.running
                  }
              }]), d
          }(),
          Jl = ["swal-title", "swal-html", "swal-footer"],
          Hw = function(a) {
              var c = typeof a.template == "string" ? document.querySelector(a.template) : a.template;
              if (!c) return {};
              var h = c.content;
              Zw(h);
              var m = Object.assign(Ww(h), Kw(h), Gw(h), Qw(h), Jw(h), Yw(h), Xw(h, Jl));
              return m
          },
          Ww = function(a) {
              var c = {},
                  h = Array.from(a.querySelectorAll("swal-param"));
              return h.forEach(function(m) {
                  tn(m, ["name", "value"]);
                  var _ = m.getAttribute("name"),
                      S = m.getAttribute("value");
                  typeof xn[_] == "boolean" ? c[_] = S !== "false" : u(xn[_]) === "object" ? c[_] = JSON.parse(S) : c[_] = S
              }), c
          },
          Kw = function(a) {
              var c = {},
                  h = Array.from(a.querySelectorAll("swal-function-param"));
              return h.forEach(function(m) {
                  var _ = m.getAttribute("name"),
                      S = m.getAttribute("value");
                  c[_] = new Function("return ".concat(S))()
              }), c
          },
          Gw = function(a) {
              var c = {},
                  h = Array.from(a.querySelectorAll("swal-button"));
              return h.forEach(function(m) {
                  tn(m, ["type", "color", "aria-label"]);
                  var _ = m.getAttribute("type");
                  c["".concat(_, "ButtonText")] = m.innerHTML, c["show".concat(lo(_), "Button")] = !0, m.hasAttribute("color") && (c["".concat(_, "ButtonColor")] = m.getAttribute("color")), m.hasAttribute("aria-label") && (c["".concat(_, "ButtonAriaLabel")] = m.getAttribute("aria-label"))
              }), c
          },
          Qw = function(a) {
              var c = {},
                  h = a.querySelector("swal-image");
              return h && (tn(h, ["src", "width", "height", "alt"]), h.hasAttribute("src") && (c.imageUrl = h.getAttribute("src")), h.hasAttribute("width") && (c.imageWidth = h.getAttribute("width")), h.hasAttribute("height") && (c.imageHeight = h.getAttribute("height")), h.hasAttribute("alt") && (c.imageAlt = h.getAttribute("alt"))), c
          },
          Jw = function(a) {
              var c = {},
                  h = a.querySelector("swal-icon");
              return h && (tn(h, ["type", "color"]), h.hasAttribute("type") && (c.icon = h.getAttribute("type")), h.hasAttribute("color") && (c.iconColor = h.getAttribute("color")), c.iconHtml = h.innerHTML), c
          },
          Yw = function(a) {
              var c = {},
                  h = a.querySelector("swal-input");
              h && (tn(h, ["type", "label", "placeholder", "value"]), c.input = h.getAttribute("type") || "text", h.hasAttribute("label") && (c.inputLabel = h.getAttribute("label")), h.hasAttribute("placeholder") && (c.inputPlaceholder = h.getAttribute("placeholder")), h.hasAttribute("value") && (c.inputValue = h.getAttribute("value")));
              var m = Array.from(a.querySelectorAll("swal-input-option"));
              return m.length && (c.inputOptions = {}, m.forEach(function(_) {
                  tn(_, ["value"]);
                  var S = _.getAttribute("value"),
                      F = _.innerHTML;
                  c.inputOptions[S] = F
              })), c
          },
          Xw = function(a, c) {
              var h = {};
              for (var m in c) {
                  var _ = c[m],
                      S = a.querySelector(_);
                  S && (tn(S, []), h[_.replace(/^swal-/, "")] = S.innerHTML.trim())
              }
              return h
          },
          Zw = function(a) {
              var c = Jl.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
              Array.from(a.children).forEach(function(h) {
                  var m = h.tagName.toLowerCase();
                  c.includes(m) || Ne("Unrecognized element <".concat(m, ">"))
              })
          },
          tn = function(a, c) {
              Array.from(a.attributes).forEach(function(h) {
                  c.indexOf(h.name) === -1 && Ne(['Unrecognized attribute "'.concat(h.name, '" on <').concat(a.tagName.toLowerCase(), ">."), "".concat(c.length ? "Allowed attributes are: ".concat(c.join(", ")) : "To set the value, use HTML within the element.")])
              })
          },
          Yl = 10,
          ey = function(a) {
              var c = De(),
                  h = W();
              typeof a.willOpen == "function" && a.willOpen(h);
              var m = window.getComputedStyle(document.body),
                  _ = m.overflowY;
              iy(c, h, a), setTimeout(function() {
                  ny(c, h)
              }, Yl), wo() && (ry(c, a.scrollbarPadding, _), jg()), !Si() && !M.previousActiveElement && (M.previousActiveElement = document.activeElement), typeof a.didOpen == "function" && setTimeout(function() {
                  return a.didOpen(h)
              }), st(c, y["no-transition"])
          },
          ty = function d(a) {
              var c = W();
              if (!(a.target !== c || !en)) {
                  var h = De();
                  c.removeEventListener(en, d), h.style.overflowY = "auto"
              }
          },
          ny = function(a, c) {
              en && hl(c) ? (a.style.overflowY = "hidden", c.addEventListener(en, ty)) : a.style.overflowY = "auto"
          },
          ry = function(a, c, h) {
              qg(), c && h !== "hidden" && Qg(h), setTimeout(function() {
                  a.scrollTop = 0
              })
          },
          iy = function(a, c, h) {
              $(a, h.showClass.backdrop), h.animation ? (c.style.setProperty("opacity", "0", "important"), pe(c, "grid"), setTimeout(function() {
                  $(c, h.showClass.popup), c.style.removeProperty("opacity")
              }, Yl)) : pe(c, "grid"), $([document.documentElement, document.body], y.shown), h.heightAuto && h.backdrop && !h.toast && $([document.documentElement, document.body], y["height-auto"])
          },
          Xl = {
              email: function(a, c) {
                  return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a) ? Promise.resolve() : Promise.resolve(c || "Invalid email address")
              },
              url: function(a, c) {
                  return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a) ? Promise.resolve() : Promise.resolve(c || "Invalid URL")
              }
          };

      function sy(d) {
          d.inputValidator || (d.input === "email" && (d.inputValidator = Xl.email), d.input === "url" && (d.inputValidator = Xl.url))
      }

      function oy(d) {
          (!d.target || typeof d.target == "string" && !document.querySelector(d.target) || typeof d.target != "string" && !d.target.appendChild) && (Ne('Target parameter is not valid, defaulting to "body"'), d.target = "body")
      }

      function ay(d) {
          sy(d), d.showLoaderOnConfirm && !d.preConfirm && Ne(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), oy(d), typeof d.title == "string" && (d.title = d.title.split(`
`).join("<br />")), eg(d)
      }
      var ot, Vi = new WeakMap,
          oe = function() {
              function d() {
                  if (f(this, d), Om(this, Vi, {
                          writable: !0,
                          value: void 0
                      }), !(typeof window > "u")) {
                      ot = this;
                      for (var a = arguments.length, c = new Array(a), h = 0; h < a; h++) c[h] = arguments[h];
                      var m = Object.freeze(this.constructor.argsToParams(c));
                      this.params = m, this.isAwaitingPromise = !1, Rm(this, Vi, this._main(ot.params))
                  }
              }
              return g(d, [{
                  key: "_main",
                  value: function(c) {
                      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                      if (Tw(Object.assign({}, h, c)), M.currentInstance) {
                          var m = Vn.swalPromiseResolve.get(M.currentInstance),
                              _ = M.currentInstance.isAwaitingPromise;
                          M.currentInstance._destroy(), _ || m({
                              isDismissed: !0
                          }), wo() && El()
                      }
                      M.currentInstance = ot;
                      var S = ly(c, h);
                      ay(S), Object.freeze(S), M.timeout && (M.timeout.stop(), delete M.timeout), clearTimeout(M.restoreFocusTimeout);
                      var F = uy(ot);
                      return wl(ot, S), Y.innerParams.set(ot, S), cy(ot, F, S)
                  }
              }, {
                  key: "then",
                  value: function(c) {
                      return Zc(this, Vi).then(c)
                  }
              }, {
                  key: "finally",
                  value: function(c) {
                      return Zc(this, Vi).finally(c)
                  }
              }]), d
          }(),
          cy = function(a, c, h) {
              return new Promise(function(m, _) {
                  var S = function(U) {
                      a.close({
                          isDismissed: !0,
                          dismiss: U
                      })
                  };
                  Vn.swalPromiseResolve.set(a, m), Vn.swalPromiseReject.set(a, _), c.confirmButton.onclick = function() {
                      dw(a)
                  }, c.denyButton.onclick = function() {
                      fw(a)
                  }, c.cancelButton.onclick = function() {
                      pw(a, S)
                  }, c.closeButton.onclick = function() {
                      S(Dn.close)
                  }, Pw(h, c, S), Ng(M, h, S), rw(a, h), ey(h), hy(M, h, S), dy(c, h), setTimeout(function() {
                      c.container.scrollTop = 0
                  })
              })
          },
          ly = function(a, c) {
              var h = Hw(a),
                  m = Object.assign({}, xn, c, h, a);
              return m.showClass = Object.assign({}, xn.showClass, m.showClass), m.hideClass = Object.assign({}, xn.hideClass, m.hideClass), m.animation === !1 && (m.showClass = {
                  backdrop: "swal2-noanimation"
              }, m.hideClass = {}), m
          },
          uy = function(a) {
              var c = {
                  popup: W(),
                  container: De(),
                  actions: mr(),
                  confirmButton: it(),
                  denyButton: Yt(),
                  cancelButton: Rn(),
                  loader: kn(),
                  closeButton: mo(),
                  validationMessage: bi(),
                  progressSteps: po()
              };
              return Y.domCache.set(a, c), c
          },
          hy = function(a, c, h) {
              var m = Ai();
              Te(m), c.timer && (a.timeout = new zw(function() {
                  h("timer"), delete a.timeout
              }, c.timer), c.timerProgressBar && (pe(m), He(m, c, "timerProgressBar"), setTimeout(function() {
                  a.timeout && a.timeout.running && _o(c.timer)
              })))
          },
          dy = function(a, c) {
              if (!c.toast) {
                  if (!Ti(c.allowEnterKey)) {
                      py();
                      return
                  }
                  fy(a, c) || To(-1, 1)
              }
          },
          fy = function(a, c) {
              return c.focusDeny && Ue(a.denyButton) ? (a.denyButton.focus(), !0) : c.focusCancel && Ue(a.cancelButton) ? (a.cancelButton.focus(), !0) : c.focusConfirm && Ue(a.confirmButton) ? (a.confirmButton.focus(), !0) : !1
          },
          py = function() {
              document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
          };
      if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
          var Zl = new Date,
              eu = localStorage.getItem("swal-initiation");
          eu ? (Zl.getTime() - Date.parse(eu)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(function() {
              document.body.style.pointerEvents = "none";
              var d = document.createElement("audio");
              d.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", d.loop = !0, document.body.appendChild(d), setTimeout(function() {
                  d.play().catch(function() {})
              }, 2500)
          }, 500) : localStorage.setItem("swal-initiation", "".concat(Zl))
      }
      oe.prototype.disableButtons = xl, oe.prototype.enableButtons = Nl, oe.prototype.getInput = Dl, oe.prototype.disableInput = Ml, oe.prototype.enableInput = Ll, oe.prototype.hideLoading = ki, oe.prototype.disableLoading = ki, oe.prototype.showValidationMessage = Fl, oe.prototype.resetValidationMessage = Ul, oe.prototype.close = Ot, oe.prototype.closePopup = Ot, oe.prototype.closeModal = Ot, oe.prototype.closeToast = Ot, oe.prototype.rejectPromise = bl, oe.prototype.update = $l, oe.prototype._destroy = zl, Object.assign(oe, $w), Object.keys(Sw).forEach(function(d) {
          oe[d] = function() {
              if (ot && ot[d]) {
                  var a;
                  return (a = ot)[d].apply(a, arguments)
              }
              return null
          }
      }), oe.DismissReason = Dn, oe.version = "11.10.6";
      var Oi = oe;
      return Oi.default = Oi, Oi
  }), typeof Nt < "u" && Nt.Sweetalert2 && (Nt.swal = Nt.sweetAlert = Nt.Swal = Nt.SweetAlert = Nt.Sweetalert2), typeof document < "u" && function(n, r) {
      var i = n.createElement("style");
      if (n.getElementsByTagName("head")[0].appendChild(i), i.styleSheet) i.styleSheet.disabled || (i.styleSheet.cssText = r);
      else try {
          i.innerHTML = r
      } catch {
          i.innerText = r
      }
  }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')
})(Tm);
var rP = Tm.exports;
const qe = my(rP),
  iP = () => {
      qe.close()
  },
  sP = (t, e) => qe.fire({
      title: "Success",
      text: t,
      icon: "success",
      timer: e
  }),
  oP = (...t) => {
      const e = t.map(n => `<p>${n}</p>`).join("");
      return qe.fire({
          title: "Warning",
          html: e,
          icon: "warning",
          showConfirmButton: !0
      })
  },
  aP = (t, e, n) => qe.fire({
      title: "Error",
      text: t,
      icon: "error",
      timer: n * 1e3,
      timerProgressBar: !0,
      showConfirmButton: !n,
      allowEscapeKey: !n,
      html: t
  }),
  cP = (t = "You won't be able to revert this!", e = "Confirm", n = "Cancel") => {
      const r = {
          title: "Are you sure?",
          text: t,
          icon: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#42b654",
          cancelButtonColor: "#e65158",
          confirmButtonText: e,
          cancelButtonText: n,
          reverseButtons: !0
      };
      return qe.fire(r)
  },
  lP = (t = "Loading...", e) => qe.fire({
      title: t,
      allowOutsideClick: !1,
      showConfirmButton: !1,
      allowEscapeKey: !1,
      timer: e * 1e3,
      timerProgressBar: !!e && !0,
      didOpen: () => {
          qe.showLoading(null)
      }
  }),
  uP = (t, e = "info") => {
      qe.mixin({
          toast: !0,
          position: "top-end",
          showConfirmButton: !1,
          timer: 3e3,
          timerProgressBar: !0,
          didOpen: r => {
              r.addEventListener("mouseenter", qe.stopTimer), r.addEventListener("mouseleave", qe.resumeTimer)
          }
      }).fire({
          icon: e,
          title: t
      })
  },
  hP = (t, e, n) => qe.fire({
      title: t,
      input: "text",
      confirmButtonText: e,
      inputPlaceholder: n,
      cancelButtonColor: "#f87272",
      allowOutsideClick: !0,
      allowEscapeKey: !0
  }),
  dP = async (t, e, n) => {
      const {
          value: r
      } = await qe.fire({
          title: t,
          input: "select",
          inputOptions: n,
          inputPlaceholder: "SELECT",
          confirmButtonText: e,
          allowOutsideClick: !1,
          allowEscapeKey: !1,
          inputValidator: i => new Promise(s => {
              s(i === "" ? "You need to select an option from the list." : "")
          })
      });
      return r
  }, A = {
      close: iP,
      success: sP,
      warn: oP,
      error: aP,
      confirm: cP,
      loading: lP,
      toast: uP,
      prompt: hP,
      select: dP
  }, Nh = async (t, e) => {
      const n = ie(ee, "participants", t.id);
      if (await _s(n, t, {
              merge: !0
          }), e && e.team_id) {
          const r = ie(ee, "teams", e.team_id),
              o = (await Qt(r)).data().teammate_info.map(l => l.uuid === t.id ? {
                  name: t.name,
                  uni: t.university,
                  uuid: t.id
              } : l);
          await Qe(r, {
              teammate_info: o
          })
      }
  }, fP = async t => {
      const e = ie(ee, "participants", t.id);
      await Qe(e, {
          is_verified: t.is_verified
      })
  }, Xc = async t => {
      const e = ie(ee, "participants", t);
      return (await Qt(e)).data()
  }, pP = async t => {
      const e = {},
          n = Hp(ee, "teams", t, "evaluations");
      return (await DA(n)).forEach(i => {
          const s = i.id,
              o = i.data();
          e[s] = {};
          for (const l in o) e[s][l] = o[l].comment
      }), e
  }, mP = async t => {
      await _s(ie(ee, "teams", t.id), {
          teammate_info: [{
              name: t.name,
              uni: t.university,
              uuid: t.id
          }]
      }), await Qe(ie(ee, "participants", t.id), {
          team_id: t.id,
          team_role: t.team_role
      })
  }, gP = async t => {
      await VA(ie(ee, "teams", t.team_id)), await Qe(ie(ee, "participants", t.id), {
          team_id: "",
          team_role: ""
      })
  }, wP = async (t, e) => {
      await Qe(ie(ee, "teams", t.id), {
          team_lock: e
      })
  }, yP = async t => {
      const e = ie(ee, "teams", t),
          n = await Qt(e);
      if (!n.exists()) return "not_found";
      const r = n.data();
      return r.teammate_info.length >= 4 || r.team_lock ? "full" : r
  }, _P = async (t, e) => {
      const n = ie(ee, "teams", t.team_id);
      return await Qe(n, {
          teammate_info: [...e.teammate_info, {
              name: t.name,
              uni: t.university,
              uuid: t.id
          }]
      }), await Qe(ie(ee, "participants", t.id), {
          team_id: t.team_id,
          team_role: t.team_role
      }), "success"
  }, vP = async t => {
      const e = ie(ee, "teams", t.team_id),
          n = await Qt(e);
      if (n.exists()) {
          const r = n.data();
          await Qe(e, {
              teammate_info: r.teammate_info.filter(i => i.uuid !== t.id)
          })
      }
      await Qe(ie(ee, "participants", t.id), {
          team_id: "",
          team_role: ""
      })
  }, EP = async t => {
      const e = ie(ee, "teams", t),
          n = await Qt(e);
      if (n.exists()) {
          const r = n.data();
          return {
              teammates: r.teammate_info,
              teamLock: r.team_lock || !1
          }
      } else return {
          teammates: [],
          teamLock: !1
      }
  }, IP = async (t, e) => {
      const n = ie(ee, "teams", t),
          r = await Qt(n);
      if (r.exists()) {
          const i = r.data();
          await Qe(n, {
              teammate_info: i.teammate_info.filter(s => s.uuid !== e)
          }), await Qe(ie(ee, "participants", e), {
              team_id: "",
              team_role: ""
          })
      }
  }, TP = async (t, e) => {
      await Qe(ie(ee, "teams", t.team_id), {
          submission_data: e
      })
  }, bP = async t => {
      try {
          const e = ie(ee, "teams", t),
              n = await Qt(e);
          return n.exists() ? n.data().submission_data : null
      } catch (e) {
          return A.error("Error fetching submission:", e), null
      }
  }, AP = [{
      team_uuid: "nUqNRL9ESSe12Al6pcOnwdUQBO92",
      team_name: "Zetten"
  }, {
      team_uuid: "2HbmexKLEHWPaSNvibdqpGh4BND3",
      team_name: "Cyprus"
  }, {
      team_uuid: "eKDGEO9AkMbZx7Z0UHgsl32n1No1",
      team_name: "Lettuce_Win"
  }, {
      team_uuid: "x2z1TMdIfqNfGVP3u28OMReFpJx2",
      team_name: "raodto15k"
  }, {
      team_uuid: "fOEUU3EJODgA1oIdWEFL7FKpRYw2",
      team_name: "TechRookies"
  }, {
      team_uuid: "6iOjf1gtrXgjZP5v0FB6SehPg1g1",
      team_name: "InvestSim"
  }, {
      team_uuid: "th7D1iLVoVP47xfOBu00NGLdKUf2",
      team_name: "SuburbanDev"
  }, {
      team_uuid: "0PmdnhuPThec3GlAAB5fYRGdD9G2",
      team_name: "YouthVenture"
  }, {
      team_uuid: "fQ3EdZeTZ7Y9MZpmfP7T7pJY4ru2",
      team_name: "Team Mickeymouse"
  }, {
      team_uuid: "QrXNiXHTgJhuBUHiTQEFKV6cw3r2",
      team_name: "Potassium K+"
  }, {
      team_uuid: "rZ6rMwwt10bLKDPAiNaKsDIzMlw1",
      team_name: "LetItGrow"
  }, {
      team_uuid: "MpcUVvyFR3YKsoywhllmzAtUHe03",
      team_name: "Developers of Southampton (DoS)"
  }, {
      team_uuid: "DTuPlGDOH7OAskdNgqKgE7LZ8pI2",
      team_name: "Garlic Chicken Rice 2.0"
  }, {
      team_uuid: "mQ8YnPCIZMU5h4qh9dahGFNakSa2",
      team_name: "OpenSauce"
  }, {
      team_uuid: "AlFPResw3TPrby6hNh3Ry2ndrFs1",
      team_name: "Hello World"
  }], SP = async t => {
      const {
          judges_uid: e,
          judge_field: n,
          team_id: r,
          phase: i,
          comment: s,
          scoring: o,
          updated_at: l
      } = t, u = i === "preliminary" ? "prelim_" + n : "final_" + n, f = ie(ee, "teams", r, "evaluations", u), p = {
          [e]: {
              ...o,
              comment: s,
              updated_at: l
          }
      };
      await _s(f, p, {
          merge: !0
      });
      const g = ie(ee, "judges", e);
      await _s(g, {
          [i === "preliminary" ? "prelim_evaluated_teams" : "final_evaluated_teams"]: LA(r)
      }, {
          merge: !0
      })
  }, Jo = async t => {
      const {
          team_id: e,
          judge_uid: n,
          judge_field: r,
          phase: i
      } = t, s = i === "preliminary" ? "prelim_" + r : "final_" + r, o = ie(ee, "teams", e, "evaluations", s), l = await Qt(o);
      return l.exists() ? l.data()[n] : null
  }, zP = async t => await Zv(Ei, t.email, t.password).then(async e => {
      const n = e.user;
      return await Pm(t.email, n.uid, "login"), n
  }).catch(e => {
      const n = e.message;
      throw A.error("Error login with email authentication", n), Error
  }), HP = async t => await Xv(Ei, t.email, t.password).then(e => e.user).catch(e => {
      const n = e.code;
      throw n === "auth/email-already-in-use" ? A.error("The email address is already in use. Please use a different email address or log in using the existing one. If you wish to register with this email, pls create a ticket to inform in discord.") : A.error("Error register with email auth", e.errorMessage + n), Error
  }), bm = async (t, e) => await bE(Ei, t).then(n => {
      const r = n.user;
      return e === "register" || Pm(r.email, r.uid, e), r
  }).catch(n => {
      throw A.error(n), n
  }), WP = async t => {
      const e = new It;
      return await bm(e, t)
  }, KP = async t => {
      const e = new Et;
      return await bm(e, t)
  }, Am = async () => {
      await rE(Ei).then(() => {
          sessionStorage.clear(), A.success("Logout successful!"), window.location.href = "/"
      }).catch(t => {
          console.error("Error logging out!", t)
      })
  }, GP = async t => {
      const e = {
          url: window.location.origin + "/register?finishRegister=true&uid=" + t.uid,
          handleCodeInApp: !0
      };
      return await eE(t, e).then(() => {
          A.success("Verification email sent")
      }).catch(n => {
          const r = n.code,
              i = n.message;
          A.error(n), console.error(r, i)
      })
  }, QP = async t => {
      await MP({
          id: t,
          is_verified: !0
      }).then(n => n).catch(n => {
          throw n
      })
  }, JP = async t => {
      await Yv(Ei, t).then(() => {
          A.success("Reset password email sent")
      }).catch(e => {
          const n = e.code,
              r = e.message;
          A.error(e), console.error(n, r)
      })
  }, YP = async t => {
      const e = bA(Hp(ee, "participants"), AA("ic_or_passport", "==", t));
      return (await NA(e)).data().count
  }, Sm = "https://asia-southeast1-vhack-2024.cloudfunctions.net", ke = () => Uh("userInfo"), Pn = t => {
      Fh("userInfo", t)
  }, tr = () => Uh("judgeInfo"), PP = t => {
      Fh("judgeInfo", t)
  }, Pm = (t, e, n) => {
      let r = Lh.map(s => s.email).includes(t),
          i = Mh.map(s => s.email).includes(t);
      if (r || i)
          if (n === "login") {
              A.error("Error: You cannot access to Judge Dashboard page during non-judging phase.");
              return
          } else {
              A.error("Error: Judge is not allowed to register themselves. Please contact admin@vhackusm.com for further assistance");
              return
          }
      else Xc(e).then(s => {
          const o = {
              id: e,
              name: s.name,
              email: s.email,
              university: s.university,
              team_id: s.team_id,
              team_role: s.team_role,
              is_finalist: AP.map(l => l.team_uuid).includes(s.team_id),
              discord_id: s.discord_id,
              phone_number: s.phone_number,
              country: s.country,
              ic_or_passport: s.ic_or_passport,
              recommended_by: s.recommended_by,
              student_id: s.student_id,
              is_verified: s.is_verified
          };
          if (!s.team_id) {
              A.error("Sorry, you cannot sign in without a team during the non-registration phase."), setTimeout(() => {
                  window.location.href = "/"
              }, 3e3);
              return
          }
          if (s.is_verified === !1) {
              A.confirm("You haven't verified your email. Please check your inbox or spam folder. Do you want to resend the verification email?", "Yes, resend it").then(async l => {
                  l.isConfirmed && await CP(o.email)
              });
              return
          }
          Pn(o), A.success("Login successful!"), setTimeout(() => {
              window.location.href = "/dashboard"
          }, 1e3)
      }).catch(s => {
          A.error("User does not exist<br>" + s)
      })
  }, CP = async t => {
      A.loading("Resending verification email..."), fetch(`${Sm}/sendVerificationEmail?email=${t}`).then(e => {
          e.ok ? A.success("Verification email has been sent successfully!") : A.error("Error sending verification email")
      }).catch(e => {
          A.error("Error sending verification email", e)
      })
  }, XP = t => {
      let e = Lh.map(r => r.email).includes(t),
          n = Mh.map(r => r.email).includes(t);
      return e || n ? (A.error("Error: Judge is not allowed to register themselves. Please contact admin@vhackusm.com for further assistance"), !0) : !1
  }, RP = async () => (await LP(ke().id)).is_verified === !1 ? (window.location.pathname !== "/register" && window.location.pathname !== "/login" && (A.toast("Your email is not verified.<br>Please check your inbox or spam folder and re-login again.", "error"), await new Promise(e => setTimeout(e, 3100)), await Am()), !1) : (window.location.pathname !== "/dashboard" && (window.location.href = "/dashboard"), !0), ZP = async (t = !1) => {
      if (ke() || tr()) {
          if (t) {
              if (ke()) return RP();
              if (tr()) return window.location.pathname !== "/judge/dashboard" && (window.location.href = "/judge/dashboard"), !0
          }
      } else return window.location.pathname !== "/login" && window.location.pathname !== "/register" && (A.toast("Error: Unknown user session", "error"), await new Promise(e => setTimeout(e, 3100)), window.location.href = "/login"), !1;
      return !1
  }, eC = async () => {
      (!ke() && window.location.pathname.startsWith("/dashboard") || !tr() && window.location.pathname.startsWith("/judge/")) && (A.toast("Unauthorized access to " + window.location.pathname + " page.", "error"), await new Promise(t => setTimeout(t, 3100)), window.location.href = "/login")
  }, tC = async t => {
      A.loading("Validating user's info...");
      try {
          const e = await fetch(`${Sm}/verifyRecaptcha?response=${t}`),
              n = await e.text();
          return e.ok ? (qe.close(), !0) : (A.error("Captcha verification failed"), !1)
      } catch (e) {
          return console.error("Error during captcha verification:", e), A.error("Error during captcha verification"), !1
      }
  }, nC = (t, e) => ({
      id: t.uid,
      name: t.name,
      email: t.email,
      phone_number: t.phone_number_ex + t.phone_number,
      discord_id: t.discord_id,
      ic_or_passport: t.ic_or_passport,
      recommended_by: t.recommended_by,
      student_id: t.student_id,
      country: t.country,
      university: t.university,
      is_verified: e,
      team_id: "",
      team_role: "",
      is_finalist: !1
  }), kP = {
      business: [{
          id: "pitch",
          title: "Pitch"
      }, {
          id: "competitive_advantages",
          title: "Competitive Advantages"
      }, {
          id: "market_potential_and_demand",
          title: "Market Potential and Demand"
      }, {
          id: "sustainability",
          title: "Sustainability"
      }, {
          id: "business_model",
          title: "Business Model"
      }],
      technical: [{
          id: "pitch",
          title: "Pitch"
      }, {
          id: "formulation_of_concept",
          title: "Formulation of Concept"
      }, {
          id: "uniqueness_innovativeness_inventiveness",
          title: "Uniqueness/Innovativeness/Inventiveness"
      }, {
          id: "visual_design_and_aesthetics",
          title: "Visual Design and Aesthetics"
      }, {
          id: "user_interface_and_experience_design",
          title: "User Interface and Experience Design"
      }]
  }, DP = {
      business: [{
          id: "pitch",
          title: "Pitch"
      }, {
          id: "competitive_advantages",
          title: "Competitive Advantages"
      }, {
          id: "market_potential_and_demand",
          title: "Market Potential and Demand"
      }, {
          id: "sustainability",
          title: "Sustainability"
      }, {
          id: "business_model",
          title: "Business Model"
      }],
      technical: [{
          id: "pitch",
          title: "Pitch"
      }, {
          id: "conceptual_creativity",
          title: "Conceptual Creativity"
      }, {
          id: "continued_development_possibilities",
          title: "Continued Development Possibilities"
      }, {
          id: "interaction_design",
          title: "Interaction Design"
      }, {
          id: "technical_implementation",
          title: "Technical Implementation"
      }]
  }, VP = {
      preliminary: kP,
      final: DP
  }, rC = (t, e, n) => {
      const r = {},
          i = {},
          s = new Set(e[n].business.map(l => l.id)),
          o = new Set(e[n].technical.map(l => l.id));
      for (const [l, u] of Object.entries(t)) s.has(l) && (r[l] = u), o.has(l) && (i[l] = u);
      return {
          businessRatings: r,
          technicalRatings: i
      }
  }, iC = async (t, e, n) => {
      const r = {
              ...t,
              judge_field: e,
              scoring: n
          },
          i = await NP(r);
      return i || A.error("Error updating judge evaluation"), i
  }, OP = (t, e, n) => VP[e][n].map(s => t[s.id]).join(","), NP = async t => {
      try {
          const {
              scoring: e,
              ...n
          } = t, r = OP(e, t.phase, t.judge_field), i = {
              ...n,
              scoring: r
          }, s = await Xe("updateJudgeEvaluation", i);
          if (s.result === "error") throw new Error(s.error);
          await SP(t);
          const o = tr(),
              {
                  team_id: l
              } = t;
          if (!o.evaluated_teams.includes(l)) {
              const u = [...o.evaluated_teams];
              u.push(l);
              const f = {
                  ...o,
                  evaluated_teams: u
              };
              PP(f)
          }
          return !0
      } catch (e) {
          return A.error("Error updating judge evaluation", e), !1
      }
  }, sC = async t => {
      try {
          const {
              judge_field: e,
              id: n
          } = tr(), r = "post-event";
          let i;
          if (e === "all") {
              const s = await Jo({
                      team_id: t,
                      judge_uid: n,
                      judge_field: "business",
                      phase: r
                  }),
                  o = await Jo({
                      team_id: t,
                      judge_uid: n,
                      judge_field: "technical",
                      phase: r
                  });
              i = {
                  ...s,
                  ...o
              }
          } else i = await Jo({
              team_id: t,
              judge_uid: n,
              judge_field: e,
              phase: r
          });
          return i
      } catch (e) {
          A.error("Error fetching evaluated team", e)
      }
  }, xP = (t, e) => null, LP = async t => {
      try {
          return await Xc(t)
      } catch (e) {
          throw A.error("Error fetching participant info", e), e
      }
  }, oC = async (t, e = !1) => {
      A.loading("Updating participant info...");
      const n = ke();
      try {
          if (e) {
              await Nh(t, n);
              const r = await Xe("updateParticipantInfo", t);
              if (r.result === "error") throw new Error(r.error)
          } else {
              const r = await Xe("updateParticipantInfo", t);
              if (r.result === "error") throw new Error(r.error);
              await Nh(t, n)
          }
          Pn(t), A.success("Participant info updated successfully")
      } catch (r) {
          throw A.error("Error updating participant info", r), r
      }
  }, MP = async t => {
      try {
          const e = await Xe("updateIsVerified", t);
          if (e.result === "error") throw new Error(e.error);
          await fP(t), A.success("Email verification successful")
      } catch (e) {
          throw A.error("Email verification failed", e), e
      }
  }, aC = () => new Date > new Date("2024-04-20T01:00:00"), cC = async t => {
      A.loading("Submitting data...");
      try {
          const e = ke();
          t.updated_at = new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !0
          }), t.updated_by = e.name;
          const n = {
                  ...t,
                  leader_uid: e.team_id
              },
              r = await Xe("updateSubmission", n);
          if (r.result === "error") throw new Error(r.error);
          await TP(e, t), A.success("Submission updated successfully")
      } catch (e) {
          throw A.error("Error updating submission", e), e
      }
  }, xh = async () => (A.toast("It appears you are attempting to access a team for which you do not have the necessary permissions.", "error"), await new Promise(t => setTimeout(t, 3100)), await Am(), null), FP = async () => (A.toast("It appears you are attempting to access a team for which you do not have the necessary permissions.", "error"), await new Promise(t => setTimeout(t, 1e3)), window.location.href = "/judge/dashboard", null), lC = async t => {
      if (t === "") return A.toast("Pls join a team first", "error"), null;
      try {
          const e = ke(),
              n = tr();
          if (e) {
              const i = await Xc(e.id);
              if (t !== i.team_id || t !== e.team_id) return await xh();
              for (const s in i)
                  if (s !== "is_finalist" && s !== "university_other" && i[s] !== e[s]) return await xh()
          } else if (n && !xP(t, n)) return await FP();
          const r = await bP(t);
          return r || null
      } catch (e) {
          throw A.error("Error fetching submission", e), e
      }
  }, uC = async t => {
      try {
          return await pP(t)
      } catch (e) {
          throw A.error("Error fetching feedback", e), e
      }
  }, hC = async () => {
      try {
          return await A.confirm("You are about to create a new team.", "Create", "Cancel").then(async t => {
              if (t.isConfirmed) {
                  A.loading("Creating team...");
                  const e = ke();
                  e.team_id = e.id, e.team_role = "leader";
                  const n = {
                          leader_uid: e.id,
                          name: e.name,
                          university: e.university
                      },
                      r = await Xe("createTeam", n);
                  if (r.result === "error") throw new Error(r.error);
                  return await mP(e), Pn(e), A.success("Team created successfully"), !0
              } else return A.toast("Team creation cancelled", "info"), !1
          })
      } catch (t) {
          throw A.error("Error creating team", t), t
      }
  }, dC = async () => {
      try {
          return await A.confirm("You are about to delete your team.", "Delete", "Cancel").then(async t => {
              if (t.isConfirmed) {
                  A.loading("Deleting team...");
                  const e = ke(),
                      n = {
                          leader_uid: e.id
                      },
                      r = await Xe("deleteTeam", n);
                  if (r.result === "error") throw new Error(r.error);
                  return await gP(e), e.team_id = "", e.team_role = "", Pn(e), A.success("Team deleted successfully"), !0
              } else return A.toast("Team deletion cancelled", "info"), !1
          })
      } catch (t) {
          throw A.error("Error deleting team", t), t
      }
  }, fC = () => {
      const t = ke();
      navigator.clipboard.writeText(t.id), A.success("Team code copied to clipboard. Team code: " + t.id)
  }, pC = async () => {
      const {
          id: t,
          team_id: e,
          team_role: n
      } = ke(), r = ke(), i = await EP(n === "leader" ? t : e);
      return i.teammates.map(s => s.uuid).includes(t) ? i : (r.team_id = "", r.team_role = "", Pn(r), null)
  }, mC = async t => {
      A.loading("Removing teammate...");
      try {
          const {
              id: e
          } = ke(), r = await Xe("leaveTeam", {
              leader_uid: e,
              id: t
          });
          if (r.result === "error") throw new Error(r.error);
          return await IP(e, t), A.success("Teammate removed successfully"), "success"
      } catch (e) {
          throw A.error("Error removing teammate", e), e
      }
  }, gC = async t => {
      A.loading(`${t?"Locking":"Unlocking"} team...`);
      try {
          const e = ke(),
              n = {
                  leader_uid: e.team_id,
                  teamLock: t
              },
              r = await Xe("lockTeam", n);
          if (r.result === "error") throw new Error(r.error);
          await wP(e, t), A.success(`Team ${t?"locked":"unlocked"} successfully!`)
      } catch (e) {
          throw A.error(`Error ${t?"locking":"unlocking"} team!`, e), e
      }
  }, wC = async () => {
      try {
          const {
              value: t
          } = await A.prompt("Enter team code", "Join Team", "Paste the team code here");
          if (t) {
              A.loading("Joining team...");
              const e = ke();
              e.team_id = t, e.team_role = "member";
              const n = await yP(e.team_id);
              if (n === "full") return A.toast("Team is full or locked", "error"), "full";
              const r = {
                      leader_uid: e.team_id,
                      name: e.name,
                      university: e.university,
                      id: e.id
                  },
                  i = await Xe("joinTeam", r);
              if (i.result === "error") throw new Error(i.error);
              const s = await _P(e, n);
              return s === "success" && (Pn(e), A.success("Team joined successfully")), s
          }
      } catch (t) {
          throw A.error("Error joining team", t), t
      }
  }, yC = async () => {
      A.loading("Leaving team...");
      try {
          const t = ke(),
              e = {
                  leader_uid: t.team_id,
                  id: t.id
              },
              n = await Xe("leaveTeam", e);
          if (n.result === "error") throw new Error(n.error);
          await vP(t), t.team_id = "", t.team_role = "", Pn(t), A.success("Team left successfully")
      } catch (t) {
          throw A.error("Error leaving team", t), t
      }
  };
export {
  wC as A, mC as B, RP as C, eC as D, lC as E, cC as F, uC as G, VP as H, sC as I, rC as J, iC as K, qe as S, WP as a, KP as b, Xc as c, XP as d, YP as e, QP as f, tC as g, nC as h, ZP as i, GP as j, ke as k, tr as l, Am as m, MP as n, zP as o, aC as p, pC as q, HP as r, JP as s, fC as t, oC as u, gC as v, A as w, hC as x, dC as y, yC as z
};