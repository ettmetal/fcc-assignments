import FileSaver from 'file-saver';

function MarkdownExporter(props) {
    const save = () => {
        const blob = new Blob([props.markdown], {type:"text/markdown;charset=utf-8"});
        FileSaver.saveAs(blob, "markdown.md");
    }
    return (
        <>
            <button title="Save markdown" aria-label="Save markdown" onClick={save}>
                <i class="fa fa-solid fa-floppy-disk" aria-hidden="true" />
            </button>
        </>
    );
}

export default MarkdownExporter;