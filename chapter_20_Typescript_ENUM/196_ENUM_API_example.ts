enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " → 200 OK");
}

sendRequest(HTTPMethod.GET, "/api/users"); // GET /api/users → 200 OK
sendRequest(HTTPMethod.POST, "/api/users"); // POST /api/users → 200 OK
sendRequest(HTTPMethod.DELETE, "/api/users/1"); // DELETE /api/users/1 → 200 OK