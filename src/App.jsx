import {Button} from "./Button.jsx"
import { Head } from "./h2.jsx"
import { Form } from "./Form.jsx"
import { OriginalLink } from "./OriginalLink.jsx";
import { FormBtn } from "./FormBtn.jsx";
import { Label } from "./Label.jsx"
import { InputText } from "./InputText.jsx"
import { Link } from "./Link.jsx"
let FormData=()=>{
  let handleSubmit=()=>{
    confirm("Are you sure you want to submit?");
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Head>URL Shortener</Head>
      <OriginalLink>
        <Label>Original Link: </Label>
        <InputText name="originalLink"/>
      </OriginalLink>
      <OriginalLink>
        <Label>Custom Name: </Label>
        <InputText name="shortName"/>
      </OriginalLink>
      <FormBtn>
        <Button type="submit">Shorten</Button>
      </FormBtn>
      <OriginalLink>
        <Label>Original Link: </Label>
        <Link />
      </OriginalLink>
      <OriginalLink>
        <Label>Shortened Link: </Label>
        <Link />
      </OriginalLink>
    </Form>
  )
}
export default FormData;