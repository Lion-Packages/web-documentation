export default function v1_CMMD() {
  return [
    {
      group: "AVAILABLE COMMANDS",
      childs: [
        {
          name: "info",
          desc: "Command to display basic project information and libraries",
          args: [],
        },
        {
          name: "serve",
          desc: "Created command to start server locally",
          args: [
            {
              name: "--port",
              arg: false,
              optional: true,
              desc: "Do you want to set your own port?",
            },
            {
              name: "-p",
              arg: false,
              optional: true,
              desc: "Do you want to set your own port?",
            },
            {
              name: "--host",
              arg: false,
              optional: true,
              desc: "Do you want to set your own host?",
            },
            {
              name: "-s",
              arg: false,
              optional: true,
              desc: "Do you want to set your own host?",
            },
          ],
        },
        {
          name: "test",
          desc: "Command to create run unit tests",
          args: [],
        },
      ],
    },
    {
      group: "AES",
      childs: [
        {
          name: "aes:new",
          desc: "Command to create KEY and IV keys for AES",
          args: [],
        },
      ],
    },
    {
      group: "DB",
      childs: [
        {
          name: "db:all-capsules",
          desc: "Command required for the creation of all new Capsules available from the database",
          args: [],
        },
        {
          name: "db:all-crud",
          desc: "Command to generate all the controllers and models of the entities with their respective CRUD functions",
          args: [],
        },
        {
          name: "db:all-rules",
          desc: "Command to generate all rules for all entities",
          args: [],
        },
        {
          name: "db:capsule",
          desc: "Command required for the creation of new Capsules",
          args: [
            {
              name: "entity",
              arg: true,
              optional: false,
              desc: "Entity name",
            },
            {
              name: "--connection",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
            {
              name: "-c",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
          ],
        },
        {
          name: "db:columns",
          desc: "Command to read the columns of an entity",
          args: [
            {
              name: "entity",
              arg: true,
              optional: false,
              desc: "Entity name",
            },
            {
              name: "--connection",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
            {
              name: "-c",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
          ],
        },
        {
          name: "db:crud",
          desc: "Command required for the creation of new Capsules",
          args: [
            {
              name: "entity",
              arg: true,
              optional: false,
              desc: "Entity name",
            },
            {
              name: "--connection",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
            {
              name: "-c",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
          ],
        },
        {
          name: "db:export",
          desc: "Command to export copies of databases established in the config",
          args: [
            {
              name: "connection",
              arg: true,
              optional: false,
              desc: "Do you want to use a specific connection?",
            },
          ],
        },
        {
          name: "db:factory",
          desc: "Command required for the creation of new factories",
          args: [
            {
              name: "factory",
              arg: true,
              optional: true,
              desc: (
                <>
                  Factory name{" "}
                  <label className="text-lion-orange">
                    {"[default: 'ExampleFactory']"}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "db:rules",
          desc: "Command required for the creation of new factories",
          args: [
            {
              name: "entity",
              arg: true,
              optional: false,
              desc: "Entity name",
            },
            {
              name: "--connection",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
            {
              name: "-c",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
          ],
        },
        {
          name: "db:seed",
          desc: "Command required for creating new seeds",
          args: [
            {
              name: "seed",
              arg: true,
              optional: true,
              desc: (
                <>
                  Name or namespace of the Seed{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleSeed"]'}
                  </label>
                </>
              ),
            },
            {
              name: "--run",
              arg: false,
              optional: true,
              desc: "Do you want to run the seeder?",
            },
            {
              name: "-r",
              arg: false,
              optional: true,
              desc: "Do you want to run the seeder?",
            },
          ],
        },
        {
          name: "db:select",
          desc: "Command required to display available database connections",
          args: [
            {
              name: "entity",
              arg: true,
              optional: false,
              desc: "Entity name",
            },
            {
              name: "--columns",
              arg: false,
              optional: true,
              desc: (
                <>
                  What columns should you read?{" "}
                  <label className="text-lion-orange">
                    {"(multiple values allowed)"}
                  </label>
                </>
              ),
            },
            {
              name: "-l",
              arg: false,
              optional: true,
              desc: (
                <>
                  What columns should you read?{" "}
                  <label className="text-lion-orange">
                    {"(multiple values allowed)"}
                  </label>
                </>
              ),
            },
            {
              name: "--rows",
              arg: false,
              optional: true,
              desc: "Do you want to specify the number of rows?",
            },
            {
              name: "-r",
              arg: false,
              optional: true,
              desc: "Do you want to specify the number of rows?",
            },
            {
              name: "--connection",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
            {
              name: "-c",
              arg: false,
              optional: true,
              desc: "Do you want to use a specific connection?",
            },
          ],
        },
        {
          name: "db:show",
          desc: "Command required to display available database connections",
          args: [],
        },
      ],
    },
    {
      group: "EMAIL",
      childs: [
        {
          name: "email:show",
          desc: "Command required to display available email accounts",
          args: [],
        },
      ],
    },
    {
      group: "MIGRATE",
      childs: [
        {
          name: "migrate:fresh",
          desc: "Drop all tables and re-run all migrations",
          args: [],
        },
        {
          name: "migrate:generate",
          desc: "Command required to generate migrations of an existing database",
          args: [
            {
              name: "--limit",
              arg: false,
              optional: true,
              desc: (
                <>
                  Do you want to set a query limit?{" "}
                  <label className="text-lion-orange">
                    {"[default: 1200]"}
                  </label>
                </>
              ),
            },
            {
              name: "-l",
              arg: false,
              optional: true,
              desc: (
                <>
                  Do you want to set a query limit?{" "}
                  <label className="text-lion-orange">
                    {"[default: 1200]"}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "migrate:new",
          desc: "Command to generate a new migration",
          args: [
            {
              name: "migration",
              arg: true,
              optional: false,
              desc: "Migration name",
            },
            {
              name: "connection",
              arg: true,
              optional: false,
              desc: "Connection name",
            },
            {
              name: "--type",
              arg: false,
              optional: true,
              desc: (
                <>
                  Type of migration{" "}
                  <label className="text-lion-orange">
                    {'[default: "table"]'}
                  </label>
                </>
              ),
            },
            {
              name: "-t",
              arg: false,
              optional: true,
              desc: (
                <>
                  Type of migration{" "}
                  <label className="text-lion-orange">
                    {'[default: "table"]'}
                  </label>
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      group: "NEW",
      childs: [
        {
          name: "new:capsule",
          desc: "Command required for creating new custom capsules",
          args: [
            {
              name: "capsule",
              arg: true,
              optional: true,
              desc: (
                <>
                  Capsule name{" "}
                  <label className="text-lion-orange">
                    {'[default: "Example"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:command",
          desc: "Command required for the creation of new Commands",
          args: [
            {
              name: "new-command",
              arg: true,
              optional: true,
              desc: (
                <>
                  Command name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleCommand"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:controller",
          desc: "Command required for the creation of new Controllers",
          args: [
            {
              name: "controller",
              arg: true,
              optional: true,
              desc: (
                <>
                  Controller name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleController"]'}
                  </label>
                </>
              ),
            },
            {
              name: "--model",
              arg: false,
              optional: true,
              desc: "Do you want to create the model?",
            },
            {
              name: "-m",
              arg: false,
              optional: true,
              desc: "Do you want to create the model?",
            },
          ],
        },
        {
          name: "new:enum",
          desc: "Command required for creating new enum",
          args: [
            {
              name: "enum",
              arg: true,
              optional: true,
              desc: (
                <>
                  Enum name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleEnum"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:interface",
          desc: "Command required for interface creation",
          args: [
            {
              name: "interface",
              arg: true,
              optional: true,
              desc: (
                <>
                  Interface name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleInterface"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:middleware",
          desc: "Command required for the creation of new Middleware",
          args: [
            {
              name: "middleware",
              arg: true,
              optional: true,
              desc: (
                <>
                  Middleware name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleMiddleware"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:model",
          desc: "Command required for the creation of new Models",
          args: [
            {
              name: "model",
              arg: true,
              optional: true,
              desc: (
                <>
                  Model name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleModel"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:rule",
          desc: "Command required for rule creation",
          args: [
            {
              name: "rule",
              arg: true,
              optional: true,
              desc: (
                <>
                  Rule name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleRule"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:test",
          desc: "Command to create run unit tests",
          args: [
            {
              name: "test",
              arg: true,
              optional: true,
              desc: (
                <>
                  Test name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleTest"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "new:trait",
          desc: "Command required for trait creation",
          args: [
            {
              name: "trait",
              arg: true,
              optional: true,
              desc: (
                <>
                  Trait name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleTrait"]'}
                  </label>
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      group: "NPM",
      childs: [
        {
          name: "npm:build",
          desc: "Command to generate dist for a vite project",
          args: [
            {
              name: "project",
              arg: true,
              optional: false,
              desc: "Project name",
            },
          ],
        },
        {
          name: "npm:init",
          desc: "Command to create Javascript projects with Vite.JS (Vanilla/Vue/React/Preact/Lit/Svelte/Solid/Qwik)",
          args: [
            {
              name: "project",
              arg: true,
              optional: true,
              desc: (
                <>
                  Project name{" "}
                  <label className="text-lion-orange">
                    {'[default: "example"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "npm:install",
          desc: "Command to install dependencies with npm for a certain vite project",
          args: [
            {
              name: "project",
              arg: true,
              optional: false,
              desc: "Project name",
            },
            {
              name: "packages",
              arg: true,
              optional: true,
              desc: (
                <>
                  Package name{" "}
                  <label className="text-lion-orange">{'[default: ""]'}</label>
                </>
              ),
            },
          ],
        },
        {
          name: "npm:logs",
          desc: "Command to generate the logs of all vite projects",
          args: [],
        },
        {
          name: "npm:uninstall",
          desc: "Command to uninstall dependencies with npm from a vite project",
          args: [
            {
              name: "project",
              arg: true,
              optional: false,
              desc: "Project name",
            },
            {
              name: "packages",
              arg: true,
              optional: true,
              desc: "Package name",
            },
          ],
        },
        {
          name: "npm:update",
          desc: "Command to install dependencies with npm for a vite project",
          args: [
            {
              name: "project",
              arg: true,
              optional: false,
              desc: "Project name",
            },
          ],
        },
      ],
    },
    {
      group: "ROUTE",
      childs: [
        {
          name: "route:list",
          desc: "Command to view a list of available web routes",
          args: [],
        },
        {
          name: "route:postman",
          desc: "Command to export a collection of requests to postman",
          args: [],
        },
      ],
    },
    {
      group: "RSA",
      childs: [
        {
          name: "rsa:new",
          desc: "Command to create public and private keys with RSA",
          args: [
            {
              name: "--path",
              arg: false,
              optional: true,
              desc: "Save to a specific path?",
            },
            {
              name: "-p",
              arg: false,
              optional: true,
              desc: "Save to a specific path?",
            },
          ],
        },
      ],
    },
    {
      group: "SH",
      childs: [
        {
          name: "sh:new",
          desc: "Command to create files with extension sh",
          args: [
            {
              name: "sh",
              arg: true,
              optional: true,
              desc: (
                <>
                  SH name{" "}
                  <label className="text-lion-orange">
                    {'[default: "Example"]'}
                  </label>
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      group: "SOCKET",
      childs: [
        {
          name: "socket:logs",
          desc: "Command to generate the logs of all resources",
          args: [],
        },
        {
          name: "socket:new",
          desc: "Command required for creating new WebSockets",
          args: [
            {
              name: "socket",
              arg: true,
              optional: true,
              desc: (
                <>
                  SH name{" "}
                  <label className="text-lion-orange">
                    {'[default: "ExampleSocket"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "socket:serve",
          desc: "Command required to run WebSockets",
          args: [
            {
              name: "socket",
              arg: true,
              optional: false,
              desc: "Socket name",
            },
          ],
        },
      ],
    },
    {
      group: "TOKEN",
      childs: [
        {
          name: "token:jwt",
          desc: "Created command to generate JWT token",
          args: [
            {
              name: "session",
              arg: true,
              optional: true,
              desc: (
                <>
                  Session must be true or false{" "}
                  <label className="text-lion-orange">
                    {'[default: "true"]'}
                  </label>
                </>
              ),
            },
            {
              name: "--path",
              arg: false,
              optional: true,
              desc: "Save to a specific path?",
            },
            {
              name: "-p",
              arg: false,
              optional: true,
              desc: "Save to a specific path?",
            },
          ],
        },
      ],
    },
  ];
}
