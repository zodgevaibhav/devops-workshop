To create a new React project using Vite with JavaScript, you can use the following commands:

```sh
# Navigate to your desired directory
cd /path/to/your/directory

# Create a new Vite project
npm create vite@latest my-react-app --template react

# Navigate into the project directory
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Replace `/path/to/your/directory` with the actual path where you want to create the project.


To run your React app using Docker on the host network, you can use the following command:

```sh
docker run --rm -it --network host IMAGE_NAME



mvn clean install docker:build

docker run --rm -p 8080:8080 authentication-service:latest