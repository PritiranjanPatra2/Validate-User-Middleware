function validateRegistration(req, res, next) {
  const { firstName, lastName, password, email, phone } = req.body;

  const nameRegex = /^[A-Z]/;
  if (!nameRegex.test(firstName)) {
    return next({ message: "First name must start with a capital letter." });
  }
  if (!nameRegex.test(lastName)) {
    return next({ message: "Last name must start with a capital letter." });
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    return next({
      message:
        "Password must contain at least one uppercase letter, one numeric character, one special character, and be at least 8 characters long.",
    });
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    return next({ message: "Email address is invalid." });
  }
  const phoneRegex = /^\d{10,}$/;
  if (!phoneRegex.test(phone)) {
    return next({ message: "Phone number must be at least 10 digits long." });
  }

  next();
}
function errorHandler(err, req, res, next) {
  if (err) {
    res.status(err.status || 400).json({
      error: true,
      message: err.message || "An error occurred",
    });
  } else {
    next();
  }
}
export { errorHandler, validateRegistration };
