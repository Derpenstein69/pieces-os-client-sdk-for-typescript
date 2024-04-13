/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export const BASE_PATH = "http://localhost:3000".replace(/\/+$/, "");

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @interface ConfigurationParameters
 * @typedef {ConfigurationParameters}
 */
export interface ConfigurationParameters {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?string}
 */
basePath?: string; // override base path
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?FetchAPI}
 */
fetchApi?: FetchAPI; // override for fetch implementation
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?Middleware[]}
 */
middleware?: Middleware[]; // middleware to apply before/after fetch requests
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?(params: HTTPQuery) => string}
 */
queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?string}
 */
username?: string; // parameter for basic security
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?string}
 */
password?: string; // parameter for basic security
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?(string | Promise<string> | ((name: string) => string | Promise<string>))}
 */
apiKey?: string | Promise<string> | ((name: string) => string | Promise<string>); // parameter for apiKey security
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?(string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>))}
 */
accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?HTTPHeaders}
 */
headers?: HTTPHeaders; //header params we want to use on every request
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {?RequestCredentials}
 */
credentials?: RequestCredentials; //value for the credentials param we want to use on each request
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @class Configuration
 * @typedef {Configuration}
 */
export class Configuration {
    /**
 * Creates an instance of Configuration.
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @constructor
 * @param {ConfigurationParameters} [configuration={\}]
 */
constructor(private configuration: ConfigurationParameters = {}) {}

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {Configuration}
 */
set config(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {string}
 */
get basePath(): string {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {(FetchAPI | undefined)}
 */
get fetchApi(): FetchAPI | undefined {
        return this.configuration.fetchApi;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {Middleware[]}
 */
get middleware(): Middleware[] {
        return this.configuration.middleware || [];
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {(params: HTTPQuery) => string}
 */
get queryParamsStringify(): (params: HTTPQuery) => string {
        return this.configuration.queryParamsStringify || querystring;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {(string | undefined)}
 */
get username(): string | undefined {
        return this.configuration.username;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {(string | undefined)}
 */
get password(): string | undefined {
        return this.configuration.password;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {((name: string) => string | Promise<string>) | undefined}
 */
get apiKey(): ((name: string) => string | Promise<string>) | undefined {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {((name?: string, scopes?: string[]) => string | Promise<string>) | undefined}
 */
get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : async () => accessToken;
        }
        return undefined;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {(HTTPHeaders | undefined)}
 */
get headers(): HTTPHeaders | undefined {
        return this.configuration.headers;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @readonly
 * @type {(RequestCredentials | undefined)}
 */
get credentials(): RequestCredentials | undefined {
        return this.configuration.credentials;
    }
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {Configuration}
 */
export const DefaultConfig = new Configuration();

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @private
 * @static
 * @readonly
 * @type {*}
 */
private static readonly jsonRegex = new RegExp('^(:?application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$', 'i');
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @private
 * @type {Middleware[]}
 */
private middleware: Middleware[];

    /**
 * Creates an instance of BaseAPI.
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @constructor
 * @param {Configuration} [configuration=DefaultConfig]
 */
constructor(protected configuration = DefaultConfig) {
        this.middleware = configuration.middleware;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @template {BaseAPI} T
 * @param {T} this
 * @param {...Middleware[]} middlewares
 * @returns {T}
 */
withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
        const next = this.clone<T>();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @template {BaseAPI} T
 * @param {T} this
 * @param {...Array<Middleware['pre']>} preMiddlewares
 * @returns {Promise<void | FetchParams>>) => T}
 */
withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware<T>(...middlewares);
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @template {BaseAPI} T
 * @param {T} this
 * @param {...Array<Middleware['post']>} postMiddlewares
 * @returns {Promise<any>>) => T}
 */
withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware<T>(...middlewares);
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    protected isJsonMime(mime: string | null | undefined): boolean {
        if (!mime) {
            return false;
        }
        return BaseAPI.jsonRegex.test(mime);
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @protected
 * @async
 * @param {RequestOpts} context
 * @param {?(RequestInit | InitOverrideFunction)} [initOverrides]
 * @returns {Promise<Response>}
 */
protected async request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response> {
        const { url, init } = await this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        if (response && (response.status >= 200 && response.status < 300)) {
            return response;
        }
        throw new ResponseError(response, 'Response returned an error code');
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @private
 * @async
 * @param {RequestOpts} context
 * @param {?(RequestInit | InitOverrideFunction)} [initOverrides]
 * @returns {unknown}
 */
private async createFetchParams(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }

        const headers = Object.assign({}, this.configuration.headers, context.headers);
        Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});

        const initOverrideFn =
            typeof initOverrides === "function"
                ? initOverrides
                : async () => initOverrides;

        const initParams = {
            method: context.method,
            headers,
            body: context.body,
            credentials: this.configuration.credentials,
        };

        const overriddenInit: RequestInit = {
            ...initParams,
            ...(await initOverrideFn({
                init: initParams,
                context,
            }))
        };

        let body: any;
        if (isFormData(overriddenInit.body)
            || (overriddenInit.body instanceof URLSearchParams)
            || isBlob(overriddenInit.body)) {
          body = overriddenInit.body;
        } else if (this.isJsonMime(headers['Content-Type'])) {
          body = JSON.stringify(overriddenInit.body);
        } else {
          body = overriddenInit.body;
        }

        const init: RequestInit = {
            ...overriddenInit,
            body
        };

        return { url, init };
    }

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @async
 * @param {string} url
 * @param {RequestInit} init
 * @returns {unknown}
 */
private fetchApi = async (url: string, init: RequestInit) => {
        let fetchParams = { url, init };
        for (const middleware of this.middleware) {
            if (middleware.pre) {
                fetchParams = await middleware.pre({
                    fetch: this.fetchApi,
                    ...fetchParams,
                }) || fetchParams;
            }
        }
        let response: Response | undefined = undefined;
        try {
            response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
        } catch (e) {
            for (const middleware of this.middleware) {
                if (middleware.onError) {
                    response = await middleware.onError({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        error: e,
                        response: response ? response.clone() : undefined,
                    }) || response;
                }
            }
            if (response === undefined) {
              if (e instanceof Error) {
                throw new FetchError(e, 'The request failed and the interceptors did not return an alternative response');
              } else {
                throw e;
              }
            }
        }
        for (const middleware of this.middleware) {
            if (middleware.post) {
                response = await middleware.post({
                    fetch: this.fetchApi,
                    url: fetchParams.url,
                    init: fetchParams.init,
                    response: response.clone(),
                }) || response;
            }
        }
        return response;
    }

    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone<T extends BaseAPI>(this: T): T {
        const constructor = this.constructor as any;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
};

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @param {*} value
 * @returns {value is Blob}
 */
function isBlob(value: any): value is Blob {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @param {*} value
 * @returns {value is FormData}
 */
function isFormData(value: any): value is FormData {
    return typeof FormData !== "undefined" && value instanceof FormData;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @class ResponseError
 * @typedef {ResponseError}
 * @extends {Error}
 */
export class ResponseError extends Error {
    /**
 * @inheritdoc
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {"ResponseError"}
 */
override name: "ResponseError" = "ResponseError";
    /**
 * Creates an instance of ResponseError.
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @constructor
 * @param {Response} response
 * @param {?string} [msg]
 */
constructor(public response: Response, msg?: string) {
        super(msg);
    }
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @class FetchError
 * @typedef {FetchError}
 * @extends {Error}
 */
export class FetchError extends Error {
    /**
 * @inheritdoc
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @type {"FetchError"}
 */
override name: "FetchError" = "FetchError";
    /**
 * Creates an instance of FetchError.
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @constructor
 * @param {Error} cause
 * @param {?string} [msg]
 */
constructor(public cause: Error, msg?: string) {
        super(msg);
    }
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @class RequiredError
 * @typedef {RequiredError}
 * @extends {Error}
 */
export class RequiredError extends Error {
    /**
 * @inheritdoc
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {"RequiredError"}
 */
override name: "RequiredError" = "RequiredError";
    /**
 * Creates an instance of RequiredError.
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @constructor
 * @param {string} field
 * @param {?string} [msg]
 */
constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {{ csv: string; ssv: string; tsv: string; pipes: string; }\}
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {FetchAPI}
 */
export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {Json}
 */
export type Json = any;
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {HTTPMethod}
 */
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {HTTPHeaders}
 */
export type HTTPHeaders = { [key: string]: string };
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {HTTPQuery}
 */
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery };
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {HTTPBody}
 */
export type HTTPBody = Json | FormData | URLSearchParams;
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {HTTPRequestInit}
 */
export type HTTPRequestInit = { headers?: HTTPHeaders; method: HTTPMethod; credentials?: RequestCredentials; body?: HTTPBody };
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {ModelPropertyNaming}
 */
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @typedef {InitOverrideFunction}
 */
export type InitOverrideFunction = (requestContext: { init: HTTPRequestInit, context: RequestOpts }) => Promise<RequestInit>

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface FetchParams
 * @typedef {FetchParams}
 */
export interface FetchParams {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {string}
 */
url: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {RequestInit}
 */
init: RequestInit;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface RequestOpts
 * @typedef {RequestOpts}
 */
export interface RequestOpts {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {string}
 */
path: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {HTTPMethod}
 */
method: HTTPMethod;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {HTTPHeaders}
 */
headers: HTTPHeaders;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {?HTTPQuery}
 */
query?: HTTPQuery;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {?HTTPBody}
 */
body?: HTTPBody;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @param {*} json
 * @param {string} key
 * @returns {boolean}
 */
export function exists(json: any, key: string) {
    const value = json[key];
    return value !== null && value !== undefined;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @param {HTTPQuery} params
 * @param {string} [prefix='']
 * @returns {string}
 */
export function querystring(params: HTTPQuery, prefix: string = ''): string {
    return Object.keys(params)
        .map(key => querystringSingleKey(key, params[key], prefix))
        .filter(part => part.length > 0)
        .join('&');
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @param {string} key
 * @param {(string | number | null | undefined | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery)} value
 * @param {string} [keyPrefix='']
 * @returns {string}
 */
function querystringSingleKey(key: string, value: string | number | null | undefined | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery, keyPrefix: string = ''): string {
    const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
    if (value instanceof Array) {
        const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
            .join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }
    if (value instanceof Set) {
        const valueAsArray = Array.from(value);
        return querystringSingleKey(key, valueAsArray, keyPrefix);
    }
    if (value instanceof Date) {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
    }
    if (value instanceof Object) {
        return querystring(value as HTTPQuery, fullKey);
    }
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @param {*} data
 * @param {(item: any) => any} fn
 * @returns {any) => any}
 */
export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @param {Consume[]} consumes
 * @returns {boolean}
 */
export function canConsumeForm(consumes: Consume[]): boolean {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface Consume
 * @typedef {Consume}
 */
export interface Consume {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {string}
 */
contentType: string;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface RequestContext
 * @typedef {RequestContext}
 */
export interface RequestContext {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {FetchAPI}
 */
fetch: FetchAPI;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {string}
 */
url: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {RequestInit}
 */
init: RequestInit;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface ResponseContext
 * @typedef {ResponseContext}
 */
export interface ResponseContext {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {FetchAPI}
 */
fetch: FetchAPI;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {string}
 */
url: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {RequestInit}
 */
init: RequestInit;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {Response}
 */
response: Response;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface ErrorContext
 * @typedef {ErrorContext}
 */
export interface ErrorContext {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {FetchAPI}
 */
fetch: FetchAPI;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {string}
 */
url: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {RequestInit}
 */
init: RequestInit;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {unknown}
 */
error: unknown;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {?Response}
 */
response?: Response;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface Middleware
 * @typedef {Middleware}
 */
export interface Middleware {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @param {RequestContext} context
 * @returns {Promise<FetchParams | void>}
 */
pre?(context: RequestContext): Promise<FetchParams | void>;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @param {ResponseContext} context
 * @returns {Promise<Response | void>}
 */
post?(context: ResponseContext): Promise<Response | void>;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @param {ErrorContext} context
 * @returns {Promise<Response | void>}
 */
onError?(context: ErrorContext): Promise<Response | void>;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface ApiResponse
 * @typedef {ApiResponse}
 * @template T
 */
export interface ApiResponse<T> {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @type {Response}
 */
raw: Response;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @returns {Promise<T>}
 */
value(): Promise<T>;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @interface ResponseTransformer
 * @typedef {ResponseTransformer}
 * @template T
 */
export interface ResponseTransformer<T> {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @param {*} json
 * @returns {T}
 */
(json: any): T;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @class JSONApiResponse
 * @typedef {JSONApiResponse}
 * @template T
 */
export class JSONApiResponse<T> {
    /**
 * Creates an instance of JSONApiResponse.
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @constructor
 * @param {Response} raw
 * @param {ResponseTransformer<T>} [transformer=(jsonValue: any) => jsonValue]
 */
constructor(public raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {}

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @async
 * @returns {Promise<T>}
 */
async value(): Promise<T> {
        return this.transformer(await this.raw.json());
    }
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @class VoidApiResponse
 * @typedef {VoidApiResponse}
 */
export class VoidApiResponse {
    /**
 * Creates an instance of VoidApiResponse.
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @constructor
 * @param {Response} raw
 */
constructor(public raw: Response) {}

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @async
 * @returns {Promise<void>}
 */
async value(): Promise<void> {
        return undefined;
    }
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @class BlobApiResponse
 * @typedef {BlobApiResponse}
 */
export class BlobApiResponse {
    /**
 * Creates an instance of BlobApiResponse.
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @constructor
 * @param {Response} raw
 */
constructor(public raw: Response) {}

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @async
 * @returns {Promise<Blob>}
 */
async value(): Promise<Blob> {
        return await this.raw.blob();
    }/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 */
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:18:47 AM
 */
;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @export
 * @class TextApiResponse
 * @typedef {TextApiResponse}
 */
export class TextApiResponse {
    /**
 * Creates an instance of TextApiResponse.
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @constructor
 * @param {Response} raw
 */
constructor(public raw: Response) {}

    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 *
 * @async
 * @returns {Promise<string>}
 */
async value(): Promise<string> {
        return await this.raw.text();
    }/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:10 AM
 */
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:18:47 AM
 */
;
}
