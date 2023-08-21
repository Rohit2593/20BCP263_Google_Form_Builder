import { Fragment } from "react";
import FormBuilder from "@components/FormBuilder";
import "react-nestable/dist/styles/index.css";
import { Button } from "@material-ui/core";
const App = () => {
  return (
    <Fragment>
        <FormBuilder />
        <Button>Submit</>
    </Fragment>
  );
};

export default App;
