import crypto from "node:crypto";

export const generateId = (input: string | undefined) => {
  if (typeof input === "string") return crypto.createHash("sha256").update(input).digest("hex");
  else
    return crypto
      .createHash("sha256")
      .update(Math.floor(Date.now() * Math.random()).toString())
      .digest("hex");
};
