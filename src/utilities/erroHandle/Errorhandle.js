export const errorHandle = (error, fileName, feature, errorMessage) => {
  console.info({
    error: error,
    "File : ": fileName,
    "Feature ": feature,
    "Message ": errorMessage,
  });
};
