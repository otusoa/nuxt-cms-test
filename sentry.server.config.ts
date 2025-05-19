import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://7df1e6e40b04e10282afd1a17db70468@o4509352326791168.ingest.us.sentry.io/4509352328167424",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
