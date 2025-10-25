export function verifyPrivateKey(req, res, next) {
  const clientKey = req.headers["x-api-key"];
  const privateKey = process.env.PRIVATE_KEY;

  if (!privateKey) {
    console.error("PRIVATE_KEY is not set in environment variables.");
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  if (!clientKey || clientKey !== privateKey) {
    return res.status(403).json({ error: "Forbidden: invalid API key" });
  }

  next();
}
