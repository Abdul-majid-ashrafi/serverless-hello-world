
# Starting serverless:

I’m going to assume you have an AWS account and credentials. If not, handle that now.
You have to create a folder in your users directory in  C-drive  and you have to create a folder called .aws
then open git bash/cmd and run below command

1. ```touch credentials``` (for git bash)
2. ```echo  credentials``` (for cmd)
3. then copy and paste this 
```
[default]

aws_access_key_id=<key>

aws_secret_access_key=<key>
```
> you can find these keys under you aws account.
Dashboard -> IAM -> users -> press create new users -> Enter user name -> press create  ->
press Show User Security Credentials get your key and download

You have set your aws configrations

Now you need to install these things.

### Installing Node.js

> First thing you need to do is to install Node.js on your machine.
Go to the official https://nodejs.org/en website, download and follow the installation instructions.
 **Note: Serverless runs on Node v4 or higher** 
You can verify runnning ``` node --version ``` in your terminal. 

### Installing Serverless

> Serverless can be easily installed via npm which was installed alongside Node.js.
Open up a terminal and type ```npm install -g serverless``` to install Serverless.
When installation process is done you can verify running ```serverless --version ``` in your terminal.

### Creating a service
 
> To create a service with a nodejs runtime running on aws just pass the aws-nodejs template to the create command: ```serverless create --template aws-nodejs --path my-service``` 
(my-service is referring to your folder name)
This will create a service and generate serverless.yml and handler.js and event.js files in the current working directory my-service.


#### cd my-service (Change into your service directory)

### Open the service inside your editor 


#### You'll see the following files in your working directory:

+	serverless.yml
+	handler.js
+	event.json


#### handler.js:
> This file includes a function skeleton which returns a simple message. 
The function definition in serverless.yml will point to this handler.js file and the function inside of it.
Check out the code inside of the handler.js so you can play around with it once we've deployed the service.
and you can add more handlers  and give reference them in serverless.yml

```
handler.js

module.exports.hello1 = (event, context, cb) => {
cb(null, { message: 'Hello World', event });
};

<--or-->

module.exports.hello2 = (event, context) => {
context.succeed({ message: 'Good Bye World', event });
};

```
#### serverless.yml: 
> Each serverless service configuration is managed in this file 
You can define one or multiple functions in the service,
Defines the provider the service will be deployed to (and the runtime if provided),
Defines events that trigger each function to execute (e.g. HTTP requests),
Events listed in the events section may automatically create the resources required for the event upon deployment,
Invokes your functions which created into handler.js

```
serverless.yml
<--provider-->

service: my-service

provider:
  name: aws
  runtime: nodejs4.3
  
  
  <--function-->
  
  functions:
    hello1:
      handler: handler.hello1
      events:
      - http:
          path: hello1
          method: get
          
    hello2:
      handler: handler.hello2
      events:
      - http:
          path: hello2
          method: get          
```

#### event.json: 
> This file contains event data

```
 event.json
 
{
  "key3": "value3",
  "key2": "value2",
  "key1": "value1"
}
```

### Serverless deploy  
 
 > Now you can deplouy your function on aws account 
 Open up a terminal and typ serverless deploy  
 After running serverless deploy -v you should see the progress of the deployment process in your terminal.
 A success message will tell you once everything is deployed and ready to  use!
