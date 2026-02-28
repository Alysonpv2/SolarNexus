import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): object {
    return {
      status: 'ok',
      service: 'SolarNexus API',
      timestamp: new Date().toISOString(),
    };
  }
}
