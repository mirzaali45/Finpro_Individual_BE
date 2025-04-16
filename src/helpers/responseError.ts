import { Response } from "express";

export const responseError = (res: Response, error: any) => {
  console.error("Error:", error);
  
  if (error instanceof Error) {
    return res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
  
  return res.status(400).json({
    status: "Error",
    message: error,
  });
};