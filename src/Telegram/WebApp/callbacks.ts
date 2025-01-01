import type { RequestContactResponse } from "./requestContact";

export type ThemeChangedCallback = () => void;
export type ViewportChangedCallback = (eventData: { isStateStable: boolean }) => void;
export type MainButtonClickedCallback = () => void;
export type SecondaryButtonClickedCallback = () => void;
export type BackButtonClickedCallback = () => void;
export type SettingsButtonClickedCallback = () => void;
export type InvoiceClosedCallback = (eventData: { url: string; status: "paid" | "cancelled" | "failed" | "pending" }) => void;
export type PopupClosedCallback = (eventData: { button_id: string | null }) => void;
export type QrTextReceivedCallback = (eventData: { data: string }) => void;
export type ScanQrPopupClosedCallback = () => void;
export type ClipboardTextReceivedCallback = (eventData: { data: string | null }) => void;
export type WriteAccessRequestedCallback = (eventData: { status: "allowed" | "cancelled" }) => void;
export type ContactRequestedCallback = (eventData: RequestContactResponse) => void;
export type BiometricManagerUpdatedCallback = () => void;
export type BiometricAuthRequestedCallback = (eventData: { isAuthenticated: boolean; biometricToken?: string }) => void;
export type BiometricTokenUpdatedCallback = (eventData: { isUpdated: boolean }) => void;


export type CloudStorageSetItemCallback = (error: string | null, success: null | true) => void;
export type CloudStorageGetItemCallback = (error: string | null, value: null | string) => void;
export type CloudStorageGetItemsCallback = (error: string | null, values: null | Record<string, string>) => void;
export type CloudStorageRemoveItemCallback = (error: string | null, success: null | true) => void;
export type CloudStorageRemoveItemsCallback = (error: string | null, success: null | true) => void;
export type CloudStorageGetKeysCallback = (error: string | null, keys: null | string[]) => void;



export type BiometricRequestAccessCallback = (isAccessGranted: boolean) => void;
export type BiometricAuthenticateCallback = (isAuthenticated: boolean, biometricToken?: string) => void;
export type BiometricUpdateBiometricTokenCallback = (applied: boolean) => void;
