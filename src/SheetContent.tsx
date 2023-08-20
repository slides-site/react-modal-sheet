import * as React from 'react';
import { m } from 'framer-motion';

import { SheetDraggableProps } from './types';
import { useSheetScrollerContext, useSheetContext } from './context';
import styles from './styles';

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, className = '', ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const sheetScrollerContext = useSheetScrollerContext();

    const dragProps =
      disableDrag || sheetScrollerContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    return (
      <m.div
        {...rest}
        ref={ref}
        className={`react-modal-sheet-content ${className}`}
        style={{ ...styles.content, ...style }}
        {...dragProps}
      >
        {children}
      </m.div>
    );
  }
);

export default SheetContent;
