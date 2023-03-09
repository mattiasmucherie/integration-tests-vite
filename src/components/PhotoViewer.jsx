export function PhotoViewer(props) {
  return (
    <div className="PhotoViewerWrapper">
      <img src={props.image.url} alt={props.image.title} />
    </div>
  );
}
