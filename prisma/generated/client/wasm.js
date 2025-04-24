
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  email: 'email',
  username: 'username',
  password: 'password',
  phone: 'phone',
  first_name: 'first_name',
  last_name: 'last_name',
  avatar: 'avatar',
  is_google: 'is_google',
  verified: 'verified',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  verify_token: 'verify_token',
  password_reset_token: 'password_reset_token'
};

exports.Prisma.ProfileScalarFieldEnum = {
  profile_id: 'profile_id',
  user_id: 'user_id',
  company_name: 'company_name',
  address: 'address',
  city: 'city',
  state: 'state',
  postal_code: 'postal_code',
  country: 'country',
  logo: 'logo',
  website: 'website',
  tax_number: 'tax_number',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BankAccountScalarFieldEnum = {
  id: 'id',
  profile_id: 'profile_id',
  bank_name: 'bank_name',
  account_number: 'account_number',
  account_name: 'account_name',
  is_primary: 'is_primary',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.EWalletScalarFieldEnum = {
  id: 'id',
  profile_id: 'profile_id',
  wallet_type: 'wallet_type',
  phone_number: 'phone_number',
  account_name: 'account_name',
  is_primary: 'is_primary',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ClientScalarFieldEnum = {
  client_id: 'client_id',
  user_id: 'user_id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  address: 'address',
  city: 'city',
  state: 'state',
  postal_code: 'postal_code',
  country: 'country',
  company_name: 'company_name',
  payment_preference: 'payment_preference',
  notes: 'notes',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.ProductScalarFieldEnum = {
  product_id: 'product_id',
  user_id: 'user_id',
  name: 'name',
  description: 'description',
  price: 'price',
  unit: 'unit',
  tax_rate: 'tax_rate',
  category: 'category',
  image: 'image',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  invoice_id: 'invoice_id',
  user_id: 'user_id',
  client_id: 'client_id',
  invoice_number: 'invoice_number',
  issue_date: 'issue_date',
  due_date: 'due_date',
  status: 'status',
  subtotal: 'subtotal',
  tax_amount: 'tax_amount',
  discount_amount: 'discount_amount',
  total_amount: 'total_amount',
  notes: 'notes',
  terms: 'terms',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  source_recurring_id: 'source_recurring_id'
};

exports.Prisma.InvoiceItemScalarFieldEnum = {
  item_id: 'item_id',
  invoice_id: 'invoice_id',
  product_id: 'product_id',
  description: 'description',
  quantity: 'quantity',
  unit_price: 'unit_price',
  tax_rate: 'tax_rate',
  tax_amount: 'tax_amount',
  amount: 'amount'
};

exports.Prisma.PaymentScalarFieldEnum = {
  payment_id: 'payment_id',
  invoice_id: 'invoice_id',
  amount: 'amount',
  payment_date: 'payment_date',
  payment_method: 'payment_method',
  reference: 'reference',
  notes: 'notes',
  created_at: 'created_at',
  eWalletId: 'eWalletId',
  bankAccountId: 'bankAccountId'
};

exports.Prisma.RecurringInvoiceScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  client_id: 'client_id',
  pattern: 'pattern',
  next_invoice_date: 'next_invoice_date',
  start_date: 'start_date',
  end_date: 'end_date',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.RecurringInvoiceItemScalarFieldEnum = {
  id: 'id',
  recurring_id: 'recurring_id',
  product_id: 'product_id',
  description: 'description',
  quantity: 'quantity',
  unit_price: 'unit_price',
  tax_rate: 'tax_rate'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.InvoiceStatus = exports.$Enums.InvoiceStatus = {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  PAID: 'PAID',
  PARTIAL: 'PARTIAL',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  E_WALLET: 'E_WALLET',
  OTHER: 'OTHER'
};

exports.RecurringPattern = exports.$Enums.RecurringPattern = {
  WEEKLY: 'WEEKLY',
  BIWEEKLY: 'BIWEEKLY',
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  SEMIANNUALLY: 'SEMIANNUALLY',
  ANNUALLY: 'ANNUALLY'
};

exports.Prisma.ModelName = {
  User: 'User',
  Profile: 'Profile',
  BankAccount: 'BankAccount',
  EWallet: 'EWallet',
  Client: 'Client',
  Product: 'Product',
  Invoice: 'Invoice',
  InvoiceItem: 'InvoiceItem',
  Payment: 'Payment',
  RecurringInvoice: 'RecurringInvoice',
  RecurringInvoiceItem: 'RecurringInvoiceItem'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
