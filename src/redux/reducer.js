import { combineReducers } from 'redux';
import { statusFilters } from './constants';
// import { useSelector } from 'react-redux';
// import { getContacts } from './selectors';

const contactsInitialState = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '+380934591256',
    choosen: true,
    blocked: false,
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    number: '+380934597486',
    choosen: false,
    blocked: false,
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    number: '+380934512377',
    choosen: false,
    blocked: true,
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    number: '+380937891222',
    choosen: false,
    blocked: false,
  },
];

// console.log(allContact);
// Відповідає лише за оновлення властивості contacts
// Тепер значенням параметра state буде масив завдань
const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    case 'contacts/toggleChoosen':
      return state.map(contact => {
        if (contact.id !== action.payload) {
          return contact;
        }
        return { ...contact, choosen: !contact.choosen };
      });

    case 'contacts/toggleBlocked':
      return state.map(contact => {
        if (contact.id !== action.payload) {
          return contact;
        }
        return { ...contact, blocked: !contact.blocked };
      });

    // case 'contacts/contactFilter':
    //   return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(action.payload)
    //   );

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    // case 'filters/filter':
    //   return contactsInitialState.filter(contact =>
    //     contact.name.toLowerCase().includes(action.payload)
    //   );

    default:
      return state;
  }
};

const filter = {
  filterWord: '',
};

const filterContactReducer = (state = filter, action) => {
  switch (action.type) {
    // case 'filter/filterContact':
    //   return state.map(word => {
    //     return { ...word, filterWord: action.payload };
    //   });
    case 'filter/filterContact':
      return { ...state, filterWord: action.payload };
    default:
      return state;
  }
};

// Код редюсерів tasksReducer та filtersReducer

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  filterWord: filterContactReducer,
});

// const initialState = {
//   contacts: [
//     {
//       id: 'id-1',
//       name: 'Rosie Simpson',
//       number: '+380934591256',
//       choosen: true,
//     },
//     {
//       id: 'id-2',
//       name: 'Hermione Kline',
//       number: '+380934597486',
//       choosen: false,
//     },
//     {
//       id: 'id-3',
//       name: 'Eden Clements',
//       number: '+380934512377',
//       choosen: false,
//     },
//     {
//       id: 'id-4',
//       name: 'Annie Copeland',
//       number: '+380937891222',
//       choosen: false,
//     },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // * Залежно від типу екшену виконуватиметься різна логіка
//     case 'contacts/addContact': {
//       // * Потрібно повернути новий об'єкт стану
//       return {
//         // * в якому є всі дані існуючого стану
//         ...state,
//         // * та новий масив задач
//         contacts: [
//           // * в якому є всі існуючі завдання
//           ...state.contacts,
//           // * та об'єкт нового завдання
//           action.payload,
//         ],
//       };
//     }
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'contacts/toggleChoosen':
//       return {
//         ...state,
//         contacts: state.contacts.map(contact => {
//           if (contact.id !== action.payload) {
//             return contact;
//           }
//           return {
//             ...contact,
//             choosen: !contact.choosen,
//           };
//         }),
//       };
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
