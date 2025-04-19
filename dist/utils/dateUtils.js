"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNextInvoiceDate = calculateNextInvoiceDate;
exports.formatDate = formatDate;
exports.daysBetween = daysBetween;
exports.isDueSoon = isDueSoon;
exports.getDateRange = getDateRange;
/**
 * Calculate the next invoice date based on the current date and the recurring pattern
 */
function calculateNextInvoiceDate(baseDate, pattern) {
    const nextDate = new Date(baseDate);
    switch (pattern) {
        case "WEEKLY":
            nextDate.setDate(nextDate.getDate() + 7);
            break;
        case "BIWEEKLY":
            nextDate.setDate(nextDate.getDate() + 14);
            break;
        case "MONTHLY":
            nextDate.setMonth(nextDate.getMonth() + 1);
            break;
        case "QUARTERLY":
            nextDate.setMonth(nextDate.getMonth() + 3);
            break;
        case "SEMIANNUALLY":
            nextDate.setMonth(nextDate.getMonth() + 6);
            break;
        case "ANNUALLY":
            nextDate.setFullYear(nextDate.getFullYear() + 1);
            break;
    }
    return nextDate;
}
/**
 * Format a date in a standardized way for display
 */
function formatDate(date) {
    if (!date)
        return "";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
/**
 * Calculate the number of days between two dates
 */
function daysBetween(date1, date2) {
    // Convert to UTC to avoid timezone issues
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    // Calculate difference in milliseconds and convert to days
    const msDifference = Math.abs(utc2 - utc1);
    return Math.floor(msDifference / (1000 * 60 * 60 * 24));
}
/**
 * Check if an invoice is due soon (within the next 7 days)
 */
function isDueSoon(dueDate) {
    const today = new Date();
    const days = daysBetween(today, dueDate);
    // Return true if due date is between today and 7 days from now
    return days <= 7 && dueDate >= today;
}
/**
 * Get a date range for filtering (e.g., last 30 days, last 90 days)
 */
function getDateRange(range) {
    const endDate = new Date();
    let startDate = null;
    if (range === "30days") {
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 30);
    }
    else if (range === "90days") {
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 90);
    }
    return { startDate, endDate };
}
