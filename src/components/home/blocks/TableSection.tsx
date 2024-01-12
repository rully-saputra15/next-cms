import {
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableBody,
  TableCell
} from '@/components/ui/table';

const TableSection = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>2021-09-01</TableCell>
          <TableCell className="text-right">Alice in Wonderland</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>2021-09-02</TableCell>
          <TableCell className="text-right">Harry Potter</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableSection;
