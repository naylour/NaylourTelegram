export interface LocationManager {
    /** Shows whether the LocationManager object has been initialized. */
    isInited: boolean;

    /** Shows whether location services are available on the current device. */
    isLocationAvailable: boolean;

    /** Shows whether permission to use location has been requested. */
    isAccessRequested: boolean;

    /** Shows whether permission to use location has been granted. */
    isAccessGranted: boolean;

    /**
     * **Bot API 8.0+** A method that initializes the LocationManager object.
     * It should be called before the object's first use. If an optional callback parameter is provided,
     * the callback function will be called when the object is initialized.
     */
    init(callback: () => void): void;

    /**
     * **Bot API 8.0+** A method that requests location data.
     * The callback function will be called with null as the first argument if access to location was not granted,
     * or an object of type LocationData as the first argument if access was successful.
     */
    getLocation(callback: (data: LocationData) => void): void;

    /**
     * **Bot API 8.0+** A method that opens the location access settings for bots.
     * Useful when you need to request location access from users who haven't granted it yet.

     * Note that this method can be called only in response to user interaction with the Mini App interface (e.g., a click inside the Mini App or on the main button).
     */
    openSettings(): void;
}

/** This object contains data about the current location. */
export interface LocationData {
    /** Latitude in degrees. */
    latitude: number;

    /** Longitude in degrees. */
    longitude: number;

    /** Altitude above sea level in meters. null if altitude data is not available on the device. */
    altitude: number;

    /** The direction the device is moving in degrees (0 = North, 90 = East, 180 = South, 270 = West).
     * null if course data is not available on the device.
    */
    course: number;

    /** The speed of the device in m/s. null if speed data is not available on the device. */
    speed: number;

    /** Accuracy of the latitude and longitude values in meters. null if horizontal accuracy data is not available on the device. */
    horizontal_accuracy: number;

    /** Accuracy of the altitude value in meters. null if vertical accuracy data is not available on the device. */
    vertical_accuracy: number;

    /** Accuracy of the course value in degrees. null if course accuracy data is not available on the device. */
    course_accuracy: number;

    /** Accuracy of the speed value in m/s. null if speed accuracy data is not available on the device. */
    speed_accuracy: number;

}
