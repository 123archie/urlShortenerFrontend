import {Button} from "./Button.jsx"
import { Head } from "./h2.jsx"
let FormData=()=>{
  return (
    <form>
      <Head>URL Shortener</Head>
      <label htmlFor="originalLink">Original Link: </label>
      <input name="originalLink" id="originalLink"/>
      <label htmlFor="shortenedLink">Shortened Link: </label>
      <input name="targetLink" id="targetLink" readOnly></input>
      <Button>Shorten</Button>
    </form>
  )
}
export default FormData;