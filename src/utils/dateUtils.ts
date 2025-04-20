import { RecurringPattern } from "../../prisma/generated/client";

/**
 * Calculate the next invoice date based on the current date and the recurring pattern
 */
export function calculateNextInvoiceDate(
  baseDate: Date,
  pattern: RecurringPattern
): Date {
  console.log(
    "Calculating next date from:",
    baseDate,
    "with pattern:",
    pattern
  );

  // Pastikan baseDate adalah objek Date yang valid
  const nextDate = new Date(baseDate);

  if (isNaN(nextDate.getTime())) {
    console.error("Invalid date provided:", baseDate);
    // Fallback ke tanggal sekarang jika invalid
    return calculateNextInvoiceDate(new Date(), pattern);
  }

  try {
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
      default:
        console.error("Unknown pattern:", pattern);
        // Default to monthly if pattern is unknown
        nextDate.setMonth(nextDate.getMonth() + 1);
    }

    console.log("Next date calculated:", nextDate);
    return nextDate;
  } catch (error) {
    console.error("Error calculating next date:", error);
    const fallback = new Date();
    fallback.setMonth(fallback.getMonth() + 1);
    return fallback;
  }
}

/**
 * Format a date in a standardized way for display
 */
export function formatDate(date: Date | string): string {
  if (!date) return "";

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
export function daysBetween(date1: Date, date2: Date): number {
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
export function isDueSoon(dueDate: Date): boolean {
  const today = new Date();
  const days = daysBetween(today, dueDate);

  // Return true if due date is between today and 7 days from now
  return days <= 7 && dueDate >= today;
}

/**
 * Get a date range for filtering (e.g., last 30 days, last 90 days)
 */
export function getDateRange(range: "all" | "30days" | "90days"): {
  startDate: Date | null;
  endDate: Date;
} {
  const endDate = new Date();
  let startDate: Date | null = null;

  if (range === "30days") {
    startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
  } else if (range === "90days") {
    startDate = new Date();
    startDate.setDate(startDate.getDate() - 90);
  }

  return { startDate, endDate };
}
