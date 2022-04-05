var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
var SupabaseAuthService = /** @class */ (function () {
    function SupabaseAuthService() {
        var _this = this;
        this._user = null;
        this.signUpWithEmail = function (email, password) { return __awaiter(_this, void 0, void 0, function () {
            var _b, user, session, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signUp({
                            email: email,
                            password: password,
                        }, {
                            redirectTo: window.location.origin // .origin
                        })];
                    case 1:
                        _b = _c.sent(), user = _b.user, session = _b.session, error = _b.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.signInWithEmail = function (email, password) { return __awaiter(_this, void 0, void 0, function () {
            var _b, user, session, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signIn({
                            email: email,
                            password: password,
                        })];
                    case 1:
                        _b = _c.sent(), user = _b.user, session = _b.session, error = _b.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.signInWithProvider = function (provider) { return __awaiter(_this, void 0, void 0, function () {
            var _b, user, session, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signIn({
                            provider: provider
                        }, {
                            redirectTo: window.location.origin // .origin
                        })];
                    case 1:
                        _b = _c.sent(), user = _b.user, session = _b.session, error = _b.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.resetPassword = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var _b, data, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.api.resetPasswordForEmail(email, {
                            redirectTo: window.location.origin // + '/resetpassword'
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, error = _b.error;
                        return [2 /*return*/, { data: data, error: error }];
                }
            });
        }); };
        this.sendMagicLink = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var _b, user, session, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signIn({
                            email: email
                        }, {
                            redirectTo: window.location.origin
                        })];
                    case 1:
                        _b = _c.sent(), user = _b.user, session = _b.session, error = _b.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.updatePassword = function (access_token, new_password) { return __awaiter(_this, void 0, void 0, function () {
            var _b, error, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.api
                            .updateUser(access_token, { password: new_password })];
                    case 1:
                        _b = _c.sent(), error = _b.error, data = _b.data;
                        return [2 /*return*/, { error: error, data: data }];
                }
            });
        }); };
        this.signOut = function () { return __awaiter(_this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signOut()];
                    case 1:
                        error = (_b.sent()).error;
                        if (!error) {
                            SupabaseAuthService.user.next(null);
                        }
                        return [2 /*return*/, { error: error }];
                }
            });
        }); };
        // Try to recover our user session
        this.loadUser();
        SupabaseAuthService.subscription = SupabaseAuthService.supabase.auth.onAuthStateChange(function (event, session) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (event === 'SIGNED_IN' && session) {
                    this._user = session.user;
                    SupabaseAuthService.user.next(session.user);
                    this.updateUserListeners(session.user);
                }
                else if (session === null) {
                    this._user = null;
                    SupabaseAuthService.user.next(null);
                    this.updateUserListeners(null);
                }
                this.loadProfile();
                return [2 /*return*/];
            });
        }); });
    }
    SupabaseAuthService.getInstance = function (SUPABASE_URL, SUPABASE_KEY, profileTable, profileKey) {
        SupabaseAuthService.profileTable = profileTable || '';
        SupabaseAuthService.profileKey = profileKey || '';
        if (this.myInstance == null) {
            if (SUPABASE_URL && SUPABASE_KEY) {
                this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
                this.myInstance = new this();
            }
            else {
                console.error('SupabaseAuthService: getInstance: missing SUPABASE_URL or SUPABASE_KEY');
                this.myInstance = null;
            }
        }
        return this.myInstance;
    };
    SupabaseAuthService.setProfileTable = function (profileTable) {
        SupabaseAuthService.profileTable = profileTable;
    };
    SupabaseAuthService.setProfileKey = function (profileKey) {
        SupabaseAuthService.profileKey = profileKey;
    };
    SupabaseAuthService.unsubscribeUser = function (id) {
        this.userListeners = this.userListeners.filter(function (userListeners) { return userListeners.id !== id; });
    };
    SupabaseAuthService.unsubscribeProfile = function (id) {
        this.userListeners = this.profileListeners.filter(function (profileListeners) { return profileListeners.id !== id; });
    };
    SupabaseAuthService.prototype.updateUserListeners = function (user) {
        console.log('*** updateUserListeners', SupabaseAuthService.userListeners);
        for (var i = 0; i < SupabaseAuthService.userListeners.length; i++) {
            SupabaseAuthService.userListeners[i].func(user);
        }
    };
    SupabaseAuthService.prototype.updateProfileListeners = function (user) {
        for (var i = 0; i < SupabaseAuthService.profileListeners.length; i++) {
            SupabaseAuthService.profileListeners[i].func(user);
        }
    };
    // ************** auth ****************
    SupabaseAuthService.prototype.loadUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                user = SupabaseAuthService.supabase.auth.user();
                if (user) {
                    this._user = user;
                    SupabaseAuthService.user.next(user);
                    this.updateUserListeners(user);
                }
                else {
                    // no current user
                }
                return [2 /*return*/];
            });
        });
    };
    ;
    SupabaseAuthService.prototype.loadProfile = function () {
        var _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _d, data, error;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!SupabaseAuthService.profileTable || !SupabaseAuthService.profileKey)
                            return [2 /*return*/];
                        if (!((_b = this._user) === null || _b === void 0 ? void 0 : _b.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, SupabaseAuthService.supabase.from(SupabaseAuthService.profileTable)
                                .select('*')
                                .eq(SupabaseAuthService.profileKey, (_c = this._user) === null || _c === void 0 ? void 0 : _c.id)
                                .limit(1)
                                .single()];
                    case 1:
                        _d = _e.sent(), data = _d.data, error = _d.error;
                        if (error) {
                            console.error('loadProfile error: ', error);
                        }
                        else {
                            // this._profile = data;
                            SupabaseAuthService.profile.next(data);
                            this.updateProfileListeners(data);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        // this._profile = null;
                        SupabaseAuthService.profile.next(null);
                        this.updateProfileListeners(null);
                        _e.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SupabaseAuthService.prototype.getCurrentUser = function () {
        return this._user;
    };
    var _a;
    _a = SupabaseAuthService;
    SupabaseAuthService.myInstance = null;
    SupabaseAuthService.user = new BehaviorSubject(null);
    SupabaseAuthService.profile = new BehaviorSubject(null);
    // private _profile: any = null;
    SupabaseAuthService.subscription = null;
    SupabaseAuthService.userListeners = [];
    SupabaseAuthService.profileListeners = [];
    SupabaseAuthService.subscribeUser = function (setFunc, id) {
        if (!id) {
            // generate a random string id
            id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }
        _a.userListeners.push({ id: id, func: setFunc });
        console.log('this.userListeners', _a.userListeners);
        return id;
    };
    SupabaseAuthService.subscribeProfile = function (setFunc, id) {
        if (!SupabaseAuthService.profileTable || !SupabaseAuthService.profileKey) {
            console.error('missing parameter(s): profileTable and/or profileKey');
            return '';
        }
        ;
        if (!id) {
            // generate a random string id
            id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }
        _a.profileListeners.push({ id: id, func: setFunc });
        return id;
    };
    return SupabaseAuthService;
}());
export default SupabaseAuthService;
export { SupabaseAuthService };
