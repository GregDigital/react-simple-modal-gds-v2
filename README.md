# react-simple-modal-gds

Modal which is displayed after validation of a form. It includes opening, closing, and simple text parameters

### Download

https://www.npmjs.com/package/react-simple-modal-gds

### Installation

`npm i react-simple-modal-gds`

### Settings

```javascript
import Modal from "react-simple-modal-gds";

export default function App() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <Modal content="Employee Created !" handleChange={setOpen} value={open} />
      <button onClick={openModal}>button</button>
    </>
  );
}
```
