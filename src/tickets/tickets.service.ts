import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';

@Injectable()
export class TicketsService {

private readonly tickets : Ticket[] = [
    { id: 1, subject: 'Cannot login', description: 'I am unable to login with my credentials', priority: 'high', status: 'open', createdAt: new Date().toISOString() },
    { id: 2, subject: 'Payment failed', description: 'My payment is failing', priority: 'medium', status: 'in_progress', createdAt: new Date().toISOString() },
    { id: 3, subject: 'Feature request', description: 'I would like to see a new feature added', priority: 'low', status: 'closed', createdAt: new Date().toISOString() }
]
    findAll() {
        return this.tickets;
    }
}
