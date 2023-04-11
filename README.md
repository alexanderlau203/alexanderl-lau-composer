## Configuration

You need to add values the .env file. Copy the template.env and fill the values. Go to [EmailJS](https://dashboard.emailjs.com/) to get the IDs.

- The service ID can be found [here](https://dashboard.emailjs.com/admin)
- The template ID can be found [here](https://dashboard.emailjs.com/admin/templates)
- The public key (user ID) can be found [here](https://dashboard.emailjs.com/admin/account)

You may get an error when sending an email through EmailJS:

```
412 Gmail_API: Failed to send email or whatever.
```

You just need to disconnect and reconnect the [service](https://dashboard.emailjs.com/admin).

## Deployment

To push your changes to the live website:

1. Run the following command:

```
yarn deploy
```

2. Go to [Github](https://github.com/alexanderlau203/alexanderl-lau-composer/settings/pages) and replace the domain with `alexanderlaucomposer.com`.
3. Just wait a minute or two for the changes to kick in.
