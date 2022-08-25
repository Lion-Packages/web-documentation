import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Response() {
  return (
    <>
      <div className="mb-3">
        <h4>Response</h4>

        <p>
          The Response class implements different response functions on HTTP
          requests, the system internally initializes a{" "}
          <Badge bg={"secondary"}>response</Badge> constant to access the
          functions.
        </p>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "define('response', LionRequest\\Response::getInstance()); // (Response)"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>Example #1</h5>

        <CodeBlock
          language={"php"}
          content={"<?php\n\n" + "return response->success('message...');"}
        />

        <p>output</p>

        <CodeBlock
          language={"json"}
          content={
            "{\n" +
            '\t"status": "success",\n' +
            '\t"message": "message...",\n' +
            '\t"data": []\n' +
            "}"
          }
        />

        <p>equivalent to</p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return (object) ['status' => 'success', 'message' => 'message...'];"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>Example #2</h5>

        <CodeBlock
          language={"php"}
          content={"<?php\n\n" + "return response->error('message...');"}
        />

        <p>output</p>

        <CodeBlock
          language={"json"}
          content={
            "{\n" +
            '\t"status": "error",\n' +
            '\t"message": "message...",\n' +
            '\t"data": []\n' +
            "}"
          }
        />

        <p>equivalent to</p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return (object) ['status' => 'error', 'message' => 'message...'];"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>Example #3</h5>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "return response->response('my_custom_response', 'message...');"
          }
        />

        <p>output</p>

        <CodeBlock
          language={"json"}
          content={
            "{\n" +
            '\t"status": "my_custom_response",\n' +
            '\t"message": "message...",\n' +
            '\t"data": []\n' +
            "}"
          }
        />

        <p>equivalent to</p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return (object) ['status' => 'my_custom_response', 'message' => 'message...'];"
          }
        />
      </div>
    </>
  );
}

export default Response;
