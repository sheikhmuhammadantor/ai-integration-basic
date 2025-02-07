// import marked from 'marked'; 
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

// eslint-disable-next-line react/prop-types
function MarkDownComponent({ markdownText }) {
    const renderedHTML = { __html: marked.parse(markdownText) };

    return (
        <div dangerouslySetInnerHTML={renderedHTML} />
    );
}

export default MarkDownComponent;
