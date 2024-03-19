# SheriffDemo

Sample repository demonstrating the usage of [sheriff](https://github.com/softarc-consulting/sheriff). 

This demo showcases how to define architecture-boundaries for a complex setup. Within an application we want to have following structure:
```
  /<domain> (e.g. customer)
    /<feature> (e.g. feat-customer-support)
      /smart-components
      /ui-components
      /data-access
      /types
      /util
    /shared (domain-shared folder)
    /shell

  /shared
```

With sheriff we enfore following rules:
* we can not import between applications
* we can not import between domains
* we can not import between features in the same domain
* we allow imports between features in the same domain from the domain-shared or shared folder
* shell can only import from smart-components in the same domain
* smart-components can import from util, types, data-access and ui-components in the same feature
* ui-components can import from util, types, ui-components in the same feature
* data-access can import from util, types and data-access in the same feature
* types can import from types in the same feature
* util can import from util and types in the same feature
