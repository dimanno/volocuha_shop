class ApiError extends Error{
    constructor(status, message) {
        super();
        this.message = message;
        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    };

    static created(message) {
        return new ApiError(201, message);
    };
    static noData(message) {
        return new ApiError(204, message);
    };

    static badRequest(message) {
        return new ApiError(400, message);
    };
    static invalidClient(message) {
        return new ApiError(401, message);
    };
    static forbidden(message) {
        return new ApiError(403, message);
    };
    static conflict(message) {
        return new ApiError(409, message);
    };


    static internal(message) {
        return new ApiError(500, message);
    };
}

module.exports = ApiError;
