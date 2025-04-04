const credentialsBase64 = process.env.FIREBASE_CREDENTIALS_BASE64;

const firebaseCredentials = JSON.parse(
    Buffer.from(credentialsBase64, "base64").toString("utf8")
  );
  
  console.log("Firebase email:", firebaseCredentials.client_email);
  