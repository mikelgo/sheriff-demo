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
import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  version: 1,
  // todo make it work with multiple apps
  tagging: {
    'apps/demo/src/app/<domain>/<feature>/<type>': [
      'domain:<domain>',
      'feature:<feature>',
      'type:<type>',
    ],
  },
  depRules: {
    /**
     * this will disallow that domains can import from each other
     */
    'domain:*': [sameTag, 'shared'],
    /**
     * this will disallow that features within the same domain can import from each other
     */
    'feature:*': [sameTag, 'shared'],
    'feature:shared': [sameTag, 'shared'],
    'type:shell': ['type:smart-components'],
    'type:smart-components': [
      'type:util',
      'type:types',
      'type:data-access',
      'type:ui-components',
    ],
    'type:ui-components': ['type:util', 'type:types', 'type:ui-components'],
    'type:data-access': ['type:util', 'type:types', 'type:data-access'],
    'type:types': ['type:types'],
    'type:util': ['type:util', 'type:types'],
  },
};
