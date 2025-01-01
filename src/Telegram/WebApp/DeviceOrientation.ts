/**
 * This object provides access to orientation data on the device.
 *
 * All these methods return the DeviceOrientation object so they can be chained.
*/
export interface DeviceOrientation {
    /** Indicates whether device orientation tracking is currently active. */
    isStarted: boolean;

    /** A boolean that indicates whether or not the device is providing orientation data in absolute values. */
    absolute: boolean;

    /** The rotation around the Z-axis, measured in radians. */
    alpha: number;

    /** The rotation around the X-axis, measured in radians. */
    beta: number;

    /** The rotation around the Y-axis, measured in radians. */
    gamma: number;

    /**
     * **Bot API 8.0+** Starts tracking device orientation data using params of type DeviceOrientationStartParams.
     * If an optional callback parameter is provided, the callback function will be called with a boolean indicating
     * whether tracking was successfully started.
     */
    start(params: DeviceOrientationStartParams, callback: () => void): void;

    /**
     * **Bot API 8.0+** Stops tracking device orientation data. If an optional callback parameter is provided,
     * the callback function will be called with a boolean indicating whether tracking was successfully stopped.
     */
    stop(callback: () => void): void;
}


/** This object defines the parameters for starting device orientation tracking. */
export interface DeviceOrientationStartParams {
    /**
     * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000.
     * Set to 1000 by default. Note that refresh_rate may not be supported on all platforms,
     * so the actual tracking frequency may differ from the specified value.
    */
    refresh_rate?: number;

    /**
     * Pass true to receive absolute orientation data, allowing you to determine
     * the device's attitude relative to magnetic north. Use this option if implementing features like a compass in your app.
     * If relative data is sufficient, pass false. Set to false by default.

     * Note: Keep in mind that some devices may not support absolute orientation data. In such cases,
     * you will receive relative data even if need_absolute=true is passed. Check the DeviceOrientation.absolute parameter to determine whether the data provided is absolute or relative.
    */
    need_absolute?: boolean;
}
