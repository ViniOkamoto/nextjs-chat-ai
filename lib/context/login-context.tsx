
// 'use client'

// import { createContext, useCallback, useState } from 'react'

// interface EventsContextProps {
//     events: Event[];
//     loadEvents: (events: Event[]) => void;
//     searchEvents: (search: string) => void;
//     filteredEvents: Event[];
//     search: string;
// }
// export const EventsContext = createContext<EventsContextProps>({} as EventsContextProps);

// interface EventsProviderProps {
//     children: React.ReactNode;
// }
// export default function EventsProvider({ children }: EventsProviderProps) {
//     const [events, setEvents] = useState<Event[]>([]);
//     const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
//     const [search, setSearch] = useState<string>('');

//     const loadEvents = useCallback((events: Event[]) => {
//         setEvents(events);
//         setSearch('');
//         setFilteredEvents([])
//     }, [])

//     const searchEvents = useCallback((search: string) => {
//         setSearch(search);
//         const results = events.filter(event => event.name.toLowerCase().includes(search.toLowerCase()));
//         setFilteredEvents(results);
//     }, [events])



//     return (
//         <EventsContext.Provider value={{
//             events,
//             loadEvents,
//             searchEvents,
//             filteredEvents,
//             search,
//         }}>
//             {children}
//         </EventsContext.Provider>
//     )
// }

