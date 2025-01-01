import type { BiometricAuthenticateCallback, BiometricRequestAccessCallback, BiometricUpdateBiometricTokenCallback } from "./callbacks";

/**
 * This object controls biometrics on the device. Before the first use of this
 * object, it needs to be initialized using the init method.
 */
export interface BiometricManager {
    /**
     * Shows whether biometrics object is initialized.
     */
    isInited: boolean;
    /**
     * Shows whether biometrics is available on the current device.
     */
    isBiometricAvailable: boolean;
    /**
     * The type of biometrics currently available on the device. Can be one of
     * these values:
     * - finger, fingerprint-based biometrics,
     * - face, face-based biometrics,
     * - unknown, biometrics of an unknown type.
     */
    biometricType: "finger" | "face" | "unkown";
    /**
     * Shows whether permission to use biometrics has been requested.
     */
    isAccessRequested: boolean;
    /**
     * Shows whether permission to use biometrics has been granted.
     */
    isAccessGranted: boolean;
    /**
     * Shows whether the token is saved in secure storage on the device.
     */
    isBiometricTokenSaved: boolean;
    /**
     * A unique device identifier that can be used to match the token to the
     * device.
     */
    deviceId: string;
    /**
     * A method that initializes the BiometricManager object. It should be
     * called before the object's first use. If an optional callback parameter
     * was passed, the callback function will be called when the object is
     * initialized.
     */
    init: (callback?: () => void) => BiometricManager;
    /**
     * A method that requests permission to use biometrics according to the
     * params argument of type BiometricRequestAccessParams. If an optional
     * callback parameter was passed, the callback function will be called and
     * the first argument will be a boolean indicating whether the user granted
     * access.
     */
    requestAccess: (
        params: BiometricRequestAccessParams,
        callback?: BiometricRequestAccessCallback,
    ) => BiometricManager;
    /**
     * A method that authenticates the user using biometrics according to the
     * params argument of type BiometricAuthenticateParams. If an optional
     * callback parameter was passed, the callback function will be called and
     * the first argument will be a boolean indicating whether the user
     * authenticated successfully.
     *
     * If so, the second argument will be a biometric token.
     */
    authenticate: (
        params: BiometricAuthenticateParams,
        callback?: BiometricAuthenticateCallback,
    ) => BiometricManager;
    /**
     * A method that updates the biometric token in secure storage on the
     * device. To remove the token, pass an empty string. If an optional
     * callback parameter was passed, the callback function will be called and
     * the first argument will be a boolean indicating whether the token was
     * updated.
     */
    updateBiometricToken: (
        token: string,
        callback?: BiometricUpdateBiometricTokenCallback,
    ) => BiometricManager;
    /**
     * A method that opens the biometric access settings for bots. Useful when
     * you need to request biometrics access to users who haven't granted it
     * yet.
     *
     * Note that this method can be called only in response to user interaction
     * with the Mini App interface (e.g. a click inside the Mini App or on the
     * main button)
     */
    openSettings: () => BiometricManager;
}

export interface BiometricRequestAccessParams {
    /**
     * The text to be displayed to a user in the popup describing why the bot
     * needs access to biometrics, 0-128 characters.
     */
    reason?: string;
}

/**
 * This object describes the native popup for authenticating the user using
 * biometrics.
 */
export interface BiometricAuthenticateParams {
    /**
     * The text to be displayed to a user in the popup describing why you are
     * asking them to authenticate and what action you will be taking based on
     * that authentication, 0-128 characters.
     */
    reason?: string;
}
