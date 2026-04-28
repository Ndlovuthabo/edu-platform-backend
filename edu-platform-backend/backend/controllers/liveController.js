const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const appId = process.env.AGORA_APP_ID;
const appCertificate = process.env.AGORA_CERTIFICATE;

exports.generateToken = (req, res) => {
  const channelName = req.params.channel;
  const uid = 0;

  const role = RtcRole.PUBLISHER;

  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  const token = RtcTokenBuilder.buildTokenWithUid(
    appId,
    appCertificate,
    channelName,
    uid,
    role,
    privilegeExpiredTs
  );

  res.json({ token });
};