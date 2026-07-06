import AppError from "./app-error.js";

class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(message, 422);
  }
}

export default ValidationError;