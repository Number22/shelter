import { MutableRefObject, useEffect, useRef } from 'react';

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
};

const addRootElement = (rootElem: Node) => {
  if (document.body.lastElementChild) {
    document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
  }
};

const getRootElem = (rootElemRef: MutableRefObject<HTMLDivElement>) => {
  if (rootElemRef && !rootElemRef.current && typeof document !== 'undefined') {
    rootElemRef.current = document.createElement('div');
  }

  return rootElemRef.current;
};

const usePortal = (id: string) => {
  const rootElemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);
    const current = rootElemRef.current;

    if (!existingParent) {
      addRootElement(parentElem);
    }

    if (current) {
      parentElem.appendChild(current);
    }

    return () => {
      if (current) {
        current.remove();
      }

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  return getRootElem(rootElemRef as MutableRefObject<HTMLDivElement>);
};

export default usePortal;
