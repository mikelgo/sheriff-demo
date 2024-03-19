/**
 * src/app
 *  /{domain}
 *    /{feat}
 *      /{data-access}
 *      /{smart-components}
 *      /{ui-components}
 *      /{util}
 *      /{types}
 *
 *  /{shell}
 */
import { SheriffConfig } from '@softarc/sheriff-core';


// export const sheriffConfig: SheriffConfig = {
//   version: 1,
//   tagging: {
//     'src/app': {
//       holidays: {
//         feature: ['domain:holidays', 'type:feature'],
//         data: ['domain:holidays', 'type:data'],
//       },
//       customers: {
//         feature: ['domain:customers', 'type:feature'],
//         data: ['domain:customers', 'type:data'],
//       },
//     },
//   },
//   depRules: {
//     'domain:holidays': ['domain:holidays', 'shared'],
//     'domain:customers': ['domain:customers', 'shared'],
//     'type:feature': 'type:data',
//   },
// };

/**
 * How to allow or disallow e.g. from feat-customer-administration to feat-customer-support
 * so features within the same domain
 */
export const sheriffConfig: SheriffConfig = {
  version: 1,
  tagging: {
    'src/app/<domain>/<feature>/<type>': ['domain:<domain>', 'feature:<feature>' ,'type:<type>'],
  },
  depRules: {
    'domain:*': [({ from, to }) => from === to, 'shared'],
    'feature:*': [({ from, to }) => from === to, 'shared'],
    'feature:shell': ['type:smart-components'],
    'type:smart-components': ['type:util', 'type:types', 'type:data-access', 'type:ui-components'],
    'type:ui-components': ['type:util', 'type:types','type:ui-components'],
    'type:data-access': ['type:util', 'type:types','type:data-access'],
    'type:types': ['type:types'],
    'type:util': ['type:util'],
  },
};
