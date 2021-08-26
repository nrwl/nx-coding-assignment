import { Ticket } from '@acme/shared-models';
import styles from './tickets.module.css';

export interface TicketsProps {
  tickets: Ticket[];
}

export function Tickets(props: TicketsProps) {
  return (
    <div className={styles['tickets']}>
      <h2>Tickets</h2>
      {props.tickets ? (
        <ul>
          {props.tickets.map((t) => (
            <li key={t.id}>
              Ticket: {t.id}, {t.description}
            </li>
          ))}
        </ul>
      ) : (
        <span>...</span>
      )}
    </div>
  );
}

export default Tickets;
