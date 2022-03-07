var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonLoading, IonModal, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { arrowForwardOutline, closeOutline, link, lockClosedOutline, lockOpenOutline, logInOutline, logInSharp, logOutOutline, logOutSharp, mailOutline, personAdd, personOutline, personSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
// import { useHistory } from 'react-i18next';
// import { useHistory } from 'react-router';
import ProviderSignInButton from './ProviderSignInButton';
import SupabaseAuthService from './supabase.auth.service';
// import '../translations/i18n'
import './Login.css';
var supabaseAuthService;
var logoColors = {
    "google": "rgb(227,44,41)",
    "facebook": "rgb(59,89,152)",
    "spotify": "rgb(36,203,75)",
    "twitter": "rgb(30,135,235)",
    "apple": "gray",
    "slack": "rgb(221,157,35)",
    "twitch": "rgb(120,34,244)",
    "discord": "rgb(116,131,244)",
    "github": "rgb(0,0,0)",
    "bitbucket": "rgb(56,98,169)",
    "gitlab": "rgb(209,44,30)",
    "azure": "rgb(228,54,26)",
    //"linkedin": "rgb(3,47,84)",
    "linkedin": "rgb(2,119,181)",
    "zoom": "rgb(45,140,255)",
    "notion": window.matchMedia('(prefers-color-scheme: dark)').matches ? 'gray' : 'black',
};
var validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
export var Login = function (_a) {
    var _b = _a.backdropDismiss, backdropDismiss = _b === void 0 ? false : _b, setUser = _a.setUser, profileFunction = _a.profileFunction, providers = _a.providers, onSignIn = _a.onSignIn, onSignOut = _a.onSignOut, SUPABASE_URL = _a.SUPABASE_URL, SUPABASE_KEY = _a.SUPABASE_KEY, profileTable = _a.profileTable, profileKey = _a.profileKey;
    // const { t } = useTranslation()
    var loadProfile = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (profileFunction) {
                profileFunction();
            }
            return [2 /*return*/];
        });
    }); };
    if (!supabaseAuthService) {
        supabaseAuthService = SupabaseAuthService.getInstance(SUPABASE_URL, SUPABASE_KEY, profileTable, profileKey);
    }
    else {
        SupabaseAuthService.setProfileTable(profileTable || '');
        SupabaseAuthService.setProfileKey(profileKey || '');
    }
    var _c = useState(false), showModal = _c[0], setShowModal = _c[1];
    supabaseAuthService.showLogin = showModal;
    supabaseAuthService.setShowLogin = setShowModal;
    var _d = useState(false), showLoading = _d[0], setShowLoading = _d[1];
    var _e = useState(null), localUser = _e[0], setLocalUser = _e[1];
    // const history = useHistory();
    var _f = useState(false), signUpMode = _f[0], setSignUpMode = _f[1];
    var _g = useIonToast(), present = _g[0], dismiss = _g[1];
    var _h = useState(''), email = _h[0], setEmail = _h[1];
    // const [avatar, setAvatar] = useState('./assets/img/profile160x160.png');
    var _j = useState(''), password = _j[0], setPassword = _j[1];
    var toast = function (message, color) {
        if (color === void 0) { color = 'danger'; }
        present({
            color: color,
            message: message,
            cssClass: 'toast',
            buttons: [{ icon: 'close', handler: function () { return dismiss(); } }],
            duration: 3000,
            //onDidDismiss: () => console.log('dismissed'),
            //onWillDismiss: () => console.log('will dismiss'),
        });
    };
    var loadUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            user = SupabaseAuthService.supabase.auth.user();
            if (user) {
                setLocalUser(user);
                if (setUser) {
                    setUser(user);
                }
            }
            return [2 /*return*/];
        });
    }); };
    var signInWithEmail = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, user, session, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setShowLoading(true);
                    return [4 /*yield*/, supabaseAuthService.signInWithEmail(email, password)];
                case 1:
                    _a = _b.sent(), user = _a.user, session = _a.session, error = _a.error;
                    if (error) {
                        setShowLoading(false);
                        toast(error.message);
                    }
                    else {
                        // window.location.href = '/';
                        setShowLoading(false);
                        setShowModal(false);
                        if (onSignIn) {
                            onSignIn(user, session);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var signUp = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setShowLoading(true);
                    return [4 /*yield*/, supabaseAuthService.signUpWithEmail(email, password)];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        console.error(error);
                        setShowLoading(false);
                        toast(error.message);
                    }
                    else {
                        setShowLoading(false);
                        toast('Please check your email for a confirmation link', 'success');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var resetPassword = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setShowLoading(true);
                    return [4 /*yield*/, supabaseAuthService.resetPassword(email)];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        setShowLoading(false);
                        toast(error.message);
                    }
                    else {
                        setShowLoading(false);
                        toast('Please check your email for a password reset link', 'success');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var sendMagicLink = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setShowLoading(true);
                    return [4 /*yield*/, supabaseAuthService.sendMagicLink(email)];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        setShowLoading(false);
                        toast(error.message);
                    }
                    else {
                        setShowLoading(false);
                        toast('Please check your email for a sign in link', 'success');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var toggleSignUpMode = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setSignUpMode(!signUpMode);
            return [2 /*return*/];
        });
    }); };
    useEffect(function () {
        // Only run this one time!  No multiple subscriptions!
        loadUser();
        SupabaseAuthService.user.subscribe(function (user) {
            setLocalUser(user);
            if (setUser) {
                setUser(user);
            }
            // console.log('subscribed: user', user)
        });
    }, []); // <-- empty dependency array
    var signOut = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supabaseAuthService.signOut()];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        console.error('Error signing out', error);
                    }
                    else {
                        if (onSignOut) {
                            onSignOut();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(_Fragment, { children: [_jsxs(IonModal, __assign({ isOpen: showModal, backdropDismiss: backdropDismiss, className: 'my-custom-class' }, { children: [_jsxs(IonHeader, { children: [_jsxs(IonToolbar, { children: [_jsx(IonButtons, __assign({ slot: "start" }, { children: _jsx(IonButton, __assign({ color: 'primary', onClick: function () { return setShowModal(false); } }, { children: _jsx(IonIcon, { size: 'large', icon: closeOutline }) })) })), _jsx(IonTitle, { children: "Sign In" })] }), _jsx(IonButtons, { slot: "start" })] }), _jsxs(IonContent, { children: [_jsx(IonLoading, { isOpen: showLoading, message: 'Loading' }), _jsxs(IonGrid, __assign({ class: "ion-padding", style: { maxWidth: '375px' } }, { children: [_jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonLabel, { children: "Email Address" }) }) }), _jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonItem, __assign({ className: "loginItem", lines: "none" }, { children: _jsx(IonInput, __assign({ type: "email", placeholder: "Email", onIonChange: function (e) { return setEmail(e.detail.value); }, value: email, className: "loginInputBoxWithIcon" }, { children: _jsx(IonIcon, { className: "inputIcon", icon: mailOutline, slot: "start", size: "large", color: "medium" }) })) })) }) }), !validateEmail(email) && email.length > 0 &&
                                        _jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonLabel, __assign({ color: "danger" }, { children: _jsx("b", { children: "Invalid email format" }) })) }) }), _jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonLabel, { children: "Password" }) }) }), _jsx(IonRow, { children: _jsxs(IonCol, { children: [_jsx(IonItem, __assign({ className: "loginItem", lines: "none" }, { children: _jsx(IonInput, __assign({ type: "password", placeholder: "Password", onIonChange: function (e) { return setPassword(e.detail.value); }, value: password, className: "loginInputBoxWithIcon" }, { children: _jsx(IonIcon, { className: "inputIcon", icon: password.length ? lockOpenOutline : lockClosedOutline, slot: "start", size: "large", color: "medium" }) })) })), _jsx("div", __assign({ onClick: resetPassword, className: "ion-text-right", style: { paddingTop: '10px' } }, { children: _jsx(IonLabel, { children: _jsx("b", { children: "Forgot password?" }) }) }))] }) }), password.length > 0 && password.length < 6 &&
                                        _jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonLabel, __assign({ color: "danger" }, { children: _jsx("b", { children: "Password too short" }) })) }) }), !signUpMode &&
                                        _jsx(IonRow, { children: _jsxs(IonCol, { children: [_jsxs(IonButton, __assign({ expand: "block", color: "primary", disabled: !validateEmail(email) || password.length < 6, onClick: signInWithEmail }, { children: [_jsx(IonIcon, { icon: arrowForwardOutline, size: "large" }), "\u00A0\u00A0", _jsx("b", { children: "Sign in with email" })] })), _jsx("div", __assign({ onClick: toggleSignUpMode, className: "ion-text-center", style: { paddingTop: '10px' } }, { children: _jsxs(IonLabel, { children: ["Don't have an account? ", _jsx("b", { children: "Sign Up" })] }) }))] }) }), signUpMode &&
                                        _jsx(IonRow, { children: _jsxs(IonCol, { children: [_jsxs(IonButton, __assign({ expand: "block", disabled: !validateEmail(email) || password.length < 6, onClick: signUp }, { children: [_jsx(IonIcon, { icon: personAdd, size: "large" }), "\u00A0\u00A0", _jsx("b", { children: "Sign Up" })] })), _jsx("div", __assign({ onClick: toggleSignUpMode, className: "ion-text-center", style: { paddingTop: '10px' } }, { children: _jsxs(IonLabel, { children: ["Already have an account? ", _jsx("b", { children: "Sign In" })] }) }))] }) }), _jsx(IonRow, { children: _jsxs(IonCol, { children: [_jsx("div", __assign({ className: "ion-text-center", style: { marginBottom: '10px' } }, { children: _jsx(IonLabel, { children: _jsx("b", { children: "or" }) }) })), _jsxs(IonButton, __assign({ expand: "block", disabled: !validateEmail(email) || password.length > 0, onClick: sendMagicLink }, { children: [_jsx(IonIcon, { icon: link, size: "large" }), "\u00A0\u00A0", _jsx("b", { children: "Send Sign In Link" })] }))] }) })] })), providers &&
                                _jsx("div", __assign({ className: "ion-text-center" }, { children: _jsx(IonLabel, { children: "or, sign in with:" }) })), _jsx(IonGrid, __assign({ class: "ion-padding ion-text-center", style: { maxWidth: '375px' } }, { children: _jsx(IonRow, { children: _jsx(IonCol, { children: providers === null || providers === void 0 ? void 0 : providers.map(function (provider) {
                                            return (_jsx(ProviderSignInButton, { SUPABASE_URL: SUPABASE_URL, SUPABASE_KEY: SUPABASE_KEY, name: provider, color: logoColors[provider] || 'black' }, "provider-".concat(provider)));
                                        }) }) }) }))] })] })), !localUser && (_jsxs(IonItem, __assign({ lines: 'none', detail: false, onClick: function () { return setShowModal(true); } }, { children: [_jsx(IonIcon, { slot: 'start', ios: logInOutline, md: logInSharp }), _jsx("div", __assign({ style: { width: '100%' } }, { children: _jsx(IonButton, __assign({ fill: 'outline', color: 'dark', size: 'small', expand: 'block', strong: true }, { children: "Sign In" })) }))] }))), localUser && (_jsxs(_Fragment, { children: [_jsxs(IonItem, __assign({ lines: 'none', detail: false, style: { cursor: profileFunction ? 'pointer' : 'default' }, onClick: loadProfile }, { children: [_jsx(IonIcon, { slot: 'start', ios: personOutline, md: personSharp }), _jsx(IonLabel, __assign({ className: 'ion-text-center ion-text-wrap' }, { children: _jsx("strong", { children: localUser === null || localUser === void 0 ? void 0 : localUser.email }) }))] })), _jsxs(IonItem, __assign({ lines: 'none', detail: false, onClick: signOut }, { children: [_jsx(IonIcon, { slot: 'start', ios: logOutOutline, md: logOutSharp }), _jsx("div", __assign({ style: { width: '100%' } }, { children: _jsx(IonButton, __assign({ fill: 'outline', color: 'dark', size: 'small', expand: 'block', strong: true }, { children: "Sign Out" })) }))] }))] }))] }));
};
