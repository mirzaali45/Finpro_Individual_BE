"use strict";
// import { responseError } from "../helpers/responseError";
// import { NextFunction, Request, Response } from "express";
// import { decode, JwtPayload, TokenExpiredError, verify } from "jsonwebtoken";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
// type User = {
//   id: number; // Your token uses 'id'
//   user_id: number; // But your controller expects 'user_id'
//   role: string;
// };
// declare module "express" {
//   interface Request {
//     user?: User;
//   }
// }
// export class AuthMiddleware {
//   verifyToken(req: Request, res: Response, next: NextFunction) {
//     try {
//       let token = req.headers.authorization?.replace("Bearer ", "");
//       if (!token) throw "Verification Failed";
//       const decoded = verify(token, process.env.SECRET_KEY!) as JwtPayload;
//       // Map the token fields to what your controller expects
//       req.user = {
//         id: decoded.id as number,
//         user_id: decoded.id as number, // Map 'id' from token to 'user_id' for the controller
//         role: decoded.role as string,
//       };
//       next();
//     } catch (error) {
//       responseError(res, error);
//     }
//   }
//   verifyExpiredToken(req: Request, res: Response, next: NextFunction) {
//     try {
//       let token = req.headers.authorization?.replace("Bearer ", "");
//       if (!token) throw "Verification Failed";
//       const user = verify(token, process.env.SECRET_KEY!) as JwtPayload;
//       // Validasi manual token expired
//       if (user.exp && Date.now() >= user.exp * 86400) {
//         throw new TokenExpiredError(
//           "Token expired",
//           new Date(user.exp * 86400)
//         );
//       }
//       req.user = {
//         id: user.id as number,
//         user_id: user.id as number, // Map 'id' from token to 'user_id' for the controller
//         role: user.role as string,
//       };
//       next();
//     } catch (error) {
//       if (error instanceof TokenExpiredError) {
//         return res.status(300);
//       } else {
//         return res.status(200);
//       }
//     }
//   }
//   checkRole(role: string) {
//     return (req: Request, res: Response, next: NextFunction) => {
//       try {
//         const token = req.headers.authorization?.replace("Bearer ", "");
//         if (!token) throw "Verification Failed";
//         const decoded = decode(token);
//         if (typeof decoded !== "string" && decoded && decoded.role === role) {
//           next();
//         } else {
//           throw `You Are Not Authorized! Required role: ${role}`;
//         }
//       } catch (error) {
//         responseError(res, error);
//       }
//     };
//   }
//   isBusiness = this.checkRole("business");
//   isAdmin = this.checkRole("admin");
//   checkBusinessOrAdmin(req: Request, res: Response, next: NextFunction) {
//     try {
//       if (!req.user) throw new Error("Unauthorized");
//       const userRole = req.user.role;
//       if (userRole === "business" || userRole === "admin") {
//         return next();
//       }
//       throw new Error("You do not have permission to access this resource");
//     } catch (error) {
//       responseError(res, error);
//     }
//   }
//   checkResourceOwnerOrAdmin(req: Request, res: Response, next: NextFunction) {
//     try {
//       if (!req.user) throw new Error("Unauthorized");
//       const resourceUserId = Number(req.params.user_id || req.body.user_id);
//       const userId = req.user.user_id; // Using user_id as expected by controller
//       const userRole = req.user.role;
//       if (userRole === "admin") {
//         return next(); // Admin can access all resources
//       }
//       if (isNaN(resourceUserId)) {
//         throw new Error("Invalid resource ID");
//       }
//       if (resourceUserId !== userId) {
//         throw new Error("You do not have permission to access this resource");
//       }
//       next();
//     } catch (error) {
//       responseError(res, error);
//     }
//   }
// }
const responseError_1 = require("../helpers/responseError");
const jsonwebtoken_1 = require("jsonwebtoken");
const client_1 = require("../../prisma/generated/client");
const prisma = new client_1.PrismaClient();
class AuthMiddleware {
    verifyToken(req, res, next) {
        var _a;
        try {
            let token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
            if (!token)
                throw "Verification Failed";
            const decoded = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY);
            // Map the token fields to what the controller expects
            req.user = {
                id: decoded.id,
                user_id: decoded.id, // Map 'id' from token to 'user_id' for the controller
            };
            next();
        }
        catch (error) {
            (0, responseError_1.responseError)(res, error);
        }
    }
    verifyExpiredToken(req, res, next) {
        var _a;
        try {
            let token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
            if (!token)
                throw "Verification Failed";
            const user = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY);
            // Check if token is expired
            if (user.exp && Date.now() >= user.exp * 1000) {
                throw new jsonwebtoken_1.TokenExpiredError("Token expired", new Date(user.exp * 1000));
            }
            req.user = {
                id: user.id,
                user_id: user.id,
            };
            next();
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                return res.status(401).json({ message: "Token expired" });
            }
            else {
                return res.status(401).json({ message: "Invalid token" });
            }
        }
    }
    checkResourceOwner(req, res, next) {
        try {
            if (!req.user)
                throw new Error("Unauthorized");
            const resourceUserId = Number(req.params.user_id || req.body.user_id);
            const userId = req.user.user_id;
            if (isNaN(resourceUserId)) {
                throw new Error("Invalid resource ID");
            }
            if (resourceUserId !== userId) {
                throw new Error("You do not have permission to access this resource");
            }
            next();
        }
        catch (error) {
            (0, responseError_1.responseError)(res, error);
        }
    }
    checkProfileOwner(req, res, next) {
        try {
            if (!req.user)
                throw new Error("Unauthorized");
            const profileId = Number(req.params.profile_id);
            const userId = req.user.user_id;
            if (isNaN(profileId)) {
                throw new Error("Invalid profile ID");
            }
            // Check if the profile belongs to the user
            prisma.profile
                .findUnique({
                where: { profile_id: profileId },
            })
                .then((profile) => {
                if (!profile || profile.user_id !== userId) {
                    throw new Error("You do not have permission to access this profile");
                }
                next();
            })
                .catch((error) => {
                (0, responseError_1.responseError)(res, error);
            });
        }
        catch (error) {
            (0, responseError_1.responseError)(res, error);
        }
    }
    // Check if bank account belongs to the user
    checkBankAccountOwner(req, res, next) {
        try {
            if (!req.user)
                throw new Error("Unauthorized");
            const bankAccountId = Number(req.params.id);
            const userId = req.user.user_id;
            if (isNaN(bankAccountId)) {
                throw new Error("Invalid bank account ID");
            }
            // Check if the bank account belongs to the user's profile
            prisma.bankAccount
                .findUnique({
                where: { id: bankAccountId },
                include: { profile: true },
            })
                .then((bankAccount) => {
                if (!bankAccount || bankAccount.profile.user_id !== userId) {
                    throw new Error("You do not have permission to access this bank account");
                }
                next();
            })
                .catch((error) => {
                (0, responseError_1.responseError)(res, error);
            });
        }
        catch (error) {
            (0, responseError_1.responseError)(res, error);
        }
    }
    // Check if e-wallet belongs to the user
    checkEWalletOwner(req, res, next) {
        try {
            if (!req.user)
                throw new Error("Unauthorized");
            const eWalletId = Number(req.params.id);
            const userId = req.user.user_id;
            if (isNaN(eWalletId)) {
                throw new Error("Invalid e-wallet ID");
            }
            // Check if the e-wallet belongs to the user's profile
            prisma.eWallet
                .findUnique({
                where: { id: eWalletId },
                include: { profile: true },
            })
                .then((eWallet) => {
                if (!eWallet || eWallet.profile.user_id !== userId) {
                    throw new Error("You do not have permission to access this e-wallet");
                }
                next();
            })
                .catch((error) => {
                (0, responseError_1.responseError)(res, error);
            });
        }
        catch (error) {
            (0, responseError_1.responseError)(res, error);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
