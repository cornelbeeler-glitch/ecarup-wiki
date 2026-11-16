---
title: 'Roles & Permissions: Prerequisite eCarUp Gold Partnership'
slug: '/funktionen/rollen-rechte'
description: 'To use the full scope of eCarUp and the Gold Partner functions, a closer partnership with us is required.'
sidebar_label: 'Roles & Permissions*'
---
To use the full scope of eCarUp and the Gold Partner functions, a closer partnership with us is required. 

For more information, please contact our sales team ([verkauf@ecarup.com](mailto:verkauf@ecarup.com))

### Roles & permissions enable you to achieve multi-tenancy.

For example, you can link a property account to your main account and grant read and write permissions. 

A key advantage is that all financial transactions remain within the account (sub-account) in which the stations are installed. At the same time, the master account is given the privilege to adjust the prices in the sub-account's station groups or to carry out a detailed analysis based on the reports. 

The maintenance function or the OCPP URL of the sub-account can also be shared by means of the permission. 

With this tool, our partners can expand their services. 

![Roles & Permissions: Prerequisite eCarUp Gold Partnership – Figure 1](/img/funktionen-rollen-rechte/01.png)

\*In an initial implementation, CarID only works with the [Pico charging station](/smart-me-pico) from smart-me AG. 

Important: The "Permission" ("Berechtigung") licence must be activated for both the master account and the sub-account.  The licences are activated by eCarUp. 

- First, a station group must be defined that is to be shared with the master account via the "Permission" ("Berechtigung") function. 


![Roles & Permissions: Prerequisite eCarUp Gold Partnership – Figure 2](/img/funktionen-rollen-rechte/02.png)

![Roles & Permissions: Prerequisite eCarUp Gold Partnership – Figure 3](/img/funktionen-rollen-rechte/03.png)

- Then select "Add permission" ("Berechtigung hinzufügen"):


![Roles & Permissions: Prerequisite eCarUp Gold Partnership – Figure 4](/img/funktionen-rollen-rechte/04.png)

- The assignment is made either via a user group that you have created beforehand. This can, for example, include an on-call organisation. There you can add new users without having to reassign the permission. 

- Or the permission is granted to an individual user (via the account's e-mail address).  The following permissions can be granted:

    - -   Administer group ("Gruppe administrieren")

        - Show stations ("Stationen anzeigen")

        - Manage stations ("Stationen verwalten")

- The sub-account then sees the selected station group and, depending on the permission granted, can edit the desired charge points or only has view access and cannot change any parameters.


Important: The master account must also be stored as a special user in the sub-accounts if the stations only receive the status "Limited" ("Limitiert") at certain times.

![Roles & Permissions: Prerequisite eCarUp Gold Partnership – Figure 5](/img/funktionen-rollen-rechte/05.png)

Important: If the "Maintenance" ("Wartung") function is active and is to be shared, this must be done manually under Maintenance ("Wartung"). For the report function, the assignment is made automatically.

![Roles & Permissions: Prerequisite eCarUp Gold Partnership – Figure 6](/img/funktionen-rollen-rechte/06.png)

The full scope of functions is not exhaustive, and the Gold Partner at eCarUp automatically benefits from new features.
