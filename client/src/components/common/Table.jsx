import * as React from "react";
import "./styles/Table.css";
const Table = ({ className, children }) => <table className={`table ${className}`}>{children}</table>
const TableHeader = ({ className, children }) => <thead className={`table-header ${className}`}>{children}</thead>;
const TableBody = ({ className, children }) => <tbody className={`table-body ${className}`}>{children}</tbody>
const TableFooter = ({ className, children }) => <tfoot className={`table-footer ${className}`}>{children}</tfoot>
const TableRow = ({ className, children }) => <tr className={`table-row ${className}`}>{children}</tr>
const TableHead = ({ className, children }) => <th className={`table-head ${className}`}>{children}</th>
const TableCell = ({ className, children }) => <td className={`table-cell ${className}`}>{children}</td>
const TableCaption = ({ className, children }) => <caption className={`table-caption ${className}`}>{children}</caption>

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };