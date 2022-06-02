export default class ApiError extends Error {
      static BadRequest() {
        return new ApiError('FS operation failed')
    }
}
