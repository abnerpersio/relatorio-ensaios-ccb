import { useCallback } from 'react';
import { toast } from 'sonner';

type Params = {
  text: string;
  message: string;
};

export function useCopyText() {
  const handleCopy = useCallback((params: Params) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(params.text);
      toast.success(params.message);
    }
  }, []);

  return { handleCopy };
}
