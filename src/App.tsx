import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { toast } from "./components/ui/use-toast";

export default function App() {
  const [images, uploadImages] = useState<Array<string>>([]);
  const [file, setFile] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  function handleFile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleSubmit() {
    // toast({
    //   description: "upload"
    // })
    // changeDialog()
    if(file){
      var newImages = images
      newImages.push(file)
      uploadImages(newImages)
      changeDialog()
    } else {
      toast({
        title: "No file selected"
      })
    }
  }

  function changeDialog(){
    setOpen(!open)
    setFile(undefined)
  }

  return (
    <div>
      <div aria-label="header" className="container sticky top-2 bg-white/75">
        <h1 className='text-3xl font-bold underline float-start'>Photo Gallery</h1>
        <Dialog open={open} onOpenChange={changeDialog}>
          <DialogTrigger asChild className="float-end">
            <Button>
              Upload Image
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add Image:</DialogTitle>
            <input type="file" onChange={handleFile} />
            <img src={file} width="75%" height="auto"/>
            <Button onClick={handleSubmit}> Upload </Button>
          </DialogContent>
        </Dialog>
      </div>
      <div aria-label="photo gallery" className="container flex flex-initial flex-wrap justify-center pt-3">
        {images?.map((file) => <img src={file} className="h-[300px] w-auto p-2"/>)}
      </div>
    </div>
  );
}