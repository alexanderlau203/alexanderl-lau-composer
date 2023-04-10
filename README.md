# Configuration

You need to add values the .env file. Copy the template.env and fill the values. Go to [EmailJS](https://dashboard.emailjs.com/) to get the IDs.

- The service ID can be found [here](https://dashboard.emailjs.com/admin)
- The template ID can be found [here](https://dashboard.emailjs.com/admin/templates)
- The public key (user ID) can be found [here](https://dashboard.emailjs.com/admin/account)

You may get an error when sending an email through EmailJS:

```
412 Gmail_API: Failed to send email or whatever.
```

You just need to disconnect and reconnect the [service](https://dashboard.emailjs.com/admin).
