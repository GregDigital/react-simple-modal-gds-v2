# react-simple-modal-gds

[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)  
[![Maintainability](https://api.codeclimate.com/v1/badges/3e054716a72e537b3bf4/maintainability)](https://codeclimate.com/github/ZinedineMess/react-top-modal/maintainability)

Modal which is displayed after validation of a form. It includes opening, closing, and simple text parameters

### Installation

- using NPM  
  `$ npm install react-simple-modal-gds`

Link to access the package [here](https://www.npmjs.com/package/react-simple-modal-gds)

### Usage

Import Modal component in your React components:

```js
import Modal from "react-simple-modal-gds";
```

### Props

To use the component you need :

| Props        |  Type  | Required | Default |                                              Description |
| :----------- | :----: | :------: | :-----: | -------------------------------------------------------: |
| handleChange | Object | Required |    -    | handleChange() is used to set a new state for the entry. |
| value        |  Bool  | Required |  False  |                    State allows you to display the modal |
| content      | String | Required |    -    |                          add text when the modal appears |

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

## Auteur

- [GregDigital](https://github.com/GregDigital)
