export function isAuth(request, reply, done) {
  const { authorization } = request.headers;

  if (authorization !== "token") {
    reply.status(403).send({ menssage: "Unauthorized." });
  }

  done();
}
