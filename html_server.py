from http.server import HTTPServer, SimpleHTTPRequestHandler

# Define the port number you want to serve on
PORT = 3000

# Define the class for serving HTML files
class MyHttpRequestHandler(SimpleHTTPRequestHandler):
    # Override the do_GET method to handle requests
    def do_GET(self):
        # If the request is for the root URL "/", serve index.html
        if self.path == '/':
            self.path = '/file.html'
        return SimpleHTTPRequestHandler.do_GET(self)

# Create an HTTP server with your custom request handler
httpd = HTTPServer(('0.0.0.0', PORT), MyHttpRequestHandler)

# Print a message indicating the server is running
print(f"Server running on port {PORT}")

# Start the server
httpd.serve_forever()
