import { HTTPException } from "hono/http-exception";

export const badRequestException = () => {
  throw new HTTPException(400, { message: "bad request" });
};

export const unauthorizedException = () => {
  throw new HTTPException(401, { message: "unauthorized" });
};

export const serverErrorException = () => {
  throw new HTTPException(500, { message: "internal server error" });
};
