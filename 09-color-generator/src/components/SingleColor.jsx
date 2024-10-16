import { toast } from 'react-toastify';

function SingleColor({ color, index }) {
  const { hex, weight, type } = color;

  async function saveToClipBoard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (err) {
        toast.error('Failed to copy to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  }
  return (
    <article
      onClick={saveToClipBoard}
      className={`color ${type === 'shade' ? 'color-light' : ''}`}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}
export default SingleColor;
