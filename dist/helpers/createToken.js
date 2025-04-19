"use strict";
// import { sign, verify, SignOptions } from "jsonwebtoken";
// import "dotenv/config";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
// const SECRET_KEY = process.env.SECRET_KEY || "Temporarykey";
// interface TokenPayload {
//   id: number;
//   role: string;
// }
// interface EmailTokenPayload extends TokenPayload {
//   email: string;
// }
// interface ResetPassTokenPayload extends TokenPayload {
//   resetPassword: string;
// }
// interface EmailChangeTokenPayload {
//   userId: number;
//   newEmail: string;
// }
// class TokenService {
//   private createTokenWithExpiry(
//     payload:
//       | TokenPayload
//       | EmailTokenPayload
//       | ResetPassTokenPayload
//       | EmailChangeTokenPayload,
//     expiresIn: number
//   ): string {
//     try {
//       const options: SignOptions = { expiresIn };
//       return sign(payload, SECRET_KEY, options);
//     } catch (error) {
//       console.error("Token generation failed:", error);
//       throw new Error("Failed to generate token");
//     }
//   }
//   createAccessToken(payload: TokenPayload): string {
//     return this.createTokenWithExpiry(payload, 3600); // 1 hour in seconds
//   }
//   createLoginToken(payload: TokenPayload): string {
//     return this.createTokenWithExpiry(payload, 86400); // 24 hours in seconds
//   }
//   createOAuthToken(payload: EmailTokenPayload): string {
//     return this.createTokenWithExpiry(payload, 86400);
//   }
//   createEmailRegisterToken(payload: EmailTokenPayload): string {
//     return this.createTokenWithExpiry(payload, 3600);
//   }
//   createEmailToken(payload: EmailTokenPayload): string {
//     return this.createTokenWithExpiry(payload, 86400);
//   }
//   createResetToken(payload: ResetPassTokenPayload): string {
//     return this.createTokenWithExpiry(payload, 86400);
//   }
//   createEmailChangeToken(payload: EmailChangeTokenPayload): string {
//     return this.createTokenWithExpiry(payload, 3600); // Token valid for 1 hour
//   }
//   verifyEmailToken(token: string): EmailTokenPayload {
//     try {
//       return verify(token, SECRET_KEY) as EmailTokenPayload;
//     } catch (error) {
//       console.error("Email token verification failed:", error);
//       throw new Error("Invalid or expired email token");
//     }
//   }
//   verifyEmailChangeToken(token: string): EmailChangeTokenPayload {
//     try {
//       return verify(token, SECRET_KEY) as EmailChangeTokenPayload;
//     } catch (error) {
//       console.error("Email change token verification failed:", error);
//       throw new Error("Invalid or expired email change token");
//     }
//   }
// }
// export const tokenService = new TokenService();
// src/helpers/createToken.ts
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const SECRET_KEY = process.env.SECRET_KEY || "Temporarykey";
class TokenService {
    createTokenWithExpiry(payload, expiresIn) {
        try {
            const options = { expiresIn };
            return (0, jsonwebtoken_1.sign)(payload, SECRET_KEY, options);
        }
        catch (error) {
            console.error("Token generation failed:", error);
            throw new Error("Failed to generate token");
        }
    }
    createAccessToken(payload) {
        return this.createTokenWithExpiry(payload, 3600); // 1 hour in seconds
    }
    createLoginToken(payload) {
        return this.createTokenWithExpiry(payload, 86400); // 24 hours in seconds
    }
    createOAuthToken(payload) {
        return this.createTokenWithExpiry(payload, 86400);
    }
    createEmailRegisterToken(payload) {
        return this.createTokenWithExpiry(payload, 3600);
    }
    createEmailToken(payload) {
        return this.createTokenWithExpiry(payload, 86400);
    }
    createResetToken(payload) {
        return this.createTokenWithExpiry(payload, 86400);
    }
    createEmailChangeToken(payload) {
        return this.createTokenWithExpiry(payload, 3600); // Token valid for 1 hour
    }
    verifyEmailToken(token) {
        try {
            return (0, jsonwebtoken_1.verify)(token, SECRET_KEY);
        }
        catch (error) {
            console.error("Email token verification failed:", error);
            throw new Error("Invalid or expired email token");
        }
    }
    verifyEmailChangeToken(token) {
        try {
            return (0, jsonwebtoken_1.verify)(token, SECRET_KEY);
        }
        catch (error) {
            console.error("Email change token verification failed:", error);
            throw new Error("Invalid or expired email change token");
        }
    }
}
exports.tokenService = new TokenService();
