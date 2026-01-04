
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model BankAccount
 * 
 */
export type BankAccount = $Result.DefaultSelection<Prisma.$BankAccountPayload>
/**
 * Model EWallet
 * 
 */
export type EWallet = $Result.DefaultSelection<Prisma.$EWalletPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model RecurringInvoice
 * 
 */
export type RecurringInvoice = $Result.DefaultSelection<Prisma.$RecurringInvoicePayload>
/**
 * Model RecurringInvoiceItem
 * 
 */
export type RecurringInvoiceItem = $Result.DefaultSelection<Prisma.$RecurringInvoiceItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InvoiceStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  PAID: 'PAID',
  PARTIAL: 'PARTIAL',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const RecurringPattern: {
  WEEKLY: 'WEEKLY',
  BIWEEKLY: 'BIWEEKLY',
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  SEMIANNUALLY: 'SEMIANNUALLY',
  ANNUALLY: 'ANNUALLY'
};

export type RecurringPattern = (typeof RecurringPattern)[keyof typeof RecurringPattern]


export const PaymentMethod: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  E_WALLET: 'E_WALLET',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type RecurringPattern = $Enums.RecurringPattern

export const RecurringPattern: typeof $Enums.RecurringPattern

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eWallet`: Exposes CRUD operations for the **EWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EWallets
    * const eWallets = await prisma.eWallet.findMany()
    * ```
    */
  get eWallet(): Prisma.EWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringInvoice`: Exposes CRUD operations for the **RecurringInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringInvoices
    * const recurringInvoices = await prisma.recurringInvoice.findMany()
    * ```
    */
  get recurringInvoice(): Prisma.RecurringInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringInvoiceItem`: Exposes CRUD operations for the **RecurringInvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringInvoiceItems
    * const recurringInvoiceItems = await prisma.recurringInvoiceItem.findMany()
    * ```
    */
  get recurringInvoiceItem(): Prisma.RecurringInvoiceItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "bankAccount" | "eWallet" | "client" | "product" | "invoice" | "invoiceItem" | "payment" | "recurringInvoice" | "recurringInvoiceItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      BankAccount: {
        payload: Prisma.$BankAccountPayload<ExtArgs>
        fields: Prisma.BankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findFirst: {
            args: Prisma.BankAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findMany: {
            args: Prisma.BankAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          create: {
            args: Prisma.BankAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          createMany: {
            args: Prisma.BankAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          delete: {
            args: Prisma.BankAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          update: {
            args: Prisma.BankAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          upsert: {
            args: Prisma.BankAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          aggregate: {
            args: Prisma.BankAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccount>
          }
          groupBy: {
            args: Prisma.BankAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankAccountCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountCountAggregateOutputType> | number
          }
        }
      }
      EWallet: {
        payload: Prisma.$EWalletPayload<ExtArgs>
        fields: Prisma.EWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>
          }
          findFirst: {
            args: Prisma.EWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>
          }
          findMany: {
            args: Prisma.EWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>[]
          }
          create: {
            args: Prisma.EWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>
          }
          createMany: {
            args: Prisma.EWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>[]
          }
          delete: {
            args: Prisma.EWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>
          }
          update: {
            args: Prisma.EWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>
          }
          deleteMany: {
            args: Prisma.EWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>[]
          }
          upsert: {
            args: Prisma.EWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EWalletPayload>
          }
          aggregate: {
            args: Prisma.EWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEWallet>
          }
          groupBy: {
            args: Prisma.EWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<EWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.EWalletCountArgs<ExtArgs>
            result: $Utils.Optional<EWalletCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItem: {
        payload: Prisma.$InvoiceItemPayload<ExtArgs>
        fields: Prisma.InvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          update: {
            args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItem>
          }
          groupBy: {
            args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      RecurringInvoice: {
        payload: Prisma.$RecurringInvoicePayload<ExtArgs>
        fields: Prisma.RecurringInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>
          }
          findFirst: {
            args: Prisma.RecurringInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>
          }
          findMany: {
            args: Prisma.RecurringInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>[]
          }
          create: {
            args: Prisma.RecurringInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>
          }
          createMany: {
            args: Prisma.RecurringInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>[]
          }
          delete: {
            args: Prisma.RecurringInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>
          }
          update: {
            args: Prisma.RecurringInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>
          }
          deleteMany: {
            args: Prisma.RecurringInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>[]
          }
          upsert: {
            args: Prisma.RecurringInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoicePayload>
          }
          aggregate: {
            args: Prisma.RecurringInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringInvoice>
          }
          groupBy: {
            args: Prisma.RecurringInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringInvoiceCountAggregateOutputType> | number
          }
        }
      }
      RecurringInvoiceItem: {
        payload: Prisma.$RecurringInvoiceItemPayload<ExtArgs>
        fields: Prisma.RecurringInvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringInvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringInvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.RecurringInvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringInvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>
          }
          findMany: {
            args: Prisma.RecurringInvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>[]
          }
          create: {
            args: Prisma.RecurringInvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>
          }
          createMany: {
            args: Prisma.RecurringInvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringInvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.RecurringInvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>
          }
          update: {
            args: Prisma.RecurringInvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.RecurringInvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringInvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringInvoiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>[]
          }
          upsert: {
            args: Prisma.RecurringInvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringInvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.RecurringInvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringInvoiceItem>
          }
          groupBy: {
            args: Prisma.RecurringInvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringInvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringInvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringInvoiceItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    bankAccount?: BankAccountOmit
    eWallet?: EWalletOmit
    client?: ClientOmit
    product?: ProductOmit
    invoice?: InvoiceOmit
    invoiceItem?: InvoiceItemOmit
    payment?: PaymentOmit
    recurringInvoice?: RecurringInvoiceOmit
    recurringInvoiceItem?: RecurringInvoiceItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clients: number
    invoices: number
    products: number
    RecurringInvoice: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | UserCountOutputTypeCountClientsArgs
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
    products?: boolean | UserCountOutputTypeCountProductsArgs
    RecurringInvoice?: boolean | UserCountOutputTypeCountRecurringInvoiceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecurringInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringInvoiceWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    bank_accounts: number
    e_wallets: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank_accounts?: boolean | ProfileCountOutputTypeCountBank_accountsArgs
    e_wallets?: boolean | ProfileCountOutputTypeCountE_walletsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountBank_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountE_walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EWalletWhereInput
  }


  /**
   * Count Type BankAccountCountOutputType
   */

  export type BankAccountCountOutputType = {
    payments: number
  }

  export type BankAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BankAccountCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountCountOutputType
     */
    select?: BankAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type EWalletCountOutputType
   */

  export type EWalletCountOutputType = {
    payments: number
  }

  export type EWalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | EWalletCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * EWalletCountOutputType without action
   */
  export type EWalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWalletCountOutputType
     */
    select?: EWalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EWalletCountOutputType without action
   */
  export type EWalletCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    invoices: number
    RecurringInvoice: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ClientCountOutputTypeCountInvoicesArgs
    RecurringInvoice?: boolean | ClientCountOutputTypeCountRecurringInvoiceArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountRecurringInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringInvoiceWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    invoiceItems: number
    RecurringInvoiceItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoiceItems?: boolean | ProductCountOutputTypeCountInvoiceItemsArgs
    RecurringInvoiceItem?: boolean | ProductCountOutputTypeCountRecurringInvoiceItemArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInvoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRecurringInvoiceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringInvoiceItemWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    items: number
    payments: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoiceCountOutputTypeCountItemsArgs
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type RecurringInvoiceCountOutputType
   */

  export type RecurringInvoiceCountOutputType = {
    generated_invoices: number
    items: number
  }

  export type RecurringInvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generated_invoices?: boolean | RecurringInvoiceCountOutputTypeCountGenerated_invoicesArgs
    items?: boolean | RecurringInvoiceCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * RecurringInvoiceCountOutputType without action
   */
  export type RecurringInvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceCountOutputType
     */
    select?: RecurringInvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecurringInvoiceCountOutputType without action
   */
  export type RecurringInvoiceCountOutputTypeCountGenerated_invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * RecurringInvoiceCountOutputType without action
   */
  export type RecurringInvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringInvoiceItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    username: string | null
    password: string | null
    phone: string | null
    first_name: string | null
    last_name: string | null
    avatar: string | null
    is_google: boolean | null
    verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    verify_token: string | null
    password_reset_token: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    username: string | null
    password: string | null
    phone: string | null
    first_name: string | null
    last_name: string | null
    avatar: string | null
    is_google: boolean | null
    verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    verify_token: string | null
    password_reset_token: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    username: number
    password: number
    phone: number
    first_name: number
    last_name: number
    avatar: number
    is_google: number
    verified: number
    created_at: number
    updated_at: number
    deleted_at: number
    verify_token: number
    password_reset_token: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    username?: true
    password?: true
    phone?: true
    first_name?: true
    last_name?: true
    avatar?: true
    is_google?: true
    verified?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    verify_token?: true
    password_reset_token?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    username?: true
    password?: true
    phone?: true
    first_name?: true
    last_name?: true
    avatar?: true
    is_google?: true
    verified?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    verify_token?: true
    password_reset_token?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    username?: true
    password?: true
    phone?: true
    first_name?: true
    last_name?: true
    avatar?: true
    is_google?: true
    verified?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    verify_token?: true
    password_reset_token?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    email: string
    username: string | null
    password: string | null
    phone: string | null
    first_name: string | null
    last_name: string | null
    avatar: string | null
    is_google: boolean
    verified: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    verify_token: string | null
    password_reset_token: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar?: boolean
    is_google?: boolean
    verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    verify_token?: boolean
    password_reset_token?: boolean
    clients?: boolean | User$clientsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    RecurringInvoice?: boolean | User$RecurringInvoiceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar?: boolean
    is_google?: boolean
    verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    verify_token?: boolean
    password_reset_token?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar?: boolean
    is_google?: boolean
    verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    verify_token?: boolean
    password_reset_token?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar?: boolean
    is_google?: boolean
    verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    verify_token?: boolean
    password_reset_token?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "username" | "password" | "phone" | "first_name" | "last_name" | "avatar" | "is_google" | "verified" | "created_at" | "updated_at" | "deleted_at" | "verify_token" | "password_reset_token", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | User$clientsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    RecurringInvoice?: boolean | User$RecurringInvoiceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      RecurringInvoice: Prisma.$RecurringInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      username: string | null
      password: string | null
      phone: string | null
      first_name: string | null
      last_name: string | null
      avatar: string | null
      is_google: boolean
      verified: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      verify_token: string | null
      password_reset_token: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    RecurringInvoice<T extends User$RecurringInvoiceArgs<ExtArgs> = {}>(args?: Subset<T, User$RecurringInvoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly is_google: FieldRef<"User", 'Boolean'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
    readonly verify_token: FieldRef<"User", 'String'>
    readonly password_reset_token: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.RecurringInvoice
   */
  export type User$RecurringInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    where?: RecurringInvoiceWhereInput
    orderBy?: RecurringInvoiceOrderByWithRelationInput | RecurringInvoiceOrderByWithRelationInput[]
    cursor?: RecurringInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringInvoiceScalarFieldEnum | RecurringInvoiceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    company_name: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    logo: string | null
    website: string | null
    tax_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    company_name: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    logo: string | null
    website: string | null
    tax_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    profile_id: number
    user_id: number
    company_name: number
    address: number
    city: number
    state: number
    postal_code: number
    country: number
    logo: number
    website: number
    tax_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    profile_id?: true
    user_id?: true
  }

  export type ProfileSumAggregateInputType = {
    profile_id?: true
    user_id?: true
  }

  export type ProfileMinAggregateInputType = {
    profile_id?: true
    user_id?: true
    company_name?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    logo?: true
    website?: true
    tax_number?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfileMaxAggregateInputType = {
    profile_id?: true
    user_id?: true
    company_name?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    logo?: true
    website?: true
    tax_number?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfileCountAggregateInputType = {
    profile_id?: true
    user_id?: true
    company_name?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    logo?: true
    website?: true
    tax_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    profile_id: number
    user_id: number
    company_name: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    logo: string | null
    website: string | null
    tax_number: string | null
    created_at: Date
    updated_at: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    user_id?: boolean
    company_name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    logo?: boolean
    website?: boolean
    tax_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    bank_accounts?: boolean | Profile$bank_accountsArgs<ExtArgs>
    e_wallets?: boolean | Profile$e_walletsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    user_id?: boolean
    company_name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    logo?: boolean
    website?: boolean
    tax_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    user_id?: boolean
    company_name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    logo?: boolean
    website?: boolean
    tax_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    profile_id?: boolean
    user_id?: boolean
    company_name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    logo?: boolean
    website?: boolean
    tax_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profile_id" | "user_id" | "company_name" | "address" | "city" | "state" | "postal_code" | "country" | "logo" | "website" | "tax_number" | "created_at" | "updated_at", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank_accounts?: boolean | Profile$bank_accountsArgs<ExtArgs>
    e_wallets?: boolean | Profile$e_walletsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      bank_accounts: Prisma.$BankAccountPayload<ExtArgs>[]
      e_wallets: Prisma.$EWalletPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: number
      user_id: number
      company_name: string | null
      address: string | null
      city: string | null
      state: string | null
      postal_code: string | null
      country: string | null
      logo: string | null
      website: string | null
      tax_number: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.createManyAndReturn({
     *   select: { profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.updateManyAndReturn({
     *   select: { profile_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank_accounts<T extends Profile$bank_accountsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$bank_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    e_wallets<T extends Profile$e_walletsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$e_walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly profile_id: FieldRef<"Profile", 'Int'>
    readonly user_id: FieldRef<"Profile", 'Int'>
    readonly company_name: FieldRef<"Profile", 'String'>
    readonly address: FieldRef<"Profile", 'String'>
    readonly city: FieldRef<"Profile", 'String'>
    readonly state: FieldRef<"Profile", 'String'>
    readonly postal_code: FieldRef<"Profile", 'String'>
    readonly country: FieldRef<"Profile", 'String'>
    readonly logo: FieldRef<"Profile", 'String'>
    readonly website: FieldRef<"Profile", 'String'>
    readonly tax_number: FieldRef<"Profile", 'String'>
    readonly created_at: FieldRef<"Profile", 'DateTime'>
    readonly updated_at: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.bank_accounts
   */
  export type Profile$bank_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * Profile.e_wallets
   */
  export type Profile$e_walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    where?: EWalletWhereInput
    orderBy?: EWalletOrderByWithRelationInput | EWalletOrderByWithRelationInput[]
    cursor?: EWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EWalletScalarFieldEnum | EWalletScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model BankAccount
   */

  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountAvgAggregateOutputType = {
    id: number | null
    profile_id: number | null
  }

  export type BankAccountSumAggregateOutputType = {
    id: number | null
    profile_id: number | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: number | null
    profile_id: number | null
    bank_name: string | null
    account_number: string | null
    account_name: string | null
    is_primary: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: number | null
    profile_id: number | null
    bank_name: string | null
    account_number: string | null
    account_name: string | null
    is_primary: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    profile_id: number
    bank_name: number
    account_number: number
    account_name: number
    is_primary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BankAccountAvgAggregateInputType = {
    id?: true
    profile_id?: true
  }

  export type BankAccountSumAggregateInputType = {
    id?: true
    profile_id?: true
  }

  export type BankAccountMinAggregateInputType = {
    id?: true
    profile_id?: true
    bank_name?: true
    account_number?: true
    account_name?: true
    is_primary?: true
    created_at?: true
    updated_at?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    profile_id?: true
    bank_name?: true
    account_number?: true
    account_name?: true
    is_primary?: true
    created_at?: true
    updated_at?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    profile_id?: true
    bank_name?: true
    account_number?: true
    account_name?: true
    is_primary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithAggregationInput | BankAccountOrderByWithAggregationInput[]
    by: BankAccountScalarFieldEnum[] | BankAccountScalarFieldEnum
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _avg?: BankAccountAvgAggregateInputType
    _sum?: BankAccountSumAggregateInputType
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }

  export type BankAccountGroupByOutputType = {
    id: number
    profile_id: number
    bank_name: string
    account_number: string
    account_name: string
    is_primary: boolean
    created_at: Date
    updated_at: Date
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    bank_name?: boolean
    account_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    payments?: boolean | BankAccount$paymentsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    bank_name?: boolean
    account_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    bank_name?: boolean
    account_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectScalar = {
    id?: boolean
    profile_id?: boolean
    bank_name?: boolean
    account_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BankAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profile_id" | "bank_name" | "account_number" | "account_name" | "is_primary" | "created_at" | "updated_at", ExtArgs["result"]["bankAccount"]>
  export type BankAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    payments?: boolean | BankAccount$paymentsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $BankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccount"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profile_id: number
      bank_name: string
      account_number: string
      account_name: string
      is_primary: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bankAccount"]>
    composites: {}
  }

  type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountDefaultArgs> = $Result.GetResult<Prisma.$BankAccountPayload, S>

  type BankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccount'], meta: { name: 'BankAccount' } }
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankAccountFindUniqueArgs>(args: SelectSubset<T, BankAccountFindUniqueArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, BankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankAccountFindFirstArgs>(args?: SelectSubset<T, BankAccountFindFirstArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankAccountFindManyArgs>(args?: SelectSubset<T, BankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
     */
    create<T extends BankAccountCreateArgs>(args: SelectSubset<T, BankAccountCreateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccounts.
     * @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankAccountCreateManyArgs>(args?: SelectSubset<T, BankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankAccounts and returns the data saved in the database.
     * @param {BankAccountCreateManyAndReturnArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, BankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
     */
    delete<T extends BankAccountDeleteArgs>(args: SelectSubset<T, BankAccountDeleteArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankAccountUpdateArgs>(args: SelectSubset<T, BankAccountUpdateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankAccountDeleteManyArgs>(args?: SelectSubset<T, BankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankAccountUpdateManyArgs>(args: SelectSubset<T, BankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts and returns the data updated in the database.
     * @param {BankAccountUpdateManyAndReturnArgs} args - Arguments to update many BankAccounts.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, BankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
     */
    upsert<T extends BankAccountUpsertArgs>(args: SelectSubset<T, BankAccountUpsertArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccount model
   */
  readonly fields: BankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends BankAccount$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankAccount model
   */
  interface BankAccountFieldRefs {
    readonly id: FieldRef<"BankAccount", 'Int'>
    readonly profile_id: FieldRef<"BankAccount", 'Int'>
    readonly bank_name: FieldRef<"BankAccount", 'String'>
    readonly account_number: FieldRef<"BankAccount", 'String'>
    readonly account_name: FieldRef<"BankAccount", 'String'>
    readonly is_primary: FieldRef<"BankAccount", 'Boolean'>
    readonly created_at: FieldRef<"BankAccount", 'DateTime'>
    readonly updated_at: FieldRef<"BankAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankAccount findUnique
   */
  export type BankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findFirst
   */
  export type BankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }

  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankAccount createManyAndReturn
   */
  export type BankAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
  }

  /**
   * BankAccount updateManyAndReturn
   */
  export type BankAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }

  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to delete.
     */
    limit?: number
  }

  /**
   * BankAccount.payments
   */
  export type BankAccount$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * BankAccount without action
   */
  export type BankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
  }


  /**
   * Model EWallet
   */

  export type AggregateEWallet = {
    _count: EWalletCountAggregateOutputType | null
    _avg: EWalletAvgAggregateOutputType | null
    _sum: EWalletSumAggregateOutputType | null
    _min: EWalletMinAggregateOutputType | null
    _max: EWalletMaxAggregateOutputType | null
  }

  export type EWalletAvgAggregateOutputType = {
    id: number | null
    profile_id: number | null
  }

  export type EWalletSumAggregateOutputType = {
    id: number | null
    profile_id: number | null
  }

  export type EWalletMinAggregateOutputType = {
    id: number | null
    profile_id: number | null
    wallet_type: string | null
    phone_number: string | null
    account_name: string | null
    is_primary: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EWalletMaxAggregateOutputType = {
    id: number | null
    profile_id: number | null
    wallet_type: string | null
    phone_number: string | null
    account_name: string | null
    is_primary: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EWalletCountAggregateOutputType = {
    id: number
    profile_id: number
    wallet_type: number
    phone_number: number
    account_name: number
    is_primary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EWalletAvgAggregateInputType = {
    id?: true
    profile_id?: true
  }

  export type EWalletSumAggregateInputType = {
    id?: true
    profile_id?: true
  }

  export type EWalletMinAggregateInputType = {
    id?: true
    profile_id?: true
    wallet_type?: true
    phone_number?: true
    account_name?: true
    is_primary?: true
    created_at?: true
    updated_at?: true
  }

  export type EWalletMaxAggregateInputType = {
    id?: true
    profile_id?: true
    wallet_type?: true
    phone_number?: true
    account_name?: true
    is_primary?: true
    created_at?: true
    updated_at?: true
  }

  export type EWalletCountAggregateInputType = {
    id?: true
    profile_id?: true
    wallet_type?: true
    phone_number?: true
    account_name?: true
    is_primary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EWallet to aggregate.
     */
    where?: EWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EWallets to fetch.
     */
    orderBy?: EWalletOrderByWithRelationInput | EWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EWallets
    **/
    _count?: true | EWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EWalletMaxAggregateInputType
  }

  export type GetEWalletAggregateType<T extends EWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateEWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEWallet[P]>
      : GetScalarType<T[P], AggregateEWallet[P]>
  }




  export type EWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EWalletWhereInput
    orderBy?: EWalletOrderByWithAggregationInput | EWalletOrderByWithAggregationInput[]
    by: EWalletScalarFieldEnum[] | EWalletScalarFieldEnum
    having?: EWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EWalletCountAggregateInputType | true
    _avg?: EWalletAvgAggregateInputType
    _sum?: EWalletSumAggregateInputType
    _min?: EWalletMinAggregateInputType
    _max?: EWalletMaxAggregateInputType
  }

  export type EWalletGroupByOutputType = {
    id: number
    profile_id: number
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary: boolean
    created_at: Date
    updated_at: Date
    _count: EWalletCountAggregateOutputType | null
    _avg: EWalletAvgAggregateOutputType | null
    _sum: EWalletSumAggregateOutputType | null
    _min: EWalletMinAggregateOutputType | null
    _max: EWalletMaxAggregateOutputType | null
  }

  type GetEWalletGroupByPayload<T extends EWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EWalletGroupByOutputType[P]>
            : GetScalarType<T[P], EWalletGroupByOutputType[P]>
        }
      >
    >


  export type EWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    wallet_type?: boolean
    phone_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    payments?: boolean | EWallet$paymentsArgs<ExtArgs>
    _count?: boolean | EWalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eWallet"]>

  export type EWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    wallet_type?: boolean
    phone_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eWallet"]>

  export type EWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    wallet_type?: boolean
    phone_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eWallet"]>

  export type EWalletSelectScalar = {
    id?: boolean
    profile_id?: boolean
    wallet_type?: boolean
    phone_number?: boolean
    account_name?: boolean
    is_primary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profile_id" | "wallet_type" | "phone_number" | "account_name" | "is_primary" | "created_at" | "updated_at", ExtArgs["result"]["eWallet"]>
  export type EWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    payments?: boolean | EWallet$paymentsArgs<ExtArgs>
    _count?: boolean | EWalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type EWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $EWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EWallet"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profile_id: number
      wallet_type: string
      phone_number: string
      account_name: string
      is_primary: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["eWallet"]>
    composites: {}
  }

  type EWalletGetPayload<S extends boolean | null | undefined | EWalletDefaultArgs> = $Result.GetResult<Prisma.$EWalletPayload, S>

  type EWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EWalletCountAggregateInputType | true
    }

  export interface EWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EWallet'], meta: { name: 'EWallet' } }
    /**
     * Find zero or one EWallet that matches the filter.
     * @param {EWalletFindUniqueArgs} args - Arguments to find a EWallet
     * @example
     * // Get one EWallet
     * const eWallet = await prisma.eWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EWalletFindUniqueArgs>(args: SelectSubset<T, EWalletFindUniqueArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EWalletFindUniqueOrThrowArgs} args - Arguments to find a EWallet
     * @example
     * // Get one EWallet
     * const eWallet = await prisma.eWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, EWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EWalletFindFirstArgs} args - Arguments to find a EWallet
     * @example
     * // Get one EWallet
     * const eWallet = await prisma.eWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EWalletFindFirstArgs>(args?: SelectSubset<T, EWalletFindFirstArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EWalletFindFirstOrThrowArgs} args - Arguments to find a EWallet
     * @example
     * // Get one EWallet
     * const eWallet = await prisma.eWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, EWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EWallets
     * const eWallets = await prisma.eWallet.findMany()
     * 
     * // Get first 10 EWallets
     * const eWallets = await prisma.eWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eWalletWithIdOnly = await prisma.eWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EWalletFindManyArgs>(args?: SelectSubset<T, EWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EWallet.
     * @param {EWalletCreateArgs} args - Arguments to create a EWallet.
     * @example
     * // Create one EWallet
     * const EWallet = await prisma.eWallet.create({
     *   data: {
     *     // ... data to create a EWallet
     *   }
     * })
     * 
     */
    create<T extends EWalletCreateArgs>(args: SelectSubset<T, EWalletCreateArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EWallets.
     * @param {EWalletCreateManyArgs} args - Arguments to create many EWallets.
     * @example
     * // Create many EWallets
     * const eWallet = await prisma.eWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EWalletCreateManyArgs>(args?: SelectSubset<T, EWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EWallets and returns the data saved in the database.
     * @param {EWalletCreateManyAndReturnArgs} args - Arguments to create many EWallets.
     * @example
     * // Create many EWallets
     * const eWallet = await prisma.eWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EWallets and only return the `id`
     * const eWalletWithIdOnly = await prisma.eWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, EWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EWallet.
     * @param {EWalletDeleteArgs} args - Arguments to delete one EWallet.
     * @example
     * // Delete one EWallet
     * const EWallet = await prisma.eWallet.delete({
     *   where: {
     *     // ... filter to delete one EWallet
     *   }
     * })
     * 
     */
    delete<T extends EWalletDeleteArgs>(args: SelectSubset<T, EWalletDeleteArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EWallet.
     * @param {EWalletUpdateArgs} args - Arguments to update one EWallet.
     * @example
     * // Update one EWallet
     * const eWallet = await prisma.eWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EWalletUpdateArgs>(args: SelectSubset<T, EWalletUpdateArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EWallets.
     * @param {EWalletDeleteManyArgs} args - Arguments to filter EWallets to delete.
     * @example
     * // Delete a few EWallets
     * const { count } = await prisma.eWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EWalletDeleteManyArgs>(args?: SelectSubset<T, EWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EWallets
     * const eWallet = await prisma.eWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EWalletUpdateManyArgs>(args: SelectSubset<T, EWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EWallets and returns the data updated in the database.
     * @param {EWalletUpdateManyAndReturnArgs} args - Arguments to update many EWallets.
     * @example
     * // Update many EWallets
     * const eWallet = await prisma.eWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EWallets and only return the `id`
     * const eWalletWithIdOnly = await prisma.eWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, EWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EWallet.
     * @param {EWalletUpsertArgs} args - Arguments to update or create a EWallet.
     * @example
     * // Update or create a EWallet
     * const eWallet = await prisma.eWallet.upsert({
     *   create: {
     *     // ... data to create a EWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EWallet we want to update
     *   }
     * })
     */
    upsert<T extends EWalletUpsertArgs>(args: SelectSubset<T, EWalletUpsertArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EWalletCountArgs} args - Arguments to filter EWallets to count.
     * @example
     * // Count the number of EWallets
     * const count = await prisma.eWallet.count({
     *   where: {
     *     // ... the filter for the EWallets we want to count
     *   }
     * })
    **/
    count<T extends EWalletCountArgs>(
      args?: Subset<T, EWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EWalletAggregateArgs>(args: Subset<T, EWalletAggregateArgs>): Prisma.PrismaPromise<GetEWalletAggregateType<T>>

    /**
     * Group by EWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EWalletGroupByArgs['orderBy'] }
        : { orderBy?: EWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EWallet model
   */
  readonly fields: EWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends EWallet$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, EWallet$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EWallet model
   */
  interface EWalletFieldRefs {
    readonly id: FieldRef<"EWallet", 'Int'>
    readonly profile_id: FieldRef<"EWallet", 'Int'>
    readonly wallet_type: FieldRef<"EWallet", 'String'>
    readonly phone_number: FieldRef<"EWallet", 'String'>
    readonly account_name: FieldRef<"EWallet", 'String'>
    readonly is_primary: FieldRef<"EWallet", 'Boolean'>
    readonly created_at: FieldRef<"EWallet", 'DateTime'>
    readonly updated_at: FieldRef<"EWallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EWallet findUnique
   */
  export type EWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * Filter, which EWallet to fetch.
     */
    where: EWalletWhereUniqueInput
  }

  /**
   * EWallet findUniqueOrThrow
   */
  export type EWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * Filter, which EWallet to fetch.
     */
    where: EWalletWhereUniqueInput
  }

  /**
   * EWallet findFirst
   */
  export type EWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * Filter, which EWallet to fetch.
     */
    where?: EWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EWallets to fetch.
     */
    orderBy?: EWalletOrderByWithRelationInput | EWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EWallets.
     */
    cursor?: EWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EWallets.
     */
    distinct?: EWalletScalarFieldEnum | EWalletScalarFieldEnum[]
  }

  /**
   * EWallet findFirstOrThrow
   */
  export type EWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * Filter, which EWallet to fetch.
     */
    where?: EWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EWallets to fetch.
     */
    orderBy?: EWalletOrderByWithRelationInput | EWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EWallets.
     */
    cursor?: EWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EWallets.
     */
    distinct?: EWalletScalarFieldEnum | EWalletScalarFieldEnum[]
  }

  /**
   * EWallet findMany
   */
  export type EWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * Filter, which EWallets to fetch.
     */
    where?: EWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EWallets to fetch.
     */
    orderBy?: EWalletOrderByWithRelationInput | EWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EWallets.
     */
    cursor?: EWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EWallets.
     */
    skip?: number
    distinct?: EWalletScalarFieldEnum | EWalletScalarFieldEnum[]
  }

  /**
   * EWallet create
   */
  export type EWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a EWallet.
     */
    data: XOR<EWalletCreateInput, EWalletUncheckedCreateInput>
  }

  /**
   * EWallet createMany
   */
  export type EWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EWallets.
     */
    data: EWalletCreateManyInput | EWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EWallet createManyAndReturn
   */
  export type EWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * The data used to create many EWallets.
     */
    data: EWalletCreateManyInput | EWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EWallet update
   */
  export type EWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a EWallet.
     */
    data: XOR<EWalletUpdateInput, EWalletUncheckedUpdateInput>
    /**
     * Choose, which EWallet to update.
     */
    where: EWalletWhereUniqueInput
  }

  /**
   * EWallet updateMany
   */
  export type EWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EWallets.
     */
    data: XOR<EWalletUpdateManyMutationInput, EWalletUncheckedUpdateManyInput>
    /**
     * Filter which EWallets to update
     */
    where?: EWalletWhereInput
    /**
     * Limit how many EWallets to update.
     */
    limit?: number
  }

  /**
   * EWallet updateManyAndReturn
   */
  export type EWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * The data used to update EWallets.
     */
    data: XOR<EWalletUpdateManyMutationInput, EWalletUncheckedUpdateManyInput>
    /**
     * Filter which EWallets to update
     */
    where?: EWalletWhereInput
    /**
     * Limit how many EWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EWallet upsert
   */
  export type EWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the EWallet to update in case it exists.
     */
    where: EWalletWhereUniqueInput
    /**
     * In case the EWallet found by the `where` argument doesn't exist, create a new EWallet with this data.
     */
    create: XOR<EWalletCreateInput, EWalletUncheckedCreateInput>
    /**
     * In case the EWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EWalletUpdateInput, EWalletUncheckedUpdateInput>
  }

  /**
   * EWallet delete
   */
  export type EWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    /**
     * Filter which EWallet to delete.
     */
    where: EWalletWhereUniqueInput
  }

  /**
   * EWallet deleteMany
   */
  export type EWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EWallets to delete
     */
    where?: EWalletWhereInput
    /**
     * Limit how many EWallets to delete.
     */
    limit?: number
  }

  /**
   * EWallet.payments
   */
  export type EWallet$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * EWallet without action
   */
  export type EWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    client_id: number | null
    user_id: number | null
  }

  export type ClientSumAggregateOutputType = {
    client_id: number | null
    user_id: number | null
  }

  export type ClientMinAggregateOutputType = {
    client_id: number | null
    user_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    company_name: string | null
    payment_preference: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    client_id: number | null
    user_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    company_name: string | null
    payment_preference: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClientCountAggregateOutputType = {
    client_id: number
    user_id: number
    name: number
    email: number
    phone: number
    address: number
    city: number
    state: number
    postal_code: number
    country: number
    company_name: number
    payment_preference: number
    notes: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    client_id?: true
    user_id?: true
  }

  export type ClientSumAggregateInputType = {
    client_id?: true
    user_id?: true
  }

  export type ClientMinAggregateInputType = {
    client_id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    company_name?: true
    payment_preference?: true
    notes?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClientMaxAggregateInputType = {
    client_id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    company_name?: true
    payment_preference?: true
    notes?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClientCountAggregateInputType = {
    client_id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    company_name?: true
    payment_preference?: true
    notes?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    client_id: number
    user_id: number
    name: string
    email: string
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    company_name: string | null
    payment_preference: string | null
    notes: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    company_name?: boolean
    payment_preference?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    RecurringInvoice?: boolean | Client$RecurringInvoiceArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    company_name?: boolean
    payment_preference?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    company_name?: boolean
    payment_preference?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    client_id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    company_name?: boolean
    payment_preference?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"client_id" | "user_id" | "name" | "email" | "phone" | "address" | "city" | "state" | "postal_code" | "country" | "company_name" | "payment_preference" | "notes" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | Client$invoicesArgs<ExtArgs>
    RecurringInvoice?: boolean | Client$RecurringInvoiceArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      RecurringInvoice: Prisma.$RecurringInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      client_id: number
      user_id: number
      name: string
      email: string
      phone: string | null
      address: string | null
      city: string | null
      state: string | null
      postal_code: string | null
      country: string | null
      company_name: string | null
      payment_preference: string | null
      notes: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const clientWithClient_idOnly = await prisma.client.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `client_id`
     * const clientWithClient_idOnly = await prisma.client.createManyAndReturn({
     *   select: { client_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `client_id`
     * const clientWithClient_idOnly = await prisma.client.updateManyAndReturn({
     *   select: { client_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoices<T extends Client$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RecurringInvoice<T extends Client$RecurringInvoiceArgs<ExtArgs> = {}>(args?: Subset<T, Client$RecurringInvoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly client_id: FieldRef<"Client", 'Int'>
    readonly user_id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly state: FieldRef<"Client", 'String'>
    readonly postal_code: FieldRef<"Client", 'String'>
    readonly country: FieldRef<"Client", 'String'>
    readonly company_name: FieldRef<"Client", 'String'>
    readonly payment_preference: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly created_at: FieldRef<"Client", 'DateTime'>
    readonly updated_at: FieldRef<"Client", 'DateTime'>
    readonly deleted_at: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.invoices
   */
  export type Client$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Client.RecurringInvoice
   */
  export type Client$RecurringInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    where?: RecurringInvoiceWhereInput
    orderBy?: RecurringInvoiceOrderByWithRelationInput | RecurringInvoiceOrderByWithRelationInput[]
    cursor?: RecurringInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringInvoiceScalarFieldEnum | RecurringInvoiceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    price: Decimal | null
    tax_rate: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    price: Decimal | null
    tax_rate: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    unit: string | null
    tax_rate: Decimal | null
    category: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    product_id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    unit: string | null
    tax_rate: Decimal | null
    category: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    product_id: number
    user_id: number
    name: number
    description: number
    price: number
    unit: number
    tax_rate: number
    category: number
    image: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    product_id?: true
    user_id?: true
    price?: true
    tax_rate?: true
  }

  export type ProductSumAggregateInputType = {
    product_id?: true
    user_id?: true
    price?: true
    tax_rate?: true
  }

  export type ProductMinAggregateInputType = {
    product_id?: true
    user_id?: true
    name?: true
    description?: true
    price?: true
    unit?: true
    tax_rate?: true
    category?: true
    image?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProductMaxAggregateInputType = {
    product_id?: true
    user_id?: true
    name?: true
    description?: true
    price?: true
    unit?: true
    tax_rate?: true
    category?: true
    image?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProductCountAggregateInputType = {
    product_id?: true
    user_id?: true
    name?: true
    description?: true
    price?: true
    unit?: true
    tax_rate?: true
    category?: true
    image?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    product_id: number
    user_id: number
    name: string
    description: string | null
    price: Decimal
    unit: string | null
    tax_rate: Decimal | null
    category: string | null
    image: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tax_rate?: boolean
    category?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    invoiceItems?: boolean | Product$invoiceItemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    RecurringInvoiceItem?: boolean | Product$RecurringInvoiceItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tax_rate?: boolean
    category?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tax_rate?: boolean
    category?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    product_id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tax_rate?: boolean
    category?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "user_id" | "name" | "description" | "price" | "unit" | "tax_rate" | "category" | "image" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoiceItems?: boolean | Product$invoiceItemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    RecurringInvoiceItem?: boolean | Product$RecurringInvoiceItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      invoiceItems: Prisma.$InvoiceItemPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      RecurringInvoiceItem: Prisma.$RecurringInvoiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      user_id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      unit: string | null
      tax_rate: Prisma.Decimal | null
      category: string | null
      image: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productWithProduct_idOnly = await prisma.product.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoiceItems<T extends Product$invoiceItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$invoiceItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    RecurringInvoiceItem<T extends Product$RecurringInvoiceItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$RecurringInvoiceItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly product_id: FieldRef<"Product", 'Int'>
    readonly user_id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly tax_rate: FieldRef<"Product", 'Decimal'>
    readonly category: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
    readonly deleted_at: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.invoiceItems
   */
  export type Product$invoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Product.RecurringInvoiceItem
   */
  export type Product$RecurringInvoiceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    where?: RecurringInvoiceItemWhereInput
    orderBy?: RecurringInvoiceItemOrderByWithRelationInput | RecurringInvoiceItemOrderByWithRelationInput[]
    cursor?: RecurringInvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringInvoiceItemScalarFieldEnum | RecurringInvoiceItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    invoice_id: number | null
    user_id: number | null
    client_id: number | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
    total_amount: Decimal | null
    source_recurring_id: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    invoice_id: number | null
    user_id: number | null
    client_id: number | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
    total_amount: Decimal | null
    source_recurring_id: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    invoice_id: number | null
    user_id: number | null
    client_id: number | null
    invoice_number: string | null
    issue_date: Date | null
    due_date: Date | null
    status: $Enums.InvoiceStatus | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
    total_amount: Decimal | null
    notes: string | null
    terms: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    source_recurring_id: number | null
  }

  export type InvoiceMaxAggregateOutputType = {
    invoice_id: number | null
    user_id: number | null
    client_id: number | null
    invoice_number: string | null
    issue_date: Date | null
    due_date: Date | null
    status: $Enums.InvoiceStatus | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
    total_amount: Decimal | null
    notes: string | null
    terms: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    source_recurring_id: number | null
  }

  export type InvoiceCountAggregateOutputType = {
    invoice_id: number
    user_id: number
    client_id: number
    invoice_number: number
    issue_date: number
    due_date: number
    status: number
    subtotal: number
    tax_amount: number
    discount_amount: number
    total_amount: number
    notes: number
    terms: number
    created_at: number
    updated_at: number
    deleted_at: number
    source_recurring_id: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    invoice_id?: true
    user_id?: true
    client_id?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
    total_amount?: true
    source_recurring_id?: true
  }

  export type InvoiceSumAggregateInputType = {
    invoice_id?: true
    user_id?: true
    client_id?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
    total_amount?: true
    source_recurring_id?: true
  }

  export type InvoiceMinAggregateInputType = {
    invoice_id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    issue_date?: true
    due_date?: true
    status?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
    total_amount?: true
    notes?: true
    terms?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    source_recurring_id?: true
  }

  export type InvoiceMaxAggregateInputType = {
    invoice_id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    issue_date?: true
    due_date?: true
    status?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
    total_amount?: true
    notes?: true
    terms?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    source_recurring_id?: true
  }

  export type InvoiceCountAggregateInputType = {
    invoice_id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    issue_date?: true
    due_date?: true
    status?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
    total_amount?: true
    notes?: true
    terms?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    source_recurring_id?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    invoice_id: number
    user_id: number
    client_id: number
    invoice_number: string
    issue_date: Date
    due_date: Date
    status: $Enums.InvoiceStatus
    subtotal: Decimal
    tax_amount: Decimal
    discount_amount: Decimal | null
    total_amount: Decimal
    notes: string | null
    terms: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    source_recurring_id: number | null
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoice_id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    issue_date?: boolean
    due_date?: boolean
    status?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    total_amount?: boolean
    notes?: boolean
    terms?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    source_recurring_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    source_recurring?: boolean | Invoice$source_recurringArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoice_id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    issue_date?: boolean
    due_date?: boolean
    status?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    total_amount?: boolean
    notes?: boolean
    terms?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    source_recurring_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    source_recurring?: boolean | Invoice$source_recurringArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoice_id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    issue_date?: boolean
    due_date?: boolean
    status?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    total_amount?: boolean
    notes?: boolean
    terms?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    source_recurring_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    source_recurring?: boolean | Invoice$source_recurringArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    invoice_id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    issue_date?: boolean
    due_date?: boolean
    status?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    total_amount?: boolean
    notes?: boolean
    terms?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    source_recurring_id?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"invoice_id" | "user_id" | "client_id" | "invoice_number" | "issue_date" | "due_date" | "status" | "subtotal" | "tax_amount" | "discount_amount" | "total_amount" | "notes" | "terms" | "created_at" | "updated_at" | "deleted_at" | "source_recurring_id", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    source_recurring?: boolean | Invoice$source_recurringArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    source_recurring?: boolean | Invoice$source_recurringArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    source_recurring?: boolean | Invoice$source_recurringArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      source_recurring: Prisma.$RecurringInvoicePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$InvoiceItemPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      invoice_id: number
      user_id: number
      client_id: number
      invoice_number: string
      issue_date: Date
      due_date: Date
      status: $Enums.InvoiceStatus
      subtotal: Prisma.Decimal
      tax_amount: Prisma.Decimal
      discount_amount: Prisma.Decimal | null
      total_amount: Prisma.Decimal
      notes: string | null
      terms: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      source_recurring_id: number | null
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `invoice_id`
     * const invoiceWithInvoice_idOnly = await prisma.invoice.findMany({ select: { invoice_id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `invoice_id`
     * const invoiceWithInvoice_idOnly = await prisma.invoice.createManyAndReturn({
     *   select: { invoice_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `invoice_id`
     * const invoiceWithInvoice_idOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { invoice_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source_recurring<T extends Invoice$source_recurringArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$source_recurringArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly invoice_id: FieldRef<"Invoice", 'Int'>
    readonly user_id: FieldRef<"Invoice", 'Int'>
    readonly client_id: FieldRef<"Invoice", 'Int'>
    readonly invoice_number: FieldRef<"Invoice", 'String'>
    readonly issue_date: FieldRef<"Invoice", 'DateTime'>
    readonly due_date: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly subtotal: FieldRef<"Invoice", 'Decimal'>
    readonly tax_amount: FieldRef<"Invoice", 'Decimal'>
    readonly discount_amount: FieldRef<"Invoice", 'Decimal'>
    readonly total_amount: FieldRef<"Invoice", 'Decimal'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly terms: FieldRef<"Invoice", 'String'>
    readonly created_at: FieldRef<"Invoice", 'DateTime'>
    readonly updated_at: FieldRef<"Invoice", 'DateTime'>
    readonly deleted_at: FieldRef<"Invoice", 'DateTime'>
    readonly source_recurring_id: FieldRef<"Invoice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.source_recurring
   */
  export type Invoice$source_recurringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    where?: RecurringInvoiceWhereInput
  }

  /**
   * Invoice.items
   */
  export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItem
   */

  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    item_id: number | null
    invoice_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    amount: Decimal | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    item_id: number | null
    invoice_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    amount: Decimal | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    item_id: number | null
    invoice_id: number | null
    product_id: number | null
    description: string | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    amount: Decimal | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    item_id: number | null
    invoice_id: number | null
    product_id: number | null
    description: string | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    amount: Decimal | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    item_id: number
    invoice_id: number
    product_id: number
    description: number
    quantity: number
    unit_price: number
    tax_rate: number
    tax_amount: number
    amount: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    item_id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
    tax_amount?: true
    amount?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    item_id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
    tax_amount?: true
    amount?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    item_id?: true
    invoice_id?: true
    product_id?: true
    description?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
    tax_amount?: true
    amount?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    item_id?: true
    invoice_id?: true
    product_id?: true
    description?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
    tax_amount?: true
    amount?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    item_id?: true
    invoice_id?: true
    product_id?: true
    description?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
    tax_amount?: true
    amount?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItem to aggregate.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
    by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type InvoiceItemGroupByOutputType = {
    item_id: number
    invoice_id: number
    product_id: number
    description: string | null
    quantity: number
    unit_price: Decimal
    tax_rate: Decimal | null
    tax_amount: Decimal | null
    amount: Decimal
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    amount?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    amount?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    amount?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectScalar = {
    item_id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
    tax_amount?: boolean
    amount?: boolean
  }

  export type InvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "invoice_id" | "product_id" | "description" | "quantity" | "unit_price" | "tax_rate" | "tax_amount" | "amount", ExtArgs["result"]["invoiceItem"]>
  export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItem"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: number
      invoice_id: number
      product_id: number
      description: string | null
      quantity: number
      unit_price: Prisma.Decimal
      tax_rate: Prisma.Decimal | null
      tax_amount: Prisma.Decimal | null
      amount: Prisma.Decimal
    }, ExtArgs["result"]["invoiceItem"]>
    composites: {}
  }

  type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

  type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }

  export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const invoiceItemWithItem_idOnly = await prisma.invoiceItem.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `item_id`
     * const invoiceItemWithItem_idOnly = await prisma.invoiceItem.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems and returns the data updated in the database.
     * @param {InvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceItems and only return the `item_id`
     * const invoiceItemWithItem_idOnly = await prisma.invoiceItem.updateManyAndReturn({
     *   select: { item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItem model
   */
  readonly fields: InvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceItem model
   */
  interface InvoiceItemFieldRefs {
    readonly item_id: FieldRef<"InvoiceItem", 'Int'>
    readonly invoice_id: FieldRef<"InvoiceItem", 'Int'>
    readonly product_id: FieldRef<"InvoiceItem", 'Int'>
    readonly description: FieldRef<"InvoiceItem", 'String'>
    readonly quantity: FieldRef<"InvoiceItem", 'Int'>
    readonly unit_price: FieldRef<"InvoiceItem", 'Decimal'>
    readonly tax_rate: FieldRef<"InvoiceItem", 'Decimal'>
    readonly tax_amount: FieldRef<"InvoiceItem", 'Decimal'>
    readonly amount: FieldRef<"InvoiceItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItem findUnique
   */
  export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findFirst
   */
  export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItem.
     */
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }

  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItem createManyAndReturn
   */
  export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItem.
     */
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
  }

  /**
   * InvoiceItem updateManyAndReturn
   */
  export type InvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     */
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     */
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }

  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItem to delete.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    invoice_id: number | null
    amount: Decimal | null
    eWalletId: number | null
    bankAccountId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    invoice_id: number | null
    amount: Decimal | null
    eWalletId: number | null
    bankAccountId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    invoice_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    payment_method: $Enums.PaymentMethod | null
    reference: string | null
    notes: string | null
    created_at: Date | null
    eWalletId: number | null
    bankAccountId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    invoice_id: number | null
    amount: Decimal | null
    payment_date: Date | null
    payment_method: $Enums.PaymentMethod | null
    reference: string | null
    notes: string | null
    created_at: Date | null
    eWalletId: number | null
    bankAccountId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    invoice_id: number
    amount: number
    payment_date: number
    payment_method: number
    reference: number
    notes: number
    created_at: number
    eWalletId: number
    bankAccountId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    invoice_id?: true
    amount?: true
    eWalletId?: true
    bankAccountId?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    invoice_id?: true
    amount?: true
    eWalletId?: true
    bankAccountId?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    invoice_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    reference?: true
    notes?: true
    created_at?: true
    eWalletId?: true
    bankAccountId?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    invoice_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    reference?: true
    notes?: true
    created_at?: true
    eWalletId?: true
    bankAccountId?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    invoice_id?: true
    amount?: true
    payment_date?: true
    payment_method?: true
    reference?: true
    notes?: true
    created_at?: true
    eWalletId?: true
    bankAccountId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    invoice_id: number
    amount: Decimal
    payment_date: Date
    payment_method: $Enums.PaymentMethod
    reference: string | null
    notes: string | null
    created_at: Date
    eWalletId: number | null
    bankAccountId: number | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    invoice_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    reference?: boolean
    notes?: boolean
    created_at?: boolean
    eWalletId?: boolean
    bankAccountId?: boolean
    BankAccount?: boolean | Payment$BankAccountArgs<ExtArgs>
    EWallet?: boolean | Payment$EWalletArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    invoice_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    reference?: boolean
    notes?: boolean
    created_at?: boolean
    eWalletId?: boolean
    bankAccountId?: boolean
    BankAccount?: boolean | Payment$BankAccountArgs<ExtArgs>
    EWallet?: boolean | Payment$EWalletArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    invoice_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    reference?: boolean
    notes?: boolean
    created_at?: boolean
    eWalletId?: boolean
    bankAccountId?: boolean
    BankAccount?: boolean | Payment$BankAccountArgs<ExtArgs>
    EWallet?: boolean | Payment$EWalletArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    payment_id?: boolean
    invoice_id?: boolean
    amount?: boolean
    payment_date?: boolean
    payment_method?: boolean
    reference?: boolean
    notes?: boolean
    created_at?: boolean
    eWalletId?: boolean
    bankAccountId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "invoice_id" | "amount" | "payment_date" | "payment_method" | "reference" | "notes" | "created_at" | "eWalletId" | "bankAccountId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BankAccount?: boolean | Payment$BankAccountArgs<ExtArgs>
    EWallet?: boolean | Payment$EWalletArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BankAccount?: boolean | Payment$BankAccountArgs<ExtArgs>
    EWallet?: boolean | Payment$EWalletArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BankAccount?: boolean | Payment$BankAccountArgs<ExtArgs>
    EWallet?: boolean | Payment$EWalletArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      BankAccount: Prisma.$BankAccountPayload<ExtArgs> | null
      EWallet: Prisma.$EWalletPayload<ExtArgs> | null
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      invoice_id: number
      amount: Prisma.Decimal
      payment_date: Date
      payment_method: $Enums.PaymentMethod
      reference: string | null
      notes: string | null
      created_at: Date
      eWalletId: number | null
      bankAccountId: number | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BankAccount<T extends Payment$BankAccountArgs<ExtArgs> = {}>(args?: Subset<T, Payment$BankAccountArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    EWallet<T extends Payment$EWalletArgs<ExtArgs> = {}>(args?: Subset<T, Payment$EWalletArgs<ExtArgs>>): Prisma__EWalletClient<$Result.GetResult<Prisma.$EWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly payment_id: FieldRef<"Payment", 'Int'>
    readonly invoice_id: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly payment_date: FieldRef<"Payment", 'DateTime'>
    readonly payment_method: FieldRef<"Payment", 'PaymentMethod'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
    readonly eWalletId: FieldRef<"Payment", 'Int'>
    readonly bankAccountId: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.BankAccount
   */
  export type Payment$BankAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
  }

  /**
   * Payment.EWallet
   */
  export type Payment$EWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EWallet
     */
    select?: EWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EWallet
     */
    omit?: EWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EWalletInclude<ExtArgs> | null
    where?: EWalletWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model RecurringInvoice
   */

  export type AggregateRecurringInvoice = {
    _count: RecurringInvoiceCountAggregateOutputType | null
    _avg: RecurringInvoiceAvgAggregateOutputType | null
    _sum: RecurringInvoiceSumAggregateOutputType | null
    _min: RecurringInvoiceMinAggregateOutputType | null
    _max: RecurringInvoiceMaxAggregateOutputType | null
  }

  export type RecurringInvoiceAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
  }

  export type RecurringInvoiceSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
  }

  export type RecurringInvoiceMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    pattern: $Enums.RecurringPattern | null
    next_invoice_date: Date | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RecurringInvoiceMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    pattern: $Enums.RecurringPattern | null
    next_invoice_date: Date | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RecurringInvoiceCountAggregateOutputType = {
    id: number
    user_id: number
    client_id: number
    pattern: number
    next_invoice_date: number
    start_date: number
    end_date: number
    is_active: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type RecurringInvoiceAvgAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
  }

  export type RecurringInvoiceSumAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
  }

  export type RecurringInvoiceMinAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    pattern?: true
    next_invoice_date?: true
    start_date?: true
    end_date?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RecurringInvoiceMaxAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    pattern?: true
    next_invoice_date?: true
    start_date?: true
    end_date?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RecurringInvoiceCountAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    pattern?: true
    next_invoice_date?: true
    start_date?: true
    end_date?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type RecurringInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringInvoice to aggregate.
     */
    where?: RecurringInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoices to fetch.
     */
    orderBy?: RecurringInvoiceOrderByWithRelationInput | RecurringInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringInvoices
    **/
    _count?: true | RecurringInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringInvoiceMaxAggregateInputType
  }

  export type GetRecurringInvoiceAggregateType<T extends RecurringInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringInvoice[P]>
      : GetScalarType<T[P], AggregateRecurringInvoice[P]>
  }




  export type RecurringInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringInvoiceWhereInput
    orderBy?: RecurringInvoiceOrderByWithAggregationInput | RecurringInvoiceOrderByWithAggregationInput[]
    by: RecurringInvoiceScalarFieldEnum[] | RecurringInvoiceScalarFieldEnum
    having?: RecurringInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringInvoiceCountAggregateInputType | true
    _avg?: RecurringInvoiceAvgAggregateInputType
    _sum?: RecurringInvoiceSumAggregateInputType
    _min?: RecurringInvoiceMinAggregateInputType
    _max?: RecurringInvoiceMaxAggregateInputType
  }

  export type RecurringInvoiceGroupByOutputType = {
    id: number
    user_id: number
    client_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date
    start_date: Date
    end_date: Date | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: RecurringInvoiceCountAggregateOutputType | null
    _avg: RecurringInvoiceAvgAggregateOutputType | null
    _sum: RecurringInvoiceSumAggregateOutputType | null
    _min: RecurringInvoiceMinAggregateOutputType | null
    _max: RecurringInvoiceMaxAggregateOutputType | null
  }

  type GetRecurringInvoiceGroupByPayload<T extends RecurringInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type RecurringInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    pattern?: boolean
    next_invoice_date?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    generated_invoices?: boolean | RecurringInvoice$generated_invoicesArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | RecurringInvoice$itemsArgs<ExtArgs>
    _count?: boolean | RecurringInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringInvoice"]>

  export type RecurringInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    pattern?: boolean
    next_invoice_date?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringInvoice"]>

  export type RecurringInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    pattern?: boolean
    next_invoice_date?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringInvoice"]>

  export type RecurringInvoiceSelectScalar = {
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    pattern?: boolean
    next_invoice_date?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type RecurringInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "client_id" | "pattern" | "next_invoice_date" | "start_date" | "end_date" | "is_active" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["recurringInvoice"]>
  export type RecurringInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generated_invoices?: boolean | RecurringInvoice$generated_invoicesArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | RecurringInvoice$itemsArgs<ExtArgs>
    _count?: boolean | RecurringInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecurringInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecurringInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecurringInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringInvoice"
    objects: {
      generated_invoices: Prisma.$InvoicePayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$RecurringInvoiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      client_id: number
      pattern: $Enums.RecurringPattern
      next_invoice_date: Date
      start_date: Date
      end_date: Date | null
      is_active: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["recurringInvoice"]>
    composites: {}
  }

  type RecurringInvoiceGetPayload<S extends boolean | null | undefined | RecurringInvoiceDefaultArgs> = $Result.GetResult<Prisma.$RecurringInvoicePayload, S>

  type RecurringInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringInvoiceCountAggregateInputType | true
    }

  export interface RecurringInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringInvoice'], meta: { name: 'RecurringInvoice' } }
    /**
     * Find zero or one RecurringInvoice that matches the filter.
     * @param {RecurringInvoiceFindUniqueArgs} args - Arguments to find a RecurringInvoice
     * @example
     * // Get one RecurringInvoice
     * const recurringInvoice = await prisma.recurringInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringInvoiceFindUniqueArgs>(args: SelectSubset<T, RecurringInvoiceFindUniqueArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringInvoiceFindUniqueOrThrowArgs} args - Arguments to find a RecurringInvoice
     * @example
     * // Get one RecurringInvoice
     * const recurringInvoice = await prisma.recurringInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceFindFirstArgs} args - Arguments to find a RecurringInvoice
     * @example
     * // Get one RecurringInvoice
     * const recurringInvoice = await prisma.recurringInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringInvoiceFindFirstArgs>(args?: SelectSubset<T, RecurringInvoiceFindFirstArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceFindFirstOrThrowArgs} args - Arguments to find a RecurringInvoice
     * @example
     * // Get one RecurringInvoice
     * const recurringInvoice = await prisma.recurringInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringInvoices
     * const recurringInvoices = await prisma.recurringInvoice.findMany()
     * 
     * // Get first 10 RecurringInvoices
     * const recurringInvoices = await prisma.recurringInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringInvoiceWithIdOnly = await prisma.recurringInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringInvoiceFindManyArgs>(args?: SelectSubset<T, RecurringInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringInvoice.
     * @param {RecurringInvoiceCreateArgs} args - Arguments to create a RecurringInvoice.
     * @example
     * // Create one RecurringInvoice
     * const RecurringInvoice = await prisma.recurringInvoice.create({
     *   data: {
     *     // ... data to create a RecurringInvoice
     *   }
     * })
     * 
     */
    create<T extends RecurringInvoiceCreateArgs>(args: SelectSubset<T, RecurringInvoiceCreateArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringInvoices.
     * @param {RecurringInvoiceCreateManyArgs} args - Arguments to create many RecurringInvoices.
     * @example
     * // Create many RecurringInvoices
     * const recurringInvoice = await prisma.recurringInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringInvoiceCreateManyArgs>(args?: SelectSubset<T, RecurringInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringInvoices and returns the data saved in the database.
     * @param {RecurringInvoiceCreateManyAndReturnArgs} args - Arguments to create many RecurringInvoices.
     * @example
     * // Create many RecurringInvoices
     * const recurringInvoice = await prisma.recurringInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringInvoices and only return the `id`
     * const recurringInvoiceWithIdOnly = await prisma.recurringInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringInvoice.
     * @param {RecurringInvoiceDeleteArgs} args - Arguments to delete one RecurringInvoice.
     * @example
     * // Delete one RecurringInvoice
     * const RecurringInvoice = await prisma.recurringInvoice.delete({
     *   where: {
     *     // ... filter to delete one RecurringInvoice
     *   }
     * })
     * 
     */
    delete<T extends RecurringInvoiceDeleteArgs>(args: SelectSubset<T, RecurringInvoiceDeleteArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringInvoice.
     * @param {RecurringInvoiceUpdateArgs} args - Arguments to update one RecurringInvoice.
     * @example
     * // Update one RecurringInvoice
     * const recurringInvoice = await prisma.recurringInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringInvoiceUpdateArgs>(args: SelectSubset<T, RecurringInvoiceUpdateArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringInvoices.
     * @param {RecurringInvoiceDeleteManyArgs} args - Arguments to filter RecurringInvoices to delete.
     * @example
     * // Delete a few RecurringInvoices
     * const { count } = await prisma.recurringInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringInvoiceDeleteManyArgs>(args?: SelectSubset<T, RecurringInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringInvoices
     * const recurringInvoice = await prisma.recurringInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringInvoiceUpdateManyArgs>(args: SelectSubset<T, RecurringInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringInvoices and returns the data updated in the database.
     * @param {RecurringInvoiceUpdateManyAndReturnArgs} args - Arguments to update many RecurringInvoices.
     * @example
     * // Update many RecurringInvoices
     * const recurringInvoice = await prisma.recurringInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringInvoices and only return the `id`
     * const recurringInvoiceWithIdOnly = await prisma.recurringInvoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurringInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringInvoice.
     * @param {RecurringInvoiceUpsertArgs} args - Arguments to update or create a RecurringInvoice.
     * @example
     * // Update or create a RecurringInvoice
     * const recurringInvoice = await prisma.recurringInvoice.upsert({
     *   create: {
     *     // ... data to create a RecurringInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringInvoice we want to update
     *   }
     * })
     */
    upsert<T extends RecurringInvoiceUpsertArgs>(args: SelectSubset<T, RecurringInvoiceUpsertArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceCountArgs} args - Arguments to filter RecurringInvoices to count.
     * @example
     * // Count the number of RecurringInvoices
     * const count = await prisma.recurringInvoice.count({
     *   where: {
     *     // ... the filter for the RecurringInvoices we want to count
     *   }
     * })
    **/
    count<T extends RecurringInvoiceCountArgs>(
      args?: Subset<T, RecurringInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecurringInvoiceAggregateArgs>(args: Subset<T, RecurringInvoiceAggregateArgs>): Prisma.PrismaPromise<GetRecurringInvoiceAggregateType<T>>

    /**
     * Group by RecurringInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecurringInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: RecurringInvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecurringInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringInvoice model
   */
  readonly fields: RecurringInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generated_invoices<T extends RecurringInvoice$generated_invoicesArgs<ExtArgs> = {}>(args?: Subset<T, RecurringInvoice$generated_invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends RecurringInvoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, RecurringInvoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecurringInvoice model
   */
  interface RecurringInvoiceFieldRefs {
    readonly id: FieldRef<"RecurringInvoice", 'Int'>
    readonly user_id: FieldRef<"RecurringInvoice", 'Int'>
    readonly client_id: FieldRef<"RecurringInvoice", 'Int'>
    readonly pattern: FieldRef<"RecurringInvoice", 'RecurringPattern'>
    readonly next_invoice_date: FieldRef<"RecurringInvoice", 'DateTime'>
    readonly start_date: FieldRef<"RecurringInvoice", 'DateTime'>
    readonly end_date: FieldRef<"RecurringInvoice", 'DateTime'>
    readonly is_active: FieldRef<"RecurringInvoice", 'Boolean'>
    readonly created_at: FieldRef<"RecurringInvoice", 'DateTime'>
    readonly updated_at: FieldRef<"RecurringInvoice", 'DateTime'>
    readonly deleted_at: FieldRef<"RecurringInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurringInvoice findUnique
   */
  export type RecurringInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoice to fetch.
     */
    where: RecurringInvoiceWhereUniqueInput
  }

  /**
   * RecurringInvoice findUniqueOrThrow
   */
  export type RecurringInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoice to fetch.
     */
    where: RecurringInvoiceWhereUniqueInput
  }

  /**
   * RecurringInvoice findFirst
   */
  export type RecurringInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoice to fetch.
     */
    where?: RecurringInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoices to fetch.
     */
    orderBy?: RecurringInvoiceOrderByWithRelationInput | RecurringInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringInvoices.
     */
    cursor?: RecurringInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringInvoices.
     */
    distinct?: RecurringInvoiceScalarFieldEnum | RecurringInvoiceScalarFieldEnum[]
  }

  /**
   * RecurringInvoice findFirstOrThrow
   */
  export type RecurringInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoice to fetch.
     */
    where?: RecurringInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoices to fetch.
     */
    orderBy?: RecurringInvoiceOrderByWithRelationInput | RecurringInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringInvoices.
     */
    cursor?: RecurringInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringInvoices.
     */
    distinct?: RecurringInvoiceScalarFieldEnum | RecurringInvoiceScalarFieldEnum[]
  }

  /**
   * RecurringInvoice findMany
   */
  export type RecurringInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoices to fetch.
     */
    where?: RecurringInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoices to fetch.
     */
    orderBy?: RecurringInvoiceOrderByWithRelationInput | RecurringInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringInvoices.
     */
    cursor?: RecurringInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoices.
     */
    skip?: number
    distinct?: RecurringInvoiceScalarFieldEnum | RecurringInvoiceScalarFieldEnum[]
  }

  /**
   * RecurringInvoice create
   */
  export type RecurringInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringInvoice.
     */
    data: XOR<RecurringInvoiceCreateInput, RecurringInvoiceUncheckedCreateInput>
  }

  /**
   * RecurringInvoice createMany
   */
  export type RecurringInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringInvoices.
     */
    data: RecurringInvoiceCreateManyInput | RecurringInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringInvoice createManyAndReturn
   */
  export type RecurringInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringInvoices.
     */
    data: RecurringInvoiceCreateManyInput | RecurringInvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringInvoice update
   */
  export type RecurringInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringInvoice.
     */
    data: XOR<RecurringInvoiceUpdateInput, RecurringInvoiceUncheckedUpdateInput>
    /**
     * Choose, which RecurringInvoice to update.
     */
    where: RecurringInvoiceWhereUniqueInput
  }

  /**
   * RecurringInvoice updateMany
   */
  export type RecurringInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringInvoices.
     */
    data: XOR<RecurringInvoiceUpdateManyMutationInput, RecurringInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which RecurringInvoices to update
     */
    where?: RecurringInvoiceWhereInput
    /**
     * Limit how many RecurringInvoices to update.
     */
    limit?: number
  }

  /**
   * RecurringInvoice updateManyAndReturn
   */
  export type RecurringInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update RecurringInvoices.
     */
    data: XOR<RecurringInvoiceUpdateManyMutationInput, RecurringInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which RecurringInvoices to update
     */
    where?: RecurringInvoiceWhereInput
    /**
     * Limit how many RecurringInvoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringInvoice upsert
   */
  export type RecurringInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringInvoice to update in case it exists.
     */
    where: RecurringInvoiceWhereUniqueInput
    /**
     * In case the RecurringInvoice found by the `where` argument doesn't exist, create a new RecurringInvoice with this data.
     */
    create: XOR<RecurringInvoiceCreateInput, RecurringInvoiceUncheckedCreateInput>
    /**
     * In case the RecurringInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringInvoiceUpdateInput, RecurringInvoiceUncheckedUpdateInput>
  }

  /**
   * RecurringInvoice delete
   */
  export type RecurringInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
    /**
     * Filter which RecurringInvoice to delete.
     */
    where: RecurringInvoiceWhereUniqueInput
  }

  /**
   * RecurringInvoice deleteMany
   */
  export type RecurringInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringInvoices to delete
     */
    where?: RecurringInvoiceWhereInput
    /**
     * Limit how many RecurringInvoices to delete.
     */
    limit?: number
  }

  /**
   * RecurringInvoice.generated_invoices
   */
  export type RecurringInvoice$generated_invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * RecurringInvoice.items
   */
  export type RecurringInvoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    where?: RecurringInvoiceItemWhereInput
    orderBy?: RecurringInvoiceItemOrderByWithRelationInput | RecurringInvoiceItemOrderByWithRelationInput[]
    cursor?: RecurringInvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringInvoiceItemScalarFieldEnum | RecurringInvoiceItemScalarFieldEnum[]
  }

  /**
   * RecurringInvoice without action
   */
  export type RecurringInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoice
     */
    select?: RecurringInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoice
     */
    omit?: RecurringInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceInclude<ExtArgs> | null
  }


  /**
   * Model RecurringInvoiceItem
   */

  export type AggregateRecurringInvoiceItem = {
    _count: RecurringInvoiceItemCountAggregateOutputType | null
    _avg: RecurringInvoiceItemAvgAggregateOutputType | null
    _sum: RecurringInvoiceItemSumAggregateOutputType | null
    _min: RecurringInvoiceItemMinAggregateOutputType | null
    _max: RecurringInvoiceItemMaxAggregateOutputType | null
  }

  export type RecurringInvoiceItemAvgAggregateOutputType = {
    id: number | null
    recurring_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
  }

  export type RecurringInvoiceItemSumAggregateOutputType = {
    id: number | null
    recurring_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
  }

  export type RecurringInvoiceItemMinAggregateOutputType = {
    id: number | null
    recurring_id: number | null
    product_id: number | null
    description: string | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
  }

  export type RecurringInvoiceItemMaxAggregateOutputType = {
    id: number | null
    recurring_id: number | null
    product_id: number | null
    description: string | null
    quantity: number | null
    unit_price: Decimal | null
    tax_rate: Decimal | null
  }

  export type RecurringInvoiceItemCountAggregateOutputType = {
    id: number
    recurring_id: number
    product_id: number
    description: number
    quantity: number
    unit_price: number
    tax_rate: number
    _all: number
  }


  export type RecurringInvoiceItemAvgAggregateInputType = {
    id?: true
    recurring_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
  }

  export type RecurringInvoiceItemSumAggregateInputType = {
    id?: true
    recurring_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
  }

  export type RecurringInvoiceItemMinAggregateInputType = {
    id?: true
    recurring_id?: true
    product_id?: true
    description?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
  }

  export type RecurringInvoiceItemMaxAggregateInputType = {
    id?: true
    recurring_id?: true
    product_id?: true
    description?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
  }

  export type RecurringInvoiceItemCountAggregateInputType = {
    id?: true
    recurring_id?: true
    product_id?: true
    description?: true
    quantity?: true
    unit_price?: true
    tax_rate?: true
    _all?: true
  }

  export type RecurringInvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringInvoiceItem to aggregate.
     */
    where?: RecurringInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoiceItems to fetch.
     */
    orderBy?: RecurringInvoiceItemOrderByWithRelationInput | RecurringInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringInvoiceItems
    **/
    _count?: true | RecurringInvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringInvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringInvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringInvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringInvoiceItemMaxAggregateInputType
  }

  export type GetRecurringInvoiceItemAggregateType<T extends RecurringInvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringInvoiceItem[P]>
      : GetScalarType<T[P], AggregateRecurringInvoiceItem[P]>
  }




  export type RecurringInvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringInvoiceItemWhereInput
    orderBy?: RecurringInvoiceItemOrderByWithAggregationInput | RecurringInvoiceItemOrderByWithAggregationInput[]
    by: RecurringInvoiceItemScalarFieldEnum[] | RecurringInvoiceItemScalarFieldEnum
    having?: RecurringInvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringInvoiceItemCountAggregateInputType | true
    _avg?: RecurringInvoiceItemAvgAggregateInputType
    _sum?: RecurringInvoiceItemSumAggregateInputType
    _min?: RecurringInvoiceItemMinAggregateInputType
    _max?: RecurringInvoiceItemMaxAggregateInputType
  }

  export type RecurringInvoiceItemGroupByOutputType = {
    id: number
    recurring_id: number
    product_id: number
    description: string | null
    quantity: number
    unit_price: Decimal
    tax_rate: Decimal | null
    _count: RecurringInvoiceItemCountAggregateOutputType | null
    _avg: RecurringInvoiceItemAvgAggregateOutputType | null
    _sum: RecurringInvoiceItemSumAggregateOutputType | null
    _min: RecurringInvoiceItemMinAggregateOutputType | null
    _max: RecurringInvoiceItemMaxAggregateOutputType | null
  }

  type GetRecurringInvoiceItemGroupByPayload<T extends RecurringInvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringInvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringInvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringInvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringInvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type RecurringInvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurring_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | RecurringInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringInvoiceItem"]>

  export type RecurringInvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurring_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | RecurringInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringInvoiceItem"]>

  export type RecurringInvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurring_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | RecurringInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringInvoiceItem"]>

  export type RecurringInvoiceItemSelectScalar = {
    id?: boolean
    recurring_id?: boolean
    product_id?: boolean
    description?: boolean
    quantity?: boolean
    unit_price?: boolean
    tax_rate?: boolean
  }

  export type RecurringInvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recurring_id" | "product_id" | "description" | "quantity" | "unit_price" | "tax_rate", ExtArgs["result"]["recurringInvoiceItem"]>
  export type RecurringInvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | RecurringInvoiceDefaultArgs<ExtArgs>
  }
  export type RecurringInvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | RecurringInvoiceDefaultArgs<ExtArgs>
  }
  export type RecurringInvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | RecurringInvoiceDefaultArgs<ExtArgs>
  }

  export type $RecurringInvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringInvoiceItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      recurring_invoice: Prisma.$RecurringInvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recurring_id: number
      product_id: number
      description: string | null
      quantity: number
      unit_price: Prisma.Decimal
      tax_rate: Prisma.Decimal | null
    }, ExtArgs["result"]["recurringInvoiceItem"]>
    composites: {}
  }

  type RecurringInvoiceItemGetPayload<S extends boolean | null | undefined | RecurringInvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$RecurringInvoiceItemPayload, S>

  type RecurringInvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringInvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringInvoiceItemCountAggregateInputType | true
    }

  export interface RecurringInvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringInvoiceItem'], meta: { name: 'RecurringInvoiceItem' } }
    /**
     * Find zero or one RecurringInvoiceItem that matches the filter.
     * @param {RecurringInvoiceItemFindUniqueArgs} args - Arguments to find a RecurringInvoiceItem
     * @example
     * // Get one RecurringInvoiceItem
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringInvoiceItemFindUniqueArgs>(args: SelectSubset<T, RecurringInvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringInvoiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringInvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a RecurringInvoiceItem
     * @example
     * // Get one RecurringInvoiceItem
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringInvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringInvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringInvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceItemFindFirstArgs} args - Arguments to find a RecurringInvoiceItem
     * @example
     * // Get one RecurringInvoiceItem
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringInvoiceItemFindFirstArgs>(args?: SelectSubset<T, RecurringInvoiceItemFindFirstArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringInvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceItemFindFirstOrThrowArgs} args - Arguments to find a RecurringInvoiceItem
     * @example
     * // Get one RecurringInvoiceItem
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringInvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringInvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringInvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringInvoiceItems
     * const recurringInvoiceItems = await prisma.recurringInvoiceItem.findMany()
     * 
     * // Get first 10 RecurringInvoiceItems
     * const recurringInvoiceItems = await prisma.recurringInvoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringInvoiceItemWithIdOnly = await prisma.recurringInvoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringInvoiceItemFindManyArgs>(args?: SelectSubset<T, RecurringInvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringInvoiceItem.
     * @param {RecurringInvoiceItemCreateArgs} args - Arguments to create a RecurringInvoiceItem.
     * @example
     * // Create one RecurringInvoiceItem
     * const RecurringInvoiceItem = await prisma.recurringInvoiceItem.create({
     *   data: {
     *     // ... data to create a RecurringInvoiceItem
     *   }
     * })
     * 
     */
    create<T extends RecurringInvoiceItemCreateArgs>(args: SelectSubset<T, RecurringInvoiceItemCreateArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringInvoiceItems.
     * @param {RecurringInvoiceItemCreateManyArgs} args - Arguments to create many RecurringInvoiceItems.
     * @example
     * // Create many RecurringInvoiceItems
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringInvoiceItemCreateManyArgs>(args?: SelectSubset<T, RecurringInvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringInvoiceItems and returns the data saved in the database.
     * @param {RecurringInvoiceItemCreateManyAndReturnArgs} args - Arguments to create many RecurringInvoiceItems.
     * @example
     * // Create many RecurringInvoiceItems
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringInvoiceItems and only return the `id`
     * const recurringInvoiceItemWithIdOnly = await prisma.recurringInvoiceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringInvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringInvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringInvoiceItem.
     * @param {RecurringInvoiceItemDeleteArgs} args - Arguments to delete one RecurringInvoiceItem.
     * @example
     * // Delete one RecurringInvoiceItem
     * const RecurringInvoiceItem = await prisma.recurringInvoiceItem.delete({
     *   where: {
     *     // ... filter to delete one RecurringInvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends RecurringInvoiceItemDeleteArgs>(args: SelectSubset<T, RecurringInvoiceItemDeleteArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringInvoiceItem.
     * @param {RecurringInvoiceItemUpdateArgs} args - Arguments to update one RecurringInvoiceItem.
     * @example
     * // Update one RecurringInvoiceItem
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringInvoiceItemUpdateArgs>(args: SelectSubset<T, RecurringInvoiceItemUpdateArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringInvoiceItems.
     * @param {RecurringInvoiceItemDeleteManyArgs} args - Arguments to filter RecurringInvoiceItems to delete.
     * @example
     * // Delete a few RecurringInvoiceItems
     * const { count } = await prisma.recurringInvoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringInvoiceItemDeleteManyArgs>(args?: SelectSubset<T, RecurringInvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringInvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringInvoiceItems
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringInvoiceItemUpdateManyArgs>(args: SelectSubset<T, RecurringInvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringInvoiceItems and returns the data updated in the database.
     * @param {RecurringInvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many RecurringInvoiceItems.
     * @example
     * // Update many RecurringInvoiceItems
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringInvoiceItems and only return the `id`
     * const recurringInvoiceItemWithIdOnly = await prisma.recurringInvoiceItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurringInvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringInvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringInvoiceItem.
     * @param {RecurringInvoiceItemUpsertArgs} args - Arguments to update or create a RecurringInvoiceItem.
     * @example
     * // Update or create a RecurringInvoiceItem
     * const recurringInvoiceItem = await prisma.recurringInvoiceItem.upsert({
     *   create: {
     *     // ... data to create a RecurringInvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringInvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends RecurringInvoiceItemUpsertArgs>(args: SelectSubset<T, RecurringInvoiceItemUpsertArgs<ExtArgs>>): Prisma__RecurringInvoiceItemClient<$Result.GetResult<Prisma.$RecurringInvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringInvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceItemCountArgs} args - Arguments to filter RecurringInvoiceItems to count.
     * @example
     * // Count the number of RecurringInvoiceItems
     * const count = await prisma.recurringInvoiceItem.count({
     *   where: {
     *     // ... the filter for the RecurringInvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends RecurringInvoiceItemCountArgs>(
      args?: Subset<T, RecurringInvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringInvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringInvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecurringInvoiceItemAggregateArgs>(args: Subset<T, RecurringInvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetRecurringInvoiceItemAggregateType<T>>

    /**
     * Group by RecurringInvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringInvoiceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecurringInvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringInvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: RecurringInvoiceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecurringInvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringInvoiceItem model
   */
  readonly fields: RecurringInvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringInvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringInvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurring_invoice<T extends RecurringInvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecurringInvoiceDefaultArgs<ExtArgs>>): Prisma__RecurringInvoiceClient<$Result.GetResult<Prisma.$RecurringInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecurringInvoiceItem model
   */
  interface RecurringInvoiceItemFieldRefs {
    readonly id: FieldRef<"RecurringInvoiceItem", 'Int'>
    readonly recurring_id: FieldRef<"RecurringInvoiceItem", 'Int'>
    readonly product_id: FieldRef<"RecurringInvoiceItem", 'Int'>
    readonly description: FieldRef<"RecurringInvoiceItem", 'String'>
    readonly quantity: FieldRef<"RecurringInvoiceItem", 'Int'>
    readonly unit_price: FieldRef<"RecurringInvoiceItem", 'Decimal'>
    readonly tax_rate: FieldRef<"RecurringInvoiceItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * RecurringInvoiceItem findUnique
   */
  export type RecurringInvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoiceItem to fetch.
     */
    where: RecurringInvoiceItemWhereUniqueInput
  }

  /**
   * RecurringInvoiceItem findUniqueOrThrow
   */
  export type RecurringInvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoiceItem to fetch.
     */
    where: RecurringInvoiceItemWhereUniqueInput
  }

  /**
   * RecurringInvoiceItem findFirst
   */
  export type RecurringInvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoiceItem to fetch.
     */
    where?: RecurringInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoiceItems to fetch.
     */
    orderBy?: RecurringInvoiceItemOrderByWithRelationInput | RecurringInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringInvoiceItems.
     */
    cursor?: RecurringInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringInvoiceItems.
     */
    distinct?: RecurringInvoiceItemScalarFieldEnum | RecurringInvoiceItemScalarFieldEnum[]
  }

  /**
   * RecurringInvoiceItem findFirstOrThrow
   */
  export type RecurringInvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoiceItem to fetch.
     */
    where?: RecurringInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoiceItems to fetch.
     */
    orderBy?: RecurringInvoiceItemOrderByWithRelationInput | RecurringInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringInvoiceItems.
     */
    cursor?: RecurringInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringInvoiceItems.
     */
    distinct?: RecurringInvoiceItemScalarFieldEnum | RecurringInvoiceItemScalarFieldEnum[]
  }

  /**
   * RecurringInvoiceItem findMany
   */
  export type RecurringInvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which RecurringInvoiceItems to fetch.
     */
    where?: RecurringInvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringInvoiceItems to fetch.
     */
    orderBy?: RecurringInvoiceItemOrderByWithRelationInput | RecurringInvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringInvoiceItems.
     */
    cursor?: RecurringInvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringInvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringInvoiceItems.
     */
    skip?: number
    distinct?: RecurringInvoiceItemScalarFieldEnum | RecurringInvoiceItemScalarFieldEnum[]
  }

  /**
   * RecurringInvoiceItem create
   */
  export type RecurringInvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringInvoiceItem.
     */
    data: XOR<RecurringInvoiceItemCreateInput, RecurringInvoiceItemUncheckedCreateInput>
  }

  /**
   * RecurringInvoiceItem createMany
   */
  export type RecurringInvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringInvoiceItems.
     */
    data: RecurringInvoiceItemCreateManyInput | RecurringInvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringInvoiceItem createManyAndReturn
   */
  export type RecurringInvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringInvoiceItems.
     */
    data: RecurringInvoiceItemCreateManyInput | RecurringInvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringInvoiceItem update
   */
  export type RecurringInvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringInvoiceItem.
     */
    data: XOR<RecurringInvoiceItemUpdateInput, RecurringInvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which RecurringInvoiceItem to update.
     */
    where: RecurringInvoiceItemWhereUniqueInput
  }

  /**
   * RecurringInvoiceItem updateMany
   */
  export type RecurringInvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringInvoiceItems.
     */
    data: XOR<RecurringInvoiceItemUpdateManyMutationInput, RecurringInvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which RecurringInvoiceItems to update
     */
    where?: RecurringInvoiceItemWhereInput
    /**
     * Limit how many RecurringInvoiceItems to update.
     */
    limit?: number
  }

  /**
   * RecurringInvoiceItem updateManyAndReturn
   */
  export type RecurringInvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to update RecurringInvoiceItems.
     */
    data: XOR<RecurringInvoiceItemUpdateManyMutationInput, RecurringInvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which RecurringInvoiceItems to update
     */
    where?: RecurringInvoiceItemWhereInput
    /**
     * Limit how many RecurringInvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringInvoiceItem upsert
   */
  export type RecurringInvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringInvoiceItem to update in case it exists.
     */
    where: RecurringInvoiceItemWhereUniqueInput
    /**
     * In case the RecurringInvoiceItem found by the `where` argument doesn't exist, create a new RecurringInvoiceItem with this data.
     */
    create: XOR<RecurringInvoiceItemCreateInput, RecurringInvoiceItemUncheckedCreateInput>
    /**
     * In case the RecurringInvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringInvoiceItemUpdateInput, RecurringInvoiceItemUncheckedUpdateInput>
  }

  /**
   * RecurringInvoiceItem delete
   */
  export type RecurringInvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which RecurringInvoiceItem to delete.
     */
    where: RecurringInvoiceItemWhereUniqueInput
  }

  /**
   * RecurringInvoiceItem deleteMany
   */
  export type RecurringInvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringInvoiceItems to delete
     */
    where?: RecurringInvoiceItemWhereInput
    /**
     * Limit how many RecurringInvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * RecurringInvoiceItem without action
   */
  export type RecurringInvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringInvoiceItem
     */
    select?: RecurringInvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringInvoiceItem
     */
    omit?: RecurringInvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringInvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
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

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    bank_name: 'bank_name',
    account_number: 'account_number',
    account_name: 'account_name',
    is_primary: 'is_primary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const EWalletScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    wallet_type: 'wallet_type',
    phone_number: 'phone_number',
    account_name: 'account_name',
    is_primary: 'is_primary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EWalletScalarFieldEnum = (typeof EWalletScalarFieldEnum)[keyof typeof EWalletScalarFieldEnum]


  export const ClientScalarFieldEnum: {
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

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
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

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
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

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
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

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RecurringInvoiceScalarFieldEnum: {
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

  export type RecurringInvoiceScalarFieldEnum = (typeof RecurringInvoiceScalarFieldEnum)[keyof typeof RecurringInvoiceScalarFieldEnum]


  export const RecurringInvoiceItemScalarFieldEnum: {
    id: 'id',
    recurring_id: 'recurring_id',
    product_id: 'product_id',
    description: 'description',
    quantity: 'quantity',
    unit_price: 'unit_price',
    tax_rate: 'tax_rate'
  };

  export type RecurringInvoiceItemScalarFieldEnum = (typeof RecurringInvoiceItemScalarFieldEnum)[keyof typeof RecurringInvoiceItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'RecurringPattern'
   */
  export type EnumRecurringPatternFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringPattern'>
    


  /**
   * Reference to a field of type 'RecurringPattern[]'
   */
  export type ListEnumRecurringPatternFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringPattern[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    is_google?: BoolFilter<"User"> | boolean
    verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    verify_token?: StringNullableFilter<"User"> | string | null
    password_reset_token?: StringNullableFilter<"User"> | string | null
    clients?: ClientListRelationFilter
    invoices?: InvoiceListRelationFilter
    products?: ProductListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    RecurringInvoice?: RecurringInvoiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    is_google?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    verify_token?: SortOrderInput | SortOrder
    password_reset_token?: SortOrderInput | SortOrder
    clients?: ClientOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
    RecurringInvoice?: RecurringInvoiceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    is_google?: BoolFilter<"User"> | boolean
    verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    verify_token?: StringNullableFilter<"User"> | string | null
    password_reset_token?: StringNullableFilter<"User"> | string | null
    clients?: ClientListRelationFilter
    invoices?: InvoiceListRelationFilter
    products?: ProductListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    RecurringInvoice?: RecurringInvoiceListRelationFilter
  }, "user_id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    is_google?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    verify_token?: SortOrderInput | SortOrder
    password_reset_token?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_google?: BoolWithAggregatesFilter<"User"> | boolean
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verify_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_reset_token?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    profile_id?: IntFilter<"Profile"> | number
    user_id?: IntFilter<"Profile"> | number
    company_name?: StringNullableFilter<"Profile"> | string | null
    address?: StringNullableFilter<"Profile"> | string | null
    city?: StringNullableFilter<"Profile"> | string | null
    state?: StringNullableFilter<"Profile"> | string | null
    postal_code?: StringNullableFilter<"Profile"> | string | null
    country?: StringNullableFilter<"Profile"> | string | null
    logo?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    tax_number?: StringNullableFilter<"Profile"> | string | null
    created_at?: DateTimeFilter<"Profile"> | Date | string
    updated_at?: DateTimeFilter<"Profile"> | Date | string
    bank_accounts?: BankAccountListRelationFilter
    e_wallets?: EWalletListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    tax_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bank_accounts?: BankAccountOrderByRelationAggregateInput
    e_wallets?: EWalletOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    profile_id?: number
    user_id?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    company_name?: StringNullableFilter<"Profile"> | string | null
    address?: StringNullableFilter<"Profile"> | string | null
    city?: StringNullableFilter<"Profile"> | string | null
    state?: StringNullableFilter<"Profile"> | string | null
    postal_code?: StringNullableFilter<"Profile"> | string | null
    country?: StringNullableFilter<"Profile"> | string | null
    logo?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    tax_number?: StringNullableFilter<"Profile"> | string | null
    created_at?: DateTimeFilter<"Profile"> | Date | string
    updated_at?: DateTimeFilter<"Profile"> | Date | string
    bank_accounts?: BankAccountListRelationFilter
    e_wallets?: EWalletListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "profile_id" | "user_id">

  export type ProfileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    tax_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    profile_id?: IntWithAggregatesFilter<"Profile"> | number
    user_id?: IntWithAggregatesFilter<"Profile"> | number
    company_name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    address?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    city?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    state?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    country?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    website?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    tax_number?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type BankAccountWhereInput = {
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    id?: IntFilter<"BankAccount"> | number
    profile_id?: IntFilter<"BankAccount"> | number
    bank_name?: StringFilter<"BankAccount"> | string
    account_number?: StringFilter<"BankAccount"> | string
    account_name?: StringFilter<"BankAccount"> | string
    is_primary?: BoolFilter<"BankAccount"> | boolean
    created_at?: DateTimeFilter<"BankAccount"> | Date | string
    updated_at?: DateTimeFilter<"BankAccount"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    bank_name?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    profile_id?: IntFilter<"BankAccount"> | number
    bank_name?: StringFilter<"BankAccount"> | string
    account_number?: StringFilter<"BankAccount"> | string
    account_name?: StringFilter<"BankAccount"> | string
    is_primary?: BoolFilter<"BankAccount"> | boolean
    created_at?: DateTimeFilter<"BankAccount"> | Date | string
    updated_at?: DateTimeFilter<"BankAccount"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    bank_name?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _avg?: BankAccountAvgOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
    _sum?: BankAccountSumOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    OR?: BankAccountScalarWhereWithAggregatesInput[]
    NOT?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BankAccount"> | number
    profile_id?: IntWithAggregatesFilter<"BankAccount"> | number
    bank_name?: StringWithAggregatesFilter<"BankAccount"> | string
    account_number?: StringWithAggregatesFilter<"BankAccount"> | string
    account_name?: StringWithAggregatesFilter<"BankAccount"> | string
    is_primary?: BoolWithAggregatesFilter<"BankAccount"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
  }

  export type EWalletWhereInput = {
    AND?: EWalletWhereInput | EWalletWhereInput[]
    OR?: EWalletWhereInput[]
    NOT?: EWalletWhereInput | EWalletWhereInput[]
    id?: IntFilter<"EWallet"> | number
    profile_id?: IntFilter<"EWallet"> | number
    wallet_type?: StringFilter<"EWallet"> | string
    phone_number?: StringFilter<"EWallet"> | string
    account_name?: StringFilter<"EWallet"> | string
    is_primary?: BoolFilter<"EWallet"> | boolean
    created_at?: DateTimeFilter<"EWallet"> | Date | string
    updated_at?: DateTimeFilter<"EWallet"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type EWalletOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    wallet_type?: SortOrder
    phone_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type EWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EWalletWhereInput | EWalletWhereInput[]
    OR?: EWalletWhereInput[]
    NOT?: EWalletWhereInput | EWalletWhereInput[]
    profile_id?: IntFilter<"EWallet"> | number
    wallet_type?: StringFilter<"EWallet"> | string
    phone_number?: StringFilter<"EWallet"> | string
    account_name?: StringFilter<"EWallet"> | string
    is_primary?: BoolFilter<"EWallet"> | boolean
    created_at?: DateTimeFilter<"EWallet"> | Date | string
    updated_at?: DateTimeFilter<"EWallet"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type EWalletOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrder
    wallet_type?: SortOrder
    phone_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EWalletCountOrderByAggregateInput
    _avg?: EWalletAvgOrderByAggregateInput
    _max?: EWalletMaxOrderByAggregateInput
    _min?: EWalletMinOrderByAggregateInput
    _sum?: EWalletSumOrderByAggregateInput
  }

  export type EWalletScalarWhereWithAggregatesInput = {
    AND?: EWalletScalarWhereWithAggregatesInput | EWalletScalarWhereWithAggregatesInput[]
    OR?: EWalletScalarWhereWithAggregatesInput[]
    NOT?: EWalletScalarWhereWithAggregatesInput | EWalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EWallet"> | number
    profile_id?: IntWithAggregatesFilter<"EWallet"> | number
    wallet_type?: StringWithAggregatesFilter<"EWallet"> | string
    phone_number?: StringWithAggregatesFilter<"EWallet"> | string
    account_name?: StringWithAggregatesFilter<"EWallet"> | string
    is_primary?: BoolWithAggregatesFilter<"EWallet"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"EWallet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"EWallet"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    client_id?: IntFilter<"Client"> | number
    user_id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    state?: StringNullableFilter<"Client"> | string | null
    postal_code?: StringNullableFilter<"Client"> | string | null
    country?: StringNullableFilter<"Client"> | string | null
    company_name?: StringNullableFilter<"Client"> | string | null
    payment_preference?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    created_at?: DateTimeFilter<"Client"> | Date | string
    updated_at?: DateTimeFilter<"Client"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Client"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
    RecurringInvoice?: RecurringInvoiceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    client_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    payment_preference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
    RecurringInvoice?: RecurringInvoiceOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    client_id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    user_id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    state?: StringNullableFilter<"Client"> | string | null
    postal_code?: StringNullableFilter<"Client"> | string | null
    country?: StringNullableFilter<"Client"> | string | null
    company_name?: StringNullableFilter<"Client"> | string | null
    payment_preference?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    created_at?: DateTimeFilter<"Client"> | Date | string
    updated_at?: DateTimeFilter<"Client"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Client"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
    RecurringInvoice?: RecurringInvoiceListRelationFilter
  }, "client_id">

  export type ClientOrderByWithAggregationInput = {
    client_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    payment_preference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    client_id?: IntWithAggregatesFilter<"Client"> | number
    user_id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    city?: StringNullableWithAggregatesFilter<"Client"> | string | null
    state?: StringNullableWithAggregatesFilter<"Client"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"Client"> | string | null
    country?: StringNullableWithAggregatesFilter<"Client"> | string | null
    company_name?: StringNullableWithAggregatesFilter<"Client"> | string | null
    payment_preference?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    product_id?: IntFilter<"Product"> | number
    user_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unit?: StringNullableFilter<"Product"> | string | null
    tax_rate?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    category?: StringNullableFilter<"Product"> | string | null
    image?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    invoiceItems?: InvoiceItemListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RecurringInvoiceItem?: RecurringInvoiceItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    unit?: SortOrderInput | SortOrder
    tax_rate?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    invoiceItems?: InvoiceItemOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    RecurringInvoiceItem?: RecurringInvoiceItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    user_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unit?: StringNullableFilter<"Product"> | string | null
    tax_rate?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    category?: StringNullableFilter<"Product"> | string | null
    image?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    invoiceItems?: InvoiceItemListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RecurringInvoiceItem?: RecurringInvoiceItemListRelationFilter
  }, "product_id">

  export type ProductOrderByWithAggregationInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    unit?: SortOrderInput | SortOrder
    tax_rate?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"Product"> | number
    user_id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unit?: StringNullableWithAggregatesFilter<"Product"> | string | null
    tax_rate?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    invoice_id?: IntFilter<"Invoice"> | number
    user_id?: IntFilter<"Invoice"> | number
    client_id?: IntFilter<"Invoice"> | number
    invoice_number?: StringFilter<"Invoice"> | string
    issue_date?: DateTimeFilter<"Invoice"> | Date | string
    due_date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalNullableFilter<"Invoice"> | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    terms?: StringNullableFilter<"Invoice"> | string | null
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    source_recurring_id?: IntNullableFilter<"Invoice"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    source_recurring?: XOR<RecurringInvoiceNullableScalarRelationFilter, RecurringInvoiceWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: InvoiceItemListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    invoice_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    terms?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    source_recurring_id?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    source_recurring?: RecurringInvoiceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    items?: InvoiceItemOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    invoice_id?: number
    invoice_number?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    user_id?: IntFilter<"Invoice"> | number
    client_id?: IntFilter<"Invoice"> | number
    issue_date?: DateTimeFilter<"Invoice"> | Date | string
    due_date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalNullableFilter<"Invoice"> | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    terms?: StringNullableFilter<"Invoice"> | string | null
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    source_recurring_id?: IntNullableFilter<"Invoice"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    source_recurring?: XOR<RecurringInvoiceNullableScalarRelationFilter, RecurringInvoiceWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: InvoiceItemListRelationFilter
    payments?: PaymentListRelationFilter
  }, "invoice_id" | "invoice_number">

  export type InvoiceOrderByWithAggregationInput = {
    invoice_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    terms?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    source_recurring_id?: SortOrderInput | SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    invoice_id?: IntWithAggregatesFilter<"Invoice"> | number
    user_id?: IntWithAggregatesFilter<"Invoice"> | number
    client_id?: IntWithAggregatesFilter<"Invoice"> | number
    invoice_number?: StringWithAggregatesFilter<"Invoice"> | string
    issue_date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    due_date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalNullableWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    terms?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    source_recurring_id?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
  }

  export type InvoiceItemWhereInput = {
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    item_id?: IntFilter<"InvoiceItem"> | number
    invoice_id?: IntFilter<"InvoiceItem"> | number
    product_id?: IntFilter<"InvoiceItem"> | number
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: IntFilter<"InvoiceItem"> | number
    unit_price?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type InvoiceItemOrderByWithRelationInput = {
    item_id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrderInput | SortOrder
    tax_amount?: SortOrderInput | SortOrder
    amount?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    item_id?: number
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    invoice_id?: IntFilter<"InvoiceItem"> | number
    product_id?: IntFilter<"InvoiceItem"> | number
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: IntFilter<"InvoiceItem"> | number
    unit_price?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "item_id">

  export type InvoiceItemOrderByWithAggregationInput = {
    item_id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrderInput | SortOrder
    tax_amount?: SortOrderInput | SortOrder
    amount?: SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    item_id?: IntWithAggregatesFilter<"InvoiceItem"> | number
    invoice_id?: IntWithAggregatesFilter<"InvoiceItem"> | number
    product_id?: IntWithAggregatesFilter<"InvoiceItem"> | number
    description?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    quantity?: IntWithAggregatesFilter<"InvoiceItem"> | number
    unit_price?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    payment_id?: IntFilter<"Payment"> | number
    invoice_id?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    eWalletId?: IntNullableFilter<"Payment"> | number | null
    bankAccountId?: IntNullableFilter<"Payment"> | number | null
    BankAccount?: XOR<BankAccountNullableScalarRelationFilter, BankAccountWhereInput> | null
    EWallet?: XOR<EWalletNullableScalarRelationFilter, EWalletWhereInput> | null
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    eWalletId?: SortOrderInput | SortOrder
    bankAccountId?: SortOrderInput | SortOrder
    BankAccount?: BankAccountOrderByWithRelationInput
    EWallet?: EWalletOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    invoice_id?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    eWalletId?: IntNullableFilter<"Payment"> | number | null
    bankAccountId?: IntNullableFilter<"Payment"> | number | null
    BankAccount?: XOR<BankAccountNullableScalarRelationFilter, BankAccountWhereInput> | null
    EWallet?: XOR<EWalletNullableScalarRelationFilter, EWalletWhereInput> | null
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "payment_id">

  export type PaymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    eWalletId?: SortOrderInput | SortOrder
    bankAccountId?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"Payment"> | number
    invoice_id?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    reference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    eWalletId?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    bankAccountId?: IntNullableWithAggregatesFilter<"Payment"> | number | null
  }

  export type RecurringInvoiceWhereInput = {
    AND?: RecurringInvoiceWhereInput | RecurringInvoiceWhereInput[]
    OR?: RecurringInvoiceWhereInput[]
    NOT?: RecurringInvoiceWhereInput | RecurringInvoiceWhereInput[]
    id?: IntFilter<"RecurringInvoice"> | number
    user_id?: IntFilter<"RecurringInvoice"> | number
    client_id?: IntFilter<"RecurringInvoice"> | number
    pattern?: EnumRecurringPatternFilter<"RecurringInvoice"> | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFilter<"RecurringInvoice"> | Date | string
    start_date?: DateTimeFilter<"RecurringInvoice"> | Date | string
    end_date?: DateTimeNullableFilter<"RecurringInvoice"> | Date | string | null
    is_active?: BoolFilter<"RecurringInvoice"> | boolean
    created_at?: DateTimeFilter<"RecurringInvoice"> | Date | string
    updated_at?: DateTimeFilter<"RecurringInvoice"> | Date | string
    deleted_at?: DateTimeNullableFilter<"RecurringInvoice"> | Date | string | null
    generated_invoices?: InvoiceListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RecurringInvoiceItemListRelationFilter
  }

  export type RecurringInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    pattern?: SortOrder
    next_invoice_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    generated_invoices?: InvoiceOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    items?: RecurringInvoiceItemOrderByRelationAggregateInput
  }

  export type RecurringInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecurringInvoiceWhereInput | RecurringInvoiceWhereInput[]
    OR?: RecurringInvoiceWhereInput[]
    NOT?: RecurringInvoiceWhereInput | RecurringInvoiceWhereInput[]
    user_id?: IntFilter<"RecurringInvoice"> | number
    client_id?: IntFilter<"RecurringInvoice"> | number
    pattern?: EnumRecurringPatternFilter<"RecurringInvoice"> | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFilter<"RecurringInvoice"> | Date | string
    start_date?: DateTimeFilter<"RecurringInvoice"> | Date | string
    end_date?: DateTimeNullableFilter<"RecurringInvoice"> | Date | string | null
    is_active?: BoolFilter<"RecurringInvoice"> | boolean
    created_at?: DateTimeFilter<"RecurringInvoice"> | Date | string
    updated_at?: DateTimeFilter<"RecurringInvoice"> | Date | string
    deleted_at?: DateTimeNullableFilter<"RecurringInvoice"> | Date | string | null
    generated_invoices?: InvoiceListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RecurringInvoiceItemListRelationFilter
  }, "id">

  export type RecurringInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    pattern?: SortOrder
    next_invoice_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: RecurringInvoiceCountOrderByAggregateInput
    _avg?: RecurringInvoiceAvgOrderByAggregateInput
    _max?: RecurringInvoiceMaxOrderByAggregateInput
    _min?: RecurringInvoiceMinOrderByAggregateInput
    _sum?: RecurringInvoiceSumOrderByAggregateInput
  }

  export type RecurringInvoiceScalarWhereWithAggregatesInput = {
    AND?: RecurringInvoiceScalarWhereWithAggregatesInput | RecurringInvoiceScalarWhereWithAggregatesInput[]
    OR?: RecurringInvoiceScalarWhereWithAggregatesInput[]
    NOT?: RecurringInvoiceScalarWhereWithAggregatesInput | RecurringInvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecurringInvoice"> | number
    user_id?: IntWithAggregatesFilter<"RecurringInvoice"> | number
    client_id?: IntWithAggregatesFilter<"RecurringInvoice"> | number
    pattern?: EnumRecurringPatternWithAggregatesFilter<"RecurringInvoice"> | $Enums.RecurringPattern
    next_invoice_date?: DateTimeWithAggregatesFilter<"RecurringInvoice"> | Date | string
    start_date?: DateTimeWithAggregatesFilter<"RecurringInvoice"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"RecurringInvoice"> | Date | string | null
    is_active?: BoolWithAggregatesFilter<"RecurringInvoice"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"RecurringInvoice"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RecurringInvoice"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"RecurringInvoice"> | Date | string | null
  }

  export type RecurringInvoiceItemWhereInput = {
    AND?: RecurringInvoiceItemWhereInput | RecurringInvoiceItemWhereInput[]
    OR?: RecurringInvoiceItemWhereInput[]
    NOT?: RecurringInvoiceItemWhereInput | RecurringInvoiceItemWhereInput[]
    id?: IntFilter<"RecurringInvoiceItem"> | number
    recurring_id?: IntFilter<"RecurringInvoiceItem"> | number
    product_id?: IntFilter<"RecurringInvoiceItem"> | number
    description?: StringNullableFilter<"RecurringInvoiceItem"> | string | null
    quantity?: IntFilter<"RecurringInvoiceItem"> | number
    unit_price?: DecimalFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    recurring_invoice?: XOR<RecurringInvoiceScalarRelationFilter, RecurringInvoiceWhereInput>
  }

  export type RecurringInvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    recurring_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    recurring_invoice?: RecurringInvoiceOrderByWithRelationInput
  }

  export type RecurringInvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecurringInvoiceItemWhereInput | RecurringInvoiceItemWhereInput[]
    OR?: RecurringInvoiceItemWhereInput[]
    NOT?: RecurringInvoiceItemWhereInput | RecurringInvoiceItemWhereInput[]
    recurring_id?: IntFilter<"RecurringInvoiceItem"> | number
    product_id?: IntFilter<"RecurringInvoiceItem"> | number
    description?: StringNullableFilter<"RecurringInvoiceItem"> | string | null
    quantity?: IntFilter<"RecurringInvoiceItem"> | number
    unit_price?: DecimalFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    recurring_invoice?: XOR<RecurringInvoiceScalarRelationFilter, RecurringInvoiceWhereInput>
  }, "id">

  export type RecurringInvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    recurring_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrderInput | SortOrder
    _count?: RecurringInvoiceItemCountOrderByAggregateInput
    _avg?: RecurringInvoiceItemAvgOrderByAggregateInput
    _max?: RecurringInvoiceItemMaxOrderByAggregateInput
    _min?: RecurringInvoiceItemMinOrderByAggregateInput
    _sum?: RecurringInvoiceItemSumOrderByAggregateInput
  }

  export type RecurringInvoiceItemScalarWhereWithAggregatesInput = {
    AND?: RecurringInvoiceItemScalarWhereWithAggregatesInput | RecurringInvoiceItemScalarWhereWithAggregatesInput[]
    OR?: RecurringInvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: RecurringInvoiceItemScalarWhereWithAggregatesInput | RecurringInvoiceItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecurringInvoiceItem"> | number
    recurring_id?: IntWithAggregatesFilter<"RecurringInvoiceItem"> | number
    product_id?: IntWithAggregatesFilter<"RecurringInvoiceItem"> | number
    description?: StringNullableWithAggregatesFilter<"RecurringInvoiceItem"> | string | null
    quantity?: IntWithAggregatesFilter<"RecurringInvoiceItem"> | number
    unit_price?: DecimalWithAggregatesFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableWithAggregatesFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserCreateInput = {
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bank_accounts?: BankAccountCreateNestedManyWithoutProfileInput
    e_wallets?: EWalletCreateNestedManyWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    profile_id?: number
    user_id: number
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutProfileInput
    e_wallets?: EWalletUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_accounts?: BankAccountUpdateManyWithoutProfileNestedInput
    e_wallets?: EWalletUpdateManyWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutProfileNestedInput
    e_wallets?: EWalletUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    profile_id?: number
    user_id: number
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateInput = {
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    profile: ProfileCreateNestedOneWithoutBank_accountsInput
    payments?: PaymentCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: number
    profile_id: number
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUpdateInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutBank_accountsNestedInput
    payments?: PaymentUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountCreateManyInput = {
    id?: number
    profile_id: number
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BankAccountUpdateManyMutationInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EWalletCreateInput = {
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    profile: ProfileCreateNestedOneWithoutE_walletsInput
    payments?: PaymentCreateNestedManyWithoutEWalletInput
  }

  export type EWalletUncheckedCreateInput = {
    id?: number
    profile_id: number
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutEWalletInput
  }

  export type EWalletUpdateInput = {
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutE_walletsNestedInput
    payments?: PaymentUpdateManyWithoutEWalletNestedInput
  }

  export type EWalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutEWalletNestedInput
  }

  export type EWalletCreateManyInput = {
    id?: number
    profile_id: number
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EWalletUpdateManyMutationInput = {
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EWalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutClientsInput
    invoices?: InvoiceCreateNestedManyWithoutClientInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    client_id?: number
    user_id: number
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutClientInput
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    invoices?: InvoiceUpdateManyWithoutClientNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutClientNestedInput
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    client_id?: number
    user_id: number
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoiceItems?: InvoiceItemCreateNestedManyWithoutProductInput
    user: UserCreateNestedOneWithoutProductsInput
    RecurringInvoiceItem?: RecurringInvoiceItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    product_id?: number
    user_id: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoiceItems?: InvoiceItemUncheckedCreateNestedManyWithoutProductInput
    RecurringInvoiceItem?: RecurringInvoiceItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceItems?: InvoiceItemUpdateManyWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    RecurringInvoiceItem?: RecurringInvoiceItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceItems?: InvoiceItemUncheckedUpdateManyWithoutProductNestedInput
    RecurringInvoiceItem?: RecurringInvoiceItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    product_id?: number
    user_id: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvoiceCreateInput = {
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    client: ClientCreateNestedOneWithoutInvoicesInput
    source_recurring?: RecurringInvoiceCreateNestedOneWithoutGenerated_invoicesInput
    user: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    invoice_id?: number
    user_id: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    source_recurring?: RecurringInvoiceUpdateOneWithoutGenerated_invoicesNestedInput
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    invoice_id?: number
    user_id: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
  }

  export type InvoiceUpdateManyMutationInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvoiceUncheckedUpdateManyInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvoiceItemCreateInput = {
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    invoice: InvoiceCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutInvoiceItemsInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    item_id?: number
    invoice_id: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutInvoiceItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemCreateManyInput = {
    item_id?: number
    invoice_id: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    BankAccount?: BankAccountCreateNestedOneWithoutPaymentsInput
    EWallet?: EWalletCreateNestedOneWithoutPaymentsInput
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    payment_id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    eWalletId?: number | null
    bankAccountId?: number | null
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    BankAccount?: BankAccountUpdateOneWithoutPaymentsNestedInput
    EWallet?: EWalletUpdateOneWithoutPaymentsNestedInput
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eWalletId?: NullableIntFieldUpdateOperationsInput | number | null
    bankAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentCreateManyInput = {
    payment_id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    eWalletId?: number | null
    bankAccountId?: number | null
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eWalletId?: NullableIntFieldUpdateOperationsInput | number | null
    bankAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecurringInvoiceCreateInput = {
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceCreateNestedManyWithoutSource_recurringInput
    client: ClientCreateNestedOneWithoutRecurringInvoiceInput
    user: UserCreateNestedOneWithoutRecurringInvoiceInput
    items?: RecurringInvoiceItemCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceUncheckedCreateInput = {
    id?: number
    user_id: number
    client_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceUncheckedCreateNestedManyWithoutSource_recurringInput
    items?: RecurringInvoiceItemUncheckedCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceUpdateInput = {
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUpdateManyWithoutSource_recurringNestedInput
    client?: ClientUpdateOneRequiredWithoutRecurringInvoiceNestedInput
    user?: UserUpdateOneRequiredWithoutRecurringInvoiceNestedInput
    items?: RecurringInvoiceItemUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type RecurringInvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUncheckedUpdateManyWithoutSource_recurringNestedInput
    items?: RecurringInvoiceItemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type RecurringInvoiceCreateManyInput = {
    id?: number
    user_id: number
    client_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type RecurringInvoiceUpdateManyMutationInput = {
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecurringInvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecurringInvoiceItemCreateInput = {
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    product: ProductCreateNestedOneWithoutRecurringInvoiceItemInput
    recurring_invoice: RecurringInvoiceCreateNestedOneWithoutItemsInput
  }

  export type RecurringInvoiceItemUncheckedCreateInput = {
    id?: number
    recurring_id: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    product?: ProductUpdateOneRequiredWithoutRecurringInvoiceItemNestedInput
    recurring_invoice?: RecurringInvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RecurringInvoiceItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemCreateManyInput = {
    id?: number
    recurring_id: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type RecurringInvoiceListRelationFilter = {
    every?: RecurringInvoiceWhereInput
    some?: RecurringInvoiceWhereInput
    none?: RecurringInvoiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurringInvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    is_google?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    verify_token?: SortOrder
    password_reset_token?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    is_google?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    verify_token?: SortOrder
    password_reset_token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar?: SortOrder
    is_google?: SortOrder
    verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    verify_token?: SortOrder
    password_reset_token?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BankAccountListRelationFilter = {
    every?: BankAccountWhereInput
    some?: BankAccountWhereInput
    none?: BankAccountWhereInput
  }

  export type EWalletListRelationFilter = {
    every?: EWalletWhereInput
    some?: EWalletWhereInput
    none?: EWalletWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BankAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    tax_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    tax_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    tax_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    bank_name?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BankAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    bank_name?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    bank_name?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BankAccountSumOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
  }

  export type EWalletCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    wallet_type?: SortOrder
    phone_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EWalletAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
  }

  export type EWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    wallet_type?: SortOrder
    phone_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EWalletMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    wallet_type?: SortOrder
    phone_number?: SortOrder
    account_name?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EWalletSumOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    company_name?: SortOrder
    payment_preference?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    company_name?: SortOrder
    payment_preference?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    company_name?: SortOrder
    payment_preference?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    client_id?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type RecurringInvoiceItemListRelationFilter = {
    every?: RecurringInvoiceItemWhereInput
    some?: RecurringInvoiceItemWhereInput
    none?: RecurringInvoiceItemWhereInput
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurringInvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    tax_rate?: SortOrder
    category?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    tax_rate?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    tax_rate?: SortOrder
    category?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    tax_rate?: SortOrder
    category?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    product_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    tax_rate?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type RecurringInvoiceNullableScalarRelationFilter = {
    is?: RecurringInvoiceWhereInput | null
    isNot?: RecurringInvoiceWhereInput | null
  }

  export type InvoiceCountOrderByAggregateInput = {
    invoice_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    total_amount?: SortOrder
    notes?: SortOrder
    terms?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    source_recurring_id?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    invoice_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    total_amount?: SortOrder
    source_recurring_id?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    invoice_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    total_amount?: SortOrder
    notes?: SortOrder
    terms?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    source_recurring_id?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    invoice_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    total_amount?: SortOrder
    notes?: SortOrder
    terms?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    source_recurring_id?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    invoice_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    total_amount?: SortOrder
    source_recurring_id?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    item_id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    item_id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    item_id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    item_id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    item_id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
    tax_amount?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type BankAccountNullableScalarRelationFilter = {
    is?: BankAccountWhereInput | null
    isNot?: BankAccountWhereInput | null
  }

  export type EWalletNullableScalarRelationFilter = {
    is?: EWalletWhereInput | null
    isNot?: EWalletWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    eWalletId?: SortOrder
    bankAccountId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    eWalletId?: SortOrder
    bankAccountId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    eWalletId?: SortOrder
    bankAccountId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    eWalletId?: SortOrder
    bankAccountId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    eWalletId?: SortOrder
    bankAccountId?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumRecurringPatternFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringPattern | EnumRecurringPatternFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringPatternFilter<$PrismaModel> | $Enums.RecurringPattern
  }

  export type RecurringInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    pattern?: SortOrder
    next_invoice_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RecurringInvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
  }

  export type RecurringInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    pattern?: SortOrder
    next_invoice_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RecurringInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    pattern?: SortOrder
    next_invoice_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RecurringInvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
  }

  export type EnumRecurringPatternWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringPattern | EnumRecurringPatternFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringPatternWithAggregatesFilter<$PrismaModel> | $Enums.RecurringPattern
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringPatternFilter<$PrismaModel>
    _max?: NestedEnumRecurringPatternFilter<$PrismaModel>
  }

  export type RecurringInvoiceScalarRelationFilter = {
    is?: RecurringInvoiceWhereInput
    isNot?: RecurringInvoiceWhereInput
  }

  export type RecurringInvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    recurring_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
  }

  export type RecurringInvoiceItemAvgOrderByAggregateInput = {
    id?: SortOrder
    recurring_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
  }

  export type RecurringInvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    recurring_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
  }

  export type RecurringInvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    recurring_id?: SortOrder
    product_id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
  }

  export type RecurringInvoiceItemSumOrderByAggregateInput = {
    id?: SortOrder
    recurring_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    tax_rate?: SortOrder
  }

  export type ClientCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type RecurringInvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringInvoiceCreateWithoutUserInput, RecurringInvoiceUncheckedCreateWithoutUserInput> | RecurringInvoiceCreateWithoutUserInput[] | RecurringInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutUserInput | RecurringInvoiceCreateOrConnectWithoutUserInput[]
    createMany?: RecurringInvoiceCreateManyUserInputEnvelope
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type RecurringInvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringInvoiceCreateWithoutUserInput, RecurringInvoiceUncheckedCreateWithoutUserInput> | RecurringInvoiceCreateWithoutUserInput[] | RecurringInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutUserInput | RecurringInvoiceCreateOrConnectWithoutUserInput[]
    createMany?: RecurringInvoiceCreateManyUserInputEnvelope
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type RecurringInvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringInvoiceCreateWithoutUserInput, RecurringInvoiceUncheckedCreateWithoutUserInput> | RecurringInvoiceCreateWithoutUserInput[] | RecurringInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutUserInput | RecurringInvoiceCreateOrConnectWithoutUserInput[]
    upsert?: RecurringInvoiceUpsertWithWhereUniqueWithoutUserInput | RecurringInvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringInvoiceCreateManyUserInputEnvelope
    set?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    disconnect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    delete?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    update?: RecurringInvoiceUpdateWithWhereUniqueWithoutUserInput | RecurringInvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringInvoiceUpdateManyWithWhereWithoutUserInput | RecurringInvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringInvoiceScalarWhereInput | RecurringInvoiceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type RecurringInvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringInvoiceCreateWithoutUserInput, RecurringInvoiceUncheckedCreateWithoutUserInput> | RecurringInvoiceCreateWithoutUserInput[] | RecurringInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutUserInput | RecurringInvoiceCreateOrConnectWithoutUserInput[]
    upsert?: RecurringInvoiceUpsertWithWhereUniqueWithoutUserInput | RecurringInvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringInvoiceCreateManyUserInputEnvelope
    set?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    disconnect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    delete?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    update?: RecurringInvoiceUpdateWithWhereUniqueWithoutUserInput | RecurringInvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringInvoiceUpdateManyWithWhereWithoutUserInput | RecurringInvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringInvoiceScalarWhereInput | RecurringInvoiceScalarWhereInput[]
  }

  export type BankAccountCreateNestedManyWithoutProfileInput = {
    create?: XOR<BankAccountCreateWithoutProfileInput, BankAccountUncheckedCreateWithoutProfileInput> | BankAccountCreateWithoutProfileInput[] | BankAccountUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutProfileInput | BankAccountCreateOrConnectWithoutProfileInput[]
    createMany?: BankAccountCreateManyProfileInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type EWalletCreateNestedManyWithoutProfileInput = {
    create?: XOR<EWalletCreateWithoutProfileInput, EWalletUncheckedCreateWithoutProfileInput> | EWalletCreateWithoutProfileInput[] | EWalletUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EWalletCreateOrConnectWithoutProfileInput | EWalletCreateOrConnectWithoutProfileInput[]
    createMany?: EWalletCreateManyProfileInputEnvelope
    connect?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type BankAccountUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<BankAccountCreateWithoutProfileInput, BankAccountUncheckedCreateWithoutProfileInput> | BankAccountCreateWithoutProfileInput[] | BankAccountUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutProfileInput | BankAccountCreateOrConnectWithoutProfileInput[]
    createMany?: BankAccountCreateManyProfileInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type EWalletUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<EWalletCreateWithoutProfileInput, EWalletUncheckedCreateWithoutProfileInput> | EWalletCreateWithoutProfileInput[] | EWalletUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EWalletCreateOrConnectWithoutProfileInput | EWalletCreateOrConnectWithoutProfileInput[]
    createMany?: EWalletCreateManyProfileInputEnvelope
    connect?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
  }

  export type BankAccountUpdateManyWithoutProfileNestedInput = {
    create?: XOR<BankAccountCreateWithoutProfileInput, BankAccountUncheckedCreateWithoutProfileInput> | BankAccountCreateWithoutProfileInput[] | BankAccountUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutProfileInput | BankAccountCreateOrConnectWithoutProfileInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutProfileInput | BankAccountUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: BankAccountCreateManyProfileInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutProfileInput | BankAccountUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutProfileInput | BankAccountUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type EWalletUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EWalletCreateWithoutProfileInput, EWalletUncheckedCreateWithoutProfileInput> | EWalletCreateWithoutProfileInput[] | EWalletUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EWalletCreateOrConnectWithoutProfileInput | EWalletCreateOrConnectWithoutProfileInput[]
    upsert?: EWalletUpsertWithWhereUniqueWithoutProfileInput | EWalletUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EWalletCreateManyProfileInputEnvelope
    set?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    disconnect?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    delete?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    connect?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    update?: EWalletUpdateWithWhereUniqueWithoutProfileInput | EWalletUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EWalletUpdateManyWithWhereWithoutProfileInput | EWalletUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EWalletScalarWhereInput | EWalletScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type BankAccountUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<BankAccountCreateWithoutProfileInput, BankAccountUncheckedCreateWithoutProfileInput> | BankAccountCreateWithoutProfileInput[] | BankAccountUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutProfileInput | BankAccountCreateOrConnectWithoutProfileInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutProfileInput | BankAccountUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: BankAccountCreateManyProfileInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutProfileInput | BankAccountUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutProfileInput | BankAccountUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type EWalletUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EWalletCreateWithoutProfileInput, EWalletUncheckedCreateWithoutProfileInput> | EWalletCreateWithoutProfileInput[] | EWalletUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EWalletCreateOrConnectWithoutProfileInput | EWalletCreateOrConnectWithoutProfileInput[]
    upsert?: EWalletUpsertWithWhereUniqueWithoutProfileInput | EWalletUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EWalletCreateManyProfileInputEnvelope
    set?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    disconnect?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    delete?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    connect?: EWalletWhereUniqueInput | EWalletWhereUniqueInput[]
    update?: EWalletUpdateWithWhereUniqueWithoutProfileInput | EWalletUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EWalletUpdateManyWithWhereWithoutProfileInput | EWalletUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EWalletScalarWhereInput | EWalletScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutBank_accountsInput = {
    create?: XOR<ProfileCreateWithoutBank_accountsInput, ProfileUncheckedCreateWithoutBank_accountsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBank_accountsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<PaymentCreateWithoutBankAccountInput, PaymentUncheckedCreateWithoutBankAccountInput> | PaymentCreateWithoutBankAccountInput[] | PaymentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBankAccountInput | PaymentCreateOrConnectWithoutBankAccountInput[]
    createMany?: PaymentCreateManyBankAccountInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<PaymentCreateWithoutBankAccountInput, PaymentUncheckedCreateWithoutBankAccountInput> | PaymentCreateWithoutBankAccountInput[] | PaymentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBankAccountInput | PaymentCreateOrConnectWithoutBankAccountInput[]
    createMany?: PaymentCreateManyBankAccountInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutBank_accountsNestedInput = {
    create?: XOR<ProfileCreateWithoutBank_accountsInput, ProfileUncheckedCreateWithoutBank_accountsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBank_accountsInput
    upsert?: ProfileUpsertWithoutBank_accountsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutBank_accountsInput, ProfileUpdateWithoutBank_accountsInput>, ProfileUncheckedUpdateWithoutBank_accountsInput>
  }

  export type PaymentUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<PaymentCreateWithoutBankAccountInput, PaymentUncheckedCreateWithoutBankAccountInput> | PaymentCreateWithoutBankAccountInput[] | PaymentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBankAccountInput | PaymentCreateOrConnectWithoutBankAccountInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBankAccountInput | PaymentUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: PaymentCreateManyBankAccountInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBankAccountInput | PaymentUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBankAccountInput | PaymentUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<PaymentCreateWithoutBankAccountInput, PaymentUncheckedCreateWithoutBankAccountInput> | PaymentCreateWithoutBankAccountInput[] | PaymentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBankAccountInput | PaymentCreateOrConnectWithoutBankAccountInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBankAccountInput | PaymentUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: PaymentCreateManyBankAccountInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBankAccountInput | PaymentUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBankAccountInput | PaymentUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutE_walletsInput = {
    create?: XOR<ProfileCreateWithoutE_walletsInput, ProfileUncheckedCreateWithoutE_walletsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutE_walletsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutEWalletInput = {
    create?: XOR<PaymentCreateWithoutEWalletInput, PaymentUncheckedCreateWithoutEWalletInput> | PaymentCreateWithoutEWalletInput[] | PaymentUncheckedCreateWithoutEWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEWalletInput | PaymentCreateOrConnectWithoutEWalletInput[]
    createMany?: PaymentCreateManyEWalletInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutEWalletInput = {
    create?: XOR<PaymentCreateWithoutEWalletInput, PaymentUncheckedCreateWithoutEWalletInput> | PaymentCreateWithoutEWalletInput[] | PaymentUncheckedCreateWithoutEWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEWalletInput | PaymentCreateOrConnectWithoutEWalletInput[]
    createMany?: PaymentCreateManyEWalletInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutE_walletsNestedInput = {
    create?: XOR<ProfileCreateWithoutE_walletsInput, ProfileUncheckedCreateWithoutE_walletsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutE_walletsInput
    upsert?: ProfileUpsertWithoutE_walletsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutE_walletsInput, ProfileUpdateWithoutE_walletsInput>, ProfileUncheckedUpdateWithoutE_walletsInput>
  }

  export type PaymentUpdateManyWithoutEWalletNestedInput = {
    create?: XOR<PaymentCreateWithoutEWalletInput, PaymentUncheckedCreateWithoutEWalletInput> | PaymentCreateWithoutEWalletInput[] | PaymentUncheckedCreateWithoutEWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEWalletInput | PaymentCreateOrConnectWithoutEWalletInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEWalletInput | PaymentUpsertWithWhereUniqueWithoutEWalletInput[]
    createMany?: PaymentCreateManyEWalletInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEWalletInput | PaymentUpdateWithWhereUniqueWithoutEWalletInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEWalletInput | PaymentUpdateManyWithWhereWithoutEWalletInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutEWalletNestedInput = {
    create?: XOR<PaymentCreateWithoutEWalletInput, PaymentUncheckedCreateWithoutEWalletInput> | PaymentCreateWithoutEWalletInput[] | PaymentUncheckedCreateWithoutEWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEWalletInput | PaymentCreateOrConnectWithoutEWalletInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEWalletInput | PaymentUpsertWithWhereUniqueWithoutEWalletInput[]
    createMany?: PaymentCreateManyEWalletInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEWalletInput | PaymentUpdateWithWhereUniqueWithoutEWalletInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEWalletInput | PaymentUpdateManyWithWhereWithoutEWalletInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutClientInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type RecurringInvoiceCreateNestedManyWithoutClientInput = {
    create?: XOR<RecurringInvoiceCreateWithoutClientInput, RecurringInvoiceUncheckedCreateWithoutClientInput> | RecurringInvoiceCreateWithoutClientInput[] | RecurringInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutClientInput | RecurringInvoiceCreateOrConnectWithoutClientInput[]
    createMany?: RecurringInvoiceCreateManyClientInputEnvelope
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type RecurringInvoiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<RecurringInvoiceCreateWithoutClientInput, RecurringInvoiceUncheckedCreateWithoutClientInput> | RecurringInvoiceCreateWithoutClientInput[] | RecurringInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutClientInput | RecurringInvoiceCreateOrConnectWithoutClientInput[]
    createMany?: RecurringInvoiceCreateManyClientInputEnvelope
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type InvoiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutClientInput | InvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutClientInput | InvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutClientInput | InvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type RecurringInvoiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<RecurringInvoiceCreateWithoutClientInput, RecurringInvoiceUncheckedCreateWithoutClientInput> | RecurringInvoiceCreateWithoutClientInput[] | RecurringInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutClientInput | RecurringInvoiceCreateOrConnectWithoutClientInput[]
    upsert?: RecurringInvoiceUpsertWithWhereUniqueWithoutClientInput | RecurringInvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RecurringInvoiceCreateManyClientInputEnvelope
    set?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    disconnect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    delete?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    update?: RecurringInvoiceUpdateWithWhereUniqueWithoutClientInput | RecurringInvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RecurringInvoiceUpdateManyWithWhereWithoutClientInput | RecurringInvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RecurringInvoiceScalarWhereInput | RecurringInvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput> | InvoiceCreateWithoutClientInput[] | InvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutClientInput | InvoiceCreateOrConnectWithoutClientInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutClientInput | InvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: InvoiceCreateManyClientInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutClientInput | InvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutClientInput | InvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type RecurringInvoiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<RecurringInvoiceCreateWithoutClientInput, RecurringInvoiceUncheckedCreateWithoutClientInput> | RecurringInvoiceCreateWithoutClientInput[] | RecurringInvoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutClientInput | RecurringInvoiceCreateOrConnectWithoutClientInput[]
    upsert?: RecurringInvoiceUpsertWithWhereUniqueWithoutClientInput | RecurringInvoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RecurringInvoiceCreateManyClientInputEnvelope
    set?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    disconnect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    delete?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    connect?: RecurringInvoiceWhereUniqueInput | RecurringInvoiceWhereUniqueInput[]
    update?: RecurringInvoiceUpdateWithWhereUniqueWithoutClientInput | RecurringInvoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RecurringInvoiceUpdateManyWithWhereWithoutClientInput | RecurringInvoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RecurringInvoiceScalarWhereInput | RecurringInvoiceScalarWhereInput[]
  }

  export type InvoiceItemCreateNestedManyWithoutProductInput = {
    create?: XOR<InvoiceItemCreateWithoutProductInput, InvoiceItemUncheckedCreateWithoutProductInput> | InvoiceItemCreateWithoutProductInput[] | InvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutProductInput | InvoiceItemCreateOrConnectWithoutProductInput[]
    createMany?: InvoiceItemCreateManyProductInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type RecurringInvoiceItemCreateNestedManyWithoutProductInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutProductInput, RecurringInvoiceItemUncheckedCreateWithoutProductInput> | RecurringInvoiceItemCreateWithoutProductInput[] | RecurringInvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutProductInput | RecurringInvoiceItemCreateOrConnectWithoutProductInput[]
    createMany?: RecurringInvoiceItemCreateManyProductInputEnvelope
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InvoiceItemCreateWithoutProductInput, InvoiceItemUncheckedCreateWithoutProductInput> | InvoiceItemCreateWithoutProductInput[] | InvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutProductInput | InvoiceItemCreateOrConnectWithoutProductInput[]
    createMany?: InvoiceItemCreateManyProductInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type RecurringInvoiceItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutProductInput, RecurringInvoiceItemUncheckedCreateWithoutProductInput> | RecurringInvoiceItemCreateWithoutProductInput[] | RecurringInvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutProductInput | RecurringInvoiceItemCreateOrConnectWithoutProductInput[]
    createMany?: RecurringInvoiceItemCreateManyProductInputEnvelope
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutProductInput, InvoiceItemUncheckedCreateWithoutProductInput> | InvoiceItemCreateWithoutProductInput[] | InvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutProductInput | InvoiceItemCreateOrConnectWithoutProductInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutProductInput | InvoiceItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InvoiceItemCreateManyProductInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutProductInput | InvoiceItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutProductInput | InvoiceItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type RecurringInvoiceItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutProductInput, RecurringInvoiceItemUncheckedCreateWithoutProductInput> | RecurringInvoiceItemCreateWithoutProductInput[] | RecurringInvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutProductInput | RecurringInvoiceItemCreateOrConnectWithoutProductInput[]
    upsert?: RecurringInvoiceItemUpsertWithWhereUniqueWithoutProductInput | RecurringInvoiceItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecurringInvoiceItemCreateManyProductInputEnvelope
    set?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    disconnect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    delete?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    update?: RecurringInvoiceItemUpdateWithWhereUniqueWithoutProductInput | RecurringInvoiceItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecurringInvoiceItemUpdateManyWithWhereWithoutProductInput | RecurringInvoiceItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecurringInvoiceItemScalarWhereInput | RecurringInvoiceItemScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutProductInput, InvoiceItemUncheckedCreateWithoutProductInput> | InvoiceItemCreateWithoutProductInput[] | InvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutProductInput | InvoiceItemCreateOrConnectWithoutProductInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutProductInput | InvoiceItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InvoiceItemCreateManyProductInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutProductInput | InvoiceItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutProductInput | InvoiceItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type RecurringInvoiceItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutProductInput, RecurringInvoiceItemUncheckedCreateWithoutProductInput> | RecurringInvoiceItemCreateWithoutProductInput[] | RecurringInvoiceItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutProductInput | RecurringInvoiceItemCreateOrConnectWithoutProductInput[]
    upsert?: RecurringInvoiceItemUpsertWithWhereUniqueWithoutProductInput | RecurringInvoiceItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecurringInvoiceItemCreateManyProductInputEnvelope
    set?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    disconnect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    delete?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    update?: RecurringInvoiceItemUpdateWithWhereUniqueWithoutProductInput | RecurringInvoiceItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecurringInvoiceItemUpdateManyWithWhereWithoutProductInput | RecurringInvoiceItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecurringInvoiceItemScalarWhereInput | RecurringInvoiceItemScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
  }

  export type RecurringInvoiceCreateNestedOneWithoutGenerated_invoicesInput = {
    create?: XOR<RecurringInvoiceCreateWithoutGenerated_invoicesInput, RecurringInvoiceUncheckedCreateWithoutGenerated_invoicesInput>
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutGenerated_invoicesInput
    connect?: RecurringInvoiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type ClientUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput
    upsert?: ClientUpsertWithoutInvoicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutInvoicesInput, ClientUpdateWithoutInvoicesInput>, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type RecurringInvoiceUpdateOneWithoutGenerated_invoicesNestedInput = {
    create?: XOR<RecurringInvoiceCreateWithoutGenerated_invoicesInput, RecurringInvoiceUncheckedCreateWithoutGenerated_invoicesInput>
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutGenerated_invoicesInput
    upsert?: RecurringInvoiceUpsertWithoutGenerated_invoicesInput
    disconnect?: RecurringInvoiceWhereInput | boolean
    delete?: RecurringInvoiceWhereInput | boolean
    connect?: RecurringInvoiceWhereUniqueInput
    update?: XOR<XOR<RecurringInvoiceUpdateToOneWithWhereWithoutGenerated_invoicesInput, RecurringInvoiceUpdateWithoutGenerated_invoicesInput>, RecurringInvoiceUncheckedUpdateWithoutGenerated_invoicesInput>
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInvoiceItemsInput = {
    create?: XOR<ProductCreateWithoutInvoiceItemsInput, ProductUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInvoiceItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutInvoiceItemsNestedInput = {
    create?: XOR<ProductCreateWithoutInvoiceItemsInput, ProductUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInvoiceItemsInput
    upsert?: ProductUpsertWithoutInvoiceItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInvoiceItemsInput, ProductUpdateWithoutInvoiceItemsInput>, ProductUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type BankAccountCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BankAccountCreateWithoutPaymentsInput, BankAccountUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutPaymentsInput
    connect?: BankAccountWhereUniqueInput
  }

  export type EWalletCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<EWalletCreateWithoutPaymentsInput, EWalletUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EWalletCreateOrConnectWithoutPaymentsInput
    connect?: EWalletWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type BankAccountUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<BankAccountCreateWithoutPaymentsInput, BankAccountUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutPaymentsInput
    upsert?: BankAccountUpsertWithoutPaymentsInput
    disconnect?: BankAccountWhereInput | boolean
    delete?: BankAccountWhereInput | boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutPaymentsInput, BankAccountUpdateWithoutPaymentsInput>, BankAccountUncheckedUpdateWithoutPaymentsInput>
  }

  export type EWalletUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<EWalletCreateWithoutPaymentsInput, EWalletUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EWalletCreateOrConnectWithoutPaymentsInput
    upsert?: EWalletUpsertWithoutPaymentsInput
    disconnect?: EWalletWhereInput | boolean
    delete?: EWalletWhereInput | boolean
    connect?: EWalletWhereUniqueInput
    update?: XOR<XOR<EWalletUpdateToOneWithWhereWithoutPaymentsInput, EWalletUpdateWithoutPaymentsInput>, EWalletUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceCreateNestedManyWithoutSource_recurringInput = {
    create?: XOR<InvoiceCreateWithoutSource_recurringInput, InvoiceUncheckedCreateWithoutSource_recurringInput> | InvoiceCreateWithoutSource_recurringInput[] | InvoiceUncheckedCreateWithoutSource_recurringInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSource_recurringInput | InvoiceCreateOrConnectWithoutSource_recurringInput[]
    createMany?: InvoiceCreateManySource_recurringInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutRecurringInvoiceInput = {
    create?: XOR<ClientCreateWithoutRecurringInvoiceInput, ClientUncheckedCreateWithoutRecurringInvoiceInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRecurringInvoiceInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecurringInvoiceInput = {
    create?: XOR<UserCreateWithoutRecurringInvoiceInput, UserUncheckedCreateWithoutRecurringInvoiceInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringInvoiceInput
    connect?: UserWhereUniqueInput
  }

  export type RecurringInvoiceItemCreateNestedManyWithoutRecurring_invoiceInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput> | RecurringInvoiceItemCreateWithoutRecurring_invoiceInput[] | RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput | RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput[]
    createMany?: RecurringInvoiceItemCreateManyRecurring_invoiceInputEnvelope
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutSource_recurringInput = {
    create?: XOR<InvoiceCreateWithoutSource_recurringInput, InvoiceUncheckedCreateWithoutSource_recurringInput> | InvoiceCreateWithoutSource_recurringInput[] | InvoiceUncheckedCreateWithoutSource_recurringInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSource_recurringInput | InvoiceCreateOrConnectWithoutSource_recurringInput[]
    createMany?: InvoiceCreateManySource_recurringInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type RecurringInvoiceItemUncheckedCreateNestedManyWithoutRecurring_invoiceInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput> | RecurringInvoiceItemCreateWithoutRecurring_invoiceInput[] | RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput | RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput[]
    createMany?: RecurringInvoiceItemCreateManyRecurring_invoiceInputEnvelope
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
  }

  export type EnumRecurringPatternFieldUpdateOperationsInput = {
    set?: $Enums.RecurringPattern
  }

  export type InvoiceUpdateManyWithoutSource_recurringNestedInput = {
    create?: XOR<InvoiceCreateWithoutSource_recurringInput, InvoiceUncheckedCreateWithoutSource_recurringInput> | InvoiceCreateWithoutSource_recurringInput[] | InvoiceUncheckedCreateWithoutSource_recurringInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSource_recurringInput | InvoiceCreateOrConnectWithoutSource_recurringInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSource_recurringInput | InvoiceUpsertWithWhereUniqueWithoutSource_recurringInput[]
    createMany?: InvoiceCreateManySource_recurringInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSource_recurringInput | InvoiceUpdateWithWhereUniqueWithoutSource_recurringInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSource_recurringInput | InvoiceUpdateManyWithWhereWithoutSource_recurringInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutRecurringInvoiceNestedInput = {
    create?: XOR<ClientCreateWithoutRecurringInvoiceInput, ClientUncheckedCreateWithoutRecurringInvoiceInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRecurringInvoiceInput
    upsert?: ClientUpsertWithoutRecurringInvoiceInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutRecurringInvoiceInput, ClientUpdateWithoutRecurringInvoiceInput>, ClientUncheckedUpdateWithoutRecurringInvoiceInput>
  }

  export type UserUpdateOneRequiredWithoutRecurringInvoiceNestedInput = {
    create?: XOR<UserCreateWithoutRecurringInvoiceInput, UserUncheckedCreateWithoutRecurringInvoiceInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringInvoiceInput
    upsert?: UserUpsertWithoutRecurringInvoiceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecurringInvoiceInput, UserUpdateWithoutRecurringInvoiceInput>, UserUncheckedUpdateWithoutRecurringInvoiceInput>
  }

  export type RecurringInvoiceItemUpdateManyWithoutRecurring_invoiceNestedInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput> | RecurringInvoiceItemCreateWithoutRecurring_invoiceInput[] | RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput | RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput[]
    upsert?: RecurringInvoiceItemUpsertWithWhereUniqueWithoutRecurring_invoiceInput | RecurringInvoiceItemUpsertWithWhereUniqueWithoutRecurring_invoiceInput[]
    createMany?: RecurringInvoiceItemCreateManyRecurring_invoiceInputEnvelope
    set?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    disconnect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    delete?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    update?: RecurringInvoiceItemUpdateWithWhereUniqueWithoutRecurring_invoiceInput | RecurringInvoiceItemUpdateWithWhereUniqueWithoutRecurring_invoiceInput[]
    updateMany?: RecurringInvoiceItemUpdateManyWithWhereWithoutRecurring_invoiceInput | RecurringInvoiceItemUpdateManyWithWhereWithoutRecurring_invoiceInput[]
    deleteMany?: RecurringInvoiceItemScalarWhereInput | RecurringInvoiceItemScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutSource_recurringNestedInput = {
    create?: XOR<InvoiceCreateWithoutSource_recurringInput, InvoiceUncheckedCreateWithoutSource_recurringInput> | InvoiceCreateWithoutSource_recurringInput[] | InvoiceUncheckedCreateWithoutSource_recurringInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSource_recurringInput | InvoiceCreateOrConnectWithoutSource_recurringInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSource_recurringInput | InvoiceUpsertWithWhereUniqueWithoutSource_recurringInput[]
    createMany?: InvoiceCreateManySource_recurringInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSource_recurringInput | InvoiceUpdateWithWhereUniqueWithoutSource_recurringInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSource_recurringInput | InvoiceUpdateManyWithWhereWithoutSource_recurringInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type RecurringInvoiceItemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput = {
    create?: XOR<RecurringInvoiceItemCreateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput> | RecurringInvoiceItemCreateWithoutRecurring_invoiceInput[] | RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput | RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput[]
    upsert?: RecurringInvoiceItemUpsertWithWhereUniqueWithoutRecurring_invoiceInput | RecurringInvoiceItemUpsertWithWhereUniqueWithoutRecurring_invoiceInput[]
    createMany?: RecurringInvoiceItemCreateManyRecurring_invoiceInputEnvelope
    set?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    disconnect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    delete?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    connect?: RecurringInvoiceItemWhereUniqueInput | RecurringInvoiceItemWhereUniqueInput[]
    update?: RecurringInvoiceItemUpdateWithWhereUniqueWithoutRecurring_invoiceInput | RecurringInvoiceItemUpdateWithWhereUniqueWithoutRecurring_invoiceInput[]
    updateMany?: RecurringInvoiceItemUpdateManyWithWhereWithoutRecurring_invoiceInput | RecurringInvoiceItemUpdateManyWithWhereWithoutRecurring_invoiceInput[]
    deleteMany?: RecurringInvoiceItemScalarWhereInput | RecurringInvoiceItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutRecurringInvoiceItemInput = {
    create?: XOR<ProductCreateWithoutRecurringInvoiceItemInput, ProductUncheckedCreateWithoutRecurringInvoiceItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecurringInvoiceItemInput
    connect?: ProductWhereUniqueInput
  }

  export type RecurringInvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<RecurringInvoiceCreateWithoutItemsInput, RecurringInvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutItemsInput
    connect?: RecurringInvoiceWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutRecurringInvoiceItemNestedInput = {
    create?: XOR<ProductCreateWithoutRecurringInvoiceItemInput, ProductUncheckedCreateWithoutRecurringInvoiceItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecurringInvoiceItemInput
    upsert?: ProductUpsertWithoutRecurringInvoiceItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRecurringInvoiceItemInput, ProductUpdateWithoutRecurringInvoiceItemInput>, ProductUncheckedUpdateWithoutRecurringInvoiceItemInput>
  }

  export type RecurringInvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RecurringInvoiceCreateWithoutItemsInput, RecurringInvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RecurringInvoiceCreateOrConnectWithoutItemsInput
    upsert?: RecurringInvoiceUpsertWithoutItemsInput
    connect?: RecurringInvoiceWhereUniqueInput
    update?: XOR<XOR<RecurringInvoiceUpdateToOneWithWhereWithoutItemsInput, RecurringInvoiceUpdateWithoutItemsInput>, RecurringInvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumRecurringPatternFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringPattern | EnumRecurringPatternFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringPatternFilter<$PrismaModel> | $Enums.RecurringPattern
  }

  export type NestedEnumRecurringPatternWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringPattern | EnumRecurringPatternFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringPattern[] | ListEnumRecurringPatternFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringPatternWithAggregatesFilter<$PrismaModel> | $Enums.RecurringPattern
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringPatternFilter<$PrismaModel>
    _max?: NestedEnumRecurringPatternFilter<$PrismaModel>
  }

  export type ClientCreateWithoutUserInput = {
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoices?: InvoiceCreateNestedManyWithoutClientInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    client_id?: number
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutClientInput
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateManyUserInputEnvelope = {
    data: ClientCreateManyUserInput | ClientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutUserInput = {
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    client: ClientCreateNestedOneWithoutInvoicesInput
    source_recurring?: RecurringInvoiceCreateNestedOneWithoutGenerated_invoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutUserInput = {
    invoice_id?: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateManyUserInputEnvelope = {
    data: InvoiceCreateManyUserInput | InvoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoiceItems?: InvoiceItemCreateNestedManyWithoutProductInput
    RecurringInvoiceItem?: RecurringInvoiceItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoiceItems?: InvoiceItemUncheckedCreateNestedManyWithoutProductInput
    RecurringInvoiceItem?: RecurringInvoiceItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bank_accounts?: BankAccountCreateNestedManyWithoutProfileInput
    e_wallets?: EWalletCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    profile_id?: number
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutProfileInput
    e_wallets?: EWalletUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type RecurringInvoiceCreateWithoutUserInput = {
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceCreateNestedManyWithoutSource_recurringInput
    client: ClientCreateNestedOneWithoutRecurringInvoiceInput
    items?: RecurringInvoiceItemCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceUncheckedCreateWithoutUserInput = {
    id?: number
    client_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceUncheckedCreateNestedManyWithoutSource_recurringInput
    items?: RecurringInvoiceItemUncheckedCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceCreateOrConnectWithoutUserInput = {
    where: RecurringInvoiceWhereUniqueInput
    create: XOR<RecurringInvoiceCreateWithoutUserInput, RecurringInvoiceUncheckedCreateWithoutUserInput>
  }

  export type RecurringInvoiceCreateManyUserInputEnvelope = {
    data: RecurringInvoiceCreateManyUserInput | RecurringInvoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithWhereWithoutUserInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    client_id?: IntFilter<"Client"> | number
    user_id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    state?: StringNullableFilter<"Client"> | string | null
    postal_code?: StringNullableFilter<"Client"> | string | null
    country?: StringNullableFilter<"Client"> | string | null
    company_name?: StringNullableFilter<"Client"> | string | null
    payment_preference?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    created_at?: DateTimeFilter<"Client"> | Date | string
    updated_at?: DateTimeFilter<"Client"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Client"> | Date | string | null
  }

  export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    invoice_id?: IntFilter<"Invoice"> | number
    user_id?: IntFilter<"Invoice"> | number
    client_id?: IntFilter<"Invoice"> | number
    invoice_number?: StringFilter<"Invoice"> | string
    issue_date?: DateTimeFilter<"Invoice"> | Date | string
    due_date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalNullableFilter<"Invoice"> | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    terms?: StringNullableFilter<"Invoice"> | string | null
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    source_recurring_id?: IntNullableFilter<"Invoice"> | number | null
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    product_id?: IntFilter<"Product"> | number
    user_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unit?: StringNullableFilter<"Product"> | string | null
    tax_rate?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    category?: StringNullableFilter<"Product"> | string | null
    image?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_accounts?: BankAccountUpdateManyWithoutProfileNestedInput
    e_wallets?: EWalletUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutProfileNestedInput
    e_wallets?: EWalletUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type RecurringInvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: RecurringInvoiceWhereUniqueInput
    update: XOR<RecurringInvoiceUpdateWithoutUserInput, RecurringInvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<RecurringInvoiceCreateWithoutUserInput, RecurringInvoiceUncheckedCreateWithoutUserInput>
  }

  export type RecurringInvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: RecurringInvoiceWhereUniqueInput
    data: XOR<RecurringInvoiceUpdateWithoutUserInput, RecurringInvoiceUncheckedUpdateWithoutUserInput>
  }

  export type RecurringInvoiceUpdateManyWithWhereWithoutUserInput = {
    where: RecurringInvoiceScalarWhereInput
    data: XOR<RecurringInvoiceUpdateManyMutationInput, RecurringInvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type RecurringInvoiceScalarWhereInput = {
    AND?: RecurringInvoiceScalarWhereInput | RecurringInvoiceScalarWhereInput[]
    OR?: RecurringInvoiceScalarWhereInput[]
    NOT?: RecurringInvoiceScalarWhereInput | RecurringInvoiceScalarWhereInput[]
    id?: IntFilter<"RecurringInvoice"> | number
    user_id?: IntFilter<"RecurringInvoice"> | number
    client_id?: IntFilter<"RecurringInvoice"> | number
    pattern?: EnumRecurringPatternFilter<"RecurringInvoice"> | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFilter<"RecurringInvoice"> | Date | string
    start_date?: DateTimeFilter<"RecurringInvoice"> | Date | string
    end_date?: DateTimeNullableFilter<"RecurringInvoice"> | Date | string | null
    is_active?: BoolFilter<"RecurringInvoice"> | boolean
    created_at?: DateTimeFilter<"RecurringInvoice"> | Date | string
    updated_at?: DateTimeFilter<"RecurringInvoice"> | Date | string
    deleted_at?: DateTimeNullableFilter<"RecurringInvoice"> | Date | string | null
  }

  export type BankAccountCreateWithoutProfileInput = {
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutProfileInput = {
    id?: number
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutProfileInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutProfileInput, BankAccountUncheckedCreateWithoutProfileInput>
  }

  export type BankAccountCreateManyProfileInputEnvelope = {
    data: BankAccountCreateManyProfileInput | BankAccountCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type EWalletCreateWithoutProfileInput = {
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentCreateNestedManyWithoutEWalletInput
  }

  export type EWalletUncheckedCreateWithoutProfileInput = {
    id?: number
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutEWalletInput
  }

  export type EWalletCreateOrConnectWithoutProfileInput = {
    where: EWalletWhereUniqueInput
    create: XOR<EWalletCreateWithoutProfileInput, EWalletUncheckedCreateWithoutProfileInput>
  }

  export type EWalletCreateManyProfileInputEnvelope = {
    data: EWalletCreateManyProfileInput | EWalletCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    user_id?: number
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type BankAccountUpsertWithWhereUniqueWithoutProfileInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutProfileInput, BankAccountUncheckedUpdateWithoutProfileInput>
    create: XOR<BankAccountCreateWithoutProfileInput, BankAccountUncheckedCreateWithoutProfileInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutProfileInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutProfileInput, BankAccountUncheckedUpdateWithoutProfileInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutProfileInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutProfileInput>
  }

  export type BankAccountScalarWhereInput = {
    AND?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    OR?: BankAccountScalarWhereInput[]
    NOT?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    id?: IntFilter<"BankAccount"> | number
    profile_id?: IntFilter<"BankAccount"> | number
    bank_name?: StringFilter<"BankAccount"> | string
    account_number?: StringFilter<"BankAccount"> | string
    account_name?: StringFilter<"BankAccount"> | string
    is_primary?: BoolFilter<"BankAccount"> | boolean
    created_at?: DateTimeFilter<"BankAccount"> | Date | string
    updated_at?: DateTimeFilter<"BankAccount"> | Date | string
  }

  export type EWalletUpsertWithWhereUniqueWithoutProfileInput = {
    where: EWalletWhereUniqueInput
    update: XOR<EWalletUpdateWithoutProfileInput, EWalletUncheckedUpdateWithoutProfileInput>
    create: XOR<EWalletCreateWithoutProfileInput, EWalletUncheckedCreateWithoutProfileInput>
  }

  export type EWalletUpdateWithWhereUniqueWithoutProfileInput = {
    where: EWalletWhereUniqueInput
    data: XOR<EWalletUpdateWithoutProfileInput, EWalletUncheckedUpdateWithoutProfileInput>
  }

  export type EWalletUpdateManyWithWhereWithoutProfileInput = {
    where: EWalletScalarWhereInput
    data: XOR<EWalletUpdateManyMutationInput, EWalletUncheckedUpdateManyWithoutProfileInput>
  }

  export type EWalletScalarWhereInput = {
    AND?: EWalletScalarWhereInput | EWalletScalarWhereInput[]
    OR?: EWalletScalarWhereInput[]
    NOT?: EWalletScalarWhereInput | EWalletScalarWhereInput[]
    id?: IntFilter<"EWallet"> | number
    profile_id?: IntFilter<"EWallet"> | number
    wallet_type?: StringFilter<"EWallet"> | string
    phone_number?: StringFilter<"EWallet"> | string
    account_name?: StringFilter<"EWallet"> | string
    is_primary?: BoolFilter<"EWallet"> | boolean
    created_at?: DateTimeFilter<"EWallet"> | Date | string
    updated_at?: DateTimeFilter<"EWallet"> | Date | string
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutBank_accountsInput = {
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    e_wallets?: EWalletCreateNestedManyWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutBank_accountsInput = {
    profile_id?: number
    user_id: number
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    e_wallets?: EWalletUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutBank_accountsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutBank_accountsInput, ProfileUncheckedCreateWithoutBank_accountsInput>
  }

  export type PaymentCreateWithoutBankAccountInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    EWallet?: EWalletCreateNestedOneWithoutPaymentsInput
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBankAccountInput = {
    payment_id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    eWalletId?: number | null
  }

  export type PaymentCreateOrConnectWithoutBankAccountInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBankAccountInput, PaymentUncheckedCreateWithoutBankAccountInput>
  }

  export type PaymentCreateManyBankAccountInputEnvelope = {
    data: PaymentCreateManyBankAccountInput | PaymentCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutBank_accountsInput = {
    update: XOR<ProfileUpdateWithoutBank_accountsInput, ProfileUncheckedUpdateWithoutBank_accountsInput>
    create: XOR<ProfileCreateWithoutBank_accountsInput, ProfileUncheckedCreateWithoutBank_accountsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutBank_accountsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutBank_accountsInput, ProfileUncheckedUpdateWithoutBank_accountsInput>
  }

  export type ProfileUpdateWithoutBank_accountsInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    e_wallets?: EWalletUpdateManyWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutBank_accountsInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    e_wallets?: EWalletUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBankAccountInput, PaymentUncheckedUpdateWithoutBankAccountInput>
    create: XOR<PaymentCreateWithoutBankAccountInput, PaymentUncheckedCreateWithoutBankAccountInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBankAccountInput, PaymentUncheckedUpdateWithoutBankAccountInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBankAccountInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    payment_id?: IntFilter<"Payment"> | number
    invoice_id?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFilter<"Payment"> | Date | string
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    eWalletId?: IntNullableFilter<"Payment"> | number | null
    bankAccountId?: IntNullableFilter<"Payment"> | number | null
  }

  export type ProfileCreateWithoutE_walletsInput = {
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bank_accounts?: BankAccountCreateNestedManyWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutE_walletsInput = {
    profile_id?: number
    user_id: number
    company_name?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    logo?: string | null
    website?: string | null
    tax_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutE_walletsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutE_walletsInput, ProfileUncheckedCreateWithoutE_walletsInput>
  }

  export type PaymentCreateWithoutEWalletInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    BankAccount?: BankAccountCreateNestedOneWithoutPaymentsInput
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutEWalletInput = {
    payment_id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    bankAccountId?: number | null
  }

  export type PaymentCreateOrConnectWithoutEWalletInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutEWalletInput, PaymentUncheckedCreateWithoutEWalletInput>
  }

  export type PaymentCreateManyEWalletInputEnvelope = {
    data: PaymentCreateManyEWalletInput | PaymentCreateManyEWalletInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutE_walletsInput = {
    update: XOR<ProfileUpdateWithoutE_walletsInput, ProfileUncheckedUpdateWithoutE_walletsInput>
    create: XOR<ProfileCreateWithoutE_walletsInput, ProfileUncheckedCreateWithoutE_walletsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutE_walletsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutE_walletsInput, ProfileUncheckedUpdateWithoutE_walletsInput>
  }

  export type ProfileUpdateWithoutE_walletsInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_accounts?: BankAccountUpdateManyWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutE_walletsInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    tax_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutEWalletInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutEWalletInput, PaymentUncheckedUpdateWithoutEWalletInput>
    create: XOR<PaymentCreateWithoutEWalletInput, PaymentUncheckedCreateWithoutEWalletInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutEWalletInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutEWalletInput, PaymentUncheckedUpdateWithoutEWalletInput>
  }

  export type PaymentUpdateManyWithWhereWithoutEWalletInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutEWalletInput>
  }

  export type UserCreateWithoutClientsInput = {
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    user_id?: number
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type InvoiceCreateWithoutClientInput = {
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring?: RecurringInvoiceCreateNestedOneWithoutGenerated_invoicesInput
    user: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutClientInput = {
    invoice_id?: number
    user_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput>
  }

  export type InvoiceCreateManyClientInputEnvelope = {
    data: InvoiceCreateManyClientInput | InvoiceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type RecurringInvoiceCreateWithoutClientInput = {
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceCreateNestedManyWithoutSource_recurringInput
    user: UserCreateNestedOneWithoutRecurringInvoiceInput
    items?: RecurringInvoiceItemCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceUncheckedCreateWithoutClientInput = {
    id?: number
    user_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceUncheckedCreateNestedManyWithoutSource_recurringInput
    items?: RecurringInvoiceItemUncheckedCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceCreateOrConnectWithoutClientInput = {
    where: RecurringInvoiceWhereUniqueInput
    create: XOR<RecurringInvoiceCreateWithoutClientInput, RecurringInvoiceUncheckedCreateWithoutClientInput>
  }

  export type RecurringInvoiceCreateManyClientInputEnvelope = {
    data: RecurringInvoiceCreateManyClientInput | RecurringInvoiceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutClientInput, InvoiceUncheckedUpdateWithoutClientInput>
    create: XOR<InvoiceCreateWithoutClientInput, InvoiceUncheckedCreateWithoutClientInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutClientInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutClientInput, InvoiceUncheckedUpdateWithoutClientInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutClientInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutClientInput>
  }

  export type RecurringInvoiceUpsertWithWhereUniqueWithoutClientInput = {
    where: RecurringInvoiceWhereUniqueInput
    update: XOR<RecurringInvoiceUpdateWithoutClientInput, RecurringInvoiceUncheckedUpdateWithoutClientInput>
    create: XOR<RecurringInvoiceCreateWithoutClientInput, RecurringInvoiceUncheckedCreateWithoutClientInput>
  }

  export type RecurringInvoiceUpdateWithWhereUniqueWithoutClientInput = {
    where: RecurringInvoiceWhereUniqueInput
    data: XOR<RecurringInvoiceUpdateWithoutClientInput, RecurringInvoiceUncheckedUpdateWithoutClientInput>
  }

  export type RecurringInvoiceUpdateManyWithWhereWithoutClientInput = {
    where: RecurringInvoiceScalarWhereInput
    data: XOR<RecurringInvoiceUpdateManyMutationInput, RecurringInvoiceUncheckedUpdateManyWithoutClientInput>
  }

  export type InvoiceItemCreateWithoutProductInput = {
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    invoice: InvoiceCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemUncheckedCreateWithoutProductInput = {
    item_id?: number
    invoice_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemCreateOrConnectWithoutProductInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutProductInput, InvoiceItemUncheckedCreateWithoutProductInput>
  }

  export type InvoiceItemCreateManyProductInputEnvelope = {
    data: InvoiceItemCreateManyProductInput | InvoiceItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProductsInput = {
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    user_id?: number
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type RecurringInvoiceItemCreateWithoutProductInput = {
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    recurring_invoice: RecurringInvoiceCreateNestedOneWithoutItemsInput
  }

  export type RecurringInvoiceItemUncheckedCreateWithoutProductInput = {
    id?: number
    recurring_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemCreateOrConnectWithoutProductInput = {
    where: RecurringInvoiceItemWhereUniqueInput
    create: XOR<RecurringInvoiceItemCreateWithoutProductInput, RecurringInvoiceItemUncheckedCreateWithoutProductInput>
  }

  export type RecurringInvoiceItemCreateManyProductInputEnvelope = {
    data: RecurringInvoiceItemCreateManyProductInput | RecurringInvoiceItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutProductInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutProductInput, InvoiceItemUncheckedUpdateWithoutProductInput>
    create: XOR<InvoiceItemCreateWithoutProductInput, InvoiceItemUncheckedCreateWithoutProductInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutProductInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutProductInput, InvoiceItemUncheckedUpdateWithoutProductInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutProductInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutProductInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    OR?: InvoiceItemScalarWhereInput[]
    NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    item_id?: IntFilter<"InvoiceItem"> | number
    invoice_id?: IntFilter<"InvoiceItem"> | number
    product_id?: IntFilter<"InvoiceItem"> | number
    description?: StringNullableFilter<"InvoiceItem"> | string | null
    quantity?: IntFilter<"InvoiceItem"> | number
    unit_price?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecurringInvoiceItemUpsertWithWhereUniqueWithoutProductInput = {
    where: RecurringInvoiceItemWhereUniqueInput
    update: XOR<RecurringInvoiceItemUpdateWithoutProductInput, RecurringInvoiceItemUncheckedUpdateWithoutProductInput>
    create: XOR<RecurringInvoiceItemCreateWithoutProductInput, RecurringInvoiceItemUncheckedCreateWithoutProductInput>
  }

  export type RecurringInvoiceItemUpdateWithWhereUniqueWithoutProductInput = {
    where: RecurringInvoiceItemWhereUniqueInput
    data: XOR<RecurringInvoiceItemUpdateWithoutProductInput, RecurringInvoiceItemUncheckedUpdateWithoutProductInput>
  }

  export type RecurringInvoiceItemUpdateManyWithWhereWithoutProductInput = {
    where: RecurringInvoiceItemScalarWhereInput
    data: XOR<RecurringInvoiceItemUpdateManyMutationInput, RecurringInvoiceItemUncheckedUpdateManyWithoutProductInput>
  }

  export type RecurringInvoiceItemScalarWhereInput = {
    AND?: RecurringInvoiceItemScalarWhereInput | RecurringInvoiceItemScalarWhereInput[]
    OR?: RecurringInvoiceItemScalarWhereInput[]
    NOT?: RecurringInvoiceItemScalarWhereInput | RecurringInvoiceItemScalarWhereInput[]
    id?: IntFilter<"RecurringInvoiceItem"> | number
    recurring_id?: IntFilter<"RecurringInvoiceItem"> | number
    product_id?: IntFilter<"RecurringInvoiceItem"> | number
    description?: StringNullableFilter<"RecurringInvoiceItem"> | string | null
    quantity?: IntFilter<"RecurringInvoiceItem"> | number
    unit_price?: DecimalFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string
    tax_rate?: DecimalNullableFilter<"RecurringInvoiceItem"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClientCreateWithoutInvoicesInput = {
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutClientsInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutInvoicesInput = {
    client_id?: number
    user_id: number
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutInvoicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
  }

  export type RecurringInvoiceCreateWithoutGenerated_invoicesInput = {
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    client: ClientCreateNestedOneWithoutRecurringInvoiceInput
    user: UserCreateNestedOneWithoutRecurringInvoiceInput
    items?: RecurringInvoiceItemCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceUncheckedCreateWithoutGenerated_invoicesInput = {
    id?: number
    user_id: number
    client_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    items?: RecurringInvoiceItemUncheckedCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type RecurringInvoiceCreateOrConnectWithoutGenerated_invoicesInput = {
    where: RecurringInvoiceWhereUniqueInput
    create: XOR<RecurringInvoiceCreateWithoutGenerated_invoicesInput, RecurringInvoiceUncheckedCreateWithoutGenerated_invoicesInput>
  }

  export type UserCreateWithoutInvoicesInput = {
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    user_id?: number
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    RecurringInvoice?: RecurringInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutInvoiceItemsInput
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    item_id?: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutInvoiceInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    BankAccount?: BankAccountCreateNestedOneWithoutPaymentsInput
    EWallet?: EWalletCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    eWalletId?: number | null
    bankAccountId?: number | null
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutInvoicesInput = {
    update: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
    create: XOR<ClientCreateWithoutInvoicesInput, ClientUncheckedCreateWithoutInvoicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutInvoicesInput, ClientUncheckedUpdateWithoutInvoicesInput>
  }

  export type ClientUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutInvoicesInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type RecurringInvoiceUpsertWithoutGenerated_invoicesInput = {
    update: XOR<RecurringInvoiceUpdateWithoutGenerated_invoicesInput, RecurringInvoiceUncheckedUpdateWithoutGenerated_invoicesInput>
    create: XOR<RecurringInvoiceCreateWithoutGenerated_invoicesInput, RecurringInvoiceUncheckedCreateWithoutGenerated_invoicesInput>
    where?: RecurringInvoiceWhereInput
  }

  export type RecurringInvoiceUpdateToOneWithWhereWithoutGenerated_invoicesInput = {
    where?: RecurringInvoiceWhereInput
    data: XOR<RecurringInvoiceUpdateWithoutGenerated_invoicesInput, RecurringInvoiceUncheckedUpdateWithoutGenerated_invoicesInput>
  }

  export type RecurringInvoiceUpdateWithoutGenerated_invoicesInput = {
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutRecurringInvoiceNestedInput
    user?: UserUpdateOneRequiredWithoutRecurringInvoiceNestedInput
    items?: RecurringInvoiceItemUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type RecurringInvoiceUncheckedUpdateWithoutGenerated_invoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: RecurringInvoiceItemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceCreateWithoutItemsInput = {
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    client: ClientCreateNestedOneWithoutInvoicesInput
    source_recurring?: RecurringInvoiceCreateNestedOneWithoutGenerated_invoicesInput
    user: UserCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    invoice_id?: number
    user_id: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutInvoiceItemsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutProductsInput
    RecurringInvoiceItem?: RecurringInvoiceItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInvoiceItemsInput = {
    product_id?: number
    user_id: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    RecurringInvoiceItem?: RecurringInvoiceItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInvoiceItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInvoiceItemsInput, ProductUncheckedCreateWithoutInvoiceItemsInput>
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    source_recurring?: RecurringInvoiceUpdateOneWithoutGenerated_invoicesNestedInput
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type ProductUpsertWithoutInvoiceItemsInput = {
    update: XOR<ProductUpdateWithoutInvoiceItemsInput, ProductUncheckedUpdateWithoutInvoiceItemsInput>
    create: XOR<ProductCreateWithoutInvoiceItemsInput, ProductUncheckedCreateWithoutInvoiceItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInvoiceItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInvoiceItemsInput, ProductUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type ProductUpdateWithoutInvoiceItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    RecurringInvoiceItem?: RecurringInvoiceItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInvoiceItemsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RecurringInvoiceItem?: RecurringInvoiceItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BankAccountCreateWithoutPaymentsInput = {
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    profile: ProfileCreateNestedOneWithoutBank_accountsInput
  }

  export type BankAccountUncheckedCreateWithoutPaymentsInput = {
    id?: number
    profile_id: number
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BankAccountCreateOrConnectWithoutPaymentsInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutPaymentsInput, BankAccountUncheckedCreateWithoutPaymentsInput>
  }

  export type EWalletCreateWithoutPaymentsInput = {
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    profile: ProfileCreateNestedOneWithoutE_walletsInput
  }

  export type EWalletUncheckedCreateWithoutPaymentsInput = {
    id?: number
    profile_id: number
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EWalletCreateOrConnectWithoutPaymentsInput = {
    where: EWalletWhereUniqueInput
    create: XOR<EWalletCreateWithoutPaymentsInput, EWalletUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    client: ClientCreateNestedOneWithoutInvoicesInput
    source_recurring?: RecurringInvoiceCreateNestedOneWithoutGenerated_invoicesInput
    user: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    invoice_id?: number
    user_id: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type BankAccountUpsertWithoutPaymentsInput = {
    update: XOR<BankAccountUpdateWithoutPaymentsInput, BankAccountUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BankAccountCreateWithoutPaymentsInput, BankAccountUncheckedCreateWithoutPaymentsInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutPaymentsInput, BankAccountUncheckedUpdateWithoutPaymentsInput>
  }

  export type BankAccountUpdateWithoutPaymentsInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutBank_accountsNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EWalletUpsertWithoutPaymentsInput = {
    update: XOR<EWalletUpdateWithoutPaymentsInput, EWalletUncheckedUpdateWithoutPaymentsInput>
    create: XOR<EWalletCreateWithoutPaymentsInput, EWalletUncheckedCreateWithoutPaymentsInput>
    where?: EWalletWhereInput
  }

  export type EWalletUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: EWalletWhereInput
    data: XOR<EWalletUpdateWithoutPaymentsInput, EWalletUncheckedUpdateWithoutPaymentsInput>
  }

  export type EWalletUpdateWithoutPaymentsInput = {
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutE_walletsNestedInput
  }

  export type EWalletUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    source_recurring?: RecurringInvoiceUpdateOneWithoutGenerated_invoicesNestedInput
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateWithoutSource_recurringInput = {
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    client: ClientCreateNestedOneWithoutInvoicesInput
    user: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutSource_recurringInput = {
    invoice_id?: number
    user_id: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutSource_recurringInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutSource_recurringInput, InvoiceUncheckedCreateWithoutSource_recurringInput>
  }

  export type InvoiceCreateManySource_recurringInputEnvelope = {
    data: InvoiceCreateManySource_recurringInput | InvoiceCreateManySource_recurringInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutRecurringInvoiceInput = {
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutClientsInput
    invoices?: InvoiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutRecurringInvoiceInput = {
    client_id?: number
    user_id: number
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutRecurringInvoiceInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutRecurringInvoiceInput, ClientUncheckedCreateWithoutRecurringInvoiceInput>
  }

  export type UserCreateWithoutRecurringInvoiceInput = {
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecurringInvoiceInput = {
    user_id?: number
    email: string
    username?: string | null
    password?: string | null
    phone?: string | null
    first_name?: string | null
    last_name?: string | null
    avatar?: string | null
    is_google?: boolean
    verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    verify_token?: string | null
    password_reset_token?: string | null
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecurringInvoiceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecurringInvoiceInput, UserUncheckedCreateWithoutRecurringInvoiceInput>
  }

  export type RecurringInvoiceItemCreateWithoutRecurring_invoiceInput = {
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    product: ProductCreateNestedOneWithoutRecurringInvoiceItemInput
  }

  export type RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput = {
    id?: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemCreateOrConnectWithoutRecurring_invoiceInput = {
    where: RecurringInvoiceItemWhereUniqueInput
    create: XOR<RecurringInvoiceItemCreateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput>
  }

  export type RecurringInvoiceItemCreateManyRecurring_invoiceInputEnvelope = {
    data: RecurringInvoiceItemCreateManyRecurring_invoiceInput | RecurringInvoiceItemCreateManyRecurring_invoiceInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutSource_recurringInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutSource_recurringInput, InvoiceUncheckedUpdateWithoutSource_recurringInput>
    create: XOR<InvoiceCreateWithoutSource_recurringInput, InvoiceUncheckedCreateWithoutSource_recurringInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutSource_recurringInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutSource_recurringInput, InvoiceUncheckedUpdateWithoutSource_recurringInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutSource_recurringInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutSource_recurringInput>
  }

  export type ClientUpsertWithoutRecurringInvoiceInput = {
    update: XOR<ClientUpdateWithoutRecurringInvoiceInput, ClientUncheckedUpdateWithoutRecurringInvoiceInput>
    create: XOR<ClientCreateWithoutRecurringInvoiceInput, ClientUncheckedCreateWithoutRecurringInvoiceInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutRecurringInvoiceInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutRecurringInvoiceInput, ClientUncheckedUpdateWithoutRecurringInvoiceInput>
  }

  export type ClientUpdateWithoutRecurringInvoiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    invoices?: InvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutRecurringInvoiceInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutRecurringInvoiceInput = {
    update: XOR<UserUpdateWithoutRecurringInvoiceInput, UserUncheckedUpdateWithoutRecurringInvoiceInput>
    create: XOR<UserCreateWithoutRecurringInvoiceInput, UserUncheckedCreateWithoutRecurringInvoiceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecurringInvoiceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecurringInvoiceInput, UserUncheckedUpdateWithoutRecurringInvoiceInput>
  }

  export type UserUpdateWithoutRecurringInvoiceInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecurringInvoiceInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_google?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RecurringInvoiceItemUpsertWithWhereUniqueWithoutRecurring_invoiceInput = {
    where: RecurringInvoiceItemWhereUniqueInput
    update: XOR<RecurringInvoiceItemUpdateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedUpdateWithoutRecurring_invoiceInput>
    create: XOR<RecurringInvoiceItemCreateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedCreateWithoutRecurring_invoiceInput>
  }

  export type RecurringInvoiceItemUpdateWithWhereUniqueWithoutRecurring_invoiceInput = {
    where: RecurringInvoiceItemWhereUniqueInput
    data: XOR<RecurringInvoiceItemUpdateWithoutRecurring_invoiceInput, RecurringInvoiceItemUncheckedUpdateWithoutRecurring_invoiceInput>
  }

  export type RecurringInvoiceItemUpdateManyWithWhereWithoutRecurring_invoiceInput = {
    where: RecurringInvoiceItemScalarWhereInput
    data: XOR<RecurringInvoiceItemUpdateManyMutationInput, RecurringInvoiceItemUncheckedUpdateManyWithoutRecurring_invoiceInput>
  }

  export type ProductCreateWithoutRecurringInvoiceItemInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoiceItems?: InvoiceItemCreateNestedManyWithoutProductInput
    user: UserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutRecurringInvoiceItemInput = {
    product_id?: number
    user_id: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    invoiceItems?: InvoiceItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRecurringInvoiceItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecurringInvoiceItemInput, ProductUncheckedCreateWithoutRecurringInvoiceItemInput>
  }

  export type RecurringInvoiceCreateWithoutItemsInput = {
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceCreateNestedManyWithoutSource_recurringInput
    client: ClientCreateNestedOneWithoutRecurringInvoiceInput
    user: UserCreateNestedOneWithoutRecurringInvoiceInput
  }

  export type RecurringInvoiceUncheckedCreateWithoutItemsInput = {
    id?: number
    user_id: number
    client_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    generated_invoices?: InvoiceUncheckedCreateNestedManyWithoutSource_recurringInput
  }

  export type RecurringInvoiceCreateOrConnectWithoutItemsInput = {
    where: RecurringInvoiceWhereUniqueInput
    create: XOR<RecurringInvoiceCreateWithoutItemsInput, RecurringInvoiceUncheckedCreateWithoutItemsInput>
  }

  export type ProductUpsertWithoutRecurringInvoiceItemInput = {
    update: XOR<ProductUpdateWithoutRecurringInvoiceItemInput, ProductUncheckedUpdateWithoutRecurringInvoiceItemInput>
    create: XOR<ProductCreateWithoutRecurringInvoiceItemInput, ProductUncheckedCreateWithoutRecurringInvoiceItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRecurringInvoiceItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRecurringInvoiceItemInput, ProductUncheckedUpdateWithoutRecurringInvoiceItemInput>
  }

  export type ProductUpdateWithoutRecurringInvoiceItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceItems?: InvoiceItemUpdateManyWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecurringInvoiceItemInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceItems?: InvoiceItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type RecurringInvoiceUpsertWithoutItemsInput = {
    update: XOR<RecurringInvoiceUpdateWithoutItemsInput, RecurringInvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<RecurringInvoiceCreateWithoutItemsInput, RecurringInvoiceUncheckedCreateWithoutItemsInput>
    where?: RecurringInvoiceWhereInput
  }

  export type RecurringInvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: RecurringInvoiceWhereInput
    data: XOR<RecurringInvoiceUpdateWithoutItemsInput, RecurringInvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type RecurringInvoiceUpdateWithoutItemsInput = {
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUpdateManyWithoutSource_recurringNestedInput
    client?: ClientUpdateOneRequiredWithoutRecurringInvoiceNestedInput
    user?: UserUpdateOneRequiredWithoutRecurringInvoiceNestedInput
  }

  export type RecurringInvoiceUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUncheckedUpdateManyWithoutSource_recurringNestedInput
  }

  export type ClientCreateManyUserInput = {
    client_id?: number
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    company_name?: string | null
    payment_preference?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type InvoiceCreateManyUserInput = {
    invoice_id?: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
  }

  export type ProductCreateManyUserInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    unit?: string | null
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    category?: string | null
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type RecurringInvoiceCreateManyUserInput = {
    id?: number
    client_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClientUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUpdateManyWithoutClientNestedInput
    RecurringInvoice?: RecurringInvoiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutClientNestedInput
    RecurringInvoice?: RecurringInvoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUserInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    payment_preference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvoiceUpdateWithoutUserInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    source_recurring?: RecurringInvoiceUpdateOneWithoutGenerated_invoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutUserInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceItems?: InvoiceItemUpdateManyWithoutProductNestedInput
    RecurringInvoiceItem?: RecurringInvoiceItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceItems?: InvoiceItemUncheckedUpdateManyWithoutProductNestedInput
    RecurringInvoiceItem?: RecurringInvoiceItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecurringInvoiceUpdateWithoutUserInput = {
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUpdateManyWithoutSource_recurringNestedInput
    client?: ClientUpdateOneRequiredWithoutRecurringInvoiceNestedInput
    items?: RecurringInvoiceItemUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type RecurringInvoiceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUncheckedUpdateManyWithoutSource_recurringNestedInput
    items?: RecurringInvoiceItemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type RecurringInvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BankAccountCreateManyProfileInput = {
    id?: number
    bank_name: string
    account_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EWalletCreateManyProfileInput = {
    id?: number
    wallet_type: string
    phone_number: string
    account_name: string
    is_primary?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BankAccountUpdateWithoutProfileInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EWalletUpdateWithoutProfileInput = {
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutEWalletNestedInput
  }

  export type EWalletUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutEWalletNestedInput
  }

  export type EWalletUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    wallet_type?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyBankAccountInput = {
    payment_id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    eWalletId?: number | null
  }

  export type PaymentUpdateWithoutBankAccountInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    EWallet?: EWalletUpdateOneWithoutPaymentsNestedInput
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBankAccountInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eWalletId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentUncheckedUpdateManyWithoutBankAccountInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eWalletId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentCreateManyEWalletInput = {
    payment_id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    bankAccountId?: number | null
  }

  export type PaymentUpdateWithoutEWalletInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    BankAccount?: BankAccountUpdateOneWithoutPaymentsNestedInput
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutEWalletInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentUncheckedUpdateManyWithoutEWalletInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvoiceCreateManyClientInput = {
    invoice_id?: number
    user_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    source_recurring_id?: number | null
  }

  export type RecurringInvoiceCreateManyClientInput = {
    id?: number
    user_id: number
    pattern: $Enums.RecurringPattern
    next_invoice_date: Date | string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type InvoiceUpdateWithoutClientInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring?: RecurringInvoiceUpdateOneWithoutGenerated_invoicesNestedInput
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutClientInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutClientInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_recurring_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecurringInvoiceUpdateWithoutClientInput = {
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUpdateManyWithoutSource_recurringNestedInput
    user?: UserUpdateOneRequiredWithoutRecurringInvoiceNestedInput
    items?: RecurringInvoiceItemUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type RecurringInvoiceUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generated_invoices?: InvoiceUncheckedUpdateManyWithoutSource_recurringNestedInput
    items?: RecurringInvoiceItemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type RecurringInvoiceUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pattern?: EnumRecurringPatternFieldUpdateOperationsInput | $Enums.RecurringPattern
    next_invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvoiceItemCreateManyProductInput = {
    item_id?: number
    invoice_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type RecurringInvoiceItemCreateManyProductInput = {
    id?: number
    recurring_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type InvoiceItemUpdateWithoutProductInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateWithoutProductInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemUncheckedUpdateManyWithoutProductInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecurringInvoiceItemUpdateWithoutProductInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recurring_invoice?: RecurringInvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RecurringInvoiceItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    item_id?: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PaymentCreateManyInvoiceInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string
    payment_method: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    created_at?: Date | string
    eWalletId?: number | null
    bankAccountId?: number | null
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutInvoiceItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    BankAccount?: BankAccountUpdateOneWithoutPaymentsNestedInput
    EWallet?: EWalletUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eWalletId?: NullableIntFieldUpdateOperationsInput | number | null
    bankAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eWalletId?: NullableIntFieldUpdateOperationsInput | number | null
    bankAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvoiceCreateManySource_recurringInput = {
    invoice_id?: number
    user_id: number
    client_id: number
    invoice_number: string
    issue_date?: Date | string
    due_date: Date | string
    status?: $Enums.InvoiceStatus
    subtotal: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    total_amount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    terms?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type RecurringInvoiceItemCreateManyRecurring_invoiceInput = {
    id?: number
    product_id: number
    description?: string | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    tax_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type InvoiceUpdateWithoutSource_recurringInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutInvoicesNestedInput
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutSource_recurringInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutSource_recurringInput = {
    invoice_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecurringInvoiceItemUpdateWithoutRecurring_invoiceInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    product?: ProductUpdateOneRequiredWithoutRecurringInvoiceItemNestedInput
  }

  export type RecurringInvoiceItemUncheckedUpdateWithoutRecurring_invoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RecurringInvoiceItemUncheckedUpdateManyWithoutRecurring_invoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}