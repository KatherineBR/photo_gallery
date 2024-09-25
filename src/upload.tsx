// import React from "react";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "./components/ui/dialog";
  import { useState } from "react";
  import { Button } from "./components/ui/button";
  
  export default function Upload() {
    const [file, setFile] = useState<string>();
    const [open, setOpen] = useState<boolean>(false);
  
    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="px-4 py-2 rounded hover:bg-blue-600">
            Upload Image
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Add Image:</DialogTitle>
          <input type="file" onChange={handleChange} />
          <img src={file} />
        </DialogContent>
      </Dialog>
    );
  }
  