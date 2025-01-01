/**
 * This object describes contact information shared when requestContact was
 * approved by the user.
 */
export interface RequestContactResponseSent {
    /** Status 'sent' indicates that contact information has been shared. */
    status: "sent";
    /** A status message or result as a string. */
    response: string;
    /** Contains sensitive information shared upon user consent. WARNING: Data
     * from this field should not be trusted. You should only use data from
     * `response` on the bot's server and only after it has been validated. */
    responseUnsafe: {
        /** Authorization date for sharing contact information. */
        auth_date: string;
        /** Object holding user's contact details. */
        contact: {
            /** User's first name. */
            first_name: string;
            /** Optional. User's last name. */
            last_name?: string;
            /** User's phone number. */
            phone_number: string;
            /** Unique identifier of the user. */
            user_id: number;
        };
        /** Hash to verify data authenticity. */
        hash: string;
    };
}

/**
 * This object only contains a status to indicate the cancellation.
 */
export interface RequestContactResponseCancelled {
    /** Status 'cancelled', indicates that user cancelled the contact share
     * request. */
    status: "cancelled";
}

export type RequestContactResponse = RequestContactResponseSent | RequestContactResponseCancelled;
