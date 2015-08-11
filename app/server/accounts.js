/*
ServiceConfiguration.configurations.remove({
	service: 'facebook'
});

ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "1633085493598110",
	secret: "38712287b63df0452c4b46ee4e3b9959"
});

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
	service: "twitter"
});

Accounts.loginServiceConfiguration.insert({
	service: "twitter",
	consumerKey: "yourConsumerKey",
	secret: "yourSecret"
});

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
	service: "google"
});
Accounts.loginServiceConfiguration.insert({
	service: "google",
	clientId: "yourClientId",
	secret: "yourSecret"
});*/