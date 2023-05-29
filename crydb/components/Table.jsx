import React from "react";
import { useState } from "react";
import DocumentModal from "./DocumentModal";
import { useUserContext } from "@app/context/UserContext";

const Table = () => {
  const { selectedCollection, tableData } = useUserContext();
  
  const [showDocument, setShowDocument] = useState(false);
  const [documentData, setDocumentData] = useState("");
  const handleClick = (e) => {
    setShowDocument(true);
    setDocumentData(e);
  }
  return (
    <div className="flex flex-col h-full p-8 gap-5">
      <div className="flex justify-center font-bold text-3xl">
        {selectedCollection}
      </div>
      <div className="flex flex-col gap-2">
        {tableData.map((element, i) => {
          let document = JSON.stringify(element);
          return (
            <div className="hover:bg-figma-lightpink cursor-pointer text-2xl" key={i} onClick={() => {
              handleClick(document)
            }}>
                {document} 
            </div>
          )
        })}
      </div>
      <div className="z-10 absolute">
        <DocumentModal visible={showDocument} setVisible={setShowDocument} jsonString={documentData} />
      </div>
    </div>
  )
};

export default Table