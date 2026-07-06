import AppError from "./app-error.js";

class ConflictError extends AppError {
  constructor(message = "Conflict") {
    super(message, 409);
  }
}

export default ConflictError;