## DEMO: https://kudryavtsev.online
## This is a self-hosted about me page based on https://about.me
### I use Vue with router because it will be easy to add pages with no loading in future
### I use Firebase here because it's a quick and free method to deploy and add your domain with SSL

### Project setup
```
npm install
```
### If you dont have Firebase tools (you'll need to select only storage and hosting, directory for deployment - "dist"):
```
npm install -g firebase-tools

firebase init

```

### To deploy for production:
```
npm run build

firebase deploy
```

