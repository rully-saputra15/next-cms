import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
} from '@/components/ui/table';

function TableSection() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Published Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total Views</TableHead>
          <TableHead className="text-right">Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>001</TableCell>
          <TableCell>2021-09-01</TableCell>
          <TableCell>
            <Badge variant="secondary">Published</Badge>
          </TableCell>
          <TableCell className="font-bold">20.000</TableCell>
          <TableCell className="text-right">Alice in Wonderland</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>002</TableCell>
          <TableCell>2021-09-02</TableCell>
          <TableCell>
            <Badge variant="secondary">Published</Badge>
          </TableCell>
          <TableCell className="font-bold">50.000</TableCell>
          <TableCell className="text-right">Harry Potter</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableSection;
