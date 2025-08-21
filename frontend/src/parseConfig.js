import Parse from "parse/dist/parse.min.js";

// Initialize Parse
Parse.initialize(
  "HiKzrytFZrvOTRpDR8yd7vk01ow3DHxu7tebrsEQ",  // App ID
  "K6g4SdldGH8cy8HU8LLYMCg3mfDsbosKAwpdYafV"   // JavaScript Key
);
Parse.serverURL = "https://parseapi.back4app.com";

export default Parse;
