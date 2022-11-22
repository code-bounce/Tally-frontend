export const loginSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      pattern: "^[0-9]{10}$",
      minLength: 1,
      errorMessage: {
        minLength: "Email field is required",
        pattern: "Invalid email pattern",
      },
    },
    password: {
      type: "string",
      minLength: 1,
      errorMessage: { minLength: "Password field is required" },
    },
  },
  required: ["username", "password"],
  additionalProperties: false,
};
