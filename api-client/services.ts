/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

import { Expose, Transform, Type, plainToClass } from 'class-transformer';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class RootControllerService {
  /**
   *
   */
  rootControllerRedirectToDocs(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  rootControllerPing(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/ping';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class AccountControllerService {
  /**
   * Create an Account
   */
  accountControllerCreate(
    params: {
      /** requestBody */
      body?: CreateModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AccountWithPermissionsModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/accounts';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(AccountWithPermissionsModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Check if the given Account exists
   */
  accountControllerCheckIfAccountExists(
    params: {
      /**  */
      userNameOrEmail: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ExistenceCheckModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/accounts/{userNameOrEmail}/existence-check';
      url = url.replace('{userNameOrEmail}', params['userNameOrEmail'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(ExistenceCheckModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Marks an Accounts E-Mail verification status as verified
   */
  accountControllerVerifyEmail(
    params: {
      /**  */
      accountId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/accounts/{accountId}/verify-email';
      url = url.replace('{accountId}', params['accountId'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Copies a legacy account into the current system
   */
  accountControllerImportLegacyAccount(options: IRequestOptions = {}): Promise<AccountWithPermissionsModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/accounts/legacy-account';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(AccountWithPermissionsModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class UpcomingEventsControllerService {
  /**
   * Get all the upcoming events
   */
  upcomingEventsControllerGet(options: IRequestOptions = {}): Promise<EventWithAllRelationsModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/upcoming';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any[]) => resolve(plainToClass(EventWithAllRelationsModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class SeatsControllerService {
  /**
   * Get all seats of a Seating-Plan
   */
  seatsControllerGetByPlan(
    params: {
      /**  */
      eventId: string;
      /**  */
      planId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SeatWithTicketsModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/{eventId}/seating-plans/{planId}/seats';
      url = url.replace('{eventId}', params['eventId'] + '');
      url = url.replace('{planId}', params['planId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any[]) => resolve(plainToClass(SeatWithTicketsModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class SeatingPlansControllerService {
  /**
   * Get all Seating-Plans of an Event
   */
  seatingPlansControllerGetByEvent(
    params: {
      /**  */
      eventId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SeatingPlanModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/{eventId}/seating-plans';
      url = url.replace('{eventId}', params['eventId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any[]) => resolve(plainToClass(SeatingPlanModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Retrieve a seating plan file
   */
  seatingPlansControllerGetPlanFile(
    params: {
      /**  */
      eventId: string;
      /**  */
      planId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/{eventId}/seating-plans/{planId}';
      url = url.replace('{eventId}', params['eventId'] + '');
      url = url.replace('{planId}', params['planId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class GroupControllerService {
  /**
   * Get tickets of the members of my group
   */
  groupControllerGetMemberTickets(
    params: {
      /**  */
      eventId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TicketWithAccountModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/{eventId}/group/tickets';
      url = url.replace('{eventId}', params['eventId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any[]) => resolve(plainToClass(TicketWithAccountModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class EventsControllerService {
  /**
   * Returns the Parental-Agreement Document of the given Event
   */
  eventsControllerGetParentalAgreementDocument(
    params: {
      /**  */
      eventId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/{eventId}/parental-agreement.pdf';
      url = url.replace('{eventId}', params['eventId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Event
   */
  eventsControllerCreate(
    params: {
      /** Bearer authorization */
      authorization: string;
      /** requestBody */
      body?: EventCreateModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EventWithAllRelationsModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(EventWithAllRelationsModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Update an Event
   */
  eventsControllerUpdate(
    params: {
      /**  */
      eventId: string;
      /** Bearer authorization */
      authorization: string;
      /** requestBody */
      body?: EventCreateModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EventWithAllRelationsModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/{eventId}';
      url = url.replace('{eventId}', params['eventId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(EventWithAllRelationsModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Upload the parental agreement document for an event
   */
  eventsControllerUploadParentalAgreementDocument(
    params: {
      /**  */
      eventId: string;
      /** Bearer authorization */
      authorization: string;
      /**  */
      parentalAgreementDocument: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/events/{eventId}/parental-agreement-document';
      url = url.replace('{eventId}', params['eventId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['parentalAgreementDocument']) {
        data.append('parentalAgreementDocument', params['parentalAgreementDocument'] as any);
      }

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class PosControllerService {
  /**
   * Get all pos of an event
   */
  posControllerGetPosByEvent(
    params: {
      /**  */
      eventId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<POSWithEventModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/pos';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { eventId: params['eventId'] };
      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any[]) => resolve(plainToClass(POSWithEventModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * mark ticket as paid
   */
  posControllerMarkTicketAsPaid(
    params: {
      /**  */
      ticketId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/pos/tickets/{ticketId}/pay';
      url = url.replace('{ticketId}', params['ticketId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * set cashier of this pos
   */
  posControllerSetCashierOfPos(
    params: {
      /**  */
      posId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/pos/{posId}/cashier';
      url = url.replace('{posId}', params['posId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Calls printer to print Hardware-Labels
   */
  posControllerPrintHardwareLabels(
    params: {
      /**  */
      ticketId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/pos/tickets/{ticketId}/print-hardware-labels';
      url = url.replace('{ticketId}', params['ticketId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class PdfTemplatesControllerService {
  /**
   * internal route for pdf generation
   */
  pdfTemplatesControllerGetPdfTemplate(
    params: {
      /**  */
      fileName: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/pdf-templates/{fileName}';
      url = url.replace('{fileName}', params['fileName'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class SessionsControllerService {
  /**
   * Start a new Session
   */
  sessionsControllerStartSession(
    params: {
      /**  */
      accountId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SessionWithAccountModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/{accountId}/sessions';
      url = url.replace('{accountId}', params['accountId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(SessionWithAccountModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Get current session
   */
  sessionsControllerGet(
    params: {
      /**  */
      accountId: string;
      /**  */
      token?: object;
      /** Bearer authorization */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SessionWithAccountModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/{accountId}/sessions';
      url = url.replace('{accountId}', params['accountId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { token: params['token'] };
      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(SessionWithAccountModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class TicketsControllerService {
  /**
   * This is a dummy url to provide the QR-Code Payload Model to the UI
   */
  ticketsControllerQrCodePayload(options: IRequestOptions = {}): Promise<QRCodePayload> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets/qr-code-payload';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(QRCodePayload, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * This is a dummy url to provide the QR-Code Payload Model to the UI
   */
  ticketsControllerTicketQrCodePayload(options: IRequestOptions = {}): Promise<TicketQrCodePayload> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets/ticket-qr-code-payload';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(TicketQrCodePayload, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * This is a dummy url to provide the QR-Code Payload Model to the UI
   */
  ticketsControllerHardwareQrCodePayload(options: IRequestOptions = {}): Promise<HardwareLabelQrCodePayload> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets/hardware-qr-code-payload';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(HardwareLabelQrCodePayload, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Get all my tickets
   */
  ticketsControllerGetMyTickets(
    params: {
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TicketWithGroupLeaderAndDaysModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any[]) =>
          resolve(plainToClass(TicketWithGroupLeaderAndDaysModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Create a ticket
   */
  ticketsControllerBookTicket(
    params: {
      /** Bearer authorization */
      authorization: string;
      /** requestBody */
      body?: BookTicketPayloadModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TicketWithGroupLeaderAndDaysModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(
        configs,
        (response: any) =>
          resolve(plainToClass(TicketWithGroupLeaderAndDaysModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * Search for tickets
   */
  ticketsControllerSearch(
    params: {
      /**  */
      eventId?: string;
      /**  */
      name?: string;
      /**  */
      paid?: object;
      /**  */
      id?: object;
      /**  */
      account?: object;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TicketWithAccountModel[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets/search';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        eventId: params['eventId'],
        name: params['name'],
        paid: params['paid'],
        id: params['id'],
        account: params['account']
      };
      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any[]) => resolve(plainToClass(TicketWithAccountModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   * create a PayPal payment for a ticket
   */
  ticketsControllerCreatePayment(
    params: {
      /**  */
      ticketId: string;
      /** Bearer authorization */
      authorization: string;
      /** requestBody */
      body?: PayPalPayloadModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets/{ticketId}/payment';
      url = url.replace('{ticketId}', params['ticketId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * execute a given PayPal payment
   */
  ticketsControllerExecutePayment(
    params: {
      /** Bearer authorization */
      authorization: string;
      /** requestBody */
      body?: ExecutePaymentModel;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets/payment';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Change the seat of a ticket
   */
  ticketsControllerChangeSeat(
    params: {
      /**  */
      ticketId: string;
      /**  */
      dayId: string;
      /** Bearer authorization */
      authorization: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SeatWithPlanModel> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/tickets/{ticketId}/days/{dayId}/seat';
      url = url.replace('{ticketId}', params['ticketId'] + '');
      url = url.replace('{dayId}', params['dayId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(SeatWithPlanModel, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class CreateModel {
  /**  */
  @Expose()
  'email': string;

  /**  */
  @Expose()
  'username': string;

  /**  */
  @Expose()
  'password': string;

  /**  */
  @Expose()
  'firstName': string;

  /**  */
  @Expose()
  'lastName': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'birthday': Date;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['username'] = data['username'];
    this['password'] = data['password'];
    this['firstName'] = data['firstName'];
    this['lastName'] = data['lastName'];
    this['birthday'] = data['birthday'];
  }
}

export class AccountWithPermissionsModel {
  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'email': string;

  /**  */
  @Expose()
  'username': string;

  /**  */
  @Expose()
  'firstName': string;

  /**  */
  @Expose()
  'lastName': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'birthday': Date;

  /**  */
  @Expose()
  @Type(() => PermissionModel)
  'permissions': PermissionModel;

  constructor(data: undefined | any = {}) {
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['id'] = data['id'];
    this['email'] = data['email'];
    this['username'] = data['username'];
    this['firstName'] = data['firstName'];
    this['lastName'] = data['lastName'];
    this['birthday'] = data['birthday'];
    this['permissions'] = data['permissions'];
  }
}

export class PermissionModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'createdAt': string;

  /**  */
  @Expose()
  'updatedAt': string;

  /**  */
  @Expose()
  'canOrderTickets': boolean;

  /**  */
  @Expose()
  'canUsePOS': boolean;

  /**  */
  @Expose()
  'canEditEvents': boolean;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['canOrderTickets'] = data['canOrderTickets'];
    this['canUsePOS'] = data['canUsePOS'];
    this['canEditEvents'] = data['canEditEvents'];
  }
}

export class ExistenceCheckModel {
  /**  */
  @Expose()
  'exists': boolean;

  /**  */
  @Expose()
  'active': boolean;

  /**  */
  @Expose()
  'emailVerified': boolean;

  /**  */
  @Expose()
  'id'?: string;

  constructor(data: undefined | any = {}) {
    this['exists'] = data['exists'];
    this['active'] = data['active'];
    this['emailVerified'] = data['emailVerified'];
    this['id'] = data['id'];
  }
}

export class EventWithAllRelationsModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'title': string;

  /**  */
  @Expose()
  'description': string;

  /**  */
  @Expose()
  'orderDescription': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'start': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'end': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'endOfReservation': Date;

  /**  */
  @Expose()
  'gamerIsParticipant': boolean;

  /**  */
  @Expose()
  'offlinePaymentActive': boolean;

  /**  */
  @Expose()
  'onlinePaymentActive': boolean;

  /**  */
  @Expose()
  'gamerPricePerDay': number;

  /**  */
  @Expose()
  'visitorPricePerDay': number;

  /**  */
  @Expose()
  'minAge': object;

  /**  */
  @Expose()
  'parentalAgreementMaxAge': object;

  /**  */
  @Expose()
  @Type(() => LocationModel)
  'location': LocationModel;

  /**  */
  @Expose()
  @Type(() => PricingTierModel)
  'pricingTiers': PricingTierModel[];

  /**  */
  @Expose()
  @Type(() => FileModel)
  'parentalAgreementDocument': FileModel;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['title'] = data['title'];
    this['description'] = data['description'];
    this['orderDescription'] = data['orderDescription'];
    this['start'] = data['start'];
    this['end'] = data['end'];
    this['endOfReservation'] = data['endOfReservation'];
    this['gamerIsParticipant'] = data['gamerIsParticipant'];
    this['offlinePaymentActive'] = data['offlinePaymentActive'];
    this['onlinePaymentActive'] = data['onlinePaymentActive'];
    this['gamerPricePerDay'] = data['gamerPricePerDay'];
    this['visitorPricePerDay'] = data['visitorPricePerDay'];
    this['minAge'] = data['minAge'];
    this['parentalAgreementMaxAge'] = data['parentalAgreementMaxAge'];
    this['location'] = data['location'];
    this['pricingTiers'] = data['pricingTiers'];
    this['parentalAgreementDocument'] = data['parentalAgreementDocument'];
  }
}

export class LocationModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'title': string;

  /**  */
  @Expose()
  'street': string;

  /**  */
  @Expose()
  'postalCode': string;

  /**  */
  @Expose()
  'city': string;

  /**  */
  @Expose()
  'country': string;

  /**  */
  @Expose()
  'latitude': number;

  /**  */
  @Expose()
  'longitude': number;

  /**  */
  @Expose()
  'zoomLevel': number;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['title'] = data['title'];
    this['street'] = data['street'];
    this['postalCode'] = data['postalCode'];
    this['city'] = data['city'];
    this['country'] = data['country'];
    this['latitude'] = data['latitude'];
    this['longitude'] = data['longitude'];
    this['zoomLevel'] = data['zoomLevel'];
  }
}

export class PricingTierModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'createdAt': string;

  /**  */
  @Expose()
  'updatedAt': string;

  /**  */
  @Expose()
  'minDays': number;

  /**  */
  @Expose()
  'gamerPricePerDay': number;

  /**  */
  @Expose()
  'visitorPricePerDay': number;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['minDays'] = data['minDays'];
    this['gamerPricePerDay'] = data['gamerPricePerDay'];
    this['visitorPricePerDay'] = data['visitorPricePerDay'];
  }
}

export class FileModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'createdAt': string;

  /**  */
  @Expose()
  'updatedAt': string;

  /**  */
  @Expose()
  'mimeType': string;

  /**  */
  @Expose()
  'path': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['mimeType'] = data['mimeType'];
    this['path'] = data['path'];
  }
}

export class Unauthorized {
  /** The error name */
  @Expose()
  'name': string;

  /** An error message */
  @Expose()
  'message': string;

  /** The status code of the exception */
  @Expose()
  'status': number;

  /** A list of related errors */
  @Expose()
  @Type(() => GenericError)
  'errors'?: GenericError[];

  /** The stack trace (only in development mode) */
  @Expose()
  'stack'?: string[];

  constructor(data: undefined | any = {}) {
    this['name'] = data['name'];
    this['message'] = data['message'];
    this['status'] = data['status'];
    this['errors'] = data['errors'];
    this['stack'] = data['stack'];
  }
}

export class GenericError {
  /** The error name */
  @Expose()
  'name': string;

  /** An error message */
  @Expose()
  'message': string;

  constructor(data: undefined | any = {}) {
    this['name'] = data['name'];
    this['message'] = data['message'];
  }
}

export class Forbidden {
  /** The error name */
  @Expose()
  'name': string;

  /** An error message */
  @Expose()
  'message': string;

  /** The status code of the exception */
  @Expose()
  'status': number;

  /** A list of related errors */
  @Expose()
  @Type(() => GenericError)
  'errors'?: GenericError[];

  /** The stack trace (only in development mode) */
  @Expose()
  'stack'?: string[];

  constructor(data: undefined | any = {}) {
    this['name'] = data['name'];
    this['message'] = data['message'];
    this['status'] = data['status'];
    this['errors'] = data['errors'];
    this['stack'] = data['stack'];
  }
}

export class SeatWithTicketsModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'seatNumber': number;

  /**  */
  @Expose()
  'x': number;

  /**  */
  @Expose()
  'y': number;

  /**  */
  @Expose()
  'w': number;

  /**  */
  @Expose()
  @Type(() => TicketDayModel)
  'ticketDays': TicketDayModel[];

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['seatNumber'] = data['seatNumber'];
    this['x'] = data['x'];
    this['y'] = data['y'];
    this['w'] = data['w'];
    this['ticketDays'] = data['ticketDays'];
  }
}

export class TicketDayModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'date': Date;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['date'] = data['date'];
  }
}

export class SeatingPlanModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'title': string;

  /**  */
  @Expose()
  'description': string;

  /**  */
  @Expose()
  'minAge': object;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['title'] = data['title'];
    this['description'] = data['description'];
    this['minAge'] = data['minAge'];
  }
}

export class TicketWithAccountModel {
  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'price': number;

  /**  */
  @Expose()
  'isGroup': boolean;

  /**  */
  @Expose()
  'isPaid': boolean;

  /**  */
  @Expose()
  'paymentMethod': EnumTicketWithAccountModelPaymentMethod;

  /**  */
  @Expose()
  @Type(() => TicketDayWithSeatModel)
  'days': TicketDayWithSeatModel[];

  /**  */
  @Expose()
  @Type(() => AccountModel)
  'account': AccountModel;

  /**  */
  @Expose()
  @Type(() => EventModel)
  'event': EventModel;

  constructor(data: undefined | any = {}) {
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['id'] = data['id'];
    this['price'] = data['price'];
    this['isGroup'] = data['isGroup'];
    this['isPaid'] = data['isPaid'];
    this['paymentMethod'] = data['paymentMethod'];
    this['days'] = data['days'];
    this['account'] = data['account'];
    this['event'] = data['event'];
  }
}

export class TicketDayWithSeatModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'date': Date;

  /**  */
  @Expose()
  'seat'?: object;

  /**  */
  @Expose()
  'type': EnumTicketDayWithSeatModelType;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['date'] = data['date'];
    this['seat'] = data['seat'];
    this['type'] = data['type'];
  }
}

export class AccountModel {
  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'email': string;

  /**  */
  @Expose()
  'username': string;

  /**  */
  @Expose()
  'firstName': string;

  /**  */
  @Expose()
  'lastName': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'birthday': Date;

  constructor(data: undefined | any = {}) {
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['id'] = data['id'];
    this['email'] = data['email'];
    this['username'] = data['username'];
    this['firstName'] = data['firstName'];
    this['lastName'] = data['lastName'];
    this['birthday'] = data['birthday'];
  }
}

export class EventModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'title': string;

  /**  */
  @Expose()
  'description': string;

  /**  */
  @Expose()
  'orderDescription': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'start': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'end': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'endOfReservation': Date;

  /**  */
  @Expose()
  'gamerIsParticipant': boolean;

  /**  */
  @Expose()
  'offlinePaymentActive': boolean;

  /**  */
  @Expose()
  'onlinePaymentActive': boolean;

  /**  */
  @Expose()
  'gamerPricePerDay': number;

  /**  */
  @Expose()
  'visitorPricePerDay': number;

  /**  */
  @Expose()
  'minAge': object;

  /**  */
  @Expose()
  'parentalAgreementMaxAge': object;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['title'] = data['title'];
    this['description'] = data['description'];
    this['orderDescription'] = data['orderDescription'];
    this['start'] = data['start'];
    this['end'] = data['end'];
    this['endOfReservation'] = data['endOfReservation'];
    this['gamerIsParticipant'] = data['gamerIsParticipant'];
    this['offlinePaymentActive'] = data['offlinePaymentActive'];
    this['onlinePaymentActive'] = data['onlinePaymentActive'];
    this['gamerPricePerDay'] = data['gamerPricePerDay'];
    this['visitorPricePerDay'] = data['visitorPricePerDay'];
    this['minAge'] = data['minAge'];
    this['parentalAgreementMaxAge'] = data['parentalAgreementMaxAge'];
  }
}

export class EventCreateModel {
  /**  */
  @Expose()
  'title': string;

  /**  */
  @Expose()
  'description'?: string;

  /**  */
  @Expose()
  'orderDescription'?: string;

  /**  */
  @Expose()
  'minAge'?: number;

  /**  */
  @Expose()
  @Type(() => Date)
  'start': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'end': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'endOfReservation': Date;

  /**  */
  @Expose()
  @Type(() => LocationCreateModel)
  'location': LocationCreateModel;

  /**  */
  @Expose()
  'parentalAgreementMaxAge'?: number;

  /**  */
  @Expose()
  'visitorPricePerDay': number;

  /**  */
  @Expose()
  'gamerPricePerDay': number;

  /**  */
  @Expose()
  'gamerIsParticipant': boolean;

  /**  */
  @Expose()
  'offlinePaymentActive': boolean;

  /**  */
  @Expose()
  'onlinePaymentActive': boolean;

  constructor(data: undefined | any = {}) {
    this['title'] = data['title'];
    this['description'] = data['description'];
    this['orderDescription'] = data['orderDescription'];
    this['minAge'] = data['minAge'];
    this['start'] = data['start'];
    this['end'] = data['end'];
    this['endOfReservation'] = data['endOfReservation'];
    this['location'] = data['location'];
    this['parentalAgreementMaxAge'] = data['parentalAgreementMaxAge'];
    this['visitorPricePerDay'] = data['visitorPricePerDay'];
    this['gamerPricePerDay'] = data['gamerPricePerDay'];
    this['gamerIsParticipant'] = data['gamerIsParticipant'];
    this['offlinePaymentActive'] = data['offlinePaymentActive'];
    this['onlinePaymentActive'] = data['onlinePaymentActive'];
  }
}

export class LocationCreateModel {
  /**  */
  @Expose()
  'title': string;

  /**  */
  @Expose()
  'street'?: string;

  /**  */
  @Expose()
  'postalCode': string;

  /**  */
  @Expose()
  'city': string;

  /**  */
  @Expose()
  'country': string;

  /**  */
  @Expose()
  'latitude': number;

  /**  */
  @Expose()
  'longitude': number;

  /**  */
  @Expose()
  'zoomLevel': number;

  constructor(data: undefined | any = {}) {
    this['title'] = data['title'];
    this['street'] = data['street'];
    this['postalCode'] = data['postalCode'];
    this['city'] = data['city'];
    this['country'] = data['country'];
    this['latitude'] = data['latitude'];
    this['longitude'] = data['longitude'];
    this['zoomLevel'] = data['zoomLevel'];
  }
}

export class BadRequest {
  /** The error name */
  @Expose()
  'name': string;

  /** An error message */
  @Expose()
  'message': string;

  /** The status code of the exception */
  @Expose()
  'status': number;

  /** A list of related errors */
  @Expose()
  @Type(() => GenericError)
  'errors'?: GenericError[];

  /** The stack trace (only in development mode) */
  @Expose()
  'stack'?: string[];

  constructor(data: undefined | any = {}) {
    this['name'] = data['name'];
    this['message'] = data['message'];
    this['status'] = data['status'];
    this['errors'] = data['errors'];
    this['stack'] = data['stack'];
  }
}

export class POSWithEventModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'amountOfChange': number;

  /**  */
  @Expose()
  'label': string;

  /**  */
  @Expose()
  @Type(() => EventModel)
  'event': EventModel;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['amountOfChange'] = data['amountOfChange'];
    this['label'] = data['label'];
    this['event'] = data['event'];
  }
}

export class SessionWithAccountModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'validUntil': Date;

  /**  */
  @Expose()
  @Type(() => AccountWithPermissionsModel)
  'account': AccountWithPermissionsModel;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['validUntil'] = data['validUntil'];
    this['account'] = data['account'];
  }
}

export class QRCodePayload {
  /**  */
  @Expose()
  'type': EnumQRCodePayloadType;

  /**  */
  @Expose()
  'payload': object;

  constructor(data: undefined | any = {}) {
    this['type'] = data['type'];
    this['payload'] = data['payload'];
  }
}

export class TicketQrCodePayload {
  /**  */
  @Expose()
  'type': EnumTicketQrCodePayloadType;

  /**  */
  @Expose()
  @Type(() => TicketQrCodePayloadData)
  'payload': TicketQrCodePayloadData;

  constructor(data: undefined | any = {}) {
    this['type'] = data['type'];
    this['payload'] = data['payload'];
  }
}

export class TicketQrCodePayloadData {
  /**  */
  @Expose()
  'account': string;

  /**  */
  @Expose()
  'ticket': string;

  constructor(data: undefined | any = {}) {
    this['account'] = data['account'];
    this['ticket'] = data['ticket'];
  }
}

export class HardwareLabelQrCodePayload {
  /**  */
  @Expose()
  'type': EnumHardwareLabelQrCodePayloadType;

  /**  */
  @Expose()
  @Type(() => HardwareLabelQrCodePayloadData)
  'payload': HardwareLabelQrCodePayloadData;

  constructor(data: undefined | any = {}) {
    this['type'] = data['type'];
    this['payload'] = data['payload'];
  }
}

export class HardwareLabelQrCodePayloadData {
  /**  */
  @Expose()
  'owner': string;

  /**  */
  @Expose()
  'event': string;

  constructor(data: undefined | any = {}) {
    this['owner'] = data['owner'];
    this['event'] = data['event'];
  }
}

export class TicketWithGroupLeaderAndDaysModel {
  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'price': number;

  /**  */
  @Expose()
  'isGroup': boolean;

  /**  */
  @Expose()
  'isPaid': boolean;

  /**  */
  @Expose()
  'paymentMethod': EnumTicketWithGroupLeaderAndDaysModelPaymentMethod;

  /**  */
  @Expose()
  @Type(() => AccountModel)
  'account': AccountModel;

  /**  */
  @Expose()
  @Type(() => AccountModel)
  'groupLeader': AccountModel;

  /**  */
  @Expose()
  @Type(() => TicketDayWithSeatModel)
  'days': TicketDayWithSeatModel[];

  /**  */
  @Expose()
  @Type(() => EventWithLocationModel)
  'event': EventWithLocationModel;

  /**  */
  @Expose()
  'payPalPayment'?: object;

  constructor(data: undefined | any = {}) {
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['id'] = data['id'];
    this['price'] = data['price'];
    this['isGroup'] = data['isGroup'];
    this['isPaid'] = data['isPaid'];
    this['paymentMethod'] = data['paymentMethod'];
    this['account'] = data['account'];
    this['groupLeader'] = data['groupLeader'];
    this['days'] = data['days'];
    this['event'] = data['event'];
    this['payPalPayment'] = data['payPalPayment'];
  }
}

export class EventWithLocationModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'title': string;

  /**  */
  @Expose()
  'description': string;

  /**  */
  @Expose()
  'orderDescription': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'start': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'end': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'endOfReservation': Date;

  /**  */
  @Expose()
  'gamerIsParticipant': boolean;

  /**  */
  @Expose()
  'offlinePaymentActive': boolean;

  /**  */
  @Expose()
  'onlinePaymentActive': boolean;

  /**  */
  @Expose()
  'gamerPricePerDay': number;

  /**  */
  @Expose()
  'visitorPricePerDay': number;

  /**  */
  @Expose()
  'minAge': object;

  /**  */
  @Expose()
  'parentalAgreementMaxAge': object;

  /**  */
  @Expose()
  @Type(() => LocationModel)
  'location': LocationModel;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['title'] = data['title'];
    this['description'] = data['description'];
    this['orderDescription'] = data['orderDescription'];
    this['start'] = data['start'];
    this['end'] = data['end'];
    this['endOfReservation'] = data['endOfReservation'];
    this['gamerIsParticipant'] = data['gamerIsParticipant'];
    this['offlinePaymentActive'] = data['offlinePaymentActive'];
    this['onlinePaymentActive'] = data['onlinePaymentActive'];
    this['gamerPricePerDay'] = data['gamerPricePerDay'];
    this['visitorPricePerDay'] = data['visitorPricePerDay'];
    this['minAge'] = data['minAge'];
    this['parentalAgreementMaxAge'] = data['parentalAgreementMaxAge'];
    this['location'] = data['location'];
  }
}

export class BookTicketPayloadModel {
  /**  */
  @Expose()
  'eventId': string;

  /**  */
  @Expose()
  @Type(() => BookTicketPayloadDaysModel)
  'days': BookTicketPayloadDaysModel[];

  /**  */
  @Expose()
  'isGroup': boolean;

  /**  */
  @Expose()
  'groupLeaderId'?: string;

  /**  */
  @Expose()
  'paymentMethod': EnumBookTicketPayloadModelPaymentMethod;

  /**  */
  @Expose()
  'utcOffset': number;

  constructor(data: undefined | any = {}) {
    this['eventId'] = data['eventId'];
    this['days'] = data['days'];
    this['isGroup'] = data['isGroup'];
    this['groupLeaderId'] = data['groupLeaderId'];
    this['paymentMethod'] = data['paymentMethod'];
    this['utcOffset'] = data['utcOffset'];
  }
}

export class BookTicketPayloadDaysModel {
  /**  */
  @Expose()
  @Type(() => Date)
  'day': Date;

  /**  */
  @Expose()
  'type': EnumBookTicketPayloadDaysModelType;

  /**  */
  @Expose()
  @Type(() => BookTicketPayloadDaysSeatModel)
  'seat'?: BookTicketPayloadDaysSeatModel;

  constructor(data: undefined | any = {}) {
    this['day'] = data['day'];
    this['type'] = data['type'];
    this['seat'] = data['seat'];
  }
}

export class BookTicketPayloadDaysSeatModel {
  /**  */
  @Expose()
  'seatId': string;

  /**  */
  @Expose()
  'planId': string;

  constructor(data: undefined | any = {}) {
    this['seatId'] = data['seatId'];
    this['planId'] = data['planId'];
  }
}

export class PayPalPayloadModel {
  /**  */
  @Expose()
  'cancelUrl': string;

  /**  */
  @Expose()
  'returnUrl': string;

  constructor(data: undefined | any = {}) {
    this['cancelUrl'] = data['cancelUrl'];
    this['returnUrl'] = data['returnUrl'];
  }
}

export class ExecutePaymentModel {
  /**  */
  @Expose()
  'paymentID': string;

  /**  */
  @Expose()
  'payerID': string;

  constructor(data: undefined | any = {}) {
    this['paymentID'] = data['paymentID'];
    this['payerID'] = data['payerID'];
  }
}

export class SeatWithPlanModel {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  @Type(() => Date)
  'createdAt': Date;

  /**  */
  @Expose()
  @Type(() => Date)
  'updatedAt': Date;

  /**  */
  @Expose()
  'seatNumber': number;

  /**  */
  @Expose()
  'x': number;

  /**  */
  @Expose()
  'y': number;

  /**  */
  @Expose()
  'w': number;

  /**  */
  @Expose()
  @Type(() => SeatingPlanModel)
  'seatingPlan': SeatingPlanModel;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['seatNumber'] = data['seatNumber'];
    this['x'] = data['x'];
    this['y'] = data['y'];
    this['w'] = data['w'];
    this['seatingPlan'] = data['seatingPlan'];
  }
}
export enum EnumTicketWithAccountModelPaymentMethod {
  'online' = 'online',
  'offline' = 'offline'
}
export enum EnumTicketDayWithSeatModelType {
  'gamer' = 'gamer',
  'visitor' = 'visitor',
  'none' = 'none'
}
export enum EnumQRCodePayloadType {
  'ticket' = 'ticket',
  'hardware' = 'hardware'
}
export enum EnumTicketQrCodePayloadType {
  'ticket' = 'ticket',
  'hardware' = 'hardware'
}
export enum EnumHardwareLabelQrCodePayloadType {
  'ticket' = 'ticket',
  'hardware' = 'hardware'
}
export enum EnumTicketWithGroupLeaderAndDaysModelPaymentMethod {
  'online' = 'online',
  'offline' = 'offline'
}
export enum EnumBookTicketPayloadModelPaymentMethod {
  'online' = 'online',
  'offline' = 'offline'
}
export enum EnumBookTicketPayloadDaysModelType {
  'gamer' = 'gamer',
  'visitor' = 'visitor',
  'none' = 'none'
}
