import { Editor } from "./editor";
interface DocumentIdPageProps{
    params: {documentId: string};
}

const DocumentIdPage = ({params}: DocumentIdPageProps)=>{
    const {documentId}=params;
    return (
        <div className="min-h-screen bg-[#FAFBFD]">  
            <Editor/>
        </div>
    )
}

export default DocumentIdPage;