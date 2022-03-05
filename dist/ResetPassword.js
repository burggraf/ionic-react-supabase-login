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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useState } from 'react';
import { useParams } from 'react-router';
// import { useHistory } from "react-router-dom";
// import StartupService from '../services/startup.service';
import SupabaseAuthService from './supabase.auth.service';
import './ResetPassword.css';
// const startupService = StartupService.getInstance();
// const defaultRoute = startupService.getDefaultRoute();
var supabaseAuthService = SupabaseAuthService.getInstance();
var ResetPassword = function () {
    // const history = useHistory();
    var token = useParams().token;
    var _a = useIonToast(), present = _a[0], dismiss = _a[1];
    var _b = useState(''), password = _b[0], setPassword = _b[1];
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
    var updatePassword = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supabaseAuthService.updatePassword(token, password)];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        toast(error.message);
                    }
                    else {
                        present({
                            color: 'success',
                            message: 'Password successfully updated',
                            cssClass: 'toast',
                            buttons: [{ icon: 'close', handler: function () { return dismiss(); } }],
                            duration: 6000,
                            onDidDismiss: function () {
                                // history.push(defaultRoute);
                                // history.replace(defaultRoute);
                                window.location.href = '/';
                            },
                            //onWillDismiss: () => console.log('will dismiss'),
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(IonPage, { children: [_jsx(IonHeader, { children: _jsxs(IonToolbar, { children: [_jsx(IonButtons, __assign({ slot: "start" }, { children: _jsx(IonBackButton, { defaultHref: "/page" }) })), _jsx(IonTitle, { children: "Reset Password" })] }) }), _jsxs(IonContent, __assign({ fullscreen: true }, { children: [_jsx(IonHeader, __assign({ collapse: "condense" }, { children: _jsx(IonToolbar, { children: _jsx(IonTitle, __assign({ size: "large" }, { children: "Reset Password" })) }) })), _jsxs(IonGrid, __assign({ class: "ion-padding" }, { children: [_jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonLabel, { children: _jsx("b", { children: "New Password" }) }) }) }), _jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonInput, { type: "password", placeholder: "Enter your new password", onIonChange: function (e) { return setPassword(e.detail.value); }, value: password, class: "inputBox" }) }) }), password.length > 0 && password.length < 6 &&
                                _jsx(IonRow, { children: _jsx(IonCol, { children: _jsx(IonLabel, __assign({ color: "danger" }, { children: _jsx("b", { children: "Password too short" }) })) }) }), _jsx(IonRow, { children: _jsx(IonCol, { children: _jsxs(IonButton, __assign({ expand: "block", disabled: password.length < 6, onClick: updatePassword }, { children: [_jsx(IonIcon, { icon: checkmark, size: "large" }), "\u00A0\u00A0", _jsx("b", { children: "Save New Password" })] })) }) })] }))] }))] }));
};
export default ResetPassword;