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
// import { keys } from '../services/keys.service';
// const supabase: SupabaseClient = createClient(keys.SUPABASE_URL, keys.SUPABASE_KEY);
var SupabaseAuthService = /** @class */ (function () {
    function SupabaseAuthService() {
        var _this = this;
        this.user = new BehaviorSubject(null);
        this.profile = new BehaviorSubject(null);
        this._user = null;
        this.signUpWithEmail = function (email, password) { return __awaiter(_this, void 0, void 0, function () {
            var _a, user, session, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signUp({
                            email: email,
                            password: password,
                        })];
                    case 1:
                        _a = _b.sent(), user = _a.user, session = _a.session, error = _a.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.signInWithEmail = function (email, password) { return __awaiter(_this, void 0, void 0, function () {
            var _a, user, session, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signIn({
                            email: email,
                            password: password,
                        })];
                    case 1:
                        _a = _b.sent(), user = _a.user, session = _a.session, error = _a.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.signInWithProvider = function (provider) { return __awaiter(_this, void 0, void 0, function () {
            var _a, user, session, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signIn({
                            provider: provider
                        }, {
                            redirectTo: window.location.href // .origin
                        })];
                    case 1:
                        _a = _b.sent(), user = _a.user, session = _a.session, error = _a.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.resetPassword = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.api.resetPasswordForEmail(email, {
                            redirectTo: window.location.origin + '/resetpassword'
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        return [2 /*return*/, { data: data, error: error }];
                }
            });
        }); };
        this.sendMagicLink = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var _a, user, session, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signIn({
                            email: email
                        }, {
                            redirectTo: window.location.origin
                        })];
                    case 1:
                        _a = _b.sent(), user = _a.user, session = _a.session, error = _a.error;
                        return [2 /*return*/, { user: user, session: session, error: error }];
                }
            });
        }); };
        this.updatePassword = function (access_token, new_password) { return __awaiter(_this, void 0, void 0, function () {
            var _a, error, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.api
                            .updateUser(access_token, { password: new_password })];
                    case 1:
                        _a = _b.sent(), error = _a.error, data = _a.data;
                        return [2 /*return*/, { error: error, data: data }];
                }
            });
        }); };
        this.signOut = function () { return __awaiter(_this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SupabaseAuthService.supabase.auth.signOut()];
                    case 1:
                        error = (_a.sent()).error;
                        if (!error) {
                            this.user.next(null);
                        }
                        return [2 /*return*/, { error: error }];
                }
            });
        }); };
        // Try to recover our user session
        this.loadUser();
        SupabaseAuthService.subscription = SupabaseAuthService.supabase.auth.onAuthStateChange(function (event, session) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (event === 'SIGNED_IN' && session) {
                    this._user = session.user;
                    this.user.next(session.user);
                }
                else if (session === null) {
                    this._user = null;
                    this.user.next(null);
                }
                this.loadProfile();
                return [2 /*return*/];
            });
        }); });
    }
    SupabaseAuthService.getInstance = function (SUPABASE_URL, SUPABASE_KEY) {
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
    // ************** auth ****************
    SupabaseAuthService.prototype.loadUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                user = SupabaseAuthService.supabase.auth.user();
                if (user) {
                    this._user = user;
                    this.user.next(user);
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
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, data, error;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!((_a = this._user) === null || _a === void 0 ? void 0 : _a.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, SupabaseAuthService.supabase.from('profile')
                                .select('*')
                                .eq('id', (_b = this._user) === null || _b === void 0 ? void 0 : _b.id)
                                .limit(1)
                                .single()];
                    case 1:
                        _c = _d.sent(), data = _c.data, error = _c.error;
                        if (error) {
                            console.error('loadProfile error: ', error);
                        }
                        else {
                            // this._profile = data;
                            this.profile.next(data);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        // this._profile = null;
                        this.profile.next(null);
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SupabaseAuthService.prototype.getCurrentUser = function () {
        return this._user;
    };
    SupabaseAuthService.myInstance = null;
    // private _profile: any = null;
    SupabaseAuthService.subscription = null;
    return SupabaseAuthService;
}());
export default SupabaseAuthService;
