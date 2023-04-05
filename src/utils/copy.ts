import { toast } from 'react-hot-toast';

export default async function copyToClipboard(text: string, msg: string) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${msg} copied to clipboard`);
    } catch (err) {
      toast.error('Error copying to clipboard');
    }
  } else {
    // fall back to other methods
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
