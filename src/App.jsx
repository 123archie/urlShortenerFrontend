import {Button} from "./Button.jsx"
import { Head } from "./h2.jsx"
import { Form } from "./Form.jsx"
import { OriginalLink } from "./OriginalLink.jsx";
import { FormBtn } from "./FormBtn.jsx";
import { Label } from "./Label.jsx"
import { InputText } from "./InputText.jsx"
let FormData=()=>{
  return (
    <Form>
      <Head>URL Shortener</Head>
      <OriginalLink>
        <Label htmlFor="originalLink">Original Link: </Label>
        <InputText name="originalLink"/>
      </OriginalLink>
      <OriginalLink>
        <Label htmlFor="shortenedLink">Shortened Link: </Label>
        <InputText name="targetLink" readOnly/>
      </OriginalLink>
      <FormBtn>
        <Button>Shorten</Button>
      </FormBtn>
      
    </Form>
  )
}
export default FormData;