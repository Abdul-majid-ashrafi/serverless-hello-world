
module.exports.hello = (event, context) => {
context.succeed({"massege":"Hello World"})
}


// You can add more handlers here, and give reference them in serverless.yml
module.exports.world = (event, context) => {
  console.log("Hello World")
context.succeed("Good Bye World")
}
