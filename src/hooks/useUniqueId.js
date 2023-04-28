import { useRef } from 'react';
import uuid from '~utils/uuid';

function useUniqueId() {
  const refId = useRef('id-' + uuid());

  return refId.current;
}

export default useUniqueId;
