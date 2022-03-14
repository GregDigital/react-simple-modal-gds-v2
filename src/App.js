import React, { useState } from "react";
import Modal from "./lib/Modal";

export default function App() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal content="Employee Created !" handleChange={setOpen} value={open} />
      <button onClick={openModal}>button</button>
    </>
  );
}
