const { AuthenticationClient, Scopes } = require("@aps_sdk/authentication");
const { OssClient, Region, PolicyKey } = require("@aps_sdk/oss");
const {
  ModelDerivativeClient,
  View,
  OutputType,
} = require("@aps_sdk/model-derivative");
const {
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_BUCKET,
} = require("../config.js");

const authenticationClient = new AuthenticationClient();
const ossClient = new OssClient();
const modelDerivativeClient = new ModelDerivativeClient();

const service = (module.exports = {});

async function getInternalToken() {
  const credentials = await authenticationClient.getTwoLeggedToken(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    [
      Scopes.DataRead,
      Scopes.DataCreate,
      Scopes.DataWrite,
      Scopes.BucketCreate,
      Scopes.BucketRead,
    ]
  );
  return credentials.access_token;
}

service.getViewerToken = async () => {
  return await authenticationClient.getTwoLeggedToken(
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    [Scopes.ViewablesRead]
  );
};
