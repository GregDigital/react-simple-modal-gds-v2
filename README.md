# react-simple-modal-gds

Modal which is displayed after validation of a form. It includes opening, closing, and simple text parameters

### Download

https://www.npmjs.com/package/react-simple-modal-gds

### Installation

`npm i react-simple-modal-gds`

### Usage

To use the plugin, import it in your React component.
It needs 3 props to work: `handleChange`, `content` and `value`

```javascript
import Modal from "react-simple-modal-gds";

const MyComponent = () => {
  <Modal handleChange={labels} value={trueOrFalse} content={myText} />;
};
```
