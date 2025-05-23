import * as React from 'react';
import { cn } from '@/lib/utils';

const StyleH1 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn(
            'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
            className,
        )}
        {...props}
    />
));
StyleH1.displayName = 'StyleH1';

const StyleH2 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
            className,
        )}
        {...props}
    />
));
StyleH2.displayName = 'StyleH2';

const StyleH3 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
            className,
        )}
        {...props}
    />
));
StyleH3.displayName = 'StyleH3';

const StyleH4 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h4
        ref={ref}
        className={cn(
            'scroll-m-20 text-xl font-semibold tracking-tight',
            className,
        )}
        {...props}
    />
));
StyleH4.displayName = 'StyleH4';

const StyleP = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
        {...props}
    />
));
StyleP.displayName = 'StyleP';

const StyleBlockquote = React.forwardRef<
    HTMLQuoteElement,
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
    <blockquote
        ref={ref}
        className={cn('mt-6 border-l-2 pl-6 italic', className)}
        {...props}
    />
));
StyleBlockquote.displayName = 'StyleBlockquote';

const StyleList = React.forwardRef<
    HTMLUListElement,
    React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
        {...props}
    />
));
StyleList.displayName = 'StyleList';

const StyleListItem = React.forwardRef<
    HTMLLIElement,
    React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn(className)} {...props} />
));
StyleListItem.displayName = 'StyleListItem';

const StyleTable = React.forwardRef<
    HTMLTableElement,
    React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <table ref={ref} className={cn('w-full', className)} {...props} />
));
StyleTable.displayName = 'StyleTable';

const StyleTableHead = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn(className)} {...props} />
));
StyleTableHead.displayName = 'StyleTableHead';

const StyleTableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn(className)} {...props} />
));
StyleTableBody.displayName = 'StyleTableBody';

const StyleTableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn('m-0 border-t p-0 even:bg-muted', className)}
        {...props}
    />
));
StyleTableRow.displayName = 'StyleTableRow';

const StyleTableHeadCell = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
            className,
        )}
        {...props}
    />
));
StyleTableHeadCell.displayName = 'StyleTableHeadCell';

const StyleTableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
            className,
        )}
        {...props}
    />
));
StyleTableCell.displayName = 'StyleTableCell';

const StyleLink = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
    <a
        ref={ref}
        className={cn(
            'font-medium text-primary underline underline-offset-4',
            className,
        )}
        {...props}
    />
));
StyleLink.displayName = 'StyleLink';

export {
    StyleH1,
    StyleH2,
    StyleH3,
    StyleH4,
    StyleP,
    StyleBlockquote,
    StyleList,
    StyleListItem,
    StyleTable,
    StyleTableHead,
    StyleTableBody,
    StyleTableRow,
    StyleTableHeadCell,
    StyleTableCell,
    StyleLink,
};
