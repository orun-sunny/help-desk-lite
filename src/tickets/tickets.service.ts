import { Injectable,NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [
    {
      id: 1,
      subject: 'Cannot login',
      description: 'I am unable to login with my credentials',
      priority: 'high',
      status: 'open',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      subject: 'Payment failed',
      description: 'My payment is failing',
      priority: 'medium',
      status: 'in_progress',
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      subject: 'Feature request',
      description: 'I would like to see a new feature added',
      priority: 'low',
      status: 'closed',
      createdAt: new Date().toISOString(),
    },
  ];
  private nextTicketId = 4;
  findAll( status?: Ticket['status'], priority?: Ticket['priority']): Ticket[] {
    let tickets = this.tickets;
    if (status) {
      tickets = tickets.filter(ticket => ticket.status === status);
    }
    if (priority) {
      tickets = tickets.filter(ticket => ticket.priority === priority);
    }
    return tickets;
  }
  findOne(id: number) {
  const ticket = this.tickets.find(ticket => ticket.id === id);
  if (!ticket) {
    throw new NotFoundException(`Ticket with id ${id} not found`);                  
  }
    return ticket;
}
// findByStatus(status: Ticket['status']): Ticket[] {
//     return this.tickets.filter(ticket => ticket.status === status);
//   }

create (createTicketDto : CreateTicketDto) {
    const ticket: Ticket = {
        id: this.nextTicketId++,
        subject: createTicketDto.subject,
        description: createTicketDto.description,
        priority: createTicketDto.priority,
        status: 'open',
        createdAt: new Date().toISOString(),
    };
    this.tickets.push(ticket);
    return ticket;
}
}
