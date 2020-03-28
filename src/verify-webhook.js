const verifyWebhook = (req, res) => {
  let VERIFY_TOKEN = 'yrgbhj8e9udvhibjnkoidu9hinklsmwedfirh8it54oejkfpldsgavseagae3985g89hegrndpok09ujefnerepovm';

  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
      res.sendStatus(403);
    }
};

module.exports = verifyWebhook;
