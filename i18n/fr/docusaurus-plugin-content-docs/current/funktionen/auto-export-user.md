---
title: 'Export automatique (utilisateur)'
slug: '/funktionen/auto-export-user'
description: 'Pour utiliser toutes les fonctions eCarUp et Goldpartner, une collaboration plus étroite est nécessaire.'
sidebar_label: 'Export automatique (utilisateur)*'
---
Pour utiliser toutes les fonctions eCarUp et Goldpartner, une collaboration plus étroite est nécessaire. Pour plus d'informations, contactez simplement verkauf@ecarup.com.

## Export automatique (utilisateur)

### La fonction d'export utilisateur d'eCarUp vous permet de transférer les transactions par utilisateur directement du portail eCarUp vers l'IS-E.

Les points suivants sont importants :

- Le conducteur doit être connu et enregistré avec le prix 0.00.-.

- Définissez un groupe de stations dans lequel le conducteur peut circuler, resp. recharger.

- Un serveur (FTPs ou SFTP) doit être disponible de votre côté. 


### 1\. Définir la destination de l'export automatique

![Export automatique (utilisateur) – Illustration 1](/img/funktionen-auto-export-user/01.png)

![Export automatique (utilisateur) – Illustration 2](/img/funktionen-auto-export-user/02.png)

- Pour configurer les onglets de l'export automatique (Auto-Export), procédez de droite à gauche (comme chez smart-me)

- Dans le menu, sélectionnez Destination (Zielort)

- Vous pouvez ensuite configurer une seule fois le serveur pour tous les exports automatiques chez eCarUp  (SFTP / FTPS)

- Pour SFTP, le port est toujours 22 

- Pour FTPS, le port est toujours 21


### 2\. Configurer le formatage de l'export automatique

![Export automatique (utilisateur) – Illustration 3](/img/funktionen-auto-export-user/03.png)

![Export automatique (utilisateur) – Illustration 4](/img/funktionen-auto-export-user/04.jpg)

- Sélectionnez ensuite Formater (Formatieren) (également une configuration unique)

- Pour le Metering Code, les éléments suivants peuvent être définis :

    -  DeviceLocationID : numéro d'identification  dans l'IS-E

    -  FactoryNo : numéro de fabrication

    - InternalNo : numéro interne

    - Metering Code : code défini pour le compteur

- Désormais, le code OBIS peut être sélectionné et défini entre 1.8.0 et 1.9.0.


1.8.0 = relevé du compteur virtuel

1.9.0 = avance

Nous vous recommandons de convenir de ces paramètres avec la personne responsable de l'IS-E au sein de votre organisation. 

### 3\. Définir les tâches de l'export automatique

![Export automatique (utilisateur) – Illustration 5](/img/funktionen-auto-export-user/05.png)

![Export automatique (utilisateur) – Illustration 6](/img/funktionen-auto-export-user/06.png)

- Sélectionnez ensuite Tâche (Aufgabe). C'est ici que vous définissez pour quel utilisateur et quel groupe de stations les données sont exportées. Une tâche doit être configurée pour chaque export automatique.

- Définissez l'utilisateur eCarUp  (via l'adresse e-mail utilisée pour le compte eCarUp)

- Sélectionnez le groupe de stations correspondant 

- Insérez ensuite le format et la destination, déjà définis aux étapes 1 et 2

- Réglez l'intervalle de téléversement

- Pour terminer, vérifiez que le statut en bas à droite passe à "OK ", les données sont alors exportées vers le serveur


L'ensemble des fonctionnalités n'est bien sûr pas définitif, et le Goldpartner chez eCarUp profite automatiquement des futures fonctions. 

## Fichier XML de test

<Embed src="https://drive.google.com/file/d/1n96bHZNEQ66znDATheV5jT1Bjro4MF9h/preview" aspect="1.350" title="Drive, fichier XML Auto Export eCarUp.pdf" />

XML File Auto Export eCarUp.pdf
