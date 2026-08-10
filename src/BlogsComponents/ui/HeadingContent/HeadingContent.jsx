import './HeadingContent.css';

function HeadingContent({ title, content }) {
    return (
        <>
            <h4 className="HeadingContent_heading my-3 pt-2 fS26">{title}</h4>
            <div className="HeadingContent_para mb-0">
                 {content}
            </div>
        </>
    )
}

export default HeadingContent;