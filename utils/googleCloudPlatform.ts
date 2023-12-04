export const getGCPCredentials = () => {
  if (process.env.GOOGLE_SERVICE_KEY) {
    const credential = JSON.parse(
      Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
    );
    return {
      projectId: credential.project_id,
      credentials: {
        client_email: credential.client_email,
        private_key: credential.private_key,
      },
    };
  } else {
    return {};
  }
};
