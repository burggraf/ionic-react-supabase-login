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
import { IonButton, IonIcon, IonLoading, useIonToast } from '@ionic/react';
import { addIcons } from 'ionicons';
import { logoApple, logoBitbucket, logoDiscord, logoFacebook, logoGithub, logoGitlab, logoGoogle, logoLinkedin, logoMicrosoft, logoSlack, logoTwitch, logoTwitter } from 'ionicons/icons';
import { useState } from 'react';
// import logoNotion from './notion.svg';
//import logoSpotify from './spotify.svg'
// import { useHistory } from 'react-router'
import SupabaseAuthService from './supabase.auth.service';
//import logoZoom from './zoom.svg'
import './ProviderSignInButton.css';
addIcons({
    apple: logoApple,
    bitbucket: logoBitbucket,
    discord: logoDiscord,
    facebook: logoFacebook,
    github: logoGithub,
    gitlab: logoGitlab,
    google: logoGoogle,
    twitch: logoTwitch,
    twitter: logoTwitter,
    slack: logoSlack,
    spotify: './spotify.svg',
    notion: './notion.svg',
    zoom: './zoom.svg',
    microsoft: logoMicrosoft,
    azure: logoMicrosoft,
    linkedin: logoLinkedin
});
var supabaseAuthService;
var ProviderSignInButton = function (_a) {
    var name = _a.name, color = _a.color, SUPABASE_URL = _a.SUPABASE_URL, SUPABASE_KEY = _a.SUPABASE_KEY;
    var _b = useState(false), showLoading = _b[0], setShowLoading = _b[1];
    if (!supabaseAuthService) {
        supabaseAuthService = SupabaseAuthService.getInstance(SUPABASE_URL, SUPABASE_KEY);
    }
    // const nameProperCase = name.charAt(0).toUpperCase() + name.slice(1)
    // const history = useHistory()
    var signInWithProvider = function (provider) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, user, session, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, supabaseAuthService.signInWithProvider(provider)];
                case 1:
                    _a = _b.sent(), user = _a.user, session = _a.session, error = _a.error;
                    console.log('user', user);
                    console.log('session', session);
                    console.log('error', error);
                    if (error) {
                        toast(error.message);
                        setShowLoading(false);
                    }
                    else {
                        // *** we can't get here becuase of the third-party redirect...
                        // if (onSignIn) {
                        // 	onSignIn(user, session);
                        // }
                        //window.location.href = '/';
                        // history.replace('/')
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var _c = useIonToast(), present = _c[0], dismiss = _c[1];
    var toast = function (message, color) {
        if (color === void 0) { color = 'danger'; }
        present({
            color: color,
            message: message,
            cssClass: 'toast',
            buttons: [{ icon: 'close', handler: function () { return dismiss(); } }],
            duration: 6000,
            //onDidDismiss: () => console.log('dismissed'),
            //onWillDismiss: () => console.log('will dismiss'),
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(IonLoading, { isOpen: showLoading, message: 'Loading' }), _jsxs(IonButton
            // expand='block'
            // color='primary'
            , __assign({ 
                // expand='block'
                // color='primary'
                fill: 'clear', className: 'round-button', style: { margin: '8px', color: color || 'primary' }, onClick: function () {
                    signInWithProvider(name);
                } }, { children: [name.startsWith('./') &&
                        _jsx(IonIcon, { src: name, size: 'large', slot: "icon-only" }), !name.startsWith('./') &&
                        _jsx(IonIcon, { icon: name, size: 'large', slot: "icon-only" })] }))] }));
};
export default ProviderSignInButton;
